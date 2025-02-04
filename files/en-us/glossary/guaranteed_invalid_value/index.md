---
title: Guaranteed-invalid value
slug: Glossary/guaranteed_invalid_value
page-type: glossary-definition
---

{{GlossarySidebar}}

In CSS the guaranteed-invalid value is {{CSSXref("initial")}}.

When a [custom property](/en-US/docs/Web/CSS/--*)'s value is the guaranteed-invalid value, the {{CSSXref("var")}} function cannot use it for substitution. Attempting to do so makes the declaration _invalid at computed-value time_, unless a valid fallback is specified.

## See also

- CSS {{CSSXref("initial")}}
- CSS {{CSSXref("var")}}
- [CSS Custom Properties for Cascading Variables Module Level 1 Specification](https://www.w3.org/TR/css-variables-1/#guaranteed-invalid)
