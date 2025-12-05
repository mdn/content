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
> The Web API {{domxref("Document.execCommand()","document.execCommand")}} method was used to provide clipboard functionality. However, {{domxref("Document.execCommand()","document.execCommand(&#34;copy&#34;)")}}, {{domxref("Document.execCommand()","document.execCommand(&#34;cut&#34;)")}}, and {{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}} are deprecated and no longer guarantee to work or be available on any browser.

The {{domxref("Clipboard", "navigator.clipboard")}} API provides methods for:

- Text content, using {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} and {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}}.
- Images, rich text, HTML, and other rich content, using {{domxref("Clipboard.read", "navigator.clipboard.read()")}} and {{domxref("Clipboard.write", "navigator.clipboard.write()")}}.

> [!NOTE]
> The Clipboard API write and read methods are only available in [secure contexts](/en-US/docs/Web/Security/Secure_Contexts). Your extension cannot use them from a content script running on `http:` pages; they can only use them from `https:` pages.

## Writing to the clipboard

The Clipboard API write methods {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} and {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}} write arbitrary content to the clipboard. The methods are available from a secure context after the extension's user has performed {{Glossary("Transient Activation","transient activation")}}. However, with the [`"clipboardWrite"` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) the methods are available without transient activation.

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

## Reading from the clipboard

The {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} and {{domxref("Clipboard.read", "navigator.clipboard.read()")}} methods let extensions read arbitrary text or binary data from the clipboard. These methods let extensions access the data in the clipboard without pasting it into an editable element.

The methods are available from a secure context after the extension's user has performed {{Glossary("Transient Activation","transient activation")}} and clicked a paste prompt in an ephemeral context menu. However, with the [`"clipboardRead"` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardRead)` permission, your extension can read from the clipboard without user confirmation or transient activation.

This snippet of code fetches the text from the clipboard and replaces the contents of the element with the ID `"outbox"` with that text.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### Browser-specific considerations

In Chrome:

- For page scripts, the `"clipboard-write"` permission needs to be requested using the Web API {{domxref("Permissions", "navigator.permissions")}}. You can check for that permission using {{domxref("Permissions.query", "navigator.permissions.query()")}}:

  ```js
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      /* write to the clipboard now */
    }
  });
  ```

  > [!NOTE]
  > The `clipboard-write` permission name is not supported in Firefox or Safari.

In Firefox:

- The availability of the Clipboard API read methods on the user's response to a paste prompt became available in Firefox 127. Prior to that, the methods were only available when the `"clipboardRead"` permission was set.

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- [Make content editable](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable)
