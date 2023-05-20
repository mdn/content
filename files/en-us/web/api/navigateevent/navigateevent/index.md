---
title: "NavigateEvent: NavigateEvent() constructor"
short-title: NavigateEvent()
slug: Web/API/NavigateEvent/NavigateEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.NavigateEvent.NavigateEvent
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`NavigateEvent()`** constructor creates a new
{{domxref("NavigateEvent")}} object instance.

## Syntax

```js-nolint
new NavigateEvent(type, init)
```

### Parameters

- `type`
  - : A string representing the type of event. In the case of `NavigateEvent` this is always `navigate`.
- `init`
  - : An object containing the following properties:
    - `canIntercept` {{optional_inline}}
      - : A boolean defining whether the navigation can be intercepted or not (e.g. you can't intercept a cross-origin navigation). Defaults to `false`.
    - `destination`
      - : A {{domxref("NavigationDestination")}} object representing the location being navigated to.
    - `downloadRequest` {{optional_inline}}
      - : The filename of the file requested for download, in the case of a download navigation (e.g. an {{htmlelement("a")}} or {{htmlelement("area")}} element with a `download` attribute). Defaults to `null`.
    - `formData` {{optional_inline}}
      - : The {{domxref("FormData")}} object representing the submitted data in the case of a `POST` form submission. Defaults to `null`.
    - `hashChange` {{optional_inline}}
      - : A boolean defining if the navigation is a fragment navigation (i.e. to a fragment identifier in the same document). Defaults to `false`.
    - `info` {{optional_inline}}
      - : The `info` data value passed by the initiating navigation operation (e.g. {{domxref("Navigation.back()")}}, or {{domxref("Navigation.navigate()")}}).
    - `navigationType` {{optional_inline}}
      - : The type of the navigation. Possible values — `push`, `reload`, `replace`, and `traverse`. Defaults to `push`.
    - `signal`
      - : An {{domxref("AbortSignal")}}, which will become aborted if the navigation is cancelled (e.g. by the user pressing the browser's "Stop" button, or another navigation starting and thus cancelling the ongoing one).
    - `userInitiated` {{optional_inline}}
      - : A boolean defining whether the navigation was initiated by the user (e.g. by clicking a link, submitting a form, or pressing the browser's "Back"/"Forward" buttons). Defaults to `false`.

## Examples

A developer would not use this constructor manually. A new `NavigateEvent` object is constructed when a handler is invoked as a result of the {{domxref("Navigation.navigate_event", "navigate")}} event firing.

```js
navigation.addEventListener("navigate", (event) => {
  // Exit early if this navigation shouldn't be intercepted,
  // e.g. if the navigation is cross-origin, or a download request
  if (shouldNotIntercept(event)) {
    return;
  }

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // The URL has already changed, so show a placeholder while
        //fetching the new content, such as a spinner or loading page
        renderArticlePagePlaceholder();

        // Fetch the new content and display when ready
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
      },
    });
  }
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
