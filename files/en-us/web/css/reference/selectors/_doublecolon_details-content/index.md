---
title: ::details-content
slug: Web/CSS/Reference/Selectors/::details-content
page-type: css-pseudo-element
browser-compat: css.selectors.details-content
sidebar: cssref
---

The **`::details-content`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) represents the expandable/collapsible contents of a {{HTMLElement("details")}} element.

{{InteractiveExample("CSS Demo: ::details-content", "tabbed-shorter")}}

```css interactive-example
details[open]::details-content {
  color: dodgerblue;
  padding: 0.5em;
  border: thin solid grey;
}
```

```html interactive-example
<details open>
  <summary>Example summary</summary>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>
    Architecto cupiditate ea optio modi quas sequi, esse libero asperiores
    debitis eveniet commodi hic ad.
  </p>
</details>
```

## Syntax

```css
selector::details-content
```

## Examples

### Basic example

This example demonstrates basic usage of the `::details-content` pseudo-element to style the content of a {{HTMLElement("details")}} element.

#### HTML

Our `<details>` element includes a {{HTMLElement("summary")}} element, whose contents will always be visible. The details content includes a {{HTMLElement("p")}} element.

```html
<details>
  <summary>Click me</summary>
  <p>Here is some content</p>
</details>
```

#### CSS

We set a {{cssxref("background-color")}} on the `::details-content` pseudo-element:

```css
details::details-content {
  background-color: #a29bfe;
}
```

#### Result

Click on the summary to view the detail contents.

{{EmbedLiveSample("Basic_example", "100%", 150)}}

### Transition example

In this example the `::details-content` pseudo-element is used to set a transition on the content of the {{HTMLElement("details")}} element so that it smoothly fades into view when expanded, and fades out again when collapsed.

#### HTML

The HTML is the same as in the previous example.

```html
<details>
  <summary>Click me</summary>
  <p>Here is some content</p>
</details>
```

#### CSS

To achieve our transition, we specify two separate transitions inside the {{cssxref("transition")}} shorthand property:

- The {{cssxref("opacity")}} property is given a basic transition over `600ms` to create the fade-in/fade-out effect.
- The {{cssxref("content-visibility")}} property (which is toggled between `hidden` and `visible` when the `<details>` content is expanded/collapsed) is given a `600ms` transition with the {{cssxref("transition-behavior")}} value `allow-discrete` specified. This opts the browser into having a transition started on `content-visibility`, the animation behavior of which is [discrete](/en-US/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). The effect is that the content is visible for the entire duration of the transition, allowing other transitions to be seen. If this transition was not included, the content would immediately disappear when the `<details>` content was collapsed — you wouldn't see the smooth fade-out.

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

To see the animation, toggle the visibility of the detail contents by clicking on the summary.

{{EmbedLiveSample("Transition_example", "100%", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<details>`](/en-US/docs/Web/HTML/Reference/Elements/details)
- [`<summary>`](/en-US/docs/Web/HTML/Reference/Elements/summary)
