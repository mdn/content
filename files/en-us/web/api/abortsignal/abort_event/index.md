---
title: 'AbortSignal: abort event'
slug: Web/API/AbortSignal/abort_event
tags:
  - API
  - AbortSignal
  - DOM
  - Event
  - abort
browser-compat: api.AbortSignal.abort_event
---
{{APIRef}}

The **`abort`** event of the [Fetch API](/en-US/docs/Web/API/Fetch_API) is fired when a fetch request is aborted, i.e. using {{domxref("AbortController.abort()")}}.

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/AbortSignal/onabort">onabort</a></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

In the following snippets, we create a new `AbortController` object, and get its {{domxref("AbortSignal")}} (available using the `signal` property). Later on we check whether or not the signal has been aborted using the `onabort` property, and send an appropriate log to the console.

You can use the `abort` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
var controller = new AbortController();
var signal = controller.signal;

signal.addEventListener('abort', function() {
 console.log('Request aborted');
});
```

Or use the [`onabort`](/en-US/docs/Web/API/AbortSignal/onabort) event handler property:

```js
var controller = new AbortController();
var signal = controller.signal;

signal.onabort = function() {
  console.log('Request aborted');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
