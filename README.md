# 🛍️ Sims PPOB — Digital Store & Payment Hub

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" />
  <img src="https://raw.githubusercontent.com/radenmasabdul/logo/refs/heads/main/vite.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" width="50" />
  <img src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg" width="50" />
  <img src="https://ui.shadcn.com/favicon.ico" width="50" />
</p>

Sims PPOB is a modern, fast, and user-friendly digital payment platform designed to simplify everyday transactions such as mobile top-ups, electricity payments, and balance management. Built with a clean and responsive interface, it provides a smooth and efficient experience for users to access essential PPOB services in one place.

Focusing on speed, clarity, and usability, Sims PPOB brings all essential payment features into a single streamlined dashboard—making digital transactions easier, quicker, and more accessible anytime.

## 🚀 Key Features

- 💳 Quick and easy balance top-up for PPOB transactions
- 📱 Mobile credit and data package purchases in one place
- 💡 Electricity (PLN) bill payments with fast processing
- 🧾 Complete transaction history tracking
- 📊 Detailed transaction insights for better monitoring
- 🔄 Real-time balance and user activity management
- ⚡ Fast and reliable API integration for PPOB services
- 🎨 Modern UI built with reusable Shadcn/ui components
- 📱 Fully responsive design for desktop, tablet, and mobile
- 🎞️ Smooth user experience with Framer Motion animations
- 🍞 Interactive notifications powered by SweetAlert2
- 🧠 Secure form validation using Zod + React Hook Form
- 🌐 Multi-page navigation using React Router DOM

## 🛠️ Tech Stack

- **Library**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **State Management**: Redux Toolkit + React Redux
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form
- **Schema Validation**: Zod
- **Animations**: Framer Motion
- **Notifications**: SweetAlert2
- **Icons**: Lucide React
- **Code Quality**: ESLint + TypeScript ESLint


## 📋 Prerequisites

Before running Sims PPOB App locally, make sure you have installed:

- **Node.js** v18 or higher
- **npm** or **yarn**
- **Git**
- **Modern Browser** (Chrome, Edge, Firefox)
- **Nutech API** running for full backend integration

## ⚡ Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/radenmasabdul/sims-ppob.git
cd sims-ppob
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=YOUR_API_BASE_URL
```

### 4. Start Development Server
```bash
npm run dev
```

The application will run at http://localhost:5173

## 📁 Project Structure

```
sims-ppob-abdul/
├── public/                             # Static assets (favicon, images)
├── src/                                # Main source code
│   ├── app/                            # App core setup
│   │   ├── App.tsx                     # Root app component
│   │   ├── RootLayout.tsx              # Main layout wrapper
│   │   └── providers.tsx               # Global providers (Redux, etc.)
│
│   ├── assets/                         # Images & branding assets
│
│   ├── components/                     # Reusable UI components
│   │   ├── common/                     # Common components
│   │   ├── layout/                     # Layout components
│   │   └── ui/                         # shadcn/ui components
│
│   ├── features/                       # Feature-based modules
│   │   ├── membership/                 # Auth & user system
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── pages/
│   │   │   ├── schemas/
│   │   │   ├── services/
│   │   │   ├── stores/
│   │   │   └── types/
│   │
│   │   ├── transaction/                # Payment & transaction system
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   ├── stores/
│   │   │   └── types/
│   │
│   │   ├── information/                # Information module
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   └── stores/
│
│   ├── hooks/                         # Global custom hooks
│
│   ├── lib/                           # Utility helpers
│   │   ├── currency.ts
│   │   ├── swal.ts
│   │   └── utils.ts
│
│   ├── pages/                         # Route pages
│   │   ├── home/
│   │   ├── transaction/
│   │   ├── membership/
│   │   └── NotFound.tsx
│
│   ├── routes/                        # Routing system
│   │   ├── AppRouter.tsx
│   │   └── ProtectedRoute.tsx
│
│   ├── services/                      # Base API layer
│   │   └── baseApi.ts
│
│   ├── stores/                        # Global stores
│   │   ├── alert.ts
│   │   └── index.ts
│
│   ├── styles/                        # Global styles
│   │   └── index.css
│
│   ├── types/                         # Global TypeScript types
│   │   └── api.ts
│
│   ├── main.tsx                       # App entry point
│
├── public/
│   └── favicon.png
│
├── .env
├── .env.example
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## 🌍 Live Demo

[Sims PPOB](https://sims-ppob-beta.vercel.app/)

## 👨‍💻 Author

**radenmasabdul**
- GitHub: [@radenmasabdul](https://github.com/radenmasabdul)
