---
title: HighlightRegistry
slug: Web/API/HighlightRegistry
page-type: web-api-interface
tags:
  - API
  - Interface
  - CSS Custom Highlight API
  - Reference
browser-compat: api.HighlightRegistry
---

{{APIRef("CSS Custom Highlight API")}}

The **`HighlightRegistry`** interface, accessed via `CSS.highlights`, is a {{jsxref("Map")}}-like object used to register {{domxref("Highlight")}} objects to be styled using the {{domxref("css_custom_highlight_api", "CSS Custom Highlight API", "", "nocode")}}.

{{InheritanceDiagram}}

## Instance properties

_The `HighlightRegistry` interface doesn't inherit any properties._

- {{domxref("HighlightRegistry.size")}} {{ReadOnlyInline}}
  - : Returns the number of `Highlight` objects currently registered.

## Instance methods

_The `HighlightRegistry` interface doesn't inherit any methods_.

- {{domxref("HighlightRegistry.clear()")}}
  - : Clear all ranges in this highlight.
- {{domxref("HighlightRegistry.delete()")}}
  - : Remove a range from this highlight.
- {{domxref("HighlightRegistry.entries()")}}
  - : Returns a new iterator object that contains each range in the highlight object, in insertion order.
- {{domxref("HighlightRegistry.forEach()")}}
  - : Calls `callbackFn` once for each range present in the highlight object, in insertion order.
- {{domxref("HighlightRegistry.get()")}}
  - : sdfh
- {{domxref("HighlightRegistry.has()")}}
  - : Returns a boolean asserting whether a range is present the highlight object or not.
- {{domxref("HighlightRegistry.keys()")}}
  - : An alias for {{domxref("HighlightRegistry.values()")}}.
- {{domxref("HighlightRegistry.set()")}}
  - : sdfh
- {{domxref("HighlightRegistry.values()")}}
  - : Returns a new iterator object that yields the ranges in the highlight object in insertion order.

## Example

The following example demonstrates how to create ranges, instantiate a new `Highlight` object for them, and register the highlight using the `HighlightRegistry`, to style it on the page:

```js
const parentNode = document.getElementById("foo");

// Create a couple of ranges.
const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);

const range2 = new Range();
range2.setStart(parentNode, 40);
range2.setEnd(parentNode, 60);

// Create a custom highlight for these ranges.
const highlight = new Highlight(range1, range2);

// Register the ranges in the HighlightRegistry.
CSS.highlights.set('my-custom-highlight', highlight);
```

The following CSS code snippet demonstrates how to style the registered custom highlight by using the {{cssxref("::highlight")}} pseudo-element:

```css
::highlight(my-custom-highlight) {
  background-color: peachpuff;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
