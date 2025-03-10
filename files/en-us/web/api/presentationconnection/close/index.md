---
title: "PresentationConnection: close() method"
short-title: close()
slug: Web/API/PresentationConnection/close
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PresentationConnection.close
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

When the `close()` method is called on a {{domxref("PresentationConnection")}}, the {{Glossary("user agent")}} begins the process of closing the connection by sending an empty `closeMessage` with the `closeReason` set to `closed`.

## Syntax

```js-nolint
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
