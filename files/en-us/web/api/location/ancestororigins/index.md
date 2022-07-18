---
title: location.ancestorOrigins
slug: Web/API/Location/ancestorOrigins
page-type: web-api-instance-property
tags:
  - API
  - Location
  - Property
  - Reference
browser-compat: api.Location.ancestorOrigins
---
{{APIRef("Location")}}

The **`ancestorOrigins`** read-only
property of the {{domxref("Location")}} interface is a static
{{domxref("DOMStringList")}} containing, in reverse order, the origins of all ancestor
browsing contexts of the document associated with the given {{domxref("Location")}}
object.

You can use `location.ancestorOrigins` in the script for a document to
determine, for example, whenever the document is being framed by a site which you don't
expect it to be framed by. You can also use it to vary the behavior of the document
based on what site or list of sites is framing it.

## Value

A {{domxref("DOMStringList")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
