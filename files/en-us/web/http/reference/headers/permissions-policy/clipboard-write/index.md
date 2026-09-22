---
title: "Permissions-Policy: clipboard-write directive"
short-title: clipboard-write
slug: Web/HTTP/Reference/Headers/Permissions-Policy/clipboard-write
page-type: http-permissions-policy-directive
status:
  - non-standard
browser-compat: http.headers.Permissions-Policy.clipboard-write
sidebar: http
---

{{non-standard_header}}

The HTTP {{HTTPHeader('Permissions-Policy')}} header `clipboard-write` directive controls whether the current document is allowed to write data to the system clipboard using the {{domxref("Clipboard.write", "write()")}} and {{domxref("Clipboard.writeText", "writeText()")}} methods of the [Clipboard API](/en-US/docs/Web/API/Clipboard_API), without further user permission.

Specifically, where a defined policy blocks usage of this feature, `write()` and `writeText()` calls will reject with a `NotAllowedError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: clipboard-write=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature.
    See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `clipboard-write` is `self`.

## Examples

### Basic usage

SecureCorp Inc. wants to disallow `clipboard-write` within all cross-origin iframes except those whose origin is `https://example.com`.
It can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: clipboard-write=(self "https://example.com")
```

This enables `clipboard-write` in the top-level document, and also by default in same-origin iframes (because if the `allow` attribute is not specified on and `<iframe>` the default allowlist of `self` controls delegation).
The header also allows delegation to `https://example.com`, but that origin needs to be granted the feature explicitly, because it isn't present in default allowlist.

SecureCorp Inc. must therefore include an {{HTMLElement('iframe','allow','#Attributes')}} attribute for that origin on each `<iframe>` element where `clipboard-write` is to be allowed:

```html
<iframe src="https://example.com/copy-widget" allow="clipboard-write"></iframe>
```

> [!NOTE]
> When the header specifies an allowlist, that allowlist is the maximum set of origins the feature can be delegated to.
> An `allow` attribute cannot grant the feature to an origin outside it.

### Using the default policy

If no `Permissions-Policy` header sets an allowlist for `clipboard-write`, the default allowlist `self` applies.
This enables the feature in the top-level document and in same-origin iframes, but not in cross-origin iframes.
Because no header restricts delegation, an `allow` attribute can enable the feature in any cross-origin iframe.

To allow `clipboard-write` in a cross-origin iframe, include it in the iframe's {{HTMLElement('iframe','allow','#Attributes')}} attribute on the `<iframe>` element:

```html
<iframe src="https://other.com/share-widget" allow="clipboard-write"></iframe>
```

## Specifications

This feature is not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API security considerations](/en-US/docs/Web/API/Clipboard_API#security_considerations)
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- {{domxref("Clipboard.write()")}}
- {{domxref("Clipboard.writeText()")}}
