---
title: "Highlight: delete() method"
short-title: delete()
slug: Web/API/Highlight/delete
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Highlight.delete
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.delete
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

The **`delete()`** method of the {{domxref("Highlight")}} interface removes a specified {{domxref("Range")}} object from a `Highlight` object.

`Highlight` is a {{jsxref("Set")}}-like object, so this is similar to using {{jsxref("Set.delete()")}}.

## Syntax

```js-nolint
delete(range)
```

### Parameters

- `range`
  - : The {{domxref("Range")}} object to remove from the `Highlight`.

### Return value

Returns `true` if `range` was already in `Highlight`; otherwise `false`.

## Examples

The code snippet below shows how to create a new highlight with two ranges, and then delete one of them:

```js
const range1 = new Range();
const range2 = new Range();

const highlight = new Highlight(range1, range2);
console.log(highlight.size); // 2

highlight.delete(range1);
console.log(highlight.size); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
