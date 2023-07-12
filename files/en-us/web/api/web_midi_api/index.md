---
title: Web MIDI API
slug: Web/API/Web_MIDI_API
page-type: web-api-overview
browser-compat:
  - api.Navigator.requestMIDIAccess
  - http.headers.Permissions-Policy.midi
  - api.Permissions.permission_midi
spec-urls: https://webaudio.github.io/web-midi-api/
---

{{DefaultAPISidebar("Web MIDI API")}}{{SecureContext_Header}}

The Web MIDI API connects to and interacts with Musical Instrument Digital Interface (MIDI) Devices.

The interfaces deal with the practical aspects of sending and receiving MIDI messages.
Therefore, the API can be used for musical and non-musical uses, with any MIDI device connected to your computer.

## Interfaces

- {{domxref("MIDIInputMap")}}
  - : Represents all of the available MIDI input ports.
- {{domxref("MIDIOutputMap")}}
  - : Represents all of the available MIDI output ports.
- {{domxref("MIDIAccess")}}
  - : Provides the methods to list input and output devices, and to access an individual device.
- {{domxref("MIDIPort")}}
  - : Represents an individual MIDI port.
- {{domxref("MIDIInput")}}
  - : Provides a method for dealing with MIDI messages from an input port.
- {{domxref("MIDIOutput")}}
  - : Queues messages to the linked MIDI port. Messages can be sent immediately or after a specified delay.
- {{domxref("MIDIMessageEvent")}}
  - : The event passed to {{domxref("MIDIInput.midimessage_event")}}.
- {{domxref("MIDIConnectionEvent")}}
  - : The event passed to the {{domxref("MIDIAccess.statechange_event")}} and {{domxref("MIDIPort.statechange_event")}} events, when a port becomes available or unavailable.

## Security requirements

Access to the API is requested using the {{domxref("navigator.requestMIDIAccess()")}} method.

- The method must be called in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
- Access may be gated by the [`midi`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/midi) HTTP [Permission Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
- The user must explicitly grant permission to use the API through a user-agent specific mechanism, or have previously granted permission.
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

### Gaining access to the MIDI port

The {{domxref("navigator.requestMIDIAccess()")}} method returns a promise that resolves to a {{domxref("MIDIAccess")}} object, which can then be used to access a MIDI device.
The method must be called in a secure context.

```js
let midi = null; // global MIDIAccess object
function onMIDISuccess(midiAccess) {
  console.log("MIDI ready!");
  midi = midiAccess; // store in the global (in real usage, would probably keep in an object instance)
}

function onMIDIFailure(msg) {
  console.error(`Failed to get MIDI access - ${msg}`);
}

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
```

### Listing inputs and outputs

In this example the list of input and output ports are retrieved and printed to the console.

```js
function listInputsAndOutputs(midiAccess) {
  for (const entry of midiAccess.inputs) {
    const input = entry[1];
    console.log(
      `Input port [type:'${input.type}']` +
        ` id:'${input.id}'` +
        ` manufacturer:'${input.manufacturer}'` +
        ` name:'${input.name}'` +
        ` version:'${input.version}'`,
    );
  }

  for (const entry of midiAccess.outputs) {
    const output = entry[1];
    console.log(
      `Output port [type:'${output.type}'] id:'${output.id}' manufacturer:'${output.manufacturer}' name:'${output.name}' version:'${output.version}'`,
    );
  }
}
```

### Handling MIDI Input

This example prints incoming MIDI messages on a single port to the console.

```js
function onMIDIMessage(event) {
  let str = `MIDI message received at timestamp ${event.timeStamp}[${event.data.length} bytes]: `;
  for (const character of event.data) {
    str += `0x${character.toString(16)} `;
  }
  console.log(str);
}

function startLoggingMIDIInput(midiAccess, indexOfPort) {
  midiAccess.inputs.forEach((entry) => {
    entry.onmidimessage = onMIDIMessage;
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to Web MIDI](https://code.tutsplus.com/tutorials/introduction-to-web-midi--cms-25220)
- [Making Music in the Browser](https://www.keithmcmillen.com/blog/making-music-in-the-browser-web-midi-api/)
