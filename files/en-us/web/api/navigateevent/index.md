---
title: NavigateEvent
slug: Web/API/NavigateEvent
page-type: web-api-interface
tags:
  - API
  - History
  - Interface
  - Landing
  - Navigate
  - NavigateEvent
  - Navigation API
  - Scroll
  - Traversal
browser-compat: api.NavigateEvent
---

{{DefaultAPISidebar("Navigation API")}}

The **`NavigateEvent`** interface of the {{domxref("Navigation API")}} is the event object for the {{domxref("Navigation/navigate_event", "navigate")}} event, which fires when [any type of navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) is initiated (this includes usage of History API features like {{domxref("History.go()")}}). `NavigateEvent` provides access to information about that navigation, and allows developers to intercept and control the navigation handling.

{{InheritanceDiagram}}

## Constructor

- {{domxref("NavigateEvent.NavigateEvent", "NavigateEvent()")}}
  - : Creates a new `NavigateEvent` object instance.

## Instance properties

_Inherits properties from its parent, {{DOMxRef("Event")}}._

- {{domxref("NavigateEvent.canIntercept", "canIntercept")}} {{ReadOnlyInline}}
  - : Returns `true` if the navigation can be intercepted, or `false` otherwise (e.g. you can't intercept a cross-origin navigation).
- {{domxref("NavigateEvent.destination", "destination")}} {{ReadOnlyInline}}
  - : Returns the URL being navigated to.
- {{domxref("NavigateEvent.downloadRequest", "downloadRequest")}} {{ReadOnlyInline}}
  - : Returns the filename of the file requested for download, in the case of a download navigation (e.g. an {{htmlelement("a")}} or {{htmlelement("area")}} element with a `download` attribute), or `null` otherwise.
- {{domxref("NavigateEvent.formData", "formData")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("FormData")}} object representing the submitted data in the case of a `POST` form submission, or null otherwise.
- {{domxref("NavigateEvent.hashChange", "hashChange")}} {{ReadOnlyInline}}
  - : Returns `true` if the navigation is a fragment navigation (i.e. to a fragment identifier in the same document), or `false` otherwise.
- {{domxref("NavigateEvent.info", "info")}} {{ReadOnlyInline}}
  - : Returns the `info` data value passed by the initiating navigation operation (e.g. {{domxref("Navigation.back()")}}, or {{domxref("Navigation.navigate()")}}), or `undefined` if no `info` data was passed.
- {{domxref("NavigateEvent.navigationType", "navigationType")}} {{ReadOnlyInline}}
  - : Returns the type of the navigation, which is one of `push`, `reload`, `replace`, or `traverse`.
- {{domxref("NavigateEvent.signal", "signal")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("AbortSignal")}}, which will become aborted if the navigation is cancelled (e.g. by the user pressing the browser's "Stop" button).
- {{domxref("NavigateEvent.userInitiated", "userInitiated")}} {{ReadOnlyInline}}
  - : Returns `true` if the navigation was initiated by the user (e.g. by clicking a link, submitting a form, or pressing the browser's "Back"/"Forward" buttons), or `false` otherwise.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("Event")}}._

- {{domxref("NavigateEvent.intercept", "intercept()")}}
  - : Intercepts this navigation, turning it into a same-document navigation to the {{domxref("NavigateEvent.destination", "destination")}} URL. It can accept a handler that defines what the navigation handling behavior should be, plus options to control autofocus ansd scroll behavior as desired.
- {{domxref("NavigateEvent.scroll", "scroll()")}}
  - : Can be called to manually trigger the browser-driven scrolling behavior that occurs in response to the navigation, if you want it to happen before the navigation handling has completed.

## Examples

### Handling a navigation using `intercept()`

```js
navigation.addEventListener('navigate', navigateEvent => {
  // Exit early if this navigation shouldn't be intercepted, 
  // e.g. if the navigation is cross-origin, or a download request
  if (shouldNotIntercept(navigateEvent)) return;

  const url = new URL(navigateEvent.destination.url);

  if (url.pathname.startsWith('/articles/')) {
    navigateEvent.intercept({
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

> **Note:** Previous to the Navigation API being available, to do something similar you'd have to listen for all click events on links, run `e.preventDefault()`, perform the appropriate {{domxref("History.pushState()")}} call, then set up the page view based on the new URL. And this wouldn't handle all navigations — only user-initiated link clicks.

### Handling scrolling using `scroll()`

```js
navigation.addEventListener('navigate', navigateEvent => {
  if (shouldNotIntercept(navigateEvent)) return;
  const url = new URL(navigateEvent.destination.url);

  if (url.pathname.startsWith('/articles/')) {
    navigateEvent.intercept({
      async handler() {
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
        navigateEvent.scroll();

        const secondaryContent = await getSecondaryContent(url.pathname);
        addSecondaryContent(secondaryContent);
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
