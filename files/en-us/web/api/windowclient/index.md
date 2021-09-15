---
title: WindowClient
slug: Web/API/WindowClient
tags:
  - API
  - Client
  - Experimental
  - Interface
  - Reference
  - Service Workers
  - ServiceWorker
  - WindowClient
browser-compat: api.WindowClient
---
{{APIRef("Service Workers API")}}

The `WindowClient` interface of the [ServiceWorker API](/en-US/docs/Web/API/ServiceWorker_API) represents the scope of a service worker client that is a document in a browsing context, controlled by an active worker. The service worker client independently selects and uses a service worker for its own loading and sub-resources.

## Methods

_`WindowClient` inherits methods from its parent interface, {{domxref("Client")}}._

- {{domxref("WindowClient.focus()")}}
  - : Gives user input focus to the current client.
- {{domxref("WindowClient.navigate()")}}
  - : Loads a specified URL into a controlled client page.

## Properties

_`WindowClient` inherits properties from its parent interface, {{domxref("Client")}}._

- {{domxref("WindowClient.focused")}} {{readonlyInline}}
  - : A boolean that indicates whether the current client has focus.
- {{domxref("WindowClient.visibilityState")}} {{readonlyInline}}
  - : Indicates the visibility of the current client. This value can be one of `"hidden"`, `"visible"`, or `"prerender"`.

## Example

```js
self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' && 'focus' in client) {
        client.focus();
        break;
      }
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using web workers](/en-US/docs/Web/Guide/Performance/Using_web_workers)
- [Channel Messaging API](/en-US/docs/Web/API/Channel_Messaging_API)
