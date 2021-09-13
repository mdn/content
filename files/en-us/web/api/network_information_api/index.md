---
title: Network Information API
slug: Web/API/Network_Information_API
tags:
  - API
  - Experimental
  - Network Information API
  - Reference
  - WebAPI
---
{{DefaultAPISidebar("Network Information API")}}{{SeeCompatTable}}

The Network Information API provides information about the system's connection in terms of general connection type (e.g., 'wifi', 'cellular', etc.). This can be used to select high definition content or low definition content based on the user's connection. The entire API consists of the addition of the {{domxref("NetworkInformation")}} interface and a single property to the {{domxref("Navigator")}} interface: {{domxref("Navigator.connection")}}.

{{AvailableInWorkers}}

## Examples

### Detect connection changes

This example watches for changes to the user's connection.

```js
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var type = connection.effectiveType;

function updateConnectionStatus() {
  console.log("Connection type changed from " + type + " to " + connection.effectiveType);
  type = connection.effectiveType;
}

connection.addEventListener('change', updateConnectionStatus);
```

### Preload large resources

The connection object is useful for deciding whether to preload resources that take large amounts of bandwidth or memory. This example would be called soon after page load to check for a connection type where preloading a video may not be desirable. If a cellular connection is found, then the `preloadVideo` flag is set to `false`. For simplicity and clarity, this example only tests for one connection type. A real-world use case would likely use a switch statement or some other method to check all of the possible values of {{domxref("NetworkInformation.type")}}. Regardless of the `type` value you can get an estimate of connection speed through the {{domxref("NetworkInformation.effectiveType")}} property.

```js
let preloadVideo = true;
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (connection) {
  if (connection.effectiveType === 'slow-2g') {
    preloadVideo = false;
  }
}
```

## Interfaces

- {{domxref("NetworkInformation")}}
  - : Provides information about the connection a device is using to communicate with the network and provides a means for scripts to be notified if the connection type changes. The `NetworkInformation` interfaces cannot be instantiated. It is instead accessed through the {{domxref("Navigator")}} interface.

## Specifications

| Specification                                              |
| ---------------------------------------------------------- |
| [Network Information API](https://wicg.github.io/netinfo/) |

## Browser compatibility

### NetworkInformation

{{Compat("api.NetworkInformation")}}

### Navigator.connection

{{Compat("api.Navigator.connection")}}

## See also

- {{spec("https://w3c.github.io/netinfo/", "Network Information API Specification", "ED")}}
- [Online and offline events](/en-US/docs/Web/API/Navigator/Online_and_offline_events)
- {{domxref("Navigator.connection", "window.navigator.connection")}}
