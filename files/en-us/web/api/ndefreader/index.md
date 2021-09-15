---
title: NDEFReader
slug: Web/API/NDEFReader
tags:
  - NDEF
  - Reference
  - Web NFC
browser-compat: api.NDEFReader
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

The **`NDEFReader`** interface of the [Web NFC API](/en-US/docs/Web/API/Web_NFC_API) is used to read from and write data to compatible NFC devices, e.g. NFC tags supporting NDEF, when these devices are within the reader's magnetic induction field.

## Constructor

- {{DOMxRef("NDEFReader.NDEFReader", "NDEFReader()")}} {{Experimental_Inline}}
  - : Returns a new `NDEFReader` object.

## Properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("NDEFReader.onreading")}} {{Experimental_Inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when the `reading` event is raised.
- {{DOMxRef("NDEFReader.onreadingerror")}} {{Experimental_Inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when when the `readingerror` event is raised. This occurs when a tag is in proximity of a reading device, but cannot be read.

## Methods

_The `NDEFReader` interface inherits the methods of {{domxref("EventTarget")}}, its parent interface._

- {{DOMxRef("NDEFReader.scan", "NDEFReader.scan()")}} {{Experimental_Inline}}
  - : Activates a reading device and returns a {{jsxref("Promise")}} that either resolves when an NFC tag is read or rejects if a hardware or permission error is encountered. This method triggers a permission prompt if the "nfc" permission has not been previously granted.
- {{DOMxRef("NDEFReader.write", "NDEFReader.write()")}} {{Experimental_Inline}}
  - : Attempts to write an NDEF message to a tag and returns a {{jsxref("Promise")}} that either resolves when a message has been written to the tag or rejects if a hardware or permission error is encountered. This method triggers a permission prompt if the "nfc" permission has not been previously granted.

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
    ndef.addEventListener("reading", event => {
      // Check if we want to write to this tag, or reject.
      ndef.write(data).then(resolve, reject).finally(() => ignoreRead = false);
    }, { once: true });
  });
}

await ndef.scan();
try {
  await write("Hello World");
  console.log("We wrote to a tag!")
} catch(err) {
  console.error("Something went wrong", err);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
