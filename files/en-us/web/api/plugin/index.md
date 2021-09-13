---
title: Plugin
slug: Web/API/Plugin
tags:
  - API
  - Add-ons
  - DOM
  - NeedsContent
  - Plug-in
  - Plugins
browser-compat: api.Plugin
---
{{ApiRef("HTML DOM")}}{{deprecated_header}}

The `Plugin` interface provides information about a browser plugin.

> **Note:** Own properties of `Plugin` objects are no longer enumerable in the latest browser versions.

## Properties

- {{domxref("Plugin.description")}} {{readonlyinline}}
  - : A human readable description of the plugin.
- {{domxref("Plugin.filename")}} {{readonlyinline}}
  - : The filename of the plugin file.
- {{domxref("Plugin.name")}} {{readonlyinline}}
  - : The name of the plugin.
- {{domxref("Plugin.version")}} {{readonlyinline}}
  - : The plugin's version number string.

## Methods

- {{domxref("Plugin.item")}}
  - : Returns the MIME type of a supported content type, given the index number into a list of supported types.
- {{domxref("Plugin.namedItem")}}
  - : Returns the MIME type of a supported item.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
