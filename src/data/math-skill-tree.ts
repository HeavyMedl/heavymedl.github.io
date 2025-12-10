import type { SkillTree } from '@/types/skill-tree.types'

type SkillNodeMap = SkillTree['nodes']

export const prealgModuleNodes: SkillNodeMap = {
  'math.module.prealg': {
    id: 'math.module.prealg',
    kind: 'module',
    label: 'Pre-Algebra',
    tags: ['pre-algebra']
  }
}

export const prealgIntegerNodes: SkillNodeMap = {
  'math.skill.int.add-sub': {
    id: 'math.skill.int.add-sub',
    kind: 'skill',
    label: 'Integer Addition & Subtraction',
    parentId: 'math.module.prealg',
    order: 1,
    prereqIds: [],
    tags: ['pre-algebra', 'integers']
  },
  'math.skill.int.mul-div': {
    id: 'math.skill.int.mul-div',
    kind: 'skill',
    label: 'Integer Multiplication & Division',
    parentId: 'math.module.prealg',
    order: 2,
    prereqIds: ['math.skill.int.add-sub'],
    tags: ['pre-algebra', 'integers']
  },
  'math.skill.abs.value': {
    id: 'math.skill.abs.value',
    kind: 'skill',
    label: 'Absolute Value',
    parentId: 'math.module.prealg',
    order: 3,
    prereqIds: ['math.skill.int.add-sub'],
    tags: ['pre-algebra', 'absolute-value']
  },
  'math.skill.int.word': {
    id: 'math.skill.int.word',
    kind: 'skill',
    label: 'Integer Word Problems',
    parentId: 'math.module.prealg',
    order: 6,
    prereqIds: ['math.skill.int.add-sub', 'math.skill.abs.value'],
    tags: ['pre-algebra', 'word-problems', 'integers']
  }
}

export const prealgNumberSetNodes: SkillNodeMap = {
  'math.skill.number-sets': {
    id: 'math.skill.number-sets',
    kind: 'skill',
    label: 'Number Sets & Classification',
    parentId: 'math.module.prealg',
    order: 4,
    prereqIds: [],
    tags: ['pre-algebra', 'number-sets']
  }
}

export const prealgFactorNodes: SkillNodeMap = {
  'math.skill.factors-multiples': {
    id: 'math.skill.factors-multiples',
    kind: 'skill',
    label: 'Factors, Multiples, GCF & LCM',
    parentId: 'math.module.prealg',
    order: 5,
    prereqIds: ['math.skill.int.mul-div'],
    tags: ['pre-algebra', 'factors-multiples']
  }
}

export const prealgFractionNodes: SkillNodeMap = {
  'math.skill.frac.simplify': {
    id: 'math.skill.frac.simplify',
    kind: 'skill',
    label: 'Simplifying Fractions',
    parentId: 'math.module.prealg',
    order: 7,
    prereqIds: ['math.skill.factors-multiples'],
    tags: ['pre-algebra', 'fractions', 'simplifying']
  },
  'math.skill.frac.equivalent': {
    id: 'math.skill.frac.equivalent',
    kind: 'skill',
    label: 'Equivalent Fractions',
    parentId: 'math.module.prealg',
    order: 8,
    prereqIds: ['math.skill.frac.simplify'],
    tags: ['pre-algebra', 'fractions', 'equivalent-fractions']
  },
  'math.skill.frac.to-percent': {
    id: 'math.skill.frac.to-percent',
    kind: 'skill',
    label: 'Fractions & Percents',
    parentId: 'math.module.prealg',
    order: 9,
    prereqIds: ['math.skill.frac.simplify', 'math.skill.number-sets'],
    tags: ['pre-algebra', 'fractions', 'percents']
  },
  'math.skill.frac.compare': {
    id: 'math.skill.frac.compare',
    kind: 'skill',
    label: 'Comparing Fractions',
    parentId: 'math.module.prealg',
    order: 10,
    prereqIds: ['math.skill.frac.equivalent'],
    tags: ['pre-algebra', 'fractions', 'comparison']
  },
  'math.skill.frac.add-sub-like': {
    id: 'math.skill.frac.add-sub-like',
    kind: 'skill',
    label: 'Add & Subtract Fractions (Like Denominators)',
    parentId: 'math.module.prealg',
    order: 11,
    prereqIds: ['math.skill.frac.simplify'],
    tags: ['pre-algebra', 'fractions', 'add-sub', 'like-denominators']
  },
  'math.skill.frac.add-sub-unlike': {
    id: 'math.skill.frac.add-sub-unlike',
    kind: 'skill',
    label: 'Add & Subtract Fractions (Unlike Denominators)',
    parentId: 'math.module.prealg',
    order: 12,
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
    parentId: 'math.module.prealg',
    order: 13,
    prereqIds: ['math.skill.frac.add-sub-unlike'],
    tags: ['pre-algebra', 'fractions', 'mixed-numbers', 'add-sub']
  },
  'math.skill.frac.add-sub-word': {
    id: 'math.skill.frac.add-sub-word',
    kind: 'skill',
    label: 'Fraction Word Problems (Add & Subtract)',
    parentId: 'math.module.prealg',
    order: 14,
    prereqIds: ['math.skill.frac.add-sub-like', 'math.skill.frac.add-sub-unlike'],
    tags: ['pre-algebra', 'fractions', 'word-problems', 'add-sub']
  },
  'math.skill.frac.mul': {
    id: 'math.skill.frac.mul',
    kind: 'skill',
    label: 'Multiply Fractions & Mixed Numbers',
    parentId: 'math.module.prealg',
    order: 15,
    prereqIds: ['math.skill.frac.simplify'],
    tags: ['pre-algebra', 'fractions', 'multiplication']
  },
  'math.skill.frac.div': {
    id: 'math.skill.frac.div',
    kind: 'skill',
    label: 'Divide Fractions & Mixed Numbers',
    parentId: 'math.module.prealg',
    order: 16,
    prereqIds: ['math.skill.frac.mul', 'math.skill.frac.simplify'],
    tags: ['pre-algebra', 'fractions', 'division']
  },
  'math.skill.frac.of-number': {
    id: 'math.skill.frac.of-number',
    kind: 'skill',
    label: 'Fraction of a Number ("Of" Problems)',
    parentId: 'math.module.prealg',
    order: 17,
    prereqIds: ['math.skill.frac.mul'],
    tags: ['pre-algebra', 'fractions', 'word-problems', '"of"-problems']
  }
}

