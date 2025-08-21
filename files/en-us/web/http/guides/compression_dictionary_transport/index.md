---
title: Compression Dictionary Transport
slug: Web/HTTP/Guides/Compression_dictionary_transport
page-type: guide
status:
  - experimental
browser-compat:
  - html.elements.link.rel.compression-dictionary
  - http.headers.Accept-Encoding.dcb
  - http.headers.Accept-Encoding.dcz
  - http.headers.Available-Dictionary
  - http.headers.Content-Encoding.dcb
  - http.headers.Content-Encoding.dcz
  - http.headers.Dictionary-ID
  - http.headers.Use-As-Dictionary
spec-urls: https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary
sidebar: http
---

{{SeeCompatTable}}

**Compression Dictionary Transport** is a way of using a shared compression dictionary to dramatically reduce the transport size of HTTP responses.

## Overview

Compression algorithms are used in HTTP to reduce the size of resources downloaded over the network, reducing bandwidth cost and the time taken to load pages. Lossless HTTP compression algorithms work by finding redundancy in the source: for example, places where text like the string `"function"` is repeated. They then include just one copy of the redundant string, and replace occurrences of it in the resource with references to that copy. Since the references are shorter than the string, the compressed version is shorter.

> [!NOTE]
> A previous attempt at this technology was called SDCH (Shared Dictionary Compression for HTTP) but was never widely supported and was removed in 2017. Compression Dictionary Transport is a better-specified and more robust implementation with broader industry consensus.

For example, take this JavaScript:

