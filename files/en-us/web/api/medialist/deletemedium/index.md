---
title: "MediaList: deleteMedium() method"
short-title: deleteMedium()
slug: Web/API/MediaList/deleteMedium
page-type: web-api-instance-method
browser-compat: api.MediaList.deleteMedium
---

{{APIRef("CSSOM")}}

The `deleteMedium()` method of the {{DOMxRef("MediaList")}} interface removes from this `MediaList` the given media query.

## Syntax

```js-nolint
deleteMedium(medium)
```

### Parameters

- `medium`
  - : A string containing the media query to remove from the list.

### Return value

None ([undefined](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown when the media query to remove is not in the list.

## Examples

The following removes the media query `print` from the
`MediaList` associated with the first stylesheet applied to the current document.

```js
const stylesheet = document.styleSheets[0];
stylesheet.media.deleteMedium("print");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
