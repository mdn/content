---
title: FetchLaterResult interface
slug: Web/API/FetchLaterResult
page-type: web-api-interface
browser-compat: api.Window.FetchLaterResult
---

{{DefaultAPISidebar("fetchLater API")}}

The **`FetchLaterResult`** interface of the [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API) is returned by the {{domxref("Window.FetchLater()")}} method after a deferred fetch has been created.

It contains a single `activated` property that indicates whether the deferred request has been sent out or not.

On successful sending, the whole response is ignored — including body and headers — so the response of the deferred fetch is never returned to the `FetchLaterResult` interface.

## Instance properties

- `activated` {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A read-only boolean field that indicates whether the deferred request has been sent out or not. This will `false` initially and then be updated by the browser once the deferred fetch has been sent.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("fetchLater() API")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
