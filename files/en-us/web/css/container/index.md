---
title: Container shorthand
slug: Web/CSS/container
page-type: guide
tags:
  - container
  - CSS
  - CSS Containment
  - Reference
  - Property
spec-urls: https://www.w3.org/TR/css-contain-3/#container-shorthand
---

{{CSSRef}}

The **container** [CSS](/en-US/docs/Web/CSS) property is shorthand usage for giving a name to a [containment context](/en-US/docs/Web/CSS/CSS_Container_Queries#naming_containment_contexts) used in a [container query](/en-US/docs/Web/CSS/CSS_Container_Queries).

## Syntax

```css
container: <container-name> <container-type>;
```

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

The more explicit way to create a container context using `container-type` and `container-name` is:

```css
.container {
  container-type: inline-size;
  container-name: sidebar;
}
```

The shorthand for this is the following:

```css
.container {
  container: sidebar inline-size;
}
```

You can then target that container by adding the name to the container query:

```css
@container sidebar (min-width: 400px) {
  .card {
    h2 {
      font-size: 1.5rem;
    }
  }
}
```

## Specifications

{{Specifications}}

## See also

- {{Cssxref("@container")}}
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
