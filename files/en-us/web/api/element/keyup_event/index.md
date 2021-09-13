---
title: 'Element: keyup event'
slug: Web/API/Element/keyup_event
tags:
  - DOM
  - Element
  - Event
  - Reference
  - keyup
browser-compat: api.Element.keyup_event
---
{{APIRef}}

The **`keyup`** event is fired when a key is released.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("KeyboardEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onkeyup", "onkeyup")}}
      </td>
    </tr>
  </tbody>
</table>

The [`keydown`](/en-US/docs/Web/API/Element/keydown_event) and `keyup` events provide a code indicating which key is pressed, while `keypress` indicates which character was entered. For example, a lowercase "a" will be reported as 65 by `keydown` and `keyup`, but as 97 by `keypress`. An uppercase "A" is reported as 65 by all events.

Since Firefox 65, the `keyup` and [`keydown`](/en-US/docs/Web/API/Element/keydown_event) events are now fired during IME composition, to improve cross-browser compatibility for CJKT users ({{bug(354358)}}. To ignore all `keyup` events that are part of composition, do something like this (229 is a special value set for a `keyCode` relating to an event that has been processed by an IME):

```js
eventTarget.addEventListener("keyup", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

## Examples

### addEventListener keyup example

This example logs the {{domxref("KeyboardEvent.code")}} value whenever you release a key inside the {{HtmlElement("input")}} element.

```html
<input placeholder="Click here, then press and release a key." size="40">
<p id="log"></p>
```

```js
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('keyup', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keyup_example")}}

### onkeyup equivalent

```js
input.onkeyup = logKey;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`input`](/en-US/docs/Web/API/HTMLElement/input_event)
- [`keydown`](/en-US/docs/Web/API/Element/keydown_event)
- [`keypress`](/en-US/docs/Web/API/Element/keypress_event)
- [Document `keyup` event](/en-US/docs/Web/API/Document/keyup_event)
