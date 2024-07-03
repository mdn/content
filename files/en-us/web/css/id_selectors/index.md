---
title: ID selectors
slug: Web/CSS/ID_selectors
page-type: css-selector
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

Note that syntactically (but not specificity-wise), this is equivalent to the following [attribute selector](/en-US/docs/Web/CSS/Attribute_selectors):

```css
[id=id_value] { style properties }
```

The `id_value` value must be a valid [CSS identifier](/en-US/docs/Web/CSS/ident).

## Examples

### Valid ID selectors

#### HTML

```html
<div id="identified">This div has a special ID on it!</div>
<div>This is just a regular div.</div>
```

#### CSS

```css
#identified {
  background-color: skyblue;
}
```

#### Result

{{EmbedLiveSample("Examples", '100%', 50)}}

### Invalid ID selectors

ID selectors must be valid CSS identifiers.

```css example-bad
#item?one {
  background-color: green;
}

#123item {
  background-color: green;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Selectors](/en-US/docs/Web/CSS/CSS_selectors)
- [Learn CSS: Selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors)
