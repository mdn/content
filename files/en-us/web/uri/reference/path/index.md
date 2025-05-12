---
title: URI path
short-title: Path
slug: Web/URI/Reference/Path
page-type: uri-component
spec-urls: https://www.rfc-editor.org/rfc/rfc3986.html#section-3.3
sidebar: urlsidebar
---

The **path** of a URI is the section that comes after the [authority](/en-US/docs/Web/URI/Reference/Authority).
It contains data, usually organized in hierarchical form, to identify a resource within the scope of the URI's [scheme](/en-US/docs/Web/URI/Reference/Schemes) and naming authority.

## Syntax

A path consists of a sequence of path segments separated by a slash (`/`) character:

```plain
http://example.com:80<path>
urn:<path>
```

## Description

The path follows the authority and is terminated by the first question mark (`?`), number sign (`#`), or the end of the URI.
In the following two URIs:

```url
urn:nbn:de:bvb:19-epub-5359-3
http://example.com:80/images/animated/ayse.gif
```

`nbn:de:bvb:19-epub-5359-3` is the path of the [URN](Web/URI/Reference/Schemes/urn) and `/images/animated/ayse.gif` is the path of the `http` URI.

Every URI has a path component, meaning the paths in the following examples are a forward-slash (`/`) in the first URL and an empty path component in the second:

```url
http://example.com/
http://example.com
```

## Specifications

{{Specifications}}

## See also

- [URIs](/en-US/docs/Web/URI)
- [Choosing between www and non-www URLs](/en-US/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
