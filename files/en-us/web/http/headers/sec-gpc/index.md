---
title: Sec-GPC
slug: Web/HTTP/Headers/Sec-GPC
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Sec-GPC
---

{{HTTPSidebar}}{{SeeCompatTable}}

The **`Sec-GPC`** (**G**lobal **P**rivacy **C**ontrol) request header indicates whether the user consents to a website or service selling or sharing their personal information with third parties.

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
Sec-GPC: 1
```

## Directives

If `Sec-GPC` is enabled the header is sent with a value of `1` indicating the user prefers their information not be shared with or sold to third parties. Otherwise, the header is not sent to indicate the user has not made a decision or the user is okay with their information being shared with or sold to third parties.

## Examples

### Reading Global Privacy Control status from JavaScript

The user's GPC preference can also be read from JavaScript using the {{domxref("Navigator.globalPrivacyControl")}} property:

```js
navigator.globalPrivacyControl; // "0" or "1"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Navigator.globalPrivacyControl")}}
- {{HTTPHeader("DNT")}} header
- {{HTTPHeader("Tk")}} header
- [globalprivacycontrol.org](https://globalprivacycontrol.org/)
- [Global Privacy Control Spec](https://privacycg.github.io/gpc-spec/)
- [Do Not Track on Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
