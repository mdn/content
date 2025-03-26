---
title: "KeyboardEvent: key property"
short-title: key
slug: Web/API/KeyboardEvent/key
page-type: web-api-instance-property
browser-compat: api.KeyboardEvent.key
---

{{APIRef("UI Events")}}

The {{domxref("KeyboardEvent")}} interface's **`key`** read-only property returns the value of the key pressed by the user, taking into consideration the state of modifier keys such as <kbd>Shift</kbd> as well as the keyboard locale and layout.

## Value

A string.

Its value is determined as follows:

- If the pressed key has a printed representation, the returned value is a non-empty Unicode character string containing the printable representation of the key. For example: if the pressed key is the <kbd>Space</kbd> key, the returned value is a single space (`" "`). If the pressed key is the <kbd>B</kbd> key, the returned value is the string `"b"`. However, if the <kbd>Shift</kbd> key is pressed at the same time (so {{domxref("KeyboardEvent/shiftKey", "shiftKey")}} is `true`), the returned value is the string `"B"`.
- If the pressed key is a control or special character, the returned value is one of the [pre-defined key values](/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).
- If the `KeyboardEvent` represents the press of a [dead key](https://en.wikipedia.org/wiki/Dead_key), the key value must be `"Dead"`.
- Some specialty keyboard keys (such as the extended keys for controlling media on multimedia keyboards) don't generate key codes on Windows; instead, they trigger `WM_APPCOMMAND` events. These events get mapped to DOM keyboard events, and are listed among the "Virtual key codes" for Windows, even though they aren't actually key codes.
- If the key cannot be identified, the returned value is `Unidentified`.

> [!CALLOUT]
>
> [See a full list of key values](/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).

## KeyboardEvent sequence

Every `KeyboardEvent` is fired in a pre-determined sequence. For a given key press, the sequence of `KeyboardEvent`s fired is as follows assuming that {{domxref("Event.preventDefault")}} is not called:

1. A {{domxref("Element/keydown_event", "keydown")}} event is first fired. If the key is held down further and the key produces a character key, then the event continues to be emitted in a platform implementation dependent interval and the {{domxref("KeyboardEvent.repeat")}} read only property is set to `true`.
2. If the key produces a character key that would result in a character being inserted into possibly an {{HTMLElement("input")}}, {{HTMLElement("textarea")}} or an element with {{domxref("HTMLElement.contentEditable")}} set to true, the {{domxref("Element/beforeinput_event", "beforeinput")}} and {{domxref("Element/input_event", "input")}} event types are fired in that order. Note that some other implementations may fire {{domxref("Element/keypress_event", "keypress")}} event if supported. The events will be fired repeatedly while the key is held down.
3. A {{domxref("Element/keyup_event", "keyup")}} event is fired once the key is released. This completes the process.

In sequence 1 & 3, the `KeyboardEvent.key` attribute is defined and is set appropriately to a value according to the rules defined earlier.

## KeyboardEvent sequence example

Consider the event sequence generated when we interact with the <kbd>Shift</kbd> and the <kbd>2</kbd> key using a U.S keyboard layout as compared to when we do so using a UK keyboard layout.

Try experimenting using the following two test cases:

1. Press and hold the <kbd>Shift</kbd> key, then press <kbd>2</kbd> and release it. Next, release the <kbd>Shift</kbd> key.
2. Press and hold the <kbd>Shift</kbd> key, then press and hold <kbd>2</kbd>. Release the <kbd>Shift</kbd> key. Finally, release <kbd>2</kbd>.

### HTML

```html
<div class="fx">
  <div>
    <textarea rows="5" name="test-target" id="test-target"></textarea>
    <button type="button" name="btn-reset" id="btn-reset">Reset</button>
  </div>
  <div class="flex">
    <pre id="console-log"></pre>
  </div>
</div>
```

### CSS

```css
.fx {
  -webkit-display: flex;
  display: flex;
  margin-left: -20px;
  margin-right: -20px;
}

.fx > div {
  padding-left: 20px;
  padding-right: 20px;
}

.fx > div:first-child {
  width: 30%;
}

.flex {
  -webkit-flex: 1;
  flex: 1;
}

#test-target {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
```

### JavaScript

```js
const textarea = document.getElementById("test-target");
const consoleLog = document.getElementById("console-log");
const btnReset = document.getElementById("btn-reset");

function logMessage(message) {
  consoleLog.innerText += `${message}\n`;
}

textarea.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    logMessage(`Key "${e.key}" pressed [event: keydown]`);
  } else {
    logMessage(`Key "${e.key}" repeating [event: keydown]`);
  }
});

textarea.addEventListener("beforeinput", (e) => {
  logMessage(`Key "${e.data}" about to be input [event: beforeinput]`);
});

textarea.addEventListener("input", (e) => {
  logMessage(`Key "${e.data}" input [event: input]`);
});

textarea.addEventListener("keyup", (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
});

btnReset.addEventListener("click", (e) => {
  let child = consoleLog.firstChild;
  while (child) {
    consoleLog.removeChild(child);
    child = consoleLog.firstChild;
  }
  textarea.value = "";
});
```

### Result

{{EmbedLiveSample('KeyboardEvent_sequence_example')}}

> [!NOTE]
> On browsers that don't fully implement the {{domxref("InputEvent")}} interface which is used for the {{domxref("Element/beforeinput_event", "beforeinput")}} and {{domxref("Element/input_event", "input")}} events, you may get incorrect output on those lines of the log output.

### Case 1

When the shift key is pressed, a {{domxref("Element/keydown_event", "keydown")}} event is first fired, and the `key` property value is set to the string `Shift`. As we keep holding this key, the {{domxref("Element/keydown_event", "keydown")}} event does not continue to fire repeatedly because it does not produce a character key.

When `key 2` is pressed, another {{domxref("Element/keydown_event", "keydown")}} event is fired for this new key press, and the `key` property value for the event is set to the string `@` for the U.S keyboard type and `"` for the UK keyboard type, because of the active modifier `shift` key. The {{domxref("Element/beforeinput_event", "beforeinput")}} and {{domxref("Element/input_event", "input")}} events are fired next because a character key has been produced.

As we release the `key 2`, a {{domxref("Element/keyup_event", "keyup")}} event is fired and the `key` property will maintain the string values `@` and `"` for the different keyboard layouts respectively.

As we finally release the `shift` key, another {{domxref("Element/keyup_event", "keyup")}} event is fired for it, and the key attribute value remains `Shift`.

### Case 2

When the shift key is pressed, a {{domxref("Element/keydown_event", "keydown")}} event is first fired, and the `key` property value is set to be the string `Shift`. As we keep holding this key, the {{domxref("Element/keydown_event", "keydown")}} event does not continue to fire repeatedly because it produced no character key.

When `key 2` is pressed, another {{domxref("Element/keydown_event", "keydown")}} event is fired for this new key press, and the `key` property value for the event is set to be the string `@` for the U.S keyboard type and `"` for the UK keyboard type, because of the active modifier `shift` key. The {{domxref("Element/beforeinput_event", "beforeinput")}} and {{domxref("Element/input_event", "input")}} events are fired next because a character key has been produced. As we keep holding the key, the {{domxref("Element/keydown_event", "keydown")}} event continues to fire repeatedly and the {{domxref("KeyboardEvent.repeat")}} property is set to `true`. The {{domxref("Element/beforeinput_event", "beforeinput")}} and {{domxref("Element/input_event", "input")}} events are fired repeatedly as well.

As we release the `shift` key, a {{domxref("Element/keyup_event", "keyup")}} event is fired for it, and the key attribute value remains `Shift`. At this point, notice that the `key` property value for the repeating keydown event of the `key 2` key press is now "2" because the modifier `shift` key is no longer active. The same goes for the {{domxref("InputEvent.data")}} property of the {{domxref("Element/beforeinput_event", "beforeinput")}} and {{domxref("Element/input_event", "input")}} events.

As we finally release the `key 2`, a {{domxref("Element/keyup_event", "keyup")}} event is fired but the `key` property will be set to the string value `2` for both keyboard layouts because the modifier `shift` key is no longer active.

## Examples

This example uses {{domxref("EventTarget.addEventListener()")}} to listen for {{domxref("Element/keydown_event", "keydown")}} events. When they occur, the key's value is checked to see if it's one of the keys the code is interested in, and if it is, it gets processed in some way (possibly by steering a spacecraft, perhaps by changing the selected cell in a spreadsheet).

```js
window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {
      case "ArrowDown":
        // Do something for "down arrow" key press.
        break;
      case "ArrowUp":
        // Do something for "up arrow" key press.
        break;
      case "ArrowLeft":
        // Do something for "left arrow" key press.
        break;
      case "ArrowRight":
        // Do something for "right arrow" key press.
        break;
      case "Enter":
        // Do something for "enter" or "return" key press.
        break;
      case " ":
        // Do something for "space" key press.
        break;
      case "Escape":
        // Do something for "esc" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
