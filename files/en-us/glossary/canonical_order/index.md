---
title: Canonical order
slug: Glossary/Canonical_order
page-type: glossary-definition
---

{{GlossarySidebar}}

In CSS, canonical order is used to refer to the order in which separate values need to be specified (or {{Glossary("parse", "parsed")}}) or are to be {{Glossary("serialization", "serialized")}} as part of a CSS property value. It is defined by the formal {{Glossary("syntax")}} of the property and normally refers to the order in which longhand values should be specified as part of a single shorthand value.

For example, {{cssxref("background")}} shorthand property values are made up of several `background-*` longhand properties. The canonical order of those longhand values is defined as

1. {{cssxref("background-image")}}
2. {{cssxref("background-position")}}
3. {{cssxref("background-size")}}
4. {{cssxref("background-repeat")}}
5. {{cssxref("background-attachment")}}
6. {{cssxref("background-origin")}}
7. {{cssxref("background-clip")}}
8. {{cssxref("background-color")}}

Furthermore, its syntax defines, that if a value for the {{cssxref("background-size")}} is given, it **must** be specified **after** the value for the {{cssxref("background-position")}}, separated by a slash. Other values may appear in any order.

## See also

- [What does "canonical order" mean with respect to CSS properties?](https://stackoverflow.com/questions/28963536/what-does-canonical-order-mean-with-respect-to-css-properties) on Stack Overflow provides useful further discussion.
- The [description of the formal syntax used for CSS values](/en-US/docs/Web/CSS/Value_definition_syntax) on MDN
