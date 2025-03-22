---
title: "PresentationConnection: binaryType property"
short-title: binaryType
slug: Web/API/PresentationConnection/binaryType
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PresentationConnection.binaryType
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

When a {{DOMxRef("PresentationConnection")}} object is created, its `binaryType` IDL attribute _MUST_ be set to the string `"arraybuffer"`. Upon getting, the attribute _MUST_ return its most recent value (the value it was last set as). Upon setting, the user agent _MUST_ set the IDL attribute to the new value.

> [!NOTE]
> The `binaryType` attribute allows authors to control how binary data is exposed to scripts. By setting the attribute to `"blob"`, binary data is returned in `Blob` form; by setting it to `"arraybuffer"`, it is returned in {{JSxRef("ArrayBuffer")}} form. The attribute defaults to `"arraybuffer"`. This attribute has no effect on data sent in a string form.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
