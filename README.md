# IdeaLens Backend

```
___  ____  _____    _    _     _____  _   _  ____  
|_ _||  _ \| ____|  / \  | |   | ____|| \ | |/ ___| 
 | | | | | |  _|   / _ \ | |   |  _|  |  \| |\___ \ 
 | | | |_| | |___ / ___ \| |___| |___ | |\  | ___) |
|___||____/|_____/_/   \_\_____|_____||_| \_||____/
```

**AI-Powered Software Development Assistant**
*Transform Your Development Workflow from Idea to Impact*

---

## 📋 Overview

The **IdeaLens Backend** is the robust core powering our AI-driven Software Development Assistant. Built with **SvelteKit** for exceptional performance and developer experience, it orchestrates the entire development lifecycle. From validating raw ideas (documents, images, text) and conducting deep market research, to AI-assisted project management, progress tracking, and even generating pitch decks, IdeaLens integrates cutting-edge AI to redefine how software is envisioned and built.

This backend manages authentication, multi-tenant workspaces, complex AI workflows, third-party integrations (GitHub, Jira, SlideSpeak, BrandFetch, DomainR), billing (via Flutterwave), asynchronous task processing (BullMQ), and secure file storage (Cloudinary).

---

## 🏗️ System Architecture

IdeaLens employs a modular, service-oriented architecture designed for scalability and maintainability.

```mermaid
graph TD
    subgraph Client_Tier["Client Application"]
        WebApp[SvelteKit Frontend / Mobile Apps]
    end

    subgraph API_Gateway_Routing["API Gateway & Routing - SvelteKit"]
        SvelteKitRoutes["API Endpoints (`src/routes/api`)"]
        APIMiddleware["Middleware (`src/lib/server/middleware`) <br/> Auth, Permissions, Rate Limiting, Logging"]
    end

    subgraph Core_Services_Logic["Core Services & Business Logic (`src/lib/server`)"]
        AuthUserMgmt["Auth & User Management (`auth/`, `user/`)"]
        WorkspaceProjectMgmt["Workspace & Project Management (`workspace/`, `projects/`)"]
        BillingMgmt["Billing & Payments (`billing/`)"]
        IntegrationMgmt["Third-Party Integrations (`integrations/`, `services/`)"]
        NotificationMgmt["Notifications (`notifications/`)"]
    end

    subgraph AI_Orchestration["AI Orchestration Layer (`src/lib/server/ai`)"]
        AIOrchestrators["Feature Orchestrators (`ai/orchestrators`)"]
        AIProviders["AI Provider Connectors (`ai/providers`)"]
    end

    subgraph Async_Processing["Asynchronous Processing"]
        BullMQ["BullMQ Queues & Workers (`src/lib/server/queue`)"]
        RedisBroker["Redis (Queue Broker)"]
    end

    subgraph Data_External_Services["Data Storage & External Services"]
        PostgreSQL["PostgreSQL (Prisma ORM)"]
        RedisCache["Redis (Caching)"]
        Cloudinary["Cloudinary (File Storage)"]
        Flutterwave["Flutterwave (Payments)"]
        ExternalAI_APIs["AI APIs (Perplexity, Gemini, Mistral, Brave)"]
        ExternalIntegration_APIs["Integration APIs (GitHub, Jira, SlideSpeak, BrandFetch, DomainR)"]
    end

    WebApp --> SvelteKitRoutes
    SvelteKitRoutes -- uses --> APIMiddleware
    APIMiddleware -- interacts with --> AuthUserMgmt
    SvelteKitRoutes -- delegates to --> Core_Services_Logic

    Core_Services_Logic -- uses --> AIOrchestration
    Core_Services_Logic -- interacts with --> PostgreSQL
    Core_Services_Logic -- uses --> RedisCache
    Core_Services_Logic -- interacts with --> Cloudinary
    Core_Services_Logic -- interacts with --> Flutterwave
    Core_Services_Logic -- enqueues tasks --> BullMQ

    AIOrchestration -- uses --> AIProviders
    AIProviders -- call --> ExternalAI_APIs
    IntegrationMgmt -- interacts with --> ExternalIntegration_APIs

    BullMQ -- uses --> RedisBroker
    BullMQ -- processes tasks using --> Core_Services_Logic
    BullMQ -- processes tasks using --> AIOrchestration
```

---

## 📂 Directory Structure

The backend is organized for clarity and separation of concerns:

