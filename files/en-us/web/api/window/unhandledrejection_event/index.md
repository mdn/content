---
title: 'Window: unhandledrejection event'
slug: Web/API/Window/unhandledrejection_event
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

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("PromiseRejectionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("WindowEventHandlers.onunhandledrejection", "onunhandledrejection")}}
      </td>
    </tr>
  </tbody>
</table>

## Usage notes

Allowing the `unhandledrejection` event to bubble will eventually result in an error message being output to the console. You can prevent this by calling {{domxref("Event.preventDefault", "preventDefault()")}} on the {{domxref("PromiseRejectionEvent")}}; see {{anch("Preventing default handling")}} below for an example.

## Examples

Here we have a few examples showing ways you can make use of the `unhandledrejection` event. The event includes two useful pieces of information:

- `promise`
  - : The actual {{jsxref("Promise")}} which was rejected with no handler available to deal with the rejection.
- `reason`
  - : The reason that would have been passed into the rejection handler if one had existed. See {{jsxref("Promise.catch", "catch()")}} for details.

### Basic error logging

This example logs information about the unhandled promise rejection to the console.

```js
window.addEventListener("unhandledrejection", event => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

You can also use the {{domxref("WindowEventHandlers.onunhandledrejection", "onunhandledrejection")}} event handler property to set up the event listener:

```js
window.onunhandledrejection = event => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Preventing default handling

Many environments (such as {{Glossary("Node.js")}}) report unhandled promise rejections to the console by default. You can prevent that from happening by adding a handler for `unhandledrejection` events that—in addition to any other tasks you wish to perform—calls {{domxref("Event.preventDefault()", "preventDefault()")}} to cancel the event, preventing it from bubbling up to be handled by the runtime's logging code. This works because `unhandledrejection` is cancelable.

```js
window.addEventListener('unhandledrejection', function (event) {
  // ...your code here to handle the unhandled rejection...

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
- {{domxref("WindowEventHandlers.onunhandledrejection", "onunhandledrejection")}} event handler property
- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}} event
- {{jsxref("Promise")}}
