---
title: container
slug: Web/CSS/container
page-type: css-shorthand-property
browser-compat: css.properties.container
---

{{CSSRef}}

The **container** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property establishes the element as a query container and specifies the name and type of the [containment context](/en-US/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) used in a [container query](/en-US/docs/Web/CSS/CSS_containment/Container_queries).

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}

## Syntax

```css
/* <container-name> */
container: my-layout;

/* <container-name> / <container-type> */
container: my-layout / size;

/* Global Values */
container: inherit;
container: initial;
container: revert;
container: revert-layer;
container: unset;
```

### Values

- `<container-name>`
  - : A case-sensitive name for the containment context.
    More details on the syntax are covered in the {{cssxref("container-name")}} property page.
- `<container-type>`
  - : The type of containment context.
    More details on the syntax are covered in the {{cssxref("container-type")}} property page.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Establishing inline size containment

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [Using container size and style queries](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("@container")}} at-rule
- CSS {{Cssxref("contain")}} property
- CSS {{Cssxref("container-type")}} property
- CSS {{Cssxref("container-name")}} property
- CSS {{cssxref("content-visibility")}} property
