---
title: Window.alert()
slug: Web/API/Window/alert
tags:
  - API
  - HTML DOM
  - Method
  - Reference
  - Window
  - alert
browser-compat: api.Window.alert
---
{{ APIRef }}

`window.alert()` instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.

Under some conditions — for example, when the user switches tabs — the browser may not actually display a dialog, or may not wait for the user to dismiss the dialog.

## Syntax

```js
window.alert(message);
```

### Parameters

- `message` {{optional_inline}}
  - : A string you want to display in the alert dialog, or, alternatively, an object that
    is converted into a string and displayed.

## Example

```js
window.alert("Hello world!");
alert("Hello world!");
```

Both produce:

![](alerthelloworld.png)

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
- For [Mozilla Chrome](/en-US/docs/Glossary/Chrome) see
  {{ifmethod("nsIPromptService","alert")}} and
  {{ifmethod("nsIPromptService","alertCheck")}}
