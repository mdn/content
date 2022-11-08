---
title: Container type
slug: Web/CSS/container-type
page-type: guide
tags:
  - CSS
  - Guide
  - Reference
spec-urls: https://www.w3.org/TR/css-contain-3/#container-type
---

{{CSSRef}}

The **container-type** [CSS](/en-US/docs/Web/CSS) property is used to define the type of [containment context](/en-US/docs/Web/CSS/CSS_Container_Queries#naming_containment_contexts) used in a [container query](/en-US/docs/Web/CSS/CSS_Container_Queries).
The `container-type` property can have the following values:

- `size`
  - : Establishes a query container for dimensional queries on the block and inline axis.
    Applies layout, style, and size containment to the element.
- `inline-size`
  - : Establishes a query container for dimensional queries on the inline axis of the container.
    Applies layout, style, and inline-size containment to the element.
- `block-size`
  - : Establishes a query container for dimensional queries on the block axis of the container.
    Applies layout, style, and block-size containment to the element.

> **Note:** to understand what happens when you apply layout, style, and size containment to a box, see the documentation for {{cssxref("contain")}}.

## Example

Given the following HTML example which is a card component with an image, a title, and some text:

```html
<div class="container">
  <div class="card">
    <img src="image.png" alt="An awesome picture of a cat" />
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

To create a container context, add the `container-type` property:

```css
.container {
  container-type: inline-size;
}
```

You can then target that container by adding the name to the container query:

```css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
```

## Specifications

{{Specifications}}

## See also

- [Container queries](/en-US/docs/Web/CSS/CSS_Container_Queries)
- {{Cssxref("@container")}}
- {{Cssxref("contain")}}
- {{Cssxref("container-name")}}
- {{cssxref("content-visibility")}}
