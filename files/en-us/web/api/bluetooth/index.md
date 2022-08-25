---
title: Bluetooth
slug: Web/API/Bluetooth
page-type: web-api-interface
tags:
  - API
  - Bluetooth
  - Experimental
  - Interface
  - Reference
  - Web Bluetooth API
browser-compat: api.Bluetooth
---
{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

The **`Bluetooth`** interface of the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) returns a
{{jsxref("Promise")}} to a {{domxref("BluetoothDevice")}} object with the specified
options.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent {{domxref("EventTarget")}}._

- {{domxref("Bluetooth.referringDevice")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the device, if any, from which the user opened the current
    page. For example, an Eddystone beacon might advertise a URL, which the user agent
    allows the user to open. A BluetoothDevice representing the beacon would be available
    through `navigator.bluetooth.referringDevice`.

## Methods

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
