---
title: Window.external
slug: Web/API/Window/external
tags:
  - API
  - Deprecated
  - Window
  - external
browser-compat: api.Window.external
---
{{APIRef}} {{deprecated_header}}

The `external` property of the {{domxref("Window")}} API returns an instance of the `External` interface, which was intended to contain functions related to adding external search providers to the browser. However, this is now deprecated, and the contained methods are now dummy functions that do nothing as per spec.

## Methods

The `External` object has the following methods:

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code>AddSearchProvider(<em>descriptionURL)</em></code>
      </td>
      <td>
        Dummy function; does nothing. See
        <a href="/en-US/docs/Web/OpenSearch#autodiscovery_of_search_plugins"
          >Autodiscovery of search plugins</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>IsSearchProviderInstalled()</code></td>
      <td>Dummy function; does nothing.</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
