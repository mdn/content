---
title: "Permissions-Policy: language-model directive"
short-title: language-model
slug: Web/HTTP/Reference/Headers/Permissions-Policy/language-model
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.language-model
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `language-model` directive controls access to the [Prompt API](/en-US/docs/Web/API/Prompt_API).

Specifically, where a defined policy blocks usage, the {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}} static method will return `unavailable`, and any attempts to call other `LanguageModel` methods will fail with a `NotAllowedError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: language-model=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `language-model` is `self`. The top-level browsing context and same-origin iframes are allowed access to the Prompt API by default.

## Examples

### Basic usage

SecureCorp Inc. wants to disallow `language-model` within all cross-origin iframes except those whose origin is `https://example.com`. It can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: language-model=(self "https://example.com")
```

SecureCorp Inc. must also include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on each `<iframe>` element where `language-model` is to be allowed:

```html
<iframe src="https://example.com/blue" allow="language-model"></iframe>
```

> [!NOTE]
> Specifying the `Permissions-Policy` header in this manner disallows `language-model` for other origins, even if they are allowed by the `<iframe>` `allow` attribute.

### Using the default policy

If an allowlist for `language-model` is not defined by a `Permissions-Policy` response header, user agents will apply the default allowlist `self`. In this mode, `language-model` is automatically allowed in the top-level browsing context and same-origin iframes, but not in cross-origin iframes.

To allow `language-model` in a cross-origin iframe, include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on the `<iframe>` element:

```html
<iframe src="https://other.com/blue" allow="language-model"></iframe>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
