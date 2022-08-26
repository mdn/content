---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
page-type: web-api-interface
tags:
  - API
  - Reference
browser-compat: api.BeforeUnloadEvent
---
{{APIRef}}

**`BeforeUnloadEvent`** is an interface for the {{domxref("Window/beforeunload_event", "beforeunload")}} event.

The `beforeunload` event is fired when the window, the document and its resources are about to be unloaded.

When a non-empty string is assigned to the `returnValue` Event property, a dialog box appears, asking the users for confirmation to leave the page (see example below). When no value is provided, the event is processed silently. Some implementations only show the dialog box if the frame or any embedded frame receives a user gesture or user interaction. See [Browser compatibility](#browser_compatibility) for more information.

> **Note:** For security reasons, only a generic string not under the control of the webpage is shown instead of the returned string.

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
window.addEventListener("beforeunload", (event) => {
  event.returnValue = "\\o/";
});

// is equivalent to
window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
});
```

WebKit-derived browsers don't follow the spec for the dialog box. An almost-cross-browser working example would be close to the below example.

```js
window.addEventListener("beforeunload", (e) => {
  const confirmationMessage = "\\o/";

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

- {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
- {{domxref("Document/readystatechange_event", "readystatechange")}}
- {{domxref("Window/load_event", "load")}}
- {{domxref("Window/beforeunload_event", "beforeunload")}}
- {{domxref("Window/unload_event", "unload")}}
- [Unloading Documents — Prompt to unload a document](https://html.spec.whatwg.org/#prompt-to-unload-a-document)
