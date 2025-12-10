import type { MathProblemData } from '@/types/math.types'

export const problems: MathProblemData[] = [
  {
    id: 'prealg-07-q1',
    number: 1,
    promptHtml: `
      <p>Compute: $3.45 + 2.7$.</p>
    `,
    strategyHtml: `
      <p>
        Line up the decimal points, add as with whole numbers, and then place the decimal point in
        the answer directly below the others.
      </p>
    `,
    solutionHtml: `
      <p>Line up the decimal points:</p>
      <p>
        $$
        \\begin{array}{r}
        3.45 \\\\
        +\\;2.70 \\\\ \\hline
        \\end{array}
        $$
      </p>
      <p>Add column by column:</p>
      <ul>
        <li>Hundredths: $5 + 0 = 5$</li>
        <li>Tenths: $4 + 7 = 11$ (write $1$ in the tenths place and carry $1$)</li>
        <li>Ones: $3 + 2 + 1 = 6$</li>
      </ul>
      <p>So</p>
      <p>
        $$
        3.45 + 2.70 = 6.15.
        $$
      </p>
      <p>The correct choice is <strong>C. $6.15$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$5.15$', isCorrect: false },
      { id: 'B', textHtml: '$5.85$', isCorrect: false },
      { id: 'C', textHtml: '$6.15$', isCorrect: true },
      { id: 'D', textHtml: '$6.45$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.decimal.ops', role: 'primary' }],
    tags: ['pre-algebra', 'decimals', 'addition']
  },

  {
    id: 'prealg-07-q2',
    number: 2,
    promptHtml: `
      <p>Compute: $5.2 - 3.75$.</p>
    `,
    strategyHtml: `
      <p>
        Line up the decimal points. You can write $5.2$ as $5.20$ so both numbers have the same number
        of decimal places, then subtract.
      </p>
    `,
    solutionHtml: `
      <p>Rewrite $5.2$ as $5.20$ to match decimal places:</p>
      <p>
        $$
        \\begin{array}{r}
        5.20 \\\\
        -\\;3.75 \\\\ \\hline
        \\end{array}
        $$
      </p>
      <p>Subtract starting from the hundredths place:</p>
      <ul>
        <li>Hundredths: need to subtract $5$ from $0$, so borrow from the tenths.</li>
        <li>After borrowing: tenths become $1$, hundredths become $10$.</li>
        <li>Hundredths: $10 - 5 = 5$</li>
        <li>Tenths: now $1 - 7$, borrow from the ones: ones become $4$, tenths become $11$.</li>
        <li>Tenths: $11 - 7 = 4$</li>
        <li>Ones: $4 - 3 = 1$</li>
      </ul>
      <p>So</p>
      <p>
        $$
        5.20 - 3.75 = 1.45.
        $$
      </p>
      <p>The correct choice is <strong>B. $1.45$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$2.45$', isCorrect: false },
      { id: 'B', textHtml: '$1.45$', isCorrect: true },
      { id: 'C', textHtml: '$1.55$', isCorrect: false },
      { id: 'D', textHtml: '$0.45$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.decimal.ops', role: 'primary' }],
    tags: ['pre-algebra', 'decimals', 'subtraction']
  },

  {
    id: 'prealg-07-q3',
    number: 3,
    promptHtml: `
      <p>Round $4.376$ to the nearest tenth.</p>
    `,
    strategyHtml: `
      <p>
        To round to the nearest tenth, look at the hundredths digit. If it is $5$ or more, round the
        tenths digit up by $1$; otherwise leave it the same.
      </p>
    `,
    solutionHtml: `
      <p>In $4.376$:</p>
      <ul>
        <li>The tenths digit is $3$.</li>
        <li>The hundredths digit is $7$.</li>
      </ul>
      <p>Since $7 \\ge 5$, round the tenths digit up from $3$ to $4$.</p>
      <p>So $4.376$ rounded to the nearest tenth is $4.4$.</p>
      <p>The correct choice is <strong>D. $4.4$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$4.3$', isCorrect: false },
      { id: 'B', textHtml: '$4.37$', isCorrect: false },
      { id: 'C', textHtml: '$4.38$', isCorrect: false },
      { id: 'D', textHtml: '$4.4$', isCorrect: true }
    ],
    skills: [{ skillId: 'math.skill.decimal.ops', role: 'primary' }],
    tags: ['pre-algebra', 'decimals', 'rounding']
  },

  {
    id: 'prealg-07-q4',
    number: 4,
    promptHtml: `
      <p>Which decimal is the greatest?</p>
      <p>
        $$
        0.45,\\quad 0.5,\\quad 0.405,\\quad 0.495
        $$
      </p>
    `,
    strategyHtml: `
      <p>
        Line up the decimal places by writing each number with three decimal digits if needed
        (for example, $0.5$ as $0.500$), then compare digit by digit from left to right.
      </p>
    `,
    solutionHtml: `
      <p>Rewrite each decimal with three digits after the decimal point:</p>
      <ul>
        <li>$0.45 = 0.450$</li>
        <li>$0.5 = 0.500$</li>
        <li>$0.405$ stays $0.405$</li>
        <li>$0.495$ stays $0.495$</li>
      </ul>
      <p>Now compare:</p>
      <p>
        $$
        0.405 < 0.450 < 0.495 < 0.500.
        $$
      </p>
      <p>The greatest value is $0.5$.</p>
      <p>The correct choice is <strong>B. $0.5$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$0.45$', isCorrect: false },
      { id: 'B', textHtml: '$0.5$', isCorrect: true },
      { id: 'C', textHtml: '$0.405$', isCorrect: false },
      { id: 'D', textHtml: '$0.495$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.decimal.ops', role: 'primary' }],
    tags: ['pre-algebra', 'decimals', 'comparison', 'ordering']
  },

  {
    id: 'prealg-07-q5',
    number: 5,
    promptHtml: `
      <p>Write $0.6$ as a fraction in simplest form.</p>
    `,
    strategyHtml: `
      <p>
        Read $0.6$ as "six tenths" and write it as $\\dfrac{6}{10}$, then simplify by dividing
        the numerator and denominator by their greatest common factor.
      </p>
    `,
    solutionHtml: `
      <p>Write $0.6$ as a fraction:</p>
      <p>
        $$
        0.6 = \\dfrac{6}{10}.
        $$
      </p>
      <p>The greatest common factor of $6$ and $10$ is $2$, so divide numerator and denominator by $2$:</p>
      <p>
        $$
        \\dfrac{6}{10} = \\dfrac{6 \\div 2}{10 \\div 2} = \\dfrac{3}{5}.
        $$
      </p>
      <p>So $0.6$ as a fraction in simplest form is $\\dfrac{3}{5}$.</p>
      <p>The correct choice is <strong>C. $\\dfrac{3}{5}$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\dfrac{6}{100}$', isCorrect: false },
      { id: 'B', textHtml: '$\\dfrac{6}{5}$', isCorrect: false },
      { id: 'C', textHtml: '$\\dfrac{3}{5}$', isCorrect: true },
      { id: 'D', textHtml: '$\\dfrac{5}{3}$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.decimal-fraction-percent', role: 'primary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'decimals', 'fractions', 'conversions']
  },

  {
    id: 'prealg-07-q6',
    number: 6,
    promptHtml: `
      <p>Write $\\dfrac{3}{20}$ as a decimal.</p>
    `,
    strategyHtml: `
      <p>
        Convert the fraction to an equivalent fraction with denominator $100$, or divide $3 \\div 20$
        to get the decimal.
      </p>
    `,
    solutionHtml: `
      <p>Find an equivalent fraction with denominator $100$:</p>
      <p>
        $$
        \\dfrac{3}{20} = \\dfrac{3 \\times 5}{20 \\times 5} = \\dfrac{15}{100}.
        $$
      </p>
      <p>As a decimal, $\\dfrac{15}{100} = 0.15$.</p>
      <p>So $\\dfrac{3}{20}$ as a decimal is $0.15$.</p>
      <p>The correct choice is <strong>A. $0.15$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$0.15$', isCorrect: true },
      { id: 'B', textHtml: '$0.3$', isCorrect: false },
      { id: 'C', textHtml: '$0.015$', isCorrect: false },
      { id: 'D', textHtml: '$0.2$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.decimal-fraction-percent', role: 'primary' }],
    tags: ['pre-algebra', 'decimals', 'fractions', 'conversions']
  },

  {
    id: 'prealg-07-q7',
    number: 7,
    promptHtml: `
      <p>Write $0.37$ as a percent.</p>
    `,
    strategyHtml: `
      <p>
        To convert a decimal to a percent, multiply by $100$ and attach the percent symbol.
      </p>
    `,
    solutionHtml: `
      <p>Multiply $0.37$ by $100$:</p>
      <p>
        $$
        0.37 \\times 100 = 37.
        $$
      </p>
      <p>Attach the percent symbol:</p>
      <p>
        $$
        0.37 = 37\\%.
        $$
      </p>
      <p>So $0.37$ as a percent is $37\\%$.</p>
      <p>The correct choice is <strong>B. $37\\%$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$0.37\\%$', isCorrect: false },
      { id: 'B', textHtml: '$37\\%$', isCorrect: true },
      { id: 'C', textHtml: '$3.7\\%$', isCorrect: false },
      { id: 'D', textHtml: '$370\\%$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.decimal-fraction-percent', role: 'primary' }],
    tags: ['pre-algebra', 'decimals', 'percents', 'conversions']
  },

  {
    id: 'prealg-07-q8',
    number: 8,
    promptHtml: `
      <p>
        A shirt originally costs &dollar;$40$. It is on sale for $25\\%$ off.
        What is the sale price of the shirt?
      </p>
    `,
    strategyHtml: `
      <p>
        First find $25\\%$ of $40$ to get the discount, then subtract that amount from the original
        price.
      </p>
    `,
    solutionHtml: `
      <p>Find $25\\%$ of $40$:</p>
      <p>
        $$
        25\\% = 0.25, \\quad 0.25 \\cdot 40 = 10.
        $$
      </p>
      <p>So the discount is &dollar;$10$.</p>
      <p>Subtract the discount from the original price:</p>
      <p>
        $$
        40 - 10 = 30.
        $$
      </p>
      <p>So the sale price is &dollar;$30$.</p>
      <p>The correct choice is <strong>C. &dollar;$30$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '&dollar;$10$', isCorrect: false },
      { id: 'B', textHtml: '&dollar;$25$', isCorrect: false },
      { id: 'C', textHtml: '&dollar;$30$', isCorrect: true },
      { id: 'D', textHtml: '&dollar;$35$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.percent.change', role: 'primary' },
      { skillId: 'math.skill.decimal-fraction-percent', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'percents', 'discount', 'word-problem']
  },

  {
    id: 'prealg-07-q9',
    number: 9,
    promptHtml: `
      <p>
        A value increases from $50$ to $65$. What is the percent increase?
      </p>
    `,
    strategyHtml: `
      <p>
        Percent increase = $\\dfrac{\\text{amount of increase}}{\\text{original amount}} \\times 100\\%$.
        Find the increase, divide by $50$, then multiply by $100$.
      </p>
    `,
    solutionHtml: `
      <p>Find the amount of increase:</p>
      <p>
        $$
        65 - 50 = 15.
        $$
      </p>
      <p>Use the percent increase formula:</p>
      <p>
        $$
        \\text{Percent increase}
        = \\dfrac{15}{50} \\times 100\\%.
        $$
      </p>
      <p>Simplify $\\dfrac{15}{50}$:</p>
      <p>
        $$
        \\dfrac{15}{50} = \\dfrac{3}{10} = 0.3.
        $$
      </p>
      <p>Now multiply by $100\\%$:</p>
      <p>
        $$
        0.3 \\times 100\\% = 30\\%.
        $$
      </p>
      <p>So the percent increase is $30\\%$.</p>
      <p>The correct choice is <strong>D. $30\\%$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$15\\%$', isCorrect: false },
      { id: 'B', textHtml: '$25\\%$', isCorrect: false },
      { id: 'C', textHtml: '$50\\%$', isCorrect: false },
      { id: 'D', textHtml: '$30\\%$', isCorrect: true }
    ],
    skills: [
      { skillId: 'math.skill.percent.change', role: 'primary' },
      { skillId: 'math.skill.decimal-fraction-percent', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'percents', 'percent-change', 'word-problem']
  },

  {
    id: 'prealg-07-q10',
    number: 10,
    promptHtml: `
      <p>
        Kurt's restaurant bill is &dollar;$35$. He wants to leave an $18\\%$ tip.
        How much money should he leave for the tip?
      </p>
    `,
    strategyHtml: `
      <p>
        Convert $18\\%$ to a decimal and multiply by $35$ to find the tip amount.
      </p>
    `,
    solutionHtml: `
      <p>Convert $18\\%$ to a decimal:</p>
      <p>
        $$
        18\\% = 0.18.
        $$
      </p>
      <p>Multiply by the bill amount:</p>
      <p>
        $$
        0.18 \\cdot 35 = 6.3.
        $$
      </p>
      <p>So the tip should be &dollar;$6.30$.</p>
      <p>The correct choice is <strong>B. &dollar;$6.30$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '&dollar;$3.50$', isCorrect: false },
      { id: 'B', textHtml: '&dollar;$6.30$', isCorrect: true },
      { id: 'C', textHtml: '&dollar;$18.00$', isCorrect: false },
      { id: 'D', textHtml: '&dollar;$41.30$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.percent.change', role: 'primary' },
      { skillId: 'math.skill.decimal-fraction-percent', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'percents', 'tip', 'word-problem']
  }
]
