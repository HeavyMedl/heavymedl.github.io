import type { MathProblemData } from '@/types/math.types'

export const problems: MathProblemData[] = [
  {
    id: 'prealg-09-q1',
    number: 1,
    promptHtml: `
      <p>Convert $4$ feet to inches.</p>
    `,
    strategyHtml: `
      <p>
        Use the fact that $1$ foot $= 12$ inches. Multiply the number of feet by $12$ to get inches.
      </p>
    `,
    solutionHtml: `
      <p>Since $1$ foot $= 12$ inches,</p>
      <p>
        $$
        4 \\text{ ft} = 4 \\times 12 \\text{ in} = 48 \\text{ in}.
        $$
      </p>
      <p>So $4$ feet is $48$ inches.</p>
      <p>The correct choice is <strong>C. $48$ inches</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$16$ inches', isCorrect: false },
      { id: 'B', textHtml: '$36$ inches', isCorrect: false },
      { id: 'C', textHtml: '$48$ inches', isCorrect: true },
      { id: 'D', textHtml: '$52$ inches', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.measure.convert', role: 'primary' }],
    tags: ['pre-algebra', 'measurement', 'unit-conversion', 'length']
  },

  {
    id: 'prealg-09-q2',
    number: 2,
    promptHtml: `
      <p>Convert $72$ inches to feet.</p>
    `,
    strategyHtml: `
      <p>
        Again use $1$ foot $= 12$ inches. Divide the number of inches by $12$ to get feet.
      </p>
    `,
    solutionHtml: `
      <p>Use the relationship $1$ foot $= 12$ inches.</p>
      <p>
        $$
        72 \\text{ in} \\div 12 = 6 \\text{ ft}.
        $$
      </p>
      <p>So $72$ inches is $6$ feet.</p>
      <p>The correct choice is <strong>B. $6$ feet</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$5$ feet', isCorrect: false },
      { id: 'B', textHtml: '$6$ feet', isCorrect: true },
      { id: 'C', textHtml: '$7$ feet', isCorrect: false },
      { id: 'D', textHtml: '$8$ feet', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.measure.convert', role: 'primary' }],
    tags: ['pre-algebra', 'measurement', 'unit-conversion', 'length']
  },

  {
    id: 'prealg-09-q3',
    number: 3,
    promptHtml: `
      <p>Convert $3$ yards to feet.</p>
    `,
    strategyHtml: `
      <p>
        Use $1$ yard $= 3$ feet. Multiply the number of yards by $3$ to get feet.
      </p>
    `,
    solutionHtml: `
      <p>Since $1$ yard $= 3$ feet,</p>
      <p>
        $$
        3 \\text{ yd} = 3 \\times 3 \\text{ ft} = 9 \\text{ ft}.
        $$
      </p>
      <p>So $3$ yards is $9$ feet.</p>
      <p>The correct choice is <strong>A. $9$ feet</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$9$ feet', isCorrect: true },
      { id: 'B', textHtml: '$12$ feet', isCorrect: false },
      { id: 'C', textHtml: '$6$ feet', isCorrect: false },
      { id: 'D', textHtml: '$15$ feet', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.measure.convert', role: 'primary' }],
    tags: ['pre-algebra', 'measurement', 'unit-conversion', 'length']
  },

  {
    id: 'prealg-09-q4',
    number: 4,
    promptHtml: `
      <p>Convert $2.5$ hours to minutes.</p>
    `,
    strategyHtml: `
      <p>
        There are $60$ minutes in $1$ hour. Multiply the number of hours by $60$ to get minutes.
      </p>
    `,
    solutionHtml: `
      <p>Use $1$ hour $= 60$ minutes.</p>
      <p>
        $$
        2.5 \\text{ h} = 2.5 \\times 60 \\text{ min}.
        $$
      </p>
      <p>Compute $2.5 \\times 60$:</p>
      <p>
        $$
        2.5 \\times 60 = 150.
        $$
      </p>
      <p>So $2.5$ hours is $150$ minutes.</p>
      <p>The correct choice is <strong>D. $150$ minutes</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$90$ minutes', isCorrect: false },
      { id: 'B', textHtml: '$100$ minutes', isCorrect: false },
      { id: 'C', textHtml: '$120$ minutes', isCorrect: false },
      { id: 'D', textHtml: '$150$ minutes', isCorrect: true }
    ],
    skills: [
      { skillId: 'math.skill.measure.convert', role: 'primary' },
      { skillId: 'math.skill.decimal.ops', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'measurement', 'unit-conversion', 'time']
  },

  {
    id: 'prealg-09-q5',
    number: 5,
    promptHtml: `
      <p>
        Convert $135$ minutes to hours and minutes.
      </p>
    `,
    strategyHtml: `
      <p>
        There are $60$ minutes in an hour. Divide $135$ by $60$ to find how many full hours fit, and
        use the remainder as minutes.
      </p>
    `,
    solutionHtml: `
      <p>Divide $135$ by $60$:</p>
      <p>
        $$
        135 \\div 60 = 2 \\text{ remainder } 15.
        $$
      </p>
      <p>So $135$ minutes is $2$ full hours and $15$ extra minutes.</p>
      <p>Therefore, $135$ minutes $= 2$ hours $15$ minutes.</p>
      <p>The correct choice is <strong>B. $2$ hours $15$ minutes</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$1$ hour $35$ minutes', isCorrect: false },
      { id: 'B', textHtml: '$2$ hours $15$ minutes', isCorrect: true },
      { id: 'C', textHtml: '$2$ hours $30$ minutes', isCorrect: false },
      { id: 'D', textHtml: '$3$ hours $15$ minutes', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.measure.convert', role: 'primary' },
      { skillId: 'math.skill.measure.time-arith', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'measurement', 'unit-conversion', 'time']
  },

  {
    id: 'prealg-09-q6',
    number: 6,
    promptHtml: `
      <p>
        Add the times: $1$ hour $35$ minutes $+$ $2$ hours $50$ minutes.
      </p>
    `,
    strategyHtml: `
      <p>
        Add hours to hours and minutes to minutes. If the minutes add to $60$ or more, convert
        $60$ minutes to $1$ hour and adjust.
      </p>
    `,
    solutionHtml: `
      <p>Add the hours and minutes separately:</p>
      <ul>
        <li>Hours: $1 + 2 = 3$</li>
        <li>Minutes: $35 + 50 = 85$</li>
      </ul>
      <p>Since $85$ minutes is more than $60$ minutes, convert:</p>
      <p>
        $$
        85 \\text{ min} = 60 \\text{ min} + 25 \\text{ min} = 1 \\text{ hour } 25 \\text{ minutes}.
        $$
      </p>
      <p>Add the extra hour to the hours total:</p>
      <p>
        $$
        3 \\text{ hours} + 1 \\text{ hour} = 4 \\text{ hours}.
        $$
      </p>
      <p>So the total time is $4$ hours $25$ minutes.</p>
      <p>The correct choice is <strong>C. $4$ hours $25$ minutes</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$3$ hours $85$ minutes', isCorrect: false },
      { id: 'B', textHtml: '$3$ hours $25$ minutes', isCorrect: false },
      { id: 'C', textHtml: '$4$ hours $25$ minutes', isCorrect: true },
      { id: 'D', textHtml: '$4$ hours $15$ minutes', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.measure.time-arith', role: 'primary' }],
    tags: ['pre-algebra', 'measurement', 'time', 'addition']
  },

  {
    id: 'prealg-09-q7',
    number: 7,
    promptHtml: `
      <p>
        Subtract the times: $2$ hours $5$ minutes $-$ $47$ minutes.
      </p>
    `,
    strategyHtml: `
      <p>
        You can borrow $1$ hour as $60$ minutes. Rewrite $2$ hours $5$ minutes as $1$ hour $65$
        minutes, then subtract.
      </p>
    `,
    solutionHtml: `
      <p>Rewrite $2$ hours $5$ minutes by borrowing $1$ hour as $60$ minutes:</p>
      <p>
        $$
        2 \\text{ h } 5 \\text{ min}
        = 1 \\text{ h } (60 + 5) \\text{ min}
        = 1 \\text{ h } 65 \\text{ min}.
        $$
      </p>
      <p>Now subtract $47$ minutes:</p>
      <p>
        $$
        65 \\text{ min} - 47 \\text{ min} = 18 \\text{ min}.
        $$
      </p>
      <p>The hours stay at $1$.</p>
      <p>So the result is $1$ hour $18$ minutes.</p>
      <p>The correct choice is <strong>A. $1$ hour $18$ minutes</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$1$ hour $18$ minutes', isCorrect: true },
      { id: 'B', textHtml: '$1$ hour $52$ minutes', isCorrect: false },
      { id: 'C', textHtml: '$2$ hours $18$ minutes', isCorrect: false },
      { id: 'D', textHtml: '$0$ hours $58$ minutes', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.measure.time-arith', role: 'primary' }],
    tags: ['pre-algebra', 'measurement', 'time', 'subtraction']
  },

  {
    id: 'prealg-09-q8',
    number: 8,
    promptHtml: `
      <p>
        A runner completes a $10$-kilometer race. $1$ kilometer is approximately $0.62$ miles.  
        About how many miles did the runner travel?
      </p>
    `,
    strategyHtml: `
      <p>
        Multiply the number of kilometers by $0.62$ miles per kilometer to convert to miles.
      </p>
    `,
    solutionHtml: `
      <p>Use the conversion $1$ kilometer $\\approx 0.62$ miles:</p>
      <p>
        $$
        10 \\text{ km} \\times 0.62 \\dfrac{\\text{miles}}{\\text{km}} = 6.2 \\text{ miles}.
        $$
      </p>
      <p>So the runner traveled about $6.2$ miles.</p>
      <p>The correct choice is <strong>D. $6.2$ miles</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$3.1$ miles', isCorrect: false },
      { id: 'B', textHtml: '$5$ miles', isCorrect: false },
      { id: 'C', textHtml: '$10$ miles', isCorrect: false },
      { id: 'D', textHtml: '$6.2$ miles', isCorrect: true }
    ],
    skills: [
      { skillId: 'math.skill.measure.convert', role: 'primary' },
      { skillId: 'math.skill.measure.word', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'measurement', 'unit-conversion', 'distance', 'word-problem']
  },

  {
    id: 'prealg-09-q9',
    number: 9,
    promptHtml: `
      <p>
        A rectangular garden is $12$ feet long and $8$ feet wide.  
        What is the perimeter of the garden?
      </p>
    `,
    strategyHtml: `
      <p>
        The perimeter of a rectangle is $2 \\times (\\text{length} + \\text{width})$.
        Add the length and width, then multiply by $2$.
      </p>
    `,
    solutionHtml: `
      <p>Use the perimeter formula for a rectangle:</p>
      <p>
        $$
        P = 2(\\text{length} + \\text{width}).
        $$
      </p>
      <p>Substitute length $= 12$ ft and width $= 8$ ft:</p>
      <p>
        $$
        P = 2(12 + 8) = 2 \\times 20 = 40 \\text{ ft}.
        $$
      </p>
      <p>So the perimeter is $40$ feet.</p>
      <p>The correct choice is <strong>C. $40$ feet</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$20$ feet', isCorrect: false },
      { id: 'B', textHtml: '$32$ feet', isCorrect: false },
      { id: 'C', textHtml: '$40$ feet', isCorrect: true },
      { id: 'D', textHtml: '$96$ feet', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.measure.word', role: 'primary' }],
    tags: ['pre-algebra', 'measurement', 'perimeter', 'word-problem']
  },

  {
    id: 'prealg-09-q10',
    number: 10,
    promptHtml: `
      <p>
        Kurt watches two episodes of a show.  
        The first episode is $42$ minutes long and the second is $38$ minutes long.  
        How long does he spend watching in total, in hours and minutes?
      </p>
    `,
    strategyHtml: `
      <p>
        Add the two times in minutes, then convert the total minutes to hours and minutes using
        $60$ minutes $= 1$ hour.
      </p>
    `,
    solutionHtml: `
      <p>Add the lengths of the two episodes:</p>
      <p>
        $$
        42 \\text{ min} + 38 \\text{ min} = 80 \\text{ min}.
        $$
      </p>
      <p>Convert $80$ minutes to hours and minutes:</p>
      <p>
        $$
        80 \\div 60 = 1 \\text{ hour } 20 \\text{ minutes}.
        $$
      </p>
      <p>So Kurt spends $1$ hour $20$ minutes watching in total.</p>
      <p>The correct choice is <strong>B. $1$ hour $20$ minutes</strong>.</p>
    `,
    choices: [
      { id: 'A', textHtml: '$1$ hour $10$ minutes', isCorrect: false },
      { id: 'B', textHtml: '$1$ hour $20$ minutes', isCorrect: true },
      { id: 'C', textHtml: '$80$ hours', isCorrect: false },
      { id: 'D', textHtml: '$2$ hours $0$ minutes', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.measure.time-arith', role: 'primary' },
      { skillId: 'math.skill.measure.word', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'measurement', 'time', 'word-problem']
  }
]
