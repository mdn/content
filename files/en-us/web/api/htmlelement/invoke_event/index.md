---
title: "HTMLElement: invoke event"
slug: Web/API/HTMLElement/invoke_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.HTMLElement.invoke_event
---

{{APIRef}}{{SeeCompatTable}}

The **`invoke`** event of the {{domxref("HTMLElement")}} interface fires on a {{domxref("Invokers_API", "invoker controlled", "", "nocode")}} element (i.e. one that has a button with an `invoketarget` attribute pointing to this element) whenever the invoker is interacted with (e.g. it is clicked).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("invoke", (event) => {});

oninvoke = (event) => {};
```

## Event type

A {{domxref("InvokeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("InvokeEvent")}}

## Examples

### Basic example

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("invoke", (event) => {
  if (event.action === "show") {
    console.log("Popover is about to be shown");
  }
});
```

### A note on event dispatch and cancellation

It is worth pointing out that `invoke` events fire on the element being invoked. If an Invoker (i.e. the `<button>`) is clicked, it will first dispatch a `click` event which, if cancelled, then the `invoke` event will not fire and the default behavior will not be run.
In addition to cancelling the `click` event on the button, it is also possible to cancel the `invoke` event.

For example:

```js
button.addEventListener("click", (event) => {
  event.preventDefault(); // the `invoke` event will never fire
});
```

```js
element.addEventListener("invoke", (event) => {
  event.preventDefault(); // the `invoke` event fires but the default behavior is cancelled
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Invokers API](/en-US/docs/Web/API/Invokers_API)
