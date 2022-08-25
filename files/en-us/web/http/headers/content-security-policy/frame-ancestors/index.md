---
title: 'CSP: frame-ancestors'
slug: Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
tags:
  - Ancestors
  - CSP
  - Content-Security-Policy
  - Directive
  - Frame
  - HTTP
  - Security
  - frame-ancestors
browser-compat: http.headers.Content-Security-Policy.frame-ancestors
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** directive specifies valid parents that may embed a page using {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}}, or {{HTMLElement("applet")}}.

Setting this directive to `'none'` is similar to {{HTTPHeader("X-Frame-Options")}}`: deny` (which is also supported in older browsers).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Navigation directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} fallback</th>
      <td>No. Not setting this allows anything.</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        This directive is not supported in the {{HTMLElement("meta")}}
        element.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

One or more sources can be set for the `frame-ancestors` policy:

```http
Content-Security-Policy: frame-ancestors <source>;
Content-Security-Policy: frame-ancestors <source> <source>;
```

### Sources

\<source> can be one of the following:

> **Note:** The `frame-ancestors` directive's syntax is similar to a source list of other directives (e.g. {{CSP("default-src")}}), but doesn't allow `'unsafe-eval'` or `'unsafe-inline'` for example. It will also not fall back to a `default-src` setting. Only the sources listed below are allowed:

- \<host-source>

  - : Internet hosts by name or IP address, as well as an optional {{Glossary("URL")}} scheme and/or port number, separated by spaces. The site's address may include an optional leading wildcard (the asterisk character, `'*'`), and you may use a wildcard (again, `'*'`) as the port number, indicating that all legal ports are valid for the source. Single quotes surrounding the host are not allowed.
    Examples:

    - `http://*.example.com`: Matches all attempts to load from any subdomain of example.com using the `http:` URL scheme.
    - `mail.example.com:443`: Matches all attempts to access port 443 on mail.example.com.
    - `https://store.example.com`: Matches all attempts to access store.example.com using `https:`.

    > **Warning:** If no URL scheme is specified for a `host-source` and the iframe is loaded from an `https` URL, the URL for the page loading the iframe must also be `https`, per the [Does URL match expression in origin with redirect count?](https://w3c.github.io/webappsec-csp/#match-url-to-source-expression) section of the CSP spec.

- \<scheme-source>

  - : A scheme such as `http:` or `https:`. The colon is required and scheme should not be quoted. You can also specify data schemes (not recommended).

    - `data:` Allows [`data:` URLs](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) to be used as a content source. _This is insecure; an attacker can also inject arbitrary `data:` URLs. Use this sparingly and definitely not for scripts._
    - `mediastream:` Allows [`mediastream:` URIs](/en-US/docs/Web/API/Media_Streams_API) to be used as a content source.
    - `blob:` Allows [`blob:` URIs](/en-US/docs/Web/API/Blob) to be used as a content source.
    - `filesystem:` Allows [`filesystem:` URIs](/en-US/docs/Web/API/FileSystem) to be used as a content source.

- `'self'`
  - : Refers to the origin from which the protected document is being served, including the same URL scheme and port number. You must include the single quotes. Some browsers specifically exclude `blob` and `filesystem` from source directives. Sites needing to allow these content types can specify them using the Data attribute.
- `'none'`
  - : Refers to the empty set; that is, no URLs match. The single quotes are required.

## Examples

```http
Content-Security-Policy: frame-ancestors 'none';

Content-Security-Policy: frame-ancestors 'self' https://www.example.org;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("X-Frame-Options")}}
