---
title: MIDIAccess.inputs
slug: Web/API/MIDIAccess/inputs
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - inputs
  - MIDIAccess
browser-compat: api.MIDIAccess.inputs
---
{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`inputs`** read-only property of the {{domxref("MIDIAccess")}} interface provides access to any available MIDI input ports.

## Value

A {{domxref("MIDIInputMap")}} instance.

## Examples

The {{domxref("Navigator.requestMIDIAccess()")}} method returns a promise that resolves with a {{domxref("MIDIAccess")}} object. Printing the value of `inputs` to the console returns a {{domxref("MIDIInputMap")}}.

```js
navigator.requestMIDIAccess()
  .then((access) => {

     console.log(access.inputs);

  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
