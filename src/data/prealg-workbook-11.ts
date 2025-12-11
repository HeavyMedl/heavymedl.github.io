import type { MathProblemData } from '@/types/math.types'

export const problems: MathProblemData[] = [
  {
    id: 'prealg-11-q1',
    number: 1,
    promptHtml: `
      <p>Evaluate: $3^4$</p>
    `,
    strategyHtml: `
      <p>
        Expand the power as repeated multiplication:
        $3^4$ means $3 \\cdot 3 \\cdot 3 \\cdot 3$
      </p>
    `,
    solutionHtml: `
      <p>Write $3^4$ as repeated multiplication:</p>
      <p>
        $$
        3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3
        $$
      </p>
      <p>Multiply step by step:</p>
      <ul>
        <li>$3 \\cdot 3 = 9$</li>
        <li>$9 \\cdot 3 = 27$</li>
        <li>$27 \\cdot 3 = 81$</li>
      </ul>
      <p>So $3^4 = 81$</p>
      <p>The correct choice is <strong>C. $81$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$12$', isCorrect: false },
      { id: 'B', textHtml: '$27$', isCorrect: false },
      { id: 'C', textHtml: '$81$', isCorrect: true },
      { id: 'D', textHtml: '$64$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.exp.evaluate', role: 'primary' }],
    tags: ['pre-algebra', 'exponents', 'evaluation']
  },

  {
    id: 'prealg-11-q2',
    number: 2,
    promptHtml: `
      <p>Evaluate: $(-2)^3$</p>
    `,
    strategyHtml: `
      <p>
        Expand $(-2)^3$ as $(-2) \\cdot (-2) \\cdot (-2)$
        Remember: the product of two negatives is positive, and then multiply by another negative.
      </p>
    `,
    solutionHtml: `
      <p>Write $(-2)^3$ as repeated multiplication:</p>
      <p>
        $$
        (-2)^3 = (-2) \\cdot (-2) \\cdot (-2)
        $$
      </p>
      <p>Multiply step by step:</p>
      <ul>
        <li>$(-2) \\cdot (-2) = 4$ (negative times negative is positive)</li>
        <li>$4 \\cdot (-2) = -8$</li>
      </ul>
      <p>So $(-2)^3 = -8$</p>
      <p>The correct choice is <strong>B. $-8$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$8$', isCorrect: false },
      { id: 'B', textHtml: '$-8$', isCorrect: true },
      { id: 'C', textHtml: '$4$', isCorrect: false },
      { id: 'D', textHtml: '$-4$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.exp.evaluate', role: 'primary' },
      { skillId: 'math.skill.int.mul-div', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'exponents', 'negatives']
  },

  {
    id: 'prealg-11-q3',
    number: 3,
    promptHtml: `
      <p>Simplify: $2^3 \\cdot 2^4$</p>
    `,
    strategyHtml: `
      <p>
        When multiplying powers with the same base, keep the base and add the exponents:
        $a^m \\cdot a^n = a^{m+n}$
      </p>
    `,
    solutionHtml: `
      <p>Use the product rule for exponents:</p>
      <p>
        $$
        2^3 \\cdot 2^4 = 2^{3+4} = 2^7
        $$
      </p>
      <p>Evaluate $2^7$</p>
      <p>
        $$
        2^7 = 128
        $$
      </p>
      <p>So the simplified result is $128$</p>
      <p>The correct choice is <strong>D. $128$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$2^{12}$', isCorrect: false },
      { id: 'B', textHtml: '$2^1$', isCorrect: false },
      { id: 'C', textHtml: '$32$', isCorrect: false },
      { id: 'D', textHtml: '$128$', isCorrect: true }
    ],
    skills: [{ skillId: 'math.skill.exp.rules-basic', role: 'primary' }],
    tags: ['pre-algebra', 'exponents', 'product-rule']
  },

  {
    id: 'prealg-11-q4',
    number: 4,
    promptHtml: `
      <p>Simplify: $\\dfrac{x^5}{x^2}$ (assume $x \\ne 0$).</p>
    `,
    strategyHtml: `
      <p>
        For a quotient with the same base, subtract exponents:
        $\\dfrac{a^m}{a^n} = a^{m-n}$
      </p>
    `,
    solutionHtml: `
      <p>Apply the quotient rule:</p>
      <p>
        $$
        \\dfrac{x^5}{x^2} = x^{5-2} = x^3
        $$
      </p>
      <p>So the simplified expression is $x^3$</p>
      <p>The correct choice is <strong>A. $x^3$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$x^3$', isCorrect: true },
      { id: 'B', textHtml: '$x^7$', isCorrect: false },
      { id: 'C', textHtml: '$x^2$', isCorrect: false },
      { id: 'D', textHtml: '$\\dfrac{1}{x^3}$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.exp.rules-basic', role: 'primary' }],
    tags: ['pre-algebra', 'exponents', 'quotient-rule', 'variables']
  },

  {
    id: 'prealg-11-q5',
    number: 5,
    promptHtml: `
      <p>Simplify: $(3^2)^3$</p>
    `,
    strategyHtml: `
      <p>
        Use the power-of-a-power rule:
        $(a^m)^n = a^{m \\cdot n}$
      </p>
    `,
    solutionHtml: `
      <p>Apply the power-of-a-power rule:</p>
      <p>
        $$
        (3^2)^3 = 3^{2 \\cdot 3} = 3^6
        $$
      </p>
      <p>Evaluate $3^6$</p>
      <p>
        $$
        3^6 = 3^3 \\cdot 3^3 = 27 \\cdot 27 = 729
        $$
      </p>
      <p>So $(3^2)^3 = 729$</p>
      <p>The correct choice is <strong>C. $729$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$36$', isCorrect: false },
      { id: 'B', textHtml: '$243$', isCorrect: false },
      { id: 'C', textHtml: '$729$', isCorrect: true },
      { id: 'D', textHtml: '$81$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.exp.rules-basic', role: 'primary' }],
    tags: ['pre-algebra', 'exponents', 'power-rule']
  },

  {
    id: 'prealg-11-q6',
    number: 6,
    promptHtml: `
      <p>
        Simplify: $2^3 \\cdot 5^2$
      </p>
    `,
    strategyHtml: `
      <p>
        The bases are different, so the exponent rules for combining exponents do not apply across
        $2$ and $5$ Evaluate each power separately, then multiply the results.
      </p>
    `,
    solutionHtml: `
      <p>Evaluate each power first:</p>
      <ul>
        <li>$2^3 = 8$</li>
        <li>$5^2 = 25$</li>
      </ul>
      <p>Now multiply:</p>
      <p>
        $$
        8 \\cdot 25 = 200
        $$
      </p>
      <p>So the simplified value is $200$</p>
      <p>The correct choice is <strong>B. $200$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$40$', isCorrect: false },
      { id: 'B', textHtml: '$200$', isCorrect: true },
      { id: 'C', textHtml: '$100$', isCorrect: false },
      { id: 'D', textHtml: '$10^5$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.exp.evaluate', role: 'primary' }],
    tags: ['pre-algebra', 'exponents', 'evaluation']
  },

  {
    id: 'prealg-11-q7',
    number: 7,
    promptHtml: `
      <p>Write $4{,}500{,}000$ in scientific notation.</p>
    `,
    strategyHtml: `
      <p>
        Move the decimal so you have a number between $1$ and $10$ then count how many places
        you moved it. That count becomes the positive exponent of $10$
      </p>
    `,
    solutionHtml: `
      <p>Start with $4{,}500{,}000$ and place the decimal after the first nonzero digit:</p>
      <p>
        $$
        4{,}500{,}000 = 4.5 \\times 1{,}000{,}000
        $$
      </p>
      <p>We moved the decimal $6$ places to the left:</p>
      <p>
        $$
        1{,}000{,}000 = 10^6
        $$
      </p>
      <p>So in scientific notation:</p>
      <p>
        $$
        4{,}500{,}000 = 4.5 \\times 10^6
        $$
      </p>
      <p>The correct choice is <strong>A. $4.5 \\times 10^6$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$4.5 \\times 10^6$', isCorrect: true },
      { id: 'B', textHtml: '$45 \\times 10^5$', isCorrect: false },
      { id: 'C', textHtml: '$4.5 \\times 10^5$', isCorrect: false },
      { id: 'D', textHtml: '$0.45 \\times 10^7$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.sci-notation.write', role: 'primary' }],
    tags: ['pre-algebra', 'scientific-notation', 'representation']
  },

  {
    id: 'prealg-11-q8',
    number: 8,
    promptHtml: `
      <p>Write $0.00032$ in scientific notation.</p>
    `,
    strategyHtml: `
      <p>
        Move the decimal to get a number between $1$ and $10$  
        Count how many places you move it to the right; that count becomes a negative exponent:
        $a \\times 10^{-n}$
      </p>
    `,
    solutionHtml: `
      <p>Place the decimal so the number is between $1$ and $10$</p>
      <p>
        $$
        0.00032 = 3.2 \\times 0.0001
        $$
      </p>
      <p>We moved the decimal $4$ places to the right, so the exponent is $-4$</p>
      <p>
        $$
        0.0001 = 10^{-4}
        $$
      </p>
      <p>So in scientific notation:</p>
      <p>
        $$
        0.00032 = 3.2 \\times 10^{-4}
        $$
      </p>
      <p>The correct choice is <strong>C. $3.2 \\times 10^{-4}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$3.2 \\times 10^4$', isCorrect: false },
      { id: 'B', textHtml: '$0.32 \\times 10^{-3}$', isCorrect: false },
      { id: 'C', textHtml: '$3.2 \\times 10^{-4}$', isCorrect: true },
      { id: 'D', textHtml: '$32 \\times 10^{-6}$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.sci-notation.write', role: 'primary' }],
    tags: ['pre-algebra', 'scientific-notation', 'representation']
  },

  {
    id: 'prealg-11-q9',
    number: 9,
    promptHtml: `
      <p>
        Simplify: $(3 \\times 10^4)(2 \\times 10^3)$
      </p>
    `,
    strategyHtml: `
      <p>
        Multiply the numbers in front and use the product rule on the powers of $10$
        $(3 \\times 2) \\times 10^{4+3}$
      </p>
    `,
    solutionHtml: `
      <p>Multiply the coefficients and then the powers of $10$</p>
      <p>
        $$
        (3 \\times 10^4)(2 \\times 10^3)
        = (3 \\cdot 2) \\times 10^{4+3}
        $$
      </p>
      <p>Compute each part:</p>
      <p>
        $$
        3 \\cdot 2 = 6, \\quad 4 + 3 = 7
        $$
      </p>
      <p>so</p>
      <p>
        $$
        (3 \\times 10^4)(2 \\times 10^3) = 6 \\times 10^7
        $$
      </p>
      <p>This is already in scientific notation.</p>
      <p>The correct choice is <strong>B. $6 \\times 10^7$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$5 \\times 10^7$', isCorrect: false },
      { id: 'B', textHtml: '$6 \\times 10^7$', isCorrect: true },
      { id: 'C', textHtml: '$6 \\times 10^{12}$', isCorrect: false },
      { id: 'D', textHtml: '$3 \\times 10^7$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.sci-notation.ops', role: 'primary' },
      { skillId: 'math.skill.exp.rules-basic', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'scientific-notation', 'multiplication']
  },

  {
    id: 'prealg-11-q10',
    number: 10,
    promptHtml: `
      <p>
        Simplify: $\\dfrac{4.8 \\times 10^5}{6 \\times 10^2}$
      </p>
    `,
    strategyHtml: `
      <p>
        Divide the coefficients and subtract the exponents:  
        $\\dfrac{4.8}{6} \\times 10^{5-2}$  
        Then adjust the coefficient if needed so it is between $1$ and $10$
      </p>
    `,
    solutionHtml: `
      <p>Separate the fraction into coefficients and powers of $10$</p>
      <p>
        $$
        \\dfrac{4.8 \\times 10^5}{6 \\times 10^2}
        = \\left(\\dfrac{4.8}{6}\\right) \\times 10^{5-2}
        $$
      </p>
      <p>Compute the coefficient and exponent:</p>
      <p>
        $$
        \\dfrac{4.8}{6} = 0.8, \\quad 5 - 2 = 3
        $$
      </p>
      <p>So we have $0.8 \\times 10^3$ To write this in scientific notation, move the decimal one place to make $8.0$</p>
      <p>
        $$
        0.8 \\times 10^3 = 8.0 \\times 10^2
        $$
      </p>
      <p>So in scientific notation, the result is $8 \\times 10^2$</p>
      <p>The correct choice is <strong>C. $8 \\times 10^2$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$0.8 \\times 10^3$', isCorrect: false },
      { id: 'B', textHtml: '$8 \\times 10^3$', isCorrect: false },
      { id: 'C', textHtml: '$8 \\times 10^2$', isCorrect: true },
      { id: 'D', textHtml: '$0.48 \\times 10^3$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.sci-notation.ops', role: 'primary' },
      { skillId: 'math.skill.exp.rules-basic', role: 'secondary' },
      { skillId: 'math.skill.decimal.ops', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'scientific-notation', 'division']
  }
]
