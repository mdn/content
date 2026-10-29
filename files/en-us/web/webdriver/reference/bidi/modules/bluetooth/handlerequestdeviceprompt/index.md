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

The `bluetooth.handleRequestDevicePrompt` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`bluetooth`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth) module closes the [device prompt](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth#the_device_prompt) that a page opens by calling {{domxref("Bluetooth.requestDevice()", "navigator.bluetooth.requestDevice()")}}.
It either chooses one of the devices that the prompt lists or cancels the prompt, as a user would.

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
    - `true`: The prompt closes with the device specified in the [`device`](#device) field, and `requestDevice()` resolves with a {{domxref("BluetoothDevice")}} object that represents it.
    - `false`: The prompt closes without a device, and `requestDevice()` rejects with a `NotFoundError` {{domxref("DOMException")}}.
- `context`
  - : A string that contains the ID of the context that has the device prompt to close.
    This is the `context` value of the [`bluetooth.requestDevicePromptUpdated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/requestDevicePromptUpdated) event for the prompt.
- `device`
  - : A string that contains the ID of the device to choose.
    This is the `id` value of one of the devices in the `devices` array of the `bluetooth.requestDevicePromptUpdated` event.
    Specify this only when the [`accept`](#accept) field is `true`.
- `prompt`
  - : A string that contains the ID of the device prompt to close.
    This is the `prompt` value of the `bluetooth.requestDevicePromptUpdated` event for the prompt.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing, or a parameter has an invalid type.
    - `accept` is `true` and `device` is not specified.
- `no such device`
  - : `accept` is `true` and no device with the given `device` ID is found in the prompt.
- `no such prompt`
  - : No device prompt with the given `prompt` ID is open in the context with the given `context` ID.
    This happens, for example, if the prompt is already closed or no context has that ID.

## Description

When a page calls `requestDevice()` in response to a user's action, the browser looks for devices that match the page's filters and opens a device prompt that lists them.
It then sends a `bluetooth.requestDevicePromptUpdated` event to the sessions that are [subscribed](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to it.
The event's `prompt` field contains the prompt ID.
Its `devices` array lists the devices in the prompt, each with an `id` and a `name`.
A device's `name` is `null` if the device has none.
While the prompt is open, the browser can send the event again with the same prompt ID and an updated `devices` array.
Use the latest event.
Subscribe to the event before the page calls `requestDevice()` so that you receive the IDs that this command needs.

With a [simulated adapter](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth#simulated_adapter), the list includes the simulated devices that match the filters.

Once the prompt is closed, its ID can't be used again.
A later `bluetooth.handleRequestDevicePrompt` command with that ID returns a `no such prompt` error.

## Examples

### Choosing a device in the prompt

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to [`bluetooth.requestDevicePromptUpdated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/requestDevicePromptUpdated).

Assume also that a tab is open, showing a page from `https://example.com`.
You opened the tab using [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create), which returned its context ID.
You then loaded the page in the tab using [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate).
You simulated a powered-on adapter for the tab using [`bluetooth.simulateAdapter`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulateAdapter).
You then added a device named `Heart Rate Monitor` with the address `09:09:09:09:09:09` and the heart rate service (`0000180d-0000-1000-8000-00805f9b34fb`) using [`bluetooth.simulatePreconnectedPeripheral`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulatePreconnectedPeripheral).

The page can call `requestDevice()` only in response to a user's action, such as a click, or to a [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) command with `userActivation` set to `true`.
The page asks for a heart rate monitor:

```js
const device = await navigator.bluetooth.requestDevice({
  filters: [{ services: ["heart_rate"] }],
});
```

The browser opens a device prompt and sends a `bluetooth.requestDevicePromptUpdated` event with the prompt ID `6faef7d4-09cc-419c-813d-8ce550e9783f` in its `prompt` field.
Its `devices` array lists one device, the heart rate monitor, with the ID `b1a93982-2255-41f6-9754-17304905d3bc`.

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

Using the same connection, session, subscription, and tab as in the first example, suppose the page calls `requestDevice()` again.
The browser opens a new device prompt and sends a [`bluetooth.requestDevicePromptUpdated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/requestDevicePromptUpdated) event with the prompt ID `48fbdba6-45c9-4cf7-8ba4-f86bc07ab8c1`.

Suppose you want to test how the page behaves when the user closes the prompt without choosing a device.
Send the following message to cancel the prompt:

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
