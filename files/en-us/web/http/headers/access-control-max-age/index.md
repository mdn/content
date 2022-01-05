---
title: Access-Control-Max-Age
slug: Web/HTTP/Headers/Access-Control-Max-Age
tags:
  - CORS
  - HTTP
  - Reference
  - header
browser-compat: http.headers.Access-Control-Max-Age
---
{{HTTPSidebar}}

The **`Access-Control-Max-Age`** response header indicates how long the results of a {{glossary("preflight request")}} (that is the information contained in the {{HTTPHeader("Access-Control-Allow-Methods")}} and {{HTTPHeader("Access-Control-Allow-Headers")}} headers) can be cached.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Access-Control-Max-Age: <delta-seconds>
```

## Directives

- \<delta-seconds>
  - : Maximum number of seconds the results can be cached, as an unsigned non-negative integer.
    Firefox [caps this at 24 hours](https://searchfox.org/mozilla-central/source/netwerk/protocol/http/nsCORSListenerProxy.cpp#1118) (86400 seconds).
    Chromium (prior to v76) [caps at 10 minutes](https://cs.chromium.org/chromium/src/services/network/public/cpp/cors/preflight_result.cc?l=36&rcl=52002151773d8cd9ffc5f557cd7cc880fddcae3e) (600 seconds).
    Chromium (starting in v76) [caps at 2 hours](https://cs.chromium.org/chromium/src/services/network/public/cpp/cors/preflight_result.cc?l=31&rcl=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa) (7200 seconds).
    The default value is 5 seconds.

## Examples

Cache results of a preflight request for 10 minutes:

```
Access-Control-Max-Age: 600
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
