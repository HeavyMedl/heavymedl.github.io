// src/types/skill-tree.types.ts

export type SkillNodeKind = 'module' | 'skill'

/**
 * A node in a skill tree.
 * - `module` ≈ big chunk like "Pre-Algebra", "Algebra 1"
 * - `skill`  ≈ specific concept like "Integer Addition & Subtraction"
 */
export interface SkillNode {
  /** Globally unique ID, e.g. "math.module.prealg" or "math.skill.int.add-sub" */
  id: string

  /** "module" or "skill" */
  kind: SkillNodeKind

  /** Human-readable label, e.g. "Pre-Algebra", "Integer Addition & Subtraction" */
  label: string

  /**
   * For skill nodes: the module they belong to.
   * For module nodes: usually undefined.
   */
  parentId?: string

  /**
   * Approximate position within the module.
   */
  order?: number

  /**
   * Other skill IDs that should come before this one.
   */
  prereqIds?: string[]

  /**
   * Optional tags, e.g. ["pre-algebra", "foundational"]
   */
  tags?: string[]

  /**
   * Escape hatch for anything domain-specific (icon names, colors, XP weights, etc.).
   */
  meta?: Record<string, unknown>
}

/**
 * A single skill tree for a domain, e.g. "Math Skill Tree".
 */
export interface SkillTree {
  /** e.g. "math-tree" */
  id: string

  /** e.g. "Math Skill Tree" */
  label: string

  /** All nodes in the tree, keyed by their id. */
  nodes: Record<string, SkillNode>
}

export type SkillRole = 'primary' | 'secondary'

export interface SkillRef {
  /** Must match a SkillNode.id that has kind === 'skill' */
  skillId: string

  /** Optional weight if you ever want to quantify contribution */
  weight?: number

  /** Optional qualitative role (default could be "primary" in your code) */
  role?: SkillRole
}
