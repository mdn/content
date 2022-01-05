---
title: 'Window: hashchange event'
slug: Web/API/Window/hashchange_event
tags:
  - API
  - Event
  - HTML DOM
  - Reference
  - Window
browser-compat: api.Window.hashchange_event
---
{{APIRef}}

The **`hashchange`** event is fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the `#` symbol).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("HashChangeEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler</th>
      <td>
        {{domxref("WindowEventHandlers/onhashchange", "onhashchange")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `hashchange` event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:

```js
window.addEventListener('hashchange', function() {
  console.log('The hash has changed!')
}, false);
```

Or use the `onhashchange` event handler property:

```js
function locationHashChanged() {
  if (location.hash === '#cool-feature') {
    console.log("You're visiting a cool feature!");
  }
}

window.onhashchange = locationHashChanged;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window/popstate_event", "popstate")}}
- {{domxref("WindowEventHandlers.onhashchange")}}
