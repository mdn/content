---
title: "FetchEvent: replacesClientId property"
short-title: replacesClientId
slug: Web/API/FetchEvent/replacesClientId
page-type: web-api-instance-property
browser-compat: api.FetchEvent.replacesClientId
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

The **`replacesClientId`** read-only property of the
{{domxref("FetchEvent")}} interface is the {{domxref("Client.id", "id")}} of the
{{domxref("Client", "client")}} that is being replaced during a page navigation.

For example, when navigating from page A to page B `replacesClientId` is the
ID of the client associated with page A. It can be an empty string when navigating from
`about:blank` to another page, as `about:blank`'s client will be
reused, rather than be replaced.

Additionally, if the fetch isn't a navigation, `replacesClientId` will be an
empty string. This could be used to access/communicate with a client that will
imminently be replaced, right before a navigation.

## Value

A string.

## Examples

```js
self.addEventListener("fetch", (event) => {
  console.log(event.replacesClientId);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
