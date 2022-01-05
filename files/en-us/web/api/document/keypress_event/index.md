---
title: 'Document: keypress event'
slug: Web/API/Document/keypress_event
tags:
  - DOM
  - Deprecated
  - Event
  - KeyboardEvent
  - Reference
browser-compat: api.Document.keypress_event
---
{{APIRef}} {{deprecated_header}}

The **`keypress`** event is fired when a key that produces a character value is pressed down.

Examples of keys that produce a character value are alphabetic, numeric, and punctuation keys. Examples of keys that don't produce a character value are modifier keys such as <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, or <kbd>Meta</kbd>.

> **Warning:** Since this event has been deprecated, you should look to use [`beforeinput`](/en-US/docs/Web/API/HTMLElement/beforeinput_event) or [`keydown`](/en-US/docs/Web/API/Document/keydown_event) instead.

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

This example logs the {{domxref("KeyboardEvent.code")}} value whenever you press a key.

```html
<p>Press inside this IFrame first to focus it, then try pressing keys on the keyboard.</p>
<p id="log"></p>
```

```js
const log = document.getElementById('log');

document.addEventListener('keypress', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keypress_example")}}

### onkeypress equivalent

```js
document.onkeypress = logKey;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("GlobalEventHandlers.onkeypress")}}
- The {{domxref("Element")}} interface, which the event also targets.
- Related events:

  - [`keydown`](/en-US/docs/Web/API/Document/keydown_event)
  - [`keyup`](/en-US/docs/Web/API/Document/keyup_event)
