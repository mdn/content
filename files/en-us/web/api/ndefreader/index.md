---
title: NDEFReader
slug: Web/API/NDEFReader
page-type: web-api-interface
status:
  - experimental
browser-compat: api.NDEFReader
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

The **`NDEFReader`** interface of the [Web NFC API](/en-US/docs/Web/API/Web_NFC_API) is used to read from and write data to compatible NFC devices, e.g. NFC tags supporting NDEF, when these devices are within the reader's magnetic induction field.

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("NDEFReader.NDEFReader", "NDEFReader()")}} {{Experimental_Inline}}
  - : Returns a new `NDEFReader` object.

## Instance methods

_The `NDEFReader` interface inherits the methods of {{domxref("EventTarget")}}, its parent interface._

- {{DOMxRef("NDEFReader.scan", "NDEFReader.scan()")}} {{Experimental_Inline}}
  - : Activates a reading device and returns a {{jsxref("Promise")}} that either resolves when an NFC tag read operation is scheduled or rejects if a hardware or permission error is encountered. This method triggers a permission prompt if the "nfc" permission has not been previously granted.
- {{DOMxRef("NDEFReader.write", "NDEFReader.write()")}} {{Experimental_Inline}}
  - : Attempts to write an NDEF message to a tag and returns a {{jsxref("Promise")}} that either resolves when a message has been written to the tag or rejects if a hardware or permission error is encountered. This method triggers a permission prompt if the "nfc" permission has not been previously granted.

## Events

_Inherits events from its parent, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("NDEFReader.reading_event", "reading")}} {{Experimental_Inline}}
  - : Fires when a new reading is available from compatible NFC devices.
- {{DOMxRef("NDEFReader.readingerror_event", "readingerror")}} {{Experimental_Inline}}
  - : Fires when a tag is in proximity of a reading device, but cannot be read.

## Examples

### Handling initial reads while writing

The example below shows how to coordinate between a common reading handler and one used specifically for a single write. In order to write, a tag needs to be found and read. This gives you the ability to check whether it is actually a tag that you want to write to. That's why it's recommended that you call `write()` from a reading event.

```js
const ndef = new NDEFReader();
let ignoreRead = false;

ndef.onreading = (event) => {
  if (ignoreRead) {
    return; // write pending, ignore read.
  }

  console.log("We read a tag, but not during pending write!");
};

function write(data) {
  ignoreRead = true;
  return new Promise((resolve, reject) => {
    ndef.addEventListener(
      "reading",
      (event) => {
        // Check if we want to write to this tag, or reject.
        ndef
          .write(data)
          .then(resolve, reject)
          .finally(() => (ignoreRead = false));
      },
      { once: true },
    );
  });
}

await ndef.scan();
try {
  await write("Hello World");
  console.log("We wrote to a tag!");
} catch (err) {
  console.error("Something went wrong", err);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
