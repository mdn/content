---
title: Navigation API
slug: Web/API/Navigation_API
page-type: web-api-overview
tags:
  - API
  - History
  - Landing
  - Navigate
  - Navigation
  - Navigation API
  - Overview
  - Scroll
  - Traversal
browser-compat:
  - api.Navigation
  - api.NavigateEvent
  - api.Window.navigation
---

{{securecontext_header}}{{seecompattable}}{{DefaultAPISidebar("Navigation API")}}

The **Navigation API** provides the ability to initiate, intercept, and manage browser navigation actions. It can also introspect an application's history entries. This is a successor to previous web platform features such as [The History API](/en-US/docs/Web/API/History_API) and {{domxref("window.location")}}, which solves their shortcomings and is specifically aimed at the needs of {{glossary("SPA", "single-page applications (SPAs)")}}.

## Concepts and Usage

In SPAs, the page template tends to stay the same during usage, and the content is dynamically rewritten as the user visits different pages or features. As a result, only one distinct page is loaded in the browser, which breaks the expected user experience of navigating back and forth between different locations in the viewing history. This problem can be solved to a degree via [The History API](/en-US/docs/Web/API/History_API), but it is not designed for the needs of SPAs. The Navigation API aims to bridge that gap.

The API is accessed via the {{domxref("Window.navigation")}} property, which returns a reference to a global {{domxref("Navigation")}} object. Each `window` object has its own corresponding `navigation` instance.

### Handling navigations

`navigation` has several associated events, the most notable being the {{domxref("Navigation/navigate_event", "navigate")}} event. This is fired when [any type of navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) is initiated, meaning that you can control all page navigations from one central place. The `navigate` event has an event object of type {{domxref("NavigateEvent")}}, which contains detailed information including the navigation's destination URL, type, whether it contains `POST` form data or a download request, and more.

It also contains two methods:

- {{domxref("NavigateEvent.intercept", "intercept()")}} allows you to control what happens when the navigation is initiated using a callback handler function, which should return a promise. For example, in the case of an SPA, it can be used to load relevant new content into the UI based on the path of the URL navigated to.
- {{domxref("NavigateEvent.scroll", "scroll()")}} allows you to manually initiate the browser's scroll behavior (e.g. to a fragment identifier in the URL), if it makes sense for your code, rather than waiting for the browser to handle it automatically.

Once a navigation is initiated, and your `intercept()` handler is called, a {{domxref("NavigationTransition")}} object instance is created (accessible via {{domxref("Navigation.transition")}}), which can be used used to track the process of the ongoing navigation.

> **Note:** In this context "transition" refers to the transition between one history entry and another. It isn't related to CSS transitions.

> **Note:** You can also call {{domxref("Event.preventDefault", "preventDefault()")}} to stop the navigation entirely.

When the `intercept()` handler function's promise fulfills, the `Navigate` object's {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} event fires, allowing you to run cleanup code after a successful navigation has completed. If it rejects, meaning the navigation has failed, {{domxref("Navigation/navigateerror_event", "navigateerror")}} fires instead, allowing you to gracefully handle the failure case. There is also a {{domxref("NavigationTransition.finished", "finished")}} property on the `NavigationTransition` object, which fullfills or rejects at the same time as the aforementioned events are fired, providing another path for handling the success and failure cases if it is needed.

### Programmatically traversing the navigation history

As the user navigates through your application, each new location navigated to results in the creation of a navigation history entry. Each history entry is represented by a distinct {{domxref("NavigationHistoryEntry")}} object instance. These contain several useful properties such as the entry's key, URL, and state information. You can return the entry that the user is currently navigated to right now using {{domxref("Navigation.currentEntry","currentEntry")}}, and an array of all existing history entries using {{domxref("Navigation.entries", "entries()")}}. Each `NavigationHistoryEntry` object has a {{domxref("NavigationHistoryEntry/dispose_event", "dispose")}} event, which fires when the entry is no longer part of the browser history (e.g. navigate back three times, then navigate forwards to somewhere else. Those three history entries will be disposed).

The `Navigation` object contains all the methods you'll need to traverse through the navigation history:

