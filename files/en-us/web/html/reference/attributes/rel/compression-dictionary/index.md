---
title: rel="compression-dictionary"
slug: Web/HTML/Reference/Attributes/rel/compression-dictionary
page-type: html-attribute-value
status:
  - experimental
browser-compat: html.elements.link.rel.compression-dictionary
sidebar: htmlsidebar
---

{{SeeCompatTable}}

The **`compression-dictionary`** keyword for the [`rel`](/en-US/docs/Web/HTML/Reference/Elements/link#rel) attribute of the {{HTMLElement("link")}} element is a link that browsers can use to download a {{glossary("Compression dictionary transport", "compression dictionary")}} that can be used to compress future downloads for resources on this site so the download sizes of those resources are smaller than standard compression.

**Note:** if the website has a {{HTTPHeader("Content-Security-Policy")}} header, the `connect-src` directive (or `default-src`, if `connect-src` is not set) must permit the location of the dictionary to avoid the request being blocked.

See the [Compression Dictionary Transport guide](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) for more information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Compression Dictionary Transport guide](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport)
