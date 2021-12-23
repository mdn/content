---
title: NetworkInformation
slug: Web/API/NetworkInformation
tags:
  - API
  - Experimental
  - Interface
  - Network Information API
  - NetworkInformation
  - Reference
browser-compat: api.NetworkInformation
---
{{APIRef("Network Information API")}}{{SeeCompatTable}}

The **`NetworkInformation`** interface provides information about the connection a device is using to communicate with the network and provides a means for scripts to be notified if the connection type changes. The `NetworkInformation` interfaces cannot be instantiated. It is instead accessed through the `connection` property of the {{domxref("Navigator")}} interface.

{{AvailableInWorkers}}

## Properties

_This interface also inherits properties of its parent, {{domxref("EventTarget")}}._

- {{domxref("NetworkInformation.downlink")}} {{readonlyinline}}
  - : Returns the effective bandwidth estimate in megabits per second, rounded to the nearest multiple of 25 kilobits per seconds.
- {{domxref("NetworkInformation.downlinkMax")}} {{readonlyinline}}
  - : Returns the maximum downlink speed, in megabits per second (Mbps), for the underlying connection technology.
- {{domxref("NetworkInformation.effectiveType")}} {{readonlyinline}}
  - : Returns the effective type of the connection meaning one of 'slow-2g', '2g', '3g', or '4g'. This value is determined using a combination of recently observed round-trip time and downlink values.
- {{domxref("NetworkInformation.rtt")}} {{readonlyinline}}
  - : Returns the estimated effective round-trip time of the current connection, rounded to the nearest multiple of 25 milliseconds.
- {{domxref("NetworkInformation.saveData")}} {{readonlyinline}}
  - : Returns `true` if the user has set a reduced data usage option on the user agent.
- {{domxref("NetworkInformation.type")}} {{readonlyinline}}

  - : Returns the type of connection a device is using to communicate with the network. It will be one of the following values:

    - `bluetooth`
    - `cellular`
    - `ethernet`
    - `none`
    - `wifi`
    - `wimax`
    - `other`
    - `unknown`

### Event handlers

- {{domxref("NetworkInformation.onchange")}}
  - : The event that's fired when connection information changes and the {{event("change")}} is fired on this object.

## Methods

_This interface also inherits methods of its parent, {{domxref("EventTarget")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Network Information API](/en-US/docs/Web/API/Network_Information_API)
- [Online and offline events](/en-US/docs/Online_and_offline_events)
- The {{domxref("Navigator")}} interface that implements it.
