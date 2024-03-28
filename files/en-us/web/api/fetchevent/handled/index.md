---
title: "FetchEvent: handled property"
short-title: handled
slug: Web/API/FetchEvent/handled
page-type: web-api-instance-property
browser-compat: api.FetchEvent.handled
---

{{APIRef("Service Workers API")}}

The **`handled`** property of the {{DOMxRef("FetchEvent")}} interface returns a promise indicating if the event has been handled by the fetch algorithm or not. This property allows executing code after the browser has consumed a response, and is usually used together with the {{DOMxRef("ExtendableEvent.waitUntil", "waitUntil()")}} method.

## Value

A {{jsxref("Promise")}} that is pending while the event has not been handled, and fulfilled once it has.

## Examples

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    (async function () {
      const response = await doCalculateAResponse(event.request);

      event.waitUntil(
        (async function () {
          await doSomeAsyncStuff(); // optional

          // Wait for the event to be consumed by the browser
          await event.handled;

          return doFinalStuff(); // Finalize AFTER the event has been consumed
        })(),
      );

      return response;
    })(),
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("ExtendableEvent.waitUntil()")}}
