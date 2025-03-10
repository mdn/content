---
title: "NDEFReader: reading event"
short-title: reading
slug: Web/API/NDEFReader/reading_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.NDEFReader.reading_event
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

The `reading` event of the {{DOMxRef("NDEFReader")}} interface is fired whenever a new reading is available from compatible NFC devices (e.g. NFC tags supporting NDEF) when these devices are within the reader's magnetic induction field.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("reading", (event) => {});

onreading = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

The following example shows how to process events using both the `onreading` and `onreadingerror` event handlers.

```js
const ndef = new NDEFReader();
ndef
  .scan()
  .then(() => {
    console.log("Scan started successfully.");
    ndef.onreadingerror = (event) => {
      console.log(
        "Error! Cannot read data from the NFC tag. Try a different one?",
      );
    };
    ndef.onreading = (event) => {
      console.log("NDEF message read.");
    };
  })
  .catch((error) => {
    console.log(`Error! Scan failed to start: ${error}.`);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("NDEFReader.readingerror_event", "readingerror")}} event
