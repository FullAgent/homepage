# Fulling - Official Website

![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/react-19.2.0-blue)
![Vite](https://img.shields.io/badge/vite-6.2.0-purple)
![TypeScript](https://img.shields.io/badge/typescript-5.8.2-blue)

This repository contains the source code for the **official landing page** of Fulling, a next-generation cloud development platform. The website showcases the product's "Terminal Is All You Need" philosophy through a high-performance, retro-futuristic terminal aesthetic.

## ✨ Features

- **Immersive Terminal UI**: A custom-designed interface that mimics a high-end terminal environment with strict right angles and monospaced typography.
- **Reactive Animations**: Smooth, performance-optimized animations using Framer Motion.
- **Modern Tech Stack**: Built with the latest React 19 and Vite for blazing fast performance.
- **Responsive Design**: Fully responsive layout that maintains the terminal aesthetic across all devices.
- **No-Nonsense Workflow**: A clean, developer-focused presentation of the product's value proposition.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Custom CSS with [Tailwind CSS](https://tailwindcss.com/) utility support
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 🚀 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fulling-landing-page.git
   cd fulling-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```
├── src/
│   ├── components/    # UI Components (Hero, Navigation, etc.)
│   ├── App.tsx        # Main Application Component
│   ├── index.css      # Global Styles & Tailwind Imports
│   └── main.tsx       # Entry Point
├── public/            # Static Assets
└── package.json       # Project Dependencies & Scripts
```

## 🎨 Customization

This project uses a hybrid styling approach. While Tailwind CSS is available, significant styling is handled via custom CSS in `index.html` and `index.css` to enforce the strict "terminal" aesthetic (e.g., custom scrollbars, scanlines, and glow effects).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
