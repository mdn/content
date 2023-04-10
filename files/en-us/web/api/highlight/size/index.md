---
title: "Highlight: size property"
short-title: size
slug: Web/API/Highlight/size
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Highlight.size
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-get-set.prototype.size
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

The **`size`** property returns the number of {{domxref("Range")}} objects in a
{{domxref("Highlight")}} object.

## Value

The value of `size` is a read-only integer representing how many entries the highlight object has.

## Examples

### Using size

```js
const highlight = new Highlight();
highlight.add(range1);
highlight.add(range2);
highlight.add(range3);

console.log(highlight.size); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
