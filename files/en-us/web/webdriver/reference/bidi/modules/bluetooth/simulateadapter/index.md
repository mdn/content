---
title: "`bluetooth.simulateAdapter` command"
short-title: simulateAdapter
slug: Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulateAdapter
page-type: webdriver-command
status:
  - experimental
browser-compat: webdriver.bidi.bluetooth.simulateAdapter
sidebar: webdriver
---

{{SeeCompatTable}}

The `bluetooth.simulateAdapter` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`bluetooth`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth) module creates a [simulated Bluetooth adapter](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth#simulated_adapter) for a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context), or changes the state of the simulated adapter that the context already has.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "bluetooth.simulateAdapter",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "state": "powered-on"
  }
}

/* With required and optional parameters */
{
  "method": "bluetooth.simulateAdapter",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "leSupported": false,
    "state": "powered-on"
  }
}
```

### Parameters

The `params` field contains:

- `context`
  - : A string that contains the ID of the [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) to simulate the adapter for.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `leSupported` {{optional_inline}}
  - : A boolean that indicates whether the simulated adapter supports Bluetooth Low Energy (LE).
    You can specify it only when the command creates the adapter: LE support can't be changed for an existing adapter.

    - `true`: The adapter supports Bluetooth LE. This is the default.
    - `false`: The adapter doesn't support Bluetooth LE, so {{domxref("Bluetooth.getAvailability()")}} resolves with `false` in the context.
- `state`
  - : A string that specifies the state of the simulated adapter.
    It can take one of the following values:

    - `absent`: The system has no Bluetooth adapter, so {{domxref("Bluetooth.getAvailability()")}} resolves with `false`.
    - `powered-off`: The adapter is present but powered off.
    - `powered-on`: The adapter is present and powered on.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - `context` or `state` is missing, `context` is not a string, `state` is not `absent`, `powered-off`, or `powered-on`, or `leSupported` is not a boolean.
    - `context` is not a top-level context.
    - `leSupported` is specified and the context already has a simulated adapter.
- `no such frame`
  - : No context with the specified `context` ID is found.

## Description

If the context has no simulated adapter, the command creates one with the state that you specify.
The adapter supports Bluetooth LE unless `leSupported` is `false`.
If the context already has a simulated adapter, the command changes only its state: the adapter keeps its LE support and the simulated devices that you added to it.

The simulated adapter applies to the pages in the top-level context and its child contexts, and not to other top-level contexts.
It belongs to the context, not to the session: it stays when the context navigates to another page, until you remove it or the context is closed.
To remove it, use [`bluetooth.disableSimulation`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/disableSimulation).

## Examples

### Simulating a powered-on adapter

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).
Suppose the tab with the context ID `93ee5bd6-d256-4608-a002-9a8995cc0e5f` has a page from `https://example.com` that uses the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API).

To test the page without Bluetooth hardware, send the following message to simulate an adapter that is powered on:

```json
{
  "id": 1,
  "method": "bluetooth.simulateAdapter",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "state": "powered-on"
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

The page now uses the simulated adapter: {{domxref("Bluetooth.getAvailability()", "navigator.bluetooth.getAvailability()")}} resolves with `true`.
The adapter has no devices yet: add them with [`bluetooth.simulatePreconnectedPeripheral`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulatePreconnectedPeripheral), so that the ones that match the page's filters appear in the [device prompt](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth#the_device_prompt) when the page calls {{domxref("Bluetooth.requestDevice()", "navigator.bluetooth.requestDevice()")}}.

### Changing the state of the adapter

Using the same connection and session, send the following message to simulate a system with no Bluetooth adapter in the same tab:

```json
{
  "id": 2,
  "method": "bluetooth.simulateAdapter",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "state": "absent"
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

The tab already has a simulated adapter, so the browser changes its state.
`navigator.bluetooth.getAvailability()` now resolves with `false`, which lets you test how the page behaves when Bluetooth isn't available.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`bluetooth.disableSimulation`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/disableSimulation) command
- [`bluetooth.handleRequestDevicePrompt`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/handleRequestDevicePrompt) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API)
