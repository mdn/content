---
title: PluginArray
slug: Web/API/PluginArray
tags:
  - API
  - Add-ons
  - DOM
  - Experimental
  - NeedsContent
  - Plugins
browser-compat: api.PluginArray
---
{{APIRef("HTML DOM")}}{{deprecated_header}}

The `PluginArray` interface is used to store a list of {{DOMxRef("Plugin")}} objects describing the available [plugins](/en-US/docs/Mozilla/Add-ons/Plugins); it's returned by the {{DOMxRef("Navigator.plugins", "navigator.plugins")}} property. The `PluginArray` is not a JavaScript array, but has the `length` property and supports accessing individual items using bracket notation (`plugins[2]`), as well as via `item(index)` and `namedItem("name")` methods.

> **Note:** Own properties of `PluginArray` objects are no longer enumerable in the latest browser versions.

## Properties

- {{DOMxRef("PluginArray.length")}}{{ReadOnlyInline}}
  - : The number of plugins in the array.

## Methods

- {{DOMxRef("PluginArray.item")}}
  - : Returns the {{DOMxRef("Plugin")}} at the specified index into the array.
- {{DOMxRef("PluginArray.namedItem")}}
  - : Returns the {{DOMxRef("Plugin")}} with the specified name.
- {{DOMxRef("PluginArray.refresh")}}
  - : Refreshes all plugins on the current page, optionally reloading documents.

## Examples

The following example function returns the version of the Shockwave Flash plugin.

```js
var pluginsLength = navigator.plugins.length;

document.body.innerHTML = pluginsLength + " Plugin(s)<br>"
  + '<table id="pluginTable"><thead>'
  +'<tr><th>Name</th><th>Filename</th><th>description</th><th>version</th></tr>'
  +'</thead><tbody></tbody></table>';

var table = document.getElementById('pluginTable');

for(var i = 0; i < pluginsLength; i++) {
  let newRow = table.insertRow();
  newRow.insertCell().textContent = navigator.plugins[i].name;
  newRow.insertCell().textContent = navigator.plugins[i].filename;
  newRow.insertCell().textContent = navigator.plugins[i].description;
  newRow.insertCell().textContent = navigator.plugins[i].version?navigator.plugins[i].version:"";
}
```

The following example displays information about the installed plugin(s).

```js
var pluginsLength = navigator.plugins.length;

document.write(
  pluginsLength.toString() + " Plugin(s)<br>" +
  "Name | Filename | description<br>"
);

for(var i = 0; i < pluginsLength; i++) {
  document.write(
    navigator.plugins[i].name +
    " | " +
    navigator.plugins[i].filename +
    " | " +
    navigator.plugins[i].description +
    " | " +
    navigator.plugins[i].version +
    "<br>"
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

In addition to listing each plugin as a pseudo-array by zero-indexed numeric properties, Firefox provides properties that are the plugin name directly on the PluginArray object.
