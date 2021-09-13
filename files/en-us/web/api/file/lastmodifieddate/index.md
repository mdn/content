---
title: File.lastModifiedDate
slug: Web/API/File/lastModifiedDate
tags:
  - API
  - Deprecated
  - File
  - File API
  - Files
  - Property
  - Read-only
  - Reference
  - lastModifiedDate
browser-compat: api.File.lastModifiedDate
---
{{APIRef("File API") }} {{deprecated_header}}

The **`File.lastModifiedDate`** read-only property returns the last modified date of the file. Files without a known last modified date returns the current date .

## Syntax

    var time = instanceOfFile.lastModifiedDate

### Value

A [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object indicating the date and time at which the file was last modified.

## Example

```js
// fileInput is a HTMLInputElement: <input type="file" multiple id="myfileinput">
var fileInput = document.getElementById("myfileinput");

// files is a FileList object (similar to NodeList)
var files = fileInput.files;

for (var i = 0; i < files.length; i++) {
  alert(files[i].name + " has a last modified date of " + files[i].lastModifiedDate);
}
```

## Reduced time precision

To offer protection against timing attacks and fingerprinting, the precision of `someFile.lastModifiedDate.getTime()` might get rounded depending on browser settings.

In Firefox, the `privacy.reduceTimerPrecision`  preference is enabled by default and defaults to 20us in Firefox 59; in 60 it will be 2ms.

```js
// reduced time precision (2ms) in Firefox 60
someFile.lastModifiedDate.getTime();
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// reduced time precision with `privacy.resistFingerprinting` enabled
someFile.lastModifiedDate.getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

In Firefox, you can also enable `privacy.resistFingerprinting`, the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

## Specifications

_Though present in early draft of the File API spec, this property has been removed from it and is now non-standard. Use {{domxref("File.lastModified")}} instead._

## Browser compatibility

{{Compat}}

## See also

- {{domxref("File")}}
