---
title: Actual value
slug: Web/CSS/actual_value
tags:
  - CSS
  - Guide
  - Reference
---
{{CSSRef}}

The **actual value** of a [CSS](/en-US/docs/Web/CSS) property is the [used value](/en-US/docs/Web/CSS/used_value) of that property after any necessary approximations have been applied. For example, a {{glossary("user agent")}} that can only render borders with a whole-number pixel width may round the thickness of the border to the nearest integer.

## Calculating a property's actual value

The {{glossary("user agent")}} performs four steps to calculate a property's actual (final) value:

1.  First, the [specified value](/en-US/docs/Web/CSS/specified_value) is determined based on the result of [cascading](/en-US/docs/Web/CSS/Cascade), [inheritance](/en-US/docs/Web/CSS/inheritance), or using the [initial value](/en-US/docs/Web/CSS/initial_value).
2.  Next, the [computed value](/en-US/docs/Web/CSS/computed_value) is calculated according to the specification (for example, a `span` with `position: absolute` will have its computed `display` changed to `block`).
3.  Then, layout is calculated, resulting in the [used value](/en-US/docs/Web/CSS/used_value).
4.  Finally, the used value is transformed according to the limitations of the local environment, resulting in the actual value.

## Specifications

| Specification                                                                            | Status                   | Comment             |
| ---------------------------------------------------------------------------------------- | ------------------------ | ------------------- |
| {{SpecName('CSS2.1', 'cascade.html#actual-value', 'actual value')}} | {{Spec2('CSS2.1')}} | Initial definition. |

## See also

- {{CSS_key_concepts}}
