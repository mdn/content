---
title: container-name
slug: Web/CSS/container-name
page-type: css-property
tags:
  - container queries
  - CSS
  - CSS Containment
  - Reference
  - Property
browser-compat: css.properties.container-name
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
    <img src="image.png" alt="Cat with two different color eyes" />
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

## Browser compatibility

{{Compat}}

## See also

- [CSS container queries](/en-US/docs/Web/CSS/CSS_Container_Queries)
- {{Cssxref("@container")}} at-rule
- CSS {{Cssxref("container")}} shorthand property
- CSS {{Cssxref("container-type")}} property
- CSS {{cssxref("content-visibility")}} property
