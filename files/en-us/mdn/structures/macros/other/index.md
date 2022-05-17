---
title: Other macros
slug: MDN/Structures/Macros/Other
tags:
  - Macros
  - Reference
---
{{MDNSidebar}}

In contrast to the macros listed in [Commonly-used macros](/en-US/docs/MDN/Structures/Macros/Commonly-used_macros), the macros documented in this article are used infrequently or only in specific contexts, or are deprecated.

## Special contexts

These macros are used only with particular contexts, such as a specific API reference.

- [`Interwiki`](https://github.com/mdn/yari/blob/main/kumascript/macros/Interwiki.ejs) makes it easy to create interwiki links. Currently it supports linking to Wikipedia and Wikimo. The first parameter is the name of the wiki ("wikipedia" or "wikimo"), and the second is the path of the article. For example, `\{\{interwiki("wikipedia", "Firefox")\}\}` shows up as {{ interwiki("wikipedia", "Firefox") }}. This template auto-detects the page language and directs to the same language on Wikipedia, for example.
- [`RFC`](https://github.com/mdn/yari/blob/main/kumascript/macros/RFC.ejs) creates a link to the specified RFC, given its number. The syntax is: `\{\{RFC(number)\}\}`. For example, `\{\{RFC(2616)\}\}` becomes {{ RFC(2616) }}.

### Landing page components

We have an assortment of macros that can be used to automatically generate the contents of landing pages. Here they are.

#### Lists of subpages

- [`ListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpages.ejs) generates an unordered list of links to all the immediate children of the current page; useful for automatically generating tables of contents for sets of documentation.
- [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) outputs a two-column definition list of all immediate subpages of the current page, with their titles as the {{HTMLElement("dt")}} and their SEO summary as the {{HTMLElement("dd")}}. This makes it easy to automatically generate reasonably attractive landing pages.
- [`NavListWithPrioritizedPages`](https://github.com/mdn/yari/tree/main/kumascript/macros/NavListWithPrioritizedPages.ejs) generates an ordered list formatted properly for use in a zone navigation sidebar (or quicklinks). As input, you can specify zero or more page slugs that should be pulled out of the main list and instead inserted at the top of the list, in the given order. All remaining pages are placed in the list alphabetically. One level of subpages is included.
- [`APIListAlpha`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIListAlpha.ejs) builds a list of the current page's subpages, formatted as a list of API terms, divided up by first letter. There are three parameters. The first is 0 if you want to include all top-level subpages or 1 to leave out subpages with "." in their names. The second and third let you add text to display as part of the name in each link. This can be used to add "<" and ">" for element links, or to add "()" at the end of lists of method names.
- [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) constructs a definition list of all the immediate children of the current page. There is no other formatting done. You can get a two-column list ready for use as a multi-column landing page using [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs).

### Quicklinks

We have macros specifically designed to create [quicklinks](/en-US/docs/MDN/Structures/Quicklinks):

- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs) creates a set of quicklinks comprised of the pages below the current page (or specified page, if one is given).
Up to two total levels of depth are generated.

## Deprecated

These macros have been replace by other ways of doing the same thing, and should no longer be used. If you find them in existing articles, please replace them.

### Linking

- The [`SectionOnPage`](https://github.com/mdn/yari/blob/main/kumascript/macros/SectionOnPage.ejs) macro creates a phrase that links to both the name of a section and the article containing that section. For example, `\{{SectionOnPage("/en-US/docs/Mozilla/Firefox/Releases/21", "Changes for Web developers")}}` outputs the following: _{{SectionOnPage("/en-US/docs/Mozilla/Firefox/Releases/21", "Changes for Web developers")}}_.
- The [`Link`](https://github.com/mdn/yari/blob/main/kumascript/macros/Link.ejs) macro inserts a link to the specified page on MDN, using the page's title as the visible string to click on, and the tooltip picked up from the page's SEO summary.
- The [`LinkItem`](https://github.com/mdn/yari/tree/main/kumascript/macros/LinkItem.ejs) macro inserts a link to a specified URL, with the indicated text as the visible string to click on. The link automatically picks up as its tooltip the summary of the target page. This differs from [`Link`](https://github.com/mdn/yari/blob/main/kumascript/macros/Link.ejs) in that you must specify the title.
- The [`LinkItemDL`](https://github.com/mdn/yari/tree/main/kumascript/macros/LinkItemDL.ejs) macro inserts a link to a specified URL, with the indicated text as a {{HTMLElement("dt")}} which is also the link. The {{HTMLElement("dd")}} element contains the specified page's summary.
- [`funcref`](https://github.com/mdn/yari/tree/main/kumascript/macros/funcref.ejs) creates links to global functions (usually C++) documented on top-level pages. However, such pages are no longer created at the top-level of MDN.
- [`source`](https://github.com/mdn/yari/blob/main/kumascript/macros/source.ejs) allows you to link to a Mozilla source code file without having to type a long MXR URL using this syntax: `\{\{Source("browser/Makefile.in")\}\}`. This gives you: {{ Source("browser/Makefile.in") }}. The text of the link is the path provided; if you want different text, then just provide a second parameter, like so: `\{\{Source("browser/Makefile.in", "the browser/ Makefile.in")\}\}`, which produces {{ Source("browser/Makefile.in", "the browser/ Makefile.in") }}. Note that the link will be to the very latest version of the file in bleeding-edge code.
- [`Source_cvs`](https://github.com/mdn/yari/tree/main/kumascript/macros/Source_cvs.ejs) works just like [`source`](https://github.com/mdn/yari/blob/main/kumascript/macros/source.ejs), except it links to the [CVS](/en-US/docs/Mozilla/Developer_guide/Source_Code/CVS) repository instead of the newer [mozilla-central](/en-US/docs/Mozilla/Developer_guide/mozilla-central) one.
- [`LXRSearch`](https://github.com/mdn/yari/blob/main/kumascript/macros/LXRSearch.ejs) can be used to create an LXR search URL.
