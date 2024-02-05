---
title: History API
slug: Web/API/History_API
page-type: web-api-overview
browser-compat: api.History
---

{{DefaultAPISidebar("History API")}}

The **History API** provides access to the browser's session history (not to be confused with [WebExtensions history](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history)) through the {{DOMxRef("Window.history","history")}} global object. It exposes useful methods and properties that let you navigate back and forth through the user's history, and manipulate the contents of the history stack.

> **Note:** This API is only available on the main thread ({{domxref("Window")}}). It cannot be accessed in {{domxref("Worker")}} or {{domxref("Worklet")}} contexts.

## Concepts and usage

Moving backward and forward through the user's history is done using the {{DOMxRef("History.back","back()")}}, {{DOMxRef("History.forward","forward()")}}, and {{DOMxRef("History.go","go()")}} methods.

### Moving forward and backward

To move backward through history:

```js
history.back();
```

This acts exactly as if the user clicked on the <kbd><strong>Back</strong></kbd> button in their browser toolbar.

Similarly, you can move forward (as if the user clicked the <kbd><strong>Forward</strong></kbd> button), like this:

```js
history.forward();
```

### Moving to a specific point in history

You can use the {{DOMxRef("History.go","go()")}} method to load a specific page from session history, identified by its relative position to the current page. (The current page's relative position is `0`.)

To move back one page (the equivalent of calling {{DOMxRef("History.back","back()")}}):

```js
history.go(-1);
```

To move forward a page, just like calling {{DOMxRef("History.forward","forward()")}}:

```js
history.go(1);
```

Similarly, you can move forward 2 pages by passing `2`, and so forth.

Another use for the `go()` method is to refresh the current page by either passing `0`, or by invoking it without an argument:

```js
// The following statements
// both have the effect of
// refreshing the page
history.go(0);
history.go();
```

You can determine the number of pages in the history stack by looking at the value of the `length` property:

```js
const numberOfEntries = history.length;
```

## Interfaces

- {{domxref("History")}}
  - : Allows manipulation of the browser _session history_ (that is, the pages visited in the tab or frame that the current page is loaded in).
- {{domxref("PopStateEvent")}}
  - : The interface of the {{domxref("Window.popstate_event", "popstate")}} event.

## Examples

The following example assigns a listener for the {{domxref("Window.popstate_event", "popstate")}} event. It then illustrates some of the methods of the history object to add, replace, and move within the browser history for the current tab.

```js
window.addEventListener("popstate", (event) => {
  alert(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );
});

history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // alerts "location: http://example.com/example.html, state: null"
history.go(2); // alerts "location: http://example.com/example.html?page=3, state: {"page":3}"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.history", "history")}} global object
- {{domxref("Window/popstate_event", "popstate")}} event
