---
title: Tk
slug: Web/HTTP/Headers/Tk
tags:
  - DNT
  - HTTP
  - Reference
  - Response
  - header
  - tracking
browser-compat: http.headers.Tk
---
{{HTTPSidebar}}{{Deprecated_header}}

The **`Tk`** response header indicates the tracking status that
applied to the corresponding request.

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
Tk: !  (under construction)
Tk: ?  (dynamic)
Tk: G  (gateway or multiple parties)
Tk: N  (not tracking)
Tk: T  (tracking)
Tk: C  (tracking with consent)
Tk: P  (potential consent)
Tk: D  (disregarding DNT)
Tk: U  (updated)
```

### Directives

- !
  - : Under construction. The origin server is currently testing its communication of
    tracking status.
- ?
  - : Dynamic. The origin server needs more information to determine tracking status.
- G
  - : Gateway or multiple parties. The server is acting as a gateway to an exchange
    involving multiple parties.
- N
  - : Not tracking.
- T
  - : Tracking.
- C
  - : Tracking with consent. The origin server believes it has received prior consent for
    tracking this user, user agent, or device.
- P
  - : Potential consent. The origin server does not know, in real-time, whether it has
    received prior consent for tracking this user, user agent, or device, but promises not
    to use or share any `DNT:1` data until such consent has been determined,
    and further promises to delete or permanently de-identify within 48 hours any
    `DNT:1` data received for which such consent has not been received.
- D
  - : Disregarding DNT. The origin server is unable or unwilling to respect a tracking
    preference received from the requesting user agent.
- U
  - : Updated. The request resulted in a potential change to the tracking status
    applicable to this user, user agent, or device.

## Examples

A `Tk` header for a resource that claims not to be tracking would look like:

```
Tk: N
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("DNT")}} header
- {{domxref("Navigator.doNotTrack")}}
