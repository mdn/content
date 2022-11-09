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

An optional `<container-name>` can be provided which filters the set of query containers considered to just those with a matching query container name.
Once an eligible query container has been selected for an element, each container feature in the `<container-condition>` is evaluated against that query container.

## Syntax

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

### Descriptors

The following descriptors can be used within the container condition:

- `aspect-ratio`

  - : The aspect ratio of the container calculated as the width to the height of the container expressed as a `<ratio>` value.

- `block-size`

  - : The block size of the container expressed as a `<length>` value.

- `inline-size`

  - : The inline size of the container expressed as a `<length>` value.

- `orientation`

  - : The orientation of the container, either `landscape` or `portrait`.

- `width`
  - : The width of the container expressed as a `<length>` value.

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

## Browser compatibility

{{Compat}}

## See also

- [Container queries](/en-US/docs/Web/CSS/CSS_Container_Queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("@container")}}
- {{Cssxref("content-visibility")}}
