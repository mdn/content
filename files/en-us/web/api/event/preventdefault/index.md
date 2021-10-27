---
title: Event.preventDefault()
slug: Web/API/Event/preventDefault
tags:
  - Method
  - Reference
browser-compat: api.Event.preventDefault
---
{{apiref("DOM")}}

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

```js
event.preventDefault();
```

## Examples

### Blocking default click handling

Toggling a checkbox is the default action of clicking on a checkbox. This example
demonstrates how to prevent that from happening:

#### JavaScript

```js
document.querySelector("#id-checkbox").addEventListener("click", function(event) {
         document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
         event.preventDefault();
}, false);
```

#### HTML

```html
<p>Please click on the checkbox control.</p>

<form>
  <label for="id-checkbox">Checkbox:</label>
  <input type="checkbox" id="id-checkbox"/>
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

Here's the form:

```html
<div class="container">
  <p>Please enter your name using lowercase letters only.</p>

  <form>
    <input type="text" id="my-textbox">
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
{{domxref("Element/keypress_event", "keypress")}} events:

```js
var myTextbox = document.getElementById('my-textbox');
myTextbox.addEventListener('keypress', checkName, false);
```

The `checkName()` function, which looks at the pressed key and decides
whether to allow it:

```js
function checkName(evt) {
  var charCode = evt.charCode;
  if (charCode != 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();
      displayWarning(
        "Please use lowercase letters only."
        + "\n" + "charCode: " + charCode + "\n"
      );
    }
  }
}
```

The `displayWarning()` function presents a notification of a problem. It's
not an elegant function but does the job for the purposes of this example:

```js
var warningTimeout;
var warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    window.clearTimeout(warningTimeout);
  } else {
    // insert warningBox after myTextbox
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }

  warningTimeout = window.setTimeout(function() {
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
