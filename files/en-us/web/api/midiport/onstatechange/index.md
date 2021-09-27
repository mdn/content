---
title: MIDIPort.onstatechange
slug: Web/API/MIDIPort/onstatechange
tags:
  - API
  - Property
  - Reference
  - onstatechange
  - MIDIPort
browser-compat: api.MIDIPort.onstatechange
---
{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

The **`onstatechange`** event handler of the {{domxref("MIDIPort")}} interface processes {{domxref("MIDIPort/statechange_event", "statechange")}} events.

The event fires when a port changes from open to closed, or closed to open.

## Syntax

```js
MIDIPort.onstatechange = function;
MIDIPort.addEventListener('statechange', function);
```

## Example

In the following example the current {{domxref("MIDIPort.state")}} is logged each time it changes.

```js
port.onstatechange = function() {
  console.log(port.state);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
