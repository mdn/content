---
title: 'MIDIAccess: statechange event'
slug: Web/API/MIDIAccess/statechange_event
page-type: web-api-event
tags:
  - statechange
  - API
  - Event
  - Reference
  - MIDIAccess
  - Secure context
browser-compat: api.MIDIAccess.statechange_event
---
{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`statechange`** event of the {{domxref("MIDIAccess")}} interface is fired when a new MIDI port is added or when an existing port changes state.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('statechange', (event) => { });

onstatechange = (event) => { };
```

## Event type

A {{domxref("MIDIConnectionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MIDIConnectionEvent")}}

## Event properties

- {{domxref("MIDIConnectionEvent.port")}} {{ReadOnlyInline}}
  - : Returns a reference to a {{domxref("MIDIPort")}} instance for a port that has been connected or disconnected.

## Example

The {{domxref("Navigator.requestMIDIAccess()")}} method returns a promise that resolves with a {{domxref("MIDIAccess")}} object. When a port changes state, information about that port is printed to the console.

```js
navigator.requestMIDIAccess()
  .then((access) => {
     access.onstatechange = (event) => {
       console.log(event.port.name, event.port.manufacturer, event.port.state);
     };
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
