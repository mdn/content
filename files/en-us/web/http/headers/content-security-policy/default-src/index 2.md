---
title: 'CSP: default-src'
slug: Web/HTTP/Headers/Content-Security-Policy/default-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - default
  - default-src
  - source
browser-compat: http.headers.csp.Content-Security-Policy.default-src
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`default-src`** directive serves as a fallback for the other CSP {{Glossary("fetch directive", "fetch directives")}}. For each of the following directives that are absent, the user agent looks for the `default-src` directive and uses this value for it:

- {{CSP("child-src")}}
- {{CSP("connect-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("prefetch-src")}}
- {{CSP("script-src")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
- {{CSP("style-src")}}
- {{CSP("style-src-elem")}}
- {{CSP("style-src-attr")}}
- {{CSP("worker-src")}}

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
  </tbody>
</table>

## Syntax

One or more sources can be allowed for the `default-src` policy:

```
Content-Security-Policy: default-src <source>;
Content-Security-Policy: default-src <source> <source>;
```

### Sources

\<source> can be one of the following:

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
  - : Allows the use of inline resources, such as inline {{HTMLElement("script")}} elements, `javascript:` URLs, inline event handlers, and inline {{HTMLElement("style")}} elements. The single quotes are required.
- `'none'`
  - : Refers to the empty set; that is, no URLs match. The single quotes are required.
- `'nonce-<base64-value>'`

  - : An allow-list for specific inline scripts using a cryptographic nonce (number used once). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide an unguessable nonce, as bypassing a resource's policy is otherwise trivial. See [unsafe inline script](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) for an example. Specifying nonce makes a modern browser ignore `'unsafe-inline'` which could still be set for older browsers without nonce support.

    > **Note:** The CSP `nonce` source can only be applied to _nonceable_ elements (e.g., as the {{HTMLElement("img")}} element has no `nonce` attribute, there is no way to associate it with this CSP source).

- `'<hash-algorithm>-<base64-value>'`
  - : A sha256, sha384 or sha512 hash of scripts or styles. The use of this source consists of two portions separated by a dash: the encryption algorithm used to create the hash and the base64-encoded hash of the script or style. When generating the hash, don't include the \<script> or \<style> tags and note that capitalization and whitespace matter, including leading or trailing whitespace. See [unsafe inline script](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) for an example. In CSP 2.0, this is applied only to inline scripts. CSP 3.0 allows it in the case of `script-src` for external scripts.
- `'strict-dynamic'`
  - : The `strict-dynamic` source expression specifies that the trust explicitly given to a script present in the markup, by accompanying it with a nonce or a hash, shall be propagated to all the scripts loaded by that root script. At the same time, any allow-list or source expressions such as `'self'` or `'unsafe-inline'` are ignored. See [script-src](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) for an example.
- `'report-sample'`
  - : Requires a sample of the violating code to be included in the violation report.

## Examples

### No inheritance with default-src

If there are other directives specified, `default-src` does not influence them. The following header:

```
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

is the same as:

```
Content-Security-Policy: connect-src 'self';
                         font-src 'self';
                         frame-src 'self';
                         img-src 'self';
                         manifest-src 'self';
                         media-src 'self';
                         object-src 'self';
                         script-src https://example.com;
                         style-src 'self';
                         worker-src 'self'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- CSP directives (<https://www.w3.org/TR/CSP/#csp-directives>):

  - {{Glossary("Fetch directive")}}
  - {{Glossary("Document directive")}}
  - {{Glossary("Navigation directive")}}
  - {{Glossary("Reporting directive")}}
  - [`upgrade-insecure-requests`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)
  - [`block-all-mixed-content`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content)
  - [`require-sri-for`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-sri-for) {{experimental_inline}}
