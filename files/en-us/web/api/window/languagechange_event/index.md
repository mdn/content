---
title: 'Window: languagechange event'
slug: Web/API/Window/languagechange_event
tags:
  - Event
  - Experimental
  - HTML DOM
  - Reference
  - Window
browser-compat: api.Window.languagechange_event
---
{{APIRef}}

The **`languagechange`** event is fired at the global scope object when the user's preferred language changes.

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
        {{domxref("WindowEventHandlers/onlanguagechange", "onlanguagechange")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `languagechange` event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:

```js
window.addEventListener('languagechange', function() {
  console.log('languagechange event detected!');
});
```

Or use the [`onlanguagechange`](/en-US/docs/Web/API/WindowEventHandlers/onlanguagechange) event handler property:

```js
window.onlanguagechange = function(event) {
  console.log('languagechange event detected!');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("navigator.language")}}
- {{domxref("navigator.languages")}}
- {{domxref("navigator")}}
- {{domxref("WindowEventHandlers.onlanguagechange")}}
