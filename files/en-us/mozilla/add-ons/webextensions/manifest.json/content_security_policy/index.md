---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
tags:
  - Add-ons
  - Extensions
  - WebExtensions
browser-compat: webextensions.manifest.content_security_policy
---
{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"content_security_policy": "default-src 'self'"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Extensions have a content security policy applied to them by default. The default policy restricts the sources from which they can load [\<script>](/en-US/docs/Web/HTML/Element/script) and [\<object>](/en-US/docs/Web/HTML/Element/object) resources, and disallows potentially unsafe practices such as the use of [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval). See [Default content security policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy) to learn more about the implications of this.

You can use the `"content_security_policy"` manifest key to loosen or tighten the default policy. This key is specified in just the same way as the Content-Security-Policy HTTP header. See [Using Content Security Policy](/en-US/docs/Web/HTTP/CSP) for a general description of CSP syntax.

For example, you can use this key to:

- Allow the extension to load scripts and objects from outside its package, by supplying their URL in the {{CSP("script-src")}} or {{CSP("object-src")}} directives.
- Allow the extension to execute inline scripts, by [supplying the hash of the script in the `"script-src"` directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script).
- Allow the extension to use `eval()` and similar features, by including `'unsafe-eval'` in the {{CSP("script-src")}} directive.
- Restrict permitted sources for other types of content, such as images and stylesheets, using the appropriate [policy directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

There are restrictions on the policy you can specify here:

- The policy must include at least the {{CSP("script-src")}} and the {{CSP("object-src")}} directives, and the {{CSP("script-src")}} directive must contain the keyword `'self'`.
- Remote sources must use `https:` schemes.
- Remote sources must not use wildcards for any domains in the [public suffix list](https://publicsuffix.org/list/) (so "\*.co.uk" and "\*.blogspot.com" are not allowed, although "\*.foo.blogspot.com" is allowed).
- All sources must specify a host.
- The only permitted schemes for sources are: `blob:`, `filesystem:`, `moz-extension:`, `https:`, and `wss:`.
- The only permitted [keywords](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src#sources) are: `'none'`, `'self'`, and `'unsafe-eval'`.

## Example

### Valid examples

> **Note:** Valid examples demonstrate the correct use of keys in CSP. However, extensions with 'unsafe-eval', remote script, blob, or remote sources in their CSP are not allowed for Firefox extensions as per the [add-on policies](https://extensionworkshop.com/documentation/publish/add-on-policies/) and due to major security issues.

Allow remote scripts from "https\://example.com":

```json
"content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
```

Allow remote scripts from any subdomain of "jquery.com":

```json
"content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
```

Allow [`eval()` and friends](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval%28%29_and_friends):

```json
"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
```

Allow the inline script: `"<script>alert('Hello, world.');</script>"`:

```json
"content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
```

Keep the rest of the policy, but also require that images should be packaged with the extension:

```json
"content_security_policy": "script-src 'self'; object-src 'self'; img-src 'self'"
```

Require that all types of content should be packaged with the extension:

```json
"content_security_policy": "default-src 'self'"
```

### Invalid examples

Policy that omits the `"object-src"` directive:

```json
"content_security_policy": "script-src 'self' https://*.jquery.com;"
```

Policy that omits the `"self"` keyword in the `"script-src"` directive:

```json
"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"
```

Scheme for a remote source is not `https`:

```json
"content_security_policy": "script-src 'self' http://code.jquery.com; object-src 'self'"
```

Wildcard is used with a generic domain:

```json
"content_security_policy": "script-src 'self' https://*.blogspot.com; object-src 'self'"
```

Source specifies a scheme but no host:

```json
"content_security_policy": "script-src 'self' https:; object-src 'self'"
```

Directive includes the unsupported keyword `'unsafe-inline'`:

```json
"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"
```

## Browser compatibility

{{Compat}}
