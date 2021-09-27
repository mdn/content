---
title: 'Window: afterprint event'
slug: Web/API/Window/afterprint_event
tags:
  - Event
  - Reference
browser-compat: api.Window.afterprint_event
---
{{APIRef}}

The **`afterprint`** event is fired after the associated document has started printing or the print preview has been closed.

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
        {{domxref("WindowEventHandlers/onafterprint", "onafterprint")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Using `addEventListener()`:

```js
window.addEventListener('afterprint', (event) => {
  console.log('After print');
});
```

Using the `onafterprint` event handler property:

```js
window.onafterprint = (event) => {
  console.log('After print');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Window/beforeprint_event", "beforeprint")}}
