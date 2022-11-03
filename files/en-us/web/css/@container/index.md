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

The **`@container`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) is a conditional group rule whose condition is a container query, which is a boolean combination of container size queries and/or container style queries.
Style declarations within the `<stylesheet>` block of an `@container` rule are filtered by its condition to only match when the container query is true for their element's query container.

```css
@container (width > 40em) {
  h2 {
    font-size: 1.5em;
  }
}
```

For each element, the query container to be queried is selected from among the element's ancestor query containers that are established as a valid query container for all the container features in the `<container-condition>`.
The optional `<container-name>` filters the set of query containers considered to just those with a matching query container name.

Once an eligible query container has been selected for an element, each container feature in the `<container-condition>` is evaluated against that query container.
If no ancestor is an eligible query container, then the container query is unknown for that element.

## Syntax

### Descriptors

Each `@container` has a set of descriptors.

- {{cssxref("@container/aspect-ratio", "aspect-ratio")}}
  - : The ratio of the value of the width container feature to the value of the height container feature.
- {{cssxref("@container/block-size", "block-size")}}
  - : The block size of the query container.
- {{cssxref("@container/height", "height")}}
  - : The height of the query container.
- {{cssxref("@container/inline-size", "inline-size")}}
  - : The inline size of the query container.
- {{cssxref("@container/orientation", "orientation")}}
  - : The orientation of the query container.
- {{cssxref("@container/width", "width")}}
  - : The width of the query container.

## Formal syntax

```
@container <container-name> { <declaration-list> }
```

## Examples

```css
main,
aside {
  container: my-layout / inline-size;
}

.media-object {
  display: grid;
  grid-template: "img" auto "content" auto / 100%;
}

@container my-layout (inline-size > 45em) {
  .media-object {
    grid-template: "img content" auto / auto 1fr;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("@container")}}
- {{Cssxref("content-visibility")}}
