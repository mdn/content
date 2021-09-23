---
title: 'Window: rejectionhandled event'
slug: Web/API/Window/rejectionhandled_event
tags:
  - API
  - Event
  - HTML DOM
  - JavaScript
  - Promise
  - Promises
  - Reference
  - Window
  - Worker
  - events
  - global
  - onrejectionhandled
  - rejectionhandled
browser-compat: api.Window.rejectionhandled_event
---
{{APIRef("HTML DOM")}}

The **`rejectionhandled`** event is sent to the script's global scope (usually {{domxref("window")}} but also {{domxref("Worker")}}) whenever a JavaScript {{jsxref("Promise")}} is rejected but after the promise rejection has been handled.

This can be used in debugging and for general application resiliency, in tandem with the {{domxref("Window.unhandledrejection_event", "unhandledrejection")}} event, which is sent when a promise is rejected but there is no handler for the rejection.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("PromiseRejectionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("WindowEventHandlers.onrejectionhandled", "onrejectionhandled")}}
      </td>
    </tr>
  </tbody>
</table>

## Example

You can use the `rejectionhandled` event to log promises that get rejected to the console, along with the reasons why they were rejected:

```js
window.addEventListener("rejectionhandled", event => {
  console.log("Promise rejected; reason: " + event.reason);
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SectionOnPage("/en-US/docs/Web/JavaScript/Guide/Using_promises", "Promise rejection events")}}
- {{domxref("PromiseRejectionEvent")}}
- {{jsxref("Promise")}}
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
