---
title: URI fragment
short-title: Fragment
slug: Web/URI/Reference/Fragment
page-type: uri-component
spec-urls: https://www.rfc-editor.org/rfc/rfc3986.html#section-3.5
sidebar: urlsidebar
---

The **fragment** of a URI is the last part of the URI, starting with the `#` character. It is used to identify a specific part of the resource, such as a section of a document or a position in a video. The fragment is not sent to the server when the URI is requested, but it is processed by the client (such as the browser) after the resource is retrieved.

## Syntax

```url
#fragment
```

- `fragment`
  - : A sequence of any characters.
    The exact format of the fragment is defined by the resource itself.

## Description

Consider the following URL:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`#SomewhereInTheDocument` is the _fragment_ of the URL, which is an anchor to another part of the resource itself. An anchor represents a sort of "bookmark" inside the resource, giving the browser the directions to show the content located at that spot. In an HTML document, for example, the browser will scroll to the point where the anchor is defined. It can be the [`id`](/en-US/docs/Web/HTML/Reference/Global_attributes/id) attribute of an element, and the browser will scroll to that element
In a video or audio document, it can be a [media fragment](https://www.w3.org/TR/media-frags/) in the form of `#t=...`, which makes the video or audio start playing from that time.

There's a special [text fragment](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments) feature that allows you to link to a specific part of a web page identified by its text content.

## Examples

- `#syntax`
  - : The browser will scroll to the element with the `id="syntax"` in the document (which, for this page, is the [Syntax](#syntax) heading).
- `#:~:text=fragment`
  - : The browser will highlight the text [`fragment`](#:~:text=fragment) in the document.
- `#t=10,20`
  - : The video or audio will start playing from the 10th second.

## Specifications

{{Specifications}}

## See also

- [URIs](/en-US/docs/Web/URI)
- [Text fragments](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments)
