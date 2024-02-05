---
title: "Window: alert() method"
short-title: alert()
slug: Web/API/Window/alert
page-type: web-api-instance-method
browser-compat: api.Window.alert
---

{{ APIRef }}

`window.alert()` instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.

Under some conditions — for example, when the user switches tabs — the browser may not actually display a dialog, or may not wait for the user to dismiss the dialog.

## Syntax

```js-nolint
alert()
alert(message)
```

### Parameters

- `message` {{optional_inline}}
  - : A string you want to display in the alert dialog, or, alternatively, an object that
    is converted into a string and displayed.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
window.alert("Hello world!");
alert("Hello world!");
```

Both produce:

![Black alert dialog box. At the top left small circle icon follow by white open and close square brackets containing this white text: JavaScript application. Below on the left, a Hello world! white text. And on the bottom right a small blue button. The button's text is: ok in black.](alerthelloworld.png)

## Notes

The alert dialog should be used for messages which do not require any response on the
part of the user, other than the acknowledgement of the message.

Dialog boxes are modal windows - they
prevent the user from accessing the rest of the program's interface until the dialog box
is closed. For this reason, you should not overuse any function that creates a dialog
box (or modal window).

Alternatively {{HTMLElement("dialog")}} element can be used to display alerts.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("dialog")}} element
- {{domxref("window.confirm","confirm")}}
- {{domxref("window.prompt","prompt")}}
