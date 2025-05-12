/**
 * @fileoverview 📋 Sleek SvelteKit Logger
 * 
 * A stylish, feature-rich logger for SvelteKit applications that works 
 * seamlessly in both browser and server environments with beautiful formatting.
 * 
 * Features:
 * - 🎨 Beautiful, colorized output with clear visual hierarchy
 * - 🔄 Works in both browser and Node.js environments
 * - 📊 Multiple log levels with sensible formatting
 * - 🏷️ Component and context labeling
 * - 📁 Optional file logging (Node only)
 * - ⚙️ Fully customizable formatting and transports
 * - 👶 Child loggers with metadata inheritance
 * 
 * @typedef {'trace'|'debug'|'info'|'warn'|'error'|'fatal'|'silent'} LogLevel
 * 
 * @typedef {Object} LoggerOptions
 * @property {LogLevel} [minLevel='info'] - Minimum log level to display
 * @property {boolean} [colorize=true] - Whether to colorize console output
 * @property {boolean} [timestamp=true] - Whether to include timestamps
 * @property {boolean} [showLevel=true] - Whether to show the log level  
 * @property {boolean} [showBadges=true] - Whether to show emoji badges for levels
 * @property {boolean} [prettyPrint=true] - Whether to pretty-print objects
 * @property {boolean} [fileLogging=false] - Whether to log to files (Node environment only)
 * @property {string} [logDirectory='logs'] - Directory for log files
 * @property {Object} [meta={}] - Additional metadata to include with all logs
 * @property {string} [separator='|'] - Character to separate log parts
 * @property {Function} [formatter=null] - Custom formatter function
 * @property {Object} [transport=null] - Custom transport for logs (e.g., to a service)
 */

/**
 * Determines if code is running in a browser environment
 * @returns {boolean}
 */
