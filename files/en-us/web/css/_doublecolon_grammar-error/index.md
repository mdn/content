---
title: ::grammar-error
slug: Web/CSS/::grammar-error
page-type: css-pseudo-element
browser-compat: css.selectors.grammar-error
---

{{CSSRef}}

The **`::grammar-error`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents a text segment which the {{glossary("user agent")}} has flagged as grammatically incorrect.

## Allowable properties

Only a small subset of CSS properties can be used in a rule with `::grammar-error` in its selector:

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("cursor")}}
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} and its longhands
- {{cssxref("text-decoration")}} and its associated properties
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-shadow")}}

## Syntax

```css
::grammar-error {
  /* ... */
}
```

## Examples

### Basic document grammar check

In this example, eventual supporting browsers should highlight any flagged grammatical errors with the styles shown.

#### HTML

```html
<p contenteditable spellcheck="true">
  My friends is coming to the party tonight.
</p>
```

#### CSS

```css
::grammar-error {
  text-decoration: underline red;
  color: red;
}
```

#### Result

{{EmbedLiveSample('Basic_document_grammar_check', '100%', 60)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("::spelling-error")}}
