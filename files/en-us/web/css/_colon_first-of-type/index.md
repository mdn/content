---
title: ':first-of-type'
slug: Web/CSS/:first-of-type
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.first-of-type
---
{{CSSRef}}

The **`:first-of-type`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents the first element of its type among a group of sibling elements.

```css
/* Selects any <p> that is the first element
   of its type among its siblings */
p:first-of-type {
  color: red;
}
```

> **Note:** As originally defined, the selected element had to have a parent. Beginning with Selectors Level 4, this is no longer required.

## Syntax

{{csssyntax}}

## Examples

### Styling the first paragraph

#### HTML

```html
<h2>Heading</h2>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

#### CSS

```css
p:first-of-type {
  color: red;
  font-style: italic;
}
```

#### Result

{{EmbedLiveSample('Styling_the_first_paragraph')}}

### Nested elements

This example shows how nested elements can also be targeted. Note that the [universal selector](/en-US/docs/Web/CSS/Universal_selectors) (`*`) is implied when no simple selector is written.

#### HTML

```html
<article>
  <div>This `div` is first!</div>
  <div>This <span>nested `span` is first</span>!</div>
  <div>This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!</div>
  <div>This <span>nested `span` gets styled</span>!</div>
  <b>This `b` qualifies!</b>
  <div>This is the final `div`.</div>
</article>
```

#### CSS

```css
article :first-of-type {
  background-color: pink;
}
```

#### Result

{{EmbedLiveSample('Nested_elements', 500)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":first-child")}}, {{Cssxref(":last-of-type")}}, {{Cssxref(":nth-of-type")}}
