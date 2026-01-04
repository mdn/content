---
title: layer()
slug: Web/CSS/Reference/At-rules/@import/layer_function
page-type: css-function
browser-compat: css.at-rules.import.layer
sidebar: cssref
---

The **`layer()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) is used along with the {{cssxref("@import")}} [at-rule](/en-US/docs/Web/CSS/Guides/Syntax/At-rules) to put the imported resource in a separate named [cascade layer](/en-US/docs/Web/CSS/Reference/At-rules/@layer).

## Syntax

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

The `framework.themes.dark` is the layer into which the CSS file would be imported.

## Formal syntax

{{CSSSyntaxRaw(`layer() = layer( <layer-name> )`)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("@import")}}
- [CSS at-rule functions](/en-US/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [CSS cascading and inheritance](/en-US/docs/Web/CSS/Guides/Cascade) module
