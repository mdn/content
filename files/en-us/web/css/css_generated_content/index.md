---
title: CSS generated content
slug: Web/CSS/CSS_generated_content
page-type: css-module
spec-urls: https://drafts.csswg.org/css-content/
---

{{CSSRef}}

The **CSS generated content** module defines how an element's content can be replaced and content can be added to a document with CSS.

Generated content can be used for content replacement, in which case the content of a DOM node is replaced with a CSS `<image>`. The CSS generated content also enables generating language-specific quotes, creating custom list item numbers and bullets, and visually adding content by generating content on select pseudo-elements as anonymous replaced elements.

### Generated content in action

```html hidden live-sample___generated_content
<div></div>
```

```css hidden live-sample___generated_content
body,
div {
  background-repeat: no-repeat;
}
body {
  background-image: linear-gradient(#3a67ab, #e8f6ff 100%);
}
div {
  position: relative;
  width: 400px;
  height: 400px;
  background-image:
    linear-gradient(
      115deg,
      transparent 48%,
      brown,
      #996600,
      brown,
      transparent 52%
    ),
    linear-gradient(
      60deg,
      transparent 48%,
      brown,
      #996600,
      brown,
      transparent 52%
    ),
    radial-gradient(
      circle 10px at 50% 50%,
      #333333 30%,
      #999999 50%,
      transparent 50%
    ),
    radial-gradient(
      circle 10px at 50% 50%,
      #333333 30%,
      #999999 50%,
      transparent 50%
    ),
    radial-gradient(circle at 50% 50%, white 30%, #eeeeee 50%, transparent 50%),
    radial-gradient(circle at 50% 50%, white 30%, #eeeeee 50%, transparent 50%),
    radial-gradient(circle at 50% 50%, white 30%, #eeeeee 50%, transparent 50%);
  background-size:
    100px 100px,
    100px 100px,
    15px 15px,
    15px 15px,
    200px 200px,
    300px 300px,
    400px 400px;
  background-position:
    95% 120px,
    5% 120px,
    46% 80px,
    54% 80px,
    50% 0,
    50% 90px,
    50% 220px;
}
div::after {
  content: "";
  border: transparent solid 4px;
  border-left: orange 30px solid;
  height: 1px;
  width: 1px;
  position: absolute;
  left: 50%;
  top: 100px;
}

div::before {
  content: "Only one <div>";
  font-size: min(6vh, 2rem);
  justify-content: center;
  display: flex;
  font-family: comic-sans, papyrus, sans-serif;
}
```

{{EmbedLiveSample("generated_content", "", "400px")}}

The HTML for this sample is a single, empty {{HTMLElement("div")}} inside an otherwise empty {{HTMLElement("body")}}. The snowman was created with [CSS images](/en-US/docs/Web/CSS/CSS_images) and [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders). The carrot nose was added using generated content: an empty box with a wide orange [left border](/en-US/docs/Web/CSS/border-left) added to the {{cssxref("::before")}} pseudo-element. The text is also generated content: "only one &lt;div>" was generated with the {{cssxref("content")}} property applied to the {{cssxref("::after")}} pseudo-element.

Click "Play" in the example above to see or edit the code in the MDN Playground.

## Reference

### Properties

- {{cssxref("content")}}
- {{cssxref("quotes")}}

> [!NOTE]
> The CSS generated content module introduces four at-risk properties that have not been implemented: `string-set`, `bookmark-label`, `bookmark-level`, and `bookmark-state`.

### Functions

The CSS generated content module introduces six yet-to-be implemented CSS functions including `content()`, `string()`, and `leader()`, and the three [`<target>`](/en-US/docs/Web/CSS/content#target) functions `target-counter()`, `target-counters()`, and `target-text()`.

### Data types

- [`<content-list>`](/en-US/docs/Web/CSS/content)
- `<content-replacement>` (see {{cssxref("image")}})
- {{cssxref("image")}}
- [`<counter>`](/en-US/docs/Web/CSS/content#counter)
- [`<quote>`](/en-US/docs/Web/CSS/content#quote)
- [`<target>`](/en-US/docs/Web/CSS/content#target)

## Guides

- ["How to" guide for generated content](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)

  - : Learn how to add text or image content to a document using the {{cssxref("content")}} property.

- [Create fancy boxes with generated content](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)

  - : Example of styling generated content for visual effects.

## Related concepts

- [CSS pseudo-elements](/en-US/docs/Web/CSS/CSS_pseudo-elements) module

  - {{cssxref("::before")}} pseudo-element
  - {{cssxref("::after")}} pseudo-element
  - {{cssxref("::marker")}} pseudo-element

- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module

  - {{cssxref("counter", "counter()")}} function
  - {{cssxref("counters", "counters()")}} function
  - {{cssxref("counter-increment")}} property
  - {{cssxref("counter-reset")}} property

- [CSS values and units](/en-US/docs/Web/CSS/CSS_Values_and_Units) module

  - {{cssxref("attr", "attr()")}} function
  - {{cssxref("string")}} data type
  - {{cssxref("image")}} data type

## Specifications

{{Specifications}}

## See also

- [CSS pseudo-elements](/en-US/docs/Web/CSS/CSS_pseudo-elements) module
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
- [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
