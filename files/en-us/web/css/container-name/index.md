---
title: Container name
slug: Web/CSS/container-name
page-type: guide
tags:
  - container
  - CSS
  - CSS Containment
  - Reference
  - Property
spec-urls: https://www.w3.org/TR/css-contain-3/#container-name
---

{{CSSRef}}

The **container-name** [CSS](/en-US/docs/Web/CSS) property is used to give a name to a [containment context](/en-US/docs/Web/CSS/CSS_Container_Queries#naming_containment_contexts) used in a [container query](/en-US/docs/Web/CSS/CSS_Container_Queries).
The most common way that container queries are applied to elements is to use the nearest containment context as the query container.
When a containment context is given a name, it can be specifically referenced using the {{Cssxref("@container")}} at-rule.

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

When creating a container context using `container-type`, add the `container-name` property:

```css
.container {
  container-type: inline-size;
  container-name: sidebar;
}
```

You can then target that container by adding the name to the container query:

```css
@container sidebar (min-width: 400px) {
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
- {{Cssxref("container-type")}}
- {{cssxref("content-visibility")}}
