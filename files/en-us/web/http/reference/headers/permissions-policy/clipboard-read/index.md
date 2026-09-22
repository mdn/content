---
title: "Permissions-Policy: clipboard-read directive"
short-title: clipboard-read
slug: Web/HTTP/Reference/Headers/Permissions-Policy/clipboard-read
page-type: http-permissions-policy-directive
browser-compat: http.headers.Permissions-Policy.clipboard-read
sidebar: http
---

The HTTP {{HTTPHeader('Permissions-Policy')}} header `clipboard-read` directive controls whether the current document is allowed to read data from the system clipboard using the {{domxref("Clipboard.read", "read()")}} and {{domxref("Clipboard.readText", "readText()")}} methods of the [Clipboard API](/en-US/docs/Web/API/Clipboard_API).

Specifically, where a defined policy blocks usage of this feature, `read()` and `readText()` calls will reject with a `NotAllowedError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: clipboard-read=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature.
    See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `clipboard-read` is `self`.

## Examples

### Basic usage

SecureCorp Inc. wants to disallow `clipboard-read` within all cross-origin iframes except those whose origin is `https://example.com`.
It can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: clipboard-read=(self "https://example.com")
```

This enables `clipboard-read` in the top-level document, and also by default in same-origin iframes (because if the `allow` attribute is not specified on an `<iframe>` the default allowlist of `self` controls delegation).
The header also allows delegation to `https://example.com`, but that origin needs to be granted the feature explicitly, because it isn't present in default allowlist.

SecureCorp Inc. must therefore include an {{HTMLElement('iframe','allow','#Attributes')}} attribute for that origin on each `<iframe>` element where `clipboard-read` is to be allowed:

```html
<iframe src="https://example.com/notes-app" allow="clipboard-read"></iframe>
```

> [!NOTE]
> When the header specifies an allowlist, that allowlist is the maximum set of origins the feature can be delegated to.
> An `allow` attribute cannot grant the feature to an origin outside it.

### Using the default policy

If no `Permissions-Policy` header sets an allowlist for `clipboard-read`, the default allowlist `self` applies.
This enables the feature in the top-level document and in same-origin iframes, but not in cross-origin iframes.
Because no header restricts delegation, an `allow` attribute can enable the feature in any cross-origin iframe.

To allow `clipboard-read` in a cross-origin iframe, include it in the iframe's {{HTMLElement('iframe','allow','#Attributes')}} attribute on the `<iframe>` element:

```html
<iframe src="https://other.com/paste-tool" allow="clipboard-read"></iframe>
```

## Specifications

This feature is not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API security considerations](/en-US/docs/Web/API/Clipboard_API#security_considerations)
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
