---
title: ::highlight()
slug: Web/CSS/::highlight
page-type: css-pseudo-element
browser-compat: css.selectors.highlight
---

{{CSSRef}}

The **`::highlight()`** CSS [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) applies styles to a custom highlight.

A custom highlight is a collection of {{domxref("Range")}} objects and is registered on a webpage using the {{domxref("HighlightRegistry")}}.

## Allowable properties

Only certain CSS properties can be used with `::highlight()`:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} and its associated properties
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("-webkit-text-stroke-color")}}, {{CSSxRef("-webkit-text-fill-color")}} and {{CSSxRef("-webkit-text-stroke-width")}}

In particular, {{CSSxRef("background-image")}} is ignored.

## Syntax

```css-nolint
::highlight(custom-highlight-name)
```

## Examples

### Highlighting characters

#### HTML

```html
<p id="rainbow-text">CSS Custom Highlight API rainbow</p>
```

#### CSS

```css
#rainbow-text {
  font-family: monospace;
  font-size: 1.5rem;
}

::highlight(rainbow-color-1) {
  color: #ad26ad;
  text-decoration: underline;
}
::highlight(rainbow-color-2) {
  color: #5d0a99;
  text-decoration: underline;
}
::highlight(rainbow-color-3) {
  color: #0000ff;
  text-decoration: underline;
}
::highlight(rainbow-color-4) {
  color: #07c607;
  text-decoration: underline;
}
::highlight(rainbow-color-5) {
  color: #b3b308;
  text-decoration: underline;
}
::highlight(rainbow-color-6) {
  color: #ffa500;
  text-decoration: underline;
}
::highlight(rainbow-color-7) {
  color: #ff0000;
  text-decoration: underline;
}
```

#### JavaScript

```js
const textNode = document.getElementById("rainbow-text").firstChild;

if (!CSS.highlights) {
  textNode.textContent =
    "The CSS Custom Highlight API is not supported in this browser!";
}

// Create and register highlights for each color in the rainbow.
const highlights = [];
for (let i = 0; i < 7; i++) {
  // Create a new highlight for this color.
  const colorHighlight = new Highlight();
  highlights.push(colorHighlight);

  // Register this highlight under a custom name.
  CSS.highlights.set(`rainbow-color-${i + 1}`, colorHighlight);
}

// Iterate over the text, character by character.
for (let i = 0; i < textNode.textContent.length; i++) {
  // Create a new range just for this character.
  const range = new Range();
  range.setStart(textNode, i);
  range.setEnd(textNode, i + 1);

  // Add the range to the next available highlight,
  // looping back to the first one once we've reached the 7th.
  highlights[i % 7].add(range);
}
```

#### Result

{{ EmbedLiveSample("Highlighting characters") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS custom highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS pseudo-elements](/en-US/docs/Web/CSS/CSS_pseudo-elements) module
