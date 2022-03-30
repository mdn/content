---
title: WindowClient.focus()
slug: Web/API/WindowClient/focus
tags:
  - API
  - Client
  - Experimental
  - Focus
  - Method
  - Reference
  - Service Workers
  - WindowClient
browser-compat: api.WindowClient.focus
---
{{APIRef("Service Workers API")}}

The **`focus()`** method of the {{domxref("WindowClient")}}
interface gives user input focus to the current client and returns a
{{jsxref("Promise")}} that resolves to the existing
{{domxref("WindowClient")}}.

## Syntax

```js
windowClient.focus().then(function(windowClient) {
  // do something with your WindowClient once it has been focused
});
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to the existing {{domxref("WindowClient")}}.

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
      if (client.url == '/' && 'focus' in client)
        return client.focus();
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
