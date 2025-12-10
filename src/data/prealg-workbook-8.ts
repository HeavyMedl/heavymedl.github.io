import type { MathProblemData } from '@/types/math.types'

export const problems: MathProblemData[] = [
  {
    id: 'prealg-08-q1',
    number: 1,
    promptHtml: `
      <p>
        In a class, there are $8$ boys and $12$ girls.  
        What is the ratio of boys to girls <strong>in simplest form</strong>?
      </p>
    `,
    hintHtml: `
      <p>
        Write the ratio as $8:12$, then simplify by dividing both numbers by their greatest common
        factor (GCF).
      </p>
    `,
    solutionHtml: `
      <p>Start with the ratio boys : girls = $8:12$.</p>
      <p>The greatest common factor of $8$ and $12$ is $4$:</p>
      <p>
        $$
        8 \\div 4 = 2, \\quad 12 \\div 4 = 3.
        $$
      </p>
      <p>So the simplified ratio is $2:3$.</p>
      <p>The correct choice is <strong>B. $2:3$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '4:6', isCorrect: false },
      { id: 'B', textHtml: '2:3', isCorrect: true },
      { id: 'C', textHtml: '3:2', isCorrect: false },
      { id: 'D', textHtml: '8:20', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.ratio.basic', role: 'primary' },
      { skillId: 'math.skill.frac.simplify', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'ratios', 'simplifying']
  },

  {
    id: 'prealg-08-q2',
    number: 2,
    promptHtml: `
      <p>
        A pet store has $15$ cats and $10$ dogs.  
        What is the ratio of dogs to total animals <strong>in simplest form</strong>?
      </p>
    `,
    hintHtml: `
      <p>
        First find the total number of animals, then write the ratio dogs : total and simplify.
      </p>
    `,
    solutionHtml: `
      <p>Total animals = $15 + 10 = 25$.</p>
      <p>The ratio of dogs to total animals is $10:25$.</p>
      <p>Simplify by dividing both numbers by $5$:</p>
      <p>
        $$
        10 \\div 5 = 2, \\quad 25 \\div 5 = 5.
        $$
      </p>
      <p>So the simplified ratio is $2:5$.</p>
      <p>The correct choice is <strong>C. $2:5$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '10:25', isCorrect: false },
      { id: 'B', textHtml: '3:5', isCorrect: false },
      { id: 'C', textHtml: '2:5', isCorrect: true },
      { id: 'D', textHtml: '5:2', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.ratio.basic', role: 'primary' }],
    tags: ['pre-algebra', 'ratios']
  },

  {
    id: 'prealg-08-q3',
    number: 3,
    promptHtml: `
      <p>
        A car travels $180$ miles in $3$ hours.  
        What is the car's speed in miles per hour?
      </p>
    `,
    hintHtml: `
      <p>
        A unit rate has “$1$” in the denominator. Divide total miles by total hours to find
        miles per $1$ hour.
      </p>
    `,
    solutionHtml: `
      <p>Speed as a rate is</p>
      <p>
        $$
        \\dfrac{180 \\text{ miles}}{3 \\text{ hours}}.
        $$
      </p>
      <p>Divide numerator and denominator by $3$:</p>
      <p>
        $$
        \\dfrac{180}{3} = 60.
        $$
      </p>
      <p>So the car travels $60$ miles in $1$ hour.</p>
      <p>The speed is $60$ miles per hour.</p>
      <p>The correct choice is <strong>B. $60$ miles per hour</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '30 miles per hour', isCorrect: false },
      { id: 'B', textHtml: '60 miles per hour', isCorrect: true },
      { id: 'C', textHtml: '90 miles per hour', isCorrect: false },
      { id: 'D', textHtml: '120 miles per hour', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.unit-rate', role: 'primary' }],
    tags: ['pre-algebra', 'rates', 'unit-rate']
  },

  {
    id: 'prealg-08-q4',
    number: 4,
    promptHtml: `
      <p>
        A package of $6$ energy bars costs &dollar;$9$.  
        What is the cost per bar?
      </p>
    `,
    hintHtml: `
      <p>
        To find unit price, divide total cost by number of items.
      </p>
    `,
    solutionHtml: `
      <p>Write the rate as dollars per bar:</p>
      <p>
        $$
        \\text{&dollar;}\\dfrac{9}{6 \\text{ bars}}.
        $$
      </p>
      <p>Divide $9$ by $6$:</p>
      <p>
        $$
        9 \\div 6 = 1.5.
        $$
      </p>
      <p>So each bar costs &dollar;$1.50$.</p>
      <p>The correct choice is <strong>C. &dollar;$1.50$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '&dollar;$0.60$', isCorrect: false },
      { id: 'B', textHtml: '&dollar;$1.25$', isCorrect: false },
      { id: 'C', textHtml: '&dollar;$1.50$', isCorrect: true },
      { id: 'D', textHtml: '&dollar;$2.00$', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.unit-rate', role: 'primary' },
      { skillId: 'math.skill.decimal.ops', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'rates', 'unit-price', 'word-problem']
  },

  {
    id: 'prealg-08-q5',
    number: 5,
    promptHtml: `
      <p>Solve the proportion: $\\dfrac{2}{5} = \\dfrac{6}{x}$.</p>
    `,
    hintHtml: `
      <p>
        Use cross multiplication: $2 \\cdot x = 5 \\cdot 6$. Then solve the resulting equation
        for $x$.
      </p>
    `,
    solutionHtml: `
      <p>Use cross multiplication:</p>
      <p>
        $$
        2 \\cdot x = 5 \\cdot 6.
        $$
      </p>
      <p>Compute the right side:</p>
      <p>
        $$
        2x = 30.
        $$
      </p>
      <p>Solve for $x$ by dividing both sides by $2$:</p>
      <p>
        $$
        x = \\dfrac{30}{2} = 15.
        $$
      </p>
      <p>So $x = 15$.</p>
      <p>The correct choice is <strong>D. $15$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '5', isCorrect: false },
      { id: 'B', textHtml: '6', isCorrect: false },
      { id: 'C', textHtml: '10', isCorrect: false },
      { id: 'D', textHtml: '15', isCorrect: true }
    ],
    skills: [{ skillId: 'math.skill.proportion.solve', role: 'primary' }],
    tags: ['pre-algebra', 'proportions', 'equations']
  },

  {
    id: 'prealg-08-q6',
    number: 6,
    promptHtml: `
      <p>
        A map uses a scale of $1$ inch $=$ $50$ miles.  
        If two cities are $3.5$ inches apart on the map, how far apart are they in miles?
      </p>
    `,
    hintHtml: `
      <p>
        Use the scale as a rate: $50$ miles per inch. Multiply $3.5$ inches by $50$ miles per inch.
      </p>
    `,
    solutionHtml: `
      <p>The scale means:</p>
      <p>
        $$
        1 \\text{ inch} = 50 \\text{ miles}.
        $$
      </p>
      <p>For $3.5$ inches:</p>
      <p>
        $$
        3.5 \\times 50 = 175.
        $$
      </p>
      <p>So the cities are $175$ miles apart.</p>
      <p>The correct choice is <strong>B. $175$ miles</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '150 miles', isCorrect: false },
      { id: 'B', textHtml: '175 miles', isCorrect: true },
      { id: 'C', textHtml: '200 miles', isCorrect: false },
      { id: 'D', textHtml: '250 miles', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.rate.word', role: 'primary' },
      { skillId: 'math.skill.unit-rate', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'rates', 'scale', 'word-problem']
  },

  {
    id: 'prealg-08-q7',
    number: 7,
    promptHtml: `
      <p>
        A recipe uses $3$ cups of flour to make $12$ cookies.  
        At the same rate, how many cookies can be made with $5$ cups of flour?
      </p>
    `,
    hintHtml: `
      <p>
        Set up a proportion: $\\dfrac{3 \\text{ cups}}{12 \\text{ cookies}} = \\dfrac{5 \\text{ cups}}{x \\text{ cookies}}$
        and solve for $x$.
      </p>
    `,
    solutionHtml: `
      <p>Set up the proportion:</p>
      <p>
        $$
        \\dfrac{3}{12} = \\dfrac{5}{x}.
        $$
      </p>
      <p>Use cross multiplication:</p>
      <p>
        $$
        3x = 12 \\cdot 5 = 60.
        $$
      </p>
      <p>Solve for $x$:</p>
      <p>
        $$
        x = \\dfrac{60}{3} = 20.
        $$
      </p>
      <p>So $5$ cups of flour can make $20$ cookies.</p>
      <p>The correct choice is <strong>D. $20$ cookies</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '15 cookies', isCorrect: false },
      { id: 'B', textHtml: '18 cookies', isCorrect: false },
      { id: 'C', textHtml: '19 cookies', isCorrect: false },
      { id: 'D', textHtml: '20 cookies', isCorrect: true }
    ],
    skills: [
      { skillId: 'math.skill.rate.word', role: 'primary' },
      { skillId: 'math.skill.proportion.solve', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'proportions', 'word-problem']
  },

  {
    id: 'prealg-08-q8',
    number: 8,
    promptHtml: `
      <p>
        Two different brands of cereal are on sale:
      </p>
      <ul>
        <li>Brand A: $12$ ounces for &dollar;$3.60$</li>
        <li>Brand B: $18$ ounces for &dollar;$4.68$</li>
      </ul>
      <p>
        Which brand is the better buy (lower cost per ounce)?
      </p>
    `,
    hintHtml: `
      <p>
        Find the unit price for each brand by dividing cost by ounces. Compare the cost per ounce.
      </p>
    `,
    solutionHtml: `
      <p>Find the cost per ounce for each brand.</p>
      <p>Brand A:</p>
      <p>
        $$
        \\text{&dollar;}\\dfrac{3.60}{12 \\text{ oz}} = 0.30 \\text{ per ounce}.
        $$
      </p>
      <p>Brand B:</p>
      <p>
        $$
        \\text{&dollar;}\\dfrac{4.68}{18 \\text{ oz}} = 0.26 \\text{ per ounce}
        $$
      </p>
      <p>(since $4.68 \\div 18 = 0.26$).</p>
      <p>Brand B has the lower cost per ounce, so it is the better buy.</p>
      <p>The correct choice is <strong>C. Brand B</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: 'Brand A (more expensive per ounce)', isCorrect: false },
      { id: 'B', textHtml: 'Both are the same price per ounce', isCorrect: false },
      { id: 'C', textHtml: 'Brand B (cheaper per ounce)', isCorrect: true },
      { id: 'D', textHtml: 'Not enough information', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.unit-rate', role: 'primary' },
      { skillId: 'math.skill.rate.word', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'rates', 'unit-price', 'better-buy', 'word-problem']
  },

  {
    id: 'prealg-08-q9',
    number: 9,
    promptHtml: `
      <p>
        The ratio of red marbles to blue marbles in a bag is $4:7$.  
        If there are $28$ blue marbles, how many red marbles are there?
      </p>
    `,
    hintHtml: `
      <p>
        Use the ratio $4:7$ = red : blue.  
        Set up a proportion $\\dfrac{4}{7} = \\dfrac{x}{28}$ and solve for $x$.
      </p>
    `,
    solutionHtml: `
      <p>Set up the proportion using red : blue:</p>
      <p>
        $$
        \\dfrac{4}{7} = \\dfrac{x}{28}.
        $$
      </p>
      <p>Use cross multiplication:</p>
      <p>
        $$
        7x = 4 \\cdot 28 = 112.
        $$
      </p>
      <p>Solve for $x$:</p>
      <p>
        $$
        x = \\dfrac{112}{7} = 16.
        $$
      </p>
      <p>So there are $16$ red marbles.</p>
      <p>The correct choice is <strong>A. $16$</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '16', isCorrect: true },
      { id: 'B', textHtml: '21', isCorrect: false },
      { id: 'C', textHtml: '32', isCorrect: false },
      { id: 'D', textHtml: '49', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.ratio.basic', role: 'primary' },
      { skillId: 'math.skill.proportion.solve', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'ratios', 'proportions', 'word-problem']
  },

  {
    id: 'prealg-08-q10',
    number: 10,
    promptHtml: `
      <p>
        Kurt drives $150$ miles in $2.5$ hours.  
        What is his average speed in miles per hour?
      </p>
    `,
    hintHtml: `
      <p>
        Average speed is total distance divided by total time.  
        Compute $\\dfrac{150}{2.5}$ to find miles per hour.
      </p>
    `,
    solutionHtml: `
      <p>Write the rate as</p>
      <p>
        $$
        \\dfrac{150 \\text{ miles}}{2.5 \\text{ hours}}.
        $$
      </p>
      <p>Compute $150 \\div 2.5$.</p>
      <p>One way is to multiply numerator and denominator by $10$ to clear the decimal:</p>
      <p>
        $$
        \\dfrac{150}{2.5}
        = \\dfrac{150 \\times 10}{2.5 \\times 10}
        = \\dfrac{1500}{25}
        = 60.
        $$
      </p>
      <p>So his average speed is $60$ miles per hour.</p>
      <p>The correct choice is <strong>D. $60$ miles per hour</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '50 miles per hour', isCorrect: false },
      { id: 'B', textHtml: '55 miles per hour', isCorrect: false },
      { id: 'C', textHtml: '75 miles per hour', isCorrect: false },
      { id: 'D', textHtml: '60 miles per hour', isCorrect: true }
    ],
    skills: [
      { skillId: 'math.skill.unit-rate', role: 'primary' },
      { skillId: 'math.skill.rate.word', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'rates', 'unit-rate', 'word-problem']
  }
]
