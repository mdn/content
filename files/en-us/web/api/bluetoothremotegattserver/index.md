---
title: BluetoothRemoteGATTServer
slug: Web/API/BluetoothRemoteGATTServer
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTServer
  - Experimental
  - Interface
  - Reference
  - Web Bluetooth API
browser-compat: api.BluetoothRemoteGATTServer
---
{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The **`BluetoothRemoteGATTServer`** interface of the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) represents a GATT
Server on a remote device.

> **Note:** This page describes the W3C Community Group Web Bluetooth API. For the Firefox OS
> Bluetooth API, see [`BluetoothGattServer`
> (Firefox OS)](/en-US/docs/Archive/B2G_OS/API/BluetoothGattServer).

## Properties

- {{DOMxRef("BluetoothRemoteGATTServer.connected")}}{{ReadOnlyInline}}
  - : A boolean value that returns true while this script execution environment is
    connected to `this.device`. It can be false while the user agent is
    physically connected.
- {{DOMxRef("BluetoothRemoteGATTServer.device")}}{{ReadOnlyInline}}
  - : A reference to the {{DOMxRef("BluetoothDevice")}} running the server.

## Methods

- {{DOMxRef("BluetoothRemoteGATTServer.connect()")}}
  - : Causes the script execution environment to connect to `this.device`.
- {{DOMxRef("BluetoothRemoteGATTServer.disconnect()")}}
  - : Causes the script execution environment to disconnect from `this.device`.
- {{DOMxRef("BluetoothRemoteGATTServer.getPrimaryService()")}}
  - : Returns a promise to the primary {{DOMxRef("BluetoothRemoteGATTService")}} offered by the
    bluetooth device for a specified `BluetoothServiceUUID`.
- {{DOMxRef("BluetoothRemoteGATTServer.getPrimaryServices()")}}
  - : Returns a promise to a list of primary {{DOMxRef("BluetoothRemoteGATTService")}} objects
    offered by the bluetooth device for a specified `BluetoothServiceUUID`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
