---
title: How to tag pages
slug: MDN/Writing_guidelines/Howto/Tag
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---
{{MDNSidebar}}

**Article tags** are an important way to put readers in touch with helpful content. Each page should normally have several tags to help keep content organized. This article explains the best way to tag pages so that our readers can find information and we can keep the content organized.

Please use tags properly as explained below. If you don't, our automated tools will not correctly generate lists of content, landing pages, and cross-linking of articles.

> **Warning:** Note to translators and localizers: You should *not* translate any tags listed on this page. They are used for specific purposes such as certain site management tasks and automated data processing, and translating them would break these processes.

Tags used on MDN Web Docs can be classified into the following categories based on what the tags are used for or the information they convey:

- [Document type](#document_type_tags): Tags in this category convey the type of document it is –– a reference, a tutorial or a landing page. Our readers can use these tags to filter searches, so they're really important!
- [Topic identification](#topic_identification_tags): Tags in this category convey what the article is about. Is it about an API, the DOM, or graphics? Again, these tags are important because they can filter searches.
- [API identification](#api_identification_tags): Reference pages about an API need to identify the specific component of the API being documented (that is, what interface it's a part of and what property or method the page covers, if applicable). Tags in this category help with this information.
- [Technology status](#technology_status_tags): Tags in this category convey the status of the technology –– non-standard, deprecated or experimental.
- [Skill level](#skill-level_tags): Tags in this category are used for tutorials and guides and to indicate the level of information covered by the article.
- [Document metadata](#document_metadata_tags): The writing community uses tags to keep track of which pages need what kind of work.

The sections below explain these different categories in more detail and the tags that fall in each category.

## Document type tags

When you add one of these tags to an article, you help the automated tools to more accurately generate landing pages, tables of contents, and so on. Our new search system also uses these tags to help our readers locate reference or guide information easily.

We use the following tags to denote the appropriate document type:

- `Intro`
  - : The article provides introductory material about a topic. Ideally, each technology area should have only one "Intro".
- `Reference`
  - : The article contains reference material about an API, element, attribute, property, or the like.
- `Landing`
  - : The page is a landing page.
- `Guide`
  - : The article is a how-to or a guide page.
- `Example`
  - : The article is a code sample page or has code samples (that is, actual snippets of useful code, not one-line "syntax examples").

## Topic identification tags

By identifying the article's topic area, you help generate better search results (and landing pages and navigation as well).

While there's some room for flexibility here as we identify new topic areas, we try to limit ourselves to the names of APIs or technologies. Some useful examples include:

- `HTML`
- `CSS`
- `JavaScript` (notice the capital "S"!)
- `Document`
- `DOM`
- `API` for each API's overview, interface, method, and property
- `Method` for each method of an API
- `Property` for each property of an API
- `Graphics`
- `SVG`
- `WebGL`
- `Tools`
- `Web`
- `Element`
- `Extensions` and `WebExtensions` for WebExtension documentation

In general, the topic identification tag should be the name of an interface with a number of related pages (like [Node](/en-US/docs/Web/API/Node), which has many pages for its various properties and methods) or the name of an overall technology type. You might tag a page about WebGL with `Graphics` and `WebGL`, for example, but a page about {{HTMLElement("canvas")}} with `HTML`, `Element`, `Canvas`, and `Graphics`.

### Mozilla-specific content

These tags are used in Mozilla-specific content only:

- `Mozilla`
- `Firefox`
- `Gecko`
- `XUL`
- `XPCOM`

## API identification tags

Within the API reference, the following tags help to identify the part of API an article covers:

- `Interface`
  - : The main article for an interface should have this tag. For example, {{DOMxRef("RTCPeerConnection")}}.
- `Constructor`
  - : Each interface may have up to one page tagged "Constructor"; this is the interface's constructor. The page should have the same name as the interface, like {{DOMxRef("RTCPeerConnection.RTCPeerConnection()", "RTCPeerConnection()")}}.
- `Property`
  - : Every article describing a particular property within an interface needs this tag. See {{DOMxRef("RTCPeerConnection.connectionState")}} for example.
- `Method`
  - : Each article documenting an interface method needs this tag. See {{DOMxRef("RTCPeerConnection.createOffer()")}} for example.

In addition, reference pages need to include interface, property, and method names among their tags. This is illustrated in the following examples:

- The interface {{DOMxRef("RTCPeerConnection")}}: Include the tag `RTCPeerConnection` along with other relevant tags like `Interface`, `WebRTC`, `WebRTC API`, `API`, and `Reference`.
- The method {{DOMxRef("RTCPeerConnection.createOffer()")}}: Include the tags `RTCPeerConnection` and `createOffer` (note _no_ parentheses in tag names!) along with the other relevant tags, including `Method`, `WebRTC`, `WebRTC API`, `API`, and `Reference`. Consider including tags like `Offer` and `SDP`, which are also relevant here.
- The property {{DOMxRef("RTCPeerConnection.iceConnectionState")}}: Include the tags `RTCPeerConnection` and `iceConnectionState` along with the other relevant tags, including `Property`, `WebRTC`, `WebRTC API`, `API` and `Reference`. Also consider including `ICE`.

## Technology status tags

To help readers understand how viable a technology is, use these tags to label articles with respect to the status of the technology's specification. This isn't as detailed as actually explaining what the spec is and how far the technology has come in the specification process (that's what the Specifications table is for), but it helps the reader judge, at a glance, whether it's a good idea to use the technology described in the article.

Tags in this category include:

- `Read-only`
  - : The property or attribute is read-only.
- `Non-standard`
  - : The technology or API is not part of a standard, whether it's stable or not in any browsers which implement it (if it's not stable, it should also be Experimental). If you don't use this tag, your readers will assume the technology is standard. The browser compatibility table on the page should clarify which browser(s) support this technology or API.
- `Deprecated`
  - : The technology or API covered on the page is no longer recommended. It might be removed in the future or might only be kept for compatibility purposes. Avoid using this functionality.
- `Experimental`
  - : The technology is not standardized and is an experimental technology or API that may or may not ever become part of a standard. It is also subject to change in the browser engine (typically only one) that implements it. If the technology isn't part of any specification (even in draft form), it should also have the Non-standard tag.
- `Needs Privileges`
  - : The API requires privileged access to the device on which the code is running.
- `Certified Only`
  - : The API only works in certified code.

These tags are no excuse to leave out the [browser compatibility table](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) in your article! That should always be present.

## Skill-level tags

Use these tags only for guides and tutorials (that is, pages tagged `Guide`) to help users choose tutorials based on how familiar they are with a technology. There are three values for this:

- `Beginner`
  - : Articles designed to introduce the reader to a technology they've never used or have only a passing familiarity with.
- `Intermediate`
  - : Articles for users who have gotten started with the technology but aren't experts.
- `Advanced`
  - : Articles about stretching the capabilities of a technology and of the reader.

## Document metadata tags

The writing community uses these tags to label articles as requiring specific types of work. Here's a list of the ones we use most:

- `Draft`
  - : The article is not complete and is still actively being updated (although it's also possible it's been forgotten about). Try to check with the most recent contributors before making changes to avoid potential content collisions.
- `NeedsCompatTable`
  - : The article needs a table to specify compatibility of a feature across browsers. [See here](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) for a guide on contributing to browser compatibility.
- `NeedsContent`
  - : The article is a stub or is otherwise lacking information. This tag means that someone should review the content and add more details and/or finish writing the article.
- `NeedsExample`
  - : The article needs one or more examples to help illustrate the article's point. These examples should use one of the [code example styles](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples).
- `NeedsLiveSamples`
  - : The article has one or more examples that need to be updated to use the [live sample system](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples).
- `NeedsMarkupWork`
  - : The article needs improvement to the page markup (usually because the page content consists mostly or entirely of {{HTMLElement("p")}} tags).
- `NeedsSpecTable`
  - : The article needs a table to indicate on which specification document(s) the feature was defined.
- `NeedsUpdate`
  - : The content is out of date and needs to be updated.
- `l10n:exclude`
  - : The content is not really worth localizing and will not appear on localization status pages.
- `l10n:priority`
  - : The content is important and should be marked as a priority for MDN translators. Shows up in an extra priority table on localization status pages.

## Examples

To put it all together, to each page you assign tags from the different categories explained above. Some examples are shown below:

- A tutorial about WebGL for beginners will have the following tags:
  - `WebGL`
  - `Graphics`
  - `Guide`
  - `Beginner`
- A reference page for {{HTMLElement("canvas")}} will have the following tags:
  - `Canvas`
  - `HTML`
  - `Element`
  - `Graphics`
  - `Reference`

## Troubleshooting tag-related problems

There are several kinds of tag problems you can help fix.

### No tags

Generally, all articles should have at _least_ a "[document type](#document_type_tags)" and a "[topic type](#topic_identification_tags)" tag. Usually other tags are appropriate as well, but if you can help us ensure that the minimum tags are present, you'll be a documentation hero!

### Tags that don't follow our tagging standards

Please fix any documents that have tags that don't follow the standards described on this page.
    Note that you may occasionally see some localized tags (such as `Référence`) showing up on some English pages. This was due to a [bug in Kuma](https://bugzilla.mozilla.org/show_bug.cgi?id=776048), which caused the tags to reappear even if they were deleted. That bug has [since been fixed](https://bugzilla.mozilla.org/show_bug.cgi?id=776048#c37), so any remaining localized tags can be cleaned up if they're spotted.

### Incorrect tags

If you're looking at an article about HTML and it's tagged `JavaScript`, that's probably wrong! Likewise, if an article discusses Mozilla internals but has a `Web` tag, that's probably wrong too. Remove these tags and add the right tags if they aren't already there. Please also correct misspelled tags (e.g., `Javascript` will still match, since tags are case-insensitive, but let's not be sloppy!).

### Missing tags

If an article has some but not all of the tags it needs, feel free to add more. For example, if a page in JavaScript reference is (correctly) tagged `JavaScript` but nothing else, you're invited to tag the page `Reference` or [another type](#document_type_tags) as well!

### Tag spam

This insidious beast is the most revolting tag problem of all: some web vermin has deposited its droppings in the page tags (like "Free warez!" or "Hey I was browsing your site and wanted to ask you if you could help me solve this problem I'm having with Flash crashing all the time"). We've got to delete these right away! They're ugly, they're hard to manage if they're allowed to linger too long, and they're terrible for {{Glossary("SEO")}}.