export const prealgDecimalPercentNodes: SkillNodeMap = {
  'math.skill.decimal.ops': {
    id: 'math.skill.decimal.ops',
    kind: 'skill',
    label: 'Decimal Operations & Rounding',
    parentId: 'math.module.prealg',
    order: 18,
    prereqIds: ['math.skill.int.add-sub'],
    tags: ['pre-algebra', 'decimals', 'operations', 'rounding']
  },
  'math.skill.decimal-fraction-percent': {
    id: 'math.skill.decimal-fraction-percent',
    kind: 'skill',
    label: 'Decimals, Fractions & Percents (Conversions)',
    parentId: 'math.module.prealg',
    order: 19,
    prereqIds: ['math.skill.frac.simplify'],
    tags: ['pre-algebra', 'decimals', 'fractions', 'percents', 'conversions']
  },
  'math.skill.percent.change': {
    id: 'math.skill.percent.change',
    kind: 'skill',
    label: 'Percent of a Number & Percent Change',
    parentId: 'math.module.prealg',
    order: 20,
    prereqIds: ['math.skill.decimal-fraction-percent'],
    tags: ['pre-algebra', 'percents', 'word-problems', 'percent-change']
  }
}

export const prealgRatioRateNodes: SkillNodeMap = {
  'math.skill.ratio.basic': {
    id: 'math.skill.ratio.basic',
    kind: 'skill',
    label: 'Basic Ratios & Simplifying',
    parentId: 'math.module.prealg',
    order: 21,
    prereqIds: ['math.skill.frac.simplify'],
    tags: ['pre-algebra', 'ratios', 'fractions', 'simplifying']
  },
  'math.skill.unit-rate': {
    id: 'math.skill.unit-rate',
    kind: 'skill',
    label: 'Unit Rates & Unit Price',
    parentId: 'math.module.prealg',
    order: 22,
    prereqIds: ['math.skill.ratio.basic', 'math.skill.decimal.ops'],
    tags: ['pre-algebra', 'ratios', 'rates', 'unit-rate']
  },
  'math.skill.proportion.solve': {
    id: 'math.skill.proportion.solve',
    kind: 'skill',
    label: 'Solving Proportions',
    parentId: 'math.module.prealg',
    order: 23,
    prereqIds: ['math.skill.ratio.basic', 'math.skill.frac.mul'],
    tags: ['pre-algebra', 'proportions', 'equations']
  },
  'math.skill.rate.word': {
    id: 'math.skill.rate.word',
    kind: 'skill',
    label: 'Ratio, Rate & Proportion Word Problems',
    parentId: 'math.module.prealg',
    order: 24,
    prereqIds: ['math.skill.unit-rate', 'math.skill.proportion.solve'],
    tags: ['pre-algebra', 'word-problems', 'ratios', 'rates', 'proportions']
  }
}

