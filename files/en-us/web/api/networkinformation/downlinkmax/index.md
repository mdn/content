---
title: NetworkInformation.downlinkMax
slug: Web/API/NetworkInformation/downlinkMax
tags:
  - API
  - Experimental
  - Network Information API
  - NetworkInformation
  - Property
  - Read-only
  - Reference
browser-compat: api.NetworkInformation.downlinkMax
---
{{APIRef("Network Information API")}}{{SeeCompatTable}}

The **`NetworkInformation.downlinkMax`** read-only property
returns the maximum downlink speed, in megabits per second (Mbps), for the underlying
connection technology.

{{AvailableInWorkers}}

## Syntax

```js
var max = NetworkInformation.downlinkMax
```

### Return value

- an `unrestricted double` representing the maximum downlink speed,
  in megabits per second (Mb/s), for the underlying connection technology.

## Examples

The following example monitors the connection using the `change` event and
logs changes as they occur.

```js
function logConnectionType() {
  var connectionType = 'not supported';
  var downlinkMax = 'not supported';

  if ('connection' in navigator) {
    connectionType = navigator.connection.effectiveType;

    if ('downlinkMax' in navigator.connection) {
      downlinkMax = navigator.connection.downlinkMax;
    }
  }

  console.log('Current connection type: ' + connectionType +
    ' (downlink max: ' + downlinkMax + ')');
}

logConnectionType();
navigator.connection.addEventListener('change', logConnectionType);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
