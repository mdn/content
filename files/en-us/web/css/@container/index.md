---
title: "@container"
slug: Web/CSS/@container
page-type: css-at-rule
tags:
  - At-rule
  - CSS
  - CSS Containment
  - Reference
  - container
browser-compat: css.at-rules.container
---

{{CSSRef}}

The **`@container`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) is a conditional group rule that applies styles to a [containment context](/en-US/docs/Web/CSS/CSS_Container_Queries#naming_containment_contexts).
Style declarations are filtered by a condition and applied to the container if the condition is true.
The condition is evaluated when the container changes size.

An optional case-sensitive `<container-name>` can be provided which filters the set of query containers considered to just those with a matching query container name.
Once an eligible query container has been selected for an element, each container feature in the `<container-condition>` is evaluated against that query container.

## Syntax

The `@container` at-rule has the following syntax:

```css
@container (width > 400px) {
  h2 {
    font-size: 1.5em;
  }
}

/* Specifying a container name */
@container sidebar (width > 400px) {
  h2 {
    font-size: 1.5em;
  }
}
```

### Logical keywords in container queries

Logical keywords can be used to define the container condition:

- `and` combines two or more conditions.
- `or` combines two or more conditions.
- `not` negates the condition. Only one 'not' condition is allowed per container query and cannot be used with the `and` or `or` keywords.

```css
@container (width > 400px) or (height > 400px) {
  /* <stylesheet> */
}

@container (width > 400px) and (orientation: landscape) {
  /* <stylesheet> */
}

@container (width > 400px) and (orientation: landscape) or (width > 800px) {
  /* <stylesheet> */
}

@container not (width > 400px) {
  /* <stylesheet> */
}
```

### Style container queries

Container queries can also evaluate the computed style of the container element.
The following container query checks if the {{cssxref("computed_value")}} of the the container element's `color` is `blue`:

```css
@container style(color: blue) {
  /* <stylesheet> */
}
```

### Descriptors

The following descriptors can be used within the container condition:

- `aspect-ratio`

  - : The {{cssxref("aspect-ratio")}} of the container calculated as the width to the height of the container expressed as a {{cssxref("ratio")}} value.

- `block-size`

  - : The {{cssxref("block-size")}} of the container expressed as a {{cssxref("length")}} value.

- `height`

  - : The height of the container expressed as a {{cssxref("length")}} value.

- `inline-size`

  - : The {{cssxref("inline-size")}} of the container expressed as a {{cssxref("length")}} value.

- `orientation`

  - : The orientation of the container, either `landscape` or `portrait`.

- `width`
  - : The width of the container expressed as a {{cssxref("length")}} value.

## Examples

### Basic example

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

A container context can be created using the `container-type` property:

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

### Named container example

Given the following HTML example which is a card component with an image, a title, and some text:

```html
<div class="container">
  <div class="card">
    <img
      src="image.png"
      alt="A mostly white cat with a black heart on the forehead." />
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

- [Container queries](/en-US/docs/Web/CSS/CSS_Container_Queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
