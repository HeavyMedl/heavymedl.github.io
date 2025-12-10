import type { MathProblemData } from '@/types/math.types'

export const problems: MathProblemData[] = [
  {
    id: 'prealg-05-q1',
    number: 1,
    promptHtml: `
      <p>Compute: $\\dfrac{3}{8} + \\dfrac{1}{8}$.</p>
    `,
    strategyHtml: `
      <p>
        The denominators are the same, so keep the denominator and add the numerators. Then check if
        the result can be simplified.
      </p>
    `,
    solutionHtml: `
      <p>The fractions have the same denominator ($8$), so add the numerators:</p>
      <p>
        $$
        \\dfrac{3}{8} + \\dfrac{1}{8}
        = \\dfrac{3 + 1}{8}
        = \\dfrac{4}{8}.
        $$
      </p>
      <p>Simplify $\\dfrac{4}{8}$ by dividing numerator and denominator by $4$:</p>
      <p>
        $$
        \\dfrac{4}{8} = \\dfrac{4 \\div 4}{8 \\div 4} = \\dfrac{1}{2}.
        $$
      </p>
      <p>So the sum is $\\dfrac{1}{2}$.</p>
      <p>The correct choice is <strong>C. $\\dfrac{1}{2}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{3}{16}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{4}{16}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{1}{2}$', isCorrect: true },
      { id: 'D', textHtml: '$\\dfrac{4}{8}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.add-sub-like', role: 'primary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'add-sub', 'like-denominators']
  },

  {
    id: 'prealg-05-q2',
    number: 2,
    promptHtml: `
      <p>Compute: $\\dfrac{7}{9} - \\dfrac{2}{9}$.</p>
    `,
    strategyHtml: `
      <p>
        The denominators are the same, so subtract the numerators and keep the denominator. Simplify
        if possible.
      </p>
    `,
    solutionHtml: `
      <p>The fractions have the same denominator ($9$), so subtract the numerators:</p>
      <p>
        $$
        \\dfrac{7}{9} - \\dfrac{2}{9}
        = \\dfrac{7 - 2}{9}
        = \\dfrac{5}{9}.
        $$
      </p>
      <p>The fraction $\\dfrac{5}{9}$ cannot be simplified further (no common factors other than $1$).</p>
      <p>So the difference is $\\dfrac{5}{9}$.</p>
      <p>The correct choice is <strong>B. $\\dfrac{5}{9}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{9}{7}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{5}{9}$', isCorrect: true },
      { id: 'C', textHtml: '$\\dfrac{2}{9}$', isCorrect: false },
      { id: 'D', textHtml: '$\\dfrac{7}{11}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.add-sub-like', role: 'primary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'add-sub', 'like-denominators']
  },

  {
    id: 'prealg-05-q3',
    number: 3,
    promptHtml: `
      <p>Compute: $\\dfrac{1}{4} + \\dfrac{1}{6}$.</p>
    `,
    strategyHtml: `
      <p>
        The denominators are different. Find the least common denominator (LCD), rewrite each fraction
        with that denominator, then add.
      </p>
    `,
    solutionHtml: `
      <p>Find the least common denominator of $4$ and $6$.</p>
      <p>The least common multiple of $4$ and $6$ is $12$, so use $12$ as the common denominator.</p>
      <p>Rewrite each fraction with denominator $12$:</p>
      <p>
        $$
        \\dfrac{1}{4} = \\dfrac{3}{12}, \\quad
        \\dfrac{1}{6} = \\dfrac{2}{12}.
        $$
      </p>
      <p>Now add the fractions:</p>
      <p>
        $$
        \\dfrac{3}{12} + \\dfrac{2}{12}
        = \\dfrac{3 + 2}{12}
        = \\dfrac{5}{12}.
        $$
      </p>
      <p>The fraction $\\dfrac{5}{12}$ is already in simplest form.</p>
      <p>So the sum is $\\dfrac{5}{12}$.</p>
      <p>The correct choice is <strong>C. $\\dfrac{5}{12}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{2}{5}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{1}{10}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{5}{12}$', isCorrect: true },
      { id: 'D', textHtml: '$\\dfrac{7}{12}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.add-sub-unlike', role: 'primary' },
      { skillId: 'math.skill.frac.equivalent', role: 'secondary' },
      { skillId: 'math.skill.factors-multiples', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'add-sub', 'unlike-denominators']
  },

  {
    id: 'prealg-05-q4',
    number: 4,
    promptHtml: `
      <p>Compute: $\\dfrac{5}{6} - \\dfrac{1}{4}$.</p>
    `,
    strategyHtml: `
      <p>
        The denominators are different. Find the least common denominator, rewrite each fraction with
        that denominator, then subtract.
      </p>
    `,
    solutionHtml: `
      <p>Find the least common denominator of $6$ and $4$.</p>
      <p>The least common multiple of $6$ and $4$ is $12$, so use $12$ as the common denominator.</p>
      <p>Rewrite each fraction with denominator $12$:</p>
      <p>
        $$
        \\dfrac{5}{6} = \\dfrac{10}{12}, \\quad
        \\dfrac{1}{4} = \\dfrac{3}{12}.
        $$
      </p>
      <p>Now subtract:</p>
      <p>
        $$
        \\dfrac{10}{12} - \\dfrac{3}{12}
        = \\dfrac{10 - 3}{12}
        = \\dfrac{7}{12}.
        $$
      </p>
      <p>The fraction $\\dfrac{7}{12}$ is already in simplest form.</p>
      <p>So the difference is $\\dfrac{7}{12}$.</p>
      <p>The correct choice is <strong>D. $\\dfrac{7}{12}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{4}{6}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{1}{2}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{3}{12}$', isCorrect: false },
      { id: 'D', textHtml: '$\\dfrac{7}{12}$', isCorrect: true }
    ],
    skills: [
      { skillId: 'math.skill.frac.add-sub-unlike', role: 'primary' },
      { skillId: 'math.skill.frac.equivalent', role: 'secondary' },
      { skillId: 'math.skill.factors-multiples', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'add-sub', 'unlike-denominators']
  },

  {
    id: 'prealg-05-q5',
    number: 5,
    promptHtml: `
      <p>Compute: $2 \\dfrac{1}{4} + \\dfrac{3}{4}$.</p>
    `,
    strategyHtml: `
      <p>
        You can add the fractional parts first, then combine with the whole number. Remember that
        $\\dfrac{1}{4} + \\dfrac{3}{4}$ makes a whole.
      </p>
    `,
    solutionHtml: `
      <p>Start with the mixed number and the fraction:</p>
      <p>
        $$
        2 \\dfrac{1}{4} + \\dfrac{3}{4}.
        $$
      </p>
      <p>Add the fractional parts:</p>
      <p>
        $$
        \\dfrac{1}{4} + \\dfrac{3}{4}
        = \\dfrac{4}{4}
        = 1.
        $$
      </p>
      <p>Now add this $1$ to the whole number $2$:</p>
      <p>
        $$
        2 + 1 = 3.
        $$
      </p>
      <p>So the sum is $3$.</p>
      <p>The correct choice is <strong>A. $3$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$3$', isCorrect: true },
      { id: 'B', textHtml: '$2 \\dfrac{3}{4}$', isCorrect: false },
      { id: 'C', textHtml: '$2 \\dfrac{1}{2}$', isCorrect: false },
      { id: 'D', textHtml: '$3 \\dfrac{1}{4}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.add-sub-mixed', role: 'primary' },
      { skillId: 'math.skill.frac.add-sub-like', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'mixed-numbers', 'add-sub']
  },

  {
    id: 'prealg-05-q6',
    number: 6,
    promptHtml: `
      <p>Compute: $1 \\dfrac{1}{2} + 2 \\dfrac{2}{3}$.</p>
    `,
    strategyHtml: `
      <p>
        You can either convert both mixed numbers to improper fractions, or add whole numbers and
        fractional parts separately. For the fractions, find a common denominator.
      </p>
    `,
    solutionHtml: `
      <p>First, add the whole-number parts:</p>
      <p>
        $$
        1 + 2 = 3.
        $$
      </p>
      <p>Now add the fractional parts $\\dfrac{1}{2}$ and $\\dfrac{2}{3}$.</p>
      <p>The least common denominator of $2$ and $3$ is $6$:</p>
      <p>
        $$
        \\dfrac{1}{2} = \\dfrac{3}{6}, \\quad
        \\dfrac{2}{3} = \\dfrac{4}{6}.
        $$
      </p>
      <p>Add the fractions:</p>
      <p>
        $$
        \\dfrac{3}{6} + \\dfrac{4}{6}
        = \\dfrac{7}{6}
        = 1 \\dfrac{1}{6}.
        $$
      </p>
      <p>Combine this with the $3$ from earlier:</p>
      <p>
        $$
        3 + 1 \\dfrac{1}{6} = 4 \\dfrac{1}{6}.
        $$
      </p>
      <p>So the sum is $4 \\dfrac{1}{6}$.</p>
      <p>The correct choice is <strong>D. $4 \\dfrac{1}{6}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$3 \\dfrac{1}{6}$', isCorrect: false },
      { id: 'B', textHtml: '$3 \\dfrac{5}{6}$', isCorrect: false },
      { id: 'C', textHtml: '$4$', isCorrect: false },
      { id: 'D', textHtml: '$4 \\dfrac{1}{6}$', isCorrect: true }
    ],
    skills: [
      { skillId: 'math.skill.frac.add-sub-mixed', role: 'primary' },
      { skillId: 'math.skill.frac.add-sub-unlike', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'mixed-numbers', 'add-sub']
  },

  {
    id: 'prealg-05-q7',
    number: 7,
    promptHtml: `
      <p>Compute: $3 \\dfrac{1}{4} - 1 \\dfrac{2}{3}$.</p>
    `,
    strategyHtml: `
      <p>
        Convert both mixed numbers to improper fractions, subtract, and then convert back to a mixed
        number. Use a common denominator for the fractional parts.
      </p>
    `,
    solutionHtml: `
      <p>Convert each mixed number to an improper fraction.</p>
      <p>
        $$
        3 \\dfrac{1}{4} = \\dfrac{3 \\cdot 4 + 1}{4} = \\dfrac{13}{4}, \\quad
        1 \\dfrac{2}{3} = \\dfrac{1 \\cdot 3 + 2}{3} = \\dfrac{5}{3}.
        $$
      </p>
      <p>Find a common denominator for $4$ and $3$, which is $12$.</p>
      <p>
        $$
        \\dfrac{13}{4} = \\dfrac{13 \\cdot 3}{4 \\cdot 3} = \\dfrac{39}{12}, \\quad
        \\dfrac{5}{3} = \\dfrac{5 \\cdot 4}{3 \\cdot 4} = \\dfrac{20}{12}.
        $$
      </p>
      <p>Now subtract:</p>
      <p>
        $$
        \\dfrac{39}{12} - \\dfrac{20}{12}
        = \\dfrac{39 - 20}{12}
        = \\dfrac{19}{12}.
        $$
      </p>
      <p>Convert $\\dfrac{19}{12}$ back to a mixed number:</p>
      <p>
        $$
        19 \\div 12 = 1 \\text{ remainder } 7, \\quad
        \\dfrac{19}{12} = 1 \\dfrac{7}{12}.
        $$
      </p>
      <p>So the difference is $1 \\dfrac{7}{12}$.</p>
      <p>The correct choice is <strong>C. $1 \\dfrac{7}{12}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$1 \\dfrac{1}{12}$', isCorrect: false },
      { id: 'B', textHtml: '$2 \\dfrac{1}{12}$', isCorrect: false },
      { id: 'C', textHtml: '$1 \\dfrac{7}{12}$', isCorrect: true },
      { id: 'D', textHtml: '$2 \\dfrac{7}{12}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.add-sub-mixed', role: 'primary' },
      { skillId: 'math.skill.frac.add-sub-unlike', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'mixed-numbers', 'add-sub']
  },

  {
    id: 'prealg-05-q8',
    number: 8,
    promptHtml: `
      <p>
        Freya walked $\\dfrac{3}{5}$ of a mile in the morning and $\\dfrac{2}{5}$ of a mile in the
        afternoon. How far did Freya walk in all?
      </p>
    `,
    strategyHtml: `
      <p>
        Add the two fractions. The denominators are the same, so add the numerators and keep the
        denominator.
      </p>
    `,
    solutionHtml: `
      <p>Add the distances:</p>
      <p>
        $$
        \\dfrac{3}{5} + \\dfrac{2}{5}
        = \\dfrac{3 + 2}{5}
        = \\dfrac{5}{5}
        = 1.
        $$
      </p>
      <p>So Freya walked $1$ mile in all.</p>
      <p>The correct choice is <strong>B. $1$ mile</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{4}{5}$ mile', isCorrect: false },
      { id: 'B', textHtml: '$1$ mile', isCorrect: true },
      { id: 'C', textHtml: '$1 \\dfrac{1}{5}$ miles', isCorrect: false },
      { id: 'D', textHtml: '$\\dfrac{5}{2}$ miles', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.add-sub-word', role: 'primary' },
      { skillId: 'math.skill.frac.add-sub-like', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'word-problem', 'add-sub']
  },

  {
    id: 'prealg-05-q9',
    number: 9,
    promptHtml: `
      <p>
        A recipe calls for $1 \\dfrac{1}{2}$ cups of sugar. Jess adds another $\\dfrac{3}{4}$ cup of
        sugar. How much sugar is in the bowl now?
      </p>
    `,
    strategyHtml: `
      <p>
        Add the mixed number and the fraction. You can convert $1 \\dfrac{1}{2}$ to an improper
        fraction, or add $1$ and the fractional parts separately using a common denominator.
      </p>
    `,
    solutionHtml: `
      <p>Start with $1 \\dfrac{1}{2}$ cups and add $\\dfrac{3}{4}$ cup.</p>
      <p>Separate the whole number and fraction:</p>
      <p>
        $$
        1 \\dfrac{1}{2} + \\dfrac{3}{4}
        = 1 + \\left(\\dfrac{1}{2} + \\dfrac{3}{4}\\right).
        $$
      </p>
      <p>Find a common denominator for $\\dfrac{1}{2}$ and $\\dfrac{3}{4}$, which is $4$:</p>
      <p>
        $$
        \\dfrac{1}{2} = \\dfrac{2}{4}, \\quad
        \\dfrac{3}{4} = \\dfrac{3}{4}.
        $$
      </p>
      <p>Add the fractions:</p>
      <p>
        $$
        \\dfrac{2}{4} + \\dfrac{3}{4}
        = \\dfrac{5}{4}
        = 1 \\dfrac{1}{4}.
        $$
      </p>
      <p>Combine with the whole number $1$:</p>
      <p>
        $$
        1 + 1 \\dfrac{1}{4} = 2 \\dfrac{1}{4}.
        $$
      </p>
      <p>So there are $2 \\dfrac{1}{4}$ cups of sugar in the bowl.</p>
      <p>The correct choice is <strong>C. $2 \\dfrac{1}{4}$ cups</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$1 \\dfrac{3}{4}$ cups', isCorrect: false },
      { id: 'B', textHtml: '$2$ cups', isCorrect: false },
      { id: 'C', textHtml: '$2 \\dfrac{1}{4}$ cups', isCorrect: true },
      { id: 'D', textHtml: '$2 \\dfrac{3}{4}$ cups', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.add-sub-word', role: 'primary' },
      { skillId: 'math.skill.frac.add-sub-mixed', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'word-problem', 'mixed-numbers', 'add-sub']
  },

  {
    id: 'prealg-05-q10',
    number: 10,
    promptHtml: `
      <p>
        Sam spent $\\dfrac{5}{8}$ of his money, and Alex spent $\\dfrac{3}{8}$ of his money.
        How much more of his money did Sam spend than Alex?
      </p>
    `,
    strategyHtml: `
      <p>
        Find the difference between $\\dfrac{5}{8}$ and $\\dfrac{3}{8}$. The denominators are the same,
        so subtract the numerators.
      </p>
    `,
    solutionHtml: `
      <p>Subtract the fractions:</p>
      <p>
        $$
        \\dfrac{5}{8} - \\dfrac{3}{8}
        = \\dfrac{5 - 3}{8}
        = \\dfrac{2}{8}.
        $$
      </p>
      <p>Simplify $\\dfrac{2}{8}$ by dividing numerator and denominator by $2$:</p>
      <p>
        $$
        \\dfrac{2}{8} = \\dfrac{1}{4}.
        $$
      </p>
      <p>So Sam spent $\\dfrac{1}{4}$ more of his money than Alex.</p>
      <p>The correct choice is <strong>D. $\\dfrac{1}{4}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{1}{8}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{2}{5}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{3}{8}$', isCorrect: false },
      { id: 'D', textHtml: '$\\dfrac{1}{4}$', isCorrect: true }
    ],
    skills: [
      { skillId: 'math.skill.frac.add-sub-word', role: 'primary' },
      { skillId: 'math.skill.frac.add-sub-like', role: 'secondary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'word-problem', 'add-sub']
  }
]
