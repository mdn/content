---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
tags:
  - API
  - Reference
browser-compat: api.BeforeUnloadEvent
---
{{APIRef}}

The **`beforeunload`** event is fired when the window, the document and its resources are about to be unloaded.

When a non-empty string is assigned to the `returnValue` Event property, a dialog box appears, asking the users for confirmation to leave the page (see example below). When no value is provided, the event is processed silently. Some implementations only show the dialog box if the frame or any embedded frame receives a user gesture or user interaction. See {{anch("Browser compatibility")}} for more information.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <td>Bubbles</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Cancelable</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Target objects</td>
      <td>defaultView</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td>{{domxref("Event")}}</td>
    </tr>
  </tbody>
</table>

## Examples

```js
window.addEventListener("beforeunload", function( event ) {
  event.returnValue = "\o/";
});

// is equivalent to
window.addEventListener("beforeunload", function( event ) {
  event.preventDefault();
});
```

WebKit-derived browsers don't follow the spec for the dialog box. An almost-cross-browser working example would be close to the below example.

```js
window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\o/";

  (e || window.event).returnValue = confirmationMessage;     // Gecko + IE
  return confirmationMessage;                                /* Safari, Chrome, and other
                                                              * WebKit-derived browsers */
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Event("DOMContentLoaded")}}
- {{Event("readystatechange")}}
- {{Event("load")}}
- {{Event("beforeunload")}}
- {{Event("unload")}}
- [Unloading Documents — Prompt to unload a document](https://www.whatwg.org/specs/web-apps/current-work/#prompt-to-unload-a-document)
