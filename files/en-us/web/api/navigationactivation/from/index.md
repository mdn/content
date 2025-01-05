---
title: "NavigationActivation: from property"
short-title: from
slug: Web/API/NavigationActivation/from
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigationActivation.from
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`from`** read-only property of the {{domxref("NavigationActivation")}} interface contains a {{domxref("NavigationHistoryEntry")}} object representing the history entry for the outgoing ("from") document in the navigation.

## Value

A {{domxref("NavigationHistoryEntry")}} object, or `null` if the outgoing document is:

- Not same origin as the inbound document.
- The initial `about:blank` document.

## Examples

See the main {{domxref("NavigationActivation")}} page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Navigation API](/en-US/docs/Web/API/Navigation_API)
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
