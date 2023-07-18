---
title: container-type
slug: Web/CSS/container-type
page-type: css-property
browser-compat: css.properties.container-type
---

{{CSSRef}}

The **container-type** [CSS](/en-US/docs/Web/CSS) property is used to define the [type of containment](/en-US/docs/Web/CSS/CSS_container_queries#naming_containment_contexts) used in a [container query](/en-US/docs/Web/CSS/CSS_container_queries).

## Syntax

```css
/* Keyword values */
container-type: normal;
container-type: size;
container-type: inline-size;

/* Global Values */
container-type: inherit;
container-type: initial;
container-type: revert;
container-type: revert-layer;
container-type: unset;
```

### Values

- `size`

  - : Establishes a query container for container size queries on both the inline and block axis in both the [inline and block](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) dimensions.
    Applies layout containment, style containment, and size containment to the container.

- `inline-size`

  - : Establishes a query container for dimensional queries on the [inline axis](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) of the container.
    Applies layout, style, and inline-size containment to the element.

- `normal`
  - : The element is not a query container for any container size queries, but remains a query container for container style queries.

> **Note:** to understand what happens when you apply layout, style, and size containment to a box, see the {{cssxref("contain")}} property.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

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

To create a container context, add the `container-type` property to an element.
The following uses the `inline-size` value to create a containment context for the [inline axis](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) of the container:

```css
.container {
  container-type: inline-size;
}
```

Writing a container query via the {{Cssxref("@container")}} at-rule will apply styles to the elements of the container when it is wider than 400px:

```css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
```

For more information on container queries, see the [CSS Container Queries](/en-US/docs/Web/CSS/CSS_container_queries) page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS container queries](/en-US/docs/Web/CSS/CSS_container_queries)
- {{Cssxref("@container")}} at-rule
- CSS {{Cssxref("container")}} shorthand property
- CSS {{Cssxref("container-name")}} property
- CSS {{cssxref("content-visibility")}} property
