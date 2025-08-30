# Vibe Records - Project Structure & File Reference

## 📁 Project Overview
**Vibe Records** - A productivity dashboard for indie developers to track GitHub repository progress with AI insights and visual progress indicators.

## 🏗️ Directory Structure

```
vibe-records/
├── 📁 1/                          # ReactBits Components (v1)
│   └── 📁 TextAnimations/
│       └── 📁 CurvedLoop/
│           └── 📄 CurvedLoop.tsx
├── 📁 2/                          # ReactBits Components (v2)
│   ├── 📁 CurvedLoop/
│   │   └── 📄 CurvedLoop.tsx
│   └── 📁 GradientText/
│       ├── 📄 GradientText.css
│       └── 📄 GradientText.tsx
├── 📁 prd/                        # Product Requirements & Design
│   ├── 📄 guided-mvp.md           # MVP development guide
│   ├── 📄 Guided-Test-Plan.md     # Testing strategy
│   ├── 📄 mvp-concept.md          # Core concept definition
│   ├── 📄 mvp-development-plan.md # Development roadmap
│   ├── 📄 vibe-records-PRD.md     # Product Requirements Document
│   ├── 📄 vibe-records-UX-User-Flow.md # User experience flow
│   ├── 📄 vibe-records-dashboard-wireframe.md # UI wireframes
│   ├── 📄 vibe_records_wireframe_update.pdf # Updated wireframes
│   ├── 📄 number-one-rule.md      # Development principles
│   └── 🖼️ [Multiple wireframe images] # Design references
├── 📁 src/                        # Source Code
│   ├── 📁 app/                    # Next.js App Router
│   │   ├── 📄 globals.css         # Global styles & themes
│   │   ├── 📄 layout.tsx          # Root layout component
│   │   └── 📄 page.tsx            # Main dashboard page
│   ├── 📁 components/             # React Components
│   │   ├── 📄 CustomCurvedLoop.tsx # Custom animated text component
│   │   ├── 📄 Header.tsx          # Header component (unused)
│   │   ├── 📄 ProjectCard.tsx     # Project card component (unused)
│   │   ├── 📄 Sidebar.tsx         # Sidebar component (unused)
│   │   └── 📁 ui/                 # Shadcn UI Components
│   │       └── 📄 dropdown-menu.tsx # Dropdown menu component
│   ├── 📁 hooks/                  # Custom React Hooks (empty)
│   ├── 📁 lib/                    # Utility Libraries
│   │   ├── 📄 supabase.ts         # Supabase client configuration
│   │   └── 📄 utils.ts            # General utilities
│   ├── 📁 types/                  # TypeScript Type Definitions
│   │   └── 📄 project.ts          # Project-related types
│   └── 📁 utils/                  # Additional utilities (empty)
├── 📁 public/                     # Static Assets
│   └── 📄 manifest.json           # PWA manifest
├── 📄 components.json             # Shadcn UI configuration
├── 📄 env.example                 # Environment variables template
├── 📄 jsrepo.json                 # ReactBits configuration
├── 📄 next.config.js              # Next.js configuration
├── 📄 package.json                # Dependencies & scripts
├── 📄 postcss.config.js           # PostCSS configuration
├── 📄 tailwind.config.js          # Tailwind CSS configuration
├── 📄 tsconfig.json               # TypeScript configuration
└── 📄 README.md                   # Project documentation
```

## 🎯 Key Files & Their Purposes

### 🏠 **Main Application Files**
- **`src/app/page.tsx`** - Main dashboard with motivational text animation, project cards, search, and controls
- **`src/app/layout.tsx`** - Root layout with metadata, viewport, and iOS PWA configuration
- **`src/app/globals.css`** - Global styles, fonts (Sora, Orbitron, Lexend), themes, and responsive design

### 🎨 **UI Components**
- **`src/components/CustomCurvedLoop.tsx`** - Custom animated text component with Lexend font, responsive sizing, and gradient effects
- **`src/components/ui/dropdown-menu.tsx`** - Shadcn dropdown for account center with theme toggle

### 🎭 **Animation Components**
- **`2/CurvedLoop/CurvedLoop.tsx`** - Original ReactBits CurvedLoop component
- **`2/GradientText/GradientText.tsx`** - ReactBits gradient text component

### 📋 **Product Documentation**
- **`prd/vibe-records-PRD.md`** - Complete product requirements and specifications
- **`prd/guided-mvp.md`** - MVP development guide and scope
- **`prd/mvp-development-plan.md`** - Detailed development roadmap
- **`prd/vibe-records-UX-User-Flow.md`** - User experience and flow documentation

### ⚙️ **Configuration Files**
- **`package.json`** - Dependencies: Next.js, Tailwind, Lucide React, Shadcn UI, ReactBits
- **`tailwind.config.js`** - Custom colors, shadows, and design system
- **`next.config.js`** - Next.js configuration for deployment
- **`components.json`** - Shadcn UI component configuration

## 🚀 Current Implementation Status

### ✅ **Completed Features**
1. **Dark Theme UI** - Sophisticated dark mode with `#0A0A0A` background
2. **Responsive Design** - Mobile-first approach with proper viewport handling
3. **Motivational Text Animation** - 5-line CurvedLoop with Lexend font, 20% opacity
4. **Header Navigation** - V logo, notification bell, account dropdown with theme toggle
5. **Project Management UI** - Search, sort, layout toggle, add project button
6. **Project Cards** - Ongoing/completed sections with progress indicators
7. **iOS PWA Support** - Proper viewport, safe areas, and home screen integration
8. **Font Integration** - Sora (main), Orbitron (logo), Lexend (motivational text)

### 🔄 **In Progress**
- **Backend Integration** - Supabase setup (configured but not connected)
- **Authentication** - GitHub OAuth (planned but not implemented)

### 📋 **Planned Features**
- **Real AI Integration** - OpenAI/Gemini APIs for progress estimation
- **GitHub Repo Sync** - Connect and track actual repositories
- **User Authentication** - GitHub OAuth login
- **Real-time Updates** - Live progress tracking
- **Social Features** - Sharing and collaboration

## 🎨 **Design System**

### **Colors**
- **Background**: `#0A0A0A` (dark)
- **Cards**: `#1A1A1A` (slightly lighter)
- **Text**: `#F0EDE5` (sand dune)
- **Accent**: `#007AFF` (blue)

### **Typography**
- **Main Font**: Sora (100-800 weights)
- **Logo Font**: Orbitron (400-900 weights)
- **Motivational Text**: Lexend (100-900 weights)

### **Spacing & Layout**
- **Mobile-first**: Responsive breakpoints
- **Padding**: 1.2rem on sides
- **Border Radius**: 22px for cards
- **Shadows**: Subtle depth effects

## 🔧 **Development Commands**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run type-check   # TypeScript type checking
```

## 📱 **Deployment**
- **Platform**: Vercel
- **Repository**: https://github.com/shilside/vibe-records
- **Status**: Live and updated

---

*Last Updated: Current session*
*Next Steps: Backend integration, authentication, real AI features*
