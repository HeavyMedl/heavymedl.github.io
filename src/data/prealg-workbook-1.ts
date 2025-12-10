import type { MathProblemData } from '@/types/math.types'

export const problems: MathProblemData[] = [
  {
    id: 'prealg-01-q1',
    number: 1,
    promptHtml: `
      <p>Evaluate:</p>
      <p>
        $$
        -7 - 12
        $$
      </p>
    `,
    hintHtml: `
      <p>Rewrite subtraction as “adding the opposite”:</p>
      <p>$$ -7 - 12 = -7 + (-12). $$</p>
      <p>
        Then add the two negative numbers by adding their absolute values and keeping the negative sign.
      </p>
    `,
    solutionHtml: `
      <p>Rewrite the subtraction as addition of the opposite:</p>
      <p>
        $$
        -7 - 12 = -7 + (-12).
        $$
      </p>
      <p>Add the integers:</p>
      <p>
        $$
        -7 + (-12) = -19.
        $$
      </p>
      <p>So the correct choice is <strong>D.</strong> $-19$.</p>
    `,
    choices: [
      { id: 'A', textHtml: '-5', isCorrect: false },
      { id: 'B', textHtml: '5', isCorrect: false },
      { id: 'C', textHtml: '19', isCorrect: false },
      { id: 'D', textHtml: '-19', isCorrect: true }
    ],
    skills: [{ skillId: 'math.skill.int.add-sub', role: 'primary' }],
    tags: ['pre-algebra', 'integers']
  },

  {
    id: 'prealg-01-q2',
    number: 2,
    promptHtml: `
      <p>Evaluate:</p>
      <p>
        $$
        15 + (-9)
        $$
      </p>
    `,
    hintHtml: `
      <p>
        You’re adding a positive and a negative number. Compare their absolute values, subtract the
        smaller from the larger, and keep the sign of the number with the larger absolute value.
      </p>
    `,
    solutionHtml: `
      <p>We are adding integers with different signs. Subtract the absolute values and keep the sign of the number with the larger absolute value.</p>
      <p>
        $$
        15 + (-9) = 15 - 9 = 6.
        $$
      </p>
      <p>Since $15$ has the larger absolute value and is positive, the result is positive. So the correct choice is <strong>D.</strong> $6$.</p>
    `,
    choices: [
      { id: 'A', textHtml: '24', isCorrect: false },
      { id: 'B', textHtml: '-6', isCorrect: false },
      { id: 'C', textHtml: '-24', isCorrect: false },
      { id: 'D', textHtml: '6', isCorrect: true }
    ],
    skills: [{ skillId: 'math.skill.int.add-sub', role: 'primary' }],
    tags: ['pre-algebra', 'integers']
  },

  {
    id: 'prealg-01-q3',
    number: 3,
    promptHtml: `
      <p>Evaluate:</p>
      <p>
        $$
        -4 \\cdot 6
        $$
      </p>
    `,
    hintHtml: `
      <p>Use the sign rule for multiplication:</p>
      <ul>
        <li>Negative $\\times$ positive = negative.</li>
      </ul>
      <p>Multiply the absolute values, then apply the correct sign.</p>
    `,
    solutionHtml: `
      <p>Use the sign rule for multiplication: negative times positive is negative.</p>
      <p>Multiply the absolute values, then attach the sign:</p>
      <p>
        $$
        -4 \\cdot 6 = -(4 \\cdot 6) = -24.
        $$
      </p>
      <p>So the correct choice is <strong>B.</strong> $-24$.</p>
    `,
    choices: [
      { id: 'A', textHtml: '24', isCorrect: false },
      { id: 'B', textHtml: '-24', isCorrect: true },
      { id: 'C', textHtml: '-10', isCorrect: false },
      { id: 'D', textHtml: '10', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.int.mul-div', role: 'primary' }],
    tags: ['pre-algebra', 'integers']
  },

  {
    id: 'prealg-01-q4',
    number: 4,
    promptHtml: `
      <p>Evaluate:</p>
      <p>
        $$
        -48 \\div (-6)
        $$
      </p>
    `,
    hintHtml: `
      <p>Use the sign rule for division:</p>
      <ul>
        <li>Negative $\\div$ negative = positive.</li>
      </ul>
      <p>Then divide the absolute values.</p>
    `,
    solutionHtml: `
      <p>Use the sign rule for division: negative divided by negative is positive.</p>
      <p>Divide the absolute values:</p>
      <p>
        $$
        -48 \\div (-6) = 48 \\div 6 = 8.
        $$
      </p>
      <p>So the correct choice is <strong>C.</strong> $8$.</p>
    `,
    choices: [
      { id: 'A', textHtml: '-8', isCorrect: false },
      { id: 'B', textHtml: '-42', isCorrect: false },
      { id: 'C', textHtml: '8', isCorrect: true },
      { id: 'D', textHtml: '42', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.int.mul-div', role: 'primary' }],
    tags: ['pre-algebra', 'integers']
  },

  {
    id: 'prealg-01-q5',
    number: 5,
    promptHtml: `
      <p>Evaluate:</p>
      <p>
        $$
        -2 - (-5) - 3
        $$
      </p>
    `,
    hintHtml: `
      <p>First rewrite subtraction as addition of the opposite, then work left to right:</p>
      <p>$$ -2 - (-5) - 3 = -2 + 5 - 3. $$</p>
    `,
    solutionHtml: `
      <p>First rewrite subtraction as addition of the opposite:</p>
      <p>
        $$
        -2 - (-5) - 3 = -2 + 5 - 3.
        $$
      </p>
      <p>Then simplify from left to right:</p>
      <p>
        $$
        -2 + 5 = 3,\\quad 3 - 3 = 0.
        $$
      </p>
      <p>So $-2 - (-5) - 3 = 0$ and the correct choice is <strong>A.</strong> $0$.</p>
    `,
    choices: [
      { id: 'A', textHtml: '0', isCorrect: true },
      { id: 'B', textHtml: '-10', isCorrect: false },
      { id: 'C', textHtml: '10', isCorrect: false },
      { id: 'D', textHtml: '4', isCorrect: false }
    ],
    skills: [{ skillId: 'math.skill.int.add-sub', role: 'primary' }],
    tags: ['pre-algebra', 'integers']
  },

  {
    id: 'prealg-01-q6',
    number: 6,
    promptHtml: `
      <p>Evaluate:</p>
      <p>
        $$
        |-3| + |-7|
        $$
      </p>
    `,
    hintHtml: `
      <p>
        Use the definition of absolute value: it’s the distance from $0$, always nonnegative. Replace
        each absolute value with a positive number, then add.
      </p>
    `,
    solutionHtml: `
      <p>Use the definition of absolute value: it is the distance from $0$, so it is always nonnegative.</p>
      <p>
        $$
        |-3| = 3,\\quad |-7| = 7.
        $$
      </p>
      <p>Add the results:</p>
      <p>
        $$
        3 + 7 = 10.
        $$
      </p>
      <p>So the correct choice is <strong>B.</strong> $10$.</p>
    `,
    choices: [
      { id: 'A', textHtml: '4', isCorrect: false },
      { id: 'B', textHtml: '10', isCorrect: true },
      { id: 'C', textHtml: '-10', isCorrect: false },
      { id: 'D', textHtml: '14', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.abs.value', role: 'primary' },
      { skillId: 'math.skill.int.add-sub', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'integers', 'absolute-value']
  },

  {
    id: 'prealg-01-q7',
    number: 7,
    promptHtml: `
      <p>Evaluate:</p>
      <p>
        $$
        -\\bigl|7 - 3 - 2\\bigr| - |-5|
        $$
      </p>
    `,
    hintHtml: `
      <p>
        First simplify inside each absolute value, then take the absolute value, then apply the outside
        signs. Finally combine the results.
      </p>
    `,
    solutionHtml: `
      <p>Simplify inside each absolute value, then apply the outside signs.</p>
      <p>
        $$
        7 - 3 - 2 = 4 - 2 = 2,\\quad \\bigl|7 - 3 - 2\\bigr| = |2| = 2,\\quad |-5| = 5.
        $$
      </p>
      <p>Now substitute into the original expression:</p>
      <p>
        $$
        -\\bigl|7 - 3 - 2\\bigr| - |-5| = -2 - 5 = -7.
        $$
      </p>
      <p>So the correct choice is <strong>A.</strong> $-7$.</p>
    `,
    choices: [
      { id: 'A', textHtml: '-7', isCorrect: true },
      { id: 'B', textHtml: '7', isCorrect: false },
      { id: 'C', textHtml: '-3', isCorrect: false },
      { id: 'D', textHtml: '3', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.abs.value', role: 'primary' },
      { skillId: 'math.skill.int.add-sub', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'integers', 'absolute-value']
  },

  {
    id: 'prealg-01-q8',
    number: 8,
    promptHtml: `
      <p>Evaluate:</p>
      <p>
        $$
        |-5 - 8|
        $$
      </p>
    `,
    hintHtml: `
      <p>
        First combine the integers inside the absolute value to get a single number, then take its
        absolute value.
      </p>
    `,
    solutionHtml: `
      <p>Combine the integers inside the absolute value, then take the absolute value.</p>
      <p>
        $$
        -5 - 8 = -13,\\quad |-13| = 13.
        $$
      </p>
      <p>So the correct choice is <strong>C.</strong> $13$.</p>
    `,
    choices: [
      { id: 'A', textHtml: '-13', isCorrect: false },
      { id: 'B', textHtml: '3', isCorrect: false },
      { id: 'C', textHtml: '13', isCorrect: true },
      { id: 'D', textHtml: '-3', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.abs.value', role: 'primary' },
      { skillId: 'math.skill.int.add-sub', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'integers', 'absolute-value']
  },

  {
    id: 'prealg-01-q9',
    number: 9,
    promptHtml: `
      <p>
        The temperature at sunrise is $8^\\circ\\text{C}$. By midday, it drops by $15^\\circ\\text{C}$, and by evening it
        rises by $4^\\circ\\text{C}$. What is the temperature in the evening?
      </p>
    `,
    hintHtml: `
      <p>
        Represent each change as adding an integer: a drop is adding a negative number, a rise is adding
        a positive number. Start from $8$ and apply the changes:
      </p>
      <p>
        $$ 8 + (\\text{change}_1) + (\\text{change}_2). $$
      </p>
    `,
    solutionHtml: `
      <p>Interpret each temperature change as adding an integer.</p>
      <p>Start at $8^\\circ\\text{C}$, then subtract $15$ and add $4$:</p>
      <p>
        $$
        8 + (-15) + 4 = 8 - 15 + 4 = -7 + 4 = -3.
        $$
      </p>
      <p>So the evening temperature is $-3^\\circ\\text{C}$. The correct choice is <strong>A.</strong></p>
    `,
    choices: [
      { id: 'A', textHtml: '-3°C', isCorrect: true },
      { id: 'B', textHtml: '3°C', isCorrect: false },
      { id: 'C', textHtml: '11°C', isCorrect: false },
      { id: 'D', textHtml: '-11°C', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.int.word', role: 'primary' },
      { skillId: 'math.skill.int.add-sub', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'integers', 'word-problem']
  },

  {
    id: 'prealg-01-q10',
    number: 10,
    promptHtml: `
      <p>A bank account starts with a balance of $120$. A withdrawal of $75$ is made. Then a deposit of $40$ is made. Finally, another withdrawal of $25$ is made.</p>
      <p>What is the final balance?</p>
    `,
    hintHtml: `
      <p>
        Write each transaction as an integer (withdrawal = negative, deposit = positive) and add them
        with the starting balance:
      </p>
      <p>
        $$ 120 + (\\text{change}_1) + (\\text{change}_2) + (\\text{change}_3). $$
      </p>
    `,
    solutionHtml: `
      <p>Write each transaction as an integer and add them to the starting balance.</p>
      <p>
        $$
        120 - 75 + 40 - 25.
        $$
      </p>
      <p>Now simplify step by step:</p>
      <p>
        $$
        120 - 75 = 45,\\quad 45 + 40 = 85,\\quad 85 - 25 = 60.
        $$
      </p>
      <p>So the final balance is $60$. The correct choice is <strong>C.</strong> $60$.</p>
    `,
    choices: [
      { id: 'A', textHtml: '20', isCorrect: false },
      { id: 'B', textHtml: '40', isCorrect: false },
      { id: 'C', textHtml: '60', isCorrect: true },
      { id: 'D', textHtml: '80', isCorrect: false }
    ],
    skills: [
      { skillId: 'math.skill.int.word', role: 'primary' },
      { skillId: 'math.skill.int.add-sub', role: 'secondary' }
    ],
    tags: ['pre-algebra', 'integers', 'word-problem']
  }
]