- {{domxref("Navigation.navigate", "navigate()")}} navigates to a new URL, creating a new navigation history entry.
- {{domxref("Navigation.reload", "reload()")}} reloads the current navigation history entry.
- {{domxref("Navigation.back", "back()")}} navigates to the previous navigation history entry, if that is possible.
- {{domxref("Navigation.forward", "forward()")}} navigates to the next navigation history entry, if that is possible.
- {{domxref("Navigation.traverseTo", "traverseTo()")}} navigates to a specific navigation history entry identified by its key value, which is obtained via the relevant entry's {{domxref("NavigationHistoryEntry.key")}} property.

Each one of the above methods returns an object containing two promises — `{ committed, finished }`. This allows the invoking function to wait on taking further action until:

- `committed` fulfills, meaning that the visible URL has changed and a new NavigationHistoryEntry has been created.
- `finished` fulfills, meaning that all promises returned by your `intercept()` handler are fulfilled. This is equivalent to the {{domxref("NavigationTransition.finished")}} promise fulfilling, when the {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} event fires, as mentioned earlier.
- either one of the above promises rejects, meaning that the navigation transition has failed for some reason.

### State

The Navigation API allows you to store state on each history entry. This is developer-defined information — it can be whatever you like. For example, you might want to store a `visitCount` property that records the number of times a view has been visited, or an object containing multiple properties.

To get a {{domxref("NavigationHistoryEntry")}}'s state, you call its {{domxref("NavigationHistoryEntry.getState", "getState()")}} method. It is initially `undefined`, but when state information is set on the entry, it will return the previously-set state information.

Setting state is a bit more nuanced. You can't retrieve the state value and then update it directly — the copy stored on the entry will not change. Instead, you need to update it while performing a {{domxref("Navigation.navigate", "navigate()")}} or {{domxref("Navigation.reload", "reload()")}} — each one of these optionally takes an options object parameter, which includes a `state` property containing the new state to set on the history entry. When these navigations complete, the state change will be automatically applied.

In other cases a state change is not automatically applied, and you will need to do it manually once the navigation has completed. This is handled using {{domxref("Navigation.updateCurrentEntry", "updateCurrentEntry()")}}. The {{domxref("Navigation/currententrychange_event", "currententrychange")}} will fire when the current entry change is complete.

(I'M REALLY NOT SURE IF THIS SECTION ON STATE IS ACCURATE. I AM KINDA GUESSING AT THE "AUTOMATIC BEHAVIOR" MENTIONED ABOVE, AND WHEN UPDATECURRENTENTRY() SHOULD BE USED. NONE OF THE MATERIAL I'VE FOUND SEEMS PARTICULARLY CLEAR ON THIS POINT.)

### Limitations

There are a few perceived limitations with the Navigation API, which may or may not be limitating depending on how your app is set up. Find out about these by reading [Modern client-side routing: the Navigation API > What's missing?](https://developer.chrome.com/docs/web-platform/navigation-api/#whats-missing)

## Interfaces

- {{domxref("Navigation")}}
  - : Allows control over all navigation actions for the current `window` in one central place, including initiating navigations programmatically, introspecting navigation history entries, and managing navigations as they happen.
- {{domxref("NavigationDestination")}}
  - : Represents the destination being navigated to in the current navigation.
- {{domxref("NavigationHistoryEntry")}}
  - : Represents a single navigation history entry.
- {{domxref("NavigationTransition")}}
  - : Represents an ongoing navigation.
- {{domxref("NavigationCurrentEntryChangeEvent")}}
  - : Event object for the {{domxref("Navigation/currententrychange_event", "currententrychange")}} event, which fires when the currently navigated to history entry changes. Provides access to the navigation type, and the previous history entry that was navigated from.
- {{domxref("NavigateEvent")}}
  - : Event object for the {{domxref("Navigation/navigate_event", "navigate")}} event, which fires when [any type of navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) is initiated. Provides access to information about that navigation, and most notably the {{domxref("NavigateEvent.intercept", "intercept()")}}, which allows you to control what happens when the navigation is initiated.

## Extensions to the `Window` interface

- {{domxref("Window.navigation")}}
  - : Returns the current `window`'s associated {{domxref("Navigation")}} object. Entry point for the API.

## Examples

> **Note:** Check out Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/).

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

### Traversing to a specific history entry

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const {key} = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate('/another_url').finished;
```

### Updating state

```js
navigation.navigate(url, {state: newState});
```

Or

```js
navigation.reload({state: newState});
```

Or if the state could not be updated automatically during a navigation transition:

```js
navigation.updateCurrentEntry({state: newState});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
