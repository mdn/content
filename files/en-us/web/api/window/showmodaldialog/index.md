---
title: "Window: showModalDialog() method"
short-title: showModalDialog()
slug: Web/API/Window/showModalDialog
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.Window.showModalDialog
---

{{APIRef}}{{Deprecated_Header}}{{Non-standard_Header}}

> [!WARNING]
> This feature has been removed. Please fix your websites and applications.
>
> This method was removed in Chrome 43 and Firefox 56.

The **`Window.showModalDialog()`**
created and displayed a modal dialog box containing a specified HTML document.

## Syntax

```js-nolint
showModalDialog(uri)
showModalDialog(uri, arguments)
showModalDialog(uri, arguments, options)
```

### Parameters

- `uri`
  - : Is the URL of the document to display in the dialog.
- `arguments` {{optional_inline}}
  - : Values passed to the dialog.
    property.
- `options` {{optional_inline}}
  - : A string specifying window ornamentation for the
    dialog, using one or more semicolon delimited values:

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Syntax</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>center: {on | off | yes | no | 1 | 0 }</code></td>
      <td>
        If <code>on</code>, <code>yes</code>, or <code>1</code>, the dialog
        window is centered on the desktop; otherwise it's hidden. Default is
        <code>yes</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code>dialogheight: <em>height</em></code>
      </td>
      <td>The height of the dialog box in pixels.</td>
    </tr>
    <tr>
      <td>
        <code>dialogleft: <em>left</em></code>
      </td>
      <td>Distance of the dialog box from the left edge of the desktop.</td>
    </tr>
    <tr>
      <td>
        <code>dialogwidth: <em>width</em></code>
      </td>
      <td>The width of the dialog box in pixels.</td>
    </tr>
    <tr>
      <td>
        <code>dialogtop: <em>top</em></code>
      </td>
      <td>Distance of the dialog box from the top edge of the desktop.</td>
    </tr>
    <tr>
      <td><code>resizable: {on | off | yes | no | 1 | 0 }</code></td>
      <td>
        If this argument's value is <code>on</code>, <code>yes</code>, or 1, the
        dialog window can be resized by the user; otherwise its size is fixed.
        The default value is <code>no</code>.
      </td>
    </tr>
    <tr>
      <td><code>scroll: {on | off | yes | no | 1 | 0 }</code></td>
      <td>
        If <code>on</code>, <code>yes</code>, or 1, the dialog window has scroll
        bars; otherwise its size is fixed. Default is <code>no</code>.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Firefox does not implement the `dialogHide`, `edge`, `status`, or `unadorned` arguments.

### Return value

Holds the `returnValue` property as set by the document specified by `uri`.

## Specifications

- [MSDN page for `showModalDialog`](<https://learn.microsoft.com/en-us/previous-versions/ms536759(v=vs.85)>)

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("dialog")}}, a replacement for `window.showModalDialog()`.
- [showModalDialog Polyfill](https://github.com/niutech/showModalDialog)
  using a {{HTMLElement("dialog")}} and [generators](/en-US/docs/Web/JavaScript/Reference/Statements/function*)
