---
title: Sec-GPC
slug: Web/HTTP/Headers/Sec-GPC
page-type: http-header
status:
  - experimental
  - non-standard
browser-compat: http.headers.Sec-GPC
spec-urls: https://privacycg.github.io/gpc-spec/
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

The **`Sec-GPC`** ([**G**lobal **P**rivacy **C**ontrol](https://globalprivacycontrol.org/)) request header indicates whether the user consents to a website or service selling or sharing their personal information with third parties.

The specification does not define how the user can withdraw or grant consent for website.
Where possible the mechanism will be indicated in the [browser compatibility](#browser_compatibility) section below.

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

```http
Sec-GPC: 1
```

## Directives

The `Sec-GPC` is header is sent with a value of `1` if the user has indicated that they prefer their information not be shared with, or sold to, third parties.

Otherwise, the header is not sent, which indicates that either the user has not made a decision or the user is okay with their information being shared with or sold to third parties.

## Examples

### Reading Global Privacy Control status from JavaScript

The user's GPC preference can also be read from JavaScript using the {{domxref("Navigator.globalPrivacyControl")}} or {{domxref("WorkerNavigator.globalPrivacyControl")}} property:

```js
navigator.globalPrivacyControl; // "false" or "true"
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
