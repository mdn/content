---
title: Banners and notices
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
page-type: mdn-writing-guide
---

{{MDNSidebar}}

Banners are added to some pages, in particular API reference, in order to highlight important factors that will affect how the described content is used.
For example, banners are used to highlight when a particular interface, method or property is deprecated, and should not be used in production code.

This article describes the more important banners, and how they are added.

## How to add a banner

Banners are added using macros.
Banners macros should be inserted below the page metadata, alongside the page sidebar macro.
For example, the `\{{SeeCompatTable}}` macro is added below to indicate that the [Ink API](/en-US/docs/Web/API/Ink_API) is [Experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).

```
---
title: Ink API
slug: Web/API/Ink_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Ink
---

\{{DefaultAPISidebar("Ink API")}}\{{SeeCompatTable}}
```

A page that has a banner will usually also have "complementary" page metadata.
For example, a page that has `\{{SeeCompatTable}}` should usually have the `experimental` status added too (as shown above) to ensure that it has appropriate icons in the sidebar.

> **Note:** Banner macros do not _depend_ on the metadata, but some other macro-inserted content does.
> For example, the `\{{Compat}}` macro depends on the `browser-compat` metadata value.

## What banners can/should be added

The [Page type templates](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types#templates) include the most important macros.
In summary:

- `\{{SeeCompatTable}}` — generates a **This is an experimental technology** banner that indicates the technology is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
  Also add `status` of `experimental` to the page front-matter.
- `\{{Deprecated_Header}}` — generates a **Deprecated** banner that indicates that use of the technology is [discouraged](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
  Also add `status` of `deprecated` to the page front-matter.
- `\{{Non-standard_Header}}` — generates a **Non-Standard** banner that indicates that use of the technology is not part of a formal specification, even if it is implemented in multiple browsers.
  Also add `status` of `non-standard` to the page front-matter.
- `\{{SecureContext_Header}}` — this generates a **Secure context** banner that indicates the technology is only available in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
