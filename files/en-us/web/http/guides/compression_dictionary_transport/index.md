---
title: Compression Dictionary Transport
slug: Web/HTTP/Guides/Compression_dictionary_transport
page-type: guide
---

{{HTTPSidebar}}

**Compression Dictionary Transport** is a way of using a shared compression dictionary to dramatically reduce the transport size of HTTP requests.

Modern compression formats such as {{glossary("Brotli compression")}} and {{glossary("Zstandard compression")}} allow the use of dictionaries of frequently used data to further increase compression over just referencing those from within the file being compressed. Typically, for HTTP requests, this uses the pre-defined static dictionary included in that format (for example [the Brotli static dictionary is available in the source code](https://github.com/google/brotli/blob/master/csharp/org/brotli/dec/Dictionary.cs)).

Compression Dictionary Transport allows the use of specifying a resource which can be used as a dictionary for future requests. This can either be a specific dictionary file, or an existing resource (for example, using `app.v1.js` as a dictionary when downloading `app.v2.js`). This can result in a huge savings in subsequent file download sizes and hence time. In the `app.vX.js` example, basically only the delta would need to be download and the common bytes could be referenced from the original `app.v1.js` file that is already downloaded.

## Existing resource as a dictionary

To use a resource as a dictionary the resource will include the {{HTTPHeader("Use-As-Dictionary")}} HTTP Header:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

When a resource is requested (for example, `app.v2.js`) that matches this header, the request will include a SHA-356 hash of the available disctionary in the {{HTTPHeader("Available-Dictionary")}} HTTP Header, along with a `dcb` or `dcz` {{HTTPHeader("Accept-Encoding")}} HTTP Header (for delta compression brotli or zstd as appropriate):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

The server can then respond {{HTTPHeader("Content-Encoding")}} HTTP Header:

```http
Content-Encoding: dcb
```

If the response is cacheable, it MUST include a {{HTTPHeader("Vary")}} to prevent caches serving dictionary-compressed resources to clients that don't support them or serving the response compressed with the wrong dictionary:

```http
Vary: accept-encoding, available-dictionary
```

An optional `id` can also be provided in the {{HTTPHeader("Use-As-Dictionary")}} header:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

In which case it will be used in the future requests along with the SHA-256 hash of the dictionary enclosed in colons:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

## Separate dictionary

Alternatively, an HTML document can specify one or more separate dictionaries with {{HTMLElement("Link#compression-dictionary", "&lt;link rel=&quot;compression-dictionary&quot;&gt;")}} elements:

```html
<link rel="compression-dictionary" href="/dictionary.dat" />
```

This dictionary is then downloaded by the browser during idle time, and that response must include the {{HTTPHeader("Use-As-Dictionary")}} HTTP Header:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

From here the process is similar to the previous example when a matching resources is requested.

## See also

- Glossary terms:
  - {{Glossary("Brotli compression")}}
  - {{Glossary("Zstandard compression")}}
- {{HTMLElement("Link#compression-dictionary", "&lt;link rel=&quot;compression-dictionary&quot;&gt;")}}
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Draft specification](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
