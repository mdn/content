---
title: Network Information API
slug: Web/API/Network_Information_API
page-type: web-api-overview
status:
  - experimental
browser-compat:
  - api.NetworkInformation
  - api.Navigator.connection
---

{{DefaultAPISidebar("Network Information API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

The Network Information API provides information about the system's connection in terms of general connection type (e.g., 'wifi, 'cellular', etc.).
This can be used to select high definition content or low definition content based on the user's connection.

The interface consists of a single {{domxref("NetworkInformation")}} object, an instance of which is returned by the {{domxref("Navigator.connection")}} property.

## Interfaces

- {{domxref("NetworkInformation")}}
  - : Provides information about the connection a device is using to communicate with the network and provides a means for scripts to be notified if the connection type changes. The `NetworkInformation` interface cannot be instantiated. It is instead accessed through the {{domxref("Navigator")}} interface.

## Examples

### Detect connection changes

This example watches for changes to the user's connection.

```js
let type = navigator.connection.effectiveType;

function updateConnectionStatus() {
  console.log(
    `Connection type changed from ${type} to ${navigator.connection.effectiveType}`,
  );
  type = navigator.connection.effectiveType;
}

navigator.connection.addEventListener("change", updateConnectionStatus);
```

### Preload large resources

The connection object is useful for deciding whether to preload resources that take large amounts of bandwidth or memory. This example would be called soon after page load to check for a connection type where preloading a video may not be desirable. If a cellular connection is found, then the `preloadVideo` flag is set to `false`. For simplicity and clarity, this example only tests for one connection type. A real-world use case would likely use a switch statement or some other method to check all of the possible values of {{domxref("NetworkInformation.type")}}. Regardless of the `type` value you can get an estimate of connection speed through the {{domxref("NetworkInformation.effectiveType")}} property.

```js
let preloadVideo = true;
const connection = navigator.connection;
if (connection) {
  if (connection.effectiveType === "slow-2g") {
    preloadVideo = false;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Online and offline events](/en-US/docs/Web/API/Navigator/onLine)
