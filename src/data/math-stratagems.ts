import type { Stratagem } from '@/types/stratagem.types'

export const mathStratagems: Record<string, Stratagem> = {
  // --------------------------------------------------
  // Prime Factorization
  // --------------------------------------------------
  'strat.prime-factorization.basic': {
    id: 'strat.prime-factorization.basic',
    label: 'Prime Factorization',
    description: 'Write a number as a product of prime numbers.',
    skillIds: ['math.skill.factors-multiples', 'math.skill.frac.simplify'],
    tags: ['pre-algebra', 'factors', 'fractions', 'prime-factorization'],
    bodyHtml: `
      <p><strong>Definition:</strong> Prime factorization is writing a number as a product of prime numbers.</p>
      <p><strong>When to use it:</strong> Use prime factorization when finding GCF/LCM or simplifying fractions.</p>
      <p><strong>Procedure (factor tree method):</strong></p>
      <ol>
        <li>Pick any two factors of the number.</li>
        <li>If a factor is not prime, factor it again.</li>
        <li>Repeat until all leaves are prime numbers.</li>
        <li>Write the original number as the product of all prime leaves.</li>
      </ol>
    `,
    examples: [
      {
        id: 'prime-36',
        label: 'Factor 36',
        difficulty: 1,
        promptHtml: `
          <p>Find the prime factorization of $36$.</p>
        `,
        solutionHtml: `
          <p>Start with a factor pair: $36 = 4 \\cdot 9$.</p>
          <p>Factor each composite number:</p>
          <ul>
            <li>$4 = 2 \\cdot 2$</li>
            <li>$9 = 3 \\cdot 3$</li>
          </ul>
          <p>So $36 = 2 \\cdot 2 \\cdot 3 \\cdot 3 = 2^2 3^2$.</p>
        `
      },
      {
        id: 'prime-frac-36-60',
        label: 'Simplify a fraction with prime factors',
        difficulty: 2,
        promptHtml: `
          <p>Simplify $\\dfrac{36}{60}$ using prime factorization.</p>
        `,
        solutionHtml: `
          <p>Prime factor both numbers:</p>
          <ul>
            <li>$36 = 2^2 3^2$</li>
            <li>$60 = 2^2 3 \\cdot 5$</li>
          </ul>
          <p>Cancel common factors:</p>
          <p>
            $$
            \\dfrac{2^2 3^2}{2^2 3 \\cdot 5}
            = \\dfrac{3}{5}
            $$
          </p>
          <p>So $\\dfrac{36}{60} = \\dfrac{3}{5}$.</p>
        `
      }
    ]
  },

  // --------------------------------------------------
  // Common Denominators for Fraction Addition/Subtraction
  // --------------------------------------------------
  'strat.fractions.common-denominator': {
    id: 'strat.fractions.common-denominator',
    label: 'Common Denominator for Fractions',
    description: 'Create a common denominator to add or subtract fractions.',
    skillIds: [
      'math.skill.frac.add-sub-unlike',
      'math.skill.frac.add-sub-mixed',
      'math.skill.frac.compare'
    ],
    tags: ['pre-algebra', 'fractions', 'common-denominator', 'add-sub'],
    bodyHtml: `
      <p><strong>Idea:</strong> To add or subtract fractions, you need a common denominator so you are working with the same-sized pieces.</p>
      <p><strong>When to use it:</strong> Any time you add, subtract, or compare fractions with different denominators.</p>
      <p><strong>Procedure:</strong></p>
      <ol>
        <li>Find a common denominator (often the least common multiple of the denominators).</li>
        <li>Rewrite each fraction with the common denominator.</li>
        <li>Add or subtract the numerators, keep the denominator the same.</li>
        <li>Simplify the result if possible.</li>
      </ol>
    `,
    examples: [
      {
        id: 'cd-2-3-plus-5-6',
        label: 'Add fractions with unlike denominators',
        difficulty: 2,
        promptHtml: `
          <p>Add $\\dfrac{2}{3} + \\dfrac{5}{6}$.</p>
        `,
        solutionHtml: `
          <p>The denominators are $3$ and $6$. A common denominator is $6$.</p>
          <p>Rewrite $\\dfrac{2}{3}$ with denominator $6$:</p>
          <p>
            $$
            \\dfrac{2}{3} = \\dfrac{2 \\cdot 2}{3 \\cdot 2} = \\dfrac{4}{6}
            $$
          </p>
          <p>Now add:</p>
          <p>
            $$
            \\dfrac{4}{6} + \\dfrac{5}{6} = \\dfrac{9}{6}
            $$
          </p>
          <p>Simplify $\\dfrac{9}{6}$ by dividing numerator and denominator by $3$:</p>
          <p>
            $$
            \\dfrac{9}{6} = \\dfrac{3}{2}
            $$
          </p>
          <p>So $\\dfrac{2}{3} + \\dfrac{5}{6} = \\dfrac{3}{2}$.</p>
        `
      },
      {
        id: 'cd-compare-3-4-5-6',
        label: 'Compare fractions with unlike denominators',
        difficulty: 2,
        promptHtml: `
          <p>Which is larger, $\\dfrac{3}{4}$ or $\\dfrac{5}{6}$?</p>
        `,
        solutionHtml: `
          <p>Use a common denominator to compare:</p>
          <p>The denominators are $4$ and $6$. A common denominator is $12$.</p>
          <p>
            $$
            \\dfrac{3}{4} = \\dfrac{3 \\cdot 3}{4 \\cdot 3} = \\dfrac{9}{12}
            $$
          </p>
          <p>
            $$
            \\dfrac{5}{6} = \\dfrac{5 \\cdot 2}{6 \\cdot 2} = \\dfrac{10}{12}
            $$
          </p>
          <p>Now compare $\\dfrac{9}{12}$ and $\\dfrac{10}{12}$. Since $10 > 9$,</p>
          <p>$\\dfrac{5}{6} > \\dfrac{3}{4}$.</p>
        `
      }
    ]
  },

  // --------------------------------------------------
  // Cross-Multiplying Proportions
  // --------------------------------------------------
  'strat.proportions.cross-multiply': {
    id: 'strat.proportions.cross-multiply',
    label: 'Cross-Multiplying Proportions',
    description: 'Solve proportions by setting cross products equal.',
    skillIds: ['math.skill.proportion.solve', 'math.skill.rate.word'],
    tags: ['pre-algebra', 'proportions', 'equations', 'ratios'],
    bodyHtml: `
      <p><strong>Definition:</strong> A proportion is an equation stating that two ratios are equal.</p>
      <p><strong>When to use it:</strong> When you have an equation of the form $\\dfrac{a}{b} = \\dfrac{c}{d}$ with one unknown.</p>
      <p><strong>Procedure (cross-multiplication):</strong></p>
      <ol>
        <li>Write the proportion clearly as $\\dfrac{a}{b} = \\dfrac{c}{d}$.</li>
        <li>Multiply across the equals sign: $a \\cdot d = b \\cdot c$.</li>
        <li>Solve the resulting one-step or two-step equation for the unknown.</li>
        <li>Check your answer in the original proportion.</li>
      </ol>
    `,
    examples: [
      {
        id: 'prop-2-5-6-x',
        label: 'Solve a basic proportion',
        difficulty: 2,
        promptHtml: `
          <p>Solve for $x$: $\\dfrac{2}{5} = \\dfrac{6}{x}$.</p>
        `,
        solutionHtml: `
          <p>Cross-multiply:</p>
          <p>
            $$
            2 \\cdot x = 5 \\cdot 6
            $$
          </p>
          <p>So $2x = 30$.</p>
          <p>Divide both sides by $2$:</p>
          <p>
            $$
            x = \\dfrac{30}{2} = 15
            $$
          </p>
          <p>Check: $\\dfrac{2}{5} = 0.4$ and $\\dfrac{6}{15} = 0.4$, so the solution is correct.</p>
        `
      },
      {
        id: 'prop-scale-recipe',
        label: 'Recipe scaling with a proportion',
        difficulty: 3,
        promptHtml: `
          <p>A recipe uses $3$ cups of flour for $12$ cookies. How many cups of flour are needed for $20$ cookies?</p>
        `,
        solutionHtml: `
          <p>Set up a proportion with cups over cookies:</p>
          <p>
            $$
            \\dfrac{3}{12} = \\dfrac{x}{20}
            $$
          </p>
          <p>Cross-multiply:</p>
          <p>
            $$
            3 \\cdot 20 = 12 \\cdot x
            $$
          </p>
          <p>So $60 = 12x$.</p>
          <p>Divide both sides by $12$:</p>
          <p>
            $$
            x = \\dfrac{60}{12} = 5
            $$
          </p>
          <p>So you need $5$ cups of flour for $20$ cookies.</p>
        `
      }
    ]
  },

  // --------------------------------------------------
  // Unit Rate / Unit Price
  // --------------------------------------------------
  'strat.rates.unit-rate': {
    id: 'strat.rates.unit-rate',
    label: 'Unit Rate & Unit Price',
    description: 'Find the rate “per 1 unit,” like dollars per bar or miles per hour.',
    skillIds: ['math.skill.unit-rate', 'math.skill.decimal.ops'],
    tags: ['pre-algebra', 'rates', 'unit-rate', 'decimals'],
    bodyHtml: `
      <p><strong>Definition:</strong> A unit rate compares a quantity to <em>one</em> unit of another quantity, like dollars per bar or miles per hour.</p>
      <p><strong>When to use it:</strong> When you see phrases like “per 1”, “each”, or you want to compare which option is the better buy.</p>
      <p><strong>Procedure:</strong></p>
      <ol>
        <li>Write the rate as a fraction: \$begin:math:text$\\\\dfrac\{\\\\text\{total\}\}\{\\\\text\{number of units\}\}\\$end:math:text$.</li>
        <li>Divide the numerator by the denominator to get a value “per 1 unit”.</li>
        <li>Attach the correct units to your answer.</li>
      </ol>
    `,
    examples: [
      {
        id: 'unit-rate-bars',
        label: 'Dollars per candy bar',
        difficulty: 2,
        promptHtml: `
          <p>A pack of $6$ candy bars costs $&dollar;9$. What is the cost per bar?</p>
        `,
        solutionHtml: `
          <p>Write the rate as dollars per bar:</p>
          <p>
            $$
            \\dfrac{9}{6}
            $$
          </p>
          <p>Divide:</p>
          <p>
            $$
            9 \\div 6 = 1.5
            $$
          </p>
          <p>So the unit price is $1.5$ dollars per bar, or &dollar;$1.50$ per bar.</p>
        `
      },
      {
        id: 'unit-rate-mph',
        label: 'Miles per hour',
        difficulty: 2,
        promptHtml: `
          <p>A car travels $180$ miles in $3$ hours. What is its average speed in miles per hour?</p>
        `,
        solutionHtml: `
          <p>Write the rate as miles per hour:</p>
          <p>
            $$
            \\dfrac{180}{3}
            $$
          </p>
          <p>Divide:</p>
          <p>
            $$
            180 \\div 3 = 60
            $$
          </p>
          <p>So the average speed is $60$ miles per hour.</p>
        `
      }
    ]
  },

  // --------------------------------------------------
  // Rationalizing a Simple Radical Denominator
  // --------------------------------------------------
  'strat.radicals.rationalize-simple': {
    id: 'strat.radicals.rationalize-simple',
    label: 'Rationalize a Simple Radical Denominator',
    description: 'Remove a single square root from the denominator of a fraction.',
    skillIds: ['math.skill.radicals.rationalize-simple', 'math.skill.radicals.simplify-basic'],
    tags: ['pre-algebra', 'radicals', 'rationalizing', 'denominators'],
    bodyHtml: `
      <p><strong>Goal:</strong> Rewrite a fraction so that the denominator no longer contains a square root.</p>
      <p><strong>When to use it:</strong> For expressions like $\\dfrac{a}{\\sqrt{b}}$ where $b$ is not a perfect square.</p>
      <p><strong>Procedure:</strong></p>
      <ol>
        <li>Identify the radical in the denominator, such as $\\sqrt{b}$.</li>
        <li>Multiply the numerator and denominator by that same radical.</li>
        <li>Simplify the denominator using $\\sqrt{b} \\cdot \\sqrt{b} = b$.</li>
        <li>Simplify the numerator if possible and reduce any factors.</li>
      </ol>
    `,
    examples: [
      {
        id: 'rat-simple-3-over-sqrt5',
        label: 'Rationalize \\(\\dfrac{3}{\\sqrt{5}}\\)',
        difficulty: 3,
        promptHtml: `
          <p>Rationalize the denominator of $\\dfrac{3}{\\sqrt{5}}$.</p>
        `,
        solutionHtml: `
          <p>Multiply the numerator and denominator by $\\sqrt{5}$:</p>
          <p>
            $$
            \\dfrac{3}{\\sqrt{5}} \\cdot \\dfrac{\\sqrt{5}}{\\sqrt{5}}
            $$
          </p>
          <p>The denominator becomes:</p>
          <p>
            $$
            \\sqrt{5} \\cdot \\sqrt{5} = 5
            $$
          </p>
          <p>The numerator becomes:</p>
          <p>
            $$
            3 \\cdot \\sqrt{5} = 3\\sqrt{5}
            $$
          </p>
          <p>So the result is:</p>
          <p>
            $$
            \\dfrac{3\\sqrt{5}}{5}
            $$
          </p>
        `
      },
      {
        id: 'rat-simple-2-over-sqrt3',
        label: 'Rationalize \\(\\dfrac{2}{\\sqrt{3}}\\)',
        difficulty: 3,
        promptHtml: `
          <p>Rationalize the denominator of $\\dfrac{2}{\\sqrt{3}}$.</p>
        `,
        solutionHtml: `
          <p>Multiply numerator and denominator by $\\sqrt{3}$:</p>
          <p>
            $$
            \\dfrac{2}{\\sqrt{3}} \\cdot \\dfrac{\\sqrt{3}}{\\sqrt{3}}
            = \\dfrac{2\\sqrt{3}}{3}
            $$
          </p>
          <p>The denominator is now $3$, which is rational.</p>
        `
      }
    ]
  }
}
