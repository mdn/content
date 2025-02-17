---
title: layer()
slug: Web/CSS/@import/layer_function
page-type: css-function
browser-compat: css.at-rules.import.layer
---

{{CSSRef}}

The **`layer()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is used along with the [`@import`](/en-US/docs/Web/CSS/@import) [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule) to put the imported resource in a separate named [cascade layer](/en-US/docs/Web/CSS/@layer).

## Syntax

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

The `framework.themes.dark` is the layer into which the CSS file would be imported.

## Formal syntax

{{CSSSyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("@import")}}
- [CSS cascading and inheritance](/en-US/docs/Web/CSS/CSS_cascade) module
