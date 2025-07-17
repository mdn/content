---
title: "File: lastModified property"
short-title: lastModified
slug: Web/API/File/lastModified
page-type: web-api-instance-property
browser-compat: api.File.lastModified
---

{{APIRef("File API")}}{{AvailableInWorkers}}

The **`lastModified`** read-only property of the {{domxref("File")}} interface provides the
last modified date of the file as the number of milliseconds since the Unix
epoch (January 1, 1970 at midnight). Files without a known last modified date return the
current date.

## Value

A number that represents the number of milliseconds since the Unix epoch.

## Examples

The example below will loop through the files you choose, and print whether each file was modified within the past year.

### HTML

```html
<input type="file" id="file-picker" name="fileList" multiple />
<output id="output"></output>
```

```css hidden
output {
  display: block;
  white-space: pre-wrap;
}
```

### JavaScript

```js
const output = document.getElementById("output");
const filePicker = document.getElementById("file-picker");

filePicker.addEventListener("change", (event) => {
  const files = event.target.files;
  const now = new Date();
  output.textContent = "";

  for (const file of files) {
    const date = new Date(file.lastModified);
    // true if the file hasn't been modified for more than 1 year
    const stale = now.getTime() - file.lastModified > 31_536_000_000;
    output.textContent += `${file.name} is ${
      stale ? "stale" : "fresh"
    } (${date}).\n`;
  }
});
```

### Result

{{EmbedLiveSample('Examples')}}

### Dynamically created files

If a File is created dynamically, the last modified time can be supplied in the
{{domxref("File.File()", "File()")}} constructor function. If it is missing,
`lastModified` inherits the current time from {{jsxref("Date.now()")}} at the
moment the `File` object gets created.

```js
const fileWithDate = new File([], "file.bin", {
  lastModified: new Date(2017, 1, 1),
});
console.log(fileWithDate.lastModified); // returns 1485903600000

const fileWithoutDate = new File([], "file.bin");
console.log(fileWithoutDate.lastModified); // returns current time
```

## Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of `someFile.lastModified` might get rounded depending on browser settings. In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 2ms. You can also enable `privacy.resistFingerprinting`, in which case the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

For example, with reduced time precision, the result of `someFile.lastModified` will always be a multiple of 2, or a multiple of 100 (or `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) with `privacy.resistFingerprinting` enabled.

```js
// reduced time precision (2ms) in Firefox 60
someFile.lastModified;
// Might be:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
someFile.lastModified;
// Might be:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("File")}}
