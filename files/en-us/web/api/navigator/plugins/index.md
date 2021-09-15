---
title: Navigator.plugins
slug: Web/API/Navigator/plugins
tags:
  - API
  - DOM
  - Navigator
  - Plugins
  - Property
  - Reference
browser-compat: api.Navigator.plugins
---
{{APIRef("HTML DOM")}}{{deprecated_header}}

Returns a {{DOMxRef("PluginArray")}} object, listing the {{DOMxRef("Plugin")}} objects
describing the plugins installed in
the application.

> **Note:** In Firefox 29 and later, enumeration of the `navigator.plugins` array may
> be restricted as a privacy measure. Applications that must check for the presence of a
> browser plugin should query `navigator.plugins` or
> {{DOMxRef("Navigator.mimeTypes", "navigator.mimeTypes")}} by exact name instead of enumerating the
> `navigator.plugins` array and comparing every plugin's name. This privacy
> change does not disable any plugins; it just hides some plugin names from enumeration.

## Syntax

```js
var plugins = navigator.plugins;
```

`plugins` is {{DOMxRef("PluginArray")}} object used to access
{{DOMxRef("Plugin")}} objects either by name or as a list of items.

The returned value is not a JavaScript array, but has the `length` property
and supports accessing individual items using bracket notation
(`plugins[2]`), as well as via `item(index)` and
`namedItem("name")` methods.

## Examples

The following example function returns the version of the Shockwave Flash plugin.

```js
function getFlashVersion() {
  var flash = navigator.plugins.namedItem('Shockwave Flash');
  if (typeof flash != 'object') {
    // flash is not present
    return undefined;
  }
  if(flash.version){
    return flash.version;
  } else {
    //No version property (e.g. in Chrome)
    return flash.description.replace(/Shockwave Flash /,"");
  }
}
```

The following example displays information about the installed plugin(s).

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

## Notes

The {{DOMxRef("Plugin")}} object exposes a small interface for getting information
about the various plugins installed in your browser. A list of plugins is also available
by entering `about:plugins` in the browser's Location bar.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

In addition to listing each plugin as a pseudo-array by zero-indexed numeric
properties, Firefox provides properties that are the plugin name directly on the [PluginArray](/en-US/docs/Web/API/PluginArray) object.
