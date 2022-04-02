---
title: Web MIDI API
slug: Web/API/Web_MIDI_API
tags:
  - API
  - MIDI
  - Overview
  - Reference
  - Web MIDI API
---
{{DefaultAPISidebar("Web MIDI API")}}{{SecureContext_Header}}

The Web MIDI API connects to and interacts with Musical Instrument Digital Interface (MIDI) Devices.

The interfaces deal with the practical aspects of sending and receiving MIDI messages. Therefore, the API can be used for musical and non-musical uses, with any MIDI device connected to your computer.

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

## Examples

### Gaining access to the MIDI port

The {{domxref("navigator.requestMIDIAccess()")}} method returns a promise that resolves to a {{domxref("MIDIAccess")}}, which can then be used to access a MIDI device.
The method must be called in a secure context.

```js
var midi = null;  // global MIDIAccess object
function onMIDISuccess( midiAccess ) {
  console.log( "MIDI ready!" );
  midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
}

function onMIDIFailure(msg) {
  console.log( "Failed to get MIDI access - " + msg );
}

navigator.requestMIDIAccess().then( onMIDISuccess, onMIDIFailure );
```

### Listing inputs and outputs

In this example the list of input and output ports are retrieved and printed to the console.

```js
function listInputsAndOutputs( midiAccess ) {
  for (var entry of midiAccess.inputs) {
    var input = entry[1];
    console.log( "Input port [type:'" + input.type + "'] id:'" + input.id +
      "' manufacturer:'" + input.manufacturer + "' name:'" + input.name +
      "' version:'" + input.version + "'" );
  }

  for (var entry of midiAccess.outputs) {
    var output = entry[1];
    console.log( "Output port [type:'" + output.type + "'] id:'" + output.id +
      "' manufacturer:'" + output.manufacturer + "' name:'" + output.name +
      "' version:'" + output.version + "'" );
  }
}
```

### Handling MIDI Input

This example prints incoming MIDI messages on a single port to the console.

```js
function onMIDIMessage( event ) {
  var str = "MIDI message received at timestamp " + event.timeStamp + "[" + event.data.length + " bytes]: ";
  for (var i=0; i<event.data.length; i++) {
    str += "0x" + event.data[i].toString(16) + " ";
  }
  console.log( str );
}

function startLoggingMIDIInput( midiAccess, indexOfPort ) {
  midiAccess.inputs.forEach( function(entry) {entry.onmidimessage = onMIDIMessage;});
}
```

## Specifications

| Specification                                            |
| -------------------------------------------------------- |
| [Web MIDI API](https://webaudio.github.io/web-midi-api/) |

## See also

- [Introduction to Web MIDI](https://code.tutsplus.com/tutorials/introduction-to-web-midi--cms-25220)
- [Making Music in the Browser](https://www.keithmcmillen.com/blog/making-music-in-the-browser-web-midi-api/)
