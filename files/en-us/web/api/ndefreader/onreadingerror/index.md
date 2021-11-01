---
title: 'NDEFReader: onreadingerror'
slug: Web/API/NDEFReader/onreadingerror
tags:
  - NDEF
  - Reference
  - Web NFC
  - Property
browser-compat: api.NDEFReader.onreadingerror
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

The `onreadingerror` property of the {{DOMxRef("NDEFReader")}} interface is called whenever an error occurs during reading of NFC tags, e.g. when tags leave the reader's magnetic induction field.

## Examples

The following example shows how to process events using both the `onreading` and `onreadingerror` event handlerss.

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
  }).catch(error => {
    console.log(`Error! Scan failed to start: ${error}.`);
  });

```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
