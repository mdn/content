---
title: Banners and notices
slug: MDN/Structures/Banners_and_notices
tags:
  - Guide
  - MDN Meta
  - Structures
---
<div>{{MDNSidebar}}</div>

<p>Sometimes, an article needs a special notice added to it. This might happen if the page covers deprecated technology or other material that shouldn't be used in production code. This article covers the most common such cases and what to do.</p>

<h2 id="How_to_add_notice_boxes">How to add notice boxes</h2>

<p>In most cases, you apply these notices by adding a macro call to inject an appropriate banner into the page content, and by adding a tag to the page's list of tags.</p>

<p>To do this, you insert the macro call at the top of the article, and add the new tag to the list. Once you've done that, raise a pull request and get your changes reviewed and merged. From then on, an appropriate banner will appear on the page, and any macros that reference page tags when looking for up-to-date articles will know that the page you've updated is deprecated, or whatever.</p>

<div class="note">
  <p><strong>Note:</strong> To learn more about editing, see our <a href="https://github.com/mdn/content">content repo README</a>.</p>
</div>

<p>Sometimes, you might want to flag just a single item in a list of items, or in a table, as obsolete, deprecated, or the like. There are special versions of each of the following macros for that; change "_header" to "_inline" to the end of the macro's name.</p>

<h2 id="Deprecated_content">Deprecated content</h2>

<p>Deprecated content is content that covers a technology or idea that is in the process of becoming obsolete. It's no longer recommended, and is expected to be removed from browsers in the relatively near future. You can mark pages as deprecated using the {{TemplateLink("deprecated_header")}} macro. Just like with obsolete content, you can specify the Gecko version in which the technology was deprecated as a parameter, if the technology is Gecko-specific.</p>

<p>You should also add the tag "Deprecated" to the page.</p>

<h2 id="Non-standard_content">Non-standard content</h2>

<p>Non-standard content is any content not yet part of a Web standard; this includes any technology that isn't even proposed as a draft specification, even if it's implemented by multiple browsers. You should use the {{TemplateLink("non-standard_header")}} macro on these pages, and tag the pages with "Non-standard".</p>
