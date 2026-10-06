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

{{APIRef("File API")}}{{AvailableInWorkers}}{{Non-standard_Header}}

The **`lastModifiedDate`** read-only property of the {{domxref("File")}} interface returns the last modified date of the file. Files without a known last modified date return the current date.

## Value

A {{JSXRef("Global_Objects/Date", "Date")}} object indicating the date and time at which the file was last modified. The timestamp returned by `someFile.lastModifiedDate.getTime()` inherits the value and precision of {{domxref("File.lastModified")}}, without introducing additional inaccuracy.

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

## Specifications

_Though present in early draft of the File API spec, this property has been removed from it and is now non-standard. Use {{domxref("File.lastModified")}} instead._

## Browser compatibility

{{Compat}}

## See also

- {{domxref("File")}}
