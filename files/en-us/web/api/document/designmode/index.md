---
title: "Document: designMode property"
short-title: designMode
slug: Web/API/Document/designMode
page-type: web-api-instance-property
browser-compat: api.Document.designMode
---

{{ApiRef()}}

**`document.designMode`** controls whether the entire document
is editable. Valid values are `"on"` and `"off"`. According to the
specification, this property is meant to default to `"off"`. Firefox follows
this standard. The earlier versions of Chrome and IE default to `"inherit"`.
Starting in Chrome 43, the default is `"off"` and `"inherit"` is
no longer supported. In IE6-10, the value is capitalized.

## Value

A string indicating whether `designMode` is (or should be) set to on or off.
Valid values are `on` and `off`.

## Examples

Make an {{HTMLElement("iframe")}}'s document editable:

```js
iframeNode.contentDocument.designMode = "on";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.contentEditable")}}
