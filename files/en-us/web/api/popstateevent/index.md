---
title: PopStateEvent
slug: Web/API/PopStateEvent
tags:
  - API
  - Interface
  - Reference
browser-compat: api.PopStateEvent
---
{{APIRef("HTML DOM")}}

**`PopStateEvent`** is an event handler for the
{{Event("popstate")}} event on the window.

A `popstate` event is dispatched to the window every time the active history
entry changes between two history entries for the same document. If the history entry
being activated was created by a call to `history.pushState()` or was
affected by a call to `history.replaceState()`, the `popstate`
event's `state` property contains a copy of the history entry's state object.

> **Note:** Just calling `history.pushState()` or
> `history.replaceState()` won't trigger a `popstate` event. The
> `popstate` event is only triggered by doing a browser action such as a
> clicking on the back button (or calling `history.back()` in JavaScript).
> And the event is only triggered when the user navigates between two history entries
> for the same document.

> **Note:** Browsers used to handle the `popstate` event
> differently on page load, but now they behave the same. Firefox never emitted a
> popstate event on page load. Chrome did until version 34, while Safari did until
> version 10.0.

## Syntax

```js
window.onpopstate = funcRef;
```

- `funcRef` is a handler function.

## The popstate event

As an example, a page at `http://example.com/example.html`
running the following code will generate alerts as indicated:

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
`http://example.com/example.html`) has no state object associated
with it, a `popstate` event is still fired when we activate that entry after
the second call to `history.back()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Manipulating
  the browser history](/en-US/docs/Web/API/History_API)
- [Ajax
  navigation example](/en-US/docs/Web/API/History_API/Example)
