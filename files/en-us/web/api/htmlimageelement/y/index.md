---
title: "HTMLImageElement: y property"
short-title: y
slug: Web/API/HTMLImageElement/y
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.y
---

{{APIRef("HTML DOM")}}

The read-only **y** property of the {{domxref("HTMLImageElement")}} interface indicates the y-coordinate of the {{HTMLElement("img")}} element's top border edge relative to the root element's origin.

The {{domxref("HTMLImageElement.x", "x")}} and `y` properties return the offset of the image relative to the root element.

## Value

An integer value indicating the distance in pixels from the top edge of the element's nearest root element and the top edge of the {{HTMLElement("img")}} element's border box. The nearest root element is the outermost {{HTMLElement("html")}} element that contains the image. If the image is in an {{HTMLElement("iframe")}}, its x is relative to that frame.

In the diagram below, the top border edge is the top edge of the blue padding area. So the value returned by x would be the distance from that point to the top edge of the content area.

![Diagram showing the relationships between the various boxes associated with an element](boxmodel-3.png)
