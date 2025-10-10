---
title: "SVGAElement: ping property"
short-title: ping
slug: Web/API/SVGAElement/ping
page-type: web-api-instance-property
browser-compat: api.SVGAElement.ping
---

{{APIRef("SVG")}}

The **`ping`** property of the {{domxref("SVGAElement")}} returns a string that reflects the `ping` attribute, containing a space-separated list of URLs to which, when the hyperlink is followed, {{HTTPMethod("POST")}} requests with the body `PING` will be sent by the browser (in the background). Typically used for tracking.

This property can be set, to change the URL's `ping` value. It reflects the value of the [`ping`](/en-US/docs/Web/HTML/Reference/Elements/a#ping) attribute.

## Value

A string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`ping`](/en-US/docs/Web/HTML/Reference/Elements/a#ping) attribute
