---
title: PresentationRequest.start()
slug: Web/API/PresentationRequest/start
tags:
  - Experimental
  - Method
  - Presentation API
  - PresentationRequest
  - Reference
  - start()
browser-compat: api.PresentationRequest.start
---
{{APIRef("Presentation API")}}{{SeeCompatTable}}

The **`start()`** property of the
{{domxref("PresentationRequest")}} interface returns a {{jsxref("Promise")}} that
resolves with a {{domxref("PresentationConnection")}} after the user agent prompts the
user to select a display and grant permission to use that display.

## Syntax

```js
var promise = presentationRequest.start()
promise.then(function(PresentationConnection) { /* ... */ })
       .catch(function(error) { ...})
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("PresentationConnection")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
