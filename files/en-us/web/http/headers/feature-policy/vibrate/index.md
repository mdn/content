---
title: 'Feature-Policy: vibrate'
slug: Web/HTTP/Headers/Feature-Policy/vibrate
tags:
  - Directive
  - Feature-Policy
  - HTTP
  - Reference
  - Vibration API
  - Experimental
  - Deprecated
  - Non-standard
browser-compat: http.headers.Feature-Policy.vibrate
---
{{HTTPSidebar}} {{Deprecated_Header}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `vibrate` {{deprecated_inline}} directive controls whether the current document is allowed to trigger device vibrations via {{DOMxRef("Navigator.vibrate","Navigator.vibrate()")}} method of [Vibration API](/en-US/docs/Web/API/Vibration_API).

## Syntax

```
Feature-Policy: vibrate <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `vibrate` is `'self'`.

## Specifications

| Specification                            | Status                               | Comment             |
| ---------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('Feature Policy')}} | {{Spec2('Feature Policy')}} | Initial definition. |

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- [Vibration API](/en-US/docs/Web/API/Vibration_API)
- {{DOMxRef("Navigator.vibrate","Navigator.vibrate()")}}
