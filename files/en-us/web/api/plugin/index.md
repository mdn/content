---
title: Plugin
slug: Web/API/Plugin
page-type: web-api-interface
tags:
  - API
  - Add-ons
  - DOM
  - NeedsContent
  - Plug-in
  - Plugins
  - Deprecated
browser-compat: api.Plugin
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

The `Plugin` interface provides information about a browser plugin.

> **Note:** Own properties of `Plugin` objects are no longer enumerable in the latest browser versions.

> **Note:** This interface is a legacy type that exists because of a [historical accident](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) and is only continues to be supported in order not to break code that's already using it. Modern APIs use types that wrap around ECMAScript array types so you can treat them like ECMAScript arrays, and at the same time impose additional semantics on their usage (such as making their items read-only).

## Instance properties

- {{domxref("Plugin.description")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : A human readable description of the plugin.
- {{domxref("Plugin.filename")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : The filename of the plugin file.
- {{domxref("Plugin.name")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : The name of the plugin.
- {{domxref("Plugin.version")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : The plugin's version number string.

## Instance methods

- {{domxref("Plugin.item")}} {{Deprecated_Inline}}
  - : Returns the MIME type of a supported content type, given the index number into a list of supported types.
- {{domxref("Plugin.namedItem")}} {{Deprecated_Inline}}
  - : Returns the MIME type of a supported item.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
