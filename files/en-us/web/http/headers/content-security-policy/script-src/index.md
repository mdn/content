---
title: "CSP: script-src"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
page-type: http-csp-directive
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

### Allowlisting resources from trusted domains

Given this CSP header that only allows scripts from `https://example.com`:

```http
Content-Security-Policy: script-src https://example.com/
```

the following script is blocked and won't be loaded or executed:

```html
<script src="https://not-example.com/js/library.js"></script>
```

Note that inline event handlers are blocked as well:

```html
<button id="btn" onclick="doSomething()"></button>
```

You should replace them with {{domxref("EventTarget.addEventListener", "addEventListener")}} calls:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

If you cannot replace inline event handlers, you can use the `'unsafe-hashes'` source expression to allow them.
See [Unsafe hashes](#unsafe_hashes) for more information.

### Allowlisting external scripts using hashes

Allowing trusted domains, as shown in the section above, is a broad-brushed approach for specifying the locations from which code can safely be loaded.
This is a pragmatic approach, in particular when your site uses many resources and you have confidence that the trusted site will not be compromised.

An alternative method is to specify allowed scripts using file hashes.
Using this approach an external file in a `<script>` element can only be loaded and executed if all the valid hash values in its [`integrity`](/en-US/docs/Web/HTML/Element/script#integrity) attribute match the allowed values in the CSP header.
The [Subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity) feature additionally checks that the downloaded file has the indicated hash value, and therefore has not been modified.
This is safer than trusting a domain, because files will only be used if they are unmodified, even if loaded from a compromised site.
It is however more granular, and requires that hash values are updated in CSP and script elements whenever the associated scripts are changed.

The CSP header below demonstrates the approach.
It allows scripts for which the SHA384 hash is `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` or the SHA256 hash is `fictional_value`.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

The `example-framework.js` script below should load because the hash value in its `integrity` attribute is also present in the CSP (provided the file actually does have that hash once downloaded!)

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

The `integrity` attribute can have multiple values, each providing a hash for the file calculated using a different algorithm.
In order for an external script to be loaded, CSP requires that _all_ valid hash values in the attribute must also be in the CSP `script-src` declaration.
Therefore the script below would not load, because the second hash is not present in the CSP header above.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC sha256-not-in-csp"
  crossorigin="anonymous"></script>
```

This rule only applies to _valid_ hash values.
Values that are not recognized as hashes by the browser are ignored, so the following script should load:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="invalid-or-unsupported-hash sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

[Subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity) contains more information about calculating hashes and using the `integrity` attribute.

### Unsafe inline script

> **Note:**
> Disallowing inline styles and inline scripts is one of the biggest security wins CSP provides.
> If you absolutely have to use them, there are a few mechanisms that will allow them.
> Hashes apply to inline scripts and styles, but not event handlers.
> See [Unsafe hashes](#unsafe_hashes) for more information.

To allow inline scripts and styles, `'unsafe-inline'`, a nonce-source or a hash-source that matches the inline block can be specified.
The following Content Security Policy will allow all inline {{HTMLElement("script")}} elements:

```http
Content-Security-Policy: script-src 'unsafe-inline';
```

The following {{HTMLElement("script")}} element will be allowed by the policy:

```html
<script>
  const inline = 1;
  // …
</script>
```

Allowing all inline scripts is considered a security risk, so it's recommended to use a nonce-source or a hash-source instead.
To allow inline scripts and styles with a nonce-source, you need to generate a random nonce value (using a cryptographically secure random token generator) and include it in the policy.
It is important to note, this nonce value needs to be dynamically generated as it has to be unique for each HTTP request:

```http
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

Then, you need to include the same nonce in the {{HTMLElement("script")}} element:

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
<script>
  const inline = 1;
</script>
```

### Unsafe hashes

Policies for inline resources with hashes like `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` allow scripts and styles by their hash, but not event handlers:

```html
<!-- Allowed by CSP: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      will not allow this event handler -->
<button onclick="myScript()">Submit</button>
```

Instead of allowing `'unsafe-inline'`, you can use the `'unsafe-hashes'` source expression if code can't be updated to equivalent {{domxref("EventTarget.addEventListener", "addEventListener")}} calls.
Given a HTML page that includes the following inline event handler:

```html
<!-- I want to use addEventListener, but I can't :( -->
<button onclick="myScript()">Submit</button>
```

The following CSP header will allow the script to execute:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Unsafe eval expressions

The `'unsafe-eval'` source expression controls several script execution methods that create code from strings.
If a page has a CSP header and `'unsafe-eval'` isn't specified with the `script-src` directive, the following methods are blocked and won't have any effect:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- When passing a string literal like to methods like: `setTimeout("alert(\"Hello World!\");", 500);`

  - {{domxref("setTimeout()")}}
  - {{domxref("setInterval()")}}
  - {{domxref("window.setImmediate")}}

- `window.execScript()` {{non-standard_inline}} (IE < 11 only)

### Unsafe WebAssembly execution

The `'wasm-unsafe-eval'` source expression controls WebAssembly execution.
If a page has a CSP header and `'wasm-unsafe-eval'` isn't specified in the `script-src` directive, WebAssembly is blocked from loading and executing on the page.

The `'wasm-unsafe-eval'` source expression is more specific than `'unsafe-eval'` which permits both compilation (and instantiation) of WebAssembly and, for example, the use of the `eval` operation in JavaScript.
If the `'unsafe-eval'` source keyword is used, then this overrides any occurrence of `'wasm-unsafe-eval'` in the CSP policy.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

The `'strict-dynamic'` source expression specifies that the trust explicitly given to a script present in the markup, by accompanying it with a nonce or a hash, shall be propagated to all the scripts loaded by that root script. At the same time, any allowlist or source expressions such as `'self'` or `'unsafe-inline'` will be ignored.

For example, a policy such as `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` would allow loading of a root script with `<script nonce="R4nd0m" src="https://example.com/loader.js">` and propagate that trust to any script loaded by `loader.js`, but disallow loading scripts from `https://allowlisted.example.com/` unless accompanied by a nonce or loaded from a trusted script.

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

### Allowing speculation rules

To include [speculation rules](/en-US/docs/Web/API/Speculation_Rules_API) in scripts (see also [`<script type="speculationrules">`](/en-US/docs/Web/HTML/Element/script/type/speculationrules)), you need to use the `script-src` directive along with the `'inline-speculation-rules'` source and a hash- or nonce-source. For example:

```http
Content-Security-Policy: script-src 'inline-speculation-rules' 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("Sources")}}
- {{HTMLElement("script")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
