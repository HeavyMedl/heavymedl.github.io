import type { MathProblemData } from '@/types/math.types'

export const problems: MathProblemData[] = [
  {
    id: 'prealg-03-q1',
    number: 1,
    promptHtml: `
      <p>Which number is divisible by $3$?</p>
    `,
    strategyHtml: `
      <p>
        Use the divisibility rule for $3$ add the digits of the number. If the sum of the digits is
        divisible by $3$ then the whole number is divisible by $3$
      </p>
    `,
    solutionHtml: `
      <p>Use the divisibility rule for $3$ add the digits and see if the sum is divisible by $3$</p>
      <ul>
        <li>$121: 1 + 2 + 1 = 4$ (not divisible by $3$)</li>
        <li>$135: 1 + 3 + 5 = 9$ (divisible by $3$)</li>
        <li>$142: 1 + 4 + 2 = 7$ (not divisible by $3$)</li>
        <li>$208: 2 + 0 + 8 = 10$ (not divisible by $3$)</li>
      </ul>
      <p>Only $135$ has a digit sum that is divisible by $3$</p>
      <p>So the correct choice is <strong>B. 135</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$121$', isCorrect: false },
      { id: 'B', textHtml: '$135$', isCorrect: true },
      { id: 'C', textHtml: '$142$', isCorrect: false },
      { id: 'D', textHtml: '$208$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.factors-multiples', role: 'primary' }],
    tags: ['pre-algebra', 'factors-multiples', 'divisibility']
  },

  {
    id: 'prealg-03-q2',
    number: 2,
    promptHtml: `
      <p>What is the greatest common factor (GCF) of $16$ and $36$?</p>
    `,
    strategyHtml: `
      <p>
        Either list the factors of each number and find the largest one they share, or use prime
        factorization and take the common prime factors with the smallest exponents.
      </p>
    `,
    solutionHtml: `
      <p>Use prime factorization to find the GCF.</p>
      <p>
        $$
        16 = 2^4,\\quad 36 = 2^2 \\cdot 3^2
        $$
      </p>
      <p>The common prime factor is $2$ and the smallest power of $2$ that appears in both is $2^2 = 4$</p>
      <p>So the GCF of $16$ and $36$ is $4$ and the correct choice is <strong>B. 4</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$2$', isCorrect: false },
      { id: 'B', textHtml: '$4$', isCorrect: true },
      { id: 'C', textHtml: '$8$', isCorrect: false },
      { id: 'D', textHtml: '$16$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.factors-multiples', role: 'primary' }],
    tags: ['pre-algebra', 'factors-multiples', 'gcf']
  },

  {
    id: 'prealg-03-q3',
    number: 3,
    promptHtml: `
      <p>What is the least common multiple (LCM) of $6$ and $15$?</p>
    `,
    strategyHtml: `
      <p>
        One way is to list multiples of each number until you find the smallest one they share. Another
        way is to use prime factorization and take all primes with the largest exponents from either
        number.
      </p>
    `,
    solutionHtml: `
      <p>Use prime factorization to find the LCM.</p>
      <p>
        $$
        6 = 2 \\cdot 3,\\quad 15 = 3 \\cdot 5
        $$
      </p>
      <p>Include each prime factor with its largest exponent:</p>
      <p>
        $$
        \\text{LCM} = 2 \\cdot 3 \\cdot 5 = 30
        $$
      </p>
      <p>So the correct choice is <strong>A. 30</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$30$', isCorrect: true },
      { id: 'B', textHtml: '$45$', isCorrect: false },
      { id: 'C', textHtml: '$60$', isCorrect: false },
      { id: 'D', textHtml: '$90$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.factors-multiples', role: 'primary' }],
    tags: ['pre-algebra', 'factors-multiples', 'lcm']
  },

  {
    id: 'prealg-03-q4',
    number: 4,
    promptHtml: `
      <p>How is the number $21$ classified?</p>
    `,
    strategyHtml: `
      <p>
        A prime number has exactly two positive factors: $1$ and itself. A composite number has more
        than two positive factors. Check whether $21$ has any factors besides $1$ and $21$
      </p>
    `,
    solutionHtml: `
      <p>A prime number has exactly two positive factors: $1$ and itself.</p>
      <p>Check whether $21$ has any factors besides $1$ and $21$</p>
      <p>
        $$
        21 = 3 \\cdot 7
        $$
      </p>
      <p>So $21$ has factors $1, 3, 7,$ and $21$ which means it has more than two positive factors and is composite.</p>
      <p>The correct choice is <strong>B. Composite</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: 'Prime', isCorrect: false },
      { id: 'B', textHtml: 'Composite', isCorrect: true },
      { id: 'C', textHtml: 'Neither prime nor composite', isCorrect: false },
      { id: 'D', textHtml: 'Irrational', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.factors-multiples', role: 'primary' }],
    tags: ['pre-algebra', 'factors-multiples', 'prime-composite']
  },

  {
    id: 'prealg-03-q5',
    number: 5,
    promptHtml: `
      <p>What is the prime factorization of $84$?</p>
    `,
    strategyHtml: `
      <p>
        Break $84$ down by dividing by small prime numbers ($2, 3, 5, 7,\\dots$) until all factors are
        prime.
      </p>
    `,
    solutionHtml: `
      <p>Use division by small primes to factor $84$</p>
      <p>
        $$
        84 \\div 2 = 42,\\quad 42 \\div 2 = 21,\\quad 21 \\div 3 = 7
        $$
      </p>
      <p>The remaining factor $7$ is prime, so</p>
      <p>
        $$
        84 = 2 \\cdot 2 \\cdot 3 \\cdot 7
        $$
      </p>
      <p>So the correct choice is <strong>A. 2 · 2 · 3 · 7</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$2$ · $2$ · $3$ · $7$', isCorrect: true },
      { id: 'B', textHtml: '$4$ · $21$', isCorrect: false },
      { id: 'C', textHtml: '$2$^$3$ · $21$', isCorrect: false },
      { id: 'D', textHtml: '$2$ · $42$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.factors-multiples', role: 'primary' }],
    tags: ['pre-algebra', 'factors-multiples', 'prime-factorization']
  },

  {
    id: 'prealg-03-q6',
    number: 6,
    promptHtml: `
      <p>Which of the following is a multiple of $5$ and also a multiple of $2$?</p>
    `,
    strategyHtml: `
      <p>
        A number that is a multiple of both $5$ and $2$ must be divisible by $10$ Look for a number
        that ends in $0$
      </p>
    `,
    solutionHtml: `
      <p>A number that is a multiple of both $5$ and $2$ is divisible by $10$ so it ends in $0$</p>
      <ul>
        <li>$18$ ends in $8$ (not a multiple of $5$).</li>
        <li>$25$ ends in $5$ (multiple of $5$ but not $2$).</li>
        <li>$32$ ends in $2$ (multiple of $2$ but not $5$).</li>
        <li>$40$ ends in $0$ (multiple of both $5$ and $2$).</li>
      </ul>
      <p>So $40$ is a multiple of both $5$ and $2$</p>
      <p>The correct choice is <strong>D. 40</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$18$', isCorrect: false },
      { id: 'B', textHtml: '$25$', isCorrect: false },
      { id: 'C', textHtml: '$32$', isCorrect: false },
      { id: 'D', textHtml: '$40$', isCorrect: true }
    ],
    skills: [{ skillId: 'math.skill.factors-multiples', role: 'primary' }],
    tags: ['pre-algebra', 'factors-multiples', 'multiples', 'divisibility']
  },

  {
    id: 'prealg-03-q7',
    number: 7,
    promptHtml: `
      <p>What is the least common multiple (LCM) of $8$ and $12$?</p>
    `,
    strategyHtml: `
      <p>
        List multiples of $8$ and $12$ until you find the smallest common one, or use prime
        factorization and take all primes with the largest exponents from either number.
      </p>
    `,
    solutionHtml: `
      <p>Use prime factorization to find the LCM.</p>
      <p>
        $$
        8 = 2^3,\\quad 12 = 2^2 \\cdot 3
        $$
      </p>
      <p>Take each prime with the largest exponent:</p>
      <p>
        $$
        \\text{LCM} = 2^3 \\cdot 3 = 8 \\cdot 3 = 24
        $$
      </p>
      <p>So the correct choice is <strong>C. 24</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$12$', isCorrect: false },
      { id: 'B', textHtml: '$16$', isCorrect: false },
      { id: 'C', textHtml: '$24$', isCorrect: true },
      { id: 'D', textHtml: '$48$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.factors-multiples', role: 'primary' }],
    tags: ['pre-algebra', 'factors-multiples', 'lcm']
  },

  {
    id: 'prealg-03-q8',
    number: 8,
    promptHtml: `
      <p>What is the greatest common factor (GCF) of $18$ $24$ and $30$?</p>
    `,
    strategyHtml: `
      <p>
        You can either list factors of each number or use prime factorization for all three and then
        take the common prime factors with the smallest exponents.
      </p>
    `,
    solutionHtml: `
      <p>
        Use prime factorization for all three numbers and then take the common factors with the smallest exponents.
      </p>
      <p>
        $$
        18 = 2 \\cdot 3^2,\\quad 24 = 2^3 \\cdot 3,\\quad 30 = 2 \\cdot 3 \\cdot 5
        $$
      </p>
      <p>The common primes are $2$ and $3$ each to the first power:</p>
      <p>
        $$
        \\text{GCF} = 2 \\cdot 3 = 6
        $$
      </p>
      <p>So the correct choice is <strong>C. 6</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$2$', isCorrect: false },
      { id: 'B', textHtml: '$3$', isCorrect: false },
      { id: 'C', textHtml: '$6$', isCorrect: true },
      { id: 'D', textHtml: '$12$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.factors-multiples', role: 'primary' }],
    tags: ['pre-algebra', 'factors-multiples', 'gcf']
  },

  {
    id: 'prealg-03-q9',
    number: 9,
    promptHtml: `
      <p>Which of the following numbers is prime?</p>
    `,
    strategyHtml: `
      <p>
        A prime number has exactly two positive factors: $1$ and itself. Try dividing each option by
        small primes like $2, 3, 5,$ and $7$
      </p>
    `,
    solutionHtml: `
      <p>A prime number has exactly two positive factors: $1$ and itself.</p>
      <p>Test each option by dividing by small primes.</p>
      <ul>
        <li>$51: 51 \\div 3 = 17$ so $51$ is composite.</li>
        <li>$37$ not divisible by $2, 3, 5,$ or $7$ so its only positive factors are $1$ and $37$</li>
        <li>$49 = 7 \\cdot 7$ so it is composite.</li>
        <li>$39 = 3 \\cdot 13$ so it is composite.</li>
      </ul>
      <p>Only $37$ is prime.</p>
      <p>The correct choice is <strong>B. 37</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$51$', isCorrect: false },
      { id: 'B', textHtml: '$37$', isCorrect: true },
      { id: 'C', textHtml: '$49$', isCorrect: false },
      { id: 'D', textHtml: '$39$', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.factors-multiples', role: 'primary' }],
    tags: ['pre-algebra', 'factors-multiples', 'prime-composite']
  },

  {
    id: 'prealg-03-q10',
    number: 10,
    promptHtml: `
      <p>
        A bakery packs cookies into boxes of $12$ cookies or boxes of $18$ cookies.<br />
        The baker wants to stack boxes so that each stack has the <strong>same total number of cookies</strong>,
        and each stack has <strong>only one type of box</strong> (all $12$-cookie boxes or all $18$-cookie boxes).<br />
        What is the smallest possible number of cookies in each stack?
      </p>
    `,
    strategyHtml: `
      <p>
        You are looking for the smallest number that is a multiple of both $12$ and $18$ This is the
        least common multiple (LCM) of $12$ and $18$
      </p>
    `,
    solutionHtml: `
      <p>We need the least common multiple of $12$ and $18$</p>
      <p>
        $$
        12 = 2^2 \\cdot 3,\\quad 18 = 2 \\cdot 3^2
        $$
      </p>
      <p>Take each prime with the largest exponent:</p>
      <p>
        $$
        \\text{LCM} = 2^2 \\cdot 3^2 = 4 \\cdot 9 = 36
        $$
      </p>
      <p>The smallest number of cookies in each stack is $36$</p>
      <p>The correct choice is <strong>D. 36</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$18$', isCorrect: false },
      { id: 'B', textHtml: '$24$', isCorrect: false },
      { id: 'C', textHtml: '$30$', isCorrect: false },
      { id: 'D', textHtml: '$36$', isCorrect: true }
    ],
    skills: [{ skillId: 'math.skill.factors-multiples', role: 'primary' }],
    tags: ['pre-algebra', 'factors-multiples', 'lcm', 'word-problem']
  }
]
