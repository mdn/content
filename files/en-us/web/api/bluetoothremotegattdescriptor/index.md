---
title: BluetoothRemoteGATTDescriptor
slug: Web/API/BluetoothRemoteGATTDescriptor
page-type: web-api-interface
status:
  - experimental
browser-compat: api.BluetoothRemoteGATTDescriptor
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The `BluetoothRemoteGATTDescriptor` interface of the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) provides a GATT Descriptor,
which provides further information about a characteristic's value.

## Instance properties

- {{DOMxRef("BluetoothRemoteGATTDescriptor.characteristic")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{DOMxRef("BluetoothRemoteGATTCharacteristic")}} this descriptor belongs
    to.
- {{DOMxRef("BluetoothRemoteGATTDescriptor.uuid")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the UUID of the characteristic descriptor, for
    example `"00002902-0000-1000-8000-00805f9b34fb"` for the Client
    Characteristic Configuration descriptor.
- {{DOMxRef("BluetoothRemoteGATTDescriptor.value")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the currently cached descriptor value. This value gets updated when the
    value of the descriptor is read.

## Instance methods

- {{DOMxRef("BluetoothRemoteGATTDescriptor.readValue()")}} {{Experimental_Inline}}
  - : Returns a {{JSxRef("Promise")}} that resolves to
    an {{JSxRef("ArrayBuffer")}} holding a duplicate of the `value` property
    if it is available and supported. Otherwise it throws an error.
- {{DOMxRef("BluetoothRemoteGATTDescriptor.writeValue()")}} {{Experimental_Inline}}
  - : Sets the value property to the bytes contained in an {{JSxRef("ArrayBuffer")}} and
    returns a {{JSxRef("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
