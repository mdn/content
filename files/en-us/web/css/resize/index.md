---
title: resize
slug: Web/CSS/resize
page-type: css-property
browser-compat: css.properties.resize
---

{{CSSRef}}

The **`resize`** [CSS](/en-US/docs/Web/CSS) property sets whether an element is resizable, and if so, in which directions.

{{EmbedInteractiveExample("pages/css/resize.html")}}

`resize` does not apply to the following:

- Inline elements
- Block elements for which the {{cssxref("overflow")}} property is set to `visible` or `clip`

## Syntax

```css
/* Keyword values */
resize: none;
resize: both;
resize: horizontal;
resize: vertical;
resize: block;
resize: inline;

/* Global values */
resize: inherit;
resize: initial;
resize: revert;
resize: revert-layer;
resize: unset;
```

The `resize` property is specified as a single keyword value from the list below.

### Values

- `none`
  - : The element offers no user-controllable method for resizing it.
- `both`
  - : The element displays a mechanism for allowing the user to resize it, which may be resized both horizontally and vertically.
- `horizontal`
  - : The element displays a mechanism for allowing the user to resize it in the _horizontal_ direction.
- `vertical`
  - : The element displays a mechanism for allowing the user to resize it in the _vertical_ direction.
- `block`
  - : The element displays a mechanism for allowing the user to resize it in the _block_ direction (either horizontally or vertically, depending on the {{cssxref("writing-mode")}} and {{cssxref("direction")}} value).
- `inline`
  - : The element displays a mechanism for allowing the user to resize it in the _inline_ direction (either horizontally or vertically, depending on the {{cssxref("writing-mode")}} and {{cssxref("direction")}} value).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Disabling resizability of text areas

In many browsers, {{HTMLElement("textarea")}} elements are resizable by default. You may override this behavior with the `resize` property.

#### HTML

```html
<textarea>Type some text here.</textarea>
```

#### CSS

```css
textarea {
  resize: none; /* Disables resizability */
}
```

#### Result

{{EmbedLiveSample("Disabling_resizability_of_text_areas","200","100")}}

### Using resize with arbitrary elements

You can use the `resize` property to make any element resizable. In the example below, a resizable {{HTMLElement("div")}} contains a resizable paragraph ({{HTMLElement("p")}} element).

#### HTML

```html
<div class="resizable">
  <p class="resizable">
    This paragraph is resizable in all directions, because the CSS `resize`
    property is set to `both` on this element.
  </p>
</div>
```

#### CSS

```css
.resizable {
  resize: both;
  overflow: scroll;
  border: 1px solid black;
}

div {
  height: 300px;
  width: 300px;
}

p {
  height: 200px;
  width: 200px;
}
```

#### Result

{{EmbedLiveSample("Using_resize_with_arbitrary_elements","450","450")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
