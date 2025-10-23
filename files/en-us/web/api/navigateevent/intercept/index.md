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
      - : A callback function that defines what the navigation handling behavior should be; it returns a promise. This function will run after the {{domxref("Navigation.currentEntry", "currentEntry")}} property has been updated.
    - `precommitHandler` {{optional_inline}}
      - : A callback function that defines any behavior that should occur just before the navigation has committed; it accepts a controller object as an argument and returns a promise. This function will run before the {{domxref("Navigation.currentEntry", "currentEntry")}} property has been updated.
    - `focusReset` {{optional_inline}}
      - : Defines the navigation's focus behavior. This may take one of the following values:
        - `after-transition`
          - : Once the promise returned by your handler function resolves, the browser will focus the first element with the [`autofocus`](/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus) attribute, or the {{htmlelement("body")}} element if no element has `autofocus` set. This is the default value.
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
  - : Thrown if:
    - The event was dispatched by a {{domxref("EventTarget.dispatchEvent", "dispatchEvent()")}} call, rather than the user agent.
    - The navigation cannot be intercepted ({{domxref("NavigateEvent.canIntercept")}} is `false`).
    - A `precommitHandler()` callback is provided on a non-cancelable event ({{domxref("Event.cancelable")}} is `false`).

## Description

The `intercept()` method is used to implement same-document (SPA) navigation behavior when a navigation occurs; for example, when a link is clicked, a form is submitted, or a programmatic navigation is initiated (using {{domxref("History.pushState()")}}, {{domxref("Window.location")}}, etc.).

It does this via a couple of different callbacks, `handler()` and `precommitHandler()`.

### Handling immediate navigations with `handler()`

The `handler()` callback is run in response to a committed navigation. It will run after the {{domxref("Navigation.currentEntry", "currentEntry")}} property has been updated, meaning that a new URL is shown in the browser UI and the history is updated with a new entry.

A typical example looks like this, enabling specific content to be rendered and loaded in response to a certain navigation:

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // Fetch the new content and display when ready
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
      },
    });
  }

  // Include multiple conditions for different page types here, as needed
});
```

`handler()` should be used to implement navigation behavior where the navigation is committed to: the user should be shown something new.

### Handling precommit actions with `precommitHandler()`

However, you might also wish to modify or cancel in-flight navigation, or to perform work while the navigation is ongoing and before it is committed. This kind of scenario can be dealt with using the `precommitHandler()` callback, which runs before the {{domxref("Navigation.currentEntry", "currentEntry")}} property has been updated and the browser UI shows the new location.

For example, if the user navigates to a restricted page and is not signed in, you may want to redirect the browser to a sign-in page. This might be handled like so:

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/restricted/") && !userSignedIn) {
    event.intercept({
      async precommitHandler(controller) {
        controller.redirect("/signin/", {
          state: "signin-redirect",
          history: "push",
        });
      },
    });
  }
});
```

This pattern is simpler than the alternative of canceling the original navigation and starting a new one to the redirect location, because it avoids exposing the intermediate state. For example, only one `navigatesuccess` or `navigateerror` event fires, and if the navigation was triggered by a call to {{domxref("Navigation.navigate()")}}, the promise only fulfills once the redirect destination is reached.

The `precommitHandler()` callback takes a `controller` object as an argument, which contains a `redirect()` method. The `redirect()` method takes two parameters — a string representing the URL to redirect to, and an options object containing two parameters:

- `state` {{optional_inline}}
  - : Contains any state information you want to pass along with the navigation, for example, for logging or tracking purposes. The state for the navigation can subsequently be retrieved via {{domxref("NavigationHistoryEntry.getState()")}}.
- `history` {{optional_inline}}
  - : An enumerated value that specifies how this redirect should be added to the navigation history. It can take one of the following values:
    - `auto`
      - : The default value, which lets the browser decide how to handle it:
        - If the original navigation occurred as a result of a {{domxref("Navigation.navigate()")}} call, the value will be whatever was specified in the `navigate()` call's [`history`](/en-US/docs/Web/API/Navigation/navigate#history) option.
        - Otherwise, the value used is usually `push`, but it will become `replace` if the redirect points to the same URL as the pre-navigation URL.
    - `push`
      - : Adds a new {{domxref("NavigationHistoryEntry")}} to the navigation history, and clears any available forward navigation (that is, if the user previously navigated to other locations, then used the back button to return back through the history before then initiating the navigation that caused the redirect).
    - `replace`
      - : Replaces the {{domxref("Navigation.currentEntry")}} with the `NavigationHistoryEntry`.

