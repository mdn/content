---
title: "`input.fileDialogOpened` event"
short-title: fileDialogOpened
slug: Web/WebDriver/Reference/BiDi/Modules/input/fileDialogOpened
page-type: webdriver-event
browser-compat: webdriver.bidi.input.fileDialogOpened_event
sidebar: webdriver
---

The `input.fileDialogOpened` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`input`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input) module fires when a file picker dialog opens in a context, for example when [`click()`](/en-US/docs/Web/API/HTMLElement/click) or [`showPicker()`](/en-US/docs/Web/API/HTMLInputElement/showPicker) is called on an [`<input type="file">`](/en-US/docs/Web/HTML/Reference/Elements/input/file) element.

## Event data

The `params` field in the event notification is an object with the following fields:

- `context`
  - : A string that contains the ID of the context in which the file picker dialog was triggered.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `element` {{optional_inline}}
  - : An object containing the ID that uniquely identifies the [`<input type="file">`](/en-US/docs/Web/HTML/Reference/Elements/input/file) DOM element that triggered the file picker dialog.
    This field is included when the file picker dialog is opened by a file `<input>` element.
- `multiple`
  - : A boolean that indicates whether the file picker dialog allows multiple file paths.
    - `true`: The file picker dialog accepts multiple files (the associated `<input>` element has the [`multiple`](/en-US/docs/Web/HTML/Reference/Elements/input/file#multiple) attribute).
    - `false`: The file picker dialog accepts only a single file path.
- `userContext` {{optional_inline}}
  - : A string that contains the ID of the [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) in which the file picker dialog was triggered.

## Examples

### Receiving an event when a file picker dialog opens

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `input.fileDialogOpened` active, consider a scenario where a page has an [`<input type="file">`](/en-US/docs/Web/HTML/Reference/Elements/input/file) element that accepts a single file and your script calls [`click()`](/en-US/docs/Web/API/HTMLElement/click) on it. The browser sends the following notification when the file picker dialog opens:

```json
{
  "type": "event",
  "method": "input.fileDialogOpened",
  "params": {
    "context": "5f07e3ca-ecac-465e-b9ef-49000c196ecf",
    "element": {
      "sharedId": "3be28343-afd3-4dea-a2b6-a863fbbb80e1"
    },
    "multiple": false
  }
}
```

You can then call [`input.setFiles`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/setFiles) with the `element.sharedId` from the notification to simulate file upload.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
- [`input.setFiles`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/setFiles) command
- [`input.performActions`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions) command
- [`input.releaseActions`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/releaseActions) command
