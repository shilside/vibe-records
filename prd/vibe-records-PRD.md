# Prompt Template for Guided PRD Creation (with User-Centered Checks)

## ROLE:
You are an expert Product Manager assistant and requirements analyst. Act as a specialized agent focused solely on eliciting product requirements. Respond with the perspective of an expert in product requirements gathering.

## GOAL:
Collaborate with me to create a comprehensive draft Product Requirements Document (PRD) for a new product/feature through an iterative, question-driven process, ensuring alignment with my vision at each stage.

---

## MY INITIAL BRAINDUMP:
--- BRAINDUMP START ---

**App Name:** `vibe-records` (all lowercase, with hyphen)

**Concept:**  
An app for “vibe coders” (students, indie devs, finance bros building SaaS, AI builders, ecommerce devs, hobby coders) who are constantly spinning up projects. It helps them **track, organize, and measure progress** across all their apps — especially the half-serious ones that might later become real SaaS products.

**Core Problems it Solves:**
- Developers often start many projects but lose track of them.  
- No central place to check progress across GitHub apps or vibe projects.  
- Hard to tell which apps are worth pursuing further or have market potential.  
- Lack of motivation/structure in taking an idea from vibe → MVP → SaaS.

**Key Features (initial vision):**
- **Project Checklist & Progress Tracking**: Users can select which repos/projects to include, and see a checklist of milestones (idea → PRD → MVP → production).  
- **Progress Bar with AI Estimation**: Similar to how Cursor estimates project completeness, AI scans the repo/codebase and estimates progress toward MVP.  
- **AI Recommendations**: AI suggests next steps, missing pieces, or possible pivots.  
- **App Embedding/Preview**: Ability to click on an app and view an embedded live preview (web apps especially).  
- **Potential Score**: AI analyzes repo, code quality, market sentiment, and trends to assign a “potential to bloom” score.  
- **Mobile-first with Web Companion**: Mobile version prioritized for quick checks; web dashboard for deeper management.

**Target Users:**
- Indie developers / “vibe coders” experimenting with ideas.  
- Students building side projects.  
- Finance bros trying to ship SaaS experiments.  
- AI tinkerers and ecommerce tool builders.  
- Anyone with multiple half-built repos that need structure.

**Why It Matters:**
Right now, vibe coding leads to a graveyard of repos. With `vibe-records`, coders get a sense of progress, clarity, and motivation, plus insights on which projects are worth pushing further.

--- BRAINDUMP END ---

---

## DESIRED PRD STRUCTURE (Draft Filled Version)

### Introduction / Overview
`vibe-records` is a mobile-first productivity tool for developers who create many experimental projects but lack structure. It consolidates projects into a single dashboard with AI-powered progress tracking, checklists, and insights on potential.

### Goals / Objectives
- Provide a centralized dashboard for tracking projects.  
- Help developers measure how close each project is to MVP.  
- Motivate users with visual progress bars and milestones.  
- Offer actionable AI recommendations to improve projects.  
- Predict potential market value of projects through AI scoring.

### Target Audience / User Personas
- **Student Dev:** Has multiple small coding projects from school and side hustles, wants to track progress and share with peers.  
- **Indie Hacker:** Launches micro-SaaS projects, wants to know which ideas to double down on.  
- **Finance Bro / Hustler:** Tests SaaS tools for monetization, values quick AI scoring of potential.  
- **AI Builder:** Prototyping agents and AI apps, needs clarity on project readiness.  

### User Stories / Use Cases
- As a developer, I want to see a progress bar of my repo so I know how close it is to MVP.  
- As a vibe coder, I want to categorize my projects into collections (e.g., serious, experimental, SaaS-ready).  
- As a hustler, I want an AI-generated potential score so I can decide if it’s worth pursuing further.  
- As a student, I want a simple checklist of what’s left so I don’t abandon projects halfway.  

### Functional Requirements
- GitHub integration to fetch user projects.  
- Customizable project selection (choose which repos count as “vibe projects”).  
- AI model to estimate project completion percentage.  
- Checklist builder linked to milestones (PRD → MVP → Prod).  
- Embedding of live web app previews where possible.  
- AI potential scoring module.  
- Mobile app (iOS/Android) and web dashboard.  

### Non-Functional Requirements
- **Performance:** Sync GitHub repos quickly and update progress in real-time.  
- **Usability:** Mobile-first design, minimal setup required.  
- **Scalability:** Support users with 100+ repos.  
- **Security:** OAuth for GitHub login, secure storage of tokens.  
- **Reliability:** Offline checklist access with cloud sync.  

### Design Considerations / Mockups
- Mobile-first with a clean, card-based interface.  
- Progress bars on each project tile.  
- Potential score displayed as a badge.  
- Dark/light mode.  

### Success Metrics
- % of users actively tracking more than 3 projects.  
- Retention rate after 30/60 days.  
- Average number of projects scored and tracked.  
- User feedback on whether the potential score influenced project decisions.  

### Open Questions / Future Considerations
- How accurate can AI be in estimating project progress from repo/code?  
- Can potential scoring fairly balance hype vs. technical depth?  
- Should we allow integrations beyond GitHub (e.g., GitLab, Bitbucket)?  
- Embedding live app previews: technical feasibility and cost implications.  
- Monetization: freemium model vs. SaaS subscription.

---
