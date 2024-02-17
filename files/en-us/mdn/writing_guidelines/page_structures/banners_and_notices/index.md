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

```md
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

### Experimental: "Standards positions" banner

Occasionally, browser vendors disagree on how a feature is developing, and some may oppose it in its current form. In exceptional cases, MDN documents technologies in this state to encourage the web community to experiment with them, provide feedback, and help browser vendors reach a consensus.

It is important to clarify the current standardization status of such features to readers. While a longer-term solution for representing this information is not final, we are doing the following for specific high-profile technologies to avoid confusion:

- Adding this banner to the landing page for that feature (not for every subpage for the feature):

  ```text
  > **Warning:** This feature is currently opposed by <number> browser vendor(s). See the [Standards positions](#standards_positions) section below for details of opposition.
  ```

  - Replace `<number>` with the number of browser vendors opposing the feature.
  - Use `vendor` or `vendors` as appropriate.

- Adding a "Standards positions" section to the same page as the above banner, as a sub-section of the standard "Specifications" section.

> **Note:** See [Related Website Sets](/en-US/docs/Web/API/Storage_Access_API/Related_website_sets) for an example of the "Standards positions" section and what it should contain, as well as the landing page banner.
