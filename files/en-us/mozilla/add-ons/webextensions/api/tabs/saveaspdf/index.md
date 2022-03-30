---
title: tabs.saveAsPDF()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - saveAsPDF
  - tabs
browser-compat: webextensions.api.tabs.saveAsPDF
---
{{AddonSidebar()}}

Saves the current page as a PDF file. This will open a dialog, supplied by the underlying operating system, asking the user where they want to save the PDF file.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let saving = browser.tabs.saveAsPDF(
  pageSettings   // object
)
```

### Parameters

- `pageSettings`
  - : `object`. Settings for the saved page, as a {{WebExtAPIRef("tabs.PageSettings")}} object. This object must be given, but all its properties are optional. Any properties not specified here will get the default values listed in the {{WebExtAPIRef("tabs.PageSettings", "PageSettings")}} documentation.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a status string when the dialog has closed. The string may be any of:

- "saved"
- "replaced"
- "canceled"
- "not_saved"
- "not_replaced"

## Examples

In this example a background script listens for a click on a [browser action](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#browser_actions_2), then tries to save the currently active tab as a PDF file, then logs the result:

```js
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.saveAsPDF({})
    .then((status) => {
      console.log(status);
    });
});
```

## Browser compatibility

{{Compat}}
