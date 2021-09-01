---
title: 'Feature-Policy: screen-wake-lock'
slug: Web/HTTP/Headers/Feature-Policy/screen-wake-lock
tags:
  - Directive
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Reference
  - screen-wake-lock
  - Experimental
browser-compat: http.headers.Feature-Policy.screen-wake-lock
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header **`screen-wake-lock`** directive controls whether the current document is allowed to use [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API) to indicate that device should not dim or turn off the screen.

> **Note:** In earlier specification drafts this directive was called `wake-lock`")}}.

## Syntax

```
Feature-Policy: screen-wake-lock <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `screen-wake-lock` is `'self'`.

## Specifications

| Specification                                                                                         | Status                               | Comment                                                     |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------------- |
| {{SpecName('Feature Policy')}}                                                              | {{Spec2('Feature Policy')}} | Initial definition.                                         |
| [Screen Wake Lock API](https://w3c.github.io/screen-wake-lock/#the-screen-wake-lock-powerful-feature) | Editor's Draft                       | Initial definition of `screen-wake-lock` feature directive. |

## Browser compatibility

{{Compat}}

## See also

- [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API)
- {{HTTPHeader('Feature-Policy')}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- [Default value of the allow list](https://www.w3.org/TR/wake-lock/#wake-locks)
