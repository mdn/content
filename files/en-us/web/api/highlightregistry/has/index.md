---
title: "HighlightRegistry: has() method"
short-title: has()
slug: Web/API/HighlightRegistry/has
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.HighlightRegistry.has
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.has
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

The **`has()`** method of the {{domxref("HighlightRegistry")}} interface returns a boolean indicating whether or not a {{domxref("Highlight")}} object with the specified name exists in the registry.

`HighlightRegistry` is a {{jsxref("Map")}}-like object, so this is similar to using {{jsxref("Map.has()")}}.

## Syntax

```js-nolint
has(name)
```

### Parameters

- `name`
  - : The name of the `Highlight` object to test for presence in the registry.

### Return value

Returns `true` if a highlight with the specified name exists in the registry; otherwise `false`.

## Examples

```js
const fooHighlight = new Highlight();
CSS.highlights.set("foo", fooHighlight);

myHighlight.has("foo"); // true
myHighlight.has("bar"); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
