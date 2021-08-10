---
title: list-style-image
slug: Web/CSS/list-style-image
tags:
  - CSS
  - CSS Lists
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.list-style-image
---
{{CSSRef}}

The **`list-style-image`** [CSS](/en-US/docs/Web/CSS) property sets an image to be used as the list item marker.

It is often more convenient to use the shorthand {{ cssxref("list-style") }}.

{{EmbedInteractiveExample("pages/css/list-style-image.html")}}

> **Note:** This property is applied to list items, i.e. elements with `{{cssxref("display")}}: list-item;` [by default](https://www.w3.org/TR/html5/rendering.html#lists) this includes {{HTMLElement("li")}} elements. Because this property is inherited, it can be set on the parent element (normally {{HTMLElement("ol")}} or {{HTMLElement("ul")}}) to let it apply to all list items.

## Syntax

```css
/* Keyword values */
list-style-image: none;

/* <url> values */
list-style-image: url('starsolid.gif');

/* valid image values */
list-style-image: linear-gradient(to left bottom, red, blue);

/* Global values */
list-style-image: inherit;
list-style-image: initial;
list-style-image: revert;
list-style-image: unset;
```

### Values

- {{cssxref("&lt;image&gt;")}}
  - : A valid image to use as the marker.
- `none`
  - : Specifies that no image is used as the marker. If this value is set, the marker defined in {{ Cssxref("list-style-type") }} will be used instead.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using a url value

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

#### CSS

```css
ul {
  list-style-image: url("starsolid.gif");
}
```

#### Result

{{ EmbedLiveSample('Using_a_url_value') }}

### Using a gradient

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

#### CSS

```css
ul {
  font-size: 200%;
  list-style-image: linear-gradient(to left bottom, red, blue);
}
```

#### Result

{{ EmbedLiveSample('Using_a_gradient') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("list-style")}}, {{Cssxref("list-style-type")}}, {{Cssxref("list-style-position")}}
- {{cssxref("url()", "url()")}} function
