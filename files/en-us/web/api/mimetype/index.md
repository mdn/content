---
title: MimeType
slug: Web/API/MimeType
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.MimeType
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

The **`MimeType`** interface provides contains information about a MIME type associated with a particular plugin. {{domxref("Navigator.mimeTypes")}} returns an array of this object.

## Instance properties

- {{domxref("MimeType.type")}} {{Deprecated_Inline}}
  - : Returns the MIME type of the associated plugin.
- {{domxref("MimeType.description")}} {{Deprecated_Inline}}
  - : Returns a description of the associated plugin or an empty string if there is none.
- {{domxref("MimeType.suffixes")}} {{Deprecated_Inline}}
  - : A string containing valid file extensions for the data displayed by the plugin, or an empty string if an extension is not valid for the particular module. For example, a browser's content decryption module may appear in the plugin list but support more file extensions than can be anticipated. It might therefore return an empty string.
- {{domxref("MimeType.enabledPlugin")}} {{Deprecated_Inline}}
  - : Returns an instance of {{domxref("Plugin")}} containing information about the plugin itself.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
