---
title: BluetoothRemoteGATTService
slug: Web/API/BluetoothRemoteGATTService
page-type: web-api-interface
tags:
  - API
  - Bluetooth
  - BluetoothGattService
  - BluetoothRemoteGATTService
  - Experimental
  - Interface
  - Reference
  - Web Bluetooth API
browser-compat: api.BluetoothRemoteGATTService
---
{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The `BluetoothRemoteGATTService` interface of the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) represents a
service provided by a GATT server, including a device, a list of referenced services,
and a list of the characteristics of this service.

{{InheritanceDiagram}}

## Properties

- {{domxref("BluetoothRemoteGATTService.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns information about a Bluetooth device through an instance of
    {{domxref("BluetoothDevice")}}.
- {{domxref("BluetoothRemoteGATTService.isPrimary")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a boolean value indicating whether this is a primary or secondary
    service.
- {{domxref("BluetoothRemoteGATTService.uuid")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string representing the UUID of this service.

## Methods

- {{domxref("BluetoothRemoteGATTService.getCharacteristic()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} to an instance of
    {{domxref("BluetoothRemoteGATTCharacteristic")}} for a given universally unique identifier
    (UUID).
- {{domxref("BluetoothRemoteGATTService.getCharacteristics()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} to an {{jsxref("Array")}} of
    {{domxref("BluetoothRemoteGATTCharacteristic")}} instances for an optional universally
    unique identifier (UUID).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