```
Idea_lens-BE/
├── src/
│   ├── lib/
│   │   ├── server/
│   │   │   ├── ai/                 # AI orchestration and provider connections
│   │   │   │   ├── orchestrators/  # High-level AI workflow logic (e.g., idea validation)
│   │   │   │   └── providers/      # Specific AI API client services (Perplexity, Gemini, etc.)
│   │   │   ├── auth/               # Authentication, authorization, session management
│   │   │   ├── billing/            # Payment processing, plans, subscriptions (Flutterwave)
│   │   │   ├── integrations/       # Logic for third-party tool integrations (GitHub, Jira)
│   │   │   │   └── templates/      # Specific integration service logic
│   │   │   ├── middleware/         # SvelteKit server hooks middleware
│   │   │   ├── notifications/      # Email and in-app notification services
│   │   │   ├── projects/           # Project, idea, task, file, analysis management
│   │   │   ├── queue/              # BullMQ asynchronous task queues and workers
│   │   │   │   ├── queues/
│   │   │   │   └── workers/
│   │   │   ├── services/           # Connectors for external services (Cloudinary, GitHub generic, BrandFetch, DomainR)
│   │   │   ├── uploads/            # File upload handling service
│   │   │   ├── user/               # User profile and settings management
│   │   │   └── workspace/          # Workspace creation, member management, settings
│   │   ├── shared/                 # Isomorphic code (constants, types)
│   │   └── utils/                  # Utility functions (date.js, string.js, object.js)
│   │       └── server/             # Server-specific utils (logger, prisma, redis, crypto, bullmq-config)
│   ├── routes/
│   │   ├── api/                    # SvelteKit API endpoint definitions
│   │   │   ├── auth/
│   │   │   ├── billing/
│   │   │   ├── integrations/
│   │   │   ├── notifications/
│   │   │   ├── projects/           # Includes ideas, tasks, analyses endpoints
│   │   │   ├── uploads/
│   │   │   ├── user/
│   │   │   ├── webhooks/           # Incoming webhooks (Flutterwave, GitHub)
│   │   │   └── workspaces/
│   │   └── +page.svelte            # (Likely a simple landing or status page for root)
│   ├── app.d.ts
│   ├── app.html
│   └── hooks.server.js             # Server hooks (middleware pipeline definition)
├── static/                         # Static assets
├── tests/                          # Unit and integration tests (to be added)
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── .env.example
├── .env
├── .gitignore
├── package.json
├── pnpm-lock.yaml (or yarn.lock / package-lock.json)
├── tsconfig.json
├── svelte.config.js
└── README.md
```
*(This provides a more detailed view of the expected root and src structure.)*

---

## 🔑 Core Components

### Authentication & Authorization
*   Secure session-based authentication (inspired by Lucia Auth).
*   Email/Password & OAuth (Google, GitHub) login, with multiple OAuth accounts linkable to one user.
*   Role-Based Access Control (RBAC) for Workspaces (Admin, Member, Viewer) and Projects.
*   User invitation system with token-based verification.

```mermaid
graph LR
    User --> LoginOptions{Login/Register Options}
    LoginOptions -- Email/Pass --> HandleCredentialsLogin[AuthService: Credentials]
    LoginOptions -- OAuth --> HandleOAuthFlow[AuthService: OAuth Flow]
    HandleCredentialsLogin --> SessionManagement[Session Management]
    HandleOAuthFlow --> AccountLinkOrCreate[AccountService: Link/Create] --> SessionManagement
    SessionManagement --> UserSessionActive[User Session Active]
    UserSessionActive -- API Request --> AuthMiddlewareCheck[Auth Middleware]
    AuthMiddlewareCheck -- Valid Session --> RBACCheck[RBAC: Workspace/Project Permissions]
    RBACCheck -- Granted --> AccessAPIResource[Access API Resource]
```

---

### Workspace & Project Management
*   **Workspaces**: Multi-tenant environments for teams or individual users. Tied to billing (first project free, one-time payments, subscriptions).
*   **Projects**: Contained within workspaces, encompassing ideas, tasks, AI analyses, files, and collaborators.
*   **Idea Management**: Capture raw ideas with documents, images, text, and URLs for AI processing.
*   **File Management**: Secure file uploads and storage via Cloudinary.

