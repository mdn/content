---
title: "PresentationConnection: send() method"
short-title: send()
slug: Web/API/PresentationConnection/send
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PresentationConnection.send
---

{{APIRef("Presentation")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`send()`** method of the
{{domxref("PresentationConnection")}} interface tells a controlling browsing context to
send binary or text data to a presenting browsing context.

## Syntax

```js-nolint
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
