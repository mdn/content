---
title: ::details-content
slug: Web/CSS/::details-content
page-type: css-pseudo-element
status:
  - experimental
browser-compat: css.selectors.details-content
---

{{CSSRef}}{{SeeCompatTable}}

The **`::details-content`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the expandable/collapsible contents of a {{HTMLElement("details")}} element.

[//]: # '{{EmbedInteractiveExample("pages/tabbed/pseudo-element-details-content.html", "tabbed-shorter")}}'

## Syntax

```css
selector::details-content
```

## Examples

### Basic example

In this example the `::details-content` pseudo-element is used to set a {{cssxref("background-color")}} on the content of the {{HTMLElement("details")}} element.

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

In this example the `::details-content` pseudo-element is used to set a {{cssxref("transition")}} on the content of the {{HTMLElement("details")}} element so that it smoothly fades into view when expanded, and fades out again when collapsed. To achieve this, two separate transitions are specified inside the `transition` shorthand property:

- The {{cssxref("opacity")}} property is given a basic transition over `600ms` to create the fade-in/fade-out effect.
- The {{cssxref("content-visibility")}} property (which is toggled between `hidden` and `visible` when the `<details>` content is expanded/collapsed) is also given a basic `600ms` transition, but with the {{cssxref("transition-behavior")}} value `allow-discrete` specified. This opts the browser into having a transition started on `content-visibility`, the animation behavior of which is [discrete](/en-US/docs/Web/CSS/CSS_animated_properties#discrete). The effect is that the content is visible for the entire duration of the transition, allowing other transitions to be seen. If this transition was not included, the content would immediately disappear when the `<details>` content was collapsed — you wouldn't see the smooth fade-out.

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
    opacity 600ms,
    content-visibility 600ms allow-discrete;
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
