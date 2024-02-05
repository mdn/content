---
title: "NavigateEvent: navigationType property"
short-title: navigationType
slug: Web/API/NavigateEvent/navigationType
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigateEvent.navigationType
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`navigationType`** read-only property of the
{{domxref("NavigateEvent")}} interface returns the type of the navigation — `push`, `reload`, `replace`, or `traverse`.

## Value

An enumerated value representing the type of navigation.

The possible values are:

- `push`: A new location is navigated to, causing a new entry to be pushed onto the history list.
- `reload`: The {{domxref("Navigation.currentEntry")}} is reloaded.
- `replace`: The {{domxref("Navigation.currentEntry")}} is replaced with a new history entry. This new entry will reuse the same {{domxref("NavigationHistoryEntry.key", "key")}}, but be assigned a different {{domxref("NavigationHistoryEntry.id", "id")}}.
- `traverse`: The browser navigates from one existing history entry to another existing history entry.

## Examples

### Async transitions with special back/forward handling

Sometimes it's desirable to handle back/forward navigations specially, e.g. reusing cached views by transitioning them onto the screen. This can be done by branching as follows:

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
    async handler() {
      if (myFramework.currentPage) {
        await myFramework.currentPage.transitionOut();
      }

      let { key } = event.destination;

      if (
        event.navigationType === "traverse" &&
        myFramework.previousPages.has(key)
      ) {
        await myFramework.previousPages.get(key).transitionIn();
      } else {
        // This will probably result in myFramework storing
        // the rendered page in myFramework.previousPages.
        await myFramework.renderPage(event.destination);
      }
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
