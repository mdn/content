---
title: "Element: keydown event"
short-title: keydown
slug: Web/API/Element/keydown_event
page-type: web-api-event
browser-compat: api.Element.keydown_event
---

{{APIRef("UI Events")}}

The **`keydown`** event is fired when a key is pressed.

Unlike the deprecated {{domxref("Element/keypress_event", "keypress")}} event, the `keydown` event is fired for all keys, regardless of whether they produce a character value.

The `keydown` and [`keyup`](/en-US/docs/Web/API/Element/keyup_event) events provide a code indicating which key is pressed, while `keypress` indicates which character was entered. For example, a lowercase "a" will be reported as 65 by `keydown` and `keyup`, but as 97 by `keypress`. An uppercase "A" is reported as 65 by all events.

The event target of a key event is the currently focused element which is processing the keyboard activity. This includes: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, anything that is [`contentEditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable), and anything else that can be interacted with the keyboard, such as {{HTMLElement("a")}}, {{HTMLElement("button")}}, and {{HTMLElement("summary")}}. If no suitable element is in focus, the event target will be the {{HTMLElement("body")}} or the root. The event [bubbles](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling). It can reach {{domxref("Document")}} and {{domxref("Window")}}.

The event target might change between different key events. For example, the `keydown` target for pressing the <kbd>Tab</kbd> key would be different from the `keyup` target, because the focus has changed.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("keydown", (event) => { })

onkeydown = (event) => { }
```

## Event type

A {{domxref("KeyboardEvent")}}. Inherits from {{domxref("UIEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("KeyboardEvent")}}

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

> [!NOTE]
> `compositionstart` may fire _after_ `keydown` when typing the first character that opens up the IME, and `compositionend` may fire _before_ `keydown` when typing the last character that closes the IME. In these cases, `isComposing` is false even when the event is part of composition. However, {{domxref("KeyboardEvent.keyCode")}} is still `229` in these cases, so it's still advisable to check `keyCode` as well, although it's deprecated.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`input`](/en-US/docs/Web/API/Element/input_event)
- [`keypress`](/en-US/docs/Web/API/Element/keypress_event)
- [`keyup`](/en-US/docs/Web/API/Element/keyup_event)
