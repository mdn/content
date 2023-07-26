---
title: SharedStorageOperation
slug: Web/API/SharedStorageOperation
page-type: web-api-interface
status:
  - experimental
browser-compat: api.SharedStorageOperation
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`SharedStorageOperation`** interface of the {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} represents the base class for all different output gate operation types.

{{InheritanceDiagram}}

The different output gate types are detailed below:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Defined by</th>
      <th>Invoked by</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Selection</td>
      <td>Used to select a URL from a provided list to display to the user, based on shared storage data.</td>
      <td>{{domxref("SharedStorageSelectURLOperation")}}</td>
      <td>{{domxref("WindowSharedStorage.selectURL()", "selectURL()")}}</td>
    </tr>
    <tr>
      <td>Run</td>
      <td>A generic way to process some shared storage data. Used, for example, by the <a href="https://developer.chrome.com/docs/privacy-sandbox/private-aggregation/">Private Aggregation API</a> to process shared storage data and generate aggregated reports. </td>
      <td>{{domxref("SharedStorageRunOperation")}}</td>
      <td>{{domxref("WindowSharedStorage.run()", "run()")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_storage_API)
