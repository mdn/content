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

An optional case-sensitive {{cssxref("container-name")}} can be provided which filters the set of query containers considered to just those with a matching query container name.
Once an eligible query container has been selected for an element, each container feature in the `<container-condition>` is evaluated against that query container.

## Syntax

The `@container` at-rule has the following syntax:

```plain
@container <container-condition> {
  <stylesheet>
}
```

For example:

```css
@container (width > 400px) {
  h2 {
    font-size: 1.5em;
  }
}
```

### Values

- `<container-condition>`: A set of features that are evaluated against the query container.
  The condition is evaluated when the container changes size and the styles defined in the `<stylesheet>` are applied if the condition is true.
  More details on the syntax are covered in the following sections.
- `<stylesheet>`: A set of CSS declarations.

### Logical keywords in container queries

Logical keywords can be used to define the container condition:

- `and` combines two or more conditions.
- `or` combines two or more conditions.
- `not` negates the condition. Only one 'not' condition is allowed per container query and cannot be used with the `and` or `or` keywords.

```css
@container not (width < 400px) {
  /* <stylesheet> */
}

@container (width > 400px) and (height > 400px) {
  /* <stylesheet> */
}

@container (width > 400px) or (height > 400px) {
  /* <stylesheet> */
}

@container (width > 400px) and (width > 800px) or (orientation: portrait) {
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

### Named containment contexts

A containment context can be named using the {{cssxref("container-name")}} property.

```css
.container {
  container-name: sidebar;
  container-type: inline-size;
}
```

The shorthand syntax for this is to use {{cssxref("container")}} in the form `container: <name> / <type>`, for example:

```css
.container {
  container: sidebar / inline-size;
}
```

In container queries, the {{cssxref("container-name")}} property is used to filter the set of containers to those with a matching query container name:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details about usage and naming restrictions are described in the {{cssxref("container-name")}} page.

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

  - : The [orientation](/en-US/docs/Web/CSS/@media/orientation) of the container, either `landscape` or `portrait`.

- `width`
  - : The width of the container expressed as a {{cssxref("length")}} value.

## Examples

### Basic example

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

A container context can be created using the `container-type` property:

```css
.container {
  container-type: inline-size;
}
```

The following example will apply styles to the `.card` element if it's in a container that is wider than 400px and the container's `background-color` is `blue`:

```css
@container (min-width: 400px) and style(background-color: blue) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
```

### Named container contexts

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

First create a container context using `container-type`, add the `container-name` property.

> **Note:** A shorthand syntax for this declaration is described in the {{cssxref("container")}} page.

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

### Nested container queries

It's not possible to target multiple containers in a single container query.
It is possible to nest container queries which has the same effect.

The following query evaluates to true and applies a style to child elements if the container named `card` is wider than 400px and it has an ancestor container that meets the style condition:

```css
@container card (min-width: 400px) {
  @container style(--responsive: true) {
    /* <stylesheet> */
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