> [!NOTE]
> The `redirect()` method can can convert the history behavior between `auto`, `push`, and `replace`, but it cannot turn a `traverse` navigation into a `push`/`replace` navigation and vice versa.

`precommitHandler()` generally handles any modifications to the navigation behavior that are required before the destination URL is actually displayed in the browser, cancelling or redirecting it somewhere else as required. Because `precommitHandler()` can be used to cancel navigations, they can only be run when the event's {{domxref("Event.cancelable")}} property is `true`. Calling `intercept()` with a `precommitHandler()` on a non-cancelable event results in a `SecurityError` being thrown.

### Responding to navigation success or failure

When the promises returned by the `intercept()` handler functions fulfill, the `Navigation` object's {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} event fires, allowing you to run cleanup code after a successful navigation has completed. If they reject, meaning the navigation has failed, {{domxref("Navigation/navigateerror_event", "navigateerror")}} fires instead, allowing you to gracefully handle the failure case.

There is also a `finished` property on the return value of navigation methods (such as {{domxref("Navigation.navigate()")}}), which fulfills or rejects at the same time as the aforementioned events are fired, providing another path for handling the success and failure cases.

### Interaction between `precommitHandler()` and `handler()`

Both `precommitHandler()` and `handler()` callbacks can be included inside the same `intercept()` call.

1. First, the `precommitHandler()` handler runs.
   - When the `precommitHandler()` promise fulfills, the navigation commits.
   - If the `precommitHandler()` rejects, `navigateerror` fires, the `committed` and `finished` promises reject, and the navigation is cancelled.

2. When the navigation commits, a new {{domxref("NavigationHistoryEntry")}} is created for the navigation, and its `committed` promise fulfills.
3. Next, the `handler()` promise runs.
   - When the `handler()` promise fulfills and the `navigatesuccess` event fires, the navigation `finished` promise fulfills as well, to indicate the navigation is finished.
   - If `handler()` rejects, `navigateerror` fires, the `finished` promise rejects, and the navigation is canceled.

Note that the above process is upheld even across multiple `intercept()` calls on the same `NavigateEvent`. All `precommitHandler()` callbacks are called first, and when all of them resolve, the navigation commits, and all the `handler()` callbacks are called.

### Controlling focus behavior

By default, after a navigation handled using `intercept()` has occurred, the document focus will reset to the first element in the DOM with an [`autofocus`](/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus) attribute set, or the {{htmlelement("body")}} element, if no `autofocus` attribute is set. If you want to override this behavior, to manually implement a more accessible focus position on navigation (for example, the new top-level heading), you can do so by setting the `focusReset` option to `manual`.

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      focusReset: manual,
      async handler() {
        // Fetch the new content and display when ready
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
        // Handle page focus with a custom function
        setPageFocus();
      },
    });
  }
});
```

### Controlling scroll behavior

After an `intercept()` navigation occurs, the following scrolling behavior occurs:

- For `push` and `replace` navigations (see {{domxref("Navigation.navigate()")}}), the browser will attempt to scroll to the fragment given by `event.destination.url`. If there is no fragment available, it will reset the scroll position to the top of the page.
- For {{domxref("Navigation.traverseTo", "traverse")}} and {{domxref("Navigation.reload", "reload")}} navigations, the browser behaves similarly to the previous bullet description, but delays its scroll restoration logic until the `intercept()` promise fulfills. It will perform no scroll restoration if the promise rejects. If the user has scrolled during the transition then no scroll restoration will be performed.

If you want to turn this behavior off, you can do so by setting the `scroll` option to `manual`.

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      scroll: manual,
      async handler() {
        // Fetch the new content and display when ready
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
        // Handle scroll behavior with a custom function
        setScroll();
      },
    });
  }
});
```

If you want to manually trigger the default scrolling behavior described earlier (maybe you want to reset the scroll position to the top of the page early, before the full navigation has finished), you can do so by calling {{domxref("NavigateEvent.scroll()")}}.

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
        // You could navigate again with {history: 'replace'} to
        // change the URL here, which might indicate "done"
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
