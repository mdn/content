---
title: BluetoothRemoteGATTServer
slug: Web/API/BluetoothRemoteGATTServer
page-type: web-api-interface
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

The **`BluetoothRemoteGATTServer`** interface of the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) represents a GATT
Server on a remote device.

## Properties

- {{DOMxRef("BluetoothRemoteGATTServer.connected")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A boolean value that returns true while this script execution environment is
    connected to `this.device`. It can be false while the user agent is
    physically connected.
- {{DOMxRef("BluetoothRemoteGATTServer.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A reference to the {{DOMxRef("BluetoothDevice")}} running the server.

## Methods

- {{DOMxRef("BluetoothRemoteGATTServer.connect()")}} {{Experimental_Inline}}
  - : Causes the script execution environment to connect to `this.device`.
- {{DOMxRef("BluetoothRemoteGATTServer.disconnect()")}} {{Experimental_Inline}}
  - : Causes the script execution environment to disconnect from `this.device`.
- {{DOMxRef("BluetoothRemoteGATTServer.getPrimaryService()")}} {{Experimental_Inline}}
  - : Returns a promise to the primary {{DOMxRef("BluetoothRemoteGATTService")}} offered by the
    Bluetooth device for a specified `BluetoothServiceUUID`.
- {{DOMxRef("BluetoothRemoteGATTServer.getPrimaryServices()")}} {{Experimental_Inline}}
  - : Returns a promise to a list of primary {{DOMxRef("BluetoothRemoteGATTService")}} objects
    offered by the Bluetooth device for a specified `BluetoothServiceUUID`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
