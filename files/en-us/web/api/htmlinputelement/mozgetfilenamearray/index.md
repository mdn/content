---
title: HTMLInputElement.mozGetFileNameArray()
slug: Web/API/HTMLInputElement/mozGetFileNameArray
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - Method
  - NeedsBrowserCompatibility
  - Non-standard
  - Reference
browser-compat: api.HTMLInputElement.mozGetFileNameArray
---
{{ APIRef("HTML DOM") }}{{Non-standard_header}}

The **`HTMLInputElement.mozGetFileNameArray()`** method returns
an array of the names of the files that were selected by the user on an HTML
`input` element.

> **Note:** This method is Gecko-specific and is not
> available in other browsers. Also, it throws an error if used in Web pages.

## Syntax

```js
inputElement.mozGetFileNameArray(aLength, aFileNames);
```

### Parameters

- `aLength`
  - : If specified, will receive the number of file names in the returned array.
- `aFileNames`
  - : Is an array into which the file names are placed.

## Example

```js
var numFiles = 0;
var fileArray = {};

inputElement.mozGetFileNameArray(numFiles, fileArray);
```

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("Input.mozSetFileNameArray")}}
