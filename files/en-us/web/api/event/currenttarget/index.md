---
title: "Event: currentTarget property"
short-title: currentTarget
slug: Web/API/Event/currentTarget
page-type: web-api-instance-property
browser-compat: api.Event.currentTarget
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`currentTarget`** read-only property of the {{domxref("Event")}} interface identifies the element to which the event handler has been attached.

This will not always be the same as the element on which the event was fired, because the event may have fired on a descendant of the element with the handler, and then [bubbled](/en-US/docs/Learn/JavaScript/Building_blocks/Event_bubbling) up to the element with the handler. The element on which the event was fired is given by {{domxref("Event.target")}}.

Note that the value of `currentTarget` is only available in a handler for the event. Outside an event handler it will be `null`. This means that, for example, if you take a reference to the `Event` object inside an event handler and then access its `currentTarget` property outside the event handler, its value will be `null`.

## Value

An {{domxref("EventTarget")}} representing the object to which the current event handler is attached.

## Examples

### currentTarget versus target

This example illustrates the difference between `currentTarget` and `target`.

#### HTML

The page has a "parent" {{htmlelement("div")}} containing a "child" `<div>`.

```html
<div id="parent">
  Click parent
  <div id="child">Click child</div>
</div>

<button id="reset">Reset</button>
<pre id="output"></pre>
```

```css hidden
button,
div,
pre {
  margin: 0.5rem;
}

div {
  padding: 1rem;
  border: 1px solid black;
}
```

#### JavaScript

The event handler is attached to the parent. It logs the value of `event.currentTarget` and `event.target`.

We also have a "Reset" button that just reloads the example.

```js
const output = document.querySelector("#output");
const parent = document.querySelector("#parent");
parent.addEventListener("click", (event) => {
  const currentTarget = event.currentTarget.getAttribute("id");
  const target = event.target.getAttribute("id");
  output.textContent = `Current target: ${currentTarget}\n`;
  output.textContent += `Target: ${target}`;
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### Result

If you click inside the child `<div>`, then `target` identifies the child. If you click inside the parent `<div>`, then `target` identifies the parent.

In both cases, `currentTarget` identifies the parent, because that's the element that the handler is attached to.

{{EmbedLiveSample("currentTarget versus target", 100, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Event bubbling](/en-US/docs/Learn/JavaScript/Building_blocks/Event_bubbling)
