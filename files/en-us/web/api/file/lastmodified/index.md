---
title: "File: lastModified property"
short-title: lastModified
slug: Web/API/File/lastModified
page-type: web-api-instance-property
browser-compat: api.File.lastModified
---

{{APIRef("File")}}

The **`File.lastModified`** read-only property provides the
last modified date of the file as the number of milliseconds since the Unix
epoch (January 1, 1970 at midnight). Files without a known last modified date return the
current date.

## Value

A number that represents the number of milliseconds since the Unix epoch.

## Examples

The example below will loop through the files you choose, and print whether each file was modified within the past year.

### HTML

```html
<input type="file" id="filepicker" name="fileList" multiple />
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
const filepicker = document.getElementById("filepicker");

filepicker.addEventListener("change", (event) => {
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
{{domxref("File.File()", "new File()")}} constructor function. If it is missing,
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

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of
`someFile.lastModified` might get rounded depending on browser settings.
In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by
default and defaults to 20us in Firefox 59; in 60 it will be 2ms.

```js
// reduced time precision (2ms) in Firefox 60
someFile.lastModified;
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
someFile.lastModified;
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

In Firefox, if you enable `privacy.resistFingerprinting`, the
precision will be 100ms or the value of
`privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever
is larger.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("File")}}
