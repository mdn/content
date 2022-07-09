---
title: Element.msGetRegionContent
slug: Web/API/Element/msGetRegionContent
page-type: web-api-instance-method
tags:
  - msGetRegionContent
  - Non-standard
  - Method
---
{{APIRef("DOM")}}

{{Non-standard_header()}}

The **`msGetRegionContent`**  method returns an array of Range instances corresponding to the content from the region flow that is positioned in the region.

This proprietary method is specific to Internet Explorer browser.

### Syntax

```js
msGetRegionContent()
```

### Parameters

None.

### Return value

An array of {{domxref("Range")}} objects sorted by document position and do not overlap.

### Exception

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown when an element is not a region.

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
