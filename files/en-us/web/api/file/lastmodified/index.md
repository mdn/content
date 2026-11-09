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

An integer that represents the number of milliseconds since the Unix epoch.

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
`lastModified` is normally set to the current time at the moment the `File` object gets created.

In Firefox, if the file parts include a file read from disk, the new file can inherit that file's modification time instead.

```js
const fileWithDate = new File([], "file.bin", {
  lastModified: new Date(2017, 1, 1),
});
console.log(fileWithDate.lastModified); // returns 1485903600000

const fileWithoutDate = new File([], "file.bin");
console.log(fileWithoutDate.lastModified); // returns current time
```

## Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of `lastModified` may be reduced depending on browser settings.

When a `lastModified` value is supplied to the {{domxref("File.File", "File()")}} constructor, the browser does not apply timer rounding to the supplied time. The same applies to modification times read from disk, whose precision depends on the file system, including those inherited from file parts in Firefox.

When the constructor uses the current time as the default `lastModified`, it obtains the current time in the same way as {{jsxref("Date.now()")}}. It inherits the precision of that clock reading without introducing additional inaccuracy.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("File")}}
