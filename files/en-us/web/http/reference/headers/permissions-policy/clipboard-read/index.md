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

SecureCorp Inc. must also include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on each `<iframe>` element hosting content from `https://example.com` that needs to read the clipboard:

```html
<iframe src="https://example.com/notes-app" allow="clipboard-read"></iframe>
```

With this header and `allow` attribute:

- The top-level document and same-origin iframes can read the clipboard.
  Same-origin iframes don't need the `allow` attribute.
- iframes hosting content from `https://example.com` can read the clipboard.
  Without the `allow` attribute they couldn't, because `https://example.com` isn't in the default allowlist (`self`).
- iframes hosting content from any other origin can't read the clipboard, even if they set `allow="clipboard-read"`, because the header's allowlist doesn't include their origin.

See [Default allowlists](/en-US/docs/Web/HTTP/Guides/Permissions_Policy#default_allowlists) and [Inheritance of policies for embedded content](/en-US/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) in the Permissions Policy guide for more information.

### Using the default policy

If no `Permissions-Policy` header sets an allowlist for `clipboard-read`, the default allowlist `self` applies.
This enables the feature in the top-level document and in same-origin iframes. The feature can also be used in cross-origin iframes if they have the `allow` attribute set:

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