export const prealgMeasurementNodes: SkillNodeMap = {
  'math.skill.measure.convert': {
    id: 'math.skill.measure.convert',
    kind: 'skill',
    label: 'Unit Conversions (Length, Time, etc.)',
    parentId: 'math.module.prealg',
    order: 25,
    prereqIds: ['math.skill.decimal.ops', 'math.skill.frac.simplify'],
    tags: ['pre-algebra', 'measurement', 'unit-conversion']
  },
  'math.skill.measure.time-arith': {
    id: 'math.skill.measure.time-arith',
    kind: 'skill',
    label: 'Time Addition & Subtraction',
    parentId: 'math.module.prealg',
    order: 26,
    prereqIds: ['math.skill.measure.convert'],
    tags: ['pre-algebra', 'measurement', 'time', 'addition', 'subtraction']
  },
  'math.skill.measure.word': {
    id: 'math.skill.measure.word',
    kind: 'skill',
    label: 'Measurement Word Problems',
    parentId: 'math.module.prealg',
    order: 27,
    prereqIds: ['math.skill.measure.convert', 'math.skill.decimal.ops'],
    tags: ['pre-algebra', 'measurement', 'word-problem']
  }
}

export const prealgRadicalNodes: SkillNodeMap = {
  'math.skill.radicals.evaluate': {
    id: 'math.skill.radicals.evaluate',
    kind: 'skill',
    label: 'Evaluate Square Roots',
    parentId: 'math.module.prealg',
    order: 28,
    prereqIds: ['math.skill.int.mul-div'],
    tags: ['pre-algebra', 'radicals', 'square-roots', 'evaluation']
  },
  'math.skill.radicals.simplify-basic': {
    id: 'math.skill.radicals.simplify-basic',
    kind: 'skill',
    label: 'Simplify Square Roots Using Perfect Squares',
    parentId: 'math.module.prealg',
    order: 29,
    prereqIds: ['math.skill.radicals.evaluate', 'math.skill.factors-multiples'],
    tags: ['pre-algebra', 'radicals', 'simplifying', 'perfect-squares']
  },
  'math.skill.radicals.combine': {
    id: 'math.skill.radicals.combine',
    kind: 'skill',
    label: 'Combine Like Radicals',
    parentId: 'math.module.prealg',
    order: 30,
    prereqIds: ['math.skill.radicals.simplify-basic'],
    tags: ['pre-algebra', 'radicals', 'like-terms']
  },
  'math.skill.radicals.rationalize-simple': {
    id: 'math.skill.radicals.rationalize-simple',
    kind: 'skill',
    label: 'Rationalize Simple Radical Denominators',
    parentId: 'math.module.prealg',
    order: 35,
    prereqIds: ['math.skill.radicals.simplify-basic'],
    tags: ['pre-algebra', 'radicals', 'rationalizing', 'denominators']
  },
  'math.skill.radicals.rationalize-mixed': {
    id: 'math.skill.radicals.rationalize-mixed',
    kind: 'skill',
    label: 'Simplify & Rationalize Combined',
    parentId: 'math.module.prealg',
    order: 36,
    prereqIds: ['math.skill.radicals.simplify-basic', 'math.skill.radicals.rationalize-simple'],
    tags: ['pre-algebra', 'radicals', 'simplifying', 'rationalizing']
  }
}

export const prealgExponentSciNodes: SkillNodeMap = {
  'math.skill.exp.evaluate': {
    id: 'math.skill.exp.evaluate',
    kind: 'skill',
    label: 'Evaluate Numeric Exponents',
    parentId: 'math.module.prealg',
    order: 31,
    prereqIds: ['math.skill.int.mul-div'],
    tags: ['pre-algebra', 'exponents', 'numeric']
  },
  'math.skill.exp.rules-basic': {
    id: 'math.skill.exp.rules-basic',
    kind: 'skill',
    label: 'Basic Exponent Rules (Same Base)',
    parentId: 'math.module.prealg',
    order: 32,
    prereqIds: ['math.skill.exp.evaluate'],
    tags: ['pre-algebra', 'exponents', 'rules']
  },
  'math.skill.sci-notation.write': {
    id: 'math.skill.sci-notation.write',
    kind: 'skill',
    label: 'Write Numbers in Scientific Notation',
    parentId: 'math.module.prealg',
    order: 33,
    prereqIds: ['math.skill.decimal.ops'],
    tags: ['pre-algebra', 'scientific-notation', 'representation']
  },
  'math.skill.sci-notation.ops': {
    id: 'math.skill.sci-notation.ops',
    kind: 'skill',
    label: 'Multiply & Divide in Scientific Notation',
    parentId: 'math.module.prealg',
    order: 34,
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
