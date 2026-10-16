---
title: "`bluetooth.disableSimulation` command"
short-title: disableSimulation
slug: Web/WebDriver/Reference/BiDi/Modules/bluetooth/disableSimulation
page-type: webdriver-command
status:
  - experimental
browser-compat: webdriver.bidi.bluetooth.disableSimulation
sidebar: webdriver
---

{{SeeCompatTable}}

The `bluetooth.disableSimulation` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`bluetooth`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth) module removes the [simulated Bluetooth adapter](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth#simulated_adapter) of a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context), along with the simulated devices that were added to it.

## Syntax

```json-nolint
{
  "method": "bluetooth.disableSimulation",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}
```

### Parameters

The `params` field contains:

- `context`
  - : A string that contains the ID of the [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) whose simulated adapter to remove.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - `context` is missing or is not a string.
    - `context` is not a top-level context.
- `no such frame`
  - : No context with the specified `context` ID is found.

## Description

Once the simulated adapter is removed, the pages in the context and its child contexts no longer see its state or its simulated devices, and {{domxref("Bluetooth.getAvailability()", "navigator.bluetooth.getAvailability()")}} again reports whether the system has a Bluetooth adapter.
The command succeeds whether or not the context has a simulated adapter.

The simulated adapter belongs to the top-level context, not to the session: it stays until you remove it with this command or the context is closed.

To simulate an adapter again, use [`bluetooth.simulateAdapter`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulateAdapter).
It creates a new adapter with no simulated devices, so you can specify `leSupported` again, which `bluetooth.simulateAdapter` rejects while the context has an adapter.

## Examples

### Ending the simulation

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).
Suppose you used [`bluetooth.simulateAdapter`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulateAdapter) to simulate an `absent` adapter for the tab with the context ID `93ee5bd6-d256-4608-a002-9a8995cc0e5f`, which has a page from `https://example.com`, so that {{domxref("Bluetooth.getAvailability()", "navigator.bluetooth.getAvailability()")}} resolves with `false` in that page.

When you've finished testing, send the following message to remove the simulated adapter:

```json
{
  "id": 1,
  "method": "bluetooth.disableSimulation",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
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

With the simulated adapter removed, `navigator.bluetooth.getAvailability()` in the page resolves with `true` again, because the computer has a Bluetooth adapter.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`bluetooth.simulateAdapter`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulateAdapter) command
- [`bluetooth.handleRequestDevicePrompt`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/handleRequestDevicePrompt) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API)