```js
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

This could be compressed by replacing repeated strings with references to a previous location and number of characters, like this:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In this example, `[0:9]` refers to copying the 9 characters starting at character 0. Note this is a simplified example to demonstrate the concept and the actual algorithms are more complex than this.

Clients can then reverse the compression after download to recreate the original, uncompressed resource.

### Compression dictionaries

Algorithms like {{glossary("Brotli compression")}} and {{glossary("Zstandard compression")}} achieve even greater efficiency by allowing the use of dictionaries of commonly encountered strings, so you don't need any copies of them in the compressed resource. These algorithms ship with a predefined default dictionary that is used when compressing HTTP responses.

Compression Dictionary Transport builds on this by enabling you to provide your own dictionary which is especially applicable to a particular set of resources. The compression algorithm can then reference it as a source of bytes when compressing and decompressing the resource.

Assuming the references from the previous example are included in that common dictionary, this could be further reduced to this:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

The dictionary can either be a separate resource that is only required for Compression Dictionary Transport, or it can be a resource that the website needs anyway.

For example, suppose your website uses a JavaScript library. You would typically load a specific version of the library, and might include the version name in the name of the library, like `<script src="my-library.v1.js">`. When the browser loads your page, it will fetch a copy of the library as a subresource.

If you then update to v2 of the library, most of the library's code will probably have stayed the same. So sites can greatly reduce the size of the download for `my-library.v2.js` by telling the browser to use `my-library.v1.js` as a compression dictionary for `my-library.v2.js`. Then all strings that are common between v1 and v2 don't need to be included in the download for v2, because the browser already has them. Most of the download size of `my-library.v2.js` is then just the delta between the two versions.

Compression Dictionary Transport can achieve an order of magnitude more compression than compression using a default built-in dictionary: see [Compression dictionary transport examples](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) for some real-life results.

## Dictionary format

A compression dictionary does not follow any specific format, nor have a specific {{Glossary("MIME type")}}. They are regular files that can be used in the compression of other files with similar content.

Previous versions of files typically have lots of similar content, which is why they make excellent dictionaries.
Using a previous version of a file as a dictionary allows the compression algorithm to efficiently reference all the unchanged content, and just capture the relatively small differences in the new version. This approach is referred to as delta compression.

Another approach is to list common strings (for example your HTML templates) together in a new `dictionary.txt` file so it can be used to compress HTML pages on the website. You can optimize this further by using specialized tooling, for example [Brotli's dictionary generator](https://github.com/google/brotli/blob/master/research/dictionary_generator.cc), which reduces dictionaries down to their minimum size with minimal overlap.

Dictionaries can also be used to effectively compress binary formats. For example, [WASM](/en-US/docs/WebAssembly) binary files are large resources that can also benefit from delta compression.

## Existing resource as a dictionary

To use a resource as a dictionary, the server should include the {{HTTPHeader("Use-As-Dictionary")}} header in the response that provides the resource:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

The value of this header indicates the resources that can use this resource as a dictionary: in this case, that includes any resources whose URLs match the given [pattern](/en-US/docs/Web/API/URL_Pattern_API).

When a resource is later requested that matches the given pattern (for example, `app.v2.js`), the request will include a SHA-256 hash of the available dictionary in the {{HTTPHeader("Available-Dictionary")}} header, along with `dcb` and/or `dcz` values in the {{HTTPHeader("Accept-Encoding")}} header (for delta compression using Brotli or ZStandard as appropriate):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

The server can then respond with an appropriately-encoded response with the chosen content encoding given in the {{HTTPHeader("Content-Encoding")}} header:

```http
Content-Encoding: dcb
```

If the response is cacheable, it must include a {{HTTPHeader("Vary")}} header to prevent caches serving dictionary-compressed resources to clients that don't support them or serving the response compressed with the wrong dictionary:

```http
Vary: accept-encoding, available-dictionary
```

An optional `id` can also be provided in the {{HTTPHeader("Use-As-Dictionary")}} header, to allow the server to more easily find the dictionary file if they do not store the dictionary by the hash:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

If this is provided, the value will be sent in future requests in the {{HTTPHeader("Dictionary-ID")}} header:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

The server must still check the hash from the `Available-Dictionary` header — the `Dictionary-ID` is additional information for the server to identify the dictionary but does not replace the need for the `Available-Dictionary` header.

## Separate dictionary

An HTML document can also provide a compression dictionary to the browser which isn't a resource that the browser is downloading anyway via an element such as a {{htmlelement("script")}} tag. There are two methods to do this:

- Include a {{HTMLElement("link")}} element whose [`rel`](/en-US/docs/Web/HTML/Reference/Attributes/rel) attribute is set to `compression-dictionary`:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Reference the dictionary using the {{HTTPHeader("Link")}} header:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

This dictionary is then downloaded by the browser during idle time, and that response must include the {{HTTPHeader("Use-As-Dictionary")}} header:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

From here the process is similar to the previous example when a matching resources is requested.

## Creating dictionary-compressed responses

Dictionary-compressed responses can use either the Brotli or ZStandard algorithms, with two extra requirements: they must also include a magic header and embedded dictionary hash.

Dictionary-compressed resources can be created dynamically, but for static resources it can be better to create these in advance at build time. When using prior versions as dictionaries, this will require deciding how many delta-compressed versions to create — for the last version only, or for the last X versions for some value of X.

Given a dictionary file named `dictionary.text` and a file to compress named `data.text`, the following Bash command will compress the file using Brotli, producing a compressed file named `data.txt.dcb`:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Given the same input files, the following Bash command will compress the file using ZStandard, producing a compressed file named `data.txt.dcz`:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Note that you will need {{glossary("OpenSSL")}} installed locally as well as Brotli or ZStandard.

## Restrictions

Compression algorithms are at risk of security attacks, so there are a number of restrictions for Compression Dictionary Transport, including:

- Dictionaries must same-origin with the resource using the dictionary.
- Dictionary-compressed resources must be same-origin with the document origin, or follow the [CORS](/en-US/docs/Web/HTTP/Guides/CORS) rules, and so be requested with the [`crossorigin`](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin) attribute and served with an appropriate {{HTTPHeader("Access-Control-Allow-Origin")}} header.
- Dictionaries are bound by the usual HTTP Cache partitioning and so cannot be shared between origins even if they download the same resources. The dictionary will need to be downloaded again for each origin.

Additionally, dictionaries could themselves become tracking vectors so browsers may restrict this feature when cookies are disabled or when other extra privacy protections are enabled.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Glossary terms:
  - {{Glossary("Brotli compression")}}
  - {{Glossary("Zstandard compression")}}
- [`<link rel="compression-dictionary">`](/en-US/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Draft specification](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
- [Resources for Compression Dictionary Transport](https://use-as-dictionary.com/)
