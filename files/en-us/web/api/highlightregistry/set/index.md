---
title: "HighlightRegistry: set() method"
short-title: set()
slug: Web/API/HighlightRegistry/set
page-type: web-api-instance-method
browser-compat: api.HighlightRegistry.set
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.set
---

{{APIRef("CSS Custom Highlight API")}}

The **`set()`** method of the {{domxref("HighlightRegistry")}} interface adds or updates a {{domxref("Highlight")}} object in the registry with the specified name.

`HighlightRegistry` is a {{jsxref("Map")}}-like object, so this is similar to using {{jsxref("Map.set()")}}.

## Syntax

```js-nolint
set(name, highlight)
```

### Parameters

- `name`
  - : The name of the `Highlight` object to add or update. The name must be a {{jsxref("String")}}.
- `highlight`
  - : The `Highlight` object to add or update. This must be a {{domxref("Highlight")}} interface instance.

### Return value

The `HighlightRegistry` object.

## Examples

### Using set()

```js
const fooHighlight = new Highlight();
CSS.highlights.set("foo", fooHighlight);
```

### Using set() with chaining

Since the `set()` method returns back the registry, you can chain the method call like below:

```js
const fooHighlight = new Highlight();
const barHighlight = new Highlight();
const bazHighlight = new Highlight();

CSS.highlights
  .set("foo", fooHighlight)
  .set("bar", barHighlight)
  .set("baz", bazHighlight);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
