---
title: MIDIAccess.sysexEnabled
slug: Web/API/MIDIAccess/sysexEnabled
tags:
  - API
  - Property
  - Reference
  - sysexEnabled
  - MIDIAccess
browser-compat: api.MIDIAccess.sysexEnabled
---
{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`sysexEnabled`** read-only property of the {{domxref("MIDIAccess")}} interface indicates whether system exclusive support is enabled on the current MIDIAccess instance.

## Syntax

```js
let sysexEnabled = MIDIAccess.sysexEnabled;
```

### Value

A boolean value.

## Examples

The {{domxref("Navigator.requestMIDIAccess()")}} method returns a promise that resolves with a {{domxref("MIDIAccess")}} object. Printing the value of `sysexEnabled` to the console returns a boolean value, which is `true` if system exclusive supported is enabled.

```js
navigator.requestMIDIAccess()
  .then(function(access) {

     console.log(access.sysexEnabled);

  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
