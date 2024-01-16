---
title: "@container"
slug: Web/CSS/@container
page-type: css-at-rule
browser-compat: css.at-rules.container
---

{{CSSRef}}

The **`@container`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) is a conditional group rule that applies styles to a [containment context](/en-US/docs/Web/CSS/CSS_container_queries#naming_containment_contexts).
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

- `<container-condition>`
  - : A set of features that are evaluated against the query container when the size of the container changes.
    Styles defined in the `<stylesheet>` are applied if the condition is true.
- `<stylesheet>`
  - : A set of CSS declarations.

### Logical keywords in container queries

Logical keywords can be used to define the container condition:

- `and` combines two or more conditions.
- `or` combines two or more conditions.
- `not` negates the condition. Only one 'not' condition is allowed per container query and cannot be used with the `and` or `or` keywords.

```css
@container (width > 400px) and (height > 400px) {
  /* <stylesheet> */
}

@container (width > 400px) or (height > 400px) {
  /* <stylesheet> */
}

@container not (width < 400px) {
  /* <stylesheet> */
}
```

### Named containment contexts

A containment context can be named using the {{cssxref("container-name")}} property.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

The shorthand syntax for this is to use {{cssxref("container")}} in the form `container: <name> / <type>`, for example:

```css
.post {
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

### Setting styles based on a container's size

Consider the following example of a card component with a title and some text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

A container context can be created using the `container-type` property, in this case using the `inline-size` value on the `.post` class.
You can then use the `@container` at-rule to apply styles to the element with the `.card` class in a container that's narrower than `650px`.

```js hidden
const post = document.querySelector(".post");
const span = document.createElement("span");
span.innerHTML = ".post width: " + post.clientWidth + "px";
post.parentNode.insertBefore(span, post.nextSibling);
// update on resize
window.addEventListener("resize", () => {
  span.innerHTML = ".post width: " + post.clientWidth + "px";
});
```

```css hidden
span {
  display: block;
  text-align: center;
}
.card {
  margin: 10px;
  border: 2px dotted;
  font-size: 1.5em;
}
.post {
  border: 2px solid;
}
```

```css
/* A container context based on inline size */
.post {
  container-type: inline-size;
}

/* Apply styles if the container is narrower than 650px */
@container (width < 650px) {
  .card {
    width: 50%;
    background-color: gray;
    font-size: 1em;
  }
}
```

{{EmbedLiveSample("Setting_styles_based_on_a_container's_size", "100%", 230)}}

### Creating named container contexts

Given the following HTML example which is a card component with a title and some text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

First, create a container context using the `container-type` and `container-name` properties.
The shorthand syntax for this declaration is described in the {{cssxref("container")}} page.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Next, target that container by adding the name to the container query:

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Nested container queries

It's not possible to target multiple containers in a single container query.
It is possible to nest container queries which has the same effect.

The following query evaluates to true and applies the declared style if the container named `summary` is wider than `400px` and has an ancestor container wider than `800px`:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Style container queries

{{CSSRef}}{{SeeCompatTable}}

Container queries can also evaluate the computed style of the container element.
The following container query checks if the {{cssxref("computed_value")}} of the container element's `--accent-color` is `blue`:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> **Note:** If a custom property has a value of `blue`, the equivalent hexidecimal code `#0000ff` will not match unless the property has been defined as a color with {{cssxref("@property")}} so the browser can properly compare computed values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Container queries](/en-US/docs/Web/CSS/CSS_container_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