```mermaid
graph TD
    User --> CreateWorkspace[Create Workspace]
    CreateWorkspace -- "First project is free" --> W[Workspace]
    W --> CreateProjectP1[Create Project P1 Free]
    W --> InviteMembers[Invite Members w/ Roles]
    W --> ConfigureWorkspaceSettings[Workspace Settings]
    W --> WorkspaceBilling[Billing: Flutterwave]
    WorkspaceBilling -- "For subsequent projects/features" --> OneTimePaymentForP2[One-Time Payment for Project P2]
    WorkspaceBilling -- "For ongoing access" --> SubscriptionPlan[Subscription Plan]
    SubscriptionPlan --> ProjectAndFeatureLimits[Project & Feature Limits]
    W --> CreateProjectP2[Create Project P2 Paid/Subscribed]
    CreateProjectP2 --> ManageIdeas[Manage Ideas] --> UploadSupportingFiles[Upload Supporting Files Cloudinary]
    CreateProjectP2 --> ManageTasks[Manage Tasks]
    CreateProjectP2 --> RunAIAnalyses[Run AI Analyses]
```

---

### AI Services & Orchestration
IdeaLens intelligently leverages a suite of AI models for diverse tasks, managed by dedicated orchestrators:

*   **Perplexity Sonar API**: Deep, sourced research; market facts; competitor solution details.
*   **Google Gemini 1.5/2.5**: Comprehensive idea validation; SWOT analysis; complex document understanding; code review summaries; strategic advice.
*   **Mistral AI Models**: Name generation; quick text summaries; brainstorming; task breakdown.
*   **Brave Search API**: Real-time web data; emerging trend discovery; augmenting research.
*   **Other Services**:
    *   **DomainR**: Domain name availability checks.
    *   **BrandFetch**: Fetching company logos from URLs.

```mermaid
graph LR
    subgraph UserRequest["User Action"]
        Request["e.g., 'Validate Idea' on Project Page"]
    end
    subgraph API_Layer["API Layer"]
        API["API Endpoint (`/api/projects/.../validation`)"]
    end
    subgraph Service_Logic["Service Logic"]
        ProjectService["ProjectService (Checks Permissions, Billing)"]
    end
    subgraph AI_Orchestration_Layer["AI Orchestration (`src/lib/server/ai`)"]
        Orchestrator["idea-validation-orchestrator.js"]
        ProviderGemini["gemini-service.js"]
        ProviderPerplexity["perplexity-service.js"]
        ProviderBrave["brave-search-service.js"]
        ProviderDomainR["domain-r-service.js (Called by Naming Orchestrator)"]
    end
    subgraph External_AI_Other_Services["External APIs"]
        GeminiAPI[Gemini API]
        PerplexityAPI[Perplexity API]
        BraveAPI[Brave Search API]
        DomainRAPI[DomainR API]
    end
    subgraph Async_Queue_Processing["Async Processing"]
        BullMQQueue["AI Task Queue (BullMQ)"]
        AIWorker["AI Task Worker"]
    end
    subgraph DB_Storage_Layer["Data Storage"]
        AnalysisDB["Analysis Record (Database)"]
    end

    Request --> API
    API --> ProjectService
    ProjectService --> Orchestrator
    Orchestrator -- Chooses Models/Services --> ProviderGemini
    Orchestrator -- Chooses Models/Services --> ProviderPerplexity
    Orchestrator -- Chooses Models/Services --> ProviderBrave
    ProviderGemini --> GeminiAPI
    ProviderPerplexity --> PerplexityAPI
    ProviderBrave --> BraveAPI
    Orchestrator -- Long Task? --> BullMQQueue
    BullMQQueue --> AIWorker
    AIWorker -- Processes Job --> AnalysisDB
    Orchestrator -- Short Task? --> AnalysisDB
```

---

## 🚀 Features and Services

IdeaLens offers a comprehensive suite to assist through the entire development lifecycle:

### Feature Map
```mermaid
mindmap
  root((IdeaLens Platform))
    Core Features
      Workspaces & Collaboration
        Multi-Tenancy
        Role-Based Access Control
        User Invitations
      Billing & Subscriptions
        Free First Project
        One-Time Pipeline Payment
        Tiered Subscriptions (Flutterwave)
    AI-Powered Development Lifecycle
      Idea Generation & Validation
        AI Brainstorming
        Raw Data Input (Docs, Images, Text, URLs)
        Feasibility Analysis (Gemini, Perplexity)
        Idea Refinement
      Market & Competitor Intelligence
        Automated Market Research (Perplexity, Brave)
        Target Audience Identification
        Competitor Analysis & Tracking (Logos via BrandFetch)
        AI-Generated SWOT Analysis
      Naming & Branding
        AI Name Generation (Mistral)
        Domain Availability Check (DomainR)
      Project & Task Management
        AI-Assisted Task Breakdown
        Internal Task Board
        GitHub Projects/Issues Sync
        Jira Sync
      Code Assistance
        AI Code Review Summaries (Gemini on GitHub PRs)
      Progress & Productivity
        Automated Tracking (via GitHub/Jira)
        AI-Generated Productivity Insights
      Marketing & Launch
        Pitch Deck Generation (SlideSpeak API)
```

