---
title: "FetchLaterResult: activated property"
short-title: activated
slug: Web/API/FetchLaterResult/activated
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.FetchLaterResult.activated
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

The **`activated`** read-only property of the {{domxref("FetchLaterResult")}} interface returns a boolean specifying whether the deferred fetch has been sent.

## Value

A {{jsxref('Boolean')}}.

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
