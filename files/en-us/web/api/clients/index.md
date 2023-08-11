---
title: Clients
slug: Web/API/Clients
page-type: web-api-interface
browser-compat: api.Clients
---

{{APIRef("Service Workers API")}}

The `Clients` interface provides access to {{domxref("Client")}} objects. Access it via `{{domxref("ServiceWorkerGlobalScope", "self")}}.clients` within a [service worker](/en-US/docs/Web/API/Service_Worker_API).

## Instance methods

- {{domxref("Clients.get()")}}
  - : Returns a {{jsxref("Promise")}} for a {{domxref("Client")}} matching a given {{domxref("Client.id", "id")}}.
- {{domxref("Clients.matchAll()")}}
  - : Returns a {{jsxref("Promise")}} for an array of {{domxref("Client")}} objects. An options argument allows you to control the types of clients returned.
- {{domxref("Clients.openWindow()")}}
  - : Opens a new browser window for a given URL and returns a {{jsxref("Promise")}} for the new {{domxref("WindowClient")}}.
- {{domxref("Clients.claim()")}}
  - : Allows an active service worker to set itself as the {{domxref("ServiceWorkerContainer.controller", "controller")}} for all clients within its {{domxref("ServiceWorkerRegistration.scope", "scope")}}.

## Examples

The following example shows an existing chat window or creates a new one when the user clicks a notification.

```js
addEventListener("notificationclick", (event) => {
  event.waitUntil(
    (async () => {
      const allClients = await clients.matchAll({
        includeUncontrolled: true,
      });

      let chatClient;

      // Let's see if we already have a chat window open:
      for (const client of allClients) {
        const url = new URL(client.url);

        if (url.pathname === "/chat/") {
          // Excellent, let's use it!
          client.focus();
          chatClient = client;
          break;
        }
      }

      // If we didn't find an existing chat window,
      // open a new one:
      if (!chatClient) {
        chatClient = await clients.openWindow("/chat/");
      }

      // Message the client:
      chatClient.postMessage("New chat messages!");
    })(),
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
