---
title: '<plaintext>: The Plain Text element (Deprecated)'
slug: Web/HTML/Element/plaintext
tags:
  - Element
  - HTML
  - Deprecated
  - Plain text
  - Reference
  - Web
  - plaintext
browser-compat: html.elements.plaintext
---

{{deprecated_header}}

The **`<plaintext>`** [HTML](/en-US/docs/Web/HTML) element renders everything following the start tag as raw text, ignoring any following HTML. There is no closing tag, since everything after it is considered raw text.

> **Warning:** Do not use this element.
>
> - `<plaintext>` is deprecated since HTML 2, and not all browsers implemented it. Browsers that did implement it didn't do so consistently.
> - `<plaintext>` is obsolete; browsers that accept it may instead treat it as a {{HTMLElement("pre")}} element that still interprets HTML within.
> - If `<plaintext>` is the first element on the page (other than any non-displayed elements, like {{HTMLElement("head")}}), do not use HTML at all. Instead serve a text file with the `text/plain` [MIME-type](/en-US/docs/Learn/Server-side/Configuring_server_MIME_types).
> - Instead of `<plaintext>`, use the {{HTMLElement("pre")}} element or, if semantically accurate (such as for inline text), the {{HTMLElement("code")}} element. Escape any `<`, `>` and `&` characters, to prevent browsers inadvertently parsing content the element content as HTML.
> - A monospaced font can be applied to any HTML element via a [CSS](/en-US/docs/Web/CSS) {{cssxref("font-family")}} style with the `monospace` generic value.

## Attributes

This element has no other attributes than the [global attributes](/en-US/docs/Web/HTML/Global_attributes) common to all elements.

## DOM interface

This element implements the {{domxref('HTMLElement')}} interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("pre")}} and {{HTMLElement("code")}} elements, which should be used instead.
- The {{HTMLElement("listing")}} and {{HTMLElement("xmp")}} elements, which are both obsolete elements similar to {{HTMLElement("plaintext")}}.

{{HTMLRef}}
