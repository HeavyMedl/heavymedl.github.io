import type { MathProblemData } from '@/types/math.types'

export const problems: MathProblemData[] = [
  {
    id: 'prealg-04-q1',
    number: 1,
    promptHtml: `
      <p>Simplify the fraction $\\dfrac{12}{18}$ to lowest terms.</p>
    `,
    strategyHtml: `
      <p>
        Find the greatest common factor (GCF) of $12$ and $18$ and divide both the numerator and
        denominator by that number.
      </p>
    `,
    solutionHtml: `
      <p>Find the greatest common factor (GCF) of $12$ and $18$</p>
      <p>
        $$
        12 = 2^2 \\cdot 3, \\quad 18 = 2 \\cdot 3^2
        $$
      </p>
      <p>The common prime factors are $2$ and $3$ so the GCF is $2 \\cdot 3 = 6$</p>
      <p>Divide numerator and denominator by $6$</p>
      <p>
        $$
        \\dfrac{12}{18} = \\dfrac{12 \\div 6}{18 \\div 6} = \\dfrac{2}{3}
        $$
      </p>
      <p>So the simplified form is $\\dfrac{2}{3}$</p>
      <p>The correct choice is <strong>B. $\\dfrac{2}{3}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{4}{6}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{2}{3}$', isCorrect: true },
      { id: 'C', textHtml: '$\\dfrac{6}{9}$', isCorrect: false },
      { id: 'D', textHtml: '$\\dfrac{3}{2}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.simplify', role: 'primary' },
      { skillId: 'math.skill.factors-multiples', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'simplifying']
  },

  {
    id: 'prealg-04-q2',
    number: 2,
    promptHtml: `
      <p>Simplify the fraction $\\dfrac{45}{60}$ to lowest terms.</p>
    `,
    strategyHtml: `
      <p>
        Look for a common factor of $45$ and $60$ You can use prime factorization or find the GCF
        by listing factors.
      </p>
    `,
    solutionHtml: `
      <p>Use prime factorization:</p>
      <p>
        $$
        45 = 3^2 \\cdot 5, \\quad 60 = 2^2 \\cdot 3 \\cdot 5
        $$
      </p>
      <p>The common primes are $3$ and $5$ so the GCF is $3 \\cdot 5 = 15$</p>
      <p>Divide numerator and denominator by $15$</p>
      <p>
        $$
        \\dfrac{45}{60} = \\dfrac{45 \\div 15}{60 \\div 15} = \\dfrac{3}{4}
        $$
      </p>
      <p>So the simplified form is $\\dfrac{3}{4}$</p>
      <p>The correct choice is <strong>C. $\\dfrac{3}{4}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{9}{12}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{5}{8}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{3}{4}$', isCorrect: true },
      { id: 'D', textHtml: '$\\dfrac{4}{5}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.simplify', role: 'primary' },
      { skillId: 'math.skill.factors-multiples', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'simplifying']
  },

  {
    id: 'prealg-04-q3',
    number: 3,
    promptHtml: `
      <p>Which fraction is <strong>equivalent</strong> to $\\dfrac{3}{5}$?</p>
    `,
    strategyHtml: `
      <p>
        To find an equivalent fraction, multiply or divide both the numerator and denominator by the
        <strong>same</strong> nonzero number.
      </p>
    `,
    solutionHtml: `
      <p>Start with $\\dfrac{3}{5}$ and check each option to see if it can be obtained by multiplying
      both numerator and denominator by the same number.</p>
      <ul>
        <li>
          $\\dfrac{6}{10}: 3 \\to 6$ (multiply by $2$) and $5 \\to 10$ (multiply by $2$), so this is equivalent.
        </li>
        <li>
          $\\dfrac{9}{20}: 3 \\to 9$ (multiply by $3$), but $5 \\to 20$ (multiply by $4$), so not equivalent.
        </li>
        <li>
          $\\dfrac{15}{16}: 3 \\to 15$ (multiply by $5$), but $5 \\to 16$ (not multiply by $5$), so not equivalent.
        </li>
        <li>
          $\\dfrac{5}{3}$ is actually the reciprocal, not equivalent.
        </li>
      </ul>
      <p>So the fraction equivalent to $\\dfrac{3}{5}$ is $\\dfrac{6}{10}$</p>
      <p>The correct choice is <strong>A. $\\dfrac{6}{10}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{6}{10}$', isCorrect: true },
      { id: 'B', textHtml: '$\\dfrac{9}{20}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{15}{16}$', isCorrect: false },
      { id: 'D', textHtml: '$\\dfrac{5}{3}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.equivalent', role: 'primary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'equivalent-fractions']
  },

  {
    id: 'prealg-04-q4',
    number: 4,
    promptHtml: `
      <p>Find the missing numerator so that the fractions are equivalent:</p>
      <p>
        $$
        \\dfrac{\\square}{12} = \\dfrac{5}{6}
        $$
      </p>
    `,
    strategyHtml: `
      <p>
        Think about how to get from $6$ to $12$ in the denominator, and then apply the <strong>same</strong>
        change to the numerator.
      </p>
    `,
    solutionHtml: `
      <p>Start with $\\dfrac{5}{6}$ and compare the denominators.</p>
      <p>To go from $6$ to $12$ multiply by $2$</p>
      <p>To keep the fractions equivalent, multiply the numerator by the same number:</p>
      <p>
        $$
        5 \\times 2 = 10
        $$
      </p>
      <p>So the missing numerator is $10$ and the fraction is $\\dfrac{10}{12}$</p>
      <p>The correct choice is <strong>C. 10</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$5$', isCorrect: false },
      { id: 'B', textHtml: '$8$', isCorrect: false },
      { id: 'C', textHtml: '$10$', isCorrect: true },
      { id: 'D', textHtml: '$12$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.equivalent', role: 'primary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'equivalent-fractions']
  },

  {
    id: 'prealg-04-q5',
    number: 5,
    promptHtml: `
      <p>Write $\\dfrac{3}{5}$ as a percent.</p>
    `,
    strategyHtml: `
      <p>
        Convert the fraction to a decimal by dividing $3 \\div 5$ then multiply by $100$ to get the
        percent.
      </p>
    `,
    solutionHtml: `
      <p>First convert $\\dfrac{3}{5}$ to a decimal:</p>
      <p>
        $$
        3 \\div 5 = 0.6
        $$
      </p>
      <p>Now convert the decimal to a percent by multiplying by $100$</p>
      <p>
        $$
        0.6 \\times 100 = 60\\%
        $$
      </p>
      <p>So $\\dfrac{3}{5}$ is equal to $60\\%$</p>
      <p>The correct choice is <strong>B. $60\\%$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$30\\%$', isCorrect: false },
      { id: 'B', textHtml: '$60\\%$', isCorrect: true },
      { id: 'C', textHtml: '$75\\%$', isCorrect: false },
      { id: 'D', textHtml: '$80\\%$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.to-percent', role: 'primary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'percents']
  },

  {
    id: 'prealg-04-q6',
    number: 6,
    promptHtml: `
      <p>Write $54\\%$ as a fraction in simplest form.</p>
    `,
    strategyHtml: `
      <p>
        Start by writing $54\\%$ as $\\dfrac{54}{100}$ then simplify the fraction by dividing the
        numerator and denominator by their GCF.
      </p>
    `,
    solutionHtml: `
      <p>Write $54\\%$ as a fraction:</p>
      <p>
        $$
        54\\% = \\dfrac{54}{100}
        $$
      </p>
      <p>Find the greatest common factor of $54$ and $100$</p>
      <p>
        $$
        54 = 2 \\cdot 3^3, \\quad 100 = 2^2 \\cdot 5^2
        $$
      </p>
      <p>The common factor is $2$ so divide numerator and denominator by $2$</p>
      <p>
        $$
        \\dfrac{54}{100} = \\dfrac{54 \\div 2}{100 \\div 2} = \\dfrac{27}{50}
        $$
      </p>
      <p>So $54\\%$ as a fraction in simplest form is $\\dfrac{27}{50}$</p>
      <p>The correct choice is <strong>C. $\\dfrac{27}{50}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{27}{100}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{54}{50}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{27}{50}$', isCorrect: true },
      { id: 'D', textHtml: '$\\dfrac{54}{25}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.to-percent', role: 'primary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' },
      { skillId: 'math.skill.factors-multiples', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'percents', 'simplifying']
  },

  {
    id: 'prealg-04-q7',
    number: 7,
    promptHtml: `
      <p>Which is greater: $\\dfrac{3}{4}$ or $\\dfrac{4}{5}$?</p>
    `,
    strategyHtml: `
      <p>
        Compare the fractions by rewriting them with a common denominator, or convert both to decimals
        and compare the decimal values.
      </p>
    `,
    solutionHtml: `
      <p>Find a common denominator for $\\dfrac{3}{4}$ and $\\dfrac{4}{5}$</p>
      <p>The least common multiple of $4$ and $5$ is $20$</p>
      <p>Rewrite each fraction with denominator $20$</p>
      <p>
        $$
        \\dfrac{3}{4} = \\dfrac{3 \\times 5}{4 \\times 5} = \\dfrac{15}{20}, \\quad
        \\dfrac{4}{5} = \\dfrac{4 \\times 4}{5 \\times 4} = \\dfrac{16}{20}
        $$
      </p>
      <p>Since $\\dfrac{16}{20} > \\dfrac{15}{20}$ we have $\\dfrac{4}{5} > \\dfrac{3}{4}$</p>
      <p>The correct choice is <strong>B. $\\dfrac{4}{5}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{3}{4}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{4}{5}$', isCorrect: true },
      { id: 'C', textHtml: 'They are equal', isCorrect: false },
      { id: 'D', textHtml: 'Cannot be determined', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.compare', role: 'primary' },
      { skillId: 'math.skill.frac.equivalent', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'comparison']
  },

  {
    id: 'prealg-04-q8',
    number: 8,
    promptHtml: `
      <p>Which list shows the fractions in order from least to greatest?</p>
      <p>
        $$
        \\dfrac{1}{2}, \\quad \\dfrac{3}{4}, \\quad \\dfrac{2}{3}, \\quad \\dfrac{5}{8}
        $$
      </p>
    `,
    strategyHtml: `
      <p>
        Either convert each fraction to a decimal or rewrite them with a common denominator so you can
        compare their sizes.
      </p>
    `,
    solutionHtml: `
      <p>Convert each fraction to a decimal (or use a common denominator):</p>
      <ul>
        <li>$\\dfrac{1}{2} = 0.5$</li>
        <li>$\\dfrac{5}{8} = 0.625$</li>
        <li>$\\dfrac{2}{3} \\approx 0.666\\dots$</li>
        <li>$\\dfrac{3}{4} = 0.75$</li>
      </ul>
      <p>From least to greatest:</p>
      <p>
        $$
        \\dfrac{1}{2}, \\; \\dfrac{5}{8}, \\; \\dfrac{2}{3}, \\; \\dfrac{3}{4}
        $$
      </p>
      <p>The correct choice is the list that matches this order:
      <strong>A. $\\dfrac{1}{2}, \\dfrac{5}{8}, \\dfrac{2}{3}, \\dfrac{3}{4}$</strong>.</p>
    `,
    choices: [
      {
        id: 'A',
        textHtml: '$\\dfrac{1}{2}, \\dfrac{5}{8}, \\dfrac{2}{3}, \\dfrac{3}{4}$',
        isCorrect: true
      },
      {
        id: 'B',
        textHtml: '$\\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{5}{8}, \\dfrac{3}{4}$',
        isCorrect: false
      },
      {
        id: 'C',
        textHtml: '$\\dfrac{5}{8}, \\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{3}{4}$',
        isCorrect: false
      },
      {
        id: 'D',
        textHtml: '$\\dfrac{1}{2}, \\dfrac{5}{8}, \\dfrac{3}{4}, \\dfrac{2}{3}$',
        isCorrect: false
      }
    ],
    skills: [
      { skillId: 'math.skill.frac.compare', role: 'primary' },
      { skillId: 'math.skill.frac.equivalent', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'comparison', 'ordering']
  },

  {
    id: 'prealg-04-q9',
    number: 9,
    promptHtml: `
      <p>
        Kurt ate $\\dfrac{3}{4}$ of a pizza, and Jess ate $\\dfrac{5}{8}$ of a pizza of the same size.
        Who ate more pizza?
      </p>
    `,
    strategyHtml: `
      <p>
        Compare $\\dfrac{3}{4}$ and $\\dfrac{5}{8}$ either by using a common denominator or by
        converting each to a decimal.
      </p>
    `,
    solutionHtml: `
      <p>Compare $\\dfrac{3}{4}$ and $\\dfrac{5}{8}$</p>
      <p>Use a common denominator of $8$</p>
      <p>
        $$
        \\dfrac{3}{4} = \\dfrac{3 \\times 2}{4 \\times 2} = \\dfrac{6}{8}, \\quad
        \\dfrac{5}{8} = \\dfrac{5}{8}
        $$
      </p>
      <p>Since $\\dfrac{6}{8} > \\dfrac{5}{8}$ we know that $\\dfrac{3}{4} > \\dfrac{5}{8}$</p>
      <p>So Kurt ate more pizza.</p>
      <p>The correct choice is <strong>A. Kurt</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: 'Kurt', isCorrect: true },
      { id: 'B', textHtml: 'Jess', isCorrect: false },
      { id: 'C', textHtml: 'They ate the same amount', isCorrect: false },
      { id: 'D', textHtml: 'Not enough information', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.compare', role: 'primary' },
      { skillId: 'math.skill.frac.equivalent', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'comparison', 'word-problem']
  },

  {
    id: 'prealg-04-q10',
    number: 10,
    promptHtml: `
      <p>
        On a test, Sam answered $\\dfrac{18}{20}$ questions correctly, and Alex scored $90\\%$
        Who had the higher score?
      </p>
    `,
    strategyHtml: `
      <p>
        Convert $\\dfrac{18}{20}$ to a percent, or convert $90\\%$ to a fraction with denominator $20$
        then compare the two.
      </p>
    `,
    solutionHtml: `
      <p>First convert $\\dfrac{18}{20}$ to a percent.</p>
      <p>Simplify the fraction:</p>
      <p>
        $$
        \\dfrac{18}{20} = \\dfrac{9}{10}
        $$
      </p>
      <p>Now write $\\dfrac{9}{10}$ as a percent:</p>
      <p>
        $$
        9 \\div 10 = 0.9, \\quad 0.9 \\times 100 = 90\\%
        $$
      </p>
      <p>So Sam's score is $90\\%$ and Alex's score is also $90\\%$</p>
      <p>They have the same score.</p>
      <p>The correct choice is <strong>C. They had the same score</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: 'Sam', isCorrect: false },
      { id: 'B', textHtml: 'Alex', isCorrect: false },
      { id: 'C', textHtml: 'They had the same score', isCorrect: true },
      { id: 'D', textHtml: 'Not enough information', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.frac.to-percent', role: 'primary' },
      { skillId: 'math.skill.frac.compare', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'fractions', 'percents', 'comparison', 'word-problem']
  }
]
