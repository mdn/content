---
title: "PresentationRequest: start() method"
short-title: start()
slug: Web/API/PresentationRequest/start
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PresentationRequest.start
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`start()`** property of the {{domxref("PresentationRequest")}} interface returns a {{jsxref("Promise")}} that resolves with a {{domxref("PresentationConnection")}} after the user agent prompts the user to select a display and grant permission to use that display.

## Syntax

```js-nolint
start()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("PresentationConnection")}}.

## Security

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
