---
title: "HTMLFormElement: reset event"
short-title: reset
slug: Web/API/HTMLFormElement/reset_event
page-type: web-api-event
browser-compat: api.HTMLFormElement.reset_event
---

{{APIRef}}

The **`reset`** event fires when a {{HTMLElement("form")}} is reset.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("reset", (event) => {});

onreset = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

This example uses {{domxref("EventTarget.addEventListener()")}} to listen for form resets, and logs the current {{domxref("Event.timeStamp")}} whenever that occurs.

### HTML

```html
<form id="form">
  <label>Test field: <input type="text" /></label>
  <br /><br />
  <button type="reset">Reset form</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
function logReset(event) {
  log.textContent = `Form reset! Timestamp: ${event.timeStamp}`;
}

const form = document.getElementById("form");
const log = document.getElementById("log");
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
