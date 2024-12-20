---
title: Tk
slug: Web/HTTP/Headers/Tk
page-type: http-header
status:
  - deprecated
  - non-standard
spec-urls: https://www.w3.org/TR/tracking-dnt/
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> The DNT (Do Not Track) specification has been discontinued. See {{domxref("Navigator.doNotTrack")}} for more information.
> An alternative is [Global Privacy Control](https://globalprivacycontrol.org/), which is communicated to servers using the {{HTTPHeader("Sec-GPC")}} header, and accessible to clients from {{domxref("navigator.globalPrivacyControl")}}.

The HTTP **`Tk`** {{Glossary("response header")}} indicates the tracking status that applied to the corresponding request.

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

- `!`
  - : Under construction. The origin server is currently testing its communication of
    tracking status.
- `?`
  - : Dynamic. The origin server needs more information to determine tracking status.
- `G`
  - : Gateway or multiple parties. The server is acting as a gateway to an exchange
    involving multiple parties.
- `N`
  - : Not tracking.
- `T`
  - : Tracking.
- `C`
  - : Tracking with consent. The origin server believes it has received prior consent for
    tracking this user, user agent, or device.
- `P`
  - : Potential consent. The origin server does not know, in real-time, whether it has
    received prior consent for tracking this user, user agent, or device, but promises not
    to use or share any `DNT:1` data until such consent has been determined,
    and further promises to delete or permanently de-identify within 48 hours any
    `DNT:1` data received for which such consent has not been received.
- `D`
  - : Disregarding DNT. The origin server is unable or unwilling to respect a tracking
    preference received from the requesting user agent.
- `U`
  - : Updated. The request resulted in a potential change to the tracking status
    applicable to this user, user agent, or device.

## Examples

A `Tk` header for a resource that claims not to be tracking would look like:

```http
Tk: N
```

## Specifications

{{specifications}}

## See also

- {{HTTPHeader("DNT")}} header
- {{domxref("Navigator.doNotTrack")}}
- [Do Not Track on Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [What Does the "Track" in "Do Not Track" Mean? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT on Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [Enabling GPC in Firefox](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
