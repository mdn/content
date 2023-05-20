---
title: "MIDIAccess: sysexEnabled property"
short-title: sysexEnabled
slug: Web/API/MIDIAccess/sysexEnabled
page-type: web-api-instance-property
browser-compat: api.MIDIAccess.sysexEnabled
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`sysexEnabled`** read-only property of the {{domxref("MIDIAccess")}} interface indicates whether system exclusive support is enabled on the current MIDIAccess instance.

## Value

A boolean value.

## Examples

The {{domxref("Navigator.requestMIDIAccess()")}} method returns a promise that resolves with a {{domxref("MIDIAccess")}} object. Printing the value of `sysexEnabled` to the console returns a boolean value, which is `true` if system exclusive supported is enabled.

```js
navigator.requestMIDIAccess().then((access) => {
  console.log(access.sysexEnabled);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
