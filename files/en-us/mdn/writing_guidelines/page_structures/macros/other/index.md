---
title: Other macros
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

In contrast to the macros listed in [Commonly-used macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), the macros documented in this article are used infrequently or only in specific contexts, or are deprecated.

## Special contexts

This macro is used only with particular contexts, such as a specific API reference.

- [`RFC`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/rfc.rs) creates a link to the specified RFC, given its number. The syntax is `\{{RFC(number)}}`. For example, `\{{RFC(2616)}}` becomes {{ RFC(2616) }}.

### Landing page components

We have an assortment of macros that can be used to automatically generate the contents of landing pages. Here they are.

#### Lists of subpages

- [`ListSubpages`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/listsubpages.rs) generates an unordered list of links to all the immediate children of the current page; useful for automatically generating tables of contents for sets of documentation.
- [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) constructs a definition list of all the immediate children of the current page, with their titles as the {{HTMLElement("dt")}} and their SEO summary as the {{HTMLElement("dd")}}. This makes it easy to automatically generate reasonably attractive landing pages.
- [`APIListAlpha`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_alpha.rs) builds a list of the current page's subpages, formatted as a list of API terms, divided up by first letter. There are three parameters. The first is 0 if you want to include all top-level subpages or 1 to leave out subpages with "." in their names. The second and third let you add text to display as part of the name in each link. This can be used to add "<" and ">" for element links, or to add "()" at the end of lists of method names.

### Lists of links

We have one macro specifically designed to create [lists of links](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars) within content:

- [`QuickLinksWithSubpages`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs) creates a list of links comprised of the pages below the current page (or specified page, if one is given). Up to two total levels of depth are generated.
