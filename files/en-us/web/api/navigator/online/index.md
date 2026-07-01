---
title: "Navigator: onLine property"
short-title: onLine
slug: Web/API/Navigator/onLine
page-type: web-api-instance-property
browser-compat: api.Navigator.onLine
---

{{ApiRef("HTML DOM")}}

The **`onLine`** property of the {{domxref("Navigator")}} interface returns whether the device is connected to the network, with `true` meaning online and `false` meaning offline. The property's value changes after the browser checks its network connection, usually when the user follows links or when a script requests a remote page. For example, the property should return `false` when users click links soon after they lose internet connection. When its value changes, an [`online`](/en-US/docs/Web/API/Window/online_event) or [`offline`](/en-US/docs/Web/API/Window/offline_event) event is fired on the `window`.

Browsers and operating systems leverage different heuristics to determine whether the device is online. In general, connection to LAN is considered online, even though the LAN may not have Internet access. For example, the computer may be running a virtualization software that has virtual ethernet adapters that are always "connected". On Windows, the online status is determined by whether it can reach a Microsoft home server, which may be blocked by firewalls or VPNs, even if the computer has Internet access. Therefore, this property is inherently unreliable, and you should not disable features based on the online status, only provide hints when the user may seem offline.

## Value

A boolean.

## Examples

### Basic usage

To check if you are online, query `window.navigator.onLine`, as in the
following example:

```js
if (navigator.onLine) {
  console.log("online");
} else {
  console.log("offline");
}
```

If the browser doesn't support `navigator.onLine` the above example will
always come out as `false`/`undefined`.

### Listening for changes in network status

To see changes in the network state, use
[`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) to
listen for the events on `window.online` and `window.offline`, as
in the following example:

```js
window.addEventListener("offline", (e) => {
  console.log("offline");
});

window.addEventListener("online", (e) => {
  console.log("online");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
