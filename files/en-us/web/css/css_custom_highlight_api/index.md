---
title: CSS custom highlight API
slug: Web/CSS/CSS_custom_highlight_API
page-type: css-module
spec-urls: https://drafts.csswg.org/css-highlight-api-1/
sidebar: cssref
---

The **CSS custom highlight API** module provides a programmatic way of adding and removing highlights by applying styles to text based on range objects, accessed via the `::highlight()` pseudo element, without effect the underlying DOM structure. The features of this module enable styling text ranges on a webpage, such as text editing web apps highlight spelling or grammar errors, and code editors highlight syntax errors, enabling you to programmatically create text ranges and highlight them without affecting the DOM structure in the page.

The CSS Custom Highlight API extends the concept of other highlight pseudo-elements such as {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, and {{cssxref('::target-text')}} by providing a way to create and style arbitrary {{domxref('Range')}} objects, rather than being limited to browser-defined ranges. In other words, the CSS custom hightlight API makes it possible to apply CSS styles to arbitrary text ranges selected from JavaScript.

## Custom highlight API in action

To enable styling text ranges on a webpage using the CSS Custom Highlight API, you create a {{domxref("Range")}} object, then a {{domxref("Highlight")}} object for the range. After registering the highlight using the {{domxref("HighlightRegistry.set()")}} method, you can then select the range using the {{cssxref("::highlight", "::highlight()")}} pseudo-element. The name defined in the `set()` method is used as the parameter of the `::highlight()` pseudo-element selector to select that range.The range selected by the `::highlight()` pseudo-element can be styled using a limited number of properties.

```html hidden
<h1>Directions</h1>
<h2>Lincoln Memorial to Martin Luther King, Jr. Memorial</h1>
<ol><li>
    Head south on Lincoln Memorial Circle</li><li>
    Turn right toward Independence Ave</li><li>
    Turn left onto Independence Ave</li><li>
    Turn right onto West Basin Dr</li><li>
    Look up when you reach 64 Independence Ave!
</li></ol>
<hr>
<label>Number of steps completed:
  <input type="number" min="0" max="5" value="0" id="currentStep">
</label>
```

This example uses the {{cssxref("text-decoration")}} property to cross out the `steps` highligh range defined by our JavaScript:

```css
::highlight(steps) {
  text-decoration: line-through;
  color: blue;
}
```

We create a `Range`, with a start and end point (which is the same point in this case). We then set this range as the `Highlight` using the `set()` method of the CSS `highlights` interface extension.

```js
let rangeToHighlight = new Range();
const list = document.querySelector("ol");
rangeToHighlight.setStart(list, 0);
rangeToHighlight.setEnd(list, 0);

CSS.highlights.set("steps", new Highlight(rangeToHighlight));
```

An event listener updates the end of the highlighted range when the number of completed steps changes:

```js
const currentPositionSlider = document.querySelector("input");
currentPositionSlider.addEventListener("change", function (e) {
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
