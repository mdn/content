---
title: "PerformanceResourceTiming: contentEncoding property"
short-title: contentEncoding
slug: Web/API/PerformanceResourceTiming/contentEncoding
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceResourceTiming.contentEncoding
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`contentEncoding`** read-only property of the {{domxref("PerformanceResourceTiming")}} interface is a string indicating the content encoding of the fetched resource.

The content type is extracted from the {{httpheader("Content-Encoding")}} HTTP header sent in the resource's fetch response.

## Value

A string indicating the content-encoding of the content.
This may be one of the following values:

- `gzip`
  - : A format using the [Lempel-Ziv coding](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), with a 32-bit CRC.
    This is the original format of the UNIX _gzip_ program.
    The HTTP/1.1 standard also recommends that the servers supporting this content-encoding should recognize `x-gzip` as an alias, for compatibility purposes.
- `compress`
  - : A format using the [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) algorithm.
    The value name was taken from the UNIX _compress_ program, which implemented this algorithm.
    Like the compress program, which has disappeared from most UNIX distributions, this content-encoding is not used by many browsers today, partly because of a patent issue (it expired in 2003).
- `deflate`
  - : Using the [zlib](https://en.wikipedia.org/wiki/Zlib) structure (defined in {{rfc(1950)}}) with the [deflate](https://en.wikipedia.org/wiki/Deflate) compression algorithm (defined in {{rfc(1951)}}).
- `br`
  - : A format using the {{glossary("Brotli compression","Brotli")}} algorithm structure (defined in {{rfc(7932)}}).
- `zstd`
  - : A format using the {{glossary("Zstandard compression","Zstandard")}} algorithm structure (defined in {{rfc(8878)}}).
- `dcb` {{experimental_inline}}
  - : A format that uses the [Dictionary-Compressed Brotli algorithm](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl). See [Compression Dictionary Transport](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport).
- `dcz` {{experimental_inline}}
  - : A format that uses the [Dictionary-Compressed Zstandard algorithm](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan). See [Compression Dictionary Transport](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Examples

### Filtering resources

The `contentEncoding` property can be used to get specific resource timing entries only; for example, only those related to [Compression Dictionary Transport](/en-US/docs/Web/HTTP/Guides/Compression_Dictionary_Transport).

The following example uses a {{domxref("PerformanceObserver")}} to notify of new `resource` performance entries as they are recorded in the browser's performance timeline.
The `buffered` option is used for accessing entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  const dictionaryCompressedResources = list
    .getEntries()
    .filter(
      (entry) =>
        entry.contentEncoding === "dcb" || entry.contentEncoding === "dcz",
    );
  console.log(dictionaryCompressedResources);
});

observer.observe({ type: "resource", buffered: true });
```

The following example uses {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call the method.

```js
const dictionaryCompressedResources = performance
  .getEntriesByType("resource")
  .filter(
    (entry) =>
      entry.contentEncoding === "dcb" || entry.contentEncoding === "dcz",
  );
console.log(dictionaryCompressedResources);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
