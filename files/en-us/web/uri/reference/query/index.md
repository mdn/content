---
title: URI query
short-title: Query
slug: Web/URI/Reference/Query
page-type: uri-component
spec-urls: https://www.rfc-editor.org/rfc/rfc3986.html#section-3.4
sidebar: urlsidebar
---

The **query** of a URI is the section that comes after the [path](/en-US/docs/Web/URI/Reference/Path).
It contains non-hierarchical data to identify a resource within the scope of the URI's [scheme](/en-US/docs/Web/URI/Reference/Schemes) and naming authority along with data in the path component.

## Syntax

The query is indicated by the first question mark (`?`) character and is terminated by a number sign (`#`) or the end of the URI:

```plain
https://example.com/collection?<query>
```

## Description

Consider the following URL:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`?key1=value1&key2=value2` is the query component containing parameters for the web server to process.
The specific parameters in the example are a list of key/value pairs separated by the `&` symbol.
Web servers can use the parameters to modify responses, like applying filtering, search, or sorting results, although this is implementation-specific.

## Specifications

{{Specifications}}

## See also

- [URIs](/en-US/docs/Web/URI)
- [Choosing between www and non-www URLs](/en-US/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
