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
  - : When set to a [truthy](/en-US/docs/Glossary/Truthy) value, triggers a browser-controlled confirmation dialog asking users to confirm if they want to leave the page when they try to close or reload it. This is a legacy feature, and best practice is to trigger the dialog by invoking `event.preventDefault()`, while also setting `returnValue` to support legacy cases.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("Event")}}._

## Examples

In the following example we have an HTML text {{htmlelement("input")}} to represent some data that could be changed and require saving:

```html
<form>
  <input type="text" name="name" id="name" />
</form>
```

Our JavaScript attaches an {{domxref("Element/input_event", "input")}} event listener to the `<input>` element that listens for changes in the inputted value. When the value is updated to a non-empty value, a {{domxref("Window.beforeunload_event", "beforeunload")}} event listener is attached to the {{domxref("Window")}} object.

If the value becomes an empty string again (i.e. the value is deleted), the `beforeunload` event listener is removed again — as mentioned above in the [Usage notes](#usage_notes), the listener should be removed when there is no unsaved data to warn about.

The `beforeunload` event handler function invokes `event.preventDefault()` to trigger the warning dialog when the user closes or navigates the tab. We have also included `event.returnValue = true` in the handler function so that any browsers that don't support the `event.preventDefault()` mechanism will still run the demo correctly.

```js
const beforeUnloadHandler = (event) => {
  // Recommended
  event.preventDefault();

  // Included for legacy support, e.g. Chrome/Edge < 119
  event.returnValue = true;
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window/beforeunload_event", "beforeunload")}} event
