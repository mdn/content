---
title: 'NDEFReader: readingerror event'
slug: Web/API/NDEFReader/readingerror_event
page-type: web-api-event
tags:
  - Event
  - NDEF
  - Reference
  - Web NFC
  - Property
  - Experimental
browser-compat: api.NDEFReader.readingerror_event
---
{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef}}

The `readingerror` event of the {{DOMxRef("NDEFReader")}} interface is fired whenever an error occurs during reading of NFC tags, e.g. when tags leave the reader's magnetic induction field.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('readingerror', (event) => { });

onreadingerror = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

The following example shows how to process events using both the `onreading` and `onreadingerror` event handlers.

```js
const ndef = new NDEFReader();
  ndef.scan().then(() => {
    console.log("Scan started successfully.");
    ndef.onreadingerror = (event) => {
      console.log("Error! Cannot read data from the NFC tag. Try a different one?");
    };
    ndef.onreading = (event) => {
      console.log("NDEF message read.");
    };
  }).catch((error) => {
    console.log(`Error! Scan failed to start: ${error}.`);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
