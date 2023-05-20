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

The **`Navigator.globalPrivacyControl`** property returns the user's Global Privacy Control setting. This setting indicates whether the user consents to a website or service selling or sharing their personal information with third parties.

The value of the property reflects that of the {{httpheader("Sec-GPC")}} HTTP header.

| Sec-GPC Value | Meaning                                                      |
| ------------- | ------------------------------------------------------------ |
| 1             | User _does not_ provide consent to sell or share their data. |
| 0             | User _does_ provide consent to sell or share their data.     |
| unspecified   | User has not yet provided consent with regard to their data. |

## Example

```js
console.log(navigator.globalPrivacyControl);
// prints "1" indicating user does not want their data shared or sold.
// prints "0" if the user consents to their data being shared or sold.
// prints "unspecified" if Sec-GPC header is not present.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Sec-GPC")}} header
- [globalprivacycontrol.org](https://globalprivacycontrol.org/)
- [Global Privacy Control Spec](https://globalprivacycontrol.github.io/gpc-spec/)
- [Do Not Track on Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
