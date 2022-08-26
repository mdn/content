---
title: 'CSP: script-src'
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
tags:
  - CSP
  - Content
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Script
  - Security
  - script-src
  - source
browser-compat: http.headers.Content-Security-Policy.script-src
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** directive specifies valid sources for JavaScript. This includes not only URLs loaded directly into {{HTMLElement("script")}} elements, but also things like inline script event handlers (`onclick`) and [XSLT stylesheets](/en-US/docs/Web/XSLT) which can trigger script execution.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} fallback</th>
      <td>
        Yes. If this directive is absent, the user agent will look for the
        <code>default-src</code> directive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

One or more sources can be allowed for the `script-src` policy:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src <source> <source>;
```

### Sources

`<source>` can be any one of the values listed in [CSP Source Values](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

Note that this same set of values can be used in all {{Glossary("fetch directive", "fetch directives")}} (and a [number of other directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

## Examples

### Violation case

Given this CSP header:

```http
Content-Security-Policy: script-src https://example.com/
```

the following script is blocked and won't be loaded or executed:

```html
<script src="https://not-example.com/js/library.js"></script>
```

Note that inline event handlers are blocked as well:

```html
<button id="btn" onclick="doSomething()">
```

You should replace them with {{domxref("EventTarget.addEventListener", "addEventListener")}} calls:

```js
document.getElementById("btn").addEventListener('click', doSomething);
```

### Unsafe inline script

> **Note:** Disallowing inline styles and inline scripts is one of the biggest security wins CSP provides. However, if you absolutely have to use it, there are a few mechanisms that will allow them.

To allow inline scripts and inline event handlers, `'unsafe-inline'`, a nonce-source or a hash-source that matches the inline block can be specified.

```http
Content-Security-Policy: script-src 'unsafe-inline';
```

The above Content Security Policy will allow inline {{HTMLElement("script")}} elements

```html
<script>
  const inline = 1;
  // …
</script>
```

You can use a nonce-source to only allow specific inline script blocks:

```http
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

You will have to set the same nonce on the {{HTMLElement("script")}} element:

```html
<script nonce="2726c7f26c">
  const inline = 1;
  // …
</script>
```

Alternatively, you can create hashes from your inline scripts. CSP supports sha256, sha384 and sha512.

```http
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

When generating the hash, don't include the {{HTMLElement("script")}} tags and note that capitalization and whitespace matter, including leading or trailing whitespace.

```html
<script>const inline = 1;</script>
```

### Unsafe eval expressions

The `'unsafe-eval'` source expression controls several script execution methods that create code from strings. If `'unsafe-eval'` isn't specified with the `script-src` directive, the following methods are blocked and won't have any effect:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- When passing a string literal like to methods like: `setTimeout("alert(\"Hello World!\");", 500);`

  - {{domxref("setTimeout()")}}
  - {{domxref("setInterval()")}}
  - {{domxref("window.setImmediate")}}

- `window.execScript()` {{non-standard_inline}} (IE < 11 only)

### strict-dynamic

The `'strict-dynamic'` source expression specifies that the trust explicitly given to a script present in the markup, by accompanying it with a nonce or a hash, shall be propagated to all the scripts loaded by that root script. At the same time, any allowlist or source expressions such as `'self'` or `'unsafe-inline'` will be ignored. For example, a policy such as `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` would allow loading of a root script with `<script nonce="R4nd0m" src="https://example.com/loader.js">` and propagate that trust to any script loaded by `loader.js`, but disallow loading scripts from `https://allowlisted.example.com/` unless accompanied by a nonce or loaded from a trusted script.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Or:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

It is possible to deploy `strict-dynamic` in a backwards compatible way, without requiring user-agent sniffing.
The policy:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

will act like `'unsafe-inline' https:` in browsers that support CSP1, `https: 'nonce-abcdefg'` in browsers that support CSP2, and `'nonce-abcdefg' 'strict-dynamic'` in browsers that support CSP3.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
