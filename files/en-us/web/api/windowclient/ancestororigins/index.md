---
title: "WindowClient: ancestorOrigins property"
short-title: ancestorOrigins
slug: Web/API/WindowClient/ancestorOrigins
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WindowClient.ancestorOrigins
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

The **`ancestorOrigins`** read-only property of the {{domxref("WindowClient")}} interface is an array of strings listing the origins of all ancestors of the browsing context represented by this `WindowClient` in reverse order.

The first element in the array is the origin of this window's parent, and the last element is the origin of the top-level browsing context. If this window is itself a top-level browsing context, then `ancestorOrigins` is an empty array.

## Value

An array of strings.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
