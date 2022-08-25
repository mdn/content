---
title: 'Window: unhandledrejection event'
slug: Web/API/Window/unhandledrejection_event
page-type: web-api-event
tags:
  - API
  - Event
  - HTML DOM
  - JavaScript
  - Promise
  - Promises
  - Reference
  - Rejection
  - Window
  - Worker
  - events
  - global scope
  - unhandledrejection
browser-compat: api.Window.unhandledrejection_event
---
{{APIRef("HTML DOM")}}

The **`unhandledrejection`** event is sent to the global scope of a script when a JavaScript {{jsxref("Promise")}} that has no rejection handler is rejected; typically, this is the {{domxref("window")}}, but may also be a {{domxref("Worker")}}.

This is useful for debugging and for providing fallback error handling for unexpected situations.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('unhandledrejection', (event) => { });
onunhandledrejection = (event) => { };
```

## Event type

A {{domxref("PromiseRejectionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Event properties

- {{domxref("PromiseRejectionEvent.promise")}} {{ReadOnlyInline}}
  - : The JavaScript {{jsxref("Promise")}} that was rejected.
- {{domxref("PromiseRejectionEvent.reason")}} {{ReadOnlyInline}}
  - : A value or {{jsxref("Object")}} indicating why the promise was rejected, as passed to {{jsxref("Promise.reject()")}}.

## Event handler aliases

In addition to the `Window` interface, the event handler property `onunhandledrejection` is also available on the following targets:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Usage notes

Allowing the `unhandledrejection` event to bubble will eventually result in an error message being output to the console. You can prevent this by calling {{domxref("Event.preventDefault", "preventDefault()")}} on the {{domxref("PromiseRejectionEvent")}}; see [Preventing default handling](#preventing_default_handling) below for an example.

## Examples

### Basic error logging

This example logs information about the unhandled promise rejection to the console.

```js
window.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

You can also use the `onunhandledrejection` event handler property to set up the event listener:

```js
window.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Preventing default handling

Many environments (such as {{Glossary("Node.js")}}) report unhandled promise rejections to the console by default. You can prevent that from happening by adding a handler for `unhandledrejection` events that—in addition to any other tasks you wish to perform—calls {{domxref("Event.preventDefault()", "preventDefault()")}} to cancel the event, preventing it from bubbling up to be handled by the runtime's logging code. This works because `unhandledrejection` is cancelable.

```js
window.addEventListener('unhandledrejection', (event) => {
  // code for handling the unhandled rejection
  // …

  // Prevent the default handling (such as outputting the
  // error to the console)

  event.preventDefault();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SectionOnPage("/en-US/docs/Web/JavaScript/Guide/Using_promises", "Promise rejection events")}}
- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}} event
- {{jsxref("Promise")}}
