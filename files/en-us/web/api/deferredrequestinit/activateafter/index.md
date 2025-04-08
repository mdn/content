---
title: "DeferredRequestInit: activateAfter property"
short-title: x
slug: Web/API/DeferredRequestInit/activateAfter
page-type: web-api-instance-property
browser-compat: api.Window.fetchLater
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

The **`activateAfter`** property of the {{domxref("DeferredRequestInit")}} is a {{ domxref("DOMHighResTimeStamp") }} indicating a timeout in milliseconds after which the fetch request should be sent.

The fetch can be sent earlier on navigating away. The _actual_ sending time is unknown, as the browser may wait for a longer or shorter time, for example, to optimize the batching of deferred fetches. If the `activateAfter` property is not provided, the deferred fetch waits until the end of the page visit (including entering the [bfcache](/en-US/docs/Glossary/bfcache)).

## Value

A {{ domxref("DOMHighResTimeStamp") }} timeout in milliseconds.

## Examples

### Defer a `POST` request for around one minute

```js
const result = fetchLater("https://report.example.com", {
  method: "POST",
  body: JSON.stringify(myReport),
  activateAfter: 60000 /* 1 minute */,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
