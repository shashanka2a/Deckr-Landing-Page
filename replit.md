# Overview

This is a modern minimal landing page project for "Deckr," a presentation creation platform. The project is built with React, TypeScript, and Parcel, featuring a clean and professional design with multiple sections including navigation, hero, features, how-it-works, and call-to-action footer. The design emphasizes simplicity, user experience, and conversion optimization with a teal color scheme and modern UI components.

# Recent Changes

## Latest Updates (September 14, 2025)
- **SEO Optimization**: Comprehensive meta tags, Open Graph cards, Twitter cards, and custom favicon implementation
- **Hero Section Enhancement**: Replaced static SVG illustration with AI-generated workflow visualization showing the user idea → AI transformation → presentation flow
- **Build System**: Successfully migrated from Vite to Parcel with all TypeScript imports resolved
- **Visual Assets**: Custom SVG favicon in brand teal color (#0d9488) and high-quality AI workflow illustration

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Parcel for fast development and optimized builds with built-in TypeScript support
- **Styling**: Tailwind CSS with custom design system variables and responsive design patterns
- **Component Structure**: Modular component architecture with separate files for each major section (Navigation, Hero, Features, HowItWorks, CTAFooter)

## UI Component System
- **Design System**: shadcn/ui components providing a comprehensive set of accessible, customizable UI primitives
- **Component Library**: Extensive collection of pre-built components including buttons, dialogs, forms, navigation menus, and data visualization components
- **Styling Approach**: CSS-in-JS approach using class-variance-authority for component variants and clsx/tailwind-merge for conditional styling
- **Accessibility**: Built-in accessibility features through Radix UI primitives

## Theme and Design System
- **Color Scheme**: Teal-based primary colors with slate gray neutrals for a professional, modern appearance
- **Typography**: Responsive typography system with clear hierarchy and readable font sizes
- **Layout**: Flexbox and CSS Grid layouts with responsive breakpoints for mobile-first design
- **Design Tokens**: CSS custom properties for consistent spacing, colors, and design values

## State Management
- **Local State**: React useState and useContext for component-level state management
- **Theme Management**: next-themes integration for dark/light mode support
- **Form Handling**: react-hook-form for efficient form state management and validation

## Asset Management
- **Images**: Custom AI-generated illustrations for hero section showcasing presentation creation workflow
- **Icons**: Lucide React for consistent iconography throughout the application
- **Favicon**: Custom SVG favicon with brand-consistent teal color scheme
- **SEO Assets**: Complete meta tag suite with Open Graph and Twitter card optimization

# External Dependencies

## Core Framework Dependencies
- **React & React DOM**: Core React framework for building the user interface
- **TypeScript**: Static type checking and enhanced developer experience
- **Parcel**: Modern build tool with zero-configuration setup and optimized production builds

## UI and Styling Libraries
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Comprehensive collection of low-level UI primitives for accessibility and customization
- **shadcn/ui**: Pre-built component library built on top of Radix UI with modern design patterns
- **class-variance-authority**: Type-safe component variants and conditional styling
- **clsx & tailwind-merge**: Utility libraries for conditional and merged CSS classes

## Utility Libraries
- **Lucide React**: Icon library providing consistent and customizable SVG icons
- **next-themes**: Theme management system for dark/light mode switching
- **react-hook-form**: Performant form library with minimal re-renders
- **input-otp**: Specialized component for OTP input handling
- **sonner**: Toast notification system for user feedback

## Data Visualization and Interactive Components
- **Recharts**: Chart library for data visualization components
- **Embla Carousel**: Lightweight carousel component for image galleries
- **react-day-picker**: Date picker component for form inputs
- **react-resizable-panels**: Resizable panel components for flexible layouts

## Image and Content Sources
- **Unsplash**: Stock photography service for high-quality images with proper licensing
- **Figma Design**: Original design source providing design specifications and assets

## Development Tools
- **Vite SWC Plugin**: Fast React compilation and transformation
- **Path Alias Configuration**: Simplified import paths using @ alias for src directory
- **serve**: Static file serving for production deployment