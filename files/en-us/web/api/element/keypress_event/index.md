---
title: 'Element: keypress event'
slug: Web/API/Element/keypress_event
page-type: web-api-event
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

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('keypress', (event) => {});

onkeypress = (event) => { };
```

## Event type

A {{domxref("KeyboardEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("KeyboardEvent")}}

## Event properties

_This interface also inherits properties of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("KeyboardEvent.altKey")}} {{ReadOnlyInline}}

  - : Returns a boolean value that is `true` if the  <kbd>Alt</kbd> (<kbd>Option</kbd> or <kbd>⌥</kbd> on macOS) key was active when the key event was generated.

- {{domxref("KeyboardEvent.code")}} {{ReadOnlyInline}}

  - : Returns a string with the code value of the physical key represented by the event.

    > **Warning:** This ignores the user's keyboard layout, so that if the user presses the key at the "Y" position in a QWERTY keyboard layout (near the middle of the row above the home row), this will always return "KeyY", even if the user has a QWERTZ keyboard (which would mean the user expects a "Z" and all the other properties would indicate a "Z") or a Dvorak keyboard layout (where the user would expect an "F"). If you want to display the correct keystrokes to the user, you can use {{domxref("Keyboard.getLayoutMap()")}}.

- {{domxref("KeyboardEvent.ctrlKey")}} {{ReadOnlyInline}}

  - : Returns a boolean value that is `true` if the <kbd>Ctrl</kbd> key was active when the key event was generated.

- {{domxref("KeyboardEvent.isComposing")}} {{ReadOnlyInline}}
  - : Returns a boolean value that is `true` if the event is fired between after `compositionstart` and before `compositionend`.
- {{domxref("KeyboardEvent.key")}} {{ReadOnlyInline}}
  - : Returns a string representing the key value of the key represented by the event.
- {{domxref("KeyboardEvent.locale")}} {{ReadOnlyInline}}

  - : Returns a string representing a locale string indicating the locale the keyboard is configured for. This may be the empty string if the browser or device doesn't know the keyboard's locale.

    > **Note:** This does not describe the locale of the data being entered. A user may be using one keyboard layout while typing text in a different language.

- {{domxref("KeyboardEvent.location")}} {{ReadOnlyInline}}
  - : Returns a number representing the location of the key on the keyboard or other input device. A list of the constants identifying the locations is shown above in [Keyboard locations](#keyboard_locations).
- {{domxref("KeyboardEvent.metaKey")}} {{ReadOnlyInline}}

  - : Returns a boolean value that is `true` if the <kbd>Meta</kbd> key (on Mac keyboards, the <kbd>⌘ Command</kbd> key; on Windows keyboards, the Windows key (<kbd>⊞</kbd>)) was active when the key event was generated.

- {{domxref("KeyboardEvent.repeat")}} {{ReadOnlyInline}}
  - : Returns a boolean value that is `true` if the key is being held down such that it is automatically repeating.
- {{domxref("KeyboardEvent.shiftKey")}} {{ReadOnlyInline}}

  - : Returns a boolean value that is `true` if the <kbd>Shift</kbd> key was active when the key event was generated.

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

- The {{domxref("Document")}} interface, which the event also targets.
- Related events:

  - [`input`](/en-US/docs/Web/API/HTMLElement/input_event)
  - [`keydown`](/en-US/docs/Web/API/Element/keydown_event)
  - [`keyup`](/en-US/docs/Web/API/Element/keyup_event)