---

### Data Flow (Generic API Request)

```mermaid
sequenceDiagram
    participant ClientApp as Client Application
    participant SvelteKitAPI as SvelteKit API Endpoint
    participant AuthMiddleware as Authentication Middleware
    participant PermissionMiddleware as Permission Middleware
    participant HandlerFunction as Resource Handler (e.g., in `+server.js`)
    participant CoreService as Core Service (e.g., ProjectService)
    participant AIOrchestrator as AI Orchestrator (if applicable)
    participant BullMQWorker as BullMQ Worker (if async)
    participant Database_Prisma as Database (Prisma)
    participant ExternalService as External Service (AI, Cloudinary, etc.)

    ClientApp->>SvelteKitAPI: HTTP Request (e.g., POST /api/projects)
    SvelteKitAPI->>AuthMiddleware: Process Request (via `hooks.server.js`)
    AuthMiddleware-->>SvelteKitAPI: User Authenticated (event.locals.user)
    SvelteKitAPI->>PermissionMiddleware: Check Permissions
    PermissionMiddleware-->>SvelteKitAPI: Access Granted
    SvelteKitAPI->>HandlerFunction: Execute Handler(event)
    HandlerFunction->>CoreService: Call Service Method (e.g., createProject())
    alt Synchronous Operation
        CoreService->>Database_Prisma: CRUD Operations
        Database_Prisma-->>CoreService: Data
        CoreService-->>HandlerFunction: Result
    else Asynchronous AI/Integration Task
        CoreService->>AIOrchestrator: Initiate AI Task
        AIOrchestrator-->>BullMQWorker: Enqueue Job (via `ai-task-queue.js`)
        BullMQWorker-->>ExternalService: Call External API
        ExternalService-->>BullMQWorker: Response
        BullMQWorker-->>Database_Prisma: Store Results
        CoreService-->>HandlerFunction: Job ID / Initial Ack
    end
    HandlerFunction-->>SvelteKitAPI: Formatted JSON Response
    SvelteKitAPI-->>ClientApp: HTTP Response
```

---

## 🛠️ Tech Stack

*   **Backend Framework**: SvelteKit
*   **Runtime**: Node.js (v18.x or v20.x recommended)
*   **Database**: PostgreSQL
*   **ORM**: Prisma
*   **Authentication**: Custom (Lucia-inspired, session-based) + OAuth
*   **AI APIs**: Perplexity Sonar, Google Gemini, Mistral AI, Brave Search
*   **Supporting Services**: DomainR (Domain Check), BrandFetch (Logo Fetching)
*   **File Storage**: Cloudinary
*   **Payment Gateway**: Flutterwave
*   **Asynchronous Tasks**: BullMQ with Redis
*   **Caching**: Redis
*   **Validation**: Zod (or similar, e.g., Valibot)
*   **Logging**: Pino (or similar structured logger)
*   **DevOps (Example)**: Docker, Coolify (or other PaaS/IaaS)
*   **(Frontend)**: Svelte, TailwindCSS (assumed, but this is backend focused)

```mermaid
graph TD
    subgraph Application_Layer["Application Layer"]
        SvelteKit["SvelteKit (API Endpoints, SSR if any)"]
        PrismaClient["Prisma Client (ORM)"]
        BullMQClient["BullMQ Client (Task Enqueuing)"]
        AuthLib["Authentication Logic"]
    end
    subgraph Infrastructure_Services["Infrastructure & Backing Services"]
        NodeJS["Node.js Runtime"]
        PostgreSQL["PostgreSQL Database"]
        Redis["Redis (Cache & BullMQ Broker)"]
        BullMQWorkers["BullMQ Workers (Node.js Processes)"]
    end
    subgraph External_APIs_Services["External APIs & Services"]
        CloudinaryAPI["Cloudinary API (Files)"]
        FlutterwaveAPI["Flutterwave API (Payments)"]
        PerplexityAPI["Perplexity Sonar API"]
        GeminiAPI["Google Gemini API"]
        MistralAPI["Mistral AI API"]
        BraveSearchAPI["Brave Search API"]
        DomainRAPI["DomainR API"]
        BrandFetchAPI["BrandFetch API"]
        GitHubAPI["GitHub API (Integrations)"]
        JiraAPI["Jira API (Integrations)"]
        SlideSpeakAPI["SlideSpeak API (Pitch Decks)"]
    end
    subgraph DevOps_Tooling["DevOps & Tooling"]
        Docker["Docker (Containerization)"]
        Coolify["Coolify (Deployment PaaS - Example)"]
        Git["Git (Version Control)"]
        PackageManager["npm/pnpm/yarn (Package Management)"]
    end

    SvelteKit --> NodeJS
    PrismaClient -- interacts with --> PostgreSQL
    BullMQClient -- enqueues to --> Redis
    BullMQWorkers -- consumes from --> Redis
    BullMQWorkers -- run on --> NodeJS
    AuthLib -- part of --> SvelteKit
    SvelteKit -- uses --> PrismaClient
    SvelteKit -- uses --> BullMQClient
    SvelteKit -- calls --> CloudinaryAPI
    SvelteKit -- calls --> FlutterwaveAPI
    SvelteKit -- calls --> PerplexityAPI
    SvelteKit -- calls --> GeminiAPI
    SvelteKit -- calls --> MistralAPI
    SvelteKit -- calls --> BraveSearchAPI
    SvelteKit -- calls --> DomainRAPI
    SvelteKit -- calls --> BrandFetchAPI
    SvelteKit -- calls --> GitHubAPI
    SvelteKit -- calls --> JiraAPI
    SvelteKit -- calls --> SlideSpeakAPI
```

