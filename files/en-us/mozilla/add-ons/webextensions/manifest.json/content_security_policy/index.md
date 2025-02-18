---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
page-type: webextension-manifest-key
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
        Manifest V2:
        <pre class="brush: json">
"content_security_policy": "default-src 'self'"</pre>
        Manifest V3:
        <pre class="brush: json">
"content_security_policy": {
  "extension_pages": "default-src 'self'"
}</pre>
      </td>
    </tr>
  </tbody>
</table>

Extensions have a content security policy (CSP) applied to them by default. The default policy restricts the sources from which extensions can load code (such as [\<script>](/en-US/docs/Web/HTML/Element/script) resources) and disallows potentially unsafe practices such as the use of [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval). See [Default content security policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy) to learn more about the implications of this.

You can use the `"content_security_policy"` manifest key to loosen or tighten the default policy. This key is specified in the same way as the Content-Security-Policy HTTP header. See [Using Content Security Policy](/en-US/docs/Web/HTTP/CSP) for a general description of CSP syntax.

For example, you can use this key to:

- Restrict permitted sources for other types of content, such as images and stylesheets, using the appropriate [policy directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).
- Allow the extension to take advantage of [WebAssembly](/en-US/docs/WebAssembly) by including the `'wasm-unsafe-eval'` source in the `script-src` directive.
- Loosen the default {{CSP("script-src")}} policies (Manifest V2 only):
  - Allow the extension to load scripts from outside its package by supplying their URL in the {{CSP("script-src")}} directive.
  - Allow the extension to execute inline scripts by [supplying the hash of the script in the `script-src` directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script).
  - Allow the extension to use `eval()` and similar features by including `'unsafe-eval'` in the {{CSP("script-src")}} directive.

There are restrictions on the policy you can specify with this manifest key:

- The {{CSP("script-src")}} directive must include at least the `'self'` keyword and may only contain secure sources. The set of permitted secure sources differs between Manifest V2 and Manifest V3.
- The policy may include {{CSP("default-src")}} alone (without {{CSP("script-src")}}) if its sources meet the requirement for the {{CSP("script-src")}} directive.
- The {{CSP("object-src")}} keyword may be required, see [object-src directive](#object-src_directive) for details.
- Directives that reference code – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}}, and {{CSP("default-src")}} (if used as a fallback) – share the same secure source requirement. There are no restrictions on CSP directives that cover non-script content, such as {{CSP("img-src")}}.

In Manifest V3, all CSP sources that refer to external or non-static content are forbidden. The only permitted values are `'none'`, `'self'`, and `'wasm-unsafe-eval'`.
In Manifest V2, a source for a script directive is considered secure if it meets these criteria:

