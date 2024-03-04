---
title: BluetoothDevice
slug: Web/API/BluetoothDevice
page-type: web-api-interface
status:
  - experimental
browser-compat: api.BluetoothDevice
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The BluetoothDevice interface of the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) represents a Bluetooth device inside a particular script execution
environment.

{{InheritanceDiagram}}

## Instance properties

- {{DOMxRef("BluetoothDevice.id")}} {{Experimental_Inline}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : A string that uniquely identifies a device.
- {{DOMxRef("BluetoothDevice.name")}} {{Experimental_Inline}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : A string that provides a human-readable name for the device.
- {{DOMxRef("BluetoothDevice.gatt")}} {{Experimental_Inline}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : A reference to the device's {{DOMxRef("BluetoothRemoteGATTServer")}}.

## Instance methods

- {{DOMxRef("BluetoothDevice.watchAdvertisements()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : A {{jsxref("Promise")}} that resolves to `undefined` or is rejected with
    an error if advertisements can't be shown for any reason.
- {{DOMxRef("BluetoothDevice.forget()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Provides a way for the page to revoke access to a device the user has granted access to.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
