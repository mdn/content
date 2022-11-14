---
title: container-name
slug: Web/CSS/container-name
page-type: css-property
tags:
  - container queries
  - CSS
  - CSS Containment
  - Reference
  - Property
browser-compat: css.properties.container-name
---

{{CSSRef}}

The **container-name** [CSS](/en-US/docs/Web/CSS) property specifies a list of query container names used by the [@container](/en-US/docs/Web/CSS/@container) at-rule in a [container query](/en-US/docs/Web/CSS/CSS_Container_Queries).
A queried element will use the nearest ancestor with a containment context to determine the container size.
When a containment context is given a name, it can be specifically targeted using the {{Cssxref("@container")}} at-rule instead of the nearest ancestor with containment.

## Syntax

```plain
container-name: <container-name>;
```

### Values

- `<container-name>` is a case-sensitive string that is used to identify the container.
  The following conditions apply:
  - The name can be any valid {{cssxref("custom-ident")}}, but must not equal `default`.
  - The name value must not be in quotes.
  - The dashed ident intended to denote author-defined identifiers (e.g., `--container-name`) is permitted.
  - A list of multiple names separated by a space is allowed.

## Examples

### Using a container name

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

First create a container context using `container-type`, then add the `container-name` property.

> **Note:** A shorthand syntax for this declaration is described in the {{cssxref("container")}} page.

```css
.container {
  container-type: inline-size;
  container-name: sidebar;
}
```

You can then target that container by name using the {{cssxref("@container")}} at-rule.
The following example will hide list items in child elements of a containment context named `sidebar` when the container is less than 500px wide:

```css
@container sidebar (max-width: 500px) {
  li {
    visibility: hidden;
  }
}
```

For more information on writing container queries, see the [CSS Container Queries](/en-US/docs/Web/CSS/CSS_Container_Queries) page.

### Using multiple container names

You can also provide multiple names to a container context separated by a space:

```css
.container {
  container-type: inline-size;
  container-name: sidebar nav;
}
```

This will allow you to target the container using either name in the {{cssxref("@container")}} at-rule:

```css
@container sidebar (max-width: 500px) {
  li {
    visibility: hidden;
  }
}

@container nav (orientation: landscape) {
  h2 {
    font-size: 1.5em;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS container queries](/en-US/docs/Web/CSS/CSS_Container_Queries)
- {{Cssxref("@container")}} at-rule
- CSS {{Cssxref("container")}} shorthand property
- CSS {{Cssxref("container-type")}} property
- CSS {{cssxref("content-visibility")}} property
