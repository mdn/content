---
title: MIDIAccess.outputs
slug: Web/API/MIDIAccess/outputs
tags:
  - API
  - Property
  - Reference
  - outputs
  - MIDIAccess
browser-compat: api.MIDIAccess.outputs
---
{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`outputs`** read-only property of the {{domxref("MIDIAccess")}} interface provides access to any available MIDI output ports.

## Syntax

```js
let outputs = MIDIAccess.outputs;
```

### Value

A {{domxref("MIDIOutputMap")}} instance.

## Examples

The {{domxref("Navigator.requestMIDIAccess()")}} method returns a promise that resolves with a {{domxref("MIDIAccess")}} object. Printing the value of `outputs` to the console returns a {{domxref("MIDIOutputMap")}}.

```js
navigator.requestMIDIAccess()
  .then(function(access) {

     console.log(access.outputs);

  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
