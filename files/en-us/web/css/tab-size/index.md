---
title: tab-size
slug: Web/CSS/tab-size
page-type: css-property
browser-compat: css.properties.tab-size
---

{{CSSRef}}

The **`tab-size`** [CSS](/en-US/docs/Web/CSS) property is used to customize the width of tab characters (U+0009).

{{EmbedInteractiveExample("pages/css/tab-size.html")}}

## Syntax

```css
/* <number> values */
tab-size: 4;
tab-size: 0;

/* <length> values */
tab-size: 10px;
tab-size: 2em;

/* Global values */
tab-size: inherit;
tab-size: initial;
tab-size: revert;
tab-size: revert-layer;
tab-size: unset;
```

### Values

- {{CSSxRef("&lt;number&gt;")}}
  - : A multiple of the advance width of the space character (U+0020) to be used as the width of tabs. Must be non-negative. The advance width means the distance a cursor or a print head moves before printing the next character.
- {{CSSxRef("&lt;length&gt;")}}
  - : The width of tabs. Must be non-negative.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Expanding by character count

```css
pre {
  tab-size: 4; /* Set tab size to 4 characters wide */
}
```

### Collapse tabs

```css
pre {
  tab-size: 0; /* Remove indentation */
}
```

### Default tab size vs custom sizes

This example compares a default tab size with a custom tab size. Note that {{cssxref("white-space")}} is set to `pre` to prevent the tabs from collapsing.

#### HTML

```html
<p>no tab</p>
<p>&#0009;default tab size of 8 characters wide</p>
<p class="custom-number">&#0009;custom tab size of 3 characters wide</p>
<p>&nbsp;&nbsp;&nbsp;3 spaces, equivalent to the custom tab size</p>
<p class="custom-length">&#0009;custom tab size of 50px wide</p>
```

#### CSS

```css hidden
body {
  border: 1px solid red;
  margin: 1rem;
}
```

```css
p {
  white-space: pre;
}

.custom-number {
  tab-size: 3;
}

.custom-length {
  tab-size: 50px;
}
```

#### Result

{{EmbedLiveSample("Comparing_to_the_default_size", "100%", "250")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref('white-space')}}
