---
title: "`bluetooth` module"
short-title: bluetooth
slug: Web/WebDriver/Reference/BiDi/Modules/bluetooth
page-type: listing-page
status:
  - experimental
browser-compat: webdriver.bidi.bluetooth
spec-urls: https://bluetooth.spec.whatwg.org/#bluetooth-module
sidebar: webdriver
---

{{SeeCompatTable}}

The **`bluetooth`** module contains commands for automating Bluetooth device interactions.
It lets you test a website that uses the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) without Bluetooth hardware, by simulating a Bluetooth adapter and the devices around it.

## Simulated adapter

Each [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) can have a simulated Bluetooth adapter.
While it has one, the pages in the context and in its child contexts use the simulated adapter: {{domxref("Bluetooth.getAvailability()", "navigator.bluetooth.getAvailability()")}} reports on it, and {{domxref("Bluetooth.requestDevice()", "navigator.bluetooth.requestDevice()")}} can find the simulated devices that you add to it with [`bluetooth.simulatePreconnectedPeripheral`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulatePreconnectedPeripheral).

A simulated adapter has the following properties:

- A state, which is one of the following:
  - `absent`: The system has no Bluetooth adapter.
  - `powered-off`: The adapter is present but powered off.
  - `powered-on`: The adapter is present and powered on.
- Whether it supports Bluetooth Low Energy (LE).

In a page that is allowed to use Bluetooth, `getAvailability()` resolves with `false` if the state is `absent` or the adapter doesn't support Bluetooth LE.
Otherwise, it resolves with `true`, even when the adapter is powered off.

You create the adapter, and later change its state, with [`bluetooth.simulateAdapter`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulateAdapter).
You remove it, along with its simulated devices, with [`bluetooth.disableSimulation`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/disableSimulation).
The adapter belongs to the context, not to the session: it stays when the context navigates, until you remove it or the context is closed.

## The device prompt

When a page calls `requestDevice()` in response to a user's action, the browser opens a device prompt, even if no device matches.
The prompt lists the nearby devices that match the options the page passed, so that the user can choose one.
With a simulated adapter, the list includes the simulated devices that match.

When the prompt opens, the browser sends a [`bluetooth.requestDevicePromptUpdated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/requestDevicePromptUpdated) event to the sessions that are [subscribed](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to it.
While the prompt is open, the browser can send the event again with the same prompt ID, as the list of devices changes.
The event contains the ID of the context that called `requestDevice()`, the ID of the prompt, and the devices that the prompt lists, each with an ID and a name (`null` if the device has none).

To close the prompt as the user would, send [`bluetooth.handleRequestDevicePrompt`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/handleRequestDevicePrompt) with these IDs:

- If you choose a device, `requestDevice()` resolves with a {{domxref("BluetoothDevice")}} object that represents it.
- If you cancel the prompt, `requestDevice()` rejects with a `NotFoundError` {{domxref("DOMException")}}.

For example, to test a page that connects to a heart rate monitor, subscribe to `bluetooth.requestDevicePromptUpdated`, simulate a powered-on adapter for the page's tab with `bluetooth.simulateAdapter`, and add a heart rate monitor with `bluetooth.simulatePreconnectedPeripheral`.
When the page calls `requestDevice()`, the event lists the monitor.
Choose it with `bluetooth.handleRequestDevicePrompt`, and `requestDevice()` resolves with a `BluetoothDevice` object for it.

## Commands

- [`bluetooth.disableSimulation`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/disableSimulation)
- [`bluetooth.handleRequestDevicePrompt`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/handleRequestDevicePrompt)
- [`bluetooth.simulateAdapter`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/bluetooth/simulateAdapter)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
