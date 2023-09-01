---
title: "Highlight: Highlight() constructor"
short-title: Highlight()
slug: Web/API/Highlight/Highlight
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.Highlight.Highlight
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

The **`Highlight()`** constructor returns a newly created
{{domxref("Highlight")}} object which can hold a collection of {{domxref("Range")}} objects to be styled using the {{domxref("css_custom_highlight_api", "CSS Custom Highlight API", "", "nocode")}}.

## Syntax

```js-nolint
new Highlight()
new Highlight(range)
new Highlight(range1, range2, /* …, */ rangeN)
```

### Parameters

- `range1, /* …, */ rangeN` {{optional_inline}}
  - : One ore more initial {{domxref("Range")}} objects to add in the new highlight.

### Return value

A new `Highlight` object.

## Examples

The example code below demonstrates how to create an empty highlight object, and then add ranges to it:

```js
const highlight = new Highlight();
highlight.add(range1);
highlight.add(range2);
```

The example code below demonstrates how to create a new highlight object and add ranges to it during instantiation:

```js
const highlight = new Highlight(range1, range2);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
