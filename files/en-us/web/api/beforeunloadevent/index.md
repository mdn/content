---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
page-type: web-api-interface
browser-compat: api.BeforeUnloadEvent
---

{{APIRef}}

The **`BeforeUnloadEvent`** interface represents the event object for the {{domxref("Window/beforeunload_event", "beforeunload")}} event, which is fired when the current window, contained document, and associated resources are about to be unloaded.

The `returnValue` property defined on `BeforeUnloadEvent`, when set to a non-empty string value, triggers a browser-generated confirmation dialog. This dialog asks users to confirm if they _really_ want to leave the page when they try to close or reload it, or navigate somewhere else. It is intended to help prevent loss of unsaved data.

> **Note:** `returnValue` is a legacy feature, and best practice is to trigger the dialog by invoking {{domxref("Event.preventDefault()")}} on the `BeforeUnloadEvent` object instead. See the {{domxref("Window/beforeunload_event", "beforeunload")}} event reference for detailed up-to-date guidance.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("Event")}}._

- {{domxref("BeforeUnloadEvent.returnValue", "returnValue")}} {{Deprecated_Inline}}
  - : When set to a truthy value, triggers a browser-controlled confirmation dialog asking users to confirm if they want to leave the page when they try to close or reload it.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("Event")}}._

## Examples

In the following example we have an HTML text {{htmlelement("input")}}:

```html
<form>
  <input type="text" name="name" id="name" />
</form>
```

Our JavaScript attaches an {{domxref("HTMLElement.input_event", "input")}} event listener to the `<input>` element that listens for changes in the inputted value. When the value is updated to a non-empty value, a {{domxref("Window.beforeunload_event", "beforeunload")}} event listener is attached to the {{domxref("Window")}} object. If the value becomes an empty string again (i.e. the value is deleted), the `beforeunload` event listener is removed again.

The `beforeunload` event handler function sets `BeforeUnloadEvent.returnValue` to a non-empty string.

```js
const beforeUnloadHandler = (event) => {
  event.returnValue = "any non-empty string value";
  // Equivalent to invoking event.preventDefault();
};

const nameInput = document.querySelector("#name");

nameInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    window.addEventListener("beforeunload", beforeUnloadHandler);
  } else {
    window.removeEventListener("beforeunload", beforeUnloadHandler);
  }
});
```

When the `<input>` value is non-empty, if you try to close, navigate, or reload the page the browser will give you a dialog asking you to confirm your action. Try it out:

{{EmbedLiveSample("Examples", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window/beforeunload_event", "beforeunload")}} event
