---
title: BluetoothRemoteGATTService
slug: Web/API/BluetoothRemoteGATTService
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
{{SeeCompatTable}}

> **Note:** This page describes the W3C Community Group BluetoothRemoteGATTService, formerly
> called BluethoothGATTService. For the Firefox OS interface of the same name,
> see [`BluetoothGattService`](/en-US/docs/Archive/B2G_OS/API/BluetoothGattService).

The `BluetoothRemoteGATTService` interface of the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) represents a
service provided by a GATT server, including a device, a list of referenced services,
and a list of the characteristics of this service.

## Properties

- {{domxref("BluetoothRemoteGATTService.device")}}{{readonlyinline}}
  - : Returns information about a Bluetooth device through an instance of
    {{domxref("BluetoothDevice")}}.
- {{domxref("BluetoothRemoteGATTService.isPrimary")}}{{readonlyinline}}
  - : Returns a boolean value indicating whether this is a primary or secondary
    service.
- {{domxref("BluetoothRemoteGATTService.uuid")}}{{readonlyinline}}
  - : Returns a {{domxref("DOMString")}} representing the UUID of this service.

## Methods

- {{domxref("BluetoothRemoteGATTService.getCharacteristic()")}}
  - : Returns a {{jsxref("Promise")}} to an instance of
    {{domxref("BluetoothRemoteGATTCharacteristic")}} for a given universally unique identifier
    (UUID).
- {{domxref("BluetoothRemoteGATTService.getCharacteristics()")}}
  - : Returns a {{jsxref("Promise")}} to an {{domxref("Array")}} of
    {{domxref("BluetoothRemoteGATTCharacteristic")}} instances for an optional universally
    unique identifier (UUID).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
