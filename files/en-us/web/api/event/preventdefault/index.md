---
title: "Event: preventDefault() method"
short-title: preventDefault()
slug: Web/API/Event/preventDefault
page-type: web-api-instance-method
browser-compat: api.Event.preventDefault
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`preventDefault()`** method of the {{domxref("Event")}} interface tells the {{Glossary("user agent")}} that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

The event continues to propagate as usual,
unless one of its event listeners calls
{{domxref("Event.stopPropagation", "stopPropagation()")}}
or {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}},
either of which terminates propagation at once.

As noted below, calling **`preventDefault()`** for a
non-cancelable event, such as one dispatched via
{{domxref("EventTarget.dispatchEvent()")}}, without specifying
`cancelable: true` has no effect.

## Syntax

```js-nolint
event.preventDefault()
```

## Examples

### Blocking default click handling

Toggling a checkbox is the default action of clicking on a checkbox. This example
demonstrates how to prevent that from happening:

#### JavaScript

```js
const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  const warn = "preventDefault() won't let you check this!\n";
  document.getElementById("output-box").innerText += warn;
  event.preventDefault();
}
```

#### HTML

```html
<p>Please click on the checkbox control.</p>

<form>
  <label for="id-checkbox">Checkbox:</label>
  <input type="checkbox" id="id-checkbox" />
</form>

<div id="output-box"></div>
```

#### Result

{{EmbedLiveSample("Blocking_default_click_handling")}}

### Stopping keystrokes from reaching an edit field

The following example demonstrates how invalid text input can be stopped from reaching
the input field with `preventDefault()`. Nowadays, you should usually use [native HTML form validation](/en-US/docs/Learn/Forms/Form_validation)
instead.

#### HTML

The HTML form below captures user input.
Since we're only interested in keystrokes, we're disabling `autocomplete` to prevent the browser from filling in the input field with cached values.

```html
<div class="container">
  <p>Please enter your name using lowercase letters only.</p>

  <form>
    <input type="text" id="my-textbox" autocomplete="off" />
  </form>
</div>
```

#### CSS

We use a little bit of CSS for the warning box we'll draw when the user presses an
invalid key:

```css
.warning {
  border: 2px solid #f39389;
  border-radius: 2px;
  padding: 10px;
  position: absolute;
  background-color: #fbd8d4;
  color: #3b3c40;
}
```

#### JavaScript

And here's the JavaScript code that does the job. First, listen for
{{domxref("Element/keydown_event", "keydown")}} events:

```js
const myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener("keydown", checkName, false);
```

The `checkName()` function, which looks at the pressed key and decides
whether to allow it:

```js
function checkName(evt) {
  const key = evt.key;
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  if (!lowerCaseAlphabet.includes(key)) {
    evt.preventDefault();
    displayWarning(`Please use lowercase letters only.\nKey pressed: ${key}\n`);
  }
}
```

The `displayWarning()` function presents a notification of a problem. It's
not an elegant function but does the job for the purposes of this example:

```js
let warningTimeout;
const warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
  warningBox.innerText = msg;

  if (document.body.contains(warningBox)) {
    clearTimeout(warningTimeout);
  } else {
    // insert warningBox after myTextbox
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }

  warningTimeout = setTimeout(() => {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}
```

#### Result

{{ EmbedLiveSample('Stopping_keystrokes_from_reaching_an_edit_field', 600, 200) }}

## Notes

Calling `preventDefault()` during any stage of event flow cancels the event,
meaning that any default action normally taken by the implementation as a result of the
event will not occur.

You can use {{domxref("Event.cancelable")}} to check if the event is cancelable.
Calling `preventDefault()` for a non-cancelable event has no effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
