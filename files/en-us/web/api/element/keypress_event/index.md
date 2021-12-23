---
title: 'Element: keypress event'
slug: Web/API/Element/keypress_event
tags:
  - API
  - Element
  - Event
  - Reference
  - keypress
  - Deprecated
browser-compat: api.Element.keypress_event
---
{{APIRef}} {{deprecated_header}}

The **`keypress`** event is fired when a key that produces a character value is pressed down.

Examples of keys that produce a character value are alphabetic, numeric, and punctuation keys. Examples of keys that don't produce a character value are modifier keys such as <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, or <kbd>Meta</kbd>.

> **Warning:** Since this event has been deprecated, you should use [`beforeinput`](/en-US/docs/Web/API/HTMLElement/beforeinput_event) or [`keydown`](/en-US/docs/Web/API/Element/keydown_event) instead.

<table class="properties">
  <tbody>
    <tr>
      <th>Interface</th>
      <td>{{domxref("KeyboardEvent")}}</td>
    </tr>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Default Action</th>
      <td>
        Varies: <code>keypress</code> event; launch text composition system;
        <code>blur</code> and <code>focus</code> events;
        <code>DOMActivate</code> event; other event
      </td>
    </tr>
  </tbody>
</table>

## Examples

### addEventListener keypress example

This example logs the {{domxref("KeyboardEvent.code")}} value whenever you press a key after focussing the {{htmlelement("input")}} element.

```html
<div>
  <label for="sample">Focus the input and type something:</label>
  <input type="text" name="text" id="sample">
</div>
<p id="log"></p>
```

```js
const log = document.getElementById('log');
const input = document.querySelector('input');

input.addEventListener('keypress', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keypress_example")}}

### onkeypress equivalent

```js
input.onkeypress = logKey;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("GlobalEventHandlers.onkeypress")}}
- The {{domxref("Document")}} interface, which the event also targets.
- Related events:

  - [`input`](/en-US/docs/Web/API/HTMLElement/input_event)
  - [`keydown`](/en-US/docs/Web/API/Element/keydown_event)
  - [`keyup`](/en-US/docs/Web/API/Element/keyup_event)
