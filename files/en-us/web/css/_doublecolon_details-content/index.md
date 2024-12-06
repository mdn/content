---
title: "::details-content"
slug: Web/CSS/::details-content
page-type: css-pseudo-element
browser-compat: css.selectors.details-content
---

{{CSSRef}}

The **`::details-content`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the contents of an {{HTMLElement("details") }}.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-details-content.html", "tabbed-shorter")}}

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<details>`](/en-US/docs/Web/HTML/Element/details)
