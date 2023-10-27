---
title: container-type
slug: Web/CSS/container-type
page-type: css-property
browser-compat: css.properties.container-type
---

{{CSSRef}}

An element can be established as a query container for [container size queries](/en-US/docs/Web/CSS/CSS_container_queries) using `container-type` property. The **container-type** [CSS](/en-US/docs/Web/CSS) property is used to define the [type of size containment](/en-US/docs/Web/CSS/CSS_container_queries#naming_containment_contexts) used in a container query.

Size containments turn off the ability for an element to get size information from its contents. This is important for container queries to avoid infinite loop where a CSS rule inside container query changes the content size, which in turn makes the query false and changes the parent element's size. So the container size has to be explicit or set by context, e.g. block elements and elements in grid and flex stretch to full width. If explicit size is not available then elements with size containment will collapse.

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

    Size containment is applied to the element in both the inline and block directions. The size of the element can be computed in isolation, ignoring the child elements.

- `inline-size`

  - : Establishes a query container for dimensional queries on the [inline axis](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) of the container.
    Applies layout, style, and inline-size containment to the element.

    Inline size containment is applied to the element. The inline size of the element can be computed in isolation, ignoring the child elements.

- `normal`
  - : The element is not a query container for any container size queries, but remains a query container for container style queries.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Establishing inline size containment

Given the following HTML example which is a card component with an image, a title, and some text:

```html
<div class="container">
  <div class="card">
    <h3>Normal card</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>

<div class="container wide">
  <div class="card">
    <h3>Wider card</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>
```

To create a container context, add the `container-type` property to an element.
The following uses the `inline-size` value to create a containment context for the [inline axis](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) of the container:

```css
.container {
  container-type: inline-size;
  width: 300px;
  height: 120px;
}

.wide {
  width: 500px;
}
```

```css hidden
h3 {
  height: 2rem;
  margin: 0.5rem;
}

.card {
  height: 100%;
}

.content {
  background-color: wheat;
  height: 100%;
}

.container {
  margin: 1rem;
  border: 2px dashed red;
  overflow: hidden;
}
```

Writing a container query via the {{Cssxref("@container")}} at-rule will apply styles to the elements of the container when it is wider than 400px:

```css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

{{EmbedLiveSample('Establishing_inline_size_containment', '100%', 300)}}

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
