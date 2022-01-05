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

- [`Interwiki`](https://github.com/mdn/yari/tree/master/kumascript/macros/Interwiki.ejs) makes it easy to create interwiki links. Currently it supports linking to Wikipedia and Wikimo. The first parameter is the name of the wiki ("wikipedia" or "wikimo"), and the second is the path of the article. For example, `\{\{interwiki("wikipedia", "Firefox")\}\}` shows up as {{ interwiki("wikipedia", "Firefox") }}. This template auto-detects the page language and directs to the same language on Wikipedia, for example.
- [`RFC`](https://github.com/mdn/yari/tree/master/kumascript/macros/RFC.ejs) creates a link to the specified RFC, given its number. The syntax is: `\{\{RFC(number)\}\}`. For example, `\{\{RFC(2616)\}\}` becomes {{ RFC(2616) }}.
- The [`anch`](https://github.com/mdn/yari/tree/master/kumascript/macros/anch.ejs) macro inserts a link to an anchor. `\{\{Anch("top")\}\}` produces `<a href="#top">top</a>` ({{ Anch("top") }}). You can also add a second parameter which contains replacement text to display as the link text.

### Landing page components

We have an assortment of macros that can be used to automatically generate the contents of landing pages. Here they are.

#### Lists of subpages

- [`ListSubpages`](https://github.com/mdn/yari/tree/master/kumascript/macros/ListSubpages.ejs) generates an unordered list of links to all the immediate children of the current page; useful for automatically generating tables of contents for sets of documentation.
- [`LandingPageListSubpages`](https://github.com/mdn/yari/tree/master/kumascript/macros/LandingPageListSubpages.ejs) outputs a two-column definition list of all immediate subpages of the current page, with their titles as the {{HTMLElement("dt")}} and their SEO summary as the {{HTMLElement("dd")}}. This makes it easy to automatically generate reasonably attractive landing pages.
- [`NavListWithPrioritizedPages`](https://github.com/mdn/yari/tree/master/kumascript/macros/NavListWithPrioritizedPages.ejs) generates an ordered list formatted properly for use in a zone navigation sidebar (or quicklinks). As input, you can specify zero or more page slugs that should be pulled out of the main list and instead inserted at the top of the list, in the given order. All remaining pages are placed in the list alphabetically. One level of subpages is included.
- [`APIListAlpha`](https://github.com/mdn/yari/tree/master/kumascript/macros/APIListAlpha.ejs) builds a list of the current page's subpages, formatted as a list of API terms, divided up by first letter. There are three parameters. The first is 0 if you want to include all top-level subpages or 1 to leave out subpages with "." in their names. The second and third let you add text to display as part of the name in each link. This can be used to add "<" and ">" for element links, or to add "()" at the end of lists of method names.
- [`SubpagesWithSummaries`](https://github.com/mdn/yari/tree/master/kumascript/macros/SubpagesWithSummaries.ejs) constructs a definition list of all the immediate children of the current page. There is no other formatting done. You can get a two-column list ready for use as a multi-column landing page using [`LandingPageListSubpages`](https://github.com/mdn/yari/tree/master/kumascript/macros/LandingPageListSubpages.ejs).

### Quicklinks

We have macros specifically designed to create [quicklinks](/en-US/docs/MDN/Structures/Quicklinks):

- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/tree/master/kumascript/macros/QuickLinksWithSubpages.ejs) creates a set of quicklinks comprised of the pages below the current page (or specified page, if one is given).
Up to two total levels of depth are generated.

### Transclusion

**Transclusion** is the embedding of part or all of one page into another.

> **Warning:** Do not use this feature/macro.
> We are in the process of removing it from MDN.

Exercise caution when using this macro, to ensure that the transcluded content makes sense in the context of the page it is embedded into.

[`page`](https://github.com/mdn/yari/tree/master/kumascript/macros/page.ejs) lets you embed some or all of a specific page into a document. It accepts five parameters:

1. The URI of the page to transclude. For example, "/en-US/docs/MDN/About".
2. The name of the section within the page to transclude. This can be specified either as the title string or as the ID of a block to copy over. If not specified, the entire article is transcluded. {{optional_inline}}
3. The revision number of the page version to transclude. This feature is not currently implemented, but would allow including text from specific versions of an article. {{unimplemented_inline}}
4. A Boolean value indicating whether or not to show the heading of the top-level section being transcluded. This is useful if you wish to specify your own heading. The default value is false, meaning the heading is not included by default. {{optional_inline}}
5. The heading level to use as the top heading level. This adjusts the outermost first-discovered level of the transcluded content to the specified number, and all other headings correspondingly. This lets you include content that has its own headings but adjust them to match the heading level at which you're including them. If you don't specify this value, the headings are not adjusted. {{unimplemented_inline}}

#### Example without heading

\\{{Page("/en-US/docs/MDN/About", "How you can help")}}

Result:

{{Page("/en-US/docs/MDN/About", "How you can help")}}

#### Example with heading

\\{{Page("/en-US/docs/MDN/About", "How you can help", 0, 1)}}

Result:

{{Page("/en-US/docs/MDN/About", "How you can help", 0, 1)}}

## Deprecated

These macros have been replace by other ways of doing the same thing, and should no longer be used. If you find them in existing articles, please replace them.

### Linking

- The [`SectionOnPage`](https://github.com/mdn/yari/tree/master/kumascript/macros/SectionOnPage.ejs) macro creates a phrase that links to both the name of a section and the article containing that section. For example, `\{{SectionOnPage("/en-US/docs/Mozilla/Firefox/Releases/21", "Changes for Web developers")}}` outputs the following: _{{SectionOnPage("/en-US/docs/Mozilla/Firefox/Releases/21", "Changes for Web developers")}}_.
- The [`manch`](https://github.com/mdn/yari/tree/master/kumascript/macros/manch.ejs) inserts a link to a method within the current interface; this is intended only for use in interface documentation pages. `\{\{manch("foo")\}\}` produces `<code><a href="current/path#foo">foo()</a></code>` ({{ manch("foo") }}).
- The [`Link`](https://github.com/mdn/yari/tree/master/kumascript/macros/Link.ejs) macro inserts a link to the specified page on MDN, using the page's title as the visible string to click on, and the tooltip picked up from the page's SEO summary.
- The [`LinkItem`](https://github.com/mdn/yari/tree/master/kumascript/macros/LinkItem.ejs) macro inserts a link to a specified URL, with the indicated text as the visible string to click on. The link automatically picks up as its tooltip the summary of the target page. This differs from [`Link`](https://github.com/mdn/yari/tree/master/kumascript/macros/Link.ejs) in that you must specify the title.
- The [`LinkItemDL`](https://github.com/mdn/yari/tree/master/kumascript/macros/LinkItemDL.ejs) macro inserts a link to a specified URL, with the indicated text as a {{HTMLElement("dt")}} which is also the link. The {{HTMLElement("dd")}} element contains the specified page's summary.
- [`funcref`](https://github.com/mdn/yari/tree/master/kumascript/macros/funcref.ejs) creates links to global functions (usually C++) documented on top-level pages. However, such pages are no longer created at the top-level of MDN.
- [`source`](https://github.com/mdn/yari/tree/master/kumascript/macros/source.ejs) allows you to link to a Mozilla source code file without having to type a long MXR URL using this syntax: `\{\{Source("browser/Makefile.in")\}\}`. This gives you: {{ Source("browser/Makefile.in") }}. The text of the link is the path provided; if you want different text, then just provide a second parameter, like so: `\{\{Source("browser/Makefile.in", "the browser/ Makefile.in")\}\}`, which produces {{ Source("browser/Makefile.in", "the browser/ Makefile.in") }}. Note that the link will be to the very latest version of the file in bleeding-edge code.
- [`Source_cvs`](https://github.com/mdn/yari/tree/master/kumascript/macros/Source_cvs.ejs) works just like [`source`](https://github.com/mdn/yari/tree/master/kumascript/macros/source.ejs), except it links to the [CVS](/en-US/docs/Mozilla/Developer_guide/Source_Code/CVS) repository instead of the newer [mozilla-central](/en-US/docs/Mozilla/Developer_guide/mozilla-central) one.
- [`LXRSearch`](https://github.com/mdn/yari/tree/master/kumascript/macros/LXRSearch.ejs) can be used to create an LXR search URL.
