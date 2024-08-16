---
title: "HID: requestDevice() method"
short-title: requestDevice()
slug: Web/API/HID/requestDevice
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.HID.requestDevice
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`requestDevice()`** method of the {{domxref("HID")}} interface requests access to a HID device.

The user agent will present a permission dialog including a list of connected devices, and ask the user to select and grant permission to one of these devices.

## Syntax

```js-nolint
requestDevice(options)
```

### Parameters

- `options`

  - : An object containing an array of filter objects for possible devices to pair with. Each filter object can have the following properties:

    - `vendorId` {{optional_inline}}
      - : An integer representing the vendorId of the requested HID device
    - `productId` {{optional_inline}}
      - : An integer representing the productId of the requested HID device.
    - `usagePage` {{optional_inline}}

      - : An integer representing the usage page component of the HID usage of the requested device. The usage for a top level collection is used to identify the device type.

        Standard HID usage values can be found in the [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-15) document

    - `usage` {{optional_inline}}
      - : An integer representing the usage ID component of the HID usage of the requested device.

> [!NOTE]
> The device filters are used to narrow the list of devices presented to the user. If no filters are present, all connected devices are shown. When one or more filters are included, a device is included if any filter matches. To match a filter, all of the rules included in that filter must match.

### Return value

A {{jsxref("Promise")}} that resolves with an array of connected {{domxref("HIDDevice")}} objects that match the filters passed in.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the page does not allow access to the HID feature.

## Security

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

## Examples

### Matching a device with all four filter rules

In the following example a HID device is requested that has a vendor ID of `0xABCD`, product ID of `0x1234`, usage page `0x0C` and usage ID `0x01`. Only devices that match all of these rules will be shown.

```js
let requestButton = document.getElementById("request-hid-device");
requestButton.addEventListener("click", async () => {
  let device;
  try {
    const devices = await navigator.hid.requestDevice({
      filters: [
        {
          vendorId: 0xabcd,
          productId: 0x1234,
          usagePage: 0x0c,
          usage: 0x01,
        },
      ],
    });
    device = devices[0];
  } catch (error) {
    console.log("An error occurred.");
  }

  if (!device) {
    console.log("No device was selected.");
  } else {
    console.log(`HID: ${device.productName}`);
  }
});
```

### An example with two filters

This next example includes two filters. Devices will be shown if they match either of these filters.

```js
// Filter on devices with the Nintendo Switch Joy-Con USB Vendor/Product IDs.
const filters = [
  {
    vendorId: 0x057e, // Nintendo Co., Ltd
    productId: 0x2006, // Joy-Con Left
  },
  {
    vendorId: 0x057e, // Nintendo Co., Ltd
    productId: 0x2007, // Joy-Con Right
  },
];

// Prompt user to select a Joy-Con device.
const [device] = await navigator.hid.requestDevice({ filters });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
