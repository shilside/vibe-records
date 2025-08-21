# Guided MVP Development Plan Template for vibe-records

## ROLE:
You are an expert Technical Project Manager and Startup Advisor specializing in lean methodologies and MVP development planning. Act as a specialized agent focused solely on creating a practical MVP development plan. Respond with the perspective of an expert in this field.

## GOAL:
Collaborate with me to create a comprehensive draft MVP Development Plan. This plan will outline the strategy, scope, timeline, resources, and success metrics for building and launching the Minimum Viable Product (MVP). We will use the provided Product Requirements Document (PRD) as context and my MVP concept description as the starting point, proceeding iteratively through guided questioning.

---

## INPUT 1: PRODUCT REQUIREMENTS DOCUMENT (PRD)
--- PRD START ---

App Name: vibe-records  
Concept: Mobile-first dashboard for “vibe coders” to track, organize, and measure progress across their GitHub projects.  
Key Features (from PRD):  
- Project checklist & progress tracking  
- AI-estimated progress bar  
- AI recommendations for next steps  
- Live web app embedding (where possible)  
- Potential score (AI-based repo & market analysis)  
- Mobile-first with web dashboard  

--- PRD END ---

## INPUT 2: MY INITIAL MVP CONCEPT DESCRIPTION
--- MVP CONCEPT START ---

*(To be provided by you — core MVP idea, minimum features, constraints. Example below for structure.)*  

Example: MVP tests if devs find value in seeing all their repos in one place with a progress % and potential score.  
Target: 50 indie hackers / students.  
Problem: Too many repos, no central clarity.  
Minimum Features: GitHub OAuth + repo fetch, project selection, checklist, progress bar, potential score.  
Constraint: Mobile-first, 2-month timeline, small dev team.  

--- MVP CONCEPT END ---

---

## PROCESS & RULES
1. Review PRD + MVP description step-by-step.  
2. Ask targeted clarifying questions about MVP goal and minimum feature set.  
3. Validate assumptions before moving on to tech stack and timeline.  
4. Proceed iteratively until all sections of MVP Plan can be filled.  

---

## FIRST CLARIFYING QUESTIONS

Based on the PRD, here are the most important questions to lock down before drafting the MVP plan:

1. **MVP Goal/Hypothesis**  
   - What’s the *specific* assumption we want to test with this MVP?  
     (e.g., “Indie devs actually want a single dashboard with AI-driven progress insights” vs “Potential scores will influence which projects they pursue.”)  

2. **Core Feature Set**  
   - Out of the PRD features, which ones are *absolutely essential* for MVP launch?  
     * Repo sync + selection  
     * Checklist & progress tracking  
     * AI-estimated progress bar  
     * Potential score  
   - Should AI recommendations + live app embedding be postponed to post-MVP?  

3. **Constraints & Priorities**  
   - Do you have a target **timeline** (e.g., 2 months, 3 sprints)?  
   - Any **budget constraints** or preferred **tech stack** (React Native, Flutter, etc.) we should lock in early?  

---

## NEXT STEP (User-Centered Check-in)
My understanding: The immediate priority is clarifying the **MVP hypothesis** (what we are actually testing) and trimming the PRD features down to the **absolute minimum viable set**.  
Shall we proceed by first defining the **MVP Goal/Hypothesis** before freezing the feature set?  
