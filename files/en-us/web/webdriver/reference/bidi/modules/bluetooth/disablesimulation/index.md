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
    - A required parameter is missing or has an invalid type.
    - `context` is not a top-level context.
- `no such frame`
  - : No context with the given `context` ID is found.

## Description

Once the simulated adapter is removed, the pages in the context and its child contexts no longer see its state or its simulated devices.
In a page that is allowed to use Bluetooth, {{domxref("Bluetooth.getAvailability()", "navigator.bluetooth.getAvailability()")}} again reports whether the system has a Bluetooth adapter.
The command succeeds whether or not the context has a simulated adapter.

The simulated adapter belongs to the top-level context, not to the session.
It stays until you remove it with this command or until the context is closed.

To simulate an adapter again, use [`bluetooth.simulateAdapter`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulateAdapter).
That command then creates a new adapter with no simulated devices.
Since the context no longer has an adapter, you can specify `leSupported` in that command again.

## Examples

### Ending the simulation

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Assume also that a tab is open, showing a page from `https://example.com`.
You opened the tab using [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create), which returned its context ID.
You then loaded the page in the tab using [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate).
After that, you simulated an `absent` adapter for the tab using [`bluetooth.simulateAdapter`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulateAdapter).
As a result, {{domxref("Bluetooth.getAvailability()", "navigator.bluetooth.getAvailability()")}} resolves with `false` in the page.

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

The page no longer uses the simulated adapter.
If the computer has a Bluetooth adapter, `navigator.bluetooth.getAvailability()` in the page resolves with `true` again.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`bluetooth.simulateAdapter`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulateAdapter) command
- [`bluetooth.handleRequestDevicePrompt`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/handleRequestDevicePrompt) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API)
