---
title: "NavigateEvent: hasUAVisualTransition property"
short-title: hasUAVisualTransition
slug: Web/API/NavigateEvent/hasUAVisualTransition
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigateEvent.hasUAVisualTransition
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`hasUAVisualTransition`** read-only property of the {{domxref("NavigateEvent")}} interface returns `true` if the user agent performed a visual transition for this navigation before dispatching this event, or `false` otherwise.

User agents may provide a built-in visual transition when executing site navigations. If the site author also adds a visual transition, user agent and author transitions may conflict and confuse a visitor. The property lets you detect whether a UA transition was provided so that you can skip author transitions for a better user experience.

## Value

A boolean value.

## Examples

```js
navigation.addEventListener("navigate", (event) => {
  // Some navigations, e.g. cross-origin navigations, we
  // cannot intercept. Let the browser handle those normally.
  if (!event.canIntercept) {
    return;
  }

  // Don't intercept fragment navigations or downloads.
  if (event.hashChange || event.downloadRequest !== null) {
    return;
  }

  event.intercept({
    handler() {
      // Fetch the new content
      const newContent = await fetchNewContent(event.destination.url, {
        signal: event.signal,
      });

      // The UA does not support View Transitions, or the UA
      // already provided a Visual Transition by itself (e.g. swipe back).
      // In either case, update the DOM directly
      if (!document.startViewTransition || event.hasUAVisualTransition) {
        doSinglePageAppNav(newContent);
        return;
      }

      // Update the content using a View Transition
      document.startViewTransition(() => {
        doSinglePageAppNav(newContent);
      });
    },
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)
- [Same-document view transitions for single-page applications](https://developer.chrome.com/docs/web-platform/view-transitions/same-document)
