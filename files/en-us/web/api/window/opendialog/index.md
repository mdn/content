---
title: Window.openDialog()
slug: Web/API/Window/openDialog
tags:
  - API
  - Gecko
  - HTML DOM
  - Method
  - Non-standard
  - Reference
  - Window
browser-compat: api.Window.openDialog
---
{{APIRef("HTML DOM")}}{{Non-standard_header}}

`window.openDialog()` is an extension to {{domxref("window.open()")}}. It
behaves the same, except that it can optionally take one or more parameters past
`windowFeatures`, and `windowFeatures` itself is treated a little
differently.

The optional parameters, if present, are bundled up in a JavaScript {{jsxref("Array")}}
object and added to the newly created window as a property named
{{domxref("window.arguments")}}. They may be referenced in the JavaScript of the window
at any time, including during the execution of a {{event("load")}} handler. These
parameters may be used, then, to pass arguments to and from the dialog window.

The call to `openDialog()` returns immediately. If you want the call to
block until the user has closed the dialog, supply `modal` as a
`windowFeatures` parameter. Note that this also means the user won't be able
to interact with the opener window until they close the modal dialog.

## Syntax

```js
newWindow = openDialog(url, name, features, arg1, arg2, ...)
```

- `newWindow`
  - : The opened window
- `url`
  - : The URL to be loaded in the newly opened window.
- `name`
  - : The window name (optional). See {{domxref("window.open()")}} description for
    detailed information.
- `features`
  - : See {{domxref("window.open()")}} for details.
- `arg1`, `arg2`, ...
  - : The arguments to be passed to the new window (optional).

## Example

```js
var win = openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);
```

## Notes

#### New features

`all` - Initially activates (or deactivates `("all=no")`) all
chrome (except the behavior flags `chrome`, `dialog` and
`modal`). These can be overridden (so `"menubar=no,all"` turns on
all chrome except the menubar.) This feature is explicitly ignored by
{{domxref("window.open()")}}. `window.openDialog()` finds it useful because
of its different default assumptions.

#### Default behavior

The `chrome` and `dialog` features are always assumed on, unless
explicitly turned off ("`chrome=no`"). `openDialog()` treats the
absence of the features parameter the same way {{domxref("window.open()")}} does; that
is, an empty string sets all features to off) except `chrome` and
`dialog`, which default to on. If the `features` parameter is a
zero-length string, or contains only one or more of the behavior features
(`chrome`, `dependent`, `dialog` and
`modal`) the chrome features are assumed "OS' choice." That is, window
creation code is not given specific instructions, but is instead allowed to select the
chrome that best fits a dialog on that operating system.

#### Passing extra parameters to the dialog

To pass extra parameters into the dialog, you can supply them after the
`windowFeatures` parameter:

```js
openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);
```

The extra parameters will then get packed into a property named `arguments`
of type {{jsxref("Array")}}, and this property gets added to the newly opened dialog
window.

To access these extra parameters from within dialog code, use the following scheme:

```js
var food  = window.arguments[0];
var price = window.arguments[1];
```

Note that you can access this property from within anywhere in the dialog code. ([Another
example](/en-US/Add-ons/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog)).

#### Returning values from the dialog

Since {{domxref("window.close()")}} erases all properties associated with the dialog
window (i.e. the variables specified in the JavaScript code which gets loaded from the
dialog), it is not possible to pass return values back past the close operation using
globals (or any other constructs).

To be able to pass values back to the caller, you have to supply some object via the
extra parameters. You can then access this object from within the dialog code and set
properties on it, containing the values you want to return or preserve past the
`window.close()` operation.

```js
var retVals = { address: null, delivery: null };
openDialog("http://example.tld/zzz.xul", "dlg", "modal", "pizza", 6.98,
    retVals);
```

If you set the properties of the `retVals` object in the dialog code as
described below, you can now access them via the `retVals` array after the
`openDialog()` call returns.

Inside the dialog code, you can set the properties as follows:

```js
var retVals = window.arguments[2];
retVals.address  = enteredAddress;
retVals.delivery = "immediate";
```

## Specifications

This is not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- [Another
  example](/en-US/Add-ons/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog)
- [`window.importDialog`](/en-US/docs/Archive/Web/Window.importDialog)
  (mobile) {{deprecated_inline}}
