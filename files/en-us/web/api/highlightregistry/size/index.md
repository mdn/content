---
title: HighlightRegistry.size
slug: Web/API/HighlightRegistry/size
page-type: web-api-instance-property
tags:
  - API
  - Property
  - CSS Custom Highlight API
  - Reference
  - size
browser-compat: api.HighlightRegistry.size
---

{{APIRef("CSS Custom Highlight API")}}

The **`size`** property returns the number of {{domxref("Highlight")}} objects in a {{domxref("HighlightRegistry")}}.

## Value

The value of `size` is a read-only integer representing how many entries the {{jsxref("Map")}}-like `HighlightRegistry` object has.

## Examples

### Using size

```js
const highlight1 = new Highlight();
const highlight2 = new Highlight();

CSS.highlights.set("highlight-1", highlight1);
CSS.highlights.set("highlight-2", highlight2);

console.log(CSS.highlights.size); // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
