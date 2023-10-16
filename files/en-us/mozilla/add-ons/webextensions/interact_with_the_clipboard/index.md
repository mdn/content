---
title: Interact with the clipboard
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
page-type: guide
browser-compat:
  - api.Clipboard
  - webextensions.api.clipboard
---

{{AddonSidebar}}

Working with the clipboard in extensions is transitioning from the Web API {{domxref("Document.execCommand()","document.execCommand")}} method (which is deprecated) to the {{domxref("Clipboard", "navigator.clipboard")}} method.

> **Note:** The {{domxref("Clipboard", "navigator.clipboard")}} API is a recent addition to the specification and may not be fully implemented in all browsers. This article describes some limitations, but be sure to review the compatibility tables for each method before using them to ensure that the API supports your needs.

The difference between the two APIs is that {{domxref("Document.execCommand()","document.execCommand")}} this is analogous to the keyboard copy, cut, and paste actions – exchanging data between a webpage and clipboard – whereas {{domxref("Clipboard", "navigator.clipboard")}} writes and reads arbitrary data to and from the clipboard.

{{domxref("Clipboard", "navigator.clipboard")}} provide separate methods to read or write:

- text content, using {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} and {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}}.
- images, rich text, HTML, and other rich content, using {{domxref("Clipboard.read", "navigator.clipboard.read()")}} and {{domxref("Clipboard.write", "navigator.clipboard.write()")}}.

However, while {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} and {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}} work on all browsers, {{domxref("Clipboard.read", "navigator.clipboard.read()")}} and {{domxref("Clipboard.write", "navigator.clipboard.write()")}} do not. For example, on Firefox at the time of writing, {{domxref("Clipboard.read", "navigator.clipboard.read()")}} and {{domxref("Clipboard.write", "navigator.clipboard.write()")}} are not fully implemented, such that to:

- work with images use {{WebExtAPIRef("clipboard.setImageData","browser.clipboard.setImageData()")}} to write images to the clipboard and {{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}} to paste images to a webpage.
- write rich content (such as, HTML, rich text including images, etc.) to the clipboard, use {{domxref("Document.execCommand()","document.execCommand(&#34;copy&#34;)")}} or {{domxref("Document.execCommand()","document.execCommand(&#34;cut&#34;)")}}. Then, either {{domxref("Clipboard.read","navigator.clipboard.read()")}} (recommended) or {{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}} to read the content from the clipboard.

## Writing to the clipboard

This section describes the options for writing data to the clipboard.

### Using the Clipboard API

The Clipboard API writes arbitrary data to the clipboard from your extension. Using the API requires the permission `"clipboardRead"` or `"clipboardWrite"` in your `manifest.json` file. As the API is only available to [Secure Contexts](/en-US/docs/Web/Security/Secure_Contexts), it cannot be used from a content script running on `http:`-pages, only `https:`-pages.

For page scripts, the `"clipboard-write"` permission needs to be requested using the Web API {{domxref("Permissions", "navigator.permissions")}}. You can check for that permission using {{domxref("Permissions.query", "navigator.permissions.query()")}}:

```js
navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
  if (result.state === "granted" || result.state === "prompt") {
    /* write to the clipboard now */
  }
});
```

> **Note:** The `clipboard-write` permission name is not supported in Firefox, only Chromium browsers.

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

The `"cut"` and `"copy"` commands of the {{domxref("Document.execCommand", "document.execCommand()")}} method are used to replace the clipboard's content with the selected material. These commands can be used without any special permission in short-lived event handlers for a user action (for example, a click handler).

For example, suppose you've got a popup that includes the following HTML:

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

Because the `execCommand()` call is inside a click event handler, you don't need any special permissions.

However, let's say that instead you trigger the copy from an alarm:

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

Depending on the browser, this may not work. On Firefox, it will not work, and you'll see a message like this in your console:

`document.execCommand('cut'/'copy') was denied because it was not called from inside a short running user-generated event handler.`

To enable this use case, you need to ask for the `"clipboardWrite"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). So: `"clipboardWrite"` enables you to write to the clipboard outside a short-lived event handler for a user action.

> **Note:**{{domxref("Document.execCommand", "document.execCommand()")}} does not work on input fields of `type="hidden"`, with the HTML5 attribute `"hidden"`, or any matching CSS rule using `"display: none;"`. So, to add a "copy to clipboard" button to a `span`, `div`, or `p` tag, you need to use a workaround, such as setting the input's position to absolute and moving it out of the viewport.

### Browser-specific considerations

The clipboard and other APIs involved here are evolving rapidly, so there are variations among browsers in how they work.

In Chrome:

- You don't need `"clipboardWrite"`, even to write to the clipboard outside a user-generated event handler.

In Firefox:

- {{domxref("Clipboard.write", "navigator.clipboard.write()")}} is not supported.

See the [browser compatibility tables](#browser_compatibility) for more information.

## Reading from the clipboard

This section describes the options for reading or pasting data from the clipboard.

### Using the Clipboard API

The Clipboard API's {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} and {{domxref("Clipboard.read", "navigator.clipboard.read()")}} methods let you read arbitrary text or binary data from the clipboard in [secure contexts](/en-US/docs/Web/Security/Secure_Contexts). This lets you access the data in the clipboard without pasting it into an editable element.

Once you have the `"clipboard-read"` permission from the [Permissions API](/en-US/docs/Web/API/Permissions_API), you can read from the clipboard easily. For example, this snippet of code fetches the text from the clipboard and replaces the contents of the element with the ID `"outbox"` with that text.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### Using execCommand()

To use {{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}} your extension needs the `"clipboardRead"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). This is the case even if you're using the `"paste"` command from within a user-generated event handler, such as {{domxref("Element/click_event", "click")}} or {{domxref("Element/keypress_event", "keypress")}}.

Consider HTML that includes something like this:

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

Firefox supports the `"clipboardRead"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) from version 54 but only supports pasting into elements in [content editable mode](/en-US/docs/Web/HTML/Global_attributes/contenteditable), which for content scripts only works with a {{HTMLElement("textarea")}}. For background scripts, any element can be set to content editable mode.

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- [Make content editable](/en-US/docs/Web/HTML/Global_attributes#contenteditable)
