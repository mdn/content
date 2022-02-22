---
title: Navigator.requestMIDIAccess()
slug: Web/API/Navigator/requestMIDIAccess
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

{{DefaultAPISidebar("Web MIDI API")}}

The **`Navigator.requestMIDIAccess()`** method
returns a {{jsxref('Promise')}} representing a request for access to MIDI devices on the user's system. This method is part of the [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API) which defines a means for web developers to enumerate, manipulate and access MIDI devices.

This method should prompt the user for access to MIDI devices available to their system. If the user grants permission then the {{jsxref('Promise')}} is resolved and a [`MIDIAccess`](/en-US/docs/Web/API/MIDIAccess) object is returned.

## Syntax

```js
navigator.requestMIDIAccess();
navigator.requestMIDIAccess(MIDIOptions);
```

### Parameters

- `MIDIOptions` {{optional_inline}}
  - : An {{jsxref('Object')}} representing options to pass into the method. These options are:
    - `sysex`
      - : A {{jsxref('Boolean')}} value which, if set to `true`, allows the ability to send and receive system exclusive (sysex) messages. Default is `false`.
    - `software`
      - : A {{jsxref('Boolean')}} value which, if set to `true`, allows the system to utilize any installed software synthesizers. Default is `false`.

### Return value

A {{jsxref('Promise')}} that resolves with a [`MIDIAccess`](/en-US/docs/Web/API/MIDIAccess) object.

### Exceptions

- `AbortError`
  - : If the document or page is closed due to user navigation.
- `InvalidStateError`
  - : If the underling system raises any errors.
- `NotSupportedError`
  - : If the feature or options are not supported by the system.
- `SecurityError`
  - : If the user or system denies the application from creating a [MIDIAccess](/en-US/docs/Web/API/MIDIAccess) object with the requested options, or if the document is not allowed to use the feature. (For example in the case of an iframe without the correct [feature policy](/en-US/docs/Web/HTTP/Feature_Policy)).

## Examples

In the following example the {{domxref("Navigator.requestMIDIAccess()")}} method returns the {{domxref("MIDIAccess")}} object, which gives access to information about the input and output MIDI ports.

```js
navigator.requestMIDIAccess().then(function (access) {
  // Get lists of available MIDI controllers
  const inputs = access.inputs.values();
  const outputs = access.outputs.values();

});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web MIDI API](https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API)
- [Introduction to Web MIDI](https://code.tutsplus.com/tutorials/introduction-to-web-midi--cms-25220)
