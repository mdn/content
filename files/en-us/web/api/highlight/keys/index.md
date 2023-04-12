---
title: "Highlight: keys() method"
short-title: keys()
slug: Web/API/Highlight/keys
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Highlight.keys
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.keys
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

The **`keys()`** method of the {{domxref("Highlight")}} interface is an alias for the {{domxref("Highlight.values()", "values()")}} method.

`Highlight` is a {{jsxref("Set")}}-like object, so this is similar to using {{jsxref("Set.keys()")}}.

## Syntax

```js-nolint
keys()
```

### Return value

A new iterator object containing each `Range` object in the given `Highlight`, in insertion order.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
