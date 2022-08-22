---
title: Quicklinks
slug: MDN/Writing_guidelines/Page_structures/Quicklinks
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---
{{MDNSidebar}}

MDN supports adding quicklinks to pages; these are boxes containing a potentially hierarchical list of links to other pages on MDN or to pages off-site.
This article describes how to create quicklinks boxes.

## Quicklinks syntax

The quicklinks for a page are provided by creating a {{HTMLElement("section")}} block with the ID "Quick_links".
Then you place the contents that go into the quicklinks box within the section.
These should be formatted as an {{HTMLElement("ol")}} ordered list (optionally nested).
You can do this by using the numbered list button in the editor toolbar.
For example, your quicklinks HTML might look like this:

```html
<section id="Quick_links">
  <ol>
    <li><a href="http://docs.ckeditor.com/">CKEditor documentation site</a></li>
    <li><a href="http://mxr.mozilla.org/">MXR: Mozilla source cross-reference</a></li>
    <li class="toggle">
      <details><summary>Style guides</summary>
      <ol>
        <li><a href="http://www.economist.com/research/StyleGuide/">The Economist style guide</a></li>
        <li><a href="https://www.amazon.com/gp/product/0226104036/">The Chicago manual of style</a></li>
        <li><a href="http://www.answers.com/library/Dictionary">Answers.com dictionary</a></li>
        <li><a href="http://www.wsu.edu/~brians/errors/">Common Errors in English</a></li>
      </ol>
      </details>
    </li>
  </ol>
</section>
```

The important things to note:

- The list **should** be an ordered list.
- You may have nested lists by using a {{HTMLElement("details")}} containing another ordered list **inside** the same {{HTMLElement("li")}} block.

## Using macros to create quicklinks

It's worth noting that you can (and often **should**) use macros to generate quicklinks.
Any time you need to use the same set of quicklinks on more than one page, you should turn them into a macro.

Your macro can be as simple or as complex as necessary; it needs to output HTML similar to what's shown in [Quicklinks syntax](#quicklinks_syntax) above.

### Standard quicklinks macros

Here's a list of our standard macros for generating quicklinks.

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs)
  - : Builds the standard quicklinks for CSS Reference pages.
- [`HTMLRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLRef.ejs)
  - : Builds the standard quicklinks for HTML Reference pages.
- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs)
  - : Creates a set of quicklinks using the current page's (or the specified page's) children as the destinations.
    This creates hierarchical lists up to two levels deep.
    The pages' titles are used as the link text and their summaries as tooltips.
