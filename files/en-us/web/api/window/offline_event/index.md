---
title: 'Window: offline event'
slug: Web/API/Window/offline_event
tags:
  - API
  - Event
  - Offline
  - Reference
  - Window
browser-compat: api.Window.offline_event
---
{{APIRef}}

The **`offline`** event of the {{domxref("Window")}} interface is fired when the browser has lost access to the network and the value of {{domxref("Navigator.onLine")}} switches to `false`.

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
        {{domxref("GlobalEventHandlers.onoffline", "onoffline")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

```js
// addEventListener version
window.addEventListener('offline', (event) => {
    console.log("The network connection has been lost.");
});

// onoffline version
window.onoffline = (event) => {
  console.log("The network connection has been lost.");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`online`](/en-US/docs/Web/API/Window/online_event)
