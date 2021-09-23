---
title: File.lastModified
slug: Web/API/File/lastModified
tags:
  - API
  - File API
  - Files
  - Property
  - Reference
browser-compat: api.File.lastModified
---
{{APIRef("File")}}

The **`File.lastModified`** read-only property provides the
last modified date of the file as the number of milliseconds since the Unix
epoch (January 1, 1970 at midnight). Files without a known last modified date return the
current date.

## Syntax

```js
const time = instanceOfFile.lastModified;
```

### Value

A number that represents the number of milliseconds since the Unix epoch.

## Example

### Reading from file input

```html
<input type="file" multiple id="fileInput">
```

```js
const fileInput = document.querySelector('#fileInput');
fileInput.addEventListener('change', (event) => {
  // files is a FileList object (similar to NodeList)
  const files = event.target.files;

  for (let file of files) {
    const date = new Date(file.lastModified);
    console.log(`${file.name} has a last modified date of ${date}`);
  }
});
```

Try the results out below:

{{ EmbedLiveSample('Reading_from_file_input', 300, 50) }}

### Dynamically created files

If a File is created dynamically, the last modified time can be supplied in the
{{domxref("File.File()", "new File()")}} constructor function. If it is missing,
`lastModified` inherits the current time from {{jsxref("Date.now()")}} at the
moment the `File` object gets created.

```js
const fileWithDate = new File([], 'file.bin', {
  lastModified: new Date(2017, 1, 1),
});
console.log(fileWithDate.lastModified); //returns 1485903600000

const fileWithoutDate = new File([], 'file.bin');
console.log(fileWithoutDate.lastModified); //returns current time
```

## Reduced time precision

To offer protection against timing attacks and fingerprinting, the precision of
`someFile.lastModified` might get rounded depending on browser settings.
In Firefox, the `privacy.reduceTimerPrecision`  preference is enabled by
default and defaults to 20us in Firefox 59; in 60 it will be 2ms.

```js
// reduced time precision (2ms) in Firefox 60
someFile.lastModified;
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// reduced time precision with `privacy.resistFingerprinting` enabled
someFile.lastModified;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

In Firefox, you can also enabled `privacy.resistFingerprinting`, the
precision will be 100ms or the value of
`privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever
is larger.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("File")}}
