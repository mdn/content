---
title: "Element: keyup event"
short-title: keyup
slug: Web/API/Element/keyup_event
page-type: web-api-event
browser-compat: api.Element.keyup_event
---

{{APIRef}}

The **`keyup`** event is fired when a key is released.

The [`keydown`](/en-US/docs/Web/API/Element/keydown_event) and `keyup` events provide a code indicating which key is pressed, while `keypress` indicates which character was entered. For example, a lowercase "a" will be reported as 65 by `keydown` and `keyup`, but as 97 by `keypress`. An uppercase "A" is reported as 65 by all events.

The event target of a key event is the currently focused element which is processing the keyboard activity. This includes: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, anything that is [`contentEditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable), and anything else that can be interacted with the keyboard, such as {{HTMLElement("a")}}, {{HTMLElement("button")}}, and {{HTMLElement("summary")}}. If no suitable element is in focus, the event target will be the {{HTMLElement("body")}} or the root. The event [bubbles](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling). It can reach {{domxref("Document")}} and {{domxref("Window")}}.

The event target might change between different key events. For example, the `keydown` target for pressing the <kbd>Tab</kbd> key would be different from the `keyup` target, because the focus has changed.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("keyup", (event) => {});

onkeyup = (event) => {};
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

### addEventListener keyup example

This example logs the {{domxref("KeyboardEvent.code")}} value whenever you release a key inside the {{HtmlElement("input")}} element.

```html
<input placeholder="Click here, then press and release a key." size="40" />
<p id="log"></p>
```

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keyup", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keyup_example")}}

### keyup events with IME

Since Firefox 65, the [`keydown`](/en-US/docs/Web/API/Element/keydown_event) and `keyup` events are now fired during {{glossary("Input method editor")}} composition, to improve cross-browser compatibility for CJKT users ([Firefox bug 354358](https://bugzil.la/354358)). To ignore all `keyup` events that are part of composition, do something like this:

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing) {
    return;
  }
  // do something
});
```

> [!NOTE]
> Unlike `keydown`, `keyup` events do not have special {{domxref("KeyboardEvent/keyCode", "keyCode")}} values for IME events. However, like `keydown`, `compositionstart` may fire _after_ `keyup` when typing the first character that opens up the IME, and `compositionend` may fire _before_ `keyup` when typing the last character that closes the IME. In these cases, `isComposing` is false even when the event is part of composition.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`input`](/en-US/docs/Web/API/Element/input_event)
- [`keydown`](/en-US/docs/Web/API/Element/keydown_event)
- [`keypress`](/en-US/docs/Web/API/Element/keypress_event)
