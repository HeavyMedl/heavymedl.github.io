import type { MathProblemData } from '@/types/math.types'

export const problems: MathProblemData[] = [
  {
    id: 'prealg-06-q1',
    number: 1,
    promptHtml: `
      <p>Compute: $\\dfrac{2}{3} \\cdot \\dfrac{3}{5}$.</p>
    `,
    hintHtml: `
      <p>
        To multiply fractions, multiply the numerators together and the denominators together, then
        simplify the answer if possible.
      </p>
    `,
    solutionHtml: `
      <p>Multiply the numerators and denominators:</p>
      <p>
        $$
        \\dfrac{2}{3} \\cdot \\dfrac{3}{5}
        = \\dfrac{2 \\cdot 3}{3 \\cdot 5}
        = \\dfrac{6}{15}.
        $$
      </p>
      <p>Simplify $\\dfrac{6}{15}$ by dividing numerator and denominator by their GCF $3$:</p>
      <p>
        $$
        \\dfrac{6}{15} = \\dfrac{6 \\div 3}{15 \\div 3} = \\dfrac{2}{5}.
        $$
      </p>
      <p>So the product is $\\dfrac{2}{5}$.</p>
      <p>The correct choice is <strong>B. $\\dfrac{2}{5}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{6}{15}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{2}{5}$', isCorrect: true },
      { id: 'C', textHtml: '$\\dfrac{5}{6}$', isCorrect: false },
      { id: 'D', textHtml: '$\\dfrac{3}{10}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.mul', role: 'primary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'multiplication']
  },

  {
    id: 'prealg-06-q2',
    number: 2,
    promptHtml: `
      <p>Compute: $4 \\cdot \\dfrac{2}{5}$.</p>
    `,
    hintHtml: `
      <p>
        Think of the whole number $4$ as $\\dfrac{4}{1}$, then multiply the fractions and simplify.
      </p>
    `,
    solutionHtml: `
      <p>Write $4$ as $\\dfrac{4}{1}$:</p>
      <p>
        $$
        4 \\cdot \\dfrac{2}{5}
        = \\dfrac{4}{1} \\cdot \\dfrac{2}{5}
        = \\dfrac{4 \\cdot 2}{1 \\cdot 5}
        = \\dfrac{8}{5}.
        $$
      </p>
      <p>Convert $\\dfrac{8}{5}$ to a mixed number if desired:</p>
      <p>
        $$
        8 \\div 5 = 1 \\text{ remainder } 3,
        \\quad \\dfrac{8}{5} = 1 \\dfrac{3}{5}.
        $$
      </p>
      <p>So the product is $1 \\dfrac{3}{5}$.</p>
      <p>The correct choice is <strong>C. $1 \\dfrac{3}{5}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{2}{5}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{8}{20}$', isCorrect: false },
      { id: 'C', textHtml: '$1 \\dfrac{3}{5}$', isCorrect: true },
      { id: 'D', textHtml: '$3 \\dfrac{3}{5}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.mul', role: 'primary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'multiplication', 'whole-number']
  },

  {
    id: 'prealg-06-q3',
    number: 3,
    promptHtml: `
      <p>Compute: $1 \\dfrac{1}{2} \\cdot \\dfrac{2}{3}$.</p>
    `,
    hintHtml: `
      <p>
        Convert the mixed number $1 \\dfrac{1}{2}$ to an improper fraction, then multiply and simplify
        the result.
      </p>
    `,
    solutionHtml: `
      <p>Convert $1 \\dfrac{1}{2}$ to an improper fraction:</p>
      <p>
        $$
        1 \\dfrac{1}{2} = \\dfrac{1 \\cdot 2 + 1}{2} = \\dfrac{3}{2}.
        $$
      </p>
      <p>Now multiply:</p>
      <p>
        $$
        \\dfrac{3}{2} \\cdot \\dfrac{2}{3}
        = \\dfrac{3 \\cdot 2}{2 \\cdot 3}
        = \\dfrac{6}{6}
        = 1.
        $$
      </p>
      <p>So the product is $1$.</p>
      <p>The correct choice is <strong>A. $1$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$1$', isCorrect: true },
      { id: 'B', textHtml: '$\\dfrac{1}{3}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{3}{4}$', isCorrect: false },
      { id: 'D', textHtml: '$2$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.mul', role: 'primary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'multiplication', 'mixed-numbers']
  },

  {
    id: 'prealg-06-q4',
    number: 4,
    promptHtml: `
      <p>Compute: $\\dfrac{3}{4} \\div \\dfrac{2}{5}$.</p>
    `,
    hintHtml: `
      <p>
        To divide by a fraction, multiply by its reciprocal. Flip $\\dfrac{2}{5}$ to get $\\dfrac{5}{2}$
        and then multiply.
      </p>
    `,
    solutionHtml: `
      <p>Rewrite the division as multiplication by the reciprocal:</p>
      <p>
        $$
        \\dfrac{3}{4} \\div \\dfrac{2}{5}
        = \\dfrac{3}{4} \\cdot \\dfrac{5}{2}.
        $$
      </p>
      <p>Multiply the fractions:</p>
      <p>
        $$
        \\dfrac{3}{4} \\cdot \\dfrac{5}{2}
        = \\dfrac{3 \\cdot 5}{4 \\cdot 2}
        = \\dfrac{15}{8}.
        $$
      </p>
      <p>Convert $\\dfrac{15}{8}$ to a mixed number:</p>
      <p>
        $$
        15 \\div 8 = 1 \\text{ remainder } 7,
        \\quad \\dfrac{15}{8} = 1 \\dfrac{7}{8}.
        $$
      </p>
      <p>So the quotient is $1 \\dfrac{7}{8}$.</p>
      <p>The correct choice is <strong>D. $1 \\dfrac{7}{8}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{3}{10}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{5}{6}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{8}{15}$', isCorrect: false },
      { id: 'D', textHtml: '$1 \\dfrac{7}{8}$', isCorrect: true }
    ],
    skills: [
      { skillId: 'math.skill.frac.div', role: 'primary' },
      { skillId: 'math.skill.frac.mul', role: 'secondary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'division']
  },

  {
    id: 'prealg-06-q5',
    number: 5,
    promptHtml: `
      <p>Compute: $2 \\dfrac{1}{3} \\div \\dfrac{1}{6}$.</p>
    `,
    hintHtml: `
      <p>
        Convert $2 \\dfrac{1}{3}$ to an improper fraction, then multiply by the reciprocal of
        $\\dfrac{1}{6}$.
      </p>
    `,
    solutionHtml: `
      <p>Convert $2 \\dfrac{1}{3}$ to an improper fraction:</p>
      <p>
        $$
        2 \\dfrac{1}{3} = \\dfrac{2 \\cdot 3 + 1}{3} = \\dfrac{7}{3}.
        $$
      </p>
      <p>Divide by $\\dfrac{1}{6}$ by multiplying by its reciprocal $\\dfrac{6}{1}$:</p>
      <p>
        $$
        \\dfrac{7}{3} \\div \\dfrac{1}{6}
        = \\dfrac{7}{3} \\cdot \\dfrac{6}{1}
        = \\dfrac{7 \\cdot 6}{3 \\cdot 1}
        = \\dfrac{42}{3}
        = 14.
        $$
      </p>
      <p>So the quotient is $14$.</p>
      <p>The correct choice is <strong>B. $14$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$7$', isCorrect: false },
      { id: 'B', textHtml: '$14$', isCorrect: true },
      { id: 'C', textHtml: '$4 \\dfrac{2}{3}$', isCorrect: false },
      { id: 'D', textHtml: '$\\dfrac{7}{18}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.div', role: 'primary' },
      { skillId: 'math.skill.frac.mul', role: 'secondary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'division', 'mixed-numbers']
  },

  {
    id: 'prealg-06-q6',
    number: 6,
    promptHtml: `
      <p>Compute: $-\\dfrac{3}{5} \\cdot \\dfrac{4}{7}$.</p>
    `,
    hintHtml: `
      <p>
        Multiply the fractions as usual, then determine the sign of the result. A negative times a
        positive is negative.
      </p>
    `,
    solutionHtml: `
      <p>Multiply the numerators and denominators:</p>
      <p>
        $$
        -\\dfrac{3}{5} \\cdot \\dfrac{4}{7}
        = -\\dfrac{3 \\cdot 4}{5 \\cdot 7}
        = -\\dfrac{12}{35}.
        $$
      </p>
      <p>The fraction $\\dfrac{12}{35}$ cannot be simplified further.</p>
      <p>So the product is $-\\dfrac{12}{35}$.</p>
      <p>The correct choice is <strong>C. $-\\dfrac{12}{35}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{12}{35}$', isCorrect: false },
      { id: 'B', textHtml: '$-\\dfrac{7}{15}$', isCorrect: false },
      { id: 'C', textHtml: '$-\\dfrac{12}{35}$', isCorrect: true },
      { id: 'D', textHtml: '$\\dfrac{7}{12}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.mul', role: 'primary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'multiplication', 'negatives']
  },

  {
    id: 'prealg-06-q7',
    number: 7,
    promptHtml: `
      <p>Compute: $\\dfrac{-5}{6} \\div \\left(-\\dfrac{1}{3}\\right)$.</p>
    `,
    hintHtml: `
      <p>
        Divide by multiplying by the reciprocal. Pay attention to the signs: a negative divided by a
        negative is positive.
      </p>
    `,
    solutionHtml: `
      <p>Rewrite the division as multiplication by the reciprocal of $-\\dfrac{1}{3}$, which is $-\\dfrac{3}{1}$:</p>
      <p>
        $$
        \\dfrac{-5}{6} \\div \\left(-\\dfrac{1}{3}\\right)
        = \\dfrac{-5}{6} \\cdot \\left(-\\dfrac{3}{1}\\right).
        $$
      </p>
      <p>Multiply the fractions:</p>
      <p>
        $$
        \\dfrac{-5}{6} \\cdot \\left(-\\dfrac{3}{1}\\right)
        = \\dfrac{(-5) \\cdot (-3)}{6 \\cdot 1}
        = \\dfrac{15}{6}.
        $$
      </p>
      <p>Since negative times negative is positive, the result is positive.</p>
      <p>Simplify $\\dfrac{15}{6}$ by dividing numerator and denominator by $3$:</p>
      <p>
        $$
        \\dfrac{15}{6} = \\dfrac{5}{2} = 2 \\dfrac{1}{2}.
        $$
      </p>
      <p>So the quotient is $2 \\dfrac{1}{2}$.</p>
      <p>The correct choice is <strong>D. $2 \\dfrac{1}{2}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$-\\dfrac{5}{2}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{5}{18}$', isCorrect: false },
      { id: 'C', textHtml: '$-2 \\dfrac{1}{2}$', isCorrect: false },
      { id: 'D', textHtml: '$2 \\dfrac{1}{2}$', isCorrect: true }
    ],
    skills: [
      { skillId: 'math.skill.frac.div', role: 'primary' },
      { skillId: 'math.skill.frac.mul', role: 'secondary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'division', 'negatives']
  },

  {
    id: 'prealg-06-q8',
    number: 8,
    promptHtml: `
      <p>Compute: $\\dfrac{2}{3}$ of $18$.</p>
    `,
    hintHtml: `
      <p>
        The phrase “$\\dfrac{2}{3}$ of $18$” means $\\dfrac{2}{3} \\cdot 18$. Multiply and simplify.
      </p>
    `,
    solutionHtml: `
      <p>Translate the phrase to multiplication:</p>
      <p>
        $$
        \\dfrac{2}{3} \\text{ of } 18 = \\dfrac{2}{3} \\cdot 18.
        $$
      </p>
      <p>Write $18$ as $\\dfrac{18}{1}$ and multiply:</p>
      <p>
        $$
        \\dfrac{2}{3} \\cdot \\dfrac{18}{1}
        = \\dfrac{2 \\cdot 18}{3 \\cdot 1}
        = \\dfrac{36}{3}
        = 12.
        $$
      </p>
      <p>So $\\dfrac{2}{3}$ of $18$ is $12$.</p>
      <p>The correct choice is <strong>B. $12$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$9$', isCorrect: false },
      { id: 'B', textHtml: '$12$', isCorrect: true },
      { id: 'C', textHtml: '$6$', isCorrect: false },
      { id: 'D', textHtml: '$18$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.of-number', role: 'primary' },
      { skillId: 'math.skill.frac.mul', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', '"of"-problems', 'multiplication']
  },

  {
    id: 'prealg-06-q9',
    number: 9,
    promptHtml: `
      <p>
        A water bottle is filled to $\\dfrac{3}{4}$ of its capacity. If the bottle holds $32$ ounces when
        full, how many ounces of water are in the bottle?
      </p>
    `,
    hintHtml: `
      <p>
        “$\\dfrac{3}{4}$ of $32$” means $\\dfrac{3}{4} \\cdot 32$. Multiply and simplify.
      </p>
    `,
    solutionHtml: `
      <p>Compute $\\dfrac{3}{4}$ of $32$:</p>
      <p>
        $$
        \\dfrac{3}{4} \\cdot 32
        = \\dfrac{3}{4} \\cdot \\dfrac{32}{1}
        = \\dfrac{3 \\cdot 32}{4 \\cdot 1}
        = \\dfrac{96}{4}
        = 24.
        $$
      </p>
      <p>So there are $24$ ounces of water in the bottle.</p>
      <p>The correct choice is <strong>C. $24$ ounces</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '8 ounces', isCorrect: false },
      { id: 'B', textHtml: '16 ounces', isCorrect: false },
      { id: 'C', textHtml: '24 ounces', isCorrect: true },
      { id: 'D', textHtml: '32 ounces', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.of-number', role: 'primary' },
      { skillId: 'math.skill.frac.mul', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', '"of"-problems', 'word-problem']
  },

  {
    id: 'prealg-06-q10',
    number: 10,
    promptHtml: `
      <p>
        The area of a rectangle is found by multiplying its length by its width.
        A rectangle has length $\\dfrac{3}{4}$ meter and width $\\dfrac{2}{5}$ meter.
        What is the area of the rectangle?
      </p>
    `,
    hintHtml: `
      <p>
        Multiply the two fractions $\\dfrac{3}{4}$ and $\\dfrac{2}{5}$ to find the area. Then simplify
        the result if possible.
      </p>
    `,
    solutionHtml: `
      <p>Multiply the length and width:</p>
      <p>
        $$
        \\text{Area} = \\dfrac{3}{4} \\cdot \\dfrac{2}{5}
        = \\dfrac{3 \\cdot 2}{4 \\cdot 5}
        = \\dfrac{6}{20}.
        $$
      </p>
      <p>Simplify $\\dfrac{6}{20}$ by dividing numerator and denominator by $2$:</p>
      <p>
        $$
        \\dfrac{6}{20} = \\dfrac{3}{10}.
        $$
      </p>
      <p>So the area is $\\dfrac{3}{10}$ square meters.</p>
      <p>The correct choice is <strong>A. $\\dfrac{3}{10}$ square meters</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{3}{10}$ square meters', isCorrect: true },
      { id: 'B', textHtml: '$\\dfrac{2}{15}$ square meters', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{5}{8}$ square meters', isCorrect: false },
      { id: 'D', textHtml: '$\\dfrac{6}{9}$ square meters', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.mul', role: 'primary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' },
      { skillId: 'math.skill.frac.of-number', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'multiplication', 'area', 'word-problem']
  }
]
