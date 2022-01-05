---
title: Window.prompt()
slug: Web/API/Window/prompt
tags:
  - API
  - HTML DOM
  - MakeBrowserAgnostic
  - Method
  - Reference
  - Window
  - prompt
browser-compat: api.Window.prompt
---
{{ApiRef("Window")}}

`window.prompt()` instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.

Under some conditions — for example, when the user switches tabs — the browser may not actually display a dialog, or may not wait for the user to submit text or to cancel the dialog.

## Syntax

```js
result = window.prompt(message, default);
```

### Parameters

- `message` {{optional_inline}}
  - : A string of text to display to the user. Can be omitted if there is nothing to show
    in the prompt window.
- `default` {{optional_inline}}
  - : A string containing the default value displayed in the text input field. Note that
    in Internet Explorer 7 and 8, if you do not provide this parameter, the string
    `"undefined"` is the default value.

### Return value

A string containing the text entered by the user, or `null`.

## Example

```js
let sign = prompt("What's your sign?");

if (sign.toLowerCase() == "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt();       //  open the blank prompt window
sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure"
```

When the user clicks the OK button, text entered in the input field is returned. If the
user clicks OK without entering any text, an empty string is returned. If the user
clicks the Cancel button, this function returns `null`.

The above prompt appears as follows (in Chrome on OS X):

[![prompt() dialog in Chrome on OS X](prompt.png)](prompt.png)

## Notes

A prompt dialog contains a single-line textbox, a Cancel button, and an OK button, and
returns the (possibly empty) text the user entered into that textbox.

Dialog boxes are modal windows; they
prevent the user from accessing the rest of the program's interface until the dialog box
is closed. For this reason, you should not overuse any function that creates a dialog
box (or modal window).

Please note that result is a string. That means you should sometimes cast the value
given by the user. For example, if their answer should be a Number, you should cast the
value to Number.

```js
const aNumber = Number(window.prompt("Type a number", ""));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.alert", "alert")}}
- {{domxref("window.confirm", "confirm")}}
