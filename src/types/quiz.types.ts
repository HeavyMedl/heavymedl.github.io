export type QuizQuestionType = 'multiple-choice'

export interface QuizOption {
  id: string
  label: string
  description?: string
  correct?: boolean
}

export interface MultipleChoiceQuestion {
  id: string
  type: 'multiple-choice'
  prompt: string
  options: QuizOption[]
  explanation?: string
}

export type QuizQuestion = MultipleChoiceQuestion

export interface QuizDefinition {
  id?: string
  title?: string
  description?: string
  questions: QuizQuestion[]
}
