---
title: Bluetooth
slug: Web/API/Bluetooth
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Bluetooth
---

{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

The **`Bluetooth`** interface of the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) provides methods to query Bluetooth availability and request access to devices.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent {{domxref("EventTarget")}}._

## Instance methods

- {{domxref("Bluetooth.getAvailability","Bluetooth.getAvailability()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves to a boolean value indicating whether the user agent can support Bluetooth. Some user agents let the user configure an option that specifies what value is returned by this method.
- {{domxref("Bluetooth.getDevices","Bluetooth.getDevices()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves to an array of {{domxref("BluetoothDevice")}}s this origin is allowed to access. Permission is obtained via previous calls to {{domxref("Bluetooth.requestDevice","Bluetooth.requestDevice()")}}.
- {{domxref("Bluetooth.requestDevice","Bluetooth.requestDevice()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves to a {{domxref("BluetoothDevice")}} object matching the specified options.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
