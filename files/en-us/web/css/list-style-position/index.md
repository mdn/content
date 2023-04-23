---
title: list-style-position
slug: Web/CSS/list-style-position
page-type: css-property
browser-compat: css.properties.list-style-position
---

{{CSSRef}}

The **`list-style-position`** [CSS](/en-US/docs/Web/CSS) property sets the position of the {{cssxref("::marker")}} relative to a list item.

{{EmbedInteractiveExample("pages/css/list-style-position.html")}}

## Syntax

```css
/* Keyword values */
list-style-position: inside;
list-style-position: outside;

/* Global values */
list-style-position: inherit;
list-style-position: initial;
list-style-position: revert;
list-style-position: revert-layer;
list-style-position: unset;
```

The `list-style-position` property is specified as one of the keyword values listed below.

### Values

- `inside`
  - : The {{cssxref("::marker")}} is the first element among the list item's contents.
- `outside`
  - : The {{cssxref("::marker")}} is outside the principal block box.

## Description

This property is applied to list items, i.e., elements with `{{cssxref("display")}}: list-item;`. [By default](https://html.spec.whatwg.org/multipage/rendering.html#lists) this includes {{HTMLElement("li")}} elements. Because this property is inherited, it can be set on the parent element (normally {{HTMLElement("ol")}} or {{HTMLElement("ul")}}) to let it apply to all list items.

If a block element is the first child of a list element declared as `list-style-position: inside`, then the block element is placed on the line after the marker-box.

It is often more convenient to use the shorthand {{cssxref("list-style")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting list item position

#### HTML

```html
<ul class="inside">
  List 1
  <li>List Item 1-1</li>
  <li>List Item 1-2</li>
  <li>List Item 1-3</li>
  <li>List Item 1-4</li>
</ul>
<ul class="outside">
  List 2
  <li>List Item 2-1</li>
  <li>List Item 2-2</li>
  <li>List Item 2-3</li>
  <li>List Item 2-4</li>
</ul>
<ul class="inside-img">
  List 3
  <li>List Item 3-1</li>
  <li>List Item 3-2</li>
  <li>List Item 3-3</li>
  <li>List Item 3-4</li>
</ul>
```

#### CSS

```css
.inside {
  list-style-position: inside;
  list-style-type: square;
}

.outside {
  list-style-position: outside;
  list-style-type: circle;
}

.inside-img {
  list-style-position: inside;
  list-style-image: url("starsolid.gif");
}
```

#### Result

{{EmbedLiveSample("Setting_list_item_position", 200, 420)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("list-style")}}, {{Cssxref("list-style-type")}}, {{Cssxref("list-style-image")}}
