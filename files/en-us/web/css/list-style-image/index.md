---
title: list-style-image
slug: Web/CSS/list-style-image
page-type: css-property
browser-compat: css.properties.list-style-image
---

{{CSSRef}}

The **`list-style-image`** [CSS](/en-US/docs/Web/CSS) property sets an image to be used as the list item marker.

It is often more convenient to use the shorthand {{ cssxref("list-style") }}.

{{EmbedInteractiveExample("pages/css/list-style-image.html")}}

> [!NOTE]
> This property is applied to list items, i.e. elements with `{{cssxref("display")}}: list-item;` [by default](https://html.spec.whatwg.org/multipage/rendering.html#lists) this includes {{HTMLElement("li")}} elements. Because this property is inherited, it can be set on the parent element (normally {{HTMLElement("ol")}} or {{HTMLElement("ul")}}) to let it apply to all list items.

## Syntax

```css
/* Keyword values */
list-style-image: none;

/* <url> values */
list-style-image: url("star-solid.gif");

/* valid image values */
list-style-image: linear-gradient(to left bottom, red, blue);

/* Global values */
list-style-image: inherit;
list-style-image: initial;
list-style-image: revert;
list-style-image: revert-layer;
list-style-image: unset;
```

### Values

- {{cssxref("&lt;image&gt;")}}
  - : A valid image to use as the marker.
- `none`
  - : Specifies that no image is used as the marker. If this value is set, the marker defined in {{ Cssxref("list-style-type") }} will be used instead. This is the default value for {{cssxref("list-style")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using a url value

This example has a star as a marker, which we include using the {{cssxref("url_value", "&lt;url&gt;")}} image function.

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
  list-style-image: url("star-solid.gif");
}
```

#### Result

{{ EmbedLiveSample('Using_a_url_value') }}

### Using a gradient

This example has a [CSS gradient](/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients) as a marker, which we create uses the {{cssxref("gradient/linear-gradient", "linear-gradient()")}} image function.

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

- {{Cssxref("list-style")}} shorthand
- {{Cssxref("list-style-type")}} property
- {{Cssxref("list-style-position")}} property
- {{cssxref("::marker")}} pseudo-element
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
