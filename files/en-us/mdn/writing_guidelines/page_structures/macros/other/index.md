---
title: Other macros
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---
{{MDNSidebar}}

In contrast to the macros listed in [Commonly-used macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), the macros documented in this article are used infrequently or only in specific contexts, or are deprecated.

## Special contexts

This macro is used only with particular contexts, such as a specific API reference.

- [`RFC`](https://github.com/mdn/yari/blob/main/kumascript/macros/RFC.ejs) creates a link to the specified RFC, given its number. The syntax is: `\{\{RFC(number)\}\}`. For example, `\{\{RFC(2616)\}\}` becomes {{ RFC(2616) }}.

### Landing page components

We have an assortment of macros that can be used to automatically generate the contents of landing pages. Here they are.

#### Lists of subpages

- [`ListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpages.ejs) generates an unordered list of links to all the immediate children of the current page; useful for automatically generating tables of contents for sets of documentation.
- [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) outputs a two-column definition list of all immediate subpages of the current page, with their titles as the {{HTMLElement("dt")}} and their SEO summary as the {{HTMLElement("dd")}}. This makes it easy to automatically generate reasonably attractive landing pages.
- [`APIListAlpha`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIListAlpha.ejs) builds a list of the current page's subpages, formatted as a list of API terms, divided up by first letter. There are three parameters. The first is 0 if you want to include all top-level subpages or 1 to leave out subpages with "." in their names. The second and third let you add text to display as part of the name in each link. This can be used to add "<" and ">" for element links, or to add "()" at the end of lists of method names.
- [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) constructs a definition list of all the immediate children of the current page. There is no other formatting done. You can get a two-column list ready for use as a multi-column landing page using [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs).

### Quicklinks

We have one macro specifically designed to create [quicklinks](/en-US/docs/MDN/Writing_guidelines/Page_structures/Quicklinks):

- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs) creates a set of quicklinks comprised of the pages below the current page (or specified page, if one is given). Up to two total levels of depth are generated.

## Deprecated

These macros have been replace by other ways of doing the same thing, and should no longer be used. If you find them in existing articles, please replace them.

### Linking

- The [`SectionOnPage`](https://github.com/mdn/yari/blob/main/kumascript/macros/SectionOnPage.ejs) macro creates a phrase that links to both the name of a section and the article containing that section. For example, `\{{SectionOnPage("/en-US/docs/Mozilla/Firefox/Releases/21", "Changes for Web developers")}}` outputs the following: _{{SectionOnPage("/en-US/docs/Mozilla/Firefox/Releases/21", "Changes for Web developers")}}_.
- The [`Link`](https://github.com/mdn/yari/blob/main/kumascript/macros/Link.ejs) macro inserts a link to the specified page on MDN, using the page's title as the visible string to click on, and the tooltip picked up from the page's SEO summary.
