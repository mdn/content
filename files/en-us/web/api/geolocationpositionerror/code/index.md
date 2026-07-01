---
title: "GeolocationPositionError: code property"
short-title: code
slug: Web/API/GeolocationPositionError/code
page-type: web-api-instance-property
browser-compat: api.GeolocationPositionError.code
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`code`** read-only property of the {{domxref("GeolocationPositionError")}} interface is an `unsigned short` representing the error code.

The following values are possible:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Value</th>
      <th scope="col">Associated constant</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>1</code></td>
      <td><code>PERMISSION_DENIED</code></td>
      <td>
        The acquisition of the geolocation information failed because the page
        didn't have the permission to do it.
      </td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td><code>POSITION_UNAVAILABLE</code></td>
      <td>
        The acquisition of the geolocation failed because one or several internal sources of position returned an internal error.
      </td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td><code>TIMEOUT</code></td>
      <td>Geolocation information was not obtained in the allowed time.</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using geolocation](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationPositionError")}}
