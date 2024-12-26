# Globaleur Website Clone

A modern React-based clone of the Globaleur website, built with TypeScript, Tailwind CSS, and React Router. This project implements a comprehensive frontend solution with placeholder data and API functionality.

## Features

- 🎨 Modern UI components built with React and Tailwind CSS
- 🚦 Smooth page navigation using React Router
- 📱 Fully responsive design for all device sizes
- 🔄 Simulated API functionality with placeholder data
- 🎯 Tour search and filtering capabilities
- 🌍 City and destination browsing
- 🔐 User authentication interface

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd globaleur-clone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication related components
│   ├── layout/         # Layout components (Header, Footer)
│   └── ui/            # Common UI elements
├── pages/              # Individual page components
│   ├── Home.tsx
│   ├── Tours.tsx
│   ├── TourDetail.tsx
│   └── FAQ.tsx
├── styles/             # Global styles and Tailwind configuration
├── utils/              # Utility functions and API simulation
├── types/              # TypeScript type definitions
└── data/              # Placeholder JSON data
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Development Guidelines

### Component Structure
- Use functional components with TypeScript
- Implement proper prop typing
- Follow the container/presentational pattern
- Keep components focused and reusable

### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography
- Use the provided color palette and design tokens

### API Integration
The project includes a simulated API layer (`src/utils/api.ts`) with the following features:
- Tour and city data fetching
- Search and filtering functionality
- Simulated network delays
- Type-safe responses

### Adding New Features
1. Create new components in appropriate directories
2. Update TypeScript interfaces as needed
3. Add new API endpoints in api.ts if required
4. Update routing configuration in App.tsx
5. Follow existing patterns for state management

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request with a clear description
4. Ensure all tests pass and types are correct

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```
