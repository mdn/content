---
title: "CSS: highlights static property"
short-title: highlights
slug: Web/API/CSS/highlights_static
page-type: web-api-static-property
status:
  - experimental
browser-compat: api.CSS.highlights_static
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

The static, read-only **`highlights`** property of the {{domxref("CSS")}} interface provides access to the `HighlightRegistry` used to style arbitrary text ranges using the {{domxref("css_custom_highlight_api", "CSS Custom Highlight API", "", "nocode")}}.

## Value

The {{DOMxRef("HighlightRegistry")}} object.

## Examples

The following example demonstrates creating multiple text ranges, then creating a `Highlight` object for them, registering this highlight in the `HighlightRegistry`, and finally styling the text ranges using the {{cssxref("::highlight", "::highlight()")}} pseudo-element.

```js
const parentNode = document.getElementById("foo");

const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);

const range2 = new Range();
range2.setStart(parentNode, 40);
range2.setEnd(parentNode, 60);

const myCustomHighlight = new Highlight(range1, range2);

CSS.highlights.set("my-custom-highlight", myCustomHighlight);
```

```css
::highlight(my-custom-highlight) {
  background-color: yellow;
  color: black;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
