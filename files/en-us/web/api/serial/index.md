---
title: Serial
slug: Web/API/Serial
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Serial
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

The `Serial` interface of the [Web Serial API](/en-US/docs/Web/API/Web_Serial_API) provides attributes and methods for finding and connecting to serial ports from a web page.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("Serial.requestPort()")}} {{Experimental_Inline}}

  - : Returns a {{jsxref("Promise")}} that resolves with an instance of {{domxref("SerialPort")}} representing the device chosen by the user. This method must be called via [transient activation](/en-US/docs/Glossary/Transient_activation).

- {{domxref("Serial.getPorts()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with an array of {{domxref("SerialPort")}} objects representing serial ports connected to
    the host which the origin has permission to access.

## Events

The following events are available to `Serial` via event bubbling from {{domxref("SerialPort")}}:

- `SerialPort` {{domxref("SerialPort.connect_event", "connect")}} event
  - : An event fired when a port has been connected to the device.
- `SerialPort` {{domxref("SerialPort.disconnect_event", "disconnect")}} event
  - : An event fired when a port has been disconnected from the device.

## Examples

The following example shows how a site can check for available ports and allow the user to grant it permission to access additional ports.

On load event listeners are added for the {{domxref("SerialPort.connect_event", "connect")}} and {{domxref("SerialPort.disconnect_event", "disconnect")}} events so that the site can react when a device is connected or disconnected from the system. The {{domxref("Serial.getPorts()","getPorts()")}} method is then called to see which ports are connected that the site already has access to.

If the site doesn't have access to any connected ports it has to wait until it has user activation to proceed. In this example we use a {{domxref("Element.click_event", "click")}} event handler on a button for this task. A filter is passed to {{domxref("Serial.requestPort()","requestPort()")}} with a USB vendor ID in order to limit the set of devices shown to the user to only USB devices built by a particular manufacturer.

```js
navigator.serial.addEventListener("connect", (e) => {
  // Connect to `e.target` or add it to a list of available ports.
});

navigator.serial.addEventListener("disconnect", (e) => {
  // Remove `e.target` from the list of available ports.
});

navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports with `ports` on page load.
});

button.addEventListener("click", () => {
  const usbVendorId = 0xabcd;
  navigator.serial
    .requestPort({ filters: [{ usbVendorId }] })
    .then((port) => {
      // Connect to `port` or add it to the list of available ports.
    })
    .catch((e) => {
      // The user didn't select a port.
    });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
