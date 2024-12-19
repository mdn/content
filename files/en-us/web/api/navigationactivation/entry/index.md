---
title: "NavigationActivation: entry property"
short-title: entry
slug: Web/API/NavigationActivation/entry
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigationActivation.entry
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`entry`** read-only property of the {{domxref("NavigationActivation")}} interface contains a {{domxref("NavigationHistoryEntry")}} object representing the history entry for the inbound ("to") document in the navigation. This is equivalent to the {{domxref("Navigation.currentEntry")}} property at the moment the inbound document was activated.

There are some cases in which either the `from` or `entry` {{domxref("NavigationHistoryEntry")}} objects would not be viable targets for the `traverseTo()` method, as they might not be retained in history. For example, the document can be activated using `location.replace()` or its initial entry could be replaced by `history.replaceState()`. However, those entries' `url` properties and `getState()` methods are still accessible.

## Value

A {{domxref("NavigationHistoryEntry")}} object.

## Examples

See the main {{domxref("NavigationActivation")}} page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Navigation API](/en-US/docs/Web/API/Navigation_API)
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
