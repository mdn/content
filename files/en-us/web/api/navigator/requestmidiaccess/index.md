---
title: Navigator.requestMIDIAccess()
slug: Web/API/Navigator/requestMIDIAccess
page-type: web-api-instance-method
tags:
  - API
  - Web MIDI
  - Reference
  - Method
  - Navigator
  - Secure context
  - requestMIDIAccess
browser-compat: api.Navigator.requestMIDIAccess
---

{{DefaultAPISidebar("Web MIDI API")}}{{SecureContext_Header}}

The **`requestMIDIAccess()`** method of the {{domxref('Navigator')}} interface returns a {{jsxref('Promise')}} representing a request for access to MIDI devices on a user's system.
This method is part of the [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API), which provides a means for accessing, enumerating, and manipulating MIDI devices.

This method may prompt the user for access to MIDI devices available to their system, or it may use a previously established preference to grant or deny access.
If permission is granted then the {{jsxref('Promise')}} resolves and a [`MIDIAccess`](/en-US/docs/Web/API/MIDIAccess) object is returned.

## Syntax

```js
requestMIDIAccess()
requestMIDIAccess(MIDIOptions)
```

### Parameters

- `MIDIOptions` {{optional_inline}}
  - : An {{jsxref('Object')}} representing options to pass into the method. These options are:
    - `sysex`
      - : A {{jsxref('Boolean')}} value that, if set to `true`, allows the ability to send and receive system exclusive (sysex) messages. The default value is `false`.
    - `software`
      - : A {{jsxref('Boolean')}} value that, if set to `true`, allows the system to utilize any installed software synthesizers. The default value is `false`.

### Return value

A {{jsxref('Promise')}} that resolves with a [`MIDIAccess`](/en-US/docs/Web/API/MIDIAccess) object.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : If the document or page is closed due to user navigation.
- `InvalidStateError` {{domxref("DOMException")}}
  - : If the underlying system raises any errors.
- `NotSupportedError` {{domxref("DOMException")}}
  - : If the feature or options are not supported by the system.
- `SecurityError` {{domxref("DOMException")}}
  - : If the user or system denies the application from creating a [MIDIAccess](/en-US/docs/Web/API/MIDIAccess) object with the requested options, or if the document is not allowed to use the feature (for example, an iframe without the correct [Permission Policy](/en-US/docs/Web/HTTP/Feature_Policy), or when the user has previously denied a permissions access to the feature).

## Examples

In the following example, the {{domxref("Navigator.requestMIDIAccess()")}} method returns the {{domxref("MIDIAccess")}} object, which gives access to information about the input and output MIDI ports.

```js
navigator.requestMIDIAccess().then((access) => {
  // Get lists of available MIDI controllers
  const inputs = access.inputs.values();
  const outputs = access.outputs.values();
  // …
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API)
- [Introduction to Web MIDI](https://code.tutsplus.com/tutorials/introduction-to-web-midi--cms-25220)
