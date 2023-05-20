---
title: Navigation API
slug: Web/API/Navigation_API
page-type: web-api-overview
status:
  - experimental
browser-compat:
  - api.Navigation
  - api.NavigateEvent
---

{{SeeCompatTable}}{{DefaultAPISidebar("Navigation API")}}

The **Navigation API** provides the ability to initiate, intercept, and manage browser navigation actions. It can also examine an application's history entries. This is a successor to previous web platform features such as the {{domxref("History API", "History API", "", "nocode")}} and {{domxref("window.location")}}, which solves their shortcomings and is specifically aimed at the needs of {{glossary("SPA", "single-page applications (SPAs)")}}.

## Concepts and usage

In SPAs, the page template tends to stay the same during usage, and the content is dynamically rewritten as the user visits different pages or features. As a result, only one distinct page is loaded in the browser, which breaks the expected user experience of navigating back and forth between different locations in the viewing history. This problem can be solved to a degree via the {{domxref("History API", "History API", "", "nocode")}}, but it is not designed for the needs of SPAs. The Navigation API aims to bridge that gap.

The API is accessed via the {{domxref("Window.navigation")}} property, which returns a reference to a global {{domxref("Navigation")}} object. Each `window` object has its own corresponding `navigation` instance.

### Handling navigations

The `navigation` interface has several associated events, the most notable being the {{domxref("Navigation/navigate_event", "navigate")}} event. This is fired when [any type of navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) is initiated, meaning that you can control all page navigations from one central place, ideal for routing functionality in SPA frameworks. (This is not the case with the {{domxref("History API", "History API", "", "nocode")}}, where it is sometimes hard to figure out responding to all navigations.) The `navigate` event handler is passed a {{domxref("NavigateEvent")}} object, which contains detailed information including details around the navigation's destination, type, whether it contains `POST` form data or a download request, and more.

The `NavigationEvent` object also provides two methods:

- {{domxref("NavigateEvent.intercept", "intercept()")}} takes as an argument a callback handler function returning a promise. It allows you to control what happens when the navigation is initiated. For example, in the case of an SPA, it can be used to load relevant new content into the UI based on the path of the URL navigated to.
- {{domxref("NavigateEvent.scroll", "scroll()")}} allows you to manually initiate the browser's scroll behavior (e.g. to a fragment identifier in the URL), if it makes sense for your code, rather than waiting for the browser to handle it automatically.

Once a navigation is initiated, and your `intercept()` handler is called, a {{domxref("NavigationTransition")}} object instance is created (accessible via {{domxref("Navigation.transition")}}), which can be used to track the process of the ongoing navigation.

> **Note:** In this context "transition" refers to the transition between one history entry and another. It isn't related to CSS transitions.

