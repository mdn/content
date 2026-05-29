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

> [!NOTE]
> The [`referrerpolicy`](/en-US/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy) attribute of an embedding `<iframe>` affects this list. Setting it to `no-referrer`, or to `same-origin` when the framed document is cross-origin, redacts the origin of the document that contains the `<iframe>` from the `ancestorOrigins` list of the framed document: the origin is replaced with an opaque origin, which serializes as `"null"`.

## Value

An array of strings.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
