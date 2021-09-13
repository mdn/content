---
title: HTMLInputElement.multiple
slug: Web/API/HTMLInputElement/multiple
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - NeedsMarkupWork
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.HTMLInputElement.multiple
---
{{ APIRef("HTML DOM") }}

The **`HTMLInputElement.multiple`** property indicates if an input can have more than one value. Firefox currently only supports `multiple` for `<input type="file">`.

## Example

```js
// fileInput is a <input type=file multiple>
let fileInput = document.getElementById('myfileinput');

if (fileInput.multiple == true) {

  for (let i = 0; i < fileInput.files.length; i++) {
    // Loop fileInput.files
  }

// Only one file available
} else {
  let file = fileInput.files.item(0);
}
```

## See also

- [FileList](/en-US/docs/Web/API/FileList)
- [Bug 523771](https://bugzilla.mozilla.org/show_bug.cgi?id=523771) - Support \<input type=file multiple>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
