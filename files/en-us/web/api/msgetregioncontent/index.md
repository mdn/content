---
title: msGetRegionContent
slug: Web/API/msGetRegionContent
tags:
  - msGetRegionContent
---
{{APIRef("HTMLMediaElement")}}

{{Non-standard_header()}}

The **`msGetRegionContent`** returns an array of Range instances corresponding to the content from the region flow that is positioned in the region.

This proprietary method is specific to Internet Explorer browser.

### Syntax

```js
var retVal = element.msGetRegionContent();
```

### Parameters

**retVal** \[out, reval]

Type: _MSRangeCollection_

The name of the property to enable.

### Return value

Type: _Boolean_

Returned ranges are sorted by document position and do not overlap. If an element is not a region, this method throws a `DOMException` with the `InvalidAccessError` error code. This is only available to regions that are document elements and not to regions that are pseudo-elements.

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
