import type { SkillTree } from '@/types/skill-tree.types'

type SkillNodeMap = SkillTree['nodes']

export const prealgModuleNodes: SkillNodeMap = {
  'math.module.prealg': {
    id: 'math.module.prealg',
    kind: 'module',
    label: 'Pre-Algebra',
    description: 'Core pre-algebra skills connecting integers, fractions, radicals, and exponents.',
    tags: ['pre-algebra']
  }
}

export const prealgIntegerNodes: SkillNodeMap = {
  'math.skill.int.add-sub': {
    id: 'math.skill.int.add-sub',
    kind: 'skill',
    label: 'Integer Addition & Subtraction',
    description: 'Add and subtract integers, including negatives; base for most later skills.',
    parentId: 'math.module.prealg',
    order: 1,
    difficulty: 1,
    prereqIds: [],
    tags: ['pre-algebra', 'integers']
  },
  'math.skill.int.mul-div': {
    id: 'math.skill.int.mul-div',
    kind: 'skill',
    label: 'Integer Multiplication & Division',
    description:
      'Multiply and divide integers; supports factors, fractions, exponents, and radicals.',
    parentId: 'math.module.prealg',
    order: 2,
    difficulty: 2,
    prereqIds: ['math.skill.int.add-sub'],
    tags: ['pre-algebra', 'integers']
  },
  'math.skill.abs.value': {
    id: 'math.skill.abs.value',
    kind: 'skill',
    label: 'Absolute Value',
    description: 'Interpret absolute value as distance from zero on the number line.',
    parentId: 'math.module.prealg',
    order: 3,
    difficulty: 1,
    prereqIds: ['math.skill.int.add-sub'],
    tags: ['pre-algebra', 'absolute-value']
  },
  'math.skill.int.word': {
    id: 'math.skill.int.word',
    kind: 'skill',
    label: 'Integer Word Problems',
    description: 'Apply integer operations and absolute value to simple real-world situations.',
    parentId: 'math.module.prealg',
    order: 6,
    difficulty: 2,
    prereqIds: ['math.skill.int.add-sub', 'math.skill.abs.value'],
    tags: ['pre-algebra', 'word-problems', 'integers']
  }
}

export const prealgNumberSetNodes: SkillNodeMap = {
  'math.skill.number-sets': {
    id: 'math.skill.number-sets',
    kind: 'skill',
    label: 'Number Sets & Classification',
    description: 'Classify numbers as natural, whole, integer, rational, irrational, or real.',
    parentId: 'math.module.prealg',
    order: 4,
    difficulty: 1,
    prereqIds: [],
    tags: ['pre-algebra', 'number-sets']
  }
}

export const prealgFactorNodes: SkillNodeMap = {
  'math.skill.factors-multiples': {
    id: 'math.skill.factors-multiples',
    kind: 'skill',
    label: 'Factors, Multiples, GCF & LCM',
    description: 'Find factors, multiples, GCF, and LCM to support fraction work.',
    parentId: 'math.module.prealg',
    order: 5,
    difficulty: 2,
    prereqIds: ['math.skill.int.mul-div'],
    tags: ['pre-algebra', 'factors-multiples']
  }
}

