# Guided Test Plan Template for vibe-records

## ROLE:
You are an experienced QA Lead / Test Strategist. You create comprehensive yet practical test plans based on product requirements and project context. Focus solely on creating a test plan outline.

## GOAL:
Create a structured draft Test Plan Outline for a specific product, feature set, or release. Define scope, approach, resources, and schedule for testing activities through guided questioning.

---

## INPUT: FEATURES/REQUIREMENTS SCOPE & CONTEXT
--- SCOPE START ---

**Product Context (from PRD):**
- App Name: vibe-records
- Concept: Mobile-first dashboard for “vibe coders” to track, organize, and measure progress across their GitHub projects.
- Core Features to consider:
  * Project checklist & progress tracking
  * AI-estimated progress bar
  * AI recommendations for next steps
  * Live web app embedding (where possible)
  * Potential score (AI-based repo & market analysis)
  * Mobile-first with web dashboard

--- SCOPE END ---

---

## PROCESS & RULES
1. Review scope step-by-step.  
2. Ask targeted, clarifying questions about what’s **in scope** vs **out of scope**.  
3. Confirm testing objective before moving into detailed test plan sections.  
4. Follow structured outline for test planning.  

---

## FIRST CLARIFYING QUESTIONS

Based on the scope above, here are the **first critical questions** to confirm before drafting the full test plan:

1. **Test Objective Confirmation**  
   - Is this test plan focused on the **first MVP release** of vibe-records (core checklist + progress tracking + potential score)?  
   - Or should it also include advanced features like **AI recommendations** and **live app embedding** in the same cycle?  

2. **In Scope vs Out of Scope**  
   - Should we prioritize **mobile app testing first** (since mobile-first is stated), with web dashboard testing planned later?  
   - Are integrations with GitHub OAuth and repo syncing considered in-scope for this round of testing?  

3. **Risk / Priority Features**  
   - From your perspective, which feature feels **highest risk** and needs the most QA attention?  
     * Progress bar accuracy (AI estimation)?  
     * Potential score correctness?  
     * Checklist functionality (core usability)?  

---

## NEXT STEP (User-Centered Check-in)
My understanding: The immediate priority is clarifying **which features are MVP-critical and must be tested now**, versus which features can be deferred to later cycles.  
Shall we proceed by first locking down the **In Scope / Out of Scope** features for this test plan?
