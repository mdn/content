---
title: "data: URLs"
short-title: "data:"
slug: Web/URI/Reference/Schemes/data
page-type: reference
browser-compat: http.data-url
sidebar: urlsidebar
---

**Data URLs**, URLs prefixed with the `data:` scheme, allow content creators to embed small files inline in documents. They were formerly known as "data URIs" until that name was retired by the WHATWG.

> [!NOTE]
> Data URLs are treated as unique opaque origins by modern browsers, rather than inheriting the origin of the settings object responsible for the navigation.

## Syntax

Data URLs are composed of four parts: a prefix (`data:`), a [MIME type](/en-US/docs/Web/HTTP/MIME_types) indicating the type of data, an optional `base64` token if non-textual, and the data itself:

```plain
data:[<media-type>][;base64],<data>
```

The `media-type` is a [MIME type](/en-US/docs/Web/HTTP/MIME_types) string, such as `'image/jpeg'` for a JPEG image file. If omitted, defaults to `text/plain;charset=US-ASCII`

If the data contains [characters defined in RFC 3986 as reserved characters](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), or contains space characters, newline characters, or other non-printing characters, those characters must be {{Glossary("Percent-encoding", "percent-encoded")}}.

If the data is textual, you can embed the text (using the appropriate entities or escapes based on the enclosing document's type). Otherwise, you can specify `base64` to embed base64-encoded binary data. You can find more info on MIME types [here](/en-US/docs/Web/HTTP/MIME_types) and [here](/en-US/docs/Web/HTTP/MIME_types/Common_types).

A few examples:

- `data:,Hello%2C%20World%21`
  - : The text/plain data `Hello, World!`. Note how the comma is {{Glossary("Percent-encoding", "percent-encoded")}} as `%2C`, and the space character as `%20`.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : base64-encoded version of the above
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : An HTML document with `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : An HTML document with `<script>alert('hi');</script>` that executes a JavaScript alert. Note that the closing script tag is required.

## Encoding data into base64 format

Base64 is a group of binary-to-text encoding schemes that represent binary data in an {{Glossary("ASCII")}} string format by translating it into a radix-64 representation. By consisting only of characters permitted by the URL syntax ("URL safe"), we can safely encode binary data in data URLs. Base64 uses the characters `+` and `/`, which may have special meanings in URLs. Because Data URLs have no URL path segments or query parameters, this encoding is safe in this context.

### Encoding in JavaScript

The Web APIs have native methods to encode or decode to base64: [Base64](/en-US/docs/Glossary/Base64).

### Encoding on a Unix system

Base64 encoding of a file or string on Linux and macOS systems can be achieved using the command-line `base64` (or, as an alternative, the `uuencode` utility with `-m` argument).

```bash
echo -n hello|base64
# outputs to console: aGVsbG8=

echo -n hello>a.txt
base64 a.txt
# outputs to console: aGVsbG8=

base64 a.txt>b.txt
# outputs to file b.txt: aGVsbG8=
```

### Encoding on Microsoft Windows

On Windows, [Convert.ToBase64String](https://learn.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-5.0) from PowerShell can be used to perform the Base64 encoding:

```plain
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# outputs to console: aGVsbG8=
```

Alternatively, a GNU/Linux shell (such as [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux)) provides the utility `base64`:

```bash
bash$ echo -n hello | base64
# outputs to console: aGVsbG8=
```

## Common problems

This section describes problems that commonly occur when creating and using `data` URLs.

```html
data:text/html,lots of text…<p><a name%3D"bottom">bottom</a>?arg=val</p>
```

This represents an HTML resource whose contents are:

```html
lots of text…
<p><a name="bottom">bottom</a>?arg=val</p>
```

- Syntax
  - : The format for `data` URLs is very simple, but it's easy to forget to put a comma before the "data" segment, or to incorrectly encode the data into base64 format.
- Formatting in HTML
  - : A `data` URL provides a file within a file, which can potentially be very wide relative to the width of the enclosing document. As a URL, the `data` should be formattable with whitespace (linefeed, tab, or spaces), but there are practical issues that arise [when using base64 encoding](https://bugzil.la/73026#c12).
- Length limitations
  - : Browsers are not required to support any particular maximum length of data.
    Chromium and Firefox limit `data` URLs to 512MB, and Safari (WebKit) limits them to 2048MB.
    Note that Firefox 97 increased the limit from 256KB to 32MB, and [Firefox 136 increased it to 512MB](/en-US/docs/Mozilla/Firefox/Releases/136).
- Lack of error handling
  - : Invalid parameters in media, or typos when specifying `'base64'`, are ignored, but no error is provided.
- No support for query strings, etc.
  - : The data portion of a data URL is opaque, so an attempt to use a query string (page-specific parameters, with the syntax `<url>?parameter-data`) with a data URL will just include the query string in the data the URL represents.
- Security issues
  - : A number of security issues (for example, phishing) have been associated with data URLs, and navigating to them in the browser's top level. To mitigate such issues, top-level navigation to `data:` URLs is blocked in all modern browsers. See [this blog post from the Mozilla Security Team](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) for more details.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Glossary("Base64")}}
- {{Glossary("Percent-encoding")}}
- {{domxref("WorkerGlobalScope.atob()", "atob()")}}
- {{domxref("WorkerGlobalScope.btoa()", "btoa()")}}
- CSS {{CSSXref("url_value", "&lt;url&gt;")}}
- {{Glossary("URI")}}
