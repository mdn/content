---
title: "Highlight: clear() method"
short-title: clear()
slug: Web/API/Highlight/clear
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Highlight.clear
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.clear
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

The **`clear()`** method of the {{domxref("Highlight")}} interface removes all the {{domxref("Range")}} objects from a `Highlight` object.

`Highlight` is a {{jsxref("Set")}}-like object, so this is similar to using {{jsxref("Set.clear()")}}.

## Syntax

```js-nolint
clear()
```

### Return value

None ({{jsxref("undefined")}}).

## Examples

The code snippet below shows how to create a new highlight with two ranges, and then clear it:

```js
const highlight = new Highlight(range1, range2);
console.log(highlight.size); // 2

highlight.clear();
console.log(highlight.size); // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
