---
title: "File: lastModifiedDate property"
short-title: lastModifiedDate
slug: Web/API/File/lastModifiedDate
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.File.lastModifiedDate
---

{{APIRef("File API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`File.lastModifiedDate`** read-only property returns the last modified date of the file. Files without a known last modified date return the current date.

## Value

A [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object indicating the date and time at which the file was last modified.

## Examples

```js
// fileInput is a HTMLInputElement: <input type="file" multiple id="myfileinput">
const fileInput = document.getElementById("myfileinput");

for (const file of fileInput.files) {
  console.log(
    `${file.name} has a last modified date of ${file.lastModifiedDate}`,
  );
}
```

## Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of `someFile.lastModifiedDate.getTime()` might get rounded depending on browser settings.

In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 20us in Firefox 59; in 60 it will be 2ms.

```js
// reduced time precision (2ms) in Firefox 60
someFile.lastModifiedDate.getTime();
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
someFile.lastModifiedDate.getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

In Firefox, you can also enable `privacy.resistFingerprinting`, the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

## Specifications

_Though present in early draft of the File API spec, this property has been removed from it and is now non-standard. Use {{domxref("File.lastModified")}} instead._

## Browser compatibility

{{Compat}}

## See also

- {{domxref("File")}}
