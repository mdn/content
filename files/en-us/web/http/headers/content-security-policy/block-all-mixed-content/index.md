---
title: "CSP: block-all-mixed-content"
slug: Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content
page-type: http-csp-directive
status:
  - deprecated
browser-compat: http.headers.Content-Security-Policy.block-all-mixed-content
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> This directive is marked as obsolete in the specification.
> This directive was previously used to prevent "optionally blockable" mixed content from being fetched insecurely and displayed.
> Content that isn't blocked is now always upgraded to a secure connection, so this directive is not needed.

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`** directive prevents loading any assets over HTTP when the page uses HTTPS.

All [mixed content](/en-US/docs/Web/Security/Mixed_content) resource requests are blocked, including both blockable and upgradable mixed content.
This also applies to {{HTMLElement("iframe")}} documents, ensuring the entire page is mixed content-free.

> [!NOTE]
> The {{CSP("upgrade-insecure-requests")}} directive is evaluated before `block-all-mixed-content`.
> If the former is set, the latter does nothing, so set one directive or the other – not both, unless you want to force HTTPS on older browsers that do not force it after a redirect to HTTP.

## Syntax

```http
Content-Security-Policy: block-all-mixed-content;
```

## Examples

```http
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

To disallow http assets on a more granular level, you can also set individual directives to `https:`.
For example, to disallow insecure HTTP images:

```http
Content-Security-Policy: img-src https:
```

## Specifications

Not part of any current specification.
Used to be defined in the outdated [Mixed Content Level 1](https://www.w3.org/TR/2015/CR-mixed-content-20150317/#strict-opt-in) specification.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [Mixed content](/en-US/docs/Web/Security/Mixed_content)
