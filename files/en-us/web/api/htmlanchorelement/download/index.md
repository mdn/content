---
title: "HTMLAnchorElement: download property"
short-title: download
slug: Web/API/HTMLAnchorElement/download
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.download
---

{{APIRef("HTML DOM")}}

The **`HTMLAnchorElement.download`** property is a
string indicating that the linked resource is intended to be
downloaded rather than displayed in the browser. The value, if any, specifies the
default file name for use in labeling the resource in a local file system. If the name
is not a valid file name in the underlying OS, the browser will adjust it.
It reflects the [`download`](/en-US/docs/Web/HTML/Reference/Elements/a#download) attribute of the {{HTMLElement("a")}} element.

> [!NOTE]
> This value might not be used for download. This value cannot
> be used to determine whether the download will occur.
> In particular, `download` only works for [same-origin URLs](/en-US/docs/Web/Security/Defenses/Same-origin_policy), or the `blob:` and `data:` schemes.
> For a cross-origin URL, the attribute is ignored and the link behaves like a normal link.

## Value

A string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
