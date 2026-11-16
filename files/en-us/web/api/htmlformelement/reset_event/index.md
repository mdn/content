---
title: "HTMLFormElement: reset event"
short-title: reset
slug: Web/API/HTMLFormElement/reset_event
page-type: web-api-event
browser-compat: api.HTMLFormElement.reset_event
---

{{APIRef("HTML DOM")}}

The **`reset`** event fires when a {{HTMLElement("form")}} is reset.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("reset", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onreset = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

This example uses {{domxref("EventTarget.addEventListener()")}} to listen for form resets, and logs the current {{domxref("Event.timeStamp")}} whenever that occurs.

### HTML

```html
<form id="form">
  <label>Test checkbox: <input type="checkbox" /></label>
  <br /><br />
  <button type="reset">Reset form</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
const form = document.getElementById("form");
const log = document.getElementById("log");

function logReset(event) {
  log.textContent = `Form reset! Timestamp: ${event.timeStamp}`;
}

form.addEventListener("reset", logReset);
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("form")}} element
