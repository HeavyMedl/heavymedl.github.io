import type { MathProblemData } from '@/types/math.types'

export const problems: MathProblemData[] = [
  {
    id: 'prealg-10-q1',
    number: 1,
    promptHtml: `
      <p>Evaluate: $\\sqrt{81}$</p>
    `,
    strategyHtml: `
      <p>
        Think of $\\sqrt{81}$ as “the number which, when squared, equals $81$”
        Look for a whole number $n$ such that $n^2 = 81$
      </p>
    `,
    solutionHtml: `
      <p>Find a number whose square is $81$</p>
      <p>
        $$
        9^2 = 81
        $$
      </p>
      <p>So</p>
      <p>
        $$
        \\sqrt{81} = 9
        $$
      </p>
      <p>The correct choice is <strong>B. $9$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$8$', isCorrect: false },
      { id: 'B', textHtml: '$9$', isCorrect: true },
      { id: 'C', textHtml: '$-9$', isCorrect: false },
      { id: 'D', textHtml: '$81$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.radicals.evaluate', role: 'primary' }],
    tags: ['pre-algebra', 'radicals', 'square-roots', 'evaluation']
  },

  {
    id: 'prealg-10-q2',
    number: 2,
    promptHtml: `
      <p>Evaluate: $\\sqrt{\\dfrac{49}{64}}$</p>
    `,
    strategyHtml: `
      <p>
        Use the fact that $\\sqrt{\\dfrac{a}{b}} = \\dfrac{\\sqrt{a}}{\\sqrt{b}}$ for positive $a$ and $b$
        Take the square root of the numerator and of the denominator separately.
      </p>
    `,
    solutionHtml: `
      <p>Separate the square root of the fraction:</p>
      <p>
        $$
        \\sqrt{\\dfrac{49}{64}} = \\dfrac{\\sqrt{49}}{\\sqrt{64}}
        $$
      </p>
      <p>Evaluate each square root:</p>
      <p>
        $$
        \\sqrt{49} = 7, \\quad \\sqrt{64} = 8
        $$
      </p>
      <p>So</p>
      <p>
        $$
        \\sqrt{\\dfrac{49}{64}} = \\dfrac{7}{8}
        $$
      </p>
      <p>The correct choice is <strong>C. $\\dfrac{7}{8}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{49}{64}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{8}{7}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{7}{8}$', isCorrect: true },
      { id: 'D', textHtml: '$\\dfrac{1}{2}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.radicals.evaluate', role: 'primary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'radicals', 'square-roots', 'fractions']
  },

  {
    id: 'prealg-10-q3',
    number: 3,
    promptHtml: `
      <p>Simplify: $\\sqrt{50}$</p>
    `,
    strategyHtml: `
      <p>
        Look for a perfect square factor of $50$  
        Write $50$ as $25 \\cdot 2$ and use $\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b}$
      </p>
    `,
    solutionHtml: `
      <p>Factor $50$ to find a perfect square factor:</p>
      <p>
        $$
        50 = 25 \\cdot 2
        $$
      </p>
      <p>Rewrite the square root:</p>
      <p>
        $$
        \\sqrt{50} = \\sqrt{25 \\cdot 2} = \\sqrt{25} \\cdot \\sqrt{2}
        $$
      </p>
      <p>Since $\\sqrt{25} = 5$</p>
      <p>
        $$
        \\sqrt{50} = 5\\sqrt{2}
        $$
      </p>
      <p>The correct choice is <strong>B. $5\\sqrt{2}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\sqrt{25}$', isCorrect: false },
      { id: 'B', textHtml: '$5\\sqrt{2}$', isCorrect: true },
      { id: 'C', textHtml: '$10\\sqrt{5}$', isCorrect: false },
      { id: 'D', textHtml: '$\\sqrt{2}$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.radicals.simplify-basic', role: 'primary' }],
    tags: ['pre-algebra', 'radicals', 'simplifying']
  },

  {
    id: 'prealg-10-q4',
    number: 4,
    promptHtml: `
      <p>Simplify: $\\sqrt{72}$</p>
    `,
    strategyHtml: `
      <p>
        Look for the largest perfect square factor of $72$  
        Try $36$ $16$ $9$ or $4$  
        Then use $\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b}$
      </p>
    `,
    solutionHtml: `
      <p>Factor $72$ using a perfect square:</p>
      <p>
        $$
        72 = 36 \\cdot 2
        $$
      </p>
      <p>Rewrite the square root:</p>
      <p>
        $$
        \\sqrt{72} = \\sqrt{36 \\cdot 2} = \\sqrt{36}\\sqrt{2}
        $$
      </p>
      <p>Since $\\sqrt{36} = 6$</p>
      <p>
        $$
        \\sqrt{72} = 6\\sqrt{2}
        $$
      </p>
      <p>The correct choice is <strong>C. $6\\sqrt{2}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\sqrt{36}$', isCorrect: false },
      { id: 'B', textHtml: '$3\\sqrt{8}$', isCorrect: false },
      { id: 'C', textHtml: '$6\\sqrt{2}$', isCorrect: true },
      { id: 'D', textHtml: '$12\\sqrt{2}$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.radicals.simplify-basic', role: 'primary' }],
    tags: ['pre-algebra', 'radicals', 'simplifying']
  },

  {
    id: 'prealg-10-q5',
    number: 5,
    promptHtml: `
      <p>Simplify: $3\\sqrt{5} + 2\\sqrt{5}$</p>
    `,
    strategyHtml: `
      <p>
        Like radicals (with the same number under the square root) combine like like terms in algebra.
        Add the coefficients and keep $\\sqrt{5}$ the same.
      </p>
    `,
    solutionHtml: `
      <p>Both terms have $\\sqrt{5}$ so they are like radicals:</p>
      <p>
        $$
        3\\sqrt{5} + 2\\sqrt{5} = (3 + 2)\\sqrt{5} = 5\\sqrt{5}
        $$
      </p>
      <p>The correct choice is <strong>A. $5\\sqrt{5}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$5\\sqrt{5}$', isCorrect: true },
      { id: 'B', textHtml: '$5\\sqrt{10}$', isCorrect: false },
      { id: 'C', textHtml: '$6\\sqrt{5}$', isCorrect: false },
      { id: 'D', textHtml: '$\\sqrt{25}$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.radicals.combine', role: 'primary' }],
    tags: ['pre-algebra', 'radicals', 'like-terms']
  },

  {
    id: 'prealg-10-q6',
    number: 6,
    promptHtml: `
      <p>Simplify: $4\\sqrt{3} - \\sqrt{12}$</p>
    `,
    strategyHtml: `
      <p>
        First simplify $\\sqrt{12}$ by factoring out a perfect square.  
        Then check if the radicals are like terms so you can combine them.
      </p>
    `,
    solutionHtml: `
      <p>First simplify $\\sqrt{12}$</p>
      <p>
        $$
        12 = 4 \\cdot 3, \\quad \\sqrt{12} = \\sqrt{4 \\cdot 3} = \\sqrt{4}\\sqrt{3} = 2\\sqrt{3}
        $$
      </p>
      <p>Now substitute back into the expression:</p>
      <p>
        $$
        4\\sqrt{3} - \\sqrt{12} = 4\\sqrt{3} - 2\\sqrt{3}
        $$
      </p>
      <p>Combine like radicals:</p>
      <p>
        $$
        4\\sqrt{3} - 2\\sqrt{3} = (4 - 2)\\sqrt{3} = 2\\sqrt{3}
        $$
      </p>
      <p>The correct choice is <strong>D. $2\\sqrt{3}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$2\\sqrt{12}$', isCorrect: false },
      { id: 'B', textHtml: '$3\\sqrt{3}$', isCorrect: false },
      { id: 'C', textHtml: '$\\sqrt{3}$', isCorrect: false },
      { id: 'D', textHtml: '$2\\sqrt{3}$', isCorrect: true }
    ],
    skills: [
      { skillId: 'math.skill.radicals.simplify-basic', role: 'primary' },
      { skillId: 'math.skill.radicals.combine', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'radicals', 'simplifying', 'like-terms']
  },

  {
    id: 'prealg-10-q7',
    number: 7,
    promptHtml: `
      <p>Simplify: $2\\sqrt{7} + 3\\sqrt{28}$</p>
    `,
    strategyHtml: `
      <p>
        Start by simplifying $\\sqrt{28}$ using a perfect square factor.  
        Then see if the radicals become like terms and can be combined.
      </p>
    `,
    solutionHtml: `
      <p>Simplify $\\sqrt{28}$</p>
      <p>
        $$
        28 = 4 \\cdot 7, \\quad \\sqrt{28} = \\sqrt{4 \\cdot 7} = 2\\sqrt{7}
        $$
      </p>
      <p>Substitute back:</p>
      <p>
        $$
        2\\sqrt{7} + 3\\sqrt{28} = 2\\sqrt{7} + 3(2\\sqrt{7}) = 2\\sqrt{7} + 6\\sqrt{7}
        $$
      </p>
      <p>Combine like radicals:</p>
      <p>
        $$
        2\\sqrt{7} + 6\\sqrt{7} = 8\\sqrt{7}
        $$
      </p>
      <p>The correct choice is <strong>B. $8\\sqrt{7}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$5\\sqrt{7}$', isCorrect: false },
      { id: 'B', textHtml: '$8\\sqrt{7}$', isCorrect: true },
      { id: 'C', textHtml: '$6\\sqrt{28}$', isCorrect: false },
      { id: 'D', textHtml: '$\\sqrt{196}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.radicals.simplify-basic', role: 'primary' },
      { skillId: 'math.skill.radicals.combine', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'radicals', 'simplifying', 'like-terms']
  },

  {
    id: 'prealg-10-q8',
    number: 8,
    promptHtml: `
      <p>
        The area of a square is $64\\text{ m}^2$  
        What is the length of one side of the square?
      </p>
    `,
    strategyHtml: `
      <p>
        For a square, area $= s^2$ where $s$ is the side length.  
        Set $s^2 = 64$ and take the square root to find $s$
      </p>
    `,
    solutionHtml: `
      <p>For a square with side length $s$</p>
      <p>
        $$
        s^2 = 64
        $$
      </p>
      <p>Take the square root of both sides:</p>
      <p>
        $$
        s = \\sqrt{64} = 8
        $$
      </p>
      <p>The side length is $8$ meters.</p>
      <p>The correct choice is <strong>C. $8$ m</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$4$ m', isCorrect: false },
      { id: 'B', textHtml: '$16$ m', isCorrect: false },
      { id: 'C', textHtml: '$8$ m', isCorrect: true },
      { id: 'D', textHtml: '$\\sqrt{64}$ m', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.radicals.evaluate', role: 'primary' },
      { skillId: 'math.skill.measure.word', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'radicals', 'geometry', 'word-problem']
  },

  {
    id: 'prealg-10-q9',
    number: 9,
    promptHtml: `
      <p>
        Which number is greater: $\\sqrt{5}$ or $2.2$?
      </p>
    `,
    strategyHtml: `
      <p>
        Estimate $\\sqrt{5}$ by noting that $2^2 = 4$ and $3^2 = 9$  
        Decide whether $\\sqrt{5}$ is closer to $2$ or $3$ then compare with $2.2$
      </p>
    `,
    solutionHtml: `
      <p>We know:</p>
      <p>
        $$
        2^2 = 4, \\quad 3^2 = 9
        $$
      </p>
      <p>So $\\sqrt{5}$ is between $2$ and $3$</p>
      <p>Because $5$ is just a little larger than $4$ $\\sqrt{5}$ is a little larger than $2$</p>
      <p>A common approximation is $\\sqrt{5} \\approx 2.24$</p>
      <p>Compare $2.24$ and $2.2$</p>
      <p>
        $$
        2.24 > 2.20
        $$
      </p>
      <p>so $\\sqrt{5} > 2.2$</p>
      <p>The correct choice is <strong>A. $\\sqrt{5}$ is greater</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\sqrt{5}$ is greater', isCorrect: true },
      { id: 'B', textHtml: '$2.2$ is greater', isCorrect: false },
      { id: 'C', textHtml: 'They are equal', isCorrect: false },
      { id: 'D', textHtml: 'Cannot be compared', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.radicals.evaluate', role: 'primary' }],
    tags: ['pre-algebra', 'radicals', 'estimation', 'comparison']
  },

  {
    id: 'prealg-10-q10',
    number: 10,
    promptHtml: `
      <p>Simplify: $\\sqrt{18} + \\sqrt{8}$</p>
    `,
    strategyHtml: `
      <p>
        First simplify each square root by factoring out perfect squares:
        $18 = 9 \\cdot 2$ and $8 = 4 \\cdot 2$  
        Then see if the resulting radicals are like terms.
      </p>
    `,
    solutionHtml: `
      <p>Simplify each radical separately.</p>
      <p>For $\\sqrt{18}$</p>
      <p>
        $$
        18 = 9 \\cdot 2, \\quad \\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}
        $$
      </p>
      <p>For $\\sqrt{8}$</p>
      <p>
        $$
        8 = 4 \\cdot 2, \\quad \\sqrt{8} = \\sqrt{4 \\cdot 2} = 2\\sqrt{2}
        $$
      </p>
      <p>Now add the simplified expressions:</p>
      <p>
        $$
        \\sqrt{18} + \\sqrt{8} = 3\\sqrt{2} + 2\\sqrt{2} = 5\\sqrt{2}
        $$
      </p>
      <p>The correct choice is <strong>D. $5\\sqrt{2}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\sqrt{26}$', isCorrect: false },
      { id: 'B', textHtml: '$\\sqrt{144}$', isCorrect: false },
      { id: 'C', textHtml: '$3\\sqrt{2}$', isCorrect: false },
      { id: 'D', textHtml: '$5\\sqrt{2}$', isCorrect: true }
    ],
    skills: [
      { skillId: 'math.skill.radicals.simplify-basic', role: 'primary' },
      { skillId: 'math.skill.radicals.combine', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'radicals', 'simplifying', 'like-terms']
  }
]
