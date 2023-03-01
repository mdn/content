---
title: container
slug: Web/CSS/container
page-type: css-shorthand-property
browser-compat: css.properties.container
---

{{CSSRef}}

The **container** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property establishes the element as a query container and specifies the name or name for the [containment context](/en-US/docs/Web/CSS/CSS_Container_Queries#naming_containment_contexts) used in a [container query](/en-US/docs/Web/CSS/CSS_Container_Queries).

## Syntax

```css
container: <container-name> / <container-type>;
```

### Values

- `<container-name>`
  - : A case-sensitive name for the containment context.
    More details on the syntax are covered in the {{cssxref("container-name")}} property page.
- `<container-type>`
  - : The type of containment context.
    More details on the syntax are covered in the {{cssxref("container-type")}} property page.

## Example

Given the following HTML example which is a card component with an image, a title, and some text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

The explicit way to create a container context is to declare a `container-type` with an optional `container-name`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

The `container` shorthand is intended to make this simpler to define in a single declaration:

```css
.post {
  container: sidebar / inline-size;
}
```

You can then target that container by name using the {{cssxref("@container")}} at-rule:

```css
@container sidebar (min-width: 400px) {
  /* <stylesheet> */
}
```

For more information on container queries, see the [CSS Container Queries](/en-US/docs/Web/CSS/CSS_Container_Queries) page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS container queries](/en-US/docs/Web/CSS/CSS_Container_Queries)
- {{Cssxref("@container")}} at-rule
- CSS {{Cssxref("contain")}} property
- CSS {{Cssxref("container-type")}} property
- CSS {{Cssxref("container-name")}} property
- CSS {{cssxref("content-visibility")}} property
