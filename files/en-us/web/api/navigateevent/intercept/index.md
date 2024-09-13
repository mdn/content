---
title: "NavigateEvent: intercept() method"
short-title: intercept()
slug: Web/API/NavigateEvent/intercept
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.NavigateEvent.intercept
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`intercept()`** method of the
{{domxref("NavigateEvent")}} interface intercepts this navigation, turning it into a same-document navigation to the {{domxref("NavigationDestination.url", "destination")}} URL.

## Syntax

```js-nolint
intercept()
intercept(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `handler` {{optional_inline}}
      - : A callback function that defines what the navigation handling behavior should be. This generally handles resource fetching, and returns a promise.
    - `focusReset` {{optional_inline}}
      - : Defines the navigation's focus behavior. This may take one of the following values:
        - `after-transition`
          - : Once the promise returned by your handler function resolves, the browser will focus the first element with the [`autofocus`](/en-US/docs/Web/HTML/Global_attributes/autofocus) attribute, or the {{htmlelement("body")}} element if no element has `autofocus` set. This is the default value.
        - `manual`
          - : Disable the default behavior.
    - `scroll` {{optional_inline}}
      - : Defines the navigation's scrolling behavior. This may take one of the following values:
        - `after-transition`
          - : Allow the browser to handle scrolling, for example by scrolling to the relevant fragment identifier if the URL contains a fragment, or restoring the scroll position to the same place as last time if the page is reloaded or a page in the history is revisited. This is the default value.
        - `manual`
          - : Disable the default behavior.

### Return value

None (`undefined`).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the current {{domxref("Document")}} is not yet active, or if the navigation has been cancelled.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the event was dispatched by a {{domxref("EventTarget.dispatchEvent", "dispatchEvent()")}} call, rather than the user agent, or if the navigation cannot be intercepted (i.e. {{domxref("NavigateEvent.canIntercept")}} is `false`).

## Examples

### Handling a navigation using `intercept()`

```js
navigation.addEventListener("navigate", (event) => {
  // Exit early if this navigation shouldn't be intercepted,
  // e.g. if the navigation is cross-origin, or a download request
  if (shouldNotIntercept(event)) return;

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // The URL has already changed, so show a placeholder while
        // fetching the new content, such as a spinner or loading page
        renderArticlePagePlaceholder();

        // Fetch the new content and display when ready
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
      },
    });
  }
});
```

### Using `focusReset` and `scroll`

Form submission can be detected by querying for the {{domxref("NavigateEvent.formData")}} property. The following example turns any form submission into one which stays on the current page. In this case, you don't update the DOM, so you can cancel any default reset and scroll behavior using `focusReset` and `scroll`.

```js
navigation.addEventListener("navigate", (event) => {
  if (event.formData && event.canIntercept) {
    // User submitted a POST form to a same-domain URL
    // (If canIntercept is false, the event is just informative:
    // you can't intercept this request, although you could
    // likely still call .preventDefault() to stop it completely).

    event.intercept({
      // Since we don't update the DOM in this navigation,
      // don't allow focus or scrolling to reset:
      focusReset: "manual",
      scroll: "manual",
      async handler() {
        await fetch(event.destination.url, {
          method: "POST",
          body: event.formData,
        });
        // You could navigate again with {history: 'replace'} to change the URL here,
        // which might indicate "done"
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