export const prealgFractionNodes: SkillNodeMap = {
  'math.skill.frac.simplify': {
    id: 'math.skill.frac.simplify',
    kind: 'skill',
    label: 'Simplifying Fractions',
    description: 'Reduce fractions to simplest form using common factors or GCF.',
    parentId: 'math.module.prealg',
    order: 7,
    difficulty: 2,
    prereqIds: ['math.skill.factors-multiples'],
    tags: ['pre-algebra', 'fractions', 'simplifying']
  },
  'math.skill.frac.equivalent': {
    id: 'math.skill.frac.equivalent',
    kind: 'skill',
    label: 'Equivalent Fractions',
    description: 'Generate equivalent fractions by scaling numerators and denominators.',
    parentId: 'math.module.prealg',
    order: 8,
    difficulty: 2,
    prereqIds: ['math.skill.frac.simplify'],
    tags: ['pre-algebra', 'fractions', 'equivalent-fractions']
  },
  'math.skill.frac.to-percent': {
    id: 'math.skill.frac.to-percent',
    kind: 'skill',
    label: 'Fractions & Percents',
    description: 'Convert between fractions and percents in both directions.',
    parentId: 'math.module.prealg',
    order: 9,
    difficulty: 2,
    prereqIds: ['math.skill.frac.simplify', 'math.skill.number-sets'],
    tags: ['pre-algebra', 'fractions', 'percents']
  },
  'math.skill.frac.compare': {
    id: 'math.skill.frac.compare',
    kind: 'skill',
    label: 'Comparing Fractions',
    description: 'Compare fractions using common denominators or benchmark fractions.',
    parentId: 'math.module.prealg',
    order: 10,
    difficulty: 2,
    prereqIds: ['math.skill.frac.equivalent'],
    tags: ['pre-algebra', 'fractions', 'comparison']
  },
  'math.skill.frac.add-sub-like': {
    id: 'math.skill.frac.add-sub-like',
    kind: 'skill',
    label: 'Add & Subtract Fractions (Like Denominators)',
    description: 'Add and subtract fractions that already share a common denominator.',
    parentId: 'math.module.prealg',
    order: 11,
    difficulty: 2,
    prereqIds: ['math.skill.frac.simplify'],
    tags: ['pre-algebra', 'fractions', 'add-sub', 'like-denominators']
  },
  'math.skill.frac.add-sub-unlike': {
    id: 'math.skill.frac.add-sub-unlike',
    kind: 'skill',
    label: 'Add & Subtract Fractions (Unlike Denominators)',
    description: 'Add and subtract fractions by creating and using a common denominator.',
    parentId: 'math.module.prealg',
    order: 12,
    difficulty: 3,
    prereqIds: [
      'math.skill.frac.simplify',
      'math.skill.frac.equivalent',
      'math.skill.factors-multiples'
    ],
    tags: ['pre-algebra', 'fractions', 'add-sub', 'unlike-denominators']
  },
  'math.skill.frac.add-sub-mixed': {
    id: 'math.skill.frac.add-sub-mixed',
    kind: 'skill',
    label: 'Add & Subtract Mixed Numbers',
    description: 'Add and subtract mixed numbers using improper fractions or regrouping.',
    parentId: 'math.module.prealg',
    order: 13,
    difficulty: 3,
    prereqIds: ['math.skill.frac.add-sub-unlike'],
    tags: ['pre-algebra', 'fractions', 'mixed-numbers', 'add-sub']
  },
  'math.skill.frac.add-sub-word': {
    id: 'math.skill.frac.add-sub-word',
    kind: 'skill',
    label: 'Fraction Word Problems (Add & Subtract)',
    description: 'Model and solve word problems involving fraction addition and subtraction.',
    parentId: 'math.module.prealg',
    order: 14,
    difficulty: 3,
    prereqIds: ['math.skill.frac.add-sub-like', 'math.skill.frac.add-sub-unlike'],
    tags: ['pre-algebra', 'fractions', 'word-problems', 'add-sub']
  },
  'math.skill.frac.mul': {
    id: 'math.skill.frac.mul',
    kind: 'skill',
    label: 'Multiply Fractions & Mixed Numbers',
    description: 'Multiply fractions and mixed numbers, often followed by simplifying.',
    parentId: 'math.module.prealg',
    order: 15,
    difficulty: 2,
    prereqIds: ['math.skill.frac.simplify'],
    tags: ['pre-algebra', 'fractions', 'multiplication']
  },
  'math.skill.frac.div': {
    id: 'math.skill.frac.div',
    kind: 'skill',
    label: 'Divide Fractions & Mixed Numbers',
    description: 'Divide fractions using reciprocal multiplication and simplification.',
    parentId: 'math.module.prealg',
    order: 16,
    difficulty: 3,
    prereqIds: ['math.skill.frac.mul', 'math.skill.frac.simplify'],
    tags: ['pre-algebra', 'fractions', 'division']
  },
  'math.skill.frac.of-number': {
    id: 'math.skill.frac.of-number',
    kind: 'skill',
    label: 'Fraction of a Number ("Of" Problems)',
    description: 'Find a fraction of a whole number in numeric and word problems.',
    parentId: 'math.module.prealg',
    order: 17,
    difficulty: 2,
    prereqIds: ['math.skill.frac.mul'],
    tags: ['pre-algebra', 'fractions', 'word-problems', '"of"-problems']
  }
}

