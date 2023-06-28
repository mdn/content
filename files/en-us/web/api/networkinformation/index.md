---
title: NetworkInformation
slug: Web/API/NetworkInformation
page-type: web-api-interface
status:
  - experimental
browser-compat: api.NetworkInformation
---

{{APIRef("Network Information API")}}{{SeeCompatTable}}

The **`NetworkInformation`** interface of the [Network Information API](/en-US/docs/Web/API/Network_Information_API) provides information about the connection a device is using to communicate with the network and provides a means for scripts to be notified if the connection type changes.
The `NetworkInformation` interface cannot be instantiated. It is instead accessed through the `connection` property of the {{domxref("Navigator")}} interface.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties of its parent, {{domxref("EventTarget")}}._

- {{domxref("NetworkInformation.downlink")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the effective bandwidth estimate in megabits per second, rounded to the nearest multiple of 25 kilobits per seconds.
- {{domxref("NetworkInformation.downlinkMax")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the maximum downlink speed, in megabits per second (Mbps), for the underlying connection technology.
- {{domxref("NetworkInformation.effectiveType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the effective type of the connection meaning one of 'slow-2g', '2g', '3g', or '4g'. This value is determined using a combination of recently observed round-trip time and downlink values.
- {{domxref("NetworkInformation.rtt")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the estimated effective round-trip time of the current connection, rounded to the nearest multiple of 25 milliseconds.
- {{domxref("NetworkInformation.saveData")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `true` if the user has set a reduced data usage option on the user agent.
- {{domxref("NetworkInformation.type")}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Returns the type of connection a device is using to communicate with the network. It will be one of the following values:

    - `bluetooth`
    - `cellular`
    - `ethernet`
    - `none`
    - `wifi`
    - `wimax`
    - `other`
    - `unknown`

## Instance methods

_This interface also inherits methods of its parent, {{domxref("EventTarget")}}._

## Events

- {{domxref("NetworkInformation.change_event", "change")}} {{Experimental_Inline}}
  - : The event that's fired when connection information changes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Online and offline events](/en-US/docs/Web/API/Navigator/onLine)
