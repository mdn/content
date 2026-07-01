---
title: "NDEFRecord: id property"
short-title: id
slug: Web/API/NDEFRecord/id
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NDEFRecord.id
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

The **`id`** property of the
{{DOMxRef("NDEFRecord")}} interface returns the record identifier, which is an
absolute or relative URL used to identify the record.

This identifier is created by the generator of the record which is solely responsible
for enforcing record identifier uniqueness. Web NFC does not sign the NFC content, thus
record consumer should not make any assumptions about integrity or authenticity of the
identifier or any other part of the records.

## Value

A string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
