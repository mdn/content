---
title: Bluetooth.referringDevice
slug: Web/API/Bluetooth/referringDevice
tags:
  - API
  - Bluetooth
  - Reference
  - Web Bluetooth API
browser-compat: api.Bluetooth.referringDevice
---
{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

The **`Bluetooth.referringDevice`**
attribute of the {{DOMxRef("Bluetooth")}} interface returns a
{{DOMxRef("BluetoothDevice")}} if the current document was opened in response to an
instruction sent by this device and `null` otherwise.

## Syntax

```js
Bluetooth.referringDevice
```

### Value

A {{DOMxRef("BluetoothDevice")}}, if the document was opened in response to an
instruction sent by this device and `null` otherwise.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
