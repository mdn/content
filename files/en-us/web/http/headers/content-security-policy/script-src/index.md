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
browser-compat: http.headers.csp.Content-Security-Policy.script-src
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

```
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src <source> <source>;
```

### Sources

- `<host-source>`

  - : Internet hosts by name or IP address, as well as an optional [URL scheme](/en-US/docs/Learn/Common_questions/What_is_a_URL) and/or port number. The site's address may include an optional leading wildcard (the asterisk character, `'*'`), and you may use a wildcard (again, `'*'`) as the port number, indicating that all legal ports are valid for the source.
    Examples:

    - `http://*.example.com`: Matches all attempts to load from any subdomain of example.com using the `http:` URL scheme.
    - `mail.example.com:443`: Matches all attempts to access port 443 on mail.example.com.
    - `https://store.example.com`: Matches all attempts to access store.example.com using `https:`.
    - `*.example.com`: Matches all attempts to load from any subdomain of example.com using the current protocol.

- `<scheme-source>`

  - : A scheme such as `http:` or `https:`. The colon is required. Unlike other values below, single quotes shouldn't be used. You can also specify data schemes (not recommended).

    - `data:` Allows [`data:` URIs](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) to be used as a content source. _This is insecure; an attacker can also inject arbitrary data: URIs. Use this sparingly and definitely not for scripts._
    - `mediastream:` Allows [`mediastream:` URIs](/en-US/docs/Web/API/Media_Streams_API) to be used as a content source.
    - `blob:` Allows [`blob:` URIs](/en-US/docs/Web/API/Blob) to be used as a content source.
    - `filesystem:` Allows [`filesystem:` URIs](/en-US/docs/Web/API/FileSystem) to be used as a content source.

- `'self'`
  - : Refers to the origin from which the protected document is being served, including the same URL scheme and port number. You must include the single quotes. Some browsers specifically exclude `blob` and `filesystem` from source directives. Sites needing to allow these content types can specify them using the Data attribute.
- `'unsafe-eval'`
  - : Allows the use of `eval()` and similar methods for creating code from strings. You must include the single quotes.
- `'unsafe-hashes'`
  - : Allows enabling specific inline [event handlers](/en-US/docs/Web/Events/Event_handlers). If you only need to allow inline event handlers and not inline {{HTMLElement("script")}} elements or `javascript:` URLs, this is a safer method than using the `unsafe-inline` expression.
- `'unsafe-inline'`
  - : Allows the use of inline resources, such as inline {{HTMLElement("script")}} elements, `javascript:` URLs, and inline event handlers. The single quotes are required.
- `'none'`
  - : Refers to the empty set; that is, no URLs match. The single quotes are required.
- `'nonce-<base64-value>'`

  - : An allow-list for specific inline scripts using a cryptographic nonce (number used once). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide an unguessable nonce, as bypassing a resource's policy is otherwise trivial. See [unsafe inline script](#unsafe_inline_script) for an example. Specifying nonce makes a modern browser ignore `'unsafe-inline'` which could still be set for older browsers without nonce support.

    > **Note:** The CSP `nonce` source can only be applied to _nonceable_ elements (e.g., as the {{HTMLElement("img")}} element has no `nonce` attribute, there is no way to associate it with this CSP source).

- `'<hash-algorithm>-<base64-value>'`
  - : A sha256, sha384 or sha512 hash of scripts or styles. The use of this source consists of two portions separated by a dash: the encryption algorithm used to create the hash and the base64-encoded hash of the script or style. When generating the hash, don't include the \<script> or \<style> tags and note that capitalization and whitespace matter, including leading or trailing whitespace. See [unsafe inline script](#unsafe_inline_script) for an example. In CSP 2.0, this is applied only to inline scripts. CSP 3.0 allows it in the case of `script-src` for external scripts.
- `'strict-dynamic'`
  - : The `strict-dynamic` source expression specifies that the trust explicitly given to a script present in the markup, by accompanying it with a nonce or a hash, shall be propagated to all the scripts loaded by that root script. At the same time, any allow-list or source expressions such as `'self'` or `'unsafe-inline'` are ignored.
- `'report-sample'`
  - : Requires a sample of the violating code to be included in the violation report.

## Examples

### Violation case

Given this CSP header:

```
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

```
Content-Security-Policy: script-src 'unsafe-inline';
```

The above Content Security Policy will allow inline {{HTMLElement("script")}} elements

```html
<script>
  var inline = 1;
</script>
```

You can use a nonce-source to only allow specific inline script blocks:

```
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

You will have to set the same nonce on the {{HTMLElement("script")}} element:

```html
<script nonce="2726c7f26c">
  var inline = 1;
</script>
```

Alternatively, you can create hashes from your inline scripts. CSP supports sha256, sha384 and sha512.

```
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

When generating the hash, don't include the {{HTMLElement("script")}} tags and note that capitalization and whitespace matter, including leading or trailing whitespace.

```html
<script>var inline = 1;</script>
```

### Unsafe eval expressions

The `'unsafe-eval'` source expression controls several script execution methods that create code from strings. If `'unsafe-eval'` isn't specified with the `script-src` directive, the following methods are blocked and won't have any effect:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- When passing a string literal like to methods like: `window.setTimeout("alert(\"Hello World!\");", 500);`

  - {{domxref("WindowOrWorkerGlobalScope.setTimeout")}}
  - {{domxref("WindowOrWorkerGlobalScope.setInterval")}}
  - {{domxref("window.setImmediate")}}

- `window.execScript()` {{non-standard_inline}} (IE < 11 only)

### strict-dynamic

The `'strict-dynamic'` source expression specifies that the trust explicitly given to a script present in the markup, by accompanying it with a nonce or a hash, shall be propagated to all the scripts loaded by that root script. At the same time, any whitelist or source expressions such as `'self'` or `'unsafe-inline'` will be ignored. For example, a policy such as `script-src 'strict-dynamic' 'nonce-R4nd0m' https://whitelisted.com/` would allow loading of a root script with `<script nonce="R4nd0m" src="https://example.com/loader.js">` and propagate that trust to any script loaded by `loader.js`, but disallow loading scripts from `https://whitelisted.com/` unless accompanied by a nonce or loaded from a trusted script.

```
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Or:

```
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

It is possible to deploy `strict-dynamic` in a backwards compatible way, without requiring user-agent sniffing.
The policy:

```
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
