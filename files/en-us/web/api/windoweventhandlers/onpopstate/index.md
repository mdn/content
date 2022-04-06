---
title: WindowEventHandlers.onpopstate
slug: Web/API/WindowEventHandlers/onpopstate
tags:
  - API
  - Event Handler
  - HTML DOM
  - HTML5
  - NeedsSpecTable
  - Property
  - Window
  - events
browser-compat: api.WindowEventHandlers.onpopstate
---
{{APIRef}}

The **`onpopstate`** property of the
{{domxref("WindowEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing [`popstate`](/en-US/docs/Web/API/Window/popstate_event)
events on the window.

A `popstate` event is dispatched to the window each time the active history
entry changes between two history entries for the same document. If the activated
history entry was created by a call to `history.pushState()`, or was affected
by a call to `history.replaceState()`, the `popstate` event's
`state` property contains a copy of the history entry's state object.

> **Note:** Calling `history.pushState()` or
> `history.replaceState()` won't trigger a `popstate` event. The
> `popstate` event is only triggered by performing a browser action, such as
> clicking on the back button (or calling `history.back()` in JavaScript),
> when navigating between two history entries for the same document.

## Value

An [event handler](/en-US/docs/Web/Events/Event_handlers).

## Examples

For example, a page at `http://example.com/example.html` running the
following code will generate alerts as indicated:

```js
window.onpopstate = function(event) {
  alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");
history.back(); // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // alerts "location: http://example.com/example.html, state: null
history.go(2);  // alerts "location: http://example.com/example.html?page=3, state: {"page":3}
```

Note that even though the original history entry (for
`http://example.com/example.html`) has no state object associated with it, a
`popstate` event is still fired, when we activate that entry after the second
call to `history.back()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.history")}}
- [Manipulating the browser history](/en-US/docs/Web/API/History_API)
- [Ajax navigation example](/en-US/docs/Web/API/History_API/Example)
