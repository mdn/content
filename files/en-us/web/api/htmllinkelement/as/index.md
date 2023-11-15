---
title: "HTMLLinkElement: as property"
short-title: as
slug: Web/API/HTMLLinkElement/as
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.as
---

{{APIRef("HTML DOM")}}

The **`as`** property of the {{domxref("HTMLLinkElement")}} interface returns a string representing the type of content to be preloaded by a link element.

The `as` property must have a value for link elements when [`rel="preload"`](/en-US/docs/Web/HTML/Attributes/rel/preload), or the resource will not be fetched.
It may also be applied to link elements where [`rel="modulepreload"`](/en-US/docs/Web/HTML/Attributes/rel/preload), but if omitted, will default to `script`.
The property should not be set for other types of link elements, such as `rel="prefetch"`.

This property reflects the value of the [`as` attribute](/en-US/docs/Web/HTML/Element/link#as) of the [`<link>`](/en-US/docs/Web/HTML/Element/link) HTML element.

## Value

A string with the following allowed values: `"audio"`, `"document"`, `"embed"`, `"fetch"`, `"font"`, `"image"`, `"object"`, `"script"`, `"style"`, `"track"`, `"video"`, `"worker"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
