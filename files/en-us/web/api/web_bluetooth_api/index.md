---
title: Web Bluetooth API
slug: Web/API/Web_Bluetooth_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Bluetooth
---

{{DefaultAPISidebar("Bluetooth API")}}{{SeeCompatTable}}

The Web Bluetooth API provides the ability to connect and interact with Bluetooth Low Energy peripherals.

> **Note:** This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}).

## Interfaces

- {{DOMxRef("Bluetooth")}}
  - : Provides methods to query Bluetooth availability and request access to devices.
- {{DOMxRef("BluetoothCharacteristicProperties")}}
  - : Provides properties of a particular `BluetoothRemoteGATTCharacteristic`.
- {{DOMxRef("BluetoothDevice")}}
  - : Represents a Bluetooth device inside a particular script execution environment.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic")}}
  - : Represents a GATT Characteristic, which is a basic data element that provides further information about a peripheral's service.
- {{DOMxRef("BluetoothRemoteGATTDescriptor")}}
  - : Represents a GATT Descriptor, which provides further information about a characteristic's value.
- {{DOMxRef("BluetoothRemoteGATTServer")}}
  - : Represents a GATT Server on a remote device.
- {{DOMxRef("BluetoothRemoteGATTService")}}
  - : Represents a service provided by a GATT server, including a device, a list of referenced services, and a list of the characteristics of this service.

## Extensions to other interfaces

The Bluetooth API extends the following APIs, adding the listed features.

### Navigator

- {{domxref("Navigator.bluetooth")}}
  - : Returns a {{domxref("Bluetooth")}} object for the current document, providing access to Web Bluetooth API functionality.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
