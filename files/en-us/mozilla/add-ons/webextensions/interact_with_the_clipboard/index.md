---
title: Interact with the clipboard
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
tags:
  - Add-ons
  - Clip
  - Clipboard
  - Cut
  - Editing
  - Extensions
  - Text
  - WebExtensions
  - copy
  - paste
---
{{AddonSidebar}}

There are two ways browser extensions can interact with the system clipboard: the {{domxref("Document.execCommand()")}} method and the modern asynchronous [Clipboard API](/en-US/docs/Web/API/Clipboard_API).

The {{domxref("Document.execCommand()")}} method can be used, specifying the desired command:

- `document.execCommand("copy")`
- `document.execCommand("cut")`
- `document.execCommand("paste")`

The Clipboard API provides asynchronous access to read and write the clipboard contents directly. For example, to read text from the clipboard:

```js
navigator.clipboard.readText().then(text => outputElem.innerText = text);
```

This requests the contents of the clipboard and, when the response is received stores the clipboard text into an element's {{domxref("HTMLElement/innerText", "innerText")}}.

> **Note:** The asynchronous Clipboard API methods are a recent addition to the specification, and may not be fully implemented to the specification in all browsers. Be sure to review the compatibility tables for each method before using them, to ensure that support is broad enough for your needs.

## Writing to the clipboard

There are two ways to write to the clipboard. You can use the {{domxref("Document.execCommand", "document.execCommand()")}} to trigger the "cut" and "copy" actions, which replaces the clipboard's current contents with the currently selected data. The other option is to use the Clipboard API's {{domxref("Clipboard.writeText()")}} or {{domxref("Clipboard.write()")}} method to replace the clipboard's contents with specific data.

### Using execCommand()

The {{domxref("Document.execCommand", "document.execCommand()")}} method's `"cut"` and `"copy"` commands can be used to replace the clipboard's current contents with the selected material. These commands can be used without any special permission if you are using them in a short-lived event handler for a user action (for example, a click handler).

For example, suppose you've got a popup that includes the following HTML:

```html
<input id="input" type="text"/>
<button id="copy">Copy</button>
```

To make the `"copy"` button copy the contents of the {{HTMLElement("input")}} element, you can use code like this:

```js
function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Because the `execCommand()` call is inside a click event handler, you don't need any special permissions here.

However, let's say that instead you trigger the copy from an alarm:

```js
function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

browser.alarms.create({
  delayInMinutes: 0.1
});

browser.alarms.onAlarm.addListener(copy);
```

Depending on the browser, this may not work. On Firefox, it will not work, and you'll see a message like this in your console:

    document.execCommand(‘cut’/‘copy’) was denied because it was not called from inside a short running user-generated event handler.

To enable this use case, you need to ask for the `"clipboardWrite"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). So: `"clipboardWrite"` enables you to write to the clipboard outside a short-lived event handler for a user action.

### Using the Clipboard API

The Clipboard API adds greater flexibility, in that you aren't limited to copying the current selection into the clipboard, but can directly specify what information to place into the clipboard.

Using the API requires that you have the permission "clipboardRead" or "clipboardWrite" in your manifest.json file.

For page scripts, the Permissions API's `"clipboard-write"` permission is needed. You can check for that permission using {{domxref("Permissions.query", "navigator.permissions.query()")}}:

```js
navigator.permissions.query({name: "clipboard-write"}).then(result => {
  if (result.state == "granted" || result.state == "prompt") {
    /* write to the clipboard now */
  }
});
```

This function takes a string as input and updates the clipboard to contain that string:

```js
function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(function() {
    /* clipboard successfully set */
  }, function() {
    /* clipboard write failed */
  });
}
```

> **Note:** The`clipboard-write` permission name is not currently supported in Firefox — only Chromium browsers.

### Browser-specific considerations

The clipboard and other APIs involved here are evolving rapidly, so there are variations among browsers in how they work.

In Chrome:

- You can write to the clipboard like this in all execution contexts - background pages, content scripts, options pages, and popups.
- You don't actually need `"clipboardWrite"`, even to write to the clipboard outside a user-generated event handler.

In Firefox:

- You can write to the clipboard with execCommand in all execution contexts _except background pages_. In Firefox you can't select text or focus an input field in background pages, so you can't write to the clipboard with execCommand from a background page. The Clipboard Web API doesn't have this limitation.
- From version 57 onward, you can copy images to the clipboard using the [`clipboard.setImageData()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData) API.
- Support for the Clipboard API's {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}} method was added in Firefox 63.
- When using content scripts, the Clipboard API is available only for HTTPS pages. As a workaround, use messaging between your content scripts and the background script.

## Reading from the clipboard

The `execCommand()` method provides the `"paste"` command, which lets you paste the current clipboard contents at the insertion point in an editable control. You can gain greater flexibility using the Clipboard API's {{domxref("Clipboard.read()")}} and {{domxref("Clipboard.readText()")}} methods.

### Using execCommand()

First, you will need to have the `"clipboardRead"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) established for your extension. This is the case even if you're using the `"paste"` command from within a user-generated event handler such as {{event("click")}} or {{event("keypress")}}.

Consider HTML that includes something like this:

```html
<textarea id="output"></textarea>
<button id="paste">Paste</button>
```

To set the content of the {{HTMLElement("textarea")}} element with the ID `"output"` from the clipboard when the user clicks the `"paste"` {{HTMLElement("button")}}, you can use code like this:

```js
function paste() {
  var pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#paste").addEventListener("click", paste);
```

### Using the Clipboard API

The Clipboard API's {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} and {{domxref("Clipboard.read", "navigator.clipboard.read()")}} methods let you read arbitrary text or binary data from the clipboard. This lets you access the data in the clipboard without pasting it into an editable element.

Once you have the `"clipboard-read"` permission from the [Permissions API](/en-US/docs/Web/API/Permissions_API), you can read from the clipboard easily:

```js
navigator.clipboard.readText().then(clipText =>
  document.getElementById("outbox").innerText = clipText);
```

This snippet of code fetches the text from the clipboard and replaces the current contents of the element with the ID `"outbox"` with that text.

### Browser-specific considerations

Firefox supports the `"clipboardRead"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) from version 54, but only supports pasting into elements in [content editable mode](/en-US/docs/Web/Guide/HTML/Editable_content), which for content scripts only works with a {{HTMLElement("textarea")}}. For background scripts, any element can be set to content editable mode.

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- [Making content editable](/en-US/docs/Web/Guide/HTML/Editable_content)
- {{htmlattrxref("contenteditable")}}
