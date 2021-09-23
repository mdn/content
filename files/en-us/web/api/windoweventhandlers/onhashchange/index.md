---
title: WindowEventHandlers.onhashchange
slug: Web/API/WindowEventHandlers/onhashchange
tags:
  - Event Handler
  - HTML-DOM
  - Hash
  - Property
  - Reference
  - URL & Hash
  - WindowEventHandlers
browser-compat: api.WindowEventHandlers.onhashchange
---
{{APIRef("HTML DOM")}}

The **`WindowEventHandlers.onhashchange`** property of the
{{domxref("WindowEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing
[`hashchange`](/en-US/docs/Web/API/Window/hashchange_event)
events.

The `hashchange` event fires when a window's hash changes (see
{{domxref("Window.location")}} and {{domxref("HTMLAnchorElement.hash")}}).

## Syntax

**Using an event handler:**

```js
window.onhashchange = funcRef;
```

**Using an HTML event handler:**

```js
<body onhashchange="funcRef();">
```

**Using an event listener:**

To add an event listener, use {{domxref("EventTarget.addEventListener()",
  "addEventListener()")}}:

```js
window.addEventListener("hashchange", funcRef, false);
```

### Parameters

- `funcRef`
  - : A reference to a function.

## Examples

### Using an event handler

This example uses an event handler (`window.onhashchange`) to check the new
hash value whenever it changes. If it equals `#cool-feature`, the script logs
a message to the console.

```js
function locationHashChanged() {
  if (location.hash === '#cool-feature') {
    console.log("You're visiting a cool feature!");
  }
}

window.onhashchange = locationHashChanged;
```

### Using an event listener

This example uses an event listener to log a notification whenever the hash has
changed.

```js
function hashHandler() {
  console.log('The hash has changed!');
}

window.addEventListener('hashchange', hashHandler, false);
```

### Overriding the hash

This function sets a new hash dynamically, setting it randomly to one of two values.

```js
function changeHash() {
  location.hash = (Math.random() > 0.5) ? 'location1' : 'location2';
}
```

## The hashchange event

The dispatched `hashchange` event has the following properties:

| Field    | Type        | Description                                           |
| -------- | ----------- | ----------------------------------------------------- |
| `newURL` | `DOMString` | The new URL to which the window is navigating.        |
| `oldURL` | `DOMString` | The previous URL from which the window was navigated. |

### Polyfill for event.newURL and event.oldURL

```js
// Let this snippet run before your hashchange event binding code
if (!window.HashChangeEvent)(function(){
  var lastURL = document.URL;
  window.addEventListener("hashchange", function(event){
    Object.defineProperty(event, "oldURL", {enumerable:true,configurable:true,value:lastURL});
    Object.defineProperty(event, "newURL", {enumerable:true,configurable:true,value:document.URL});
    lastURL = document.URL;
  });
}());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`hashchange`](/en-US/docs/Web/API/Window/hashchange_event)
  event
- [Manipulating the browser history](/en-US/docs/Web/API/History_API "DOM/Manipulating the browser history")
- [`history.pushState()` and
  `history.replaceState()`](/en-US/docs/Web/API/Window/history) methods
- {{domxref("WindowEventHandlers.onpopstate")}}
- {{domxref("HTMLAnchorElement.hash")}}
