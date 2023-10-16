---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
page-type: web-api-interface
browser-compat: api.BeforeUnloadEvent
---

{{APIRef}}

The **`BeforeUnloadEvent`** interface represents the event object for the {{domxref("Window/beforeunload_event", "beforeunload")}} event, which is fired when the current window, contained document, and associated resources are about to be unloaded.

See the {{domxref("Window/beforeunload_event", "beforeunload")}} event reference for detailed guidance on using this event.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("Event")}}._

- {{domxref("BeforeUnloadEvent.returnValue", "returnValue")}} {{Deprecated_Inline}}
  - : When set to a [truthy](/en-US/docs/Glossary/Truthy) value, triggers a browser-controlled confirmation dialog asking users to confirm if they want to leave the page when they try to close or reload it. This is a legacy feature, and best practice is to trigger the dialog by invoking `event.preventDefault()` instead, as shown in the example.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("Event")}}._

## Examples

In the following example we have an HTML text {{htmlelement("input")}} to represent some data that could be changed and require saving:

```html
<form>
  <input type="text" name="name" id="name" />
</form>
```

Our JavaScript attaches an {{domxref("HTMLElement.input_event", "input")}} event listener to the `<input>` element that listens for changes in the inputted value. When the value is updated to a non-empty value, a {{domxref("Window.beforeunload_event", "beforeunload")}} event listener is attached to the {{domxref("Window")}} object.

If the value becomes an empty string again (i.e. the value is deleted), the `beforeunload` event listener is removed again. It would be more efficient to just add the `beforeunload` listener once, and conditionally call `preventDefault()` based on the value of the target input. Best practice however is to add the listener when needed (i.e. when there is unsaved data that could be lost) and remove it again when it is not needed, for reasons outlined in the [`beforeunload` event usage notes](/en-US/docs/Web/API/Window/beforeunload_event#usage_notes).

The `beforeunload` event handler function invokes `preventDefault()` to trigger the warning dialog when the user closes or navigates the tab.

```js
const beforeUnloadHandler = (event) => {
  event.preventDefault();
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

When the `<input>` value is non-empty, if you try to close, navigate, or reload the page the browser displays the warning dialog. Try it out:

{{EmbedLiveSample("Examples", "100%", 50)}}

> **Note:** The browser-generated confirmation dialog can also be triggered by setting the {{domxref("BeforeUnloadEvent.returnValue", "event.returnValue")}} property to a truthy value on the `beforeunload` event object, or by returning a truthy value from the event handler function. However, these are legacy mechanisms, and best practice is to trigger the dialog by invoking `event.preventDefault()` as shown in the example above.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window/beforeunload_event", "beforeunload")}} event
