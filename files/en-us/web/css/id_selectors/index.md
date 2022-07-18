---
title: ID selectors
slug: Web/CSS/ID_selectors
tags:
  - CSS
  - Reference
  - Selector
  - Selectors
browser-compat: css.selectors.id
---
{{CSSRef}}

The CSS **ID selector** matches an element based on the value of the element's [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attribute. In order for the element to be selected, its `id` attribute must match exactly the value given in the selector.

```css
/* The element with id="demo" */
#demo {
  border: red 2px solid;
}
```

## Syntax

```css
#id_value { style properties }
```

Note that syntactically (but not specificity-wise), this is equivalent to the following {{Cssxref("Attribute_selectors", "attribute selector")}}:

```css
[id=id_value] { style properties }
```

## Examples

### CSS

```css
#identified {
  background-color: skyblue;
}
```

### HTML

```html
<div id="identified">This div has a special ID on it!</div>
<div>This is just a regular div.</div>
```

### Result

{{EmbedLiveSample("Examples", '100%', 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Selectors](/en-US/docs/Web/CSS/CSS_Selectors)
- [Learn CSS: Selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors)
