---
title: WindowClient
slug: Web/API/WindowClient
page-type: web-api-interface
tags:
  - API
  - Client
  - Interface
  - Reference
  - Service Workers
  - ServiceWorker
  - WindowClient
browser-compat: api.WindowClient
---

{{APIRef("Service Workers API")}}

The `WindowClient` interface of the [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API) represents the scope of a service worker client that is a document in a browsing context, controlled by an active worker. The service worker client independently selects and uses a service worker for its own loading and sub-resources.

{{InheritanceDiagram}}

## Methods

_`WindowClient` inherits methods from its parent interface, {{domxref("Client")}}._

- {{domxref("WindowClient.focus()")}}
  - : Gives user input focus to the current client.
- {{domxref("WindowClient.navigate()")}}
  - : Loads a specified URL into a controlled client page.

## Properties

_`WindowClient` inherits properties from its parent interface, {{domxref("Client")}}._

- {{domxref("WindowClient.focused")}} {{ReadOnlyInline}}
  - : A boolean that indicates whether the current client has focus.
- {{domxref("WindowClient.visibilityState")}} {{ReadOnlyInline}}
  - : Indicates the visibility of the current client. This value can be one of `"hidden"`, `"visible"`, or `"prerender"`.

## Example

```js
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) {
            client.focus();
            break;
          }
        }
        if (clients.openWindow) return clients.openWindow("/");
      })
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Channel Messaging API](/en-US/docs/Web/API/Channel_Messaging_API)
