---
title: container-type
slug: Web/CSS/container-type
page-type: css-property
browser-compat: css.properties.container-type
---

{{CSSRef}}

An element can be established as a query container using the **`container-type`** [CSS](/en-US/docs/Web/CSS) property. `container-type` is used to define the type of container context used in a container query. The available container contexts are:

- [Size](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries): Enable selectively applying CSS rules to a container's children based on a general size or inline size condition such as a maximum or minimum dimension, aspect ratio, or orientation.
- [Scroll-state](/en-US/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries): Enable selectively applying CSS rules to a container's children based on a scroll-state condition such as whether the container is a scroll container that is partially scrolled or whether the container is a [snap target](/en-US/docs/Glossary/Scroll_snap#snap_target) that is snapped to its scroll snap container.

> [!NOTE]
> When using the `container-type` and {{cssxref("container-name")}} properties, the `style` and `layout` values of the {{cssxref("contain")}} property are automatically applied.

## Syntax

```css
/* Keyword values */
container-type: normal;
container-type: size;
container-type: inline-size;
container-type: scroll-state;

/* Two values */
container-type: size scroll-state;

/* Global Values */
container-type: inherit;
container-type: initial;
container-type: revert;
container-type: revert-layer;
container-type: unset;
```

### Values

The `container-type` property can take a single value from the list below, or two values — one of which must be `scroll-state` and the other can be `inline-size` or `size`. In other words, an element an be established as a size query container, a scroll-state query container, both, or neither.

- `inline-size`

  - : Establishes a query container for dimensional queries on the [inline axis](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) of the container.
    Applies layout, style, and inline-size containment to the element.

    Inline size containment is applied to the element. The inline size of the element can be [computed in isolation](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment), ignoring the child elements (see [Using CSS containment](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment)).

- `normal`

  - : Default value. The element is not a query container for any container size queries, but remains a query container for [container style queries](/en-US/docs/Web/CSS/@container#container_style_queries).

- `scroll-state`

  - : Establishes a query container for scroll-state queries on the container. In this case, the size of the element is not computed in isolation; no containment is applied.

- `size`

  - : Establishes a query container for container size queries in both the [inline and block](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) dimensions.
    Applies layout containment, style containment, and size containment to the container.

    Size containment is applied to the element in both the inline and block directions. The size of the element can be computed in isolation, ignoring the child elements.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Description

Container queries allow you to selectively apply styles inside a container based on conditional queries performed on the container. The {{cssxref("@container")}} at-rule is used to specify the tests performed on a container, and the rules that will apply to the container's contents if the query returns `true`.

The container query tests are only performed on elements with a `container-type` property, which defines the elements as a size or scroll-state container, or both.

### Container size queries

[Container size queries](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) allow you to selectively apply CSS rules to a container's descendants based on a size condition such as a maximum or minimum dimension, aspect ratio, or orientation.

Size containers additionally have size containment applied to them — this turns off the ability of an element to get size information from its contents, which is important for container queries to avoid infinite loops. If this were not the case, a CSS rule inside a container query could change the content size, which in turn could make the query evaluate to false and change the parent element's size, which in turn could change the content size and flip the query back to true, and so on. This sequence would then repeat itself in an endless loop.

The container size has to be set by context, such as block-level elements that stretch to the full width of their parent, or explicitly defined. If a contextual or explicit size is not available, elements with size containment will collapse.

### Container scroll-state queries

[Container scroll-state queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) allow you to selectively apply CSS rules to a container's children based on a scroll-state condition such as:

- Whether the container's contents are partially scrolled.
- Whether the container is a snap target that is snapped to a scroll snap container.
- Whether the container is positioned via [`position: sticky`](/en-US/docs/Web/CSS/display) and stuck to a boundary of a {{glossary("scroll container", "scrolling container")}}.

In the first case, the queried container is the scroll container itself. In the other two cases the queried container is an element that is affected by the scroll position of an ancestor scroll container.

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

- [CSS container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [Using container size and style queries](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Using container scroll-state queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} at-rule
- CSS {{Cssxref("container")}} shorthand property
- CSS {{Cssxref("container-name")}} property
- CSS {{cssxref("content-visibility")}} property
