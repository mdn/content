---
title: "MediaList: appendMedium() method"
short-title: appendMedium()
slug: Web/API/MediaList/appendMedium
page-type: web-api-instance-method
browser-compat: api.MediaList.appendMedium
---

{{APIRef("CSSOM")}}

The `appendMedium()` method of the {{DomxRef("MediaList")}} interface adds a media query to the list. If the media query is already in the collection, this method does nothing.

## Syntax

```js-nolint
appendMedium(medium)
```

### Parameters

- `medium`
  - : A string containing the media query to add.

### Return value

None ([undefined](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Examples

The following adds the media query `print` into the
`MediaList` associated with the first stylesheet applied to the current document.

```js
const stylesheet = document.styleSheets[0];
stylesheet.media.appendMedium("print");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
