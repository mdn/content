---
title: "Window: prompt() method"
short-title: prompt()
slug: Web/API/Window/prompt
page-type: web-api-instance-method
browser-compat: api.Window.prompt
---

{{ApiRef("Window")}}

`window.prompt()` instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.

Under some conditions (when the user switches tabs, for example) the browser may not display a dialog, or may not wait for the user to submit text or to cancel the dialog.

## Syntax

```js-nolint
prompt()
prompt(message)
prompt(message, defaultValue)
```

### Parameters

- `message` {{optional_inline}}
  - : A string of text to display to the user. Can be omitted if there is nothing to show
    in the prompt window.
- `defaultValue` {{optional_inline}}
  - : A string containing the default value displayed in the text input field.

### Return value

A string containing the text entered by the user, or `null`.

## Examples

### Using a prompt with a message and default value

The following example shows how to check the returned value of a prompt.
When the user clicks the OK button, text entered in the input field is returned.
If the user clicks OK without entering any text, an empty string is returned.
If the user clicks the Cancel button, this function returns `null`.

```html live-sample___prompt
<button id="signButton">Check star sign</button>
<pre id="log"></pre>
```

```js live-sample___prompt
const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");

signButton.addEventListener("click", () => {
  let sign = prompt("What's your sign?");

  if (sign === null) {
    log.innerText = "OK, maybe next time.";
  } else if (sign.toLowerCase() === "") {
    log.innerText = "Don't be shy, enter your sign!";
  } else if (sign.toLowerCase() === "scorpio") {
    log.innerText = "Wow! I'm a Scorpio too!";
  } else {
    log.innerText = `${sign} is my favorite!`;
  }
});
```

{{EmbedLiveSample('prompt', , , , , , , 'allow-modals')}}

### Prompt messages and default values

There are multiple ways to use a prompt, using `prompt`, `window.prompt`, and providing a message and default values:

```js
// open a blank prompt window
sign = prompt();
// open a blank prompt window
sign = window.prompt();
// open a prompt with the text "Are you feeling lucky"
sign = window.prompt("Are you feeling lucky");
// open a prompt with the text "Are you feeling lucky" and "sure" as the default value
sign = prompt("Are you feeling lucky", "sure");
```

## Notes

Dialog boxes are modal windows — they prevent the user from accessing the rest of the program's interface until the dialog box is closed.
For this reason, you should not overuse any function that creates a dialog box or a modal window.
Alternatively, a {{HTMLElement("dialog")}} element can be used for confirmations.

A prompt dialog contains a single-line textbox, a Cancel button, and an OK button, and returns the (possibly empty) text the user entered into that textbox.
The result is a string, which means you should sometimes cast the value given by the user.
For example, if their answer should be a Number, you should cast the value to Number.

```js
const aNumber = Number(window.prompt("Type a number", ""));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("dialog")}} element
- {{domxref("window.alert", "alert")}}
- {{domxref("window.confirm", "confirm")}}
- [Never Use a Warning When you Mean Undo](https://alistapart.com/article/neveruseawarning/) on A List Apart (2017)
