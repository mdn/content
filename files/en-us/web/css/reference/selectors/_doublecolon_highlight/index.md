---
title: "`::highlight()` CSS pseudo-element"
short-title: ::highlight()
slug: Web/CSS/Reference/Selectors/::highlight
page-type: css-pseudo-element
browser-compat: css.selectors.highlight
sidebar: cssref
---

The **`::highlight()`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) applies styles to a custom highlight.

A custom highlight is a collection of {{domxref("AbstractRange")}} objects and is registered on a webpage using the {{domxref("HighlightRegistry")}}.

The `::highlight()` pseudo-element follows a special inheritance model common to all highlight pseudo-elements. For more details on how this inheritance works, see the [Highlight pseudo-elements inheritance](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance) section.

## Allowable properties

Only certain CSS properties can be used with `::highlight()`:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} and its associated properties, including {{CSSxRef("text-underline-position")}} and {{CSSxRef("text-underline-offset")}} (note: [the spec's list is deliberately non-exhaustive](https://github.com/w3c/csswg-drafts/issues/7101#issuecomment-1124007042). This includes all constituent properties, but may include other properties that control line decorations.)
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("stroke-color")}}, {{CSSxRef("fill-color")}}, and {{CSSxRef("stroke-width")}}
- Custom properties ({{cssxref("--*")}})

In particular, {{CSSxRef("background-image")}} and vendor-prefixed properties are ignored.

> [!NOTE]
> The above is the specified behavior. In practice, `fill-color` and `stroke-color` have incomplete browser support as CSS properties in general and therefore do not work on `::highlight()` in browsers that do not support them.
>
> Support for other properties also varies among browsers. There are also two tiers of support: whether the property is included in the pseudo-element's computed styles, and whether they actually create a visible effect.
>
> - Chrome and Edge additionally accept {{CSSxRef("text-emphasis-color")}}. They accept `stroke-width`, {{CSSxRef("fill")}}, and {{CSSxRef("stroke")}} without effect. They ignore `text-underline-position`.
> - Firefox accepts all CSS properties it implements into computed styles, but properties not listed above have no effect, and `stroke-width` has no effect, either.
> - Safari accepts `text-underline-position` and {{CSSxRef("text-decoration-skip-ink")}} without effect. The visible effects of `stroke-width`, `text-shadow`, `text-underline-offset`, and `text-decoration-thickness` were only available by Technology Preview 251.
>
> Chrome and Edge version 135 and Safari 27 beta removed support for {{CSSxRef("-webkit-text-stroke-color")}}, {{CSSxRef("-webkit-text-fill-color")}}, and {{CSSxRef("-webkit-text-stroke-width")}}.

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
  color: violet;
  text-decoration: underline;
}
::highlight(rainbow-color-2) {
  color: purple;
  text-decoration: underline;
}
::highlight(rainbow-color-3) {
  color: blue;
  text-decoration: underline;
}
::highlight(rainbow-color-4) {
  color: green;
  text-decoration: underline;
}
::highlight(rainbow-color-5) {
  color: yellow;
  text-decoration: underline;
}
::highlight(rainbow-color-6) {
  color: orange;
  text-decoration: underline;
}
::highlight(rainbow-color-7) {
  color: red;
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

- [CSS custom highlight API](/en-US/docs/Web/CSS/Guides/Custom_highlight_API) module
- [CSS custom highlight](/en-US/docs/Web/API/CSS_Custom_Highlight_API) API
- [CSS pseudo-elements](/en-US/docs/Web/CSS/Guides/Pseudo-elements) module
