---
title: Composite operation
slug: Glossary/Composite_operation
tags:
  - Animations
  - Glossary
---
In CSS, the value of a property in a CSS rule is the _underlying value_ of that property, and the value of that same property in a [keyframe](/en-US/docs/Web/CSS/@keyframes) is its _effect value_.

The _composite operation_ is the specific operation that is used to combine an effect value with an underlying value to produce the final keyframe effect value. There are three types of composite operations:

- **replace**: The effect value replaces the underlying value. The final effect value in this case is the original effect value itself.
- **add**: The effect value is added to the underlying value.
- **accumulate**: The effect value is combined with the underlying value.

> **Note:** Composite operation in CSS only applies to animations.

## See also

- [`animation-composition`](/en-us/web/css/animation-composition)
- [`KeyframeEffect.composite`](/en-US/docs/Web/API/KeyframeEffect/composite)
