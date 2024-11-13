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

{{APIRef("File API")}}{{AvailableInWorkers}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`lastModifiedDate`** read-only property of the {{domxref("File")}} interface returns the last modified date of the file. Files without a known last modified date return the current date.

## Value

A {{JSXRef("Global_Objects/Date", "Date")}} object indicating the date and time at which the file was last modified.

## Examples

```js
// fileInput is a HTMLInputElement: <input type="file" multiple id="my-file-input">
const fileInput = document.getElementById("my-file-input");

for (const file of fileInput.files) {
  console.log(
    `${file.name} has a last modified date of ${file.lastModifiedDate}`,
  );
}
```

## Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of `someFile.lastModifiedDate` might get rounded depending on browser settings. In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 2ms. You can also enable `privacy.resistFingerprinting`, in which case the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

For example, with reduced time precision, the result of `someFile.lastModifiedDate.getTime()` will always be a multiple of 2, or a multiple of 100 (or `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) with `privacy.resistFingerprinting` enabled.

```js
// reduced time precision (2ms) in Firefox 60
someFile.lastModifiedDate.getTime();
// Might be:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
someFile.lastModifiedDate.getTime();
// Might be:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Specifications

_Though present in early draft of the File API spec, this property has been removed from it and is now non-standard. Use {{domxref("File.lastModified")}} instead._

## Browser compatibility

{{Compat}}

## See also

- {{domxref("File")}}
