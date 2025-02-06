---
title: ::spelling-error
slug: Web/CSS/::spelling-error
page-type: css-pseudo-element
browser-compat: css.selectors.spelling-error
---

{{CSSRef}}

The **`::spelling-error`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents a text segment which the {{glossary("user agent")}} has flagged as incorrectly spelled.

## Allowable properties

Only a small subset of CSS properties can be used in a rule with `::spelling-error` in its selector:

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
::spelling-error {
  /* ... */
}
```

## Examples

### Basic document spell check

In this example, eventual supporting browsers should highlight any flagged spelling errors with the styles shown.

#### HTML

```html
<p contenteditable spellcheck="true">
  My friends are coegdfgfddffbgning to the party tonight.
</p>
```

#### CSS

```css
::spelling-error {
  text-decoration: wavy red underline;
}
```

#### Result

{{EmbedLiveSample('Basic_document_spell_check', '100%', 60)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("::grammar-error")}}
