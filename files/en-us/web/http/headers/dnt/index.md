---
title: DNT
slug: Web/HTTP/Headers/DNT
tags:
  - DNT
  - HTTP
  - Reference
  - header
browser-compat: http.headers.DNT
---
{{HTTPSidebar}}{{Deprecated_header}}

The **`DNT`** (**D**o **N**ot
**T**rack) request header indicates the user's tracking preference. It lets
users indicate whether they would prefer privacy rather than personalized content.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```
DNT: 0
DNT: 1
DNT: null
```

## Directives

- 0
  - : The user prefers to allow tracking on the target site.
- 1
  - : The user prefers not to be tracked on the target site.
- null
  - : The user has not specified a preference about tracking.

## Examples

### Reading Do Not Track status from JavaScript

The user's DNT preference can also be read from JavaScript using the
{{domxref("Navigator.doNotTrack")}} property:

```js
navigator.doNotTrack; // "0" or "1"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Navigator.doNotTrack")}}
- {{HTTPHeader("Tk")}} header
- [Do Not Track on Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [What Does the "Track" in "Do Not Track" Mean? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [donottrack.us](https://donottrack.us/)
- DNT browser settings help:
  - [Firefox](https://www.mozilla.org/en-US/firefox/dnt/)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
