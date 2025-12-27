---
title: "HTMLDialogElement: open property"
short-title: open
slug: Web/API/HTMLDialogElement/open
page-type: web-api-instance-property
browser-compat: api.HTMLDialogElement.open
---

{{ APIRef("HTML DOM") }}

The **`open`** property of the
{{domxref("HTMLDialogElement")}} interface is a boolean value reflecting the
[`open`](/en-US/docs/Web/HTML/Reference/Elements/dialog#open) HTML attribute, indicating whether the {{htmlelement("dialog")}} is
available for interaction.

## Value

A boolean value representing the state of the [`open`](/en-US/docs/Web/HTML/Reference/Elements/dialog#open) HTML attribute. A value of `true` means that the dialog is showing, while `false` means it's not showing.

> [!WARNING]
> While the `open` property is technically not read-only and can be set directly, doing so is strongly discouraged by [the HTML specification](https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-dialog-closedby), as it can break normal dialog interactions in unexpected ways. For example, the [`close`](/en-US/docs/Web/API/HTMLDialogElement/close_event) event won't fire when programmatically setting `open` to `false`, and subsequent calls to the [`close()`](/en-US/docs/Web/API/HTMLDialogElement/close) and [`requestClose()`](/en-US/docs/Web/API/HTMLDialogElement/requestClose) methods will have no effect. Instead, it's better to use methods such as [`show()`](/en-US/docs/Web/API/HTMLDialogElement/show), [`showModal()`](/en-US/docs/Web/API/HTMLDialogElement/showModal), `close()`, and `requestClose()` to change the value of the `open` attribute.

## Examples

The following example shows a simple button that, when clicked, opens a
{{htmlelement("dialog")}} containing a form via the `showModal()` method.
From there you can click the _Cancel_ button to close the dialog (via the
{{domxref("HTMLDialogElement.close()")}} method), or submit the form via the submit
button.

```html
<!-- Simple pop-up dialog box -->
<dialog id="dialog">
  <form method="dialog">
    <button type="submit">Close</button>
  </form>
</dialog>

<button id="open">Open Dialog</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 170px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");

function openCheck(dialog) {
  log(dialog.open ? "Dialog: open" : "Dialog: closed");
}

openButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

dialog.addEventListener("close", () => {
  openCheck(dialog);
});
```

### Result

{{ EmbedLiveSample('Examples', '100%', '250px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{htmlelement("dialog")}} element
