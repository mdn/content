---
title: "NavigateEvent: signal property"
short-title: signal
slug: Web/API/NavigateEvent/signal
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigateEvent.signal
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`signal`** read-only property of the
{{domxref("NavigateEvent")}} interface returns an {{domxref("AbortSignal")}}, which will become aborted if the navigation is cancelled (e.g. by the user pressing the browser's "Stop" button, or another navigation starting and thus cancelling the ongoing one).

## Value

An {{domxref("AbortSignal")}} object.

## Examples

The general idea here is that the `signal` property can be passed to an associated {{domxref("Window/fetch", "fetch()")}} operation so that if the navigation is cancelled, the `fetch()` operation can be safely aborted, avoiding wasting bandwidth on fetches that are no longer needed.

```js
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // ...

      await fetch(`/img/some-image.jpg`, { signal: event.signal });

      // ...
    },
  });
});
```

> [!NOTE]
> See [Example: next/previous buttons](https://github.com/WICG/navigation-api#example-nextprevious-buttons) for a more detailed example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)
