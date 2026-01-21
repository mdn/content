---
title: Interact with the clipboard
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
page-type: guide
browser-compat:
  - api.Clipboard
  - webextensions.api.clipboard
sidebar: addonsidebar
---

You work with the clipboard in extensions using the Web API {{domxref("Clipboard", "navigator.clipboard")}} method and `"clipboardRead"` or `"clipboardWrite"` extension permissions. {{domxref("Clipboard", "navigator.clipboard")}} enables your extension to read and write arbitrary data from and to the clipboard.

> [!NOTE]
> The Web API {{domxref("Document.execCommand()","document.execCommand")}} method was used to provide clipboard functionality. However, {{domxref("Document.execCommand()","document.execCommand(&#34;copy&#34;)")}}, {{domxref("Document.execCommand()","document.execCommand(&#34;cut&#34;)")}}, and {{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}} are deprecated and no longer guaranteed to work or be available on any browser. These features are documented in this article for historical reference.

The {{domxref("Clipboard", "navigator.clipboard")}} API provides methods for:

- Text content, using {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} and {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}}.
- Images, rich text, HTML, and other rich content, using {{domxref("Clipboard.read", "navigator.clipboard.read()")}} and {{domxref("Clipboard.write", "navigator.clipboard.write()")}}.

> [!NOTE]
> The Clipboard API write and read methods are only available in [secure contexts](/en-US/docs/Web/Security/Secure_Contexts). Your extension can't use them from a content script running on `http:` pages; they can only use them from `https:` pages.

## Writing to the clipboard

The Clipboard API methods {{domxref("Clipboard.write", "navigator.clipboard.write()")}} and {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}} write arbitrary content to the clipboard. The methods are available from a secure context but only function after the extension's user performs {{Glossary("Transient Activation","transient activation")}}. However, with the [`"clipboardWrite"` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite), transient activation isn't required.

> [!NOTE]
> In Firefox and Chrome, the `"clipboardWrite"` permission enables writing to the clipboard from all extension contexts and content scripts. In Safari, the `"clipboardWrite"` permission is only supported in extension contexts (not content scripts).

This function takes a string and writes it to the clipboard:

```js
function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(
    () => {
      /* clipboard successfully set */
    },
    () => {
      /* clipboard write failed */
    },
  );
}
```

### Using execCommand()

> [!NOTE]
> {{domxref("Document.execCommand()","document.execCommand(&#34;copy&#34;)")}} and {{domxref("Document.execCommand()","document.execCommand(&#34;cut&#34;)")}} are deprecated and no longer guaranteed to work or be available on any browser.

The `"cut"` and `"copy"` commands of the {{domxref("Document.execCommand", "document.execCommand()")}} method are used to replace the clipboard's content with the selected material. Extensions can use these commands without special permission in short-lived event handlers triggered by user actions (for example, a click handler).

For example, suppose you've got a popup that includes this HTML:

```html
<input id="input" type="text" /> <button id="copy">Copy</button>
```

To make the `"copy"` button copy the contents of the {{HTMLElement("input")}} element, you can use code like this:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Because the `execCommand()` call is inside a click event handler, your extension doesn't need special permissions.

However, take the example of your extension triggering the copy from an alarm:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

browser.alarms.create({
  delayInMinutes: 0.1,
});

browser.alarms.onAlarm.addListener(copy);
```

Depending on the browser, this may not work. On Firefox, it doesn't work, and you see a message like this in the console:

`document.execCommand('cut'/'copy') was denied because it was not called from inside a short running user-generated event handler.`

To enable this use case, your extension must request the `"clipboardWrite"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): `"clipboardWrite"` enables your extension to write to the clipboard outside a short-lived event handler for a user action.

> [!NOTE]
> {{domxref("Document.execCommand", "document.execCommand()")}} doesn't work on input fields of `type="hidden"`, with the HTML5 attribute `"hidden"`, or any matching CSS rule using `"display: none;"`. To add a "copy to clipboard" button to a `span`, `div`, or `p` tag, you need to use a workaround, such as setting the input's position to absolute and moving it out of the viewport.

## Reading from the clipboard

The Clipboard API methods {{domxref("Clipboard.read", "navigator.clipboard.read()")}} and {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} read arbitrary text or binary data from the clipboard. These methods allow extensions to access data in the clipboard without pasting it into an editable element.

The methods are available from a secure context but only function after the extension's user performs {{Glossary("Transient Activation","transient activation")}} and clicks a paste prompt in an ephemeral context menu. However, with the [`"clipboardRead"` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardRead)` permission, your extension can read from the clipboard without user confirmation or transient activation.

> [!NOTE]
> In Firefox and Chrome, the `"clipboardRead"` permission enables writing to the clipboard from all extension contexts and content scripts. Safari doesn't support the `"clipboardRead"` permission.

This snippet of code fetches the text from the clipboard and replaces the contents of the element with the ID `"outbox"` with that text.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### Using execCommand()

> [!NOTE]
> {{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}} is deprecated and no longer guaranteed to work or be available on any browser.

To use {{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}}, your extension needs the `"clipboardRead"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). This requirement exists even if you're using the `"paste"` command from within a user-generated event handler, such as {{domxref("Element/click_event", "click")}} or {{domxref("Element/keypress_event", "keypress")}}.

Consider HTML that includes this:

```html
<textarea id="output"></textarea> <button id="paste">Paste</button>
```

To set the content of the {{HTMLElement("textarea")}} element with the ID `"output"` from the clipboard when the user clicks the `"paste"` {{HTMLElement("button")}}, you can use code like this:

```js
function paste() {
  let pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}
document.querySelector("#paste").addEventListener("click", paste);
```

### Browser-specific considerations

In Chrome:

- Chrome doesn't expose `navigator.clipboard` to extension service workers, and offscreen documents can't access `navigator.clipboard` due to the API's document focus requirements. As a result, Chrome extensions have to use the deprecated `document.execCommand()` APIs in an offscreen document or use `navigator.clipboard` in a different context, such as a content script or extension page.
  For page scripts to write to the clipboard without user interaction, the `"clipboard-write"` permission needs to be requested using the Web API {{domxref("Permissions", "navigator.permissions")}}. Your extension can check for that permission using {{domxref("Permissions.query", "navigator.permissions.query()")}}:

  ```js
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      /* write to the clipboard now */
    }
  });
  ```

  > [!NOTE]
  > The `clipboard-write` permission is not supported in Firefox or Safari.

In Firefox:

- The availability of the Clipboard API read methods on the user's response to a paste prompt was introduced for web pages in Firefox 127 and extensions in Firefox 147. Before that, the methods were only available when the `"clipboardRead"` permission was set.

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- [Make content editable](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable)