> **Note:** You can also call {{domxref("Event.preventDefault", "preventDefault()")}} to stop the navigation entirely for most [navigation types](/en-US/docs/Web/API/NavigateEvent/navigationType#value); cancellation of traverse navigations is not yet implemented.

When the `intercept()` handler function's promise fulfills, the `Navigation` object's {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} event fires, allowing you to run cleanup code after a successful navigation has completed. If it rejects, meaning the navigation has failed, {{domxref("Navigation/navigateerror_event", "navigateerror")}} fires instead, allowing you to gracefully handle the failure case. There is also a {{domxref("NavigationTransition.finished", "finished")}} property on the `NavigationTransition` object, which fulfills or rejects at the same time as the aforementioned events are fired, providing another path for handling the success and failure cases.

> **Note:** Before the Navigation API was available, to do something similar you'd have to listen for all click events on links, run `e.preventDefault()`, perform the appropriate {{domxref("History.pushState()")}} call, then set up the page view based on the new URL. And this wouldn't handle all navigations — only user-initiated link clicks.

### Programmatically updating and traversing the navigation history

As the user navigates through your application, each new location navigated to results in the creation of a navigation history entry. Each history entry is represented by a distinct {{domxref("NavigationHistoryEntry")}} object instance. These contain several properties such as the entry's key, URL, and state information. You can get the entry that the user is currently on right now using {{domxref("Navigation.currentEntry")}}, and an array of all existing history entries using {{domxref("Navigation.entries()")}}. Each `NavigationHistoryEntry` object has a {{domxref("NavigationHistoryEntry/dispose_event", "dispose")}} event, which fires when the entry is no longer part of the browser history. For example, if the user navigates back three times, then navigates forward to somewhere else, those three history entries will be disposed of.

> **Note:** The Navigation API only exposes history entries created in the current browsing context that have the same origin as the current page (e.g. not navigations inside embedded {{htmlelement("iframe")}}s, or cross-origin navigations), providing an accurate list of all previous history entries just for your app. This makes traversing the history a much less fragile proposition than with the older {{domxref("History API", "History API", "", "nocode")}}.

The `Navigation` object contains all the methods you'll need to update and traverse through the navigation history:

- {{domxref("Navigation.navigate", "navigate()")}} {{Experimental_Inline}}
  - : Navigates to a new URL, creating a new navigation history entry.
- {{domxref("Navigation.reload", "reload()")}} {{Experimental_Inline}}
  - : Reloads the current navigation history entry.
- {{domxref("Navigation.back", "back()")}} {{Experimental_Inline}}
  - : Navigates to the previous navigation history entry, if that is possible.
- {{domxref("Navigation.forward", "forward()")}} {{Experimental_Inline}}
  - : Navigates to the next navigation history entry, if that is possible.
- {{domxref("Navigation.traverseTo", "traverseTo()")}} {{Experimental_Inline}}
  - : Navigates to a specific navigation history entry identified by its key value, which is obtained via the relevant entry's {{domxref("NavigationHistoryEntry.key")}} property.

Each one of the above methods returns an object containing two promises — `{ committed, finished }`. This allows the invoking function to wait on taking further action until:

- `committed` fulfills, meaning that the visible URL has changed and a new {{domxref("NavigationHistoryEntry")}} has been created.
- `finished` fulfills, meaning that all promises returned by your `intercept()` handler are fulfilled. This is equivalent to the {{domxref("NavigationTransition.finished")}} promise fulfilling, when the {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} event fires, as mentioned earlier.
- either one of the above promises rejects, meaning that the navigation has failed for some reason.

### State

The Navigation API allows you to store state on each history entry. This is developer-defined information — it can be whatever you like. For example, you might want to store a `visitCount` property that records the number of times a view has been visited, or an object containing multiple properties related to UI state, so that state can be restored when a user returns to that view.

To get a {{domxref("NavigationHistoryEntry")}}'s state, you call its {{domxref("NavigationHistoryEntry.getState", "getState()")}} method. It is initially `undefined`, but when state information is set on the entry, it will return the previously-set state information.

Setting state is a bit more nuanced. You can't retrieve the state value and then update it directly — the copy stored on the entry will not change. Instead, you update it while performing a {{domxref("Navigation.navigate", "navigate()")}} or {{domxref("Navigation.reload", "reload()")}} — each one of these optionally takes an options object parameter, which includes a `state` property containing the new state to set on the history entry. When these navigations commit, the state change will be automatically applied.

In some cases however, a state change will be independent from a navigation or reload — for example when a page contains an expandable/collapsible {{htmlelement("details")}} element. In this case, you might want to store the expanded/collapsed state in your history entry, so you can restore it when the user returns to the page or restarts their browser. Cases like this are handled using {{domxref("Navigation.updateCurrentEntry()")}}. The {{domxref("Navigation/currententrychange_event", "currententrychange")}} will fire when the current entry change is complete.

### Limitations

There are a few perceived limitations with the Navigation API:

1. The current specification doesn't trigger a {{domxref("Navigation.navigate_event", "navigate")}} event on a page's first load. This might be fine for sites that use Server Side Rendering (SSR)—your server could return the correct initial state, which is the fastest way to get content to your users. But sites that leverage client-side code to create their pages may need an additional function to initialize the page.
2. The Navigation API operates only within a single frame—the top-level page, or a single specific {{htmlelement("iframe")}}. This has some interesting implications that are [further documented in the spec](https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites), but in practice, will reduce developer confusion. The previous {{domxref("History API", "History API", "", "nocode")}} has several confusing edge cases, like support for frames, which the Navigation API handles up-front.
3. You can't currently use the Navigation API to programmatically modify or rearrange the history list. It might be useful to have a temporary state, for example navigating the user to a temporary modal that asks them for some information, then going back to the previous URL. In this case, you'd want to delete the temporary modal navigation entry so the user cannot mess up the application flow by hitting the forward button and opening it again.

## Interfaces

- {{domxref("NavigateEvent")}}
  - : Event object for the {{domxref("Navigation/navigate_event", "navigate")}} event, which fires when [any type of navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) is initiated. It provides access to information about that navigation, and most notably the {{domxref("NavigateEvent.intercept", "intercept()")}}, which allows you to control what happens when the navigation is initiated.
- {{domxref("Navigation")}}
  - : Allows control over all navigation actions for the current `window` in one central place, including initiating navigations programmatically, examining navigation history entries, and managing navigations as they happen.
- {{domxref("NavigationCurrentEntryChangeEvent")}}
  - : Event object for the {{domxref("Navigation/currententrychange_event", "currententrychange")}} event, which fires when the {{domxref("Navigation.currentEntry")}} has changed. It provides access to the navigation type, and the previous history entry that was navigated from.
- {{domxref("NavigationDestination")}}
  - : Represents the destination being navigated to in the current navigation.
- {{domxref("NavigationHistoryEntry")}}
  - : Represents a single navigation history entry.
- {{domxref("NavigationTransition")}}
  - : Represents an ongoing navigation.

## Extensions to other interfaces

- {{domxref("Window.navigation")}}
  - : Returns the current `window`'s associated {{domxref("Navigation")}} object. Entry point for the API.

## Examples

> **Note:** Check out Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/).

### Handling a navigation using `intercept()`

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

### Handling scrolling using `scroll()`

In this example of intercepting a navigation, the `handler()` function starts by fetching and rendering some article content, but then fetches and renders some secondary content afterwards. It makes sense to scroll the page to the main article content as soon as it is available so the user can interact with it, rather than waiting until the secondary content is also rendered. To achieve this, we have added a {{domxref("NavigateEvent.scroll", "scroll()")}} call between the two.

```js
navigation.addEventListener("navigate", (event) => {
  if (shouldNotIntercept(event)) {
    return;
  }
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);

        event.scroll();

        const secondaryContent = await getSecondaryContent(url.pathname);
        addSecondaryContent(secondaryContent);
      },
    });
  }
});
```

### Traversing to a specific history entry

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate("/another_url").finished;
```

### Updating state

```js
navigation.navigate(url, { state: newState });
```

Or

```js
navigation.reload({ state: newState });
```

Or if the state is independent from a navigation or reload:

```js
navigation.updateCurrentEntry({ state: newState });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
