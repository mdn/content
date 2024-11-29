---
title: "Element: keydown event"
short-title: keydown
slug: Web/API/Element/keydown_event
page-type: web-api-event
browser-compat: api.Element.keydown_event
---

{{APIRef}}

The **`keydown`** event is fired when a key is pressed.

Unlike the deprecated {{domxref("Element/keypress_event", "keypress")}} event, the `keydown` event is fired for all keys, regardless of whether they produce a character value.

The `keydown` and [`keyup`](/en-US/docs/Web/API/Element/keyup_event) events provide a code indicating which key is pressed, while `keypress` indicates which character was entered. For example, a lowercase "a" will be reported as 65 by `keydown` and `keyup`, but as 97 by `keypress`. An uppercase "A" is reported as 65 by all events.

The event target of a key event is the currently focused element which is processing the keyboard activity. This includes: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, anything that is [`contentEditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable), and anything else that can be interacted with the keyboard, such as {{HTMLElement("a")}}, {{HTMLElement("button")}}, and {{HTMLElement("summary")}}. If no suitable element is in focus, the event target will be the {{HTMLElement("body")}} or the root. If not caught, the event [bubbles](/en-US/docs/Learn/JavaScript/Building_blocks/Event_bubbling) up the [DOM tree](/en-US/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model#what_is_a_dom_tree) until reaching {{domxref("Document")}}.

The event target might change between different key events. For example, the `keydown` target for pressing the <kbd>Tab</kbd> key would be different from the `keyup` target, because the focus has changed.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("keydown", (event) => {});

onkeydown = (event) => {};
```

## Event type

A {{domxref("KeyboardEvent")}}. Inherits from {{domxref("UIEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("KeyboardEvent")}}

## Event properties

_This interface also inherits properties of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("KeyboardEvent.altKey")}} {{ReadOnlyInline}}

  - : Returns a boolean value that is `true` if the <kbd>Alt</kbd> (<kbd>Option</kbd> or <kbd>⌥</kbd> on macOS) key was active when the key event was generated.

- {{domxref("KeyboardEvent.code")}} {{ReadOnlyInline}}

  - : Returns a string with the code value of the physical key represented by the event.

    > [!WARNING]
    > This ignores the user's keyboard layout, so that if the user presses the key at the "Y" position in a QWERTY keyboard layout (near the middle of the row above the home row), this will always return "KeyY", even if the user has a QWERTZ keyboard (which would mean the user expects a "Z" and all the other properties would indicate a "Z") or a Dvorak keyboard layout (where the user would expect an "F"). If you want to display the correct keystrokes to the user, you can use {{domxref("Keyboard.getLayoutMap()")}}.

- {{domxref("KeyboardEvent.ctrlKey")}} {{ReadOnlyInline}}

  - : Returns a boolean value that is `true` if the <kbd>Ctrl</kbd> key was active when the key event was generated.

- {{domxref("KeyboardEvent.isComposing")}} {{ReadOnlyInline}}
  - : Returns a boolean value that is `true` if the event is fired between after `compositionstart` and before `compositionend`.
- {{domxref("KeyboardEvent.key")}} {{ReadOnlyInline}}
  - : Returns a string representing the key value of the key represented by the event.
- {{domxref("KeyboardEvent.location")}} {{ReadOnlyInline}}
  - : Returns a number representing the location of the key on the keyboard or other input device. A list of the constants identifying the locations is shown in [Keyboard locations](/en-US/docs/Web/API/KeyboardEvent#keyboard_locations).
- {{domxref("KeyboardEvent.metaKey")}} {{ReadOnlyInline}}

  - : Returns a boolean value that is `true` if the <kbd>Meta</kbd> key (on Mac keyboards, the <kbd>⌘ Command</kbd> key; on Windows keyboards, the Windows key (<kbd>⊞</kbd>)) was active when the key event was generated.

- {{domxref("KeyboardEvent.repeat")}} {{ReadOnlyInline}}
  - : Returns a boolean value that is `true` if the key is being held down such that it is automatically repeating.
- {{domxref("KeyboardEvent.shiftKey")}} {{ReadOnlyInline}}

  - : Returns a boolean value that is `true` if the <kbd>Shift</kbd> key was active when the key event was generated.

## Examples

### addEventListener keydown example

This example logs the {{domxref("KeyboardEvent.code")}} value whenever you press down a key inside the {{HtmlElement("input")}} element.

```html
<input placeholder="Click here, then press down a key." size="40" />
<p id="log"></p>
```

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keydown_example")}}

### keydown events with IME

Since Firefox 65, the `keydown` and [`keyup`](/en-US/docs/Web/API/Element/keyup_event) events are now fired during {{glossary("Input method editor")}} composition, to improve cross-browser compatibility for CJKT users ([Firefox bug 354358](https://bugzil.la/354358)). To ignore all `keydown` events that are part of composition, do something like this (229 is a special value set for a `keyCode` relating to an event that has been processed by an IME):

```js
eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

> **Note:** `compositionstart` may fire _after_ `keydown` when typing the first character that opens up the IME, and `compositionend` may fire _before_ `keydown` when typing the last character that closes the IME. In these cases, `isComposing` is false even when the event is part of composition. However, {{domxref("KeyboardEvent.keyCode")}} is still `229` in these cases, so it's still advisable to check `keyCode` as well, although it's deprecated.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`input`](/en-US/docs/Web/API/Element/input_event)
- [`keypress`](/en-US/docs/Web/API/Element/keypress_event)
- [`keyup`](/en-US/docs/Web/API/Element/keyup_event)
