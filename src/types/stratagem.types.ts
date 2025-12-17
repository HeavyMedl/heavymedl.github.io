export interface StratagemExample {
  id: string
  /** Short label like "Example 1" or "Dividing by a common factor" */
  label?: string
  promptHtml: string
  solutionHtml: string
  /** Optional: how spicy this example is */
  difficulty?: 1 | 2 | 3 | 4 | 5
}

export interface Stratagem {
  /** Globally unique, e.g. "strat.prime-factorization.basic" */
  id: string

  /** Human label, e.g. "Prime Factorization" */
  label: string

  /**
   * Short one-liner: "Break a number into a product of primes."
   */
  description?: string

  /**
   * Skills this stratagem supports (your SkillNode ids).
   * e.g. ["math.skill.factors-multiples", "math.skill.frac.simplify"]
   */
  skillIds: string[]

  /**
   * Main “concept card” body. Can include definition, when to use it,
   * and a generic step-by-step procedure.
   */
  bodyHtml: string

  /**
   * Optional mini examples that are not full workbook problems.
   */
  examples?: StratagemExample[]

  /**
   * Tags for filtering/search ("fractions", "prime-factorization", etc.).
   */
  tags?: string[]

  /**
   * Escape hatch: icon names, XP weights, UI hints, etc.
   */
  meta?: Record<string, unknown>
}
