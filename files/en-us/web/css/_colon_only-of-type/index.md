---
title: ':only-of-type'
slug: Web/CSS/:only-of-type
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.only-of-type
---
{{CSSRef}}

The **`:only-of-type`** CSS [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element that has no siblings of the same type.

```css
/* Selects each <p>, but only if it is the */
/* only <p> element inside its parent */
p:only-of-type {
  background-color: lime;
}
```

> **Note:** As originally defined, the selected element had to have a parent. Beginning with Selectors Level 4, this is no longer required.

## Syntax

{{csssyntax}}

## Examples

### Styling elements with no siblings of the same type

#### HTML

```html
<main>
  <div>I am `div` #1.</div>
  <p>I am the only `p` among my siblings.</p>
  <div>I am `div` #2.</div>
  <div>I am `div` #3.
    <i>I am the only `i` child.</i>
    <em>I am `em` #1.</em>
    <em>I am `em` #2.</em>
  </div>
</main>
```

#### CSS

```css
main :only-of-type {
  color: red;
}
```

#### Result

{{EmbedLiveSample('Styling_elements_with_no_siblings_of_the_same_type','100%',180)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":only-child")}}
- {{Cssxref(":first-of-type")}}
- {{Cssxref(":last-of-type")}}
- {{Cssxref(":nth-of-type")}}