export const prealgDecimalPercentNodes: SkillNodeMap = {
  'math.skill.decimal.ops': {
    id: 'math.skill.decimal.ops',
    kind: 'skill',
    label: 'Decimal Operations & Rounding',
    description: 'Add, subtract, multiply, and divide decimals with correct place-value alignment.',
    parentId: 'math.module.prealg',
    order: 18,
    difficulty: 2,
    prereqIds: ['math.skill.int.add-sub'],
    tags: ['pre-algebra', 'decimals', 'operations', 'rounding']
  },
  'math.skill.decimal-fraction-percent': {
    id: 'math.skill.decimal-fraction-percent',
    kind: 'skill',
    label: 'Decimals, Fractions & Percents (Conversions)',
    description: 'Convert between decimals, fractions, and percents fluently.',
    parentId: 'math.module.prealg',
    order: 19,
    difficulty: 2,
    prereqIds: ['math.skill.frac.simplify'],
    tags: ['pre-algebra', 'decimals', 'fractions', 'percents', 'conversions']
  },
  'math.skill.percent.change': {
    id: 'math.skill.percent.change',
    kind: 'skill',
    label: 'Percent of a Number & Percent Change',
    description: 'Compute percent of a number and simple percent increase or decrease.',
    parentId: 'math.module.prealg',
    order: 20,
    difficulty: 3,
    prereqIds: ['math.skill.decimal-fraction-percent'],
    tags: ['pre-algebra', 'percents', 'word-problems', 'percent-change']
  }
}

export const prealgRatioRateNodes: SkillNodeMap = {
  'math.skill.ratio.basic': {
    id: 'math.skill.ratio.basic',
    kind: 'skill',
    label: 'Basic Ratios & Simplifying',
    description: 'Write and simplify ratios as fraction-like comparisons.',
    parentId: 'math.module.prealg',
    order: 21,
    difficulty: 2,
    prereqIds: ['math.skill.frac.simplify'],
    tags: ['pre-algebra', 'ratios', 'fractions', 'simplifying']
  },
  'math.skill.unit-rate': {
    id: 'math.skill.unit-rate',
    kind: 'skill',
    label: 'Unit Rates & Unit Price',
    description: 'Find unit rates and unit prices from ratio information.',
    parentId: 'math.module.prealg',
    order: 22,
    difficulty: 2,
    prereqIds: ['math.skill.ratio.basic', 'math.skill.decimal.ops'],
    tags: ['pre-algebra', 'ratios', 'rates', 'unit-rate']
  },
  'math.skill.proportion.solve': {
    id: 'math.skill.proportion.solve',
    kind: 'skill',
    label: 'Solving Proportions',
    description: 'Solve proportions by cross-multiplying or reasoning about equivalent ratios.',
    parentId: 'math.module.prealg',
    order: 23,
    difficulty: 3,
    prereqIds: ['math.skill.ratio.basic', 'math.skill.frac.mul'],
    tags: ['pre-algebra', 'proportions', 'equations']
  },
  'math.skill.rate.word': {
    id: 'math.skill.rate.word',
    kind: 'skill',
    label: 'Ratio, Rate & Proportion Word Problems',
    description: 'Solve real-world problems using ratios, rates, and proportions together.',
    parentId: 'math.module.prealg',
    order: 24,
    difficulty: 3,
    prereqIds: ['math.skill.unit-rate', 'math.skill.proportion.solve'],
    tags: ['pre-algebra', 'word-problems', 'ratios', 'rates', 'proportions']
  }
}

export const prealgMeasurementNodes: SkillNodeMap = {
  'math.skill.measure.convert': {
    id: 'math.skill.measure.convert',
    kind: 'skill',
    label: 'Unit Conversions (Length, Time, etc.)',
    description: 'Convert between common units of length, time, and other measures.',
    parentId: 'math.module.prealg',
    order: 25,
    difficulty: 2,
    prereqIds: ['math.skill.decimal.ops', 'math.skill.frac.simplify'],
    tags: ['pre-algebra', 'measurement', 'unit-conversion']
  },
  'math.skill.measure.time-arith': {
    id: 'math.skill.measure.time-arith',
    kind: 'skill',
    label: 'Time Addition & Subtraction',
    description: 'Add and subtract times using hours, minutes, and sometimes seconds.',
    parentId: 'math.module.prealg',
    order: 26,
    difficulty: 2,
    prereqIds: ['math.skill.measure.convert'],
    tags: ['pre-algebra', 'measurement', 'time', 'addition', 'subtraction']
  },
  'math.skill.measure.word': {
    id: 'math.skill.measure.word',
    kind: 'skill',
    label: 'Measurement Word Problems',
    description: 'Interpret and solve word problems involving measurements and units.',
    parentId: 'math.module.prealg',
    order: 27,
    difficulty: 3,
    prereqIds: ['math.skill.measure.convert', 'math.skill.decimal.ops'],
    tags: ['pre-algebra', 'measurement', 'word-problem']
  }
}

