---
title: "Window: confirm() method"
short-title: confirm()
slug: Web/API/Window/confirm
page-type: web-api-instance-method
browser-compat: api.Window.confirm
---

{{ApiRef("Window")}}

`window.confirm()` instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog.

Under some conditions — for example, when the user switches tabs — the browser may not actually display a dialog, or may not wait for the user to confirm or cancel the dialog.

## Syntax

```js-nolint
confirm()
confirm(message)
```

### Parameters

- `message` {{optional_inline}}
  - : A string you want to display in the confirmation dialog.

### Return value

A boolean indicating whether OK (`true`) or Cancel (`false`) was selected.
If a browser is ignoring in-page dialogs, then the returned value is always `false`.

## Examples

### Confirming before an action

The following example shows how to check the returned value of a confirmation dialog.
When the user clicks the OK button, we call {{domxref("window.open()")}}, and if the user clicks Cancel, we print some text to a {{htmlelement("pre")}} element.

```html live-sample___confirm
<button id="windowButton">Open new tab</button>
<pre id="log"></pre>
```

```js live-sample___confirm
const windowButton = document.querySelector("#windowButton");
const log = document.querySelector("#log");

windowButton.addEventListener("click", () => {
  if (window.confirm("Do you want to open in new tab?")) {
    window.open("https://developer.mozilla.org/en-US/docs/Web/API/Window/open");
  } else {
    log.innerText = "Glad you're staying!";
  }
});
```

{{EmbedLiveSample('confirm', , , , , , , 'allow-modals allow-popups')}}

## Notes

Dialog boxes are modal windows — they prevent the user from accessing the rest of the program's interface until the dialog box is closed.
For this reason, you should not overuse any function that creates a dialog box or a modal window.
Alternatively, a {{HTMLElement("dialog")}} element can be used for confirmations.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("dialog")}} element
- {{domxref("window.alert()")}}
- {{domxref("window.prompt()")}}
- [Never Use a Warning When you Mean Undo](https://alistapart.com/article/neveruseawarning/) on A List Apart (2017)
