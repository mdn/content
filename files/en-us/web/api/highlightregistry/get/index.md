---
title: "HighlightRegistry: get() method"
short-title: get()
slug: Web/API/HighlightRegistry/get
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.HighlightRegistry.get
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.get
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

The **`get()`** method of the {{domxref("HighlightRegistry")}} interface returns the named {{domxref("Highlight")}} object from the registry.

`HighlightRegistry` is a {{jsxref("Map")}}-like object, so this is similar to using {{jsxref("Map.get()")}}.

## Syntax

```js-nolint
get(name)
```

### Parameters

- `name`
  - : The name of the `Highlight` object to return from the registry. The name must be a {{jsxref("String")}}.

### Return value

The `Highlight` object associated with the specified name, or {{jsxref("undefined")}} if the name can't be found in the `HighlightRegistry`.

## Examples

The following code sample demonstrates how to create a new `Highlight`, add it to the registry, and retrieve it by its name using the `get()` method:

```js
const fooHighlight = new Highlight();
CSS.highlights.set("foo", fooHighlight);

console.log(CSS.highlights.get("foo")); // Returns the fooHighlight object.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
