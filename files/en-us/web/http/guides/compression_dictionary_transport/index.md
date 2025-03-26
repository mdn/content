---
title: Compression Dictionary Transport
slug: Web/HTTP/Guides/Compression_dictionary_transport
page-type: guide
---

{{HTTPSidebar}}

**Compression Dictionary Transport** is a way of using a shared compression dictionary to dramatically reduce the transport size of HTTP requests.

Compression algorithms are used in HTTP to reduce the size of resources downloaded over the network, reducing bandwidth cost and the time taken to load pages. Lossless HTTP compression algorithms work by finding redundancy in the source: for example, places where text like function is repeated. They then include just one copy of the redundant string, and replace occurrences of it in the resource with references to that copy. Since the references are shorter than the string, the compressed version is shorter.

For example, take this JavaScript:

```javascript
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

This could be compressed by replacing repeated strings with references to a previous location and number of characters, like in this example:

```Compressed
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:]
```

Where `[0:9]` refers to copying the 9 characters starting at character 0. Note this is a simple example to demonstrate the concept and the actual algorithms are more complex than this.

Clients can then easily reverse the compression after download to recreate the original, uncompressed resource.

Algorithms like {{glossary("Brotli compression")}} and {{glossary("Zstandard compression")}} achieve even greater efficiency by allowing the use of dictionaries of commonly encountered strings, so you don't need any copies of them in the compressed resource. These algorithms ship with a pre-defined, default dictionary that is used when compressing HTTP requests.

Compression Dictionary Transport builds on this by enabling you to provide your own dictionary which is especially applicable to a particular set of resources. The compression algorithm can then use as a source of strings when compressing and decompressing the resource.

Assuming the references from the previous example are included in that common dictionary, this could be further reduced to this:

```Compressed
[d1]a[d2]Hello World![d3]
[d1]b[d2]I am here[d3]
```

The dictionary can either be a separate resource that is only required for Compression Dictionary Transport. Or it can be an existing resource that is needed by the website.

For example, suppose your website uses a JavaScript library. You would typically load a specific version of the library, and might include the version name in the name of the library, like `<script src="my-library.v1.js">`. When the browser loads your page, it will fetch a copy of the library as a subresource.

If you then update to v2 of the library, most of the library's code will probably have stayed the same. So sites can greatly reduce the size of the download for `my-library.v2.js` by telling the browser to use `my-library.v1.js` as a compression dictionary for `my-library.v2.js`. Then all strings that are common between v1 and v2 don't need to be included in the download for v2, because the browser already has them. Most of the download size of `my-library.v2.js` is then just the delta between the two versions.

## Existing resource as a dictionary

To use a resource as a dictionary the resource will include the {{HTTPHeader("Use-As-Dictionary")}} HTTP response Header:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

When a subsequent resource is requested (for example, `app.v2.js`) that matches the specified pattern, the request will include a SHA-256 hash of the available disctionary in the {{HTTPHeader("Available-Dictionary")}} HTTP Header, along with `dcb` and/or `dcz` values in the {{HTTPHeader("Accept-Encoding")}} HTTP Header (for delta compression brotli or zstd as appropriate):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

The server can then respond with an appropriately-encoded response and content encoding in the {{HTTPHeader("Content-Encoding")}} HTTP Header:

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

In which case the value will be sent in future requests in the {{HTTPHeader("Dictionary-ID")}} header:

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
