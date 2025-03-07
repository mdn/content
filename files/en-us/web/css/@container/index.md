---
title: "@container"
slug: Web/CSS/@container
page-type: css-at-rule
browser-compat: css.at-rules.container
---

{{CSSRef}}

The **`@container`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule) is a conditional group rule that applies styles to a [containment context](/en-US/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts).
Style declarations are filtered by a condition and applied to the container if the condition is true.
The condition is evaluated when the queried container size, [`<style-feature>`](#container_style_queries), or scroll-state changes.

The {{cssxref("container-name")}} property specifies a list of query container names. These names can be used by `@container` rules to filter which query containers are targeted. The optional, case-sensitive `<container-name>` filters the query containers that are targeted by the query.

Once an eligible query container has been selected for an element, each container feature in the `<container-condition>` is evaluated against that query container.

## Syntax

The `@container` at-rule has the following syntax:

```plain
@container <container-condition># {
  <stylesheet>
}
```

For example:

```css
/* With a <size-query> */
@container (width > 400px) {
  h2 {
    font-size: 1.5em;
  }
}

/* With an optional <container-name> */
@container tall (height > 30rem) {
  p {
    line-height: 1.6;
  }
}

/* With a <scroll-state> */
@container scroll-state(scrollable: top) {
  .back-to-top-link {
    visibility: visible;
  }
}

/* With a <container-name> and a <scroll-state> */
@container sticky-heading scroll-state(stuck: top) {
  h2 {
    background: purple;
    color: white;
  }
}

/* Multiple queries in a single condition */
@container (width > 400px) and style(--responsive: true) {
  h2 {
    font-size: 1.5em;
  }
}

/* Condition list */
@container card (width > 400px), style(--responsive: true), scroll-state(stuck: top) {
  h2 {
    font-size: 1.5em;
  }
}
```

### Values

- `<container-condition>`

  - : An optional `<container-name>` and a `<container-query>`. Styles defined in the `<stylesheet>` are applied if the condition is true.

    - `<container-name>`
      - : Optional. The name of the container that the styles will be applied to when the query evaluates to true, specified as an {{cssxref("ident")}}.
    - `<container-query>`
      - : A set of features that are evaluated against the query container when the size, [`<style-feature>`](#container_style_queries), or scroll-state of the container changes.

- `<stylesheet>`
  - : A set of CSS rules or declarations.

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

The `<container-condition>` queries include [size](#size_container_descriptors) and [scroll-state](#scroll-state_container_descriptors) container descriptors.

#### Size container descriptors

The `<container-condition>` can include one or more boolean size queries, each within a set of parentheses. A size query includes a size descriptor, a value, and — depending on the descriptor — a comparison operator. The syntax for including multiple conditions is the same as for [`@media`](/en-US/docs/Web/CSS/@media) size feature queries.

```css
@container (min-width: 400px) { ... }
@container (orientation: landscape) and (width > 400px) { ... }
@container (15em <= block-size <= 30em) { ... }
```

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

#### Scroll-state container descriptors

Scroll-state container descriptors are specified inside the `<container-condition>` within a set of parentheses following the `scroll-state` keyword, for example:

```css
@container scroll-state(scrollable: top) { ... }
@container scroll-state(stuck: inline-end) { ... }
@container scroll-state(snapped: both) { ... }
```

Supported keywords for scroll-state container descriptors include physical and {{glossary("flow relative values")}}

- `scrollable`

  - : Queries whether the container can be scrolled in the given direction via user-initiated scrolling, such as by dragging the scrollbar or using a trackpad gesture. In other words, is there overflowing content in the given direction that can be scrolled to? Valid `scrollable` values include the following keywords:

    - `none`
      - : The container is not a {{glossary("scroll container")}} or otherwise cannot be scrolled in any direction.
    - `top`
      - : The container can be scrolled towards its top edge.
    - `right`
      - : The container can be scrolled towards its right-hand edge.
    - `bottom`
      - : The container can be scrolled towards its bottom edge.
    - `left`
      - : The container can be scrolled towards its left-hand edge.
    - `x`
      - : The container can be scrolled horizontally towards either or both of its left-hand or right-hand edges.
    - `y`
      - : The container can be scrolled vertically towards either or both of its top or bottom edges.
    - `block-start`
      - : The container can be scrolled towards its block-start edge.
    - `block-end`
      - : The container can be scrolled towards its block-end edge.
    - `inline-start`
      - : The container can be scrolled towards its inline-start edge.
    - `inline-end`
      - : The container can be scrolled towards its inline-end edge.
    - `block`
      - : The container can be scrolled in its block direction towards either or both of its block-start or block-end edges.
    - `inline`
      - : The container can be scrolled in its inline direction towards either or both of its inline-start and inline-end edges.

    If the test passes, the rules inside the `@container` block are applied to descendants of the scroll container.

    To evaluate whether a container is scrollable, without being concerned about the direction, use the `none` value with the `not` operator:

    ```css
    @container not scroll-state(scrollable: none) { ... }
    ```

- `snapped`

  - : Queries whether the container is, or will be, snapped to a [scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) container ancestor along the given axis. Valid `snapped` values include the following keywords:

    - `none`
      - : The container is not a scroll [snap target](/en-US/docs/Glossary/Scroll_snap#snap_target) for its ancestor scroll container. When implementing a `snapped: none` query, containers that _are_ snap targets for the scroll container will _not_ have the `@container` styles applied, whereas non-snap targets _will_ have the styles applied.
    - `x`
      - : The container is a horizontal scroll snap target for its ancestor scroll container, that is, it is snapping horizontally to its ancestor.
    - `y`
      - : The container is a vertical scroll snap target for its ancestor scroll container, that is, it is snapping vertically to its ancestor.
    - `block`
      - : The container is a block-axis scroll snap target for its ancestor scroll container, that is, it is snapping to its ancestor in the block direction.
    - `inline`
      - : The container is an inline-axis scroll snap target for its ancestor scroll container, that is, it is snapping to its ancestor in the inline direction.
    - `both`
      - : The container is both a horizontal and vertical scroll snap target for its ancestor scroll container and is snapping to its ancestor in both directions. The container won't match if it is only snapping to its ancestor along the horizontal _or_ vertical axis. It needs to be both.

    To evaluate a container with a non-`none` `snapped` scroll-state query, it must be a container with a scroll container ancestor having a {{cssxref("scroll-snap-type")}} value other than `none`. A `snapped: none` query will will match even when there is no scroll container ancestor.

    Evaluations occur when [`scrollsnapchanging`](/en-US/docs/Web/API/Element/scrollsnapchanging_event) events fire on the scroll snap container. If the test passes, the rules inside the `@container` block are applied to descendants of the container.

    To evaluate whether a container is a snap target, without being concerned about the direction, use the `none` value with the `not` operator:

    ```css
    @container not scroll-state(snapped: none) { ... }
    ```

- `stuck`

  - : Queries whether a container with a {{cssxref("position")}} value of [`sticky`](/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) is stuck to an edge of its scrolling container ancestor. Valid `stuck` values include the following keywords:

    - `none`
      - : The container is not stuck to any edges of its container. Note that `none` queries will match even if the container does not have `position: sticky` set on it.
    - `top`
      - : The container is stuck to the top edge of its container.
    - `right`
      - : The container is stuck to the right-hand edge of its container.
    - `bottom`
      - : The container is stuck to the bottom edge of its container.
    - `left`
      - : The container is stuck to the left-hand edge of its container.
    - `block-start`
      - : The container is stuck to the block-start edge of its container.
    - `block-end`
      - : The container is stuck to the block-end edge of its container.
    - `inline-start`
      - : The container is stuck to the inline-start edge of its container.
    - `inline-end`
      - : The container is stuck to the inline-end edge of its container.

    To evaluate a container with a non-`none` `stuck` scroll-state query, it must have `position: sticky` set on it, and be inside a scroll container. If the test passes, the rules inside the `@container` block are applied to descendants of the `position: sticky` container.

    It is possible for two values from opposite axes to match at the same time:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) { ... }
    ```

    However, two values from opposite edges will never match at the same time:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) { ... }
    ```

    To evaluate whether a container is stuck, without being concerned about the direction, use the `none` value with the `not` operator:

    ```css
    @container not scroll-state(stuck: none) { ... }
    ```

## Formal syntax

{{csssyntax}}

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
span.textContent = ".post width: " + post.clientWidth + "px";
post.parentNode.insertBefore(span, post.nextSibling);
// update on resize
window.addEventListener("resize", () => {
  span.textContent = ".post width: " + post.clientWidth + "px";
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
    background-color: lightgray;
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

### Container style queries

Container queries can also evaluate the computed style of the container element. A _container style query_ is a `@container` query that uses one or more `style()` functional notations. The boolean syntax and logic combining style features into a style query is the same as for [CSS feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

The parameter of each `style()` is a single `<style-feature>`. A **`<style-feature>`** is a valid CSS [declaration](/en-US/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), a CSS property, or a [`<custom-property-name>`](/en-US/docs/Web/CSS/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

A style feature without a value evaluates to true if the computed value is different from the initial value for the given property.

If the `<style-feature>` passed as the `style()` function's argument is a declaration, the style query evaluates to true if the declaration's value is the same as the computed value of that property for the container being queried. Otherwise, it resolves to false.

The following container query checks if the {{cssxref("computed_value")}} of the container element's `--accent-color` is `blue`:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> If a custom property has a value of `blue`, the equivalent hexadecimal code `#0000ff` will not match unless the property has been defined as a color with {{cssxref("@property")}} so the browser can properly compare computed values.

Style features that query a shorthand property are true if the computed values match for each of its longhand properties, and false otherwise. For example, `@container style(border: 2px solid red)` will resolve to true if all 12 longhand properties (`border-bottom-style`, etc.) that make up that shorthand are true.

The global `revert` and `revert-layer` are invalid as values in a `<style-feature>` and cause the container style query to be false.

### Scroll-state queries

See [Using container scroll-state queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) for full walkthroughs of scroll-state query examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [Using container size and style queries](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Using container scroll-state queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS containment module](/en-US/docs/Web/CSS/CSS_containment)
- [CSS at-rule functions](/en-US/docs/Web/CSS/CSS_syntax/At-rule_functions)
