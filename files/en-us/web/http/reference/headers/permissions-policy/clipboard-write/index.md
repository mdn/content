---
title: "Permissions-Policy: clipboard-write directive"
short-title: clipboard-write
slug: Web/HTTP/Reference/Headers/Permissions-Policy/clipboard-write
page-type: http-permissions-policy-directive
browser-compat: http.headers.Permissions-Policy.clipboard-write
sidebar: http
---

The HTTP {{HTTPHeader('Permissions-Policy')}} header `clipboard-write` directive controls whether the current document is allowed to write data to the system clipboard using the {{domxref("Clipboard.write", "write()")}} and {{domxref("Clipboard.writeText", "writeText()")}} methods of the [Clipboard API](/en-US/docs/Web/API/Clipboard_API).

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

SecureCorp Inc. must also include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on each `<iframe>` element hosting content from `https://example.com` that needs to write to the clipboard:

```html
<iframe src="https://example.com/copy-widget" allow="clipboard-write"></iframe>
```

With this header and `allow` attribute:

- The top-level document and same-origin iframes can write to the clipboard.
  Same-origin iframes don't need the `allow` attribute.
- iframes hosting content from `https://example.com` can write to the clipboard.
  Without the `allow` attribute they couldn't, because `https://example.com` isn't in the default allowlist (`self`).
- iframes hosting content from any other origin can't write to the clipboard, even if they set `allow="clipboard-write"`, because the header's allowlist doesn't include their origin.

See [Default allowlists](/en-US/docs/Web/HTTP/Guides/Permissions_Policy#default_allowlists) and [Inheritance of policies for embedded content](/en-US/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) in the Permissions Policy guide for more information.

### Using the default policy

If no `Permissions-Policy` header sets an allowlist for `clipboard-write`, the default allowlist `self` applies.
This enables the feature in the top-level document and in same-origin iframes. The feature can also be used in cross-origin iframes if they have the `allow` set:

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
