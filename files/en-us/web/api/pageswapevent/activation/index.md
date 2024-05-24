---
title: "PageSwapEvent: activation property"
short-title: activation
slug: Web/API/PageSwapEvent/activation
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PageSwapEvent.activation
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`activation`** read-only property of the {{domxref("PageSwapEvent")}} interface contains a {{domxref("NavigationActivation")}} object containing the navigation type and current and destination document history entries for a same-origin navigation.

## Value

A {{domxref("NavigationActivation")}} object, or `null` if the associated navigation has a cross-origin URL anywhere in the redirect chain.

## Examples

See the main {{domxref("PageSwapEvent")}} page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transitions API](/en-US/docs/Web/API/View_Transitions_API)
