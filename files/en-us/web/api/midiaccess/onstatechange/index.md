---
title: MIDIAccess.onstatechange
slug: Web/API/MIDIAccess/onstatechange
tags:
  - API
  - Property
  - Reference
  - onstatechange
  - MIDIAccess
browser-compat: api.MIDIAccess.onstatechange
---
{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`onstatechange`** {{event("Event_handlers", "Event Handler")}} of the {{domxref("MIDIAccess")}} interface processes statechange events.

The event fires when a new MIDI port is added or when an existing port changes state.

## Syntax

```js
MIDIAccess.onstatechange = function;
MIDIAccess.addEventListener('statechange', function);
```

## Example

The {{domxref("Navigator.requestMIDIAccess()")}} method returns a promise that resolves with a {{domxref("MIDIAccess")}} object. When a port changes state, information about that port is printed to the console.

```js
navigator.requestMIDIAccess()
  .then(function(access) {
     access.onstatechange = function(e) {
       console.log(e.port.name, e.port.manufacturer, e.port.state);
     };
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
