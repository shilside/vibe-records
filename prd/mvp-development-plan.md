# vibe-records MVP Development Plan

## 🎯 MVP GOAL & HYPOTHESIS
**Core Assumption:** Developers ("vibe coders") want a **central productivity-style dashboard** to track progress of their GitHub repos with visual indicators, dummy AI scoring, and project organization. Even without full AI in v1, they will find value if the UI is smooth, repos sync easily, and progress feels tangible.

**This MVP Tests:**
- Whether users care enough to connect GitHub and track repos
- Whether visual progress dashboards increase motivation
- Whether a potential "dummy" AI score is compelling enough to keep them engaged pre-real AI

**Success Metric:** 50+ beta testers connecting 2+ repos within 1 month of launch.

---

## 🚀 CORE FEATURES (MVP SCOPE)

### Phase 1: Foundation (Weeks 1-2)
- **Project Setup** - Next.js + Supabase + Tailwind
- **GitHub OAuth Integration** - User authentication and repo access
- **Repo Sync + Selection** - Choose which repos to track
- **UI Scaffolding** - Stacked project cards with dummy progress values

### Phase 2: Core Features (Week 3)
- **Checklist Integration** - Basic tasks per project
- **Dummy AI Scoring** - Placeholder values for potential scores
- **Polish & Animations** - Framer Motion, mobile responsiveness

### Phase 3: Launch (Week 4)
- **Final Bug Fixes & QA** - Security testing, edge cases
- **Deploy to Vercel** - Production + staging environments
- **Closed Beta Launch** - 50 testers from dev communities

---

## 🛠️ TECH STACK

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Rapid UI development
- **Framer Motion** - Smooth animations
- **React Query** - Server state management

### Backend
- **Supabase** - Database, auth, and real-time features
- **PostgreSQL** - Relational database for project data
- **Row Level Security** - User data isolation

### AI Integration
- **OpenAI API** - GPT-4 for progress estimation and recommendations
- **Gemini API** - Alternative AI model for backup/fallback
- **Vector Embeddings** - Store and analyze repo content

### Deployment
- **Vercel** - Next.js hosting and deployment
- **Supabase** - Backend hosting
- **GitHub Actions** - CI/CD pipeline

---

## 📱 APP STRUCTURE

### Core Pages
1. **Dashboard** - Main project overview with cards
2. **Project Detail** - Individual project view with progress and AI insights
3. **Settings** - GitHub connection and preferences
4. **Analytics** - Personal progress tracking

### Database Schema
```sql
-- Users table (handled by Supabase Auth)
-- Projects table (linked to user, GitHub repo data)
-- Progress_entries table (progress history)
-- AI_insights table (stored AI analysis results)
-- Checklists table (milestone tracking)
```

---

## 🎨 UI/UX APPROACH

### Design Principles
- **Mobile-First** - Optimize for mobile, enhance for desktop
- **Clean & Minimal** - Focus on content, not decoration
- **Progress-Focused** - Visual progress indicators everywhere
- **Quick Actions** - Minimize clicks to complete tasks

### Key Components
- **Stacked Project Cards** - Long cards with shadows, repo name, progress %, expandable description
- **Progress Bars** - Visual progress indicators with dummy values initially
- **Dummy AI Scoring** - Placeholder potential scores labeled as "Preview/Beta"
- **Checklist Integration** - Basic task management per project
- **GitHub Connection Status** - Clear indication of repo sync status
- **Productivity-Style UI** - Long stacked cards, generous padding, shadows, Tailwind animations

---

## 📊 SUCCESS METRICS & KPIs

### User Engagement
- Daily/Monthly Active Users
- Projects tracked per user
- Time spent in app
- Feature adoption rates

### Product Validation
- User retention (7, 30, 60 days)
- Feedback scores on AI insights
- Projects completed to MVP stage
- User referrals and sharing

---

## 🚧 DEVELOPMENT TIMELINE

### Sprint 1-2 (Weeks 1-2): Foundation
- Project setup (Next.js + Supabase + Tailwind)
- Auth + GitHub OAuth implementation
- Repo sync + selection functionality
- UI scaffolding (stacked project cards, dummy progress)

### Sprint 3 (Week 3): Core Features
- Checklist integration (basic tasks per project)
- Dummy AI scoring values placeholder
- Polish animations & mobile responsiveness

### Sprint 4 (Week 4): Launch
- Final bug fixes & QA (focus on security)
- Deploy to Vercel (production + staging)
- Closed beta with ~50 testers

**Timeline:** 1 month (intensive daily development)

---

## 🔍 RISK MITIGATION

### Technical Risks
- **AI API Costs** - Implement usage limits and fallbacks
- **GitHub Rate Limits** - Cache data and implement smart syncing
- **Performance** - Use Next.js optimizations and lazy loading

### Product Risks
- **User Adoption** - Focus on core value proposition
- **Feature Scope** - Stick to MVP features, defer advanced features
- **AI Accuracy** - Start with simple heuristics, improve over time

---

## 💰 RESOURCE REQUIREMENTS

### Development Team
- **1 Full-Stack Developer** (you) - 12 weeks
- **1 AI/ML Specialist** (consultant) - 4 weeks for AI features
- **1 UI/UX Designer** (consultant) - 2 weeks for final polish

### Infrastructure Costs
- **Vercel Pro** - $20/month
- **Supabase Pro** - $25/month
- **OpenAI API** - ~$100-200/month (estimated)
- **Domain & SSL** - $15/year

---

## 🎯 NEXT STEPS

1. **Confirm MVP Scope** - Are these the right features to start with?
2. **Set Timeline** - Does 12 weeks work for your schedule?
3. **Tech Decisions** - Any preferences on specific libraries or approaches?
4. **Design Direction** - Any specific UI/UX preferences or inspirations?
5. **AI Strategy** - Which AI features are most important to validate first?

---

## 📝 NOTES
- This plan follows the "number one rule" - keeping code simple and focused
- Built-in tracker for this app itself (meta-tracking!)
- Mobile-first approach with Next.js for optimal performance
- AI features are core to the value proposition, so prioritize them early
