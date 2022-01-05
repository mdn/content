---
title: 'HTMLFormElement: reset event'
slug: Web/API/HTMLFormElement/reset_event
tags:
  - API
  - Event
  - Forms
  - HTML DOM
  - HTMLFormElement
  - Reference
browser-compat: api.HTMLFormElement.reset_event
---
{{APIRef}}

The **`reset`** event fires when a {{HTMLElement("form")}} is reset.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes (although specified as a simple event that doesn't bubble)</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>{{domxref("GlobalEventHandlers.onreset")}}</td>
    </tr>
  </tbody>
</table>

## Examples

This example uses {{domxref("EventTarget.addEventListener()")}} to listen for form resets, and logs the current {{domxref("Event.timeStamp")}} whenever that occurs.

### HTML

```html
<form id="form">
  <label>Test field: <input type="text"></label>
  <br><br>
  <button type="reset">Reset form</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
function logReset(event) {
  log.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('reset', logReset);
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("form")}} element
