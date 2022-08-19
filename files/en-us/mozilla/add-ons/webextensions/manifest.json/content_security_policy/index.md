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
      <th scope="row">Manifest version</th>
      <td>2 or higher</td>
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
- Allow the extension to execute inline scripts, by [supplying the hash of the script in the `script-src` directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script).
- Allow the extension to use `eval()` and similar features, by including `'unsafe-eval'` in the {{CSP("script-src")}} directive.
- Restrict permitted sources for other types of content, such as images and stylesheets, using the appropriate [policy directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).
- Allow the extension to take advantage of [WebAssembly](/en-US/docs/WebAssembly) by including the `'wasm-unsafe-eval'` source in the `script-src` directive.

There are restrictions on the policy you can specify here:

- The policy may include just {{CSP("default-src")}}, but if not the policy must include at least the {{CSP("script-src")}} and the {{CSP("object-src")}} directives, and the {{CSP("script-src")}} directive must contain the keyword `'self'`.
- Directives that reference code – {{CSP("script-src")}}, {{CSP("object-src")}}, {{CSP("worker-src")}}, and {{CSP("default-src")}} – can't specify wildcard hosts, such as `"default-src 'self' *"`. There are no wildcard restrictions on CSP directives that load non-script content, such as {{CSP("img-src")}} – wildcards are a valid content security policy value for regular web pages, so they are a valid value for extensions too.
- Remote sources must use `https:` schemes.
- Remote sources must not use wildcards for any domains in the [public suffix list](https://publicsuffix.org/list/) (so "\*.co.uk" and "\*.blogspot.com" are not allowed, although "\*.foo.blogspot.com" is allowed).
- All sources must specify a host.
- The only permitted schemes for sources are: `blob:`, `filesystem:`, `moz-extension:`, `https:`, and `wss:`.
- The only permitted [keywords](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src#sources) are: `'none'`, `'self'`, and `'unsafe-eval'`.

## Manifest V2 syntax

In Manifest V2 there is one content security policy specified against the key, like this:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3 syntax

In Manifest V3, the `content_security_policy` key is an object that may have any of the following properties, all optional:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>extension_pages</code></td>
      <td><code>String</code></td>
      <td>
        The content security policy used for extension pages. The <code>script-src</code>, <code>object-src</code>, and <code>worker-src</code> directives may only have these values:
        <ul>
          <li><code>self</code></li>
          <li><code>none</code></li>
          <li>Any localhost source, (<code>http://localhost</code>, <code>http://127.0.0.1</code>, or any port on those domains.)</li>
        </ul>
      </td>
    </tr>
   <tr>
      <td><code>sandbox</code></td>
      <td><code>String</code></td>
      <td>
        The content security policy used for sandboxed extension pages.
      </td>
    </tr>
  </tbody>
</table>

## Example

### Valid examples

> **Note:** Valid examples demonstrate the correct use of keys in CSP.
> However, extensions with 'unsafe-eval', remote script, blob, or remote sources in their CSP are not allowed for Firefox extensions as per the [add-on policies](https://extensionworkshop.com/documentation/publish/add-on-policies/) and due to major security issues.

Require that all types of content should be packaged with the extension:

**Manifest V2**

```json
"content_security_policy": "default-src 'self'"
```

**Manifest V3**

```json
"content_security_policy": {
  "extension_pages": "default-src 'self'"
} 
```

Allow remote scripts from "https://example.com":

**Manifest V2**

```json
"content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
```

**Manifest V3**

```json
"content_security_policy": {
  "extension_pages": "script-src 'self' https://example.com; object-src 'self'"
} 
```

Allow remote scripts from any subdomain of "jquery.com":

**Manifest V2**

```json
"content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
```

**Manifest V3**

```json
"content_security_policy": {
  "extension_pages": "script-src 'self' https://*.jquery.com; object-src 'self'"
} 
```

Allow [`eval()` and friends](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval%28%29_and_friends):

**Manifest V2**

```json
"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
```

**Manifest V3**

```json
"content_security_policy": {
  "extension_pages": "script-src 'self' 'unsafe-eval'; object-src 'self';"
} 
```

Allow the inline script: `"<script>alert('Hello, world.');</script>"`:

**Manifest V2**

```json
"content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
```

**Manifest V3**

```json
"content_security_policy": {
  "extension_pages": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
} 
```

Keep the rest of the policy, but also require that images should be packaged with the extension:

**Manifest V2**

```json
"content_security_policy": "script-src 'self'; object-src 'self'; img-src 'self'"
```

**Manifest V3**

```json
"content_security_policy": {
  "extension_pages": "script-src 'self'; object-src 'self'; img-src 'self'"
} 
```

Enable the use of [WebAssembly](/en-US/docs/WebAssembly):

**Manifest V2**

For backward compatibility, Manifest V2 extensions can use WebAssembly without the use of `'wasm-unsafe-eval'`. However, if the extension uses WebAssembly, the inclusion of `'wasm-unsafe-eval'` is recommended. See [WebAssembly](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly) on the Content Security Policy page for more information.

```json
"content_security_policy": "script-src 'self' 'wasm-unsafe-eval'"
```

**Manifest V3**

```json
"content_security_policy": {
  "extension_pages": "script-src 'self' 'wasm-unsafe-eval'"
}
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
