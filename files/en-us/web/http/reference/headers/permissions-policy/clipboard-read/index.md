---
title: "Permissions-Policy: clipboard-read directive"
short-title: clipboard-read
slug: Web/HTTP/Reference/Headers/Permissions-Policy/clipboard-read
page-type: http-permissions-policy-directive
status:
  - non-standard
browser-compat: http.headers.Permissions-Policy.clipboard-read
sidebar: http
---

{{non-standard_header}}

The HTTP {{HTTPHeader('Permissions-Policy')}} header `clipboard-read` directive controls whether the current document is allowed to read data from the system clipboard using the {{domxref("Clipboard.read", "read()")}} and {{domxref("Clipboard.readText", "readText()")}} methods of the [Clipboard API](/en-US/docs/Web/API/Clipboard_API), without further user permission.

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

SecureCorp Inc. must also include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on each `<iframe>` element where `clipboard-read` is to be allowed:

```html
<iframe src="https://example.com/notes-app" allow="clipboard-read"></iframe>
```

> [!NOTE]
> Specifying the `Permissions-Policy` header in this manner disallows `clipboard-read` for other origins, even if they are allowed by the `<iframe>` `allow` attribute.

### Using the default policy

If an allowlist for `clipboard-read` is not defined by a `Permissions-Policy` response header, user agents will apply the default allowlist `self`.
In this mode, `clipboard-read` is automatically allowed in the top-level browsing context and same-origin iframes, but not in cross-origin iframes.

To allow `clipboard-read` in a cross-origin iframe, include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on the `<iframe>` element:

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
