---
title: PresentationConnection.send()
slug: Web/API/PresentationConnection/send
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - Method
  - NeedsContent
  - NeedsExample
  - Presentation API
  - PresentationConnection
  - Reference
  - send
browser-compat: api.PresentationConnection.send
---
{{APIRef("Presentation")}}{{SeeCompatTable}}

The **`send()`** method of the
{{domxref("PresentationConnection")}} interface tells a controlling browsing context to
send binary or text data to a presenting browsing context.

## Syntax

```js
send(data)
```

### Parameters

- `data`

  - : The data to send to the presentation context. It will be one of the following:

    - {{jsxref("String")}}
    - {{domxref("Blob")}}
    - {{jsxref("Array")}}

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
