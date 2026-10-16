---
title: "`bluetooth.handleRequestDevicePrompt` command"
short-title: handleRequestDevicePrompt
slug: Web/WebDriver/Reference/BiDi/Modules/bluetooth/handleRequestDevicePrompt
page-type: webdriver-command
status:
  - experimental
browser-compat: webdriver.bidi.bluetooth.handleRequestDevicePrompt
sidebar: webdriver
---

{{SeeCompatTable}}

The `bluetooth.handleRequestDevicePrompt` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`bluetooth`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth) module closes the [device prompt](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth#the_device_prompt) that a page opens by calling {{domxref("Bluetooth.requestDevice()", "navigator.bluetooth.requestDevice()")}}, either choosing one of the devices that it lists or canceling it, as the user would.

## Syntax

```json-nolint
/* Choosing a device */
{
  "method": "bluetooth.handleRequestDevicePrompt",
  "params": {
    "accept": true,
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "device": "b1a93982-2255-41f6-9754-17304905d3bc",
    "prompt": "6faef7d4-09cc-419c-813d-8ce550e9783f"
  }
}

/* Canceling the prompt */
{
  "method": "bluetooth.handleRequestDevicePrompt",
  "params": {
    "accept": false,
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "prompt": "6faef7d4-09cc-419c-813d-8ce550e9783f"
  }
}
```

### Parameters

The `params` field contains:

- `accept`
  - : A boolean that indicates whether to choose a device or to cancel the prompt.
    - `true`: The prompt closes with the device specified in `device`, and `requestDevice()` resolves with a {{domxref("BluetoothDevice")}} object that represents it.
    - `false`: The prompt closes without a device, and `requestDevice()` rejects with a `NotFoundError` {{domxref("DOMException")}}.
- `context`
  - : A string that contains the ID of the context that has the device prompt to close.
    This is the `context` value of the `bluetooth.requestDevicePromptUpdated` event for the prompt.
- `device`
  - : A string that contains the ID of the device to choose: the `id` of one of the devices in the `devices` list of the `bluetooth.requestDevicePromptUpdated` event.
    Specify this only when the `accept` field value is `true`.
- `prompt`
  - : A string that contains the ID of the device prompt to close.
    This is the `prompt` value of the `bluetooth.requestDevicePromptUpdated` event for the prompt.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - `accept`, `context`, or `prompt` is missing, or a parameter has an invalid type.
    - `accept` is `true` and `device` is not specified.
- `no such device`
  - : `accept` is `true` and no device in the prompt has the specified `device` ID.
- `no such prompt`
  - : No device prompt with the specified `prompt` ID is open in the context with the specified `context` ID, for example because the prompt is already closed or no context has that ID.

## Description

When a page calls `requestDevice()` in response to a user's action, the browser looks for devices that match the page's filters, opens a device prompt that lists them, and sends a `bluetooth.requestDevicePromptUpdated` event to the sessions that are [subscribed](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to it.
The event's `prompt` field contains the prompt ID, and its `devices` field lists the devices in the prompt, each with an `id` and a `name` (`null` if the device has none).
While the prompt is open, the browser can send the event again with the same prompt ID and an updated `devices` list, so use the latest one.
Subscribe to the event before the page calls `requestDevice()`, so that you receive the IDs that this command needs.

With a [simulated adapter](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth#simulated_adapter), the list includes the simulated devices that match the filters.

Once the prompt is closed, its ID can't be used again: a later `bluetooth.handleRequestDevicePrompt` command with it returns a `no such prompt` error.

## Examples

### Choosing a device in the prompt

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `bluetooth.requestDevicePromptUpdated`.
Suppose you used [`bluetooth.simulateAdapter`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulateAdapter) to simulate a powered-on adapter for the tab with the context ID `93ee5bd6-d256-4608-a002-9a8995cc0e5f`, which has a page from `https://example.com`.
You then used `bluetooth.simulatePreconnectedPeripheral` to add a device named `Heart Rate Monitor` with the address `09:09:09:09:09:09` and the heart rate service (`0000180d-0000-1000-8000-00805f9b34fb`).

The page asks for a heart rate monitor, which it can do only in response to a user's action, such as a click, or to a `script.callFunction` command with `userActivation` set to `true`:

```js
const device = await navigator.bluetooth.requestDevice({
  filters: [{ services: ["heart_rate"] }],
});
```

The browser opens a device prompt, and sends a `bluetooth.requestDevicePromptUpdated` event with the prompt ID `6faef7d4-09cc-419c-813d-8ce550e9783f` in its `prompt` field.
Its `devices` field lists one device, the heart rate monitor, with the ID `b1a93982-2255-41f6-9754-17304905d3bc`.

Send the following message to choose the heart rate monitor:

```json
{
  "id": 1,
  "method": "bluetooth.handleRequestDevicePrompt",
  "params": {
    "accept": true,
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "device": "b1a93982-2255-41f6-9754-17304905d3bc",
    "prompt": "6faef7d4-09cc-419c-813d-8ce550e9783f"
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

The prompt closes, and `requestDevice()` resolves with a `BluetoothDevice` object whose {{domxref("BluetoothDevice.name", "name")}} is `Heart Rate Monitor`.

### Canceling the prompt

Using the same connection, session, and subscription, suppose the page calls `requestDevice()` again.
The browser opens a new device prompt, and sends a `bluetooth.requestDevicePromptUpdated` event with the prompt ID `48fbdba6-45c9-4cf7-8ba4-f86bc07ab8c1`.

To test how the page behaves when the user closes the prompt without choosing a device, send the following message:

```json
{
  "id": 2,
  "method": "bluetooth.handleRequestDevicePrompt",
  "params": {
    "accept": false,
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "prompt": "48fbdba6-45c9-4cf7-8ba4-f86bc07ab8c1"
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

The prompt closes, and `requestDevice()` rejects with a `NotFoundError` `DOMException`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`bluetooth.simulateAdapter`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulateAdapter) command
- [`bluetooth.disableSimulation`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/disableSimulation) command
- [`browsingContext.handleUserPrompt`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt) command
- {{domxref("Bluetooth.requestDevice()")}} method
