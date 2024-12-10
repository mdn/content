---
title: "::details-content"
slug: Web/CSS/::details-content
page-type: css-pseudo-element
browser-compat: css.selectors.details-content
---

{{CSSRef}}

The **`::details-content`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the expandable/collapsible contents of a {{HTMLElement("details")}} element.

[//]: # '{{EmbedInteractiveExample("pages/tabbed/pseudo-element-details-content.html", "tabbed-shorter")}}'

## Syntax

```css
selector::details-content
```

## Examples

### Basic example

#### HTML

```html
<details>
  <summary>Click me</summary>
  <p>Here is some content</p>
</details>
```

#### CSS

```css
details::details-content {
  background-color: #a29bfe;
}
```

#### Result

{{EmbedLiveSample("Basic_example", "100%", 150)}}

### Transition example

#### HTML

```html
<details>
  <summary>Click me</summary>
  <p>Here is some content</p>
</details>
```

#### CSS

```css
details::details-content {
  opacity: 0;
  transition:
    content-visibility 300ms allow-discrete,
    opacity 300ms;
}

details[open]::details-content {
  opacity: 1;
}
```

#### Result

{{EmbedLiveSample("Transition_example", "100%", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<details>`](/en-US/docs/Web/HTML/Element/details)
- [`<summary>`](/en-US/docs/Web/HTML/Element/summary)