export const prealgRadicalNodes: SkillNodeMap = {
  'math.skill.radicals.evaluate': {
    id: 'math.skill.radicals.evaluate',
    kind: 'skill',
    label: 'Evaluate Square Roots',
    description: 'Evaluate simple square roots of perfect squares and related expressions.',
    parentId: 'math.module.prealg',
    order: 28,
    difficulty: 2,
    prereqIds: ['math.skill.int.mul-div'],
    tags: ['pre-algebra', 'radicals', 'square-roots', 'evaluation']
  },
  'math.skill.radicals.simplify-basic': {
    id: 'math.skill.radicals.simplify-basic',
    kind: 'skill',
    label: 'Simplify Square Roots Using Perfect Squares',
    description: 'Simplify square roots by factoring out perfect square factors.',
    parentId: 'math.module.prealg',
    order: 29,
    difficulty: 3,
    prereqIds: ['math.skill.radicals.evaluate', 'math.skill.factors-multiples'],
    tags: ['pre-algebra', 'radicals', 'simplifying', 'perfect-squares']
  },
  'math.skill.radicals.combine': {
    id: 'math.skill.radicals.combine',
    kind: 'skill',
    label: 'Combine Like Radicals',
    description: 'Add and subtract like radicals after simplifying them.',
    parentId: 'math.module.prealg',
    order: 30,
    difficulty: 3,
    prereqIds: ['math.skill.radicals.simplify-basic'],
    tags: ['pre-algebra', 'radicals', 'like-terms']
  },
  'math.skill.radicals.rationalize-simple': {
    id: 'math.skill.radicals.rationalize-simple',
    kind: 'skill',
    label: 'Rationalize Simple Radical Denominators',
    description: 'Remove simple radicals from denominators using multiplication by a form of 1.',
    parentId: 'math.module.prealg',
    order: 35,
    difficulty: 4,
    prereqIds: ['math.skill.radicals.simplify-basic'],
    tags: ['pre-algebra', 'radicals', 'rationalizing', 'denominators']
  },
  'math.skill.radicals.rationalize-mixed': {
    id: 'math.skill.radicals.rationalize-mixed',
    kind: 'skill',
    label: 'Simplify & Rationalize Combined',
    description:
      'Combine simplification and rationalizing in multi-term or fractional radical expressions.',
    parentId: 'math.module.prealg',
    order: 36,
    difficulty: 4,
    prereqIds: ['math.skill.radicals.simplify-basic', 'math.skill.radicals.rationalize-simple'],
    tags: ['pre-algebra', 'radicals', 'simplifying', 'rationalizing']
  }
}

export const prealgExponentSciNodes: SkillNodeMap = {
  'math.skill.exp.evaluate': {
    id: 'math.skill.exp.evaluate',
    kind: 'skill',
    label: 'Evaluate Numeric Exponents',
    description: 'Evaluate basic powers, including negative bases, using repeated multiplication.',
    parentId: 'math.module.prealg',
    order: 31,
    difficulty: 2,
    prereqIds: ['math.skill.int.mul-div'],
    tags: ['pre-algebra', 'exponents', 'numeric']
  },
  'math.skill.exp.rules-basic': {
    id: 'math.skill.exp.rules-basic',
    kind: 'skill',
    label: 'Basic Exponent Rules (Same Base)',
    description: 'Use product, quotient, and power rules for exponents with the same base.',
    parentId: 'math.module.prealg',
    order: 32,
    difficulty: 3,
    prereqIds: ['math.skill.exp.evaluate'],
    tags: ['pre-algebra', 'exponents', 'rules']
  },
  'math.skill.sci-notation.write': {
    id: 'math.skill.sci-notation.write',
    kind: 'skill',
    label: 'Write Numbers in Scientific Notation',
    description: 'Write standard numbers in scientific notation and convert back again.',
    parentId: 'math.module.prealg',
    order: 33,
    difficulty: 3,
    prereqIds: ['math.skill.decimal.ops'],
    tags: ['pre-algebra', 'scientific-notation', 'representation']
  },
  'math.skill.sci-notation.ops': {
    id: 'math.skill.sci-notation.ops',
    kind: 'skill',
    label: 'Multiply & Divide in Scientific Notation',
    description: 'Multiply and divide numbers in scientific notation, then rewrite in proper form.',
    parentId: 'math.module.prealg',
    order: 34,
    difficulty: 4,
    prereqIds: ['math.skill.exp.rules-basic', 'math.skill.sci-notation.write'],
    tags: ['pre-algebra', 'scientific-notation', 'operations']
  }
}

export const mathTree: SkillTree = {
  id: 'math-tree',
  label: 'Math Skill Tree',
  nodes: {
    ...prealgModuleNodes,
    ...prealgIntegerNodes,
    ...prealgNumberSetNodes,
    ...prealgFactorNodes,
    ...prealgFractionNodes,
    ...prealgDecimalPercentNodes,
    ...prealgRatioRateNodes,
    ...prealgMeasurementNodes,
    ...prealgRadicalNodes,
    ...prealgExponentSciNodes
  }
}
