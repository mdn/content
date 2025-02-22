---
title: X-DNS-Prefetch-Control
slug: Web/HTTP/Headers/X-DNS-Prefetch-Control
page-type: http-header
status:
  - non-standard
browser-compat: http.headers.X-DNS-Prefetch-Control
---

{{HTTPSidebar}}{{Non-standard_header}}

The HTTP **`X-DNS-Prefetch-Control`** {{Glossary("response header")}} controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.

The intention is that prefetching is performed in the background so that the {{glossary("DNS")}} resolution is complete by the time the referenced items are needed by the browser.
This reduces latency when the user clicks a link, for example.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-DNS-Prefetch-Control: on
X-DNS-Prefetch-Control: off
```

### Directives

- `on`
  - : Enables DNS prefetching. This is what browsers do if they support the feature when this header is not present.
- `off`
  - : Disables DNS prefetching. This is useful if you don't control the link on the pages or know that you don't want to leak information to these domains.

## Description

DNS requests are very small in terms of bandwidth, but latency can be quite high,
especially on mobile networks. By speculatively prefetching DNS results, latency can be
reduced significantly at certain times, such as when the user clicks the link. In some
cases, latency can be reduced by a second.

The implementation of this prefetching in some browsers allows domain name resolution
to occur in parallel with (instead of in serial with) the fetching of actual page
content. By doing this, the high-latency domain name resolution process doesn't cause
any delay while fetching content.

Page load times – especially on mobile networks – can be measurably improved in this
way. If the domain names for images can be resolved in advance of the images being
requested, pages that load many images can see an improvement of 5% or more in the time
of loading images.

### Configuring prefetching in the browser

In general, you don't need to do anything to manage prefetching. However, the user may
wish to disable prefetching. On Firefox, this can be done by setting the
`network.dns.disablePrefetch` preference to `true`.

Also, by default, prefetching of embedded link hostnames is not performed on documents
loaded over {{glossary("HTTPS")}}. On Firefox, this can be changed by setting the
`network.dns.disablePrefetchFromHTTPS` preference to `false`.

## Examples

### Turning on and off prefetching

You can either send the `X-DNS-Prefetch-Control` header server-side, or from
individual documents, using the [`http-equiv`](/en-US/docs/Web/HTML/Element/meta#http-equiv) attribute on
the {{HTMLElement("meta")}} element, like this:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

You can reverse this setting by setting `content` to `"on"`.

### Forcing lookup of specific hostnames

You can force the lookup of specific hostnames without providing specific anchors using
that hostname by using the [`rel`](/en-US/docs/Web/HTML/Element/link#rel) attribute on the
{{HTMLElement("link")}} element with a [link type](/en-US/docs/Web/HTML/Attributes/rel) of `dns-prefetch`:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

In this example, the domain name `www.mozilla.org` will be pre-resolved.

Similarly, the link element can be used to resolve hostnames without providing a
complete URL, but only, by preceding the hostname with two slashes:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Forced prefetching of hostnames might be useful, for example, on the homepage of a site
to force pre-resolution of domain names that are referenced frequently throughout the
site even though they are not used on the home page itself. This will improve the
overall performance of site even though the performance of the home page may not be
affected.

## Specifications

Not part of any current specification.

## Browser compatibility

{{Compat}}

## See also

- [DNS Prefetching for Firefox (blog post)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Google Chrome handles DNS prefetching control](https://www.chromium.org/developers/design-documents/dns-prefetching/)
