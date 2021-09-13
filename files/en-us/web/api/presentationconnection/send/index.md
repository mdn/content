---
title: PresentationConnection.send()
slug: Web/API/PresentationConnection/send
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
{{APIRef("Presentation")}}

The **`send()`** method of the
{{domxref("PresentationConnection")}} interface tells a controlling browsing context to
send binary or text data to a presenting browsing context.

## Syntax

```js
PresentationConnection.send(data);
```

### Parameters

- `data`

  - : The data to send to the presentation context. It will be one of the following:

    - {{jsxref("String")}}
    - {{domxref("Blob")}}
    - {{jsxref("Array")}}

### Return value

`undefined`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
