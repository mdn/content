---
title: "Window: beforeunload event"
short-title: beforeunload
slug: Web/API/Window/beforeunload_event
page-type: web-api-event
browser-compat: api.Window.beforeunload_event
---

{{APIRef("HTML DOM")}}

The **`beforeunload`** event is fired when the current window, contained document, and associated resources are about to be unloaded. The document is still visible and the event is still cancelable at this point.

The main use case for this event is to trigger a browser-generated confirmation dialog that asks users to confirm if they _really_ want to leave the page when they try to close or reload it, or navigate somewhere else. This is intended to help prevent loss of unsaved data.

The dialog can be triggered in the following ways:

- Calling the event object's {{domxref("Event.preventDefault()", "preventDefault()")}} method.
- Setting the event object's {{domxref("BeforeUnloadEvent.returnValue", "returnValue")}} property to a non-empty string value or any other [truthy](/en-US/docs/Glossary/Truthy) value.
- Returning any truthy value from the event handler function, e.g., `return "string"`. Note that this only works when the function is attached via the `onbeforeunload` property, not the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method. This behavior is consistent across modern versions of Firefox, Safari, and Chrome.

The last two mechanisms are legacy features; best practice is to trigger the dialog by invoking `preventDefault()` on the event object, while also setting `returnValue` to support legacy cases.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("beforeunload", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onbeforeunload = (event) => { }
```

## Event type

A {{domxref("BeforeUnloadEvent")}}. Inherits from {{domxref("Event")}}.

## Usage notes

To trigger the dialog being shown when the user closes or navigates the tab, a `beforeunload` event handler function should call {{domxref("Event.preventDefault()", "preventDefault()")}} on the event object. You should note that modern implementations:

- Require [sticky activation](/en-US/docs/Glossary/Sticky_activation) for the dialog to be displayed. In other words, the browser will only show the dialog box if the frame or any embedded frame receives a user gesture or user interaction. If the user has never interacted with the page, then there is no user data to save, so no legitimate use case for the dialog.
- Only show a generic browser-specified string in the displayed dialog. This cannot be controlled by the webpage code.

The `beforeunload` event is not reliably fired, especially on mobile platforms. For example, the event is not fired in the following scenario:

1. A mobile user visits your page.
2. The user then switches to a different app.
3. Later, the user closes the browser from the app manager.

> [!NOTE]
> The {{domxref("Document.visibilitychange_event", "visibilitychange")}} event provides a more reliable signal for when to save the application state. See [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) for more details.

We recommend that you listen for `beforeunload` only when users have unsaved changes, so that the confirmation dialog can warn them about impending data loss, and that you remove the listener when it's no longer needed.

## Event handler aliases

In addition to the `Window` interface, the event handler property `onbeforeunload` is also available on the following targets:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Examples

In the following example we have an HTML text {{htmlelement("input")}} to represent some data that could be changed and require saving:

```html
<input type="text" name="name" id="name" />
```

Our JavaScript attaches an {{domxref("Element/input_event", "input")}} event listener to the `<input>` element that listens for changes in the inputted value. When the value is updated to a non-empty value, a `beforeunload` event listener is attached to the {{domxref("Window")}} object.

If the value becomes an empty string again (i.e., the value is deleted), the `beforeunload` event listener is removed again — as mentioned above in the [Usage notes](#usage_notes), the listener should be removed when there is no unsaved data to warn about.

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

- {{domxref("BeforeUnloadEvent")}} interface
- Related events:
  - {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{domxref("Document/readystatechange_event", "readystatechange")}}
  - {{domxref("Window/load_event", "load")}}
  - {{domxref("Window/unload_event", "unload")}}
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) provides more useful guidance on handling page lifecycle behavior in your web apps.
