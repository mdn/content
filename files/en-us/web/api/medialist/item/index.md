---
title: "MediaList: item() method"
short-title: item()
slug: Web/API/MediaList/item
page-type: web-api-instance-method
browser-compat: api.MediaList.item
---

{{ APIRef("CSSOM") }}

The **`item()`** method of the {{domxref("MediaList")}} interface returns the media query at the specified `index`, or `null` if the specified `index` doesn't exist.

## Syntax

```js-nolint
item(index)
[index]
```

> **Note:** The bracket (`[]`) syntax can be used instead of the `item()` syntax.

### Parameters

- `index`
  - : An integer.

### Return value

If the bracket (`[]`) syntax is used and there is no entry for the given index, `undefined` is returned.

## Examples

The following would log to the console each media query stored in the
`MediaList` associated with the first stylesheet applied to the current document.

```js
const stylesheet = document.styleSheets[0];
console.log(stylesheet.media.length);
console.log(stylesheet.media.item(0)); // Returns a string like "print"
console.log(stylesheet.media.item(5)); // Returns null if there is no 5th entry
console.log(stylesheet.media[1]); // Returns a string like "print"
console.log(stylesheet.media[5]); // Returns undefined if there is no 5th entry
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
