---
title: BluetoothDevice
slug: Web/API/BluetoothDevice
tags:
  - API
  - Bluetooth
  - BluetoothDevice
  - Experimental
  - Interface
  - Reference
  - Web Bluetooth API
browser-compat: api.BluetoothDevice
---
{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The BluetoothDevice interface of the [Web Bluetooth
API](/en-US/docs/Web/API/Web_Bluetooth_API) represents a Bluetooth device inside a particular script execution
environment.

{{InheritanceDiagram}}

## Properties

- {{DOMxRef("BluetoothDevice.id")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : A {{DOMxRef("DOMString")}} that uniquely identifies a device.
- {{DOMxRef("BluetoothDevice.name")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : A {{DOMxRef("DOMString")}} that provices a human-readable name for the device.
- {{DOMxRef("BluetoothDevice.gatt")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : A reference to the device's {{DOMxRef("BluetoothRemoteGATTServer")}}.

## Methods

- {{DOMxRef("BluetoothDevice.watchAdvertisments()")}} {{Experimental_Inline}}
  - : A {{jsxref("Promise")}} that resolves to `undefined` or is rejected with
    an error if advertisments can’t be shown for any reason.
- {{DOMxRef("BluetoothDevice.unwatchAdvertisments()")}} {{Experimental_Inline}}
  - : Stops watching for advertisments.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
