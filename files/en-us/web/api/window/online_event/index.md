---
title: 'Window: online event'
slug: Web/API/Window/online_event
tags:
  - API
  - Event
  - Online
  - Reference
  - Window
browser-compat: api.Window.online_event
---
{{APIRef}}

The **`online`** event of the {{domxref("Window")}} interface is fired when the browser has gained access to the network and the value of {{domxref("Navigator.onLine")}} switches to `true`.

> **Note:** This event shouldn't be used to determine the availability of a particular website. Network problems or firewalls might still prevent the website from being reached.

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
        {{domxref("GlobalEventHandlers.ononline", "ononline")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

```js
// addEventListener version
window.addEventListener('online', (event) => {
    console.log("You are now connected to the network.");
});

// ononline version
window.ononline = (event) => {
  console.log("You are now connected to the network.");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`offline`](/en-US/docs/Web/API/Window/offline_event)
