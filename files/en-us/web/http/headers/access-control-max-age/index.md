---
title: Access-Control-Max-Age
slug: Web/HTTP/Headers/Access-Control-Max-Age
page-type: http-header
browser-compat: http.headers.Access-Control-Max-Age
---

{{HTTPSidebar}}

The HTTP **`Access-Control-Max-Age`** {{Glossary("response header")}} indicates how long the results of a {{glossary("preflight request")}} (that is, the information contained in the {{HTTPHeader("Access-Control-Allow-Methods")}} and {{HTTPHeader("Access-Control-Allow-Headers")}} headers) can be cached.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Max-Age: <delta-seconds>
```

## Directives

- `<delta-seconds>`
  - : Maximum number of seconds for which the results can be cached as an unsigned non-negative integer.
    Firefox [caps this at 24 hours](https://searchfox.org/mozilla-central/source/netwerk/protocol/http/nsCORSListenerProxy.cpp#1207) (86400 seconds).
    Chromium (prior to v76) [caps at 10 minutes](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;l=36) (600 seconds).
    Chromium (starting in v76) [caps at 2 hours](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;l=31) (7200 seconds).
    The default value is 5 seconds.

## Examples

Cache results of a preflight request for 10 minutes:

```http
Access-Control-Max-Age: 600
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
