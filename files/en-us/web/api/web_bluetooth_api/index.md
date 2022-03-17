---
title: Web Bluetooth API
slug: Web/API/Web_Bluetooth_API
tags:
  - API
  - Bluetooth
  - Overview
  - Reference
  - Web Bluetooth API
---
{{DefaultAPISidebar("Bluetooth API")}}{{SeeCompatTable}}

The Web Bluetooth API provides the ability to connect and interact with Bluetooth Low Energy peripherals.

> **Note:** This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}).

## Interfaces

- {{DOMxRef("Bluetooth")}}
  - : Returns a {{jsxref("Promise")}} to a {{DOMxRef("BluetoothDevice")}} object with the specified options.
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

## Specifications

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Feedback</th>
    </tr>
    <tr>
      <td>{{SpecName("Web Bluetooth")}}</td>
      <td>
        To provide feedback on the Web Bluetooth API,
        <a href="https://github.com/WebBluetoothCG/web-bluetooth/issues/"
          >file a spec issue</a
        >.
      </td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat("api.Bluetooth")}}
