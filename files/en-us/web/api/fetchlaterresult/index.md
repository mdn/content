---
title: FetchLaterResult interface
slug: Web/API/FetchLaterResult
page-type: web-api-interface
---

{{DefaultAPISidebar("fetchLater API")}}

The **`FetchLaterResult`** interface of the {{DOMxRef("fetchLater() API")}} is returned by the {{domxref("window.FetchLater()")}} method after a deferred fetch has been created.

It contains a single `activated` property

On successful sending, the whole response is ignored, including body and headers so the response of the deferred fetch is never returned to the `FetchLaterResult` interface.

## Instance properties

- `activated` {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A read-only boolean field that indicates whether the deferred request has been sent out or not. This may be updated later by the browser.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using fetchLater](/en-US/docs/Web/API/fetchLater_API/Using_fetchLater)
- [HTTP](/en-US/docs/Web/HTTP)
