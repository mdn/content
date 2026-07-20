---
title: "HTMLImageElement: x property"
short-title: x
slug: Web/API/HTMLImageElement/x
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.x
---

{{APIRef("HTML DOM")}}

The read-only **x** property of the {{domxref("HTMLImageElement")}} interface indicates the x-coordinate of the {{HTMLElement("img")}} element's left border edge relative to the root element's origin.

The `x` and {{domxref("HTMLImageElement.y", "y")}} properties return the offset of the image relative to the root element.

## Value

An integer value indicating the distance in pixels from the left edge of the element's nearest root element and the left edge of the {{HTMLElement("img")}} element's border box. The nearest root element is the outermost {{HTMLElement("html")}} element that contains the image. If the image is in an {{HTMLElement("iframe")}}, its x is relative to that frame.

In the diagram below, the left border edge is the left edge of the blue padding area. So the value returned by x would be the distance from that point to the left edge of the content area.

![Diagram showing the relationships between the various boxes associated with an element](boxmodel-3.png)
