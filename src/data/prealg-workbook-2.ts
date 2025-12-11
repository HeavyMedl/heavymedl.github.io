import type { MathProblemData } from '@/types/math.types'

export const problems: MathProblemData[] = [
  {
    id: 'prealg-02-q1',
    number: 1,
    promptHtml: `
      <p>What is the <strong>best</strong> classification for the number</p>
      <p>
        $$
        12
        $$
      </p>
    `,
    strategyHtml: `
      <p>
        Think about which sets $12$ belongs to: it is positive, has no fractional part, and is not zero.
        Start with the most specific set (like the counting numbers) and move outward to larger sets.
      </p>
    `,
    solutionHtml: `
      <p>The number $12$ is a positive whole number with no fractional part.</p>
      <p>
        That means it is a <strong>natural number</strong>. Because natural numbers are also whole numbers,
        integers, rational numbers, and real numbers, $12$ belongs to all of those sets.
      </p>
      <p>
        When we are asked for the <strong>best</strong> classification, we choose the most specific set it belongs to,
        which is the set of <strong>natural numbers</strong>.
      </p>
      <p>
        So the correct choice is <strong>A. Natural number</strong>.
      </p>
    `,
    choices: [
      { id: 'A', textHtml: 'Natural number', isCorrect: true },
      { id: 'B', textHtml: 'Whole number', isCorrect: false },
      { id: 'C', textHtml: 'Integer', isCorrect: false },
      { id: 'D', textHtml: 'Rational number', isCorrect: false },
      { id: 'E', textHtml: 'Real number', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.number-sets', role: 'primary' }],
    tags: ['pre-algebra', 'number-sets']
  },

  {
    id: 'prealg-02-q2',
    number: 2,
    promptHtml: `
      <p>What is the <strong>best</strong> classification for the number</p>
      <p>
        $$
        0
        $$
      </p>
    `,
    strategyHtml: `
      <p>
        Ask: Is $0$ a counting number? Is it included when we start counting $1,2,3,\\dots$?
        Then think about which set is the smallest one that still includes $0$
      </p>
    `,
    solutionHtml: `
      <p>
        The number $0$ is not one of the counting numbers $1,2,3,\\dots$ so it is not usually classified as natural.
      </p>
      <p>
        However, $0$ <strong>is</strong> a <strong>whole number</strong>, and therefore also an integer,
        a rational number, and a real number.
      </p>
      <p>
        The smallest set that contains $0$ is the set of <strong>whole numbers</strong>.
      </p>
      <p>
        So the correct choice is <strong>B. Whole number</strong>.
      </p>
    `,
    choices: [
      { id: 'A', textHtml: 'Natural number', isCorrect: false },
      { id: 'B', textHtml: 'Whole number', isCorrect: true },
      { id: 'C', textHtml: 'Integer', isCorrect: false },
      { id: 'D', textHtml: 'Rational number', isCorrect: false },
      { id: 'E', textHtml: 'Real number', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.number-sets', role: 'primary' }],
    tags: ['pre-algebra', 'number-sets']
  },

  {
    id: 'prealg-02-q3',
    number: 3,
    promptHtml: `
      <p>What is the <strong>best</strong> classification for the number</p>
      <p>
        $$
        -7
        $$
      </p>
    `,
    strategyHtml: `
      <p>
        Negative numbers are not natural or whole. Think about which set is the smallest one that
        includes all negative whole numbers.
      </p>
    `,
    solutionHtml: `
      <p>The number $-7$ is negative, so it cannot be a natural number or a whole number.</p>
      <p>
        It is a <strong>negative whole number</strong>, which means it is an <strong>integer</strong>.
        All integers are also rational and real, but integer is the most specific set here.
      </p>
      <p>
        So the correct choice is <strong>C. Integer</strong>.
      </p>
    `,
    choices: [
      { id: 'A', textHtml: 'Natural number', isCorrect: false },
      { id: 'B', textHtml: 'Whole number', isCorrect: false },
      { id: 'C', textHtml: 'Integer', isCorrect: true },
      { id: 'D', textHtml: 'Rational number', isCorrect: false },
      { id: 'E', textHtml: 'Real number', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.number-sets', role: 'primary' }],
    tags: ['pre-algebra', 'number-sets']
  },

  {
    id: 'prealg-02-q4',
    number: 4,
    promptHtml: `
      <p>What is the <strong>best</strong> classification for the number</p>
      <p>
        $$
        \\frac{3}{4}
        $$
      </p>
    `,
    strategyHtml: `
      <p>
        Ask: Is $\\frac{3}{4}$ a whole number or integer?
        Remember that rational numbers are fractions of integers with a nonzero denominator.
      </p>
    `,
    solutionHtml: `
      <p>The number $\\frac{3}{4}$ is not a whole number or an integer because it is not a whole value.</p>
      <p>
        It can be written as a ratio of integers:
      </p>
      <p>
        $$
        \\frac{3}{4}
        $$
      </p>
      <p>
        so it is a <strong>rational number</strong>. All rational numbers are also real numbers.
      </p>
      <p>
        The most specific set it belongs to is the set of <strong>rational numbers</strong>.
      </p>
      <p>
        So the correct choice is <strong>D. Rational number</strong>.
      </p>
    `,
    choices: [
      { id: 'A', textHtml: 'Natural number', isCorrect: false },
      { id: 'B', textHtml: 'Whole number', isCorrect: false },
      { id: 'C', textHtml: 'Integer', isCorrect: false },
      { id: 'D', textHtml: 'Rational number', isCorrect: true },
      { id: 'E', textHtml: 'Real number', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.number-sets', role: 'primary' }],
    tags: ['pre-algebra', 'number-sets']
  },

  {
    id: 'prealg-02-q5',
    number: 5,
    promptHtml: `
      <p>What is the <strong>best</strong> classification for the number</p>
      <p>
        $$
        -2.5
        $$
      </p>
    `,
    strategyHtml: `
      <p>
        Check whether $-2.5$ can be written as a fraction of integers. If it can, it is rational. Then
        ask which set is the smallest one that includes it.
      </p>
    `,
    solutionHtml: `
      <p>The number $-2.5$ has a decimal part, so it is not natural, whole, or an integer.</p>
      <p>
        We can rewrite it as a fraction of integers:
      </p>
      <p>
        $$
        -2.5 = -\\frac{5}{2}
        $$
      </p>
      <p>
        This is a ratio of integers, so $-2.5$ is a <strong>rational number</strong> (and also a real number).
      </p>
      <p>
        The most specific set it belongs to is the set of <strong>rational numbers</strong>.
      </p>
      <p>
        So the correct choice is <strong>D. Rational number</strong>.
      </p>
    `,
    choices: [
      { id: 'A', textHtml: 'Natural number', isCorrect: false },
      { id: 'B', textHtml: 'Whole number', isCorrect: false },
      { id: 'C', textHtml: 'Integer', isCorrect: false },
      { id: 'D', textHtml: 'Rational number', isCorrect: true },
      { id: 'E', textHtml: 'Real number', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.number-sets', role: 'primary' }],
    tags: ['pre-algebra', 'number-sets']
  },

  {
    id: 'prealg-02-q6',
    number: 6,
    promptHtml: `
      <p>Which of the following numbers is <strong>not</strong> an integer?</p>
    `,
    strategyHtml: `
      <p>
        Integers are all the whole numbers and their negatives: $\\dots,-3,-2,-1,0,1,2,3,\\dots$
        Look for the number that has a fractional or decimal part.
      </p>
    `,
    solutionHtml: `
      <p>
        Integers are all the whole numbers and their negatives:
      </p>
      <p>
        $$
        \\dots,-3,-2,-1,0,1,2,3,\\dots
        $$
      </p>
      <p>
        Among the choices, $3$ $-4$ and $0$ are all integers. The number $2.7$ has a decimal part,
        so it is <strong>not</strong> an integer.
      </p>
      <p>
        So the correct choice is <strong>D. 2.7</strong>.
      </p>
    `,
    choices: [
      { id: 'A', textHtml: '$3$', isCorrect: false },
      { id: 'B', textHtml: '$-4$', isCorrect: false },
      { id: 'C', textHtml: '$0$', isCorrect: false },
      { id: 'D', textHtml: '$2.7$', isCorrect: true }
    ],
    skills: [{ skillId: 'math.skill.number-sets', role: 'primary' }],
    tags: ['pre-algebra', 'number-sets']
  },

  {
    id: 'prealg-02-q7',
    number: 7,
    promptHtml: `
      <p>
        Which number is a <strong>natural number</strong> that is also <strong>even</strong>?
      </p>
    `,
    strategyHtml: `
      <p>
        Natural numbers are the counting numbers $1,2,3,\\dots$
        Even numbers are divisible by $2$ with no remainder. Look for a positive counting number that is even.
      </p>
    `,
    solutionHtml: `
      <p>
        Natural numbers are the counting numbers $1,2,3,\\dots$ and an even number is divisible by $2$
      </p>
      <p>Check each option:</p>
      <ul>
        <li>$0$ is even, but it is not usually counted as a natural number.</li>
        <li>$-6$ is even, but it is negative, so it is not natural.</li>
        <li>$7$ is natural, but it is odd.</li>
        <li>$14$ is a positive counting number and divisible by $2$ so it is even and natural.</li>
      </ul>
      <p>
        So the correct choice is <strong>D. 14</strong>.
      </p>
    `,
    choices: [
      { id: 'A', textHtml: '$0$', isCorrect: false },
      { id: 'B', textHtml: '$-6$', isCorrect: false },
      { id: 'C', textHtml: '$7$', isCorrect: false },
      { id: 'D', textHtml: '$14$', isCorrect: true }
    ],
    skills: [{ skillId: 'math.skill.number-sets', role: 'primary' }],
    tags: ['pre-algebra', 'number-sets']
  },

  {
    id: 'prealg-02-q8',
    number: 8,
    promptHtml: `
      <p>
        A teacher counts the number of students present in class.<br />
        The number of students is best classified as which kind of number?
      </p>
    `,
    strategyHtml: `
      <p>
        Think about how we count people: $1$ student, $2$ students, etc.
        We never have $2.5$ students. Which set describes positive counting quantities?
      </p>
    `,
    solutionHtml: `
      <p>
        The number of students present must be a positive whole number: $1,2,3,\\dots$
      </p>
      <p>
        These are <strong>natural numbers</strong>. Natural numbers are also whole, integer, rational,
        and real, but natural number is the most specific classification here.
      </p>
      <p>
        So the correct choice is <strong>A. Natural number</strong>.
      </p>
    `,
    choices: [
      { id: 'A', textHtml: 'Natural number', isCorrect: true },
      { id: 'B', textHtml: 'Whole number', isCorrect: false },
      { id: 'C', textHtml: 'Integer', isCorrect: false },
      { id: 'D', textHtml: 'Rational number', isCorrect: false },
      { id: 'E', textHtml: 'Real number', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.number-sets', role: 'primary' }],
    tags: ['pre-algebra', 'number-sets', 'real-world']
  },

  {
    id: 'prealg-02-q9',
    number: 9,
    promptHtml: `
      <p>
        The amount of money in a bank account can be written with dollars and cents and may be positive or negative
        (for example, an overdraft).<br />
        Which is the <strong>best</strong> classification for this quantity?
      </p>
    `,
    strategyHtml: `
      <p>
        Bank balances can include decimals (like &dollar;45.75) and can also be negative.
        Think about which set includes fractions and decimals made from integers.
      </p>
    `,
    solutionHtml: `
      <p>
        A bank balance can be positive or negative and may include cents (decimals),
        such as &dollar;45.75.
      </p>
      <p>
        Any exact decimal with a finite number of decimal places can be written as a fraction of integers,
        so it is a <strong>rational number</strong>. All rational numbers are also real.
      </p>
      <p>
        The best classification for a bank balance is therefore <strong>rational number</strong>.
      </p>
      <p>
        So the correct choice is <strong>C. Rational number</strong>.
      </p>
    `,
    choices: [
      { id: 'A', textHtml: 'Natural number', isCorrect: false },
      { id: 'B', textHtml: 'Integer', isCorrect: false },
      { id: 'C', textHtml: 'Rational number', isCorrect: true },
      { id: 'D', textHtml: 'Real number', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.number-sets', role: 'primary' }],
    tags: ['pre-algebra', 'number-sets', 'money']
  },

  {
    id: 'prealg-02-q10',
    number: 10,
    promptHtml: `
      <p>Which of the following numbers is <strong>irrational</strong>?</p>
    `,
    strategyHtml: `
      <p>
        Rational numbers can be written as a fraction of integers with a nonzero denominator.
        Look for the number that <strong>cannot</strong> be written as a fraction of integers.
      </p>
    `,
    solutionHtml: `
      <p>Check each choice:</p>
      <ul>
        <li>
          $\\frac{4}{9}$ is a fraction of integers, so it is rational.
        </li>
        <li>
          $-3$ can be written as $\\frac{-3}{1}$ so it is rational.
        </li>
        <li>
          $0.75$ can be written as $\\frac{75}{100} = \\frac{3}{4}$ so it is rational.
        </li>
        <li>
          $\\sqrt{2}$ cannot be written as a fraction of integers; it is a classic example of an
          <strong>irrational</strong> number.
        </li>
      </ul>
      <p>
        So the only irrational number in the list is $\\sqrt{2}$
      </p>
      <p>
        The correct choice is <strong>A. $\\sqrt{2}$</strong>.
      </p>
    `,
    choices: [
      { id: 'A', textHtml: '$\\sqrt{2}$', isCorrect: true },
      { id: 'B', textHtml: '$\\frac{4}{9}$', isCorrect: false },
      { id: 'C', textHtml: '$-3$', isCorrect: false },
      { id: 'D', textHtml: '$0.75$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.number-sets', role: 'primary' }],
    tags: ['pre-algebra', 'number-sets']
  }
]
