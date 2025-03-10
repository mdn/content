---
title: "Window: external property"
short-title: external
slug: Web/API/Window/external
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Window.external
---

{{APIRef}} {{deprecated_header}}

The `external` property of the {{domxref("Window")}} API returns an instance of the `External` interface, which was intended to contain functions related to adding external search providers to the browser. However, this is now deprecated, and the contained methods are now dummy functions that do nothing as per spec.

## Instance methods

The `External` object has the following methods:

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code>AddSearchProvider(descriptionURL)</code>
      </td>
      <td>
        Dummy function; does nothing. See
        <a href="/en-US/docs/Web/XML/Guides/OpenSearch#autodiscovery_of_search_plugins"
          >Autodiscovery of search plugins</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>IsSearchProviderInstalled()</code></td>
      <td>Dummy function; does nothing.</td>
    </tr>
    <tr>
      <td><code>getHostEnvironmentValue(name)</code> {{non-standard_inline}}</td>
      <td>Microsoft Edge proprietary API. See <a href="https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/mt795399(v=vs.85)">Microsoft docs</a> for more information.</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