- Wildcard hosts are not permitted, such as `"script-src 'self' *"`.
- Remote sources must use `https:` schemes.
- Remote sources must not use wildcards for any domains in the [public suffix list](https://publicsuffix.org/list/) (so `*.co.uk` and `*.blogspot.com` are not allowed, although `*.foo.blogspot.com` is permitted).
- All sources must specify a host.
- The only permitted schemes for sources are `blob:`, `filesystem:`, `moz-extension:`, `https:`, and `wss:`.
- The only permitted [keywords](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directive_syntax) are: `'none'`, `'self'`, `'unsafe-eval'`, and `'wasm-unsafe-eval'`.

## object-src directive

The `{{CSP("object-src")}}` directive may be required in some browsers that support obsolete [plugins](/en-US/docs/Glossary/Plugin) and should be set to a secure source such as `'none'` if needed. This may be necessary for browsers up until 2022.

- In Firefox, `"object-src"` it optional from Firefox 106. In earlier versions, if `"object-src"` isn't specified, `"content_security_policy"` is ignored and the default CSP used.
- In Chrome, `"object-src"` is required. If it's missing or deemed insecure, the default (`"object-src 'self'"`) is used and a warning message logged.
- In Safari, there is no requirement for `"object-src"`.

See W3C WebExtensions Community Group [issue 204](https://github.com/w3c/webextensions/issues/204), Remove object-src from the CSP, for more information.

## Manifest V2 syntax

In Manifest V2, there is one content security policy specified against the key like this:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3 syntax

In Manifest V3, the `content_security_policy` key is an object that may have any of these properties, all optional:

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
        The content security policy used for extension pages. The <code>script-src</code> and <code>worker-src</code> directives may only have these values:
        <ul>
          <li><code>'self'</code></li>
          <li><code>'none'</code></li>
          <li><code>'wasm-unsafe-eval'</code></li>
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

## Examples

### Valid examples

> [!NOTE]
> Valid examples demonstrate the correct use of keys in CSP.
> However, extensions with 'unsafe-eval', remote script, blob, or remote sources in their CSP are not allowed for Firefox extensions per the [add-on policies](https://extensionworkshop.com/documentation/publish/add-on-policies/) and due to significant security issues.

> [!NOTE]
> Some examples include the `{{CSP("object-src")}}` directive, which provides backward compatibility for older browser versions. See [object-src directive](#object-src_directive) for more details.

Require that all types of content should be packaged with the extension:

- Manifest V2

  ```json
  "content_security_policy": "default-src 'self'"
  ```

- Manifest V3

  ```json
  "content_security_policy": {
    "extension_pages": "default-src 'self'"
  }
  ```

Allow remote scripts from "https://example.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
  ```

- Manifest V3 does not allow remote URLs in `script-src` of `extension_pages`.

Allow remote scripts from any subdomain of "jquery.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 does not allow remote URLs in `script-src` of `extension_pages`.

Allow [`eval()` and friends](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval%28%29_and_friends):

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
  ```

- Manifest V3 does not allow `'unsafe-eval'` in `script-src`.

Allow the inline script: `"<script>alert('Hello, world.');</script>"`:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
  ```

- Manifest V3 does not allow CSP hashes in `script-src` of `extension_pages`.

Keep the rest of the policy, but also require that images should be packaged with the extension:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self'; object-src 'self'; img-src 'self'"
  ```

- Manifest V3

  ```json
  "content_security_policy": {
    "extension_pages": "script-src 'self'; img-src 'self'"
  }
  ```

Enable the use of [WebAssembly](/en-US/docs/WebAssembly):

- Manifest V2

  For backward compatibility, Manifest V2 extensions in Firefox can use WebAssembly without the use of `'wasm-unsafe-eval'`. However, this behavior isn't guaranteed. See [Firefox bug 1770909](https://bugzil.la/1770909). Extensions using WebAssembly are therefore encouraged to declare `'wasm-unsafe-eval'` in their CSP. See [WebAssembly](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly) on the Content Security Policy page for more information.

  ```json
  "content_security_policy": "script-src 'self' 'wasm-unsafe-eval'"
  ```

- Manifest V3

  ```json
  "content_security_policy": {
    "extension_pages": "script-src 'self' 'wasm-unsafe-eval'"
  }
  ```

### Invalid examples

Policy that omits the `"object-src"` directive:

```json example-bad
"content_security_policy": "script-src 'self' https://*.jquery.com;"
```

However, this is only invalid in browsers that support obsolete [plugins](/en-US/docs/Glossary/Plugin). See [object-src directive](#object-src_directive) for more details.

Policy that omits the `"self"` keyword in the `"script-src"` directive:

```json example-bad
"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"
```

Scheme for a remote source is not `https`:

```json example-bad
"content_security_policy": "script-src 'self' http://code.jquery.com; object-src 'self'"
```

Wildcard is used with a generic domain:

```json example-bad
"content_security_policy": "script-src 'self' https://*.blogspot.com; object-src 'self'"
```

Source specifies a scheme but no host:

```json example-bad
"content_security_policy": "script-src 'self' https:; object-src 'self'"
```

Directive includes the unsupported keyword `'unsafe-inline'`:

```json example-bad
"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"
```

## Browser compatibility

{{Compat}}
