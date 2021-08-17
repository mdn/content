---
title: ':last-of-type'
slug: Web/CSS/:last-of-type
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.last-of-type
---
{{CSSRef}}

The **`:last-of-type`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents the last element of its type among a group of sibling elements.

```css
/* Selects any <p> that is the last element
   of its type among its siblings */
p:last-of-type {
  color: lime;
}
```

> **Note:** As originally defined, the selected element had to have a parent. Beginning with Selectors Level 4, this is no longer required.

## Syntax

{{csssyntax}}

## Examples

### Styling the last paragraph

#### HTML

```html
<h2>Heading</h2>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

#### CSS

```css
p:last-of-type {
  color: red;
  font-style: italic;
}
```

#### Result

{{EmbedLiveSample('Styling_the_last_paragraph')}}

### Nested elements

This example shows how nested elements can also be targeted. Note that the [universal selector](/en-US/docs/Web/CSS/Universal_selectors) (`*`) is implied when no simple selector is written.

#### HTML

```html
<article>
  <div>This `div` is first.</div>
  <div>This <span>nested `span` is last</span>!</div>
  <div>This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!</div>
  <b>This `b` qualifies!</b>
  <div>This is the final `div`!</div>
</article>
```

#### CSS

```css
article :last-of-type {
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

- {{cssxref(":last-child")}}, {{Cssxref(":nth-last-of-type")}}
