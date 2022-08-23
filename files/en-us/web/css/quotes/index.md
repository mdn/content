---
title: quotes
slug: Web/CSS/quotes
tags:
  - CSS
  - CSS Property
  - Generated Content
  - Layout
  - Reference
  - Web
  - recipe:css-property
browser-compat: css.properties.quotes
---
{{CSSRef}}

The **`quotes`** [CSS](/en-US/docs/Web/CSS) property sets how the browser should render quotation marks that are added using the `open-quotes` or `close-quotes` values of the CSS [`content`](/en-US/docs/Web/CSS/content) property.

{{EmbedInteractiveExample("pages/css/quotes.html")}}

## Syntax

```css
/* Keyword value */
quotes: none;
quotes: auto;

/* <string> values */
quotes: "«" "»";           /* Set open-quote and close-quote to the French quotation marks */
quotes: "«" "»" "‹" "›";   /* Set two levels of quotation marks */

/* Global values */
quotes: inherit;
quotes: initial;
quotes: revert;
quotes: revert-layer;
quotes: unset;
```

### Values

- `none`
  - : The `open-quote` and `close-quote` values of the {{cssxref("content")}} property produce no quotation marks.
- `auto`
  - : Appropriate quote marks will be used for whatever language value is set on the selected elements (i.e. via the {{htmlattrxref("lang")}} attribute).
- `[<string> <string>]+`
  - : One or more pairs of {{cssxref("&lt;string&gt;")}} values for `open-quote` and `close-quote`. The first pair represents the outer level of quotation, the second pair is for the first nested level, next pair for third level and so on.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic quote marks

#### HTML

```html
<q>To be or not to be. That's the question!</q>
```

#### CSS

```css
q {
  quotes: '"' '"' "'" "'";
}
q::before {
  content: open-quote;
}
q::after {
  content: close-quote;
}
```

#### Result

{{EmbedLiveSample('Basic_quote_marks', "100%", 60)}}

### Auto quotes

For most browsers, the default value of `quotes` is `auto` (Firefox 70+), or the browser otherwise had this default behavior (Chromiums, Safari, Edge), so this example works without it being explicitly being set.

#### HTML

```html
<div lang="fr">
  <q>Ceci est une citation française.</q>
<div>
<hr>
<div lang="ru">
  <q>Это русская цитата</q>
<div>
<hr>
<div lang="de">
  <q>Dies ist ein deutsches Zitat</q>
<div>
<hr>
<div lang="en">
  <q>This is an English quote.</q>
<div>
```

#### CSS

```css
/*q {
  quotes: auto;
}*/
```

#### Result

{{EmbedLiveSample('Auto_quotes', "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ Cssxref("contain") }}
- {{ Cssxref("content") }}
