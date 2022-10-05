---
title: 'Link types: noopener'
slug: Web/HTML/Link_types/noopener
tags:
  - Attribute
  - HTML
  - Link types
  - Reference
browser-compat: html.elements.a.rel.noopener
---

{{HTMLSidebar}}

The **`noopener`** keyword for the [`rel`](/en-US/docs/Web/HTML/Attributes/rel) attribute of the {{HTMLElement("a")}}, {{HTMLElement("area")}}, and {{HTMLElement("form")}} elements instructs the browser to navigate to the target resource without granting the new browsing context access to the document that opened it — by not setting the {{DOMxRef("Window.opener")}} property on the opened window (it returns `null`).

This is especially useful when opening untrusted links, in order to ensure they cannot tamper with the originating document via the {{DOMxRef("Window.opener")}} property (see [About rel=noopener](https://mathiasbynens.github.io/rel-noopener/) for more details), while still providing the `Referer` HTTP header (unless `noreferrer` is used as well).

Note that when `noopener` is used, nonempty target names other than `_top`, `_self`, and `_parent` are all treated like `_blank` in terms of deciding whether to open a new window/tab.

> **Note:** Setting `target="_blank"` on `<a>` elements now implicitly provides the same `rel` behavior as setting `rel="noopener"` which does not set `window.opener`. See [browser compatibility](/en-US/docs/Web/HTML/Element/a#browser_compatibility) for support status.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
