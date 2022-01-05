---
title: MimeType
slug: Web/API/MimeType
tags:
  - API
  - Interface
  - Plugins
  - Reference
browser-compat: api.MimeType
---
{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`MimeType`** interface provides contains information about a MIME type associated with a particular plugin. {{domxref("Navigator.mimeTypes")}} returns an array of this object.

## Properties

- {{domxref("MimeType.type")}}
  - : Returns the MIME type of the associated plugin.
- {{domxref("MimeType.description")}}
  - : Returns a description of the associated plugin or an empty string if there is none.
- {{domxref("MimeType.suffixes")}}
  - : A string containing valid file extensions for the data displayed by the plugin, or an empty string if an extension is not valid for the particular module. For example, a browser's content decryption module may appear in the plugin list but support more file extensions than can be anticipated. It might therefore return an empty string.
- {{domxref("MimeType.enabledPlugin")}}
  - : Returns an instance of {{domxref("Plugin")}} containing information about the plugin itself.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
