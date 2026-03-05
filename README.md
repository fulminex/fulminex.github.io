# iOS Engineer Portfolio

A modern, responsive, and highly performant personal portfolio showcasing the professional journey, technical expertise, and projects.

## 🚀 Features

- **Modern Architecture**: Built with React and TypeScript for strong typing and component-based organization.
- **Lightning Fast**: Powered by Vite for instant server start and lightning-fast HMR.
- **Premium Design**: Styled with Tailwind CSS, featuring glassmorphism, smooth animations, and a sleek dark mode aesthetic.
- **Responsive Layout**: Adapts perfectly to mobile, tablet, and desktop screens.
- **Interactive Elements**: Includes subtle micro-interactions and hover states to enhance user engagement.
- **Automated Deployment**: CI/CD pipeline set up using GitHub Actions to deploy seamlessly to GitHub Pages.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Material Symbols](https://fonts.google.com/icons)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## 🏃‍♂️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/fulminex/fulminex.github.io.git
   ```
2. Navigate to the project directory
   ```sh
   cd fulminex.github.io
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`

## 📦 Building for Production

To create a production-ready build:

```sh
npm run build
```
This will generate optimized static assets in the `dist` folder.

To preview the production build locally:
```sh
npm run preview
```

## 🌐 Deployment

This project uses **GitHub Actions** for continuous deployment. Any changes pushed to the `master` branch will automatically trigger the `.github/workflows/deploy.yml` workflow, which builds the Vite project and deploys the `dist` folder directly to GitHub Pages.

**Live Site**: [Angel Herrera - Portfolio](https://fulminex.github.io/)
