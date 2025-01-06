---
title: text-wrap-mode
slug: Web/CSS/text-wrap-mode
page-type: css-property
browser-compat: css.properties.text-wrap-mode
---

{{CSSRef}}

The **`text-wrap-mode`** [CSS](/en-US/docs/Web/CSS) property controls whether the text inside an element is wrapped. The different values provide alternate ways of wrapping the content of a block element. It can also be set, and reset, using the {{CSSXRef("text-wrap")}} shorthand or the {{CSSXRef("white-space")}} shorthand.

> [!NOTE]
> The {{CSSxRef("white-space-collapse")}} and `text-wrap-mode` properties can be declared together using the {{CSSxRef("white-space")}} shorthand property.

> [!NOTE]
> The name of this property is a placeholder, pending the CSSWG finding a better name.

{{EmbedInteractiveExample("pages/css/text-wrap-mode.html")}}

## Syntax

```css
/* Keyword values */
text-wrap-mode: wrap;
text-wrap-mode: nowrap;

/* Global values */
text-wrap-mode: inherit;
text-wrap-mode: initial;
text-wrap-mode: revert;
text-wrap-mode: revert-layer;
text-wrap-mode: unset;
```

## Values

This property specifies whether lines may wrap at unforced soft wrap opportunities. Possible values:

- `wrap`
  - : Text is wrapped across lines at appropriate characters (for example spaces, in languages like English that use space separators) to minimize overflow. This is the default value.
- `nowrap`
  - : Text does not wrap across lines. It will overflow its containing element rather than breaking onto a new line.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Wrapping content

The default setting is to wrap the content so the `text-wrap-mode` property is not necessary. In this example the content will flow over to the next line so that it fits in the box, the last line is longer that the containing box so overflows.

#### HTML

```html
<div class="box">CSS IS AWESOME</div>
```

#### CSS

```css
.box {
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 64px;
  box-sizing: border-box;
  border: 4px solid black;
  padding: 0px 3px;
  width: 223px;
  text-wrap-mode: wrap;
}
```

#### Result

{{EmbedLiveSample("wrapping_content", "100%", 250)}}

### Not wrapping content

In this example the content will **not** flow over to the next line so that it fits in the box as the content has been specifically told not to wrap with `text-wrap-mode: nowrap;`, the content is longer that the containing box so overflows.

#### HTML

```html
<div class="box">CSS IS AWESOME</div>
```

#### CSS

```css
.box {
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 64px;
  box-sizing: border-box;
  border: 4px solid black;
  padding: 0px 3px;
  width: 223px;
  text-wrap-mode: nowrap;
}
```

#### Result

{{EmbedLiveSample("not_wrapping_content", "100%",100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("text-wrap")}}
- {{CSSxRef("text-wrap-style")}}
