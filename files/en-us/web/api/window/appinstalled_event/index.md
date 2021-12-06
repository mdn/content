---
title: 'Window: appinstalled event'
slug: Web/API/Window/appinstalled_event
tags:
  - API
  - Manifest
  - Reference
  - Web
  - appinstalled
  - events
  - web manifest
browser-compat: api.Window.appinstalled_event
---

The **`appinstalled`** event of the [Web Manifest API](/en-US/docs/Web/Manifest) is fired when the browser has successfully installed a page as an application.

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
        {{domxref("Window/onappinstalled", "onappinstalled")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `appinstalled` event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:

```js
window.addEventListener('appinstalled', function() {
  console.log('Thank you for installing our app!');
});
```

Or use the {{domxref("Window/onappinstalled", "onappinstalled")}} event handler property:

```js
window.onappinstalled = function() {
  console.log('Thank you for installing our app!');
};
```

## Browser compatibility

{{Compat}}

## See also

- The associated event handler, {{domxref("Window.onappinstalled")}}
