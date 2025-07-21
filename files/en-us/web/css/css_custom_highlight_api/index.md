---
title: CSS custom highlight API
slug: Web/CSS/CSS_custom_highlight_API
page-type: css-module
spec-urls: https://drafts.csswg.org/css-highlight-api-1/
sidebar: cssref
---

The **CSS custom highlight API** module provides a programmatic way to target specific ranges of text defined by range objects, without affecting the underlying DOM structure. The range objects can then be selected via `::highlight()` pseudo-elements, and have highlight styles added and removed. The features of this module can create highlight effects similar to how text editors highlight spelling or grammar errors, and code editors highlight syntax errors.

The CSS Custom Highlight API extends the concept of other highlight pseudo-elements such as {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, and {{cssxref('::target-text')}} by providing a way to create arbitrary text ranges (defined as {{domxref('Range')}} objects in JavaScript) and style them via CSS, rather than being limited to browser-defined ranges.

## Custom highlight API in action

To enable styling text ranges on a webpage using the CSS Custom Highlight API, you create a {{domxref("Range")}} object, then a {{domxref("Highlight")}} object for the range. After registering the highlight using the {{domxref("HighlightRegistry.set()")}} method, you can then select the range using the {{cssxref("::highlight", "::highlight()")}} pseudo-element. The name defined in the `set()` method is used as the parameter of the `::highlight()` pseudo-element selector to select that range.The range selected by the `::highlight()` pseudo-element can be styled using a [limited number of properties](/en-US/docs/Web/CSS/::highlight#allowable_properties).

```html-nolint hidden
<h1>Directions</h1>
<h2>Lincoln Memorial to Martin Luther King, Jr. Memorial</h2>
<ol><li>Head south on Lincoln Memorial Circle</li
  ><li>Turn right toward Independence Ave</li
  ><li>Turn left onto Independence Ave</li
  ><li>Turn right onto West Basin Dr</li
  ><li>Look up when you reach 64 Independence Ave!</li>
</ol>
<hr />
<label
  >Number of steps completed:
  <input type="number" min="0" max="5" value="0" id="currentStep" />
</label>
```

This example uses the {{cssxref("text-decoration")}} property to strike through the `steps` highlight range defined by our JavaScript:

```css
::highlight(steps) {
  text-decoration: line-through;
  color: blue;
}
```

We create a `Range` with a start and end node (which is the same node in this case). We then set this range as the `Highlight` using the `set()` method of the CSS `HighlightRegistry` interface.

```js
const rangeToHighlight = new Range();
const list = document.querySelector("ol");
rangeToHighlight.setStart(list, 0);
rangeToHighlight.setEnd(list, 0);

CSS.highlights.set("steps", new Highlight(rangeToHighlight));
```

An event listener updates the end of the highlighted range when the number of completed steps changes:

```js
const currentPositionSlider = document.querySelector("input");
currentPositionSlider.addEventListener("change", (e) => {
  rangeToHighlight.setEnd(list, e.target.value);
});
```

{{ EmbedLiveSample('Custom highlight API in action', 700, 300) }}

## Reference

### Pseudo-elements

- {{CSSXref("::highlight()")}}

### Interfaces

- {{domxref("Highlight")}}
- {{domxref("HighlightRegistry")}}

### Interface extensions

This module adds properties and methods to interfaces defined in other specifications.

- {{domxref("CSS")}}
  - {{domxref("CSS.highlights")}}

## Guides

- [CSS custom highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API#concepts_and_usage)
  - : The concepts and usage of the CSS custom highlight API, including creating `Range` and `Highlight` objects, registering the highlights using the `HighlightRegistry`, and styling the highlights using the `::highlight()` pseudo-element.

## Related concepts

- {{CSSXref("::grammar-error")}}
- {{CSSXref("::selection")}}
- {{CSSXref("::spelling-error")}}
- {{CSSXref("::target-text")}}
- {{domxref("Range")}} Interface and {{domxref("Range.range", "Range()")}} constructor
- [Text fragments](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments)
- {{domxref("FragmentDirective")}} Interface

## Specifications

{{Specifications}}

## See also

- [CSS pseudo-element module](/en-US/docs/Web/CSS/CSS_pseudo-elements)
- [CSS Object Model (CSSOM)](/en-US/docs/Web/API/CSS_Object_Model) APIs
