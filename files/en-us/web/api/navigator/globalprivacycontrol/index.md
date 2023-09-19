---
title: "Navigator: globalPrivacyControl property"
short-title: globalPrivacyControl
slug: Web/API/Navigator/globalPrivacyControl
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.Navigator.globalPrivacyControl
---

{{APIRef("DOM")}}{{SeeCompatTable}}{{Non-standard_header}}

The **`Navigator.globalPrivacyControl`** read-only property returns the user's Global Privacy Control setting for the current website.
This setting indicates whether the user consents to the website or service selling or sharing their personal information with third parties.

The value of the property reflects that of the {{httpheader("Sec-GPC")}} HTTP header.

## Value

- `1`
  - : User _does not_ provide consent to sell or share their data.
- `0`
  - : User either _does_ provide consent to sell or share their data, or has not indicated a preference.

## Example

```js
console.log(navigator.globalPrivacyControl);
// prints "1" indicating user does not want their data shared or sold.
// prints "0" if the user consents to their data being shared or sold.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Sec-GPC")}} header
- [globalprivacycontrol.org](https://globalprivacycontrol.org/)
- [Global Privacy Control Spec](https://privacycg.github.io/gpc-spec/)
- [Do Not Track on Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
