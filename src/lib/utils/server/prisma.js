import { PrismaClient } from '@prisma-app/client';

/** @type {import('@prisma/client').PrismaClient | undefined} */
const globalForPrisma = globalThis;

/** @type {import('@prisma/client').PrismaClient} */
const prisma = globalForPrisma.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' 
    ? [
        { level: 'query', emit: 'event' },
        { level: 'info', emit: 'event' },
        { level: 'warn', emit: 'event' },
        { level: 'error', emit: 'event' }
      ] 
    : ['error']
});

if (process.env.NODE_ENV === 'development') {
  /** @type {Array<{query: string, params: string, duration: number}>} */
  let queryLogs = [];
  /** @type {NodeJS.Timeout | undefined} */
  let timeout;

  function flushQueryLogs() {
    if (queryLogs.length > 0) {
      console.groupCollapsed(`📦 Prisma Query Batch (${queryLogs.length} queries)`);
      
      queryLogs.forEach((log) => {
        console.log(
          `\x1b[36m%s\x1b[0m \n ↳ \x1b[33m%s\x1b[0m \n ↳ \x1b[35m%s\x1b[0m`,
          `[QUERY] ${log.query}`,
          `Params: ${log.params}`,
          `Duration: ${log.duration}ms`
        );
      });
      
      console.groupEnd();
      queryLogs = [];
    }
  }

  prisma.$on('query', /** @param {any} e */ (e) => {
    queryLogs.push({
      query: e.query,
      params: e.params,
      duration: e.duration,
    });
    
    clearTimeout(timeout);
    // Debounce batching by 100ms
    timeout = setTimeout(flushQueryLogs, 100);
  });

  prisma.$on('info', /** @param {{ message: string }} e */ (e) => {
    console.log('\x1b[34m%s\x1b[0m', `[INFO] ${e.message}`);
  });

  prisma.$on('warn', /** @param {{ message: string }} e */ (e) => {
    console.warn('\x1b[33m%s\x1b[0m', `[WARN] ${e.message}`);
  });

  prisma.$on('error', /** @param {{ message: string }} e */ (e) => {
    console.error('\x1b[31m%s\x1b[0m', `[ERROR] ${e.message}`);
  });

  globalForPrisma.prisma = prisma;
}

export { prisma };