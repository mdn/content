---
title: GlobalEventHandlers.onkeypress
slug: Web/API/GlobalEventHandlers/onkeypress
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - Deprecated
browser-compat: api.GlobalEventHandlers.onkeypress
---
{{ApiRef("HTML DOM")}} {{deprecated_header}}

The **`onkeypress`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("keypress")}} events.

The `keypress` event _should_ fire when the user presses a key on the
keyboard. However, in practice browsers do not fire `keypress` events for
certain keys.

> **Warning:** The `onkeypress` event handler has been deprecated. You may want to use
> {{domxref("GlobalEventHandlers.onkeydown", "onkeydown")}} instead.

## Syntax

```js
target.onkeypress = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("KeyboardEvent")}} object as its
sole argument.

## Examples

### Basic example

This example logs the {{domxref("KeyboardEvent.code")}} value whenever you press a key
inside the {{HtmlElement("input")}} element.

#### HTML

```html
<input>
<p id="log"></p>
```

#### JavaScript

```js
const input = document.querySelector('input');
const log = document.getElementById('log');

input.onkeypress = logKey;

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

#### Result

{{EmbedLiveSample("Basic_example", 700, 200)}}

### Filter keys with a regular expression

This example filters the characters typed into a form field using a [regular expression](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

#### HTML

```html
<label>Enter numbers only:
  <input>
</label>
```

#### JavaScript

```js
function numbersOnly(event) {
  return event.charCode === 0 || /\d/.test(String.fromCharCode(event.charCode));
}

const input = document.querySelector('input');
input.onkeypress = numbersOnly;

// Prevent pasting (since pasted content might include non-number characters)
input.onpaste = event => false;
```

#### Result

{{EmbedLiveSample("Filter_keys_with_a_regular_expression")}}

### Capture the typing of a hidden word

The following JavaScript function will do something after the user types the word
"exit" in any point of a page.

```js
/* Type the word "exit" in any point of your page... */

(function () {
  const sSecret = /* Choose your hidden word...: */ "exit";
  let nOffset = 0;

  document.onkeypress = function(oPEvt) {
    let oEvent = oPEvt || window.event,
        nChr = oEvent.charCode,
        sNodeType = oEvent.target.nodeName.toUpperCase();

    if (nChr === 0 ||
        oEvent.target.contentEditable.toUpperCase() === "TRUE" ||
        sNodeType === "TEXTAREA" ||
        sNodeType === "INPUT" && oEvent.target.type.toUpperCase() === "TEXT") {
      return true;
    }

    if (nChr !== sSecret.charCodeAt(nOffset)) {
      nOffset = nChr === sSecret.charCodeAt(0) ? 1 : 0;
    } else if (nOffset < sSecret.length - 1) {
      nOffset++;
    } else {
      nOffset = 0;
      /* Do something here... */
      alert("Yes!!!");
      location.assign("https://developer.mozilla.org/");
    }

    return true;
  };
})();
```

> **Note:** A more complete framework for capturing the typing of hidden
> words is [available on GitHub](https://github.com/madmurphy/spell.js/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Browser compatibility notes

- The `keypress` event is no longer fired for [non-printable
  keys](</en-US/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_(function_keys)>) (see {{bug(968056)}} for Firefox 65's implementation of this), except for
  the

  <kbd>Enter</kbd>

  key, and the

  <kbd>Shift</kbd>

  \+

  <kbd>Enter</kbd>

  and

  <kbd>Ctrl</kbd>

  \+

  <kbd>Enter</kbd>

  key combinations (these were kept for
  cross-browser compatibility purposes).

## See also

- {{Event("keypress")}} event
- Related event handlers

  - {{domxref("GlobalEventHandlers.onkeydown")}}
  - {{domxref("GlobalEventHandlers.onkeyup")}}
