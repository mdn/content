---
title: Bluetooth
slug: Web/API/Bluetooth
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Bluetooth
---

{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

The **`Bluetooth`** interface of the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) returns a
{{jsxref("Promise")}} to a {{domxref("BluetoothDevice")}} object with the specified
options.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent {{domxref("EventTarget")}}._

## Instance methods

- {{domxref("Bluetooth.getAvailability","Bluetooth.getAvailability()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolved to a boolean value indicating
    whether the user-agent has the ability to support Bluetooth. Some user-agents let the
    user configure an option that affects what is returned by this value. If this option
    is set, that is the value returned by this method.
- {{domxref("Bluetooth.getDevices","Bluetooth.getDevices()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolved to an array of
    {{domxref("BluetoothDevice")}}s which the origin already obtained permission for via a
    call to {{domxref("Bluetooth.requestDevice","Bluetooth.requestDevice()")}}.
- {{domxref("Bluetooth.requestDevice","Bluetooth.requestDevice()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} to a {{domxref("BluetoothDevice")}} object with the
    specified options.

## Events

- {{domxref("Bluetooth.availabilitychanged_event", "availabilitychanged")}} {{Experimental_Inline}}
  - : An event that fires when Bluetooth capabilities have changed in availability.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
