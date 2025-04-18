---
title: FetchLaterResult
slug: Web/API/FetchLaterResult
page-type: web-api-interface
status:
  - experimental
browser-compat: api.FetchLaterResult
---

{{APIRef("fetchLater API")}}{{SeeCompatTable}}

The **`FetchLaterResult`** interface of the [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API) is returned by the {{domxref("Window.FetchLater()")}} method after a deferred fetch has been created.

It contains a single `activated` property that indicates whether the deferred request has been sent out or not.

After a successful sending, the whole response is ignored — including body and headers — so the response of the deferred fetch is never returned to the `FetchLaterResult` interface.

## Instance properties

- {{domxref('FetchLaterResult.activated')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A read-only boolean field that indicates whether the deferred request has been sent out. This is initially set to `false` and will then be updated by the browser once the deferred fetch has been sent.

## Examples

### Defer a `POST` request for around one minute and create a function to check if sent

```js
const result = fetchLater("https://report.example.com", {
  method: "POST",
  body: JSON.stringify(myReport),
  activateAfter: 60000 /* 1 minute */,
});

function check_if_fetched() {
  return result.activated;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API)
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
