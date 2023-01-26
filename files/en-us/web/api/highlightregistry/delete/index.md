---
title: HighlightRegistry.delete()
slug: Web/API/HighlightRegistry/delete
page-type: web-api-instance-method
tags:
  - API
  - Method
  - CSS Custom Highlight API
  - Reference
  - delete
browser-compat: api.HighlightRegistry.delete
---

{{APIRef("CSS Custom Highlight API")}}

The **`delete()`** method of the {{domxref("HighlightRegistry")}} interface removes a {{domxref("Highlight")}} object from the `HighlightRegistry` specified by its custom highlight name.

`HighlightRegistry` is a {{jsxref("Map")}}-like object, so this is similar to using {{jsxref("Map.delete()")}}.

## Syntax

```js-nolint
delete(customHighlightName)
```

### Parameters

- `customHighlightName`
  - : The name, as a {{jsxref("String")}}, of the {{domxref("Highlight")}} object to remove from the `HighlightRegistry`.

### Return value

Returns `true` if a `Highlight` object under the provided name was already in the `HighlightRegistry`; otherwise `false`.

## Example

The following code sample registers a highlight in the registry, and then deletes it:

```js
const myHighlight = new Highlight(range1, range2);

CSS.highlights.set('my-highlight', myHighlight);

CSS.highlights.delete('foo'); // false
CSS.highlights.delete('my-highlight'); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
