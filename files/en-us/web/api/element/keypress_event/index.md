---
title: "Element: keypress event"
short-title: keypress
slug: Web/API/Element/keypress_event
page-type: web-api-event
status:
  - deprecated
browser-compat: api.Element.keypress_event
---

{{APIRef("UI Events")}}{{deprecated_header}}

The **`keypress`** event is fired when a [letter, number, punctuation, or symbol](https://w3c.github.io/uievents/#unicode-character-categories) key is pressed, or else when the <kbd>Enter</kbd> key is pressed — including when the <kbd>Enter</kbd> key is pressed in combination with the <kbd>Shift</kbd> key or <kbd>Ctrl</kbd> key. Otherwise, when a modifier key such as the <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd>, <kbd>Esc</kbd>, or <kbd>Option</kbd> key is pressed in isolation, the `keypress` event is _not_ fired.

> [!WARNING]
> Since this event has been deprecated, you should use [`beforeinput`](/en-US/docs/Web/API/Element/beforeinput_event) or [`keydown`](/en-US/docs/Web/API/Element/keydown_event) instead.

The event [bubbles](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling). It can reach {{domxref("Document")}} and {{domxref("Window")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("keypress", (event) => { })

onkeypress = (event) => { }
```

## Event type

A {{domxref("KeyboardEvent")}}. Inherits from {{domxref("UIEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("KeyboardEvent")}}

## Examples

### addEventListener keypress example

This example logs the {{domxref("KeyboardEvent.code")}} value whenever you press a key after focussing the {{htmlelement("input")}} element.

To see which keys cause a `keypress` event to fire, and which keys don't, try pressing the following:

- letter keys, number keys, and punctuation keys
- symbol keys such as the <kbd>$</kbd>, <kbd>+</kbd>, <kbd>=</kbd>, <kbd>%</kbd>, and <kbd>+</kbd> keys
- modifier keys such as the <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd>, <kbd>Esc</kbd>, <kbd>Option</kbd>, or <kbd>⌘</kbd> keys
- the <kbd>Enter</kbd> key
- the <kbd>Enter</kbd> key in combination with the <kbd>Shift</kbd> or <kbd>Ctrl</kbd> keys
- the <kbd>Enter</kbd> key in combination with modifier keys other than the <kbd>Shift</kbd> or <kbd>Ctrl</kbd> keys

```html
<div>
  <label for="sample">Focus the input and type something:</label>
  <input type="text" name="text" id="sample" />
</div>
<p id="log"></p>
```

```js
const log = document.getElementById("log");
const input = document.querySelector("input");

input.addEventListener("keypress", logKey);

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

- The {{domxref("Document")}} interface, which the event also targets.
- Related events:
  - [`input`](/en-US/docs/Web/API/Element/input_event)
  - [`keydown`](/en-US/docs/Web/API/Element/keydown_event)
  - [`keyup`](/en-US/docs/Web/API/Element/keyup_event)
