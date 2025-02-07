---
title: URI fragment
short-title: Fragment
slug: Web/URI/Reference/Fragment
page-type: reference
spec-urls: https://www.rfc-editor.org/rfc/rfc3986.html#section-3.5
sidebar: urlsidebar
---

The **fragment** of a URI is the last part of the URI, starting with the `#` character. It is used to identify a specific part of the resource, such as a section of a document or a position in a video. The fragment is not sent to the server when the URI is requested, but it is processed by the client (such as the browser) after the resource is retrieved.

## Syntax

```url
#fragment
```

- `fragment`
  - : A sequence of any characters. The exact format of the fragment is defined by the resource itself. Some common examples:
    - In an HTML document, it can be the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attribute of an element, and the browser will scroll to that element.
    - It can be a [text fragment](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments) in the form of `#:~:text=...`, which makes the browser highlight the specified text.
    - It can be a [media fragment](https://www.w3.org/TR/media-frags/) in the form of `#t=...`, which makes the video or audio start playing from that time.

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
