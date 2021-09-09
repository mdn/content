---
title: Resolved value
slug: Web/CSS/resolved_value
tags:
  - CSS
  - Guide
  - Reference
---
{{CSSRef}}

The **resolved value** of a [CSS](/en-US/docs/Web/CSS) property is the value returned by {{domxref("Window.getComputedStyle", "getComputedStyle()")}}.

For most properties, it is the [computed value](/en-US/docs/Web/CSS/computed_value), but for a few legacy properties (including {{cssxref("width")}} and {{cssxref("height")}}), it is instead the [used value](/en-US/docs/Web/CSS/used_value). See the specification link below for more per-property details.

## Specifications

| Specification                                                                    | Status                   | Comment             |
| -------------------------------------------------------------------------------- | ------------------------ | ------------------- |
| {{SpecName("CSSOM", "#resolved-values", "resolved value")}} | {{Spec2("CSSOM")}} | Initial definition. |

## See also

- {{domxref("window.getComputedStyle")}}
- {{CSS_key_concepts}}
