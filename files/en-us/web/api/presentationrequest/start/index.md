---
title: PresentationRequest.start()
slug: Web/API/PresentationRequest/start
page-type: web-api-instance-method
tags:
  - Experimental
  - Method
  - Presentation API
  - PresentationRequest
  - Reference
  - start()
browser-compat: api.PresentationRequest.start
---
{{DefaultAPISidebar("Presentation API")}}{{SeeCompatTable}}

The **`start()`** property of the {{domxref("PresentationRequest")}} interface returns a {{jsxref("Promise")}} that resolves with a {{domxref("PresentationConnection")}} after the user agent prompts the user to select a display and grant permission to use that display.

## Syntax

```js
const promise = presentationRequest.start()
promise.then((PresentationConnection) => { /* ... */ })
       .catch((error) => { /* ... */ })
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("PresentationConnection")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