---

## 🧪 Getting Started

### Prerequisites

*   **Node.js**: v18.x or v20.x recommended.
*   **pnpm** (or npm/yarn): For package management.
*   **PostgreSQL**: A running instance (local or remote).
*   **Redis**: A running instance (local or remote) for caching and BullMQ.
*   **Docker & Docker Compose**: Optional, for containerized local development.
*   **API Keys**: For Cloudinary, Flutterwave, Perplexity, Gemini, Mistral, Brave Search, DomainR, BrandFetch, GitHub (OAuth App), SlideSpeak, etc.

---

### Installation & Setup

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/lowkey-dev21/Idea_lens-BE.git # Replace with actual repo URL
    cd Idea_lens-BE
    ```

2.  **Install Dependencies:**
    ```bash
    pnpm install # Or npm install / yarn install
    ```

3.  **Configure Environment Variables:**
    *   Copy the example environment file:
        ```bash
        cp .env.example .env
        ```
    *   Edit `.env` with your actual database URLs, Redis URLs, API keys, JWT secrets, Cloudinary credentials, Flutterwave keys, etc. **Crucial variables include:**
        *   `DATABASE_URL`
        *   `REDIS_CACHE_URL`
        *   `REDIS_QUEUE_URL`
        *   `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
        *   `FLUTTERWAVE_PUBLIC_KEY`, `FLUTTERWAVE_SECRET_KEY`, `FLUTTERWAVE_ENCRYPTION_KEY`
        *   `PERPLEXITY_API_KEY`, `GEMINI_API_KEY`, `MISTRAL_API_KEY`
        *   `BRAVE_SEARCH_API_KEY`
        *   `DOMAINR_API_KEY` (if applicable)
        *   `BRANDFETCH_API_KEY` (if applicable)
        *   `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` (for OAuth)
        *   `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` (for OAuth)
        *   `SLIDESPEAK_API_KEY` (if applicable)
        *   `SESSION_SECRET` (a long, random string for session signing)
        *   `BASE_URL` (e.g., `http://localhost:5173` for dev, `https://yourdomain.com` for prod)

4.  **Initialize Database:**
    *   Ensure your PostgreSQL server is running and accessible via `DATABASE_URL`.
    *   Run Prisma migrations to create the database schema:
        ```bash
        pnpm prisma migrate dev # Or npx prisma migrate dev
        ```
    *   (Optional) Seed initial data if a seed script is provided:
        ```bash
        pnpm prisma db seed # Or npx prisma db seed
        ```

5.  **Run Development Server:**
    *   This starts the SvelteKit dev server and your BullMQ workers (ensure your `package.json` `dev` script handles both, e.g., using `concurrently`).
        ```bash
        pnpm run dev
        ```
    *   The API will usually be available at `http://localhost:5173` (or your configured SvelteKit port).

---


## 📜 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.
*(To be created: Create a LICENSE file with the MIT License text.)*

---

## 🤝 Contributing

We welcome contributions from the community! Whether it's bug reports, feature requests, documentation improvements, or code contributions, your help is appreciated.

Please read our `CONTRIBUTING.md` (to be created) for guidelines on how to contribute, coding standards, and the pull request process.

---

## 📡 Connect & Stay Updated

*   **Star the Repo 🌟**: If you find IdeaLens interesting or useful!
*   **Watch for Updates**: Follow the repository for new releases and developments.
*   **(Future)**: Links to official documentation, community forum, or social media.