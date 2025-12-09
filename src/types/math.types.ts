export interface MathChoice {
  id: string // 'A', 'B', 'C', 'D', ...
  textHtml: string // HTML for the choice label (may include math markup)
  isCorrect: boolean
}

export interface SkillRef {
  skillId: string // e.g. 'math.int-add-sub'
  weight?: number
  role?: 'primary' | 'secondary'
}

export interface MathProblemData {
  id: string // e.g. 'prealg-01-q1'
  number: number // display number
  promptHtml: string // full HTML block for prompt
  hintHtml: string // full HTML block for hint
  solutionHtml: string // full HTML block for solution
  choices: MathChoice[]
  skills: SkillRef[]
  difficulty?: 'easy' | 'medium' | 'hard'
  tags?: string[]
}
