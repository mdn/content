---
title: '<image>: The Image element'
slug: Web/HTML/Element/image
tags:
  - Element
  - HTML
  - HTML Element Reference
  - HTML Reference
  - HTML element
  - Non-standard
  - Deprecated
  - Reference
browser-compat: html.elements.image
---

{{deprecated_header}}{{non-standard_header}}

The **`<image>`** [HTML](/en-US/docs/Web/HTML) element is an obsolete remnant of an ancient version of HTML lost in the mists of time; use the standard {{HTMLElement("img")}} element instead. Seriously, the specification even literally uses the words "Don't ask" when describing this element.

> **Warning:** Do not use this element! In order to display images, use the standard {{HTMLElement("img")}} element.

While some browsers will attempt to automatically convert this into an {{HTMLElement("img")}} element, they won't always do so, and won't always succeed when they try, due to various ways in which the options can be interpreted. So just don't use it if you like your users.

## Specifications

This might have once been part of a specification, but nobody seems to remember. It certainly isn't anymore. Just avoid it like the plague.

## Browser compatibility

In general, browsers will attempt to map this to `<img>`, but only if the {{htmlattrxref("src", "img")}} attribute is specified as well.  Creating an `<image>` element without a `src` attribute results in an {{domxref("HTMLElement")}} object with the local element name `"image"`. However, if the element is created with a `src` attribute, the result is instead an {{domxref("HTMLImageElement")}} and its local element name is changed to `"img"`.

However, that doesn't mean this is a good idea to use. It's not.

{{Compat}}

## See also

- {{HTMLElement("img")}}: The correct way to display an image in a document
- {{HTMLElement("picture")}}: A more powerful correct way to display an image in a document

{{HTMLRef}}
