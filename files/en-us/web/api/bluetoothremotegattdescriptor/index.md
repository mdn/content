---
title: BluetoothRemoteGATTDescriptor
slug: Web/API/BluetoothRemoteGATTDescriptor
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTDescriptor
  - Experimental
  - Interface
  - Reference
  - Web Bluetooth API
browser-compat: api.BluetoothRemoteGATTDescriptor
---
{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The `BluetoothRemoteGATTDescriptor` interface of the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) provides a GATT Descriptor,
which provides further information about a characteristic’s value.

> **Note:** This page describes the W3C Community Group Web Bluetooth API. For the Firefox OS
> Bluetooth API, see [`BluetoothGattDescriptor`
> (Firefox OS)](/en-US/docs/Archive/B2G_OS/API/BluetoothGattDescriptor).

## Properties

- {{DOMxRef("BluetoothRemoteGATTDescriptor.characteristic")}}{{ReadOnlyInline}}
  - : Returns the {{DOMxRef("BluetoothRemoteGATTCharacteristic")}} this descriptor belongs
    to.
- {{DOMxRef("BluetoothRemoteGATTDescriptor.uuid")}}{{ReadOnlyInline}}
  - : Returns the UUID of the characteristic descriptor, for
    example '`00002902-0000-1000-8000-00805f9b34fb`' for theClient
    Characteristic Configuration descriptor.
- {{DOMxRef("BluetoothRemoteGATTDescriptor.value")}}{{ReadOnlyInline}}
  - : Returns the currently cached descriptor value. This value gets updated when the
    value of the descriptor is read.

## Methods

- {{DOMxRef("BluetoothRemoteGATTDescriptor.readValue()")}}
  - : Returns a {{JSxRef("Promise")}} that resolves to
    an {{JSxRef("ArrayBuffer")}} holding a duplicate  of the `value` property
    if it is available and supported. Otherwise it throws an error.
- {{DOMxRef("BluetoothRemoteGATTDescriptor.writeValue()")}}
  - : Sets the value property to the bytes contained in an {{JSxRef("ArrayBuffer")}} and
    returns a {{JSxRef("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
