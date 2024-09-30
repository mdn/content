---
title: "Navigator: requestMIDIAccess() method"
short-title: requestMIDIAccess()
slug: Web/API/Navigator/requestMIDIAccess
page-type: web-api-instance-method
browser-compat: api.Navigator.requestMIDIAccess
---

{{APIRef("Web MIDI API")}}{{SecureContext_Header}}

The **`requestMIDIAccess()`** method of the {{domxref('Navigator')}} interface returns a {{jsxref('Promise')}} representing a request for access to MIDI devices on a user's system.
This method is part of the [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API), which provides a means for accessing, enumerating, and manipulating MIDI devices.

This method may prompt the user for access to MIDI devices available to their system, or it may use a previously established preference to grant or deny access.
If permission is granted then the {{jsxref('Promise')}} resolves and a [`MIDIAccess`](/en-US/docs/Web/API/MIDIAccess) object is returned.

## Syntax

```js-nolint
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
  - : Thrown if the document or page is closed due to user navigation.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the underlying system raises any errors.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the feature or options are not supported by the system.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the user or system denies the application from creating a [MIDIAccess](/en-US/docs/Web/API/MIDIAccess) object with the requested options, or if the document is not allowed to use the feature (for example, because of a [Permission Policy](/en-US/docs/Web/HTTP/Permissions_Policy), or because the user previously denied a permission request).

## Security requirements

Access to the API is subject to the following constraints:

- The method must be called in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
- Access may be gated by the [`midi`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/midi) HTTP [Permission Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
- The user must explicitly grant permission to use the API though a user-agent specific mechanism, or have previously granted permission.
  Note that if access is denied by a permission policy it cannot be granted by a user permission.

The permission status can be queried using the [Permissions API](/en-US/docs/Web/API/Permissions_API) method [`navigator.permissions.query()`](/en-US/docs/Web/API/Permissions/query), passing a permission descriptor with the `midi` permission and (optional) `sysex` property:

```js
navigator.permissions.query({ name: "midi", sysex: true }).then((result) => {
  if (result.state === "granted") {
    // Access granted.
  } else if (result.state === "prompt") {
    // Using API will prompt for permission
  }
  // Permission was denied by user prompt or permission policy
});
```

## Examples

### Request MIDI access

In the following example, the `Navigator.requestMIDIAccess()` method returns the {{domxref("MIDIAccess")}} object, which gives access to information about the input and output MIDI ports.

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
- [Introduction to Web MIDI](https://code.tutsplus.com/introduction-to-web-midi--cms-25220t)
