---
title: History API
slug: Web/API/History_API
tags:
  - API
  - Advanced
  - HTML DOM
  - History
  - History API
---
{{DefaultAPISidebar("History API")}}

The DOM {{DOMxRef("Window")}} object provides access to the browser's session history (not to be confused for [WebExtensions history](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history)) through the {{DOMxRef("Window.history","history")}} object. It exposes useful methods and properties that let you navigate back and forth through the user's history, and manipulate the contents of the history stack.

## Concepts and usage

Moving backward and forward through the user's history is done using the {{DOMxRef("History.back","back()")}}, {{DOMxRef("History.forward","forward()")}}, and {{DOMxRef("History.go","go()")}} methods.

### Moving forward and backward

To move backward through history:

```js
window.history.back()
```

This acts exactly as if the user clicked on the <kbd><strong>Back</strong></kbd> button in their browser toolbar.

Similarly, you can move forward (as if the user clicked the <kbd><strong>Forward</strong></kbd> button), like this:

```js
window.history.forward()
```

### Moving to a specific point in history

You can use the {{DOMxRef("History.go","go()")}} method to load a specific page from session history, identified by its relative position to the current page. (The current page's relative position is `0`.)

To move back one page (the equivalent of calling {{DOMxRef("History.back","back()")}}):

```js
window.history.go(-1)
```

To move forward a page, just like calling {{DOMxRef("History.forward","forward()")}}:

```js
window.history.go(1)
```

Similarly, you can move forward 2 pages by passing `2`, and so forth.

Another use for the `go()` method is to refresh the current page by either passing `0`, or by invoking it without an argument:

```js
// The following statements
// both have the effect of
// refreshing the page
window.history.go(0)
window.history.go()
```

You can determine the number of pages in the history stack by looking at the value of the `length` property:

```js
let numberOfEntries = window.history.length
```

## Interfaces

- {{domxref("History")}}
  - : Allows manipulation of the browser _session history_ (that is, the pages visited in the tab or frame that the current page is loaded in).

## Examples

The following example assigns a listener to the `onpopstate` property. And then illustrates some of the methods of the history object to add, replace, and move within the browser history for the current tab.

```js
window.onpopstate = function(event) {
  alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
}

history.pushState({page: 1}, "title 1", "?page=1")
history.pushState({page: 2}, "title 2", "?page=2")
history.replaceState({page: 3}, "title 3", "?page=3")
history.back() // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back() // alerts "location: http://example.com/example.html, state: null"
history.go(2)  // alerts "location: http://example.com/example.html?page=3, state: {"page":3}"
```

## Specifications

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName("HTML WHATWG", "browsers.html#history", "History")}}
      </td>
      <td>{{Spec2("HTML WHATWG")}}</td>
      <td>No change from {{SpecName("HTML5 W3C")}}.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("HTML5 W3C", "browsers.html#history", "History")}}
      </td>
      <td>{{Spec2("HTML5 W3C")}}</td>
      <td>Initial definition.</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat("api.History")}}

## See also

### References

- {{ domxref("window.history") }}
- {{ domxref("WindowEventHandlers.onpopstate") }}

### Guides

- [Working with the History API](/en-US/docs/Web/API/History_API/Working_with_the_History_API)