const isBrowser = () => {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  };
  
  /**
   * Get current environment (development, production, test)
   * @returns {string}
   */
  const getEnvironment = () => {
    if (isBrowser()) {
      // SvelteKit/Vite uses import.meta.env.MODE
      return import.meta.env?.MODE || 'development';
    } else {
      // Node.js uses process.env.NODE_ENV
      return process.env.NODE_ENV || 'development';
    }
  };
  
  /**
   * Numeric values for log levels for comparison
   * @type {Object.<LogLevel, number>}
   */
  const LOG_LEVEL_VALUES = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    fatal: 5,
    silent: 6
  };
  
  /**
   * ANSI color codes for terminal coloring
   * @type {Object.<string, string>}
   */
  const COLORS = {
    reset: '\x1b[0m',
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    gray: '\x1b[90m',
    brightRed: '\x1b[91m',
    brightGreen: '\x1b[92m',
    brightYellow: '\x1b[93m',
    brightBlue: '\x1b[94m',
    brightMagenta: '\x1b[95m',
    brightCyan: '\x1b[96m',
    brightWhite: '\x1b[97m',
    // Background colors
    bgBlack: '\x1b[40m',
    bgRed: '\x1b[41m',
    bgGreen: '\x1b[42m',
    bgYellow: '\x1b[43m',
    bgBlue: '\x1b[44m',
    bgMagenta: '\x1b[45m',
    bgCyan: '\x1b[46m',
    bgWhite: '\x1b[47m',
    // Text decorations
    bold: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    underline: '\x1b[4m',
  };
  
  /**
   * Style configuration for different log levels
   * @type {Object.<LogLevel, {badge: string, label: string, nodeColor: string, browserStyle: string}>}
   */
  const LEVEL_STYLES = {
    trace: {
      badge: '🔍',
      label: 'TRACE',
      nodeColor: `${COLORS.dim}${COLORS.gray}`,
      browserStyle: 'color: #6c757d; font-style: italic;'
    },
    debug: {
      badge: '🐛',
      label: 'DEBUG',
      nodeColor: COLORS.cyan,
      browserStyle: 'color: #0dcaf0;'
    },
    info: {
      badge: '📘',
      label: 'INFO',
      nodeColor: `${COLORS.bold}${COLORS.green}`,
      browserStyle: 'color: #20c997; font-weight: 500;'
    },
    warn: {
      badge: '⚠️',
      label: 'WARN',
      nodeColor: `${COLORS.bold}${COLORS.yellow}`,
      browserStyle: 'color: #fd7e14; font-weight: bold;'
    },
    error: {
      badge: '❌',
      label: 'ERROR',
      nodeColor: `${COLORS.bold}${COLORS.red}`,
      browserStyle: 'color: #dc3545; font-weight: bold;'
    },
    fatal: {
      badge: '💀',
      label: 'FATAL',
      nodeColor: `${COLORS.bold}${COLORS.bgRed}${COLORS.white}`,
      browserStyle: 'color: #fff; background-color: #dc3545; font-weight: bold; padding: 2px 5px; border-radius: 3px;'
    }
  };
  
  /**
   * Create a logger instance with given options
   * @param {LoggerOptions} [options={}] - Logger configuration options
   * @returns {Object} Logger instance
   */
  function createLogger(options = {}) {
    // Set default options
    const config = {
      minLevel: options.minLevel || 'info',
      colorize: options.colorize !== false,
      timestamp: options.timestamp !== false,
      showLevel: options.showLevel !== false,
      showBadges: options.showBadges !== false,
      prettyPrint: options.prettyPrint !== false,
      fileLogging: options.fileLogging || false,
      logDirectory: options.logDirectory || 'logs',
      meta: options.meta || {},
      separator: options.separator || ' │ ',
      formatter: options.formatter || null,
      transport: options.transport || null
    };
  
    // Initialize file logging if enabled and in Node environment
    let fileLoggers = {};
    if (config.fileLogging && !isBrowser()) {
      try {
        const fs = require('fs');
        const path = require('path');
        
        // Ensure log directory exists
        if (!fs.existsSync(config.logDirectory)) {
          fs.mkdirSync(config.logDirectory, { recursive: true });
        }
        
        // Create file streams for different log levels
        const levels = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'];
        levels.forEach(level => {
          if (LOG_LEVEL_VALUES[level] === undefined) return; // Skip if not a valid level
          const logFilePath = path.join(config.logDirectory, `${level}.log`);
          fileLoggers[level] = fs.createWriteStream(logFilePath, { flags: 'a' });
        });
        
        // Create a combined log file
        fileLoggers.all = fs.createWriteStream(
          path.join(config.logDirectory, 'all.log'), 
          { flags: 'a' }
        );
      } catch (error) {
        console.error('Failed to initialize file logging:', error);
        config.fileLogging = false;
      }
    }
  
    /**
     * Format log entry as string
     * @param {LogLevel} level - Log level
     * @param {Array<any>} args - Log arguments
     * @returns {{formattedMessage: string, parts: Object, objectsToAppend: Array<any>}} Formatted log parts and message
     */
    const formatLogEntry = (level, args) => {
      if (config.formatter && typeof config.formatter === 'function') {
        return {
          formattedMessage: config.formatter(level, args, config),
          parts: {},
          objectsToAppend: [] // Custom formatter should handle object expansion if needed
        };
      }
  
      const parts = {};
      const style = LEVEL_STYLES[level] || {};
      const sep = config.separator;
      
      // Format timestamp
      if (config.timestamp) {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', { 
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          fractionalSecondDigits: 3
        });
        const date = now.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        });
        parts.timestamp = `${date} ${time}`;
      }
      
      // Format level with optional badge
      if (config.showLevel) {
        parts.level = config.showBadges && style.badge 
          ? `${style.badge} ${style.label}`
          : style.label || level.toUpperCase();
      }
      
      // Format metadata if present
      if (Object.keys(config.meta).length > 0) {
        const metaParts = [];
        for (const [key, value] of Object.entries(config.meta)) {
          metaParts.push(`${key}=${typeof value === 'string' ? value : JSON.stringify(value)}`);
        }
        parts.meta = `[${metaParts.join(', ')}]`;
      }
      
      // Process log arguments
      const processedArgs = [];
      const objectsToAppend = [];
      
      args.forEach(arg => {
        if (arg instanceof Error) {
          processedArgs.push(arg.message);
          if (arg.stack) objectsToAppend.push(arg.stack);
        } else if (arg === null) {
          processedArgs.push('null');
        } else if (arg === undefined) {
          processedArgs.push('undefined');
        } else if (typeof arg === 'object') {
          try {
            if (config.prettyPrint) {
              objectsToAppend.push(arg);
            } else {
              processedArgs.push(JSON.stringify(arg));
            }
          } catch (e) {
            processedArgs.push(String(arg)); // Fallback for unstringifiable objects
          }
        } else {
          processedArgs.push(String(arg));
        }
      });
      
      parts.message = processedArgs.join(' ');
      
      // Construct the full message
      let formattedMessage = '';
      if (parts.timestamp) formattedMessage += parts.timestamp + sep;
      if (parts.level) formattedMessage += parts.level + sep;
      if (parts.meta) formattedMessage += parts.meta + sep; // Meta is now part of prefix
      formattedMessage += parts.message;
      
      return {
        formattedMessage,
        parts,
        objectsToAppend
      };
    };
  
    /**
     * Log to file if file logging is enabled
     * @param {LogLevel} level - Log level
     * @param {string} plainMessage - Plain text log message (without console colors)
     * @param {Array<any>} objectsToAppend - Additional objects to log (for file, these will be stringified)
     */
    const logToFile = (level, plainMessage, objectsToAppend) => {
      if (!config.fileLogging || isBrowser() || LOG_LEVEL_VALUES[level] === undefined) return;
      
      try {
        const now = new Date();
        const timestamp = now.toISOString();
        
        let fileContent = plainMessage;
        if (objectsToAppend && objectsToAppend.length > 0) {
          const appendedString = objectsToAppend.map(obj => {
            if (typeof obj === 'string') return obj; // Stack traces are already strings
            try {
              return JSON.stringify(obj, null, 2); // Pretty print objects in file log
            } catch {
              return String(obj);
            }
          }).join('\n');
          fileContent += '\n' + appendedString;
        }

        const fileMessage = `[${timestamp}] ${fileContent}\n`;
        
        if (fileLoggers[level]) {
          fileLoggers[level].write(fileMessage);
        }
        
        if (fileLoggers.all) {
          fileLoggers.all.write(fileMessage); // Corrected: removed stray bracket
        }
      } catch (error) {
        console.error('Failed to write to log file:', error);
      }
    };
  
    /**
     * Send log to custom transport if configured
     * @param {LogLevel} level - Log level
     * @param {Array<any>} args - Original log arguments
     * @param {string} formattedMessage - Formatted log message
     * @param {Array<any>} objectsToAppend - Additional objects
     */
    const sendToTransport = (level, args, formattedMessage, objectsToAppend) => {
      if (config.transport && typeof config.transport.log === 'function') {
        try {
          config.transport.log({
            level,
            message: formattedMessage,
            args, // Original args
            objects: objectsToAppend, // Potentially pretty-printed objects
            timestamp: new Date(),
            meta: config.meta
          });
        } catch (error) {
          console.error('Failed to send log to transport:', error);
        }
      }
    };
  
    /**
     * Main logging function
     * @param {LogLevel} level - Log level
     * @param {...any} args - Log arguments
     */
    const log = (level, ...args) => {
      if (LOG_LEVEL_VALUES[level] === undefined || LOG_LEVEL_VALUES[level] < LOG_LEVEL_VALUES[config.minLevel]) {
        return;
      }
  
      const { formattedMessage, objectsToAppend } = formatLogEntry(level, args);
      const style = LEVEL_STYLES[level] || {};
      
      // Log to console with appropriate styling
      if (isBrowser()) {
        const browserStyle = style.browserStyle || '';
        const consoleMethod = console[level] || console.log; // Fallback for fatal/trace if not direct methods

        switch (level) {
          case 'trace': (console.trace || console.debug)(`%c${formattedMessage}`, browserStyle, ...objectsToAppend); break;
          case 'debug': console.debug(`%c${formattedMessage}`, browserStyle, ...objectsToAppend); break;
          case 'info': console.info(`%c${formattedMessage}`, browserStyle, ...objectsToAppend); break;
          case 'warn': console.warn(`%c${formattedMessage}`, browserStyle, ...objectsToAppend); break;
          case 'error': console.error(`%c${formattedMessage}`, browserStyle, ...objectsToAppend); break;
          case 'fatal': console.error(`%c${formattedMessage}`, browserStyle, ...objectsToAppend); break; // Often fatal is same as error in console
          default: console.log(`%c${formattedMessage}`, browserStyle, ...objectsToAppend);
        }
      } else {
        // Node console logging
        const nodeColor = config.colorize ? (style.nodeColor || '') : '';
        const reset = config.colorize ? COLORS.reset : '';
        const consoleMethod = console[level] || console.log;

        // In Node, console.log(message, ...objects) handles pretty-printing of objects.
        consoleMethod(`${nodeColor}${formattedMessage}${reset}`, ...objectsToAppend);
      }
      
      logToFile(level, formattedMessage, objectsToAppend);
      sendToTransport(level, args, formattedMessage, objectsToAppend);
    };
  
    /**
     * Create a child logger with additional metadata
     * @param {Object} metadata - Additional metadata for the child logger
     * @returns {Object} Child logger instance
     */
    const child = (metadata = {}) => {
      return createLogger({
        ...config,
        meta: { ...config.meta, ...metadata }
      });
    };
  
    /**
     * Set the minimum log level
     * @param {LogLevel} level - New minimum log level
     */
    const setLevel = (level) => {
      if (LOG_LEVEL_VALUES[level] !== undefined) {
        config.minLevel = level;
      } else {
        // Use own error log if possible, else console.error
        const errorLog = loggers.error || console.error;
        errorLog(`Invalid log level: ${level}. Must be one of ${Object.keys(LOG_LEVEL_VALUES).join(', ')}`);
      }
    };
  
    /**
     * Update logger configuration
     * @param {Partial<LoggerOptions>} newOptions - New configuration options
     */
    const configure = (newOptions = {}) => {
      const oldFileLogging = config.fileLogging;
      const oldLogDirectory = config.logDirectory;

      Object.assign(config, newOptions);
      
      const fileLoggingConfigChanged = newOptions.fileLogging !== undefined || newOptions.logDirectory !== undefined;

      if (fileLoggingConfigChanged && (config.fileLogging !== oldFileLogging || config.logDirectory !== oldLogDirectory)) {
        // Close existing file streams if they exist
        if (!isBrowser() && Object.keys(fileLoggers).length > 0) {
          Object.values(fileLoggers).forEach(stream => {
            if (stream && typeof stream.end === 'function') {
              stream.end();
            }
          });
          fileLoggers = {}; // Reset
        }
        
        // Reinitialize if file logging is now enabled
        if (config.fileLogging && !isBrowser()) {
          try {
            const fs = require('fs');
            const path = require('path');
            
            if (!fs.existsSync(config.logDirectory)) {
              fs.mkdirSync(config.logDirectory, { recursive: true });
            }
            
            const levels = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'];
            levels.forEach(levelKey => {
              if (LOG_LEVEL_VALUES[levelKey] === undefined) return;
              const logFilePath = path.join(config.logDirectory, `${levelKey}.log`);
              fileLoggers[levelKey] = fs.createWriteStream(logFilePath, { flags: 'a' });
            });
            
            fileLoggers.all = fs.createWriteStream(
              path.join(config.logDirectory, 'all.log'), 
              { flags: 'a' }
            );
          } catch (error) {
            console.error('Failed to re-initialize file logging:', error);
            config.fileLogging = false; // Disable if re-init fails
          }
        }
      }
    };
    
    /**
     * Close the logger and any open resources
     * Particularly important for file streams
     */
    const close = () => {
      if (!isBrowser() && config.fileLogging && Object.keys(fileLoggers).length > 0) {
        Object.values(fileLoggers).forEach(stream => {
          if (stream && typeof stream.end === 'function') {
            stream.end();
          }
        });
        fileLoggers = {}; // Clear out closed streams
      }
    };
  
    /**
     * Create a labeled logger for a specific component/module
     * @param {string} name - Name of the component or module
     * @param {Object} [metadata={}] - Additional metadata
     * @returns {Object} Component logger instance
     */
    const component = (name, metadata = {}) => {
      return child({ 
        component: name,
        ...metadata
      });
    };
    
    /**
     * Create a grouped set of log messages (browser only for actual grouping)
     * @param {string} title - Title for the group
     * @param {Function} logFn - Function containing log calls
     * @param {boolean} [collapsed=false] - Whether to collapse the group (browser only)
     */
    const group = (title, logFn, collapsed = false) => {
      if (LOG_LEVEL_VALUES[config.minLevel] > LOG_LEVEL_VALUES.info) return; // Don't group if too verbose

      if (isBrowser()) {
        const style = LEVEL_STYLES.info || {}; // Use info style for group title
        const browserStyle = config.colorize ? (style.browserStyle || '') : '';
        const groupTitle = `%c${title}`;

        if (collapsed) {
          console.groupCollapsed(groupTitle, browserStyle);
        } else {
          console.group(groupTitle, browserStyle);
        }
        
        try {
          logFn(loggers); // Pass logger instance to the function
        } finally {
          console.groupEnd();
        }
      } else {
        // In Node, just add a header
        const style = LEVEL_STYLES.info || {};
        const nodeColor = config.colorize ? (style.nodeColor || '') : '';
        const reset = config.colorize ? COLORS.reset : '';
        const headerLine = '='.repeat(title.length + 4);

        console.log(`\n${nodeColor}${headerLine}${reset}`);
        console.log(`${nodeColor}  ${title}  ${reset}`);
        console.log(`${nodeColor}${headerLine}${reset}`);
        logFn(loggers); // Pass logger instance
        console.log(`${nodeColor}${headerLine}${reset}\n`);
      }
    };
    
    /**
     * Log a success message (alias for info with success badge)
     * @param {...any} args - Log arguments
     */
    const success = (...args) => {
      // For success, we modify args before passing to log
      const successArgs = [`✅ Success:`, ...args];
      log('info', ...successArgs);
    };
    
    /**
     * Log start of an operation and return an object to log its end.
     * @param {string} operation - Name of operation
     * @returns {{end: (result?: {success?: boolean, duration?: number, data?: any}) => void}}
     */
    const start = (operation) => {
      log('info', `▶️  Started: ${operation}`);
      const startTime = Date.now();
      return {
        end: (result = {}) => {
          const durationMs = result.duration !== undefined ? result.duration : Date.now() - startTime;
          const durationText = `(${durationMs}ms)`;
          const statusIcon = result.success === false ? '❌ Failed:' : '✅ Completed:';
          const logLevel = result.success === false ? 'error' : 'info';
          
          log(logLevel, `${statusIcon} ${operation} ${durationText}`);
          if (result.data) {
            log(result.success === false ? 'error' : 'debug', 'Result data:', result.data);
          }
        }
      };
    };
    
    /**
     * Create a table in the console (pretty in browser, simplified in Node or logged line-by-line).
     * This method logs data using the logger's 'info' level, so it goes to files/transports.
     * For direct `console.table` behavior, use `createConsole().table()`.
     * @param {Array|Object} data - Data to display in table
     * @param {Array<string>} [columns] - Columns to include (mainly for console.table in browser)
     */
    const table = (tabularData, columns) => {
      if (LOG_LEVEL_VALUES.info < LOG_LEVEL_VALUES[config.minLevel]) return;

      log('info', `Table data (columns: ${columns ? columns.join(', ') : 'all'}):`);
      if (isBrowser() && console.table) {
          console.table(tabularData, columns); // For quick browser inspection
          // Also log it line by line for consistency with file/transport
      }
      
      // Log data line by line for file/transport and Node console (if browser didn't console.table)
      if (Array.isArray(tabularData)) {
        tabularData.forEach((row, i) => {
          log('info', `  Row ${i}:`, row);
        });
      } else if (typeof tabularData === 'object' && tabularData !== null) {
        Object.entries(tabularData).forEach(([key, value]) => {
          log('info', `  ${key}:`, value);
        });
      } else {
        log('info', String(tabularData));
      }
    };
  
    // Create the logger methods object dynamically
    const loggers = {
      // Standard log methods
      trace: (...args) => log('trace', ...args),
      debug: (...args) => log('debug', ...args),
      info: (...args) => log('info', ...args),
      log: (...args) => log('info', ...args), // Alias for info
      warn: (...args) => log('warn', ...args),
      error: (...args) => log('error', ...args),
      fatal: (...args) => log('fatal', ...args),
      
      // Enhanced logging methods
      success: (...args) => success(...args),
      table: (data, columns) => table(data, columns),
      group: (title, fn, collapsed) => group(title, fn, collapsed),
      start: (operation) => start(operation),
      
      // Structure/organization methods
      component: (name, metadata) => component(name, metadata),
      child: (metadata) => child(metadata),
      
      // Configuration methods
      setLevel,
      configure,
      close,
      
      // Export the current configuration
      getConfig: () => ({ ...config }), // Return a copy
      
      // Export constants
      LEVELS: Object.keys(LOG_LEVEL_VALUES),
      
      // Environment helpers
      getEnvironment,
      isBrowser, // Export isBrowser itself
      isDev: () => getEnvironment() === 'development',
      isProd: () => getEnvironment() === 'production',
      isTest: () => getEnvironment() === 'test'
    };

    return loggers;
  }
  
  /**
   * Create a better console.log with color support that doesn't break object inspection.
   * This is a simpler, direct console wrapper, distinct from the main logger.
   * @param {string} name - Name to identify this console instance
   * @param {string} [hexColor='#3b82f6'] - Color in hex format for browser styling (e.g. '#ff0000')
   * @param {string} [nodeAnsiColor=COLORS.blue] - ANSI color code for Node.js (e.g. COLORS.magenta)
   * @returns {Object} Enhanced console object
   */
  const createConsole = (name, hexColor = '#3b82f6', nodeAnsiColor = COLORS.blue) => {
    const browserStyle = `color: ${hexColor}; font-weight: bold;`;
    const nodePrefix = `${nodeAnsiColor}[${name}]${COLORS.reset} `;
    
    const formatAndLog = (type, args) => {
      const consoleMethod = console[type] || console.log;
      if (isBrowser()) {
        consoleMethod(`%c[${name}]`, browserStyle, ...args);
      } else {
        consoleMethod(nodePrefix, ...args);
      }
    };
    
    return {
      log: (...args) => formatAndLog('log', args),
      info: (...args) => formatAndLog('info', args),
      warn: (...args) => formatAndLog('warn', args),
      error: (...args) => formatAndLog('error', args),
      debug: (...args) => formatAndLog('debug', args),
      trace: (...args) => formatAndLog('trace', args), // console.trace might behave differently
      group: (label = 'Group', collapsed = false) => {
        const fullLabel = `[${name}] ${label}`;
        if (isBrowser()) {
          if (collapsed) {
            console.groupCollapsed(`%c${fullLabel}`, browserStyle);
          } else {
            console.group(`%c${fullLabel}`, browserStyle);
          }
        } else {
          const nodeLabel = `${nodeAnsiColor}${fullLabel}${COLORS.reset}`;
          // Node's console.groupCollapsed is often same as console.group
          if (collapsed) {
            console.groupCollapsed(nodeLabel);
          } else {
            console.group(nodeLabel);
          }
        }
      },
      groupEnd: () => {
        console.groupEnd(); // Works in both browser and Node
      },
      table: (tabularData, properties) => {
        if (isBrowser()) {
          console.group(`%c[${name}] Table`, browserStyle);
          console.table(tabularData, properties);
          console.groupEnd();
        } else {
          console.log(`${nodeAnsiColor}[${name}] Table:${COLORS.reset}`);
          console.table(tabularData, properties); // console.table works in Node too
        }
      }
    };
  };
    
  /**
   * Create a default SvelteKit logger with sensible defaults
   * @returns {ReturnType<createLogger>} Default logger instance
   */
  const createDefaultLogger = () => {
    const env = getEnvironment();
    
    // Set default log level based on environment
    const minLevel = env === 'production' ? 'info' : 'debug';
    
    return createLogger({
      minLevel,
      colorize: true,
      timestamp: true,
      showLevel: true,
      showBadges: true,
      prettyPrint: true, // Pretty print objects by default
      fileLogging: !isBrowser() && env === 'production', // File logging in prod server-side
      logDirectory: 'logs',
      meta: {
        app: 'sveltekit-app', // Example default meta
        env,
        isBrowser: isBrowser()
      }
    });
  };
    
  // Create and export default logger instance
  const logger = createDefaultLogger();
  
  // Export the factory functions and default logger
  export {
    createLogger,
    createConsole,
    createDefaultLogger,
    logger, // Export the instance as named export
    logger as default // Also as default export
  };