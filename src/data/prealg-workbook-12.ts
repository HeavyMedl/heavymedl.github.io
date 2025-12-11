import type { MathProblemData } from '@/types/math.types'

export const problems: MathProblemData[] = [
  {
    id: 'prealg-12-q1',
    number: 1,
    promptHtml: `
      <p>Simplify and rationalize the denominator: $\\dfrac{5}{\\sqrt{3}}$</p>
    `,
    strategyHtml: `
      <p>
        To remove the square root from the denominator, multiply the numerator and denominator
        by $\\sqrt{3}$
      </p>
    `,
    solutionHtml: `
      <p>Multiply numerator and denominator by $\\sqrt{3}$</p>
      <p>
        $$
        \\dfrac{5}{\\sqrt{3}} \\cdot \\dfrac{\\sqrt{3}}{\\sqrt{3}}
        = \\dfrac{5\\sqrt{3}}{(\\sqrt{3})(\\sqrt{3})}
        $$
      </p>
      <p>
        Since $(\\sqrt{3})(\\sqrt{3}) = 3$ the fraction becomes
      </p>
      <p>
        $$
        \\dfrac{5\\sqrt{3}}{3}
        $$
      </p>
      <p>The denominator is now rational.</p>
      <p>The correct choice is <strong>B. $\\dfrac{5\\sqrt{3}}{3}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{5}{3\\sqrt{3}}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{5\\sqrt{3}}{3}$', isCorrect: true },
      { id: 'C', textHtml: '$5\\sqrt{3}$', isCorrect: false },
      { id: 'D', textHtml: '$\\dfrac{\\sqrt{3}}{5}$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.radicals.rationalize-simple', role: 'primary' }],
    tags: ['pre-algebra', 'radicals', 'rationalizing', 'denominators']
  },

  {
    id: 'prealg-12-q2',
    number: 2,
    promptHtml: `
      <p>Simplify and rationalize the denominator: $\\dfrac{2}{\\sqrt{5}}$</p>
    `,
    strategyHtml: `
      <p>
        Multiply the top and bottom by $\\sqrt{5}$ so that the denominator becomes $5$
      </p>
    `,
    solutionHtml: `
      <p>Multiply numerator and denominator by $\\sqrt{5}$</p>
      <p>
        $$
        \\dfrac{2}{\\sqrt{5}} \\cdot \\dfrac{\\sqrt{5}}{\\sqrt{5}}
        = \\dfrac{2\\sqrt{5}}{(\\sqrt{5})(\\sqrt{5})}
        = \\dfrac{2\\sqrt{5}}{5}
        $$
      </p>
      <p>The denominator is now $5$ a rational number.</p>
      <p>The correct choice is <strong>C. $\\dfrac{2\\sqrt{5}}{5}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{2}{5\\sqrt{5}}$', isCorrect: false },
      { id: 'B', textHtml: '$2\\sqrt{5}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{2\\sqrt{5}}{5}$', isCorrect: true },
      { id: 'D', textHtml: '$\\dfrac{\\sqrt{5}}{2}$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.radicals.rationalize-simple', role: 'primary' }],
    tags: ['pre-algebra', 'radicals', 'rationalizing', 'denominators']
  },

  {
    id: 'prealg-12-q3',
    number: 3,
    promptHtml: `
      <p>Simplify and rationalize the denominator: $\\dfrac{\\sqrt{2}}{\\sqrt{3}}$</p>
    `,
    strategyHtml: `
      <p>
        Multiply numerator and denominator by $\\sqrt{3}$ so the denominator becomes $3$
        Use $\\sqrt{2}\\cdot\\sqrt{3} = \\sqrt{6}$
      </p>
    `,
    solutionHtml: `
      <p>Multiply by $\\dfrac{\\sqrt{3}}{\\sqrt{3}}$</p>
      <p>
        $$
        \\dfrac{\\sqrt{2}}{\\sqrt{3}} \\cdot \\dfrac{\\sqrt{3}}{\\sqrt{3}}
        = \\dfrac{\\sqrt{2}\\sqrt{3}}{(\\sqrt{3})(\\sqrt{3})}
        = \\dfrac{\\sqrt{6}}{3}
        $$
      </p>
      <p>The denominator is now the integer $3$</p>
      <p>The correct choice is <strong>A. $\\dfrac{\\sqrt{6}}{3}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{\\sqrt{6}}{3}$', isCorrect: true },
      { id: 'B', textHtml: '$\\dfrac{\\sqrt{6}}{\\sqrt{3}}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{\\sqrt{2}}{3}$', isCorrect: false },
      { id: 'D', textHtml: '$\\sqrt{\\dfrac{2}{3}}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.radicals.rationalize-simple', role: 'primary' },
      { skillId: 'math.skill.radicals.simplify-basic', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'radicals', 'rationalizing']
  },

  {
    id: 'prealg-12-q4',
    number: 4,
    promptHtml: `
      <p>Simplify and rationalize the denominator: $\\dfrac{7}{2\\sqrt{3}}$</p>
    `,
    strategyHtml: `
      <p>
        Treat $2\\sqrt{3}$ as a single denominator. Multiply numerator and denominator by $\\sqrt{3}$
        then simplify the denominator.
      </p>
    `,
    solutionHtml: `
      <p>Multiply by $\\dfrac{\\sqrt{3}}{\\sqrt{3}}$</p>
      <p>
        $$
        \\dfrac{7}{2\\sqrt{3}} \\cdot \\dfrac{\\sqrt{3}}{\\sqrt{3}}
        = \\dfrac{7\\sqrt{3}}{2(\\sqrt{3}\\cdot\\sqrt{3})}
        $$
      </p>
      <p>Compute $\\sqrt{3} \\cdot \\sqrt{3} = 3$</p>
      <p>
        $$
        \\dfrac{7\\sqrt{3}}{2 \\cdot 3} = \\dfrac{7\\sqrt{3}}{6}
        $$
      </p>
      <p>The denominator is now $6$</p>
      <p>The correct choice is <strong>D. $\\dfrac{7\\sqrt{3}}{6}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{7}{6\\sqrt{3}}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{7\\sqrt{3}}{2}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{14\\sqrt{3}}{3}$', isCorrect: false },
      { id: 'D', textHtml: '$\\dfrac{7\\sqrt{3}}{6}$', isCorrect: true }
    ],
    skills: [{ skillId: 'math.skill.radicals.rationalize-simple', role: 'primary' }],
    tags: ['pre-algebra', 'radicals', 'rationalizing']
  },

  {
    id: 'prealg-12-q5',
    number: 5,
    promptHtml: `
      <p>Simplify: $\\dfrac{\\sqrt{6}}{\\sqrt{2}}$</p>
    `,
    strategyHtml: `
      <p>
        You can combine the radicals first:
        $\\dfrac{\\sqrt{6}}{\\sqrt{2}} = \\sqrt{\\dfrac{6}{2}}$
        then simplify the fraction inside the radical.
      </p>
    `,
    solutionHtml: `
      <p>Combine the square roots:</p>
      <p>
        $$
        \\dfrac{\\sqrt{6}}{\\sqrt{2}} = \\sqrt{\\dfrac{6}{2}} = \\sqrt{3}
        $$
      </p>
      <p>The result already has a rational denominator (since there is no denominator at all).</p>
      <p>The correct choice is <strong>B. $\\sqrt{3}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{\\sqrt{3}}{2}$', isCorrect: false },
      { id: 'B', textHtml: '$\\sqrt{3}$', isCorrect: true },
      { id: 'C', textHtml: '$\\dfrac{\\sqrt{12}}{2}$', isCorrect: false },
      { id: 'D', textHtml: '$3$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.radicals.simplify-basic', role: 'primary' }],
    tags: ['pre-algebra', 'radicals', 'simplifying']
  },

  {
    id: 'prealg-12-q6',
    number: 6,
    promptHtml: `
      <p>Simplify and rationalize the denominator: $\\dfrac{3 + \\sqrt{5}}{\\sqrt{5}}$</p>
    `,
    strategyHtml: `
      <p>
        Multiply the entire numerator and the denominator by $\\sqrt{5}$  
        Distribute $\\sqrt{5}$ across $3 + \\sqrt{5}$ in the numerator.
      </p>
    `,
    solutionHtml: `
      <p>Multiply by $\\dfrac{\\sqrt{5}}{\\sqrt{5}}$</p>
      <p>
        $$
        \\dfrac{3 + \\sqrt{5}}{\\sqrt{5}} \\cdot \\dfrac{\\sqrt{5}}{\\sqrt{5}}
        = \\dfrac{(3 + \\sqrt{5})\\sqrt{5}}{(\\sqrt{5})(\\sqrt{5})}
        $$
      </p>
      <p>Distribute $\\sqrt{5}$ in the numerator:</p>
      <p>
        $$
        (3 + \\sqrt{5})\\sqrt{5} = 3\\sqrt{5} + (\\sqrt{5})(\\sqrt{5}) = 3\\sqrt{5} + 5
        $$
      </p>
      <p>The denominator is</p>
      <p>
        $$
        (\\sqrt{5})(\\sqrt{5}) = 5
        $$
      </p>
      <p>So the fraction becomes</p>
      <p>
        $$
        \\dfrac{3\\sqrt{5} + 5}{5}
        $$
      </p>
      <p>The correct choice is <strong>A. $\\dfrac{3\\sqrt{5} + 5}{5}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{3\\sqrt{5} + 5}{5}$', isCorrect: true },
      { id: 'B', textHtml: '$\\dfrac{3 + 5\\sqrt{5}}{5}$', isCorrect: false },
      { id: 'C', textHtml: '$3 + \\sqrt{5}$', isCorrect: false },
      { id: 'D', textHtml: '$\\dfrac{3 + \\sqrt{5}}{5}$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.radicals.rationalize-mixed', role: 'primary' }],
    tags: ['pre-algebra', 'radicals', 'rationalizing', 'binomial']
  },

  {
    id: 'prealg-12-q7',
    number: 7,
    promptHtml: `
      <p>Simplify and rationalize the denominator: $\\dfrac{4 - \\sqrt{2}}{\\sqrt{2}}$</p>
    `,
    strategyHtml: `
      <p>
        Multiply numerator and denominator by $\\sqrt{2}$  
        Distribute $\\sqrt{2}$ over $4 - \\sqrt{2}$ in the numerator, then simplify.
      </p>
    `,
    solutionHtml: `
      <p>Multiply by $\\dfrac{\\sqrt{2}}{\\sqrt{2}}$</p>
      <p>
        $$
        \\dfrac{4 - \\sqrt{2}}{\\sqrt{2}} \\cdot \\dfrac{\\sqrt{2}}{\\sqrt{2}}
        = \\dfrac{(4 - \\sqrt{2})\\sqrt{2}}{(\\sqrt{2})(\\sqrt{2})}
        $$
      </p>
      <p>Distribute $\\sqrt{2}$</p>
      <p>
        $$
        (4 - \\sqrt{2})\\sqrt{2} = 4\\sqrt{2} - (\\sqrt{2})(\\sqrt{2}) = 4\\sqrt{2} - 2
        $$
      </p>
      <p>The denominator is $(\\sqrt{2})(\\sqrt{2}) = 2$ so</p>
      <p>
        $$
        \\dfrac{4\\sqrt{2} - 2}{2}
        $$
      </p>
      <p>Now simplify by dividing each term by $2$</p>
      <p>
        $$
        \\dfrac{4\\sqrt{2}}{2} - \\dfrac{2}{2} = 2\\sqrt{2} - 1
        $$
      </p>
      <p>The correct choice is <strong>C. $2\\sqrt{2} - 1$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{4\\sqrt{2} - 2}{2}$', isCorrect: false },
      { id: 'B', textHtml: '$4\\sqrt{2} - 2$', isCorrect: false },
      { id: 'C', textHtml: '$2\\sqrt{2} - 1$', isCorrect: true },
      { id: 'D', textHtml: '$\\dfrac{4 - \\sqrt{2}}{2}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.radicals.rationalize-mixed', role: 'primary' },
      { skillId: 'math.skill.radicals.simplify-basic', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'radicals', 'rationalizing', 'binomial']
  },

  {
    id: 'prealg-12-q8',
    number: 8,
    promptHtml: `
      <p>Simplify: $\\dfrac{\\sqrt{8}}{4\\sqrt{2}}$</p>
    `,
    strategyHtml: `
      <p>
        First simplify $\\sqrt{8}$ using a perfect square factor.  
        Then see if any radicals cancel before worrying about rationalizing.
      </p>
    `,
    solutionHtml: `
      <p>Simplify $\\sqrt{8}$</p>
      <p>
        $$
        8 = 4 \\cdot 2, \\quad \\sqrt{8} = \\sqrt{4\\cdot 2} = 2\\sqrt{2}
        $$
      </p>
      <p>Substitute into the fraction:</p>
      <p>
        $$
        \\dfrac{\\sqrt{8}}{4\\sqrt{2}} = \\dfrac{2\\sqrt{2}}{4\\sqrt{2}}
        $$
      </p>
      <p>Cancel $\\sqrt{2}$ from numerator and denominator:</p>
      <p>
        $$
        \\dfrac{2}{4} = \\dfrac{1}{2}
        $$
      </p>
      <p>The simplified value is $\\dfrac{1}{2}$ which already has a rational denominator.</p>
      <p>The correct choice is <strong>A. $\\dfrac{1}{2}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{1}{2}$', isCorrect: true },
      { id: 'B', textHtml: '$\\dfrac{\\sqrt{2}}{4}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{\\sqrt{8}}{4}$', isCorrect: false },
      { id: 'D', textHtml: '$2$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.radicals.simplify-basic', role: 'primary' }],
    tags: ['pre-algebra', 'radicals', 'simplifying']
  },

  {
    id: 'prealg-12-q9',
    number: 9,
    promptHtml: `
      <p>Simplify: $\\dfrac{2\\sqrt{3}}{\\sqrt{3}}$</p>
    `,
    strategyHtml: `
      <p>
        Notice the same radical appears in numerator and denominator.  
        You can cancel $\\sqrt{3}$ as long as it is not zero.
      </p>
    `,
    solutionHtml: `
      <p>Write the fraction explicitly:</p>
      <p>
        $$
        \\dfrac{2\\sqrt{3}}{\\sqrt{3}}
        $$
      </p>
      <p>Cancel $\\sqrt{3}$ from top and bottom:</p>
      <p>
        $$
        \\dfrac{2\\cancel{\\sqrt{3}}}{\\cancel{\\sqrt{3}}} = 2
        $$
      </p>
      <p>The result is the integer $2$</p>
      <p>The correct choice is <strong>D. $2$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$2\\sqrt{3}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{\\sqrt{3}}{2}$', isCorrect: false },
      { id: 'C', textHtml: '$\\sqrt{2}$', isCorrect: false },
      { id: 'D', textHtml: '$2$', isCorrect: true }
    ],
    skills: [{ skillId: 'math.skill.radicals.simplify-basic', role: 'primary' }],
    tags: ['pre-algebra', 'radicals', 'simplifying']
  },

  {
    id: 'prealg-12-q10',
    number: 10,
    promptHtml: `
      <p>Simplify: $\\dfrac{5\\sqrt{2}}{\\sqrt{8}}$</p>
    `,
    strategyHtml: `
      <p>
        First simplify $\\sqrt{8}$ then look for common radical factors to cancel.
        Remember $8 = 4\\cdot 2$
      </p>
    `,
    solutionHtml: `
      <p>Simplify $\\sqrt{8}$</p>
      <p>
        $$
        8 = 4 \\cdot 2, \\quad \\sqrt{8} = \\sqrt{4\\cdot 2} = 2\\sqrt{2}
        $$
      </p>
      <p>Substitute into the fraction:</p>
      <p>
        $$
        \\dfrac{5\\sqrt{2}}{\\sqrt{8}} = \\dfrac{5\\sqrt{2}}{2\\sqrt{2}}
        $$
      </p>
      <p>Cancel $\\sqrt{2}$ from numerator and denominator:</p>
      <p>
        $$
        \\dfrac{5}{2}
        $$
      </p>
      <p>The simplified value is $\\dfrac{5}{2}$</p>
      <p>The correct choice is <strong>B. $\\dfrac{5}{2}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{5\\sqrt{2}}{2}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{5}{2}$', isCorrect: true },
      { id: 'C', textHtml: '$\\dfrac{5}{\\sqrt{2}}$', isCorrect: false },
      { id: 'D', textHtml: '$\\sqrt{5}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.radicals.simplify-basic', role: 'primary' },
      { skillId: 'math.skill.radicals.rationalize-mixed', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'radicals', 'simplifying']
  }
]
