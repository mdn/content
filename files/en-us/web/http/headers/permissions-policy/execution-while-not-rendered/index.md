---
title: "Permissions-Policy: execution-while-not-rendered"
slug: Web/HTTP/Headers/Permissions-Policy/execution-while-not-rendered
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.execution-while-not-rendered
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `execution-while-not-rendered` directive controls whether tasks should execute in frames while they're not being rendered (e.g. if an iframe is [`hidden`](/en-US/docs/Web/HTML/Global_attributes/hidden) or has `display: none` set).

Specifically, where a defined policy blocks execution of task rendering while content is not being rendered, while that condition is true, that content will be put in the frozen state as defined in the [Page Lifecycle API](https://developer.chrome.com/blog/page-lifecycle-api). This stops execution of freezable tasks such as JavaScript timers (e.g. {{domxref("setTimeout()")}}) and {{domxref("fetch()")}} callbacks.

## Syntax

```http
Permissions-Policy: execution-while-not-rendered=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `execution-while-not-rendered` is `*`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
