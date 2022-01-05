---
title: 'Window: beforeprint event'
slug: Web/API/Window/beforeprint_event
tags:
  - Event
  - Reference
browser-compat: api.Window.beforeprint_event
---
{{APIRef}}

The **`beforeprint`** event is fired when the associated document is about to be printed or previewed for printing.

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
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("WindowEventHandlers/onbeforeprint", "onbeforeprint")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Using `addEventListener()`:

```js
window.addEventListener('beforeprint', (event) => {
  console.log('Before print');
});
```

Using the `onbeforeprint` event handler property:

```js
window.onbeforeprint = (event) => {
  console.log('Before print');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Window/afterprint_event", "afterprint")}}
