---
title: How to properly tag pages
slug: MDN/Contribute/Howto/Tag
tags:
  - Beginner
  - Contribute
  - Glossary
  - Guide
  - Howto
  - Intro
  - MDN Meta
  - Tutorial
---
{{MDNSidebar}}

**Article tags** are an important way to put visitors in touch with helpful content. Each page should normally have several tags to help keep content organized. This page explains the best way to tag pages so that our readers can find information and we can keep ourselves organized.

Please use tags properly as explained below. If you don't, our automated tools will not correctly generate lists of content, landing pages, and cross-linking of articles.

> **Warning:** Note to translators and localizers: You should *not* translate any tags listed on this page. They are used for specific purposes such as certain site management tasks and automated data processing, and translating them would break these processes.

## How MDN uses tags

Tags get used on MDN several ways:

- {{anch("Document category", "Document categorization")}}
  - : What type of document is it? Is it a reference? A tutorial? A landing page? Our visitors can use these tags to filter searches, so they're really important!
- {{anch("Topic", "Topic identification")}}
  - : What is the article about? Is it about an API? The DOM? Graphics? Again, these tags are important because they can filter searches.
- {{anch("API identification")}}
  - : Reference pages about an API need to identify the specific component of the API being documented (that is, what interface it's a part of, and what property or method the page covers, if applicable).
- {{anch("Technology status")}}
  - : What's the status of the technology? Is it non-standard? Obsolete or deprecated? Experimental?
- {{anch("Skill level")}}
  - : For tutorials and guides, how advanced is the material covered by the article?
- {{anch("Document metadata")}}
  - : The writing community uses tags to keep track of which pages need what kind of work.

## Tag type guide

Here's a quick guide to the types of tags and possible values for them.

### Document category

When you tag an article with one of these categories, you help the automated tools more accurately generate landing pages, tables of contents, and so on. Our new search system will also use these terms so that our visitors can locate reference or guide information at will.

We use the following category names as standard tagging terms:

- `Intro`
  - : The article provides introductory material about a topic. Ideally each technology area should have only one "Intro"
- `Reference`
  - : The article contains reference material about an API, element, attribute, property, or the like.
- `Landing`
  - : The page is a landing page.
- `Guide`
  - : The article is a how-to or guide page.
- `Example`
  - : The article is a code sample page, or has code samples (that is, actual snippets of useful code, not one-line "syntax examples").

### Topic

By identifying the article's topic area, you are helping generate better search results (and landing pages and navigation as well).

While there's some room for flexibility here as we identify new topic areas, we try to limit ourselves to the names of APIs or technologies. Some useful examples:

- `HTML`
- `CSS`
- `JavaScript` (notice the capital "S"!)
- `Document`
- `DOM`
- `API` for each API's overview, interface, method, and property.
- `Method` for each method of an API
- `Property` for each property of an API
- `Graphics`
- `SVG`
- `WebGL`
- `Tools`
- `Web`
- `Element`
- `Extensions` and `WebExtensions` for WebExtension documentation.

In general, your topic identification tag should be the name of an interface with a number of related pages (like [Node](/en-US/docs/Web/API/Node), which has many pages for its various properties and methods), or the name of an overall technology type. You might tag a page about WebGL with `Graphics` and `WebGL`, for example, but a page about {{HTMLElement("canvas")}} with `HTML`, `Element`, `Canvas`, and `Graphics`.

#### Mozilla-specific content

These tags are used in Mozilla-specific content only:

- `Mozilla`
- `Firefox`
- `Gecko`
- `XUL`
- `XPCOM`

### API identification

Within the API reference, each article should identify which part of the API it covers:

- `Interface`
  - : The main article for an interface should have this tag. For example, {{DOMxRef("RTCPeerConnection")}}.
- `Constructor`
  - : Each interface may have up to one page tagged "Constructor"; this is the interface's constructor. The page should have the same name as the interface, like {{DOMxRef("RTCPeerConnection.RTCPeerConnection()", "RTCPeerConnection()")}}.
- `Property`
  - : Every article describing a particular property within an interface needs this tag. See {{DOMxRef("RTCPeerConnection.connectionState")}}, for example.
- `Method`
  - : Each article documenting an interface method needs this tag. See {{DOMxRef("RTCPeerConnection.createOffer()")}} for example.

In addition, the reference pages need to include interface, property, and method names among their tags. Some examples:

- The interface {{DOMxRef("RTCPeerConnection")}}
  - : Include the tag `RTCPeerConnection` along with the other relevant tags (`Interface`, `WebRTC`, `WebRTC API`, `API`, `Reference`, and so forth).
- The method {{DOMxRef("RTCPeerConnection.createOffer()")}}
  - : Include the tags `RTCPeerConnection` and `createOffer` (note _no_ parentheses in tag names!) along with the other relevant tags, including `Method`, `WebRTC`, `WebRTC API`, `API`, `Reference`, and so forth. Consider including things like `Offer` and `SDP`, which are also relevant here.
- The property {{DOMxRef("RTCPeerConnection.iceConnectionState")}}
  - : Include the tags `RTCPeerConnection` and `iceConnectionState` along with the other relevant tags, including `Property`, `WebRTC`, `WebRTC API`, `API` and `Reference`. Also consider including `ICE`.

### Technology status

To help the reader understand how viable a technology is, we use tags to label pages as to the status of the technology's specification. This isn't as detailed as actually explaining what the spec is and how far the technology has come in the specification process (that's what the Specifications table is for), but it helps the reader judge, at a glance, whether it's a good idea to use the technology described in the article.

Here are possible values for these tags:

- `Read-only`
  - : Apply this tag to reference pages which describe a property or attribute which is read-only.
- `Non-standard`
  - : Indicates that the technology or API described on the page is not part of a standard, whether it's stable or not in any browsers which implement it (if it's not stable, it should also be Experimental). If you don't use this tag, your readers will assume the technology is standard. The compatibility table on the page should clarify which browser(s) support this technology or API.
- `Deprecated`
  - : The technology or API covered on the page is marked as deprecated in the specification, and is likely to eventually be removed, but is generally still available in current versions of browsers.
- `Obsolete`
  - : The technology or API has been deemed obsolete and has been removed (or is actively being removed) from all or most current browsers.
- `Experimental`
  - : The technology is not standardized, and is an experimental technology or API that may or may not ever become part of a standard. It is also subject to change in the browser engine (typically only one) that implements it. If the technology isn't part of any specification (even in draft form), it should also have the Non-standard tag.
- `Needs Privileges`
  - : The API requires privileged access to the device on which the code is running.
- `Certified Only`
  - : The API only works in certified code.

These tags are no excuse to leave out the [compatibility table](/en-US/docs/MDN/Structures/Compatibility_tables) in your article! That should always be present.

### Skill level

Use the skill-level tag type only for guides and tutorials (that is, pages tagged `Guide`) to help users choose tutorials based on how familiar they are with a technology. There are three values for this:

- `Beginner`
  - : Articles designed to introduce the reader to a technology they've never used or have only a passing familiarity with.
- `Intermediate`
  - : Articles for users who have gotten started with the technology but aren't experts.
- `Advanced`
  - : Articles about stretching the capabilities of a technology and of the reader.

### Document metadata

The writing community uses tags to label articles as requiring specific types of work. Here's a list of the ones we use most:

- `Draft`
  - : The article is not complete, and is at least in theory still actively being updated (although it's also possible it's been forgotten about). Try to check with the most recent contributors before making changes, in order to avoid potential content collisions.
- `NeedsCompatTable`
  - : The article needs a table to specify compatibility of a feature across browsers. [See here](/en-US/docs/MDN/Structures/Compatibility_tables) for a guide on contributing to browser compatibility.
- `NeedsContent`
  - : The article is a stub, or is otherwise lacking information. This tag means that someone should review the content and add more details and/or finish writing the article.
- `NeedsExample`
  - : The article needs one or more examples created to help illustrate the article's point. These examples should use one of the [code example styles](/en-US/docs/MDN/Structures/Code_examples).
- `NeedsLiveSamples`
  - : The article has one or more examples that need to be updated to use the [live sample system](/en-US/docs/MDN/Structures/Live_samples).
- `NeedsMarkupWork`
  - : The article needs improvement to the page markup (usually because the page content consists mostly or entirely of {{HTMLElement("p")}} tags).
- `NeedsSpecTable`
  - : The article needs a table to indicate on which specification document(s) the feature was defined.
- `NeedsUpdate`
  - : The content is out of date and needs to be updated.
- `l10n:exclude`
  - : The content is not really worth localizing and will not appear on localization status pages.
- `l10n:priority`
  - : The content is important and should be marked as a priority for MDN translators. Shows up in an extra priority table on localization status pages.

## Putting it all together

So to each page you assign tags from several tag types, for example

- A tutorial about WebGL for beginners
  - : WebGL, Graphics, Guide, Beginner
- Reference page for {{HTMLElement("canvas")}}
  - : Canvas, HTML, Element, Graphics, Reference
- A landing page for Firefox developer tools
  - : Tools, Firefox, Landing

## Tagging problems you can fix

There are several kinds of tag problems you can help fix:

- No tags
  - : Generally articles should have at _least_ a "{{anch("Document category", "category")}}" tag and a "{{anch("Topic", "topic")}}" tag. Usually other tags are appropriate as well, but if you can help us ensure that the minimum tags are present, you'll be a documentation hero!
- Tags that don't follow our tagging standards
  - : Please fix any documents whose tags don't follow the standards on this page.
    Note that you may occasionally see some localized tags (such as `Référence`) showing up on some English pages. This was due to a [bug in Kuma](https://bugzilla.mozilla.org/show_bug.cgi?id=776048), which caused the tags to reappear even if they were deleted. That bug has [since been fixed](https://bugzilla.mozilla.org/show_bug.cgi?id=776048#c37), so any remaining localized tags can be cleaned up if they're spotted.
- Incorrect tags
  - : If you're looking at an article about HTML and it's tagged "JavaScript", that's probably wrong! Likewise, if an article discusses Mozilla internals but has a "Web" tag, that's probably wrong too. Remove these tags and add the right tags if they aren't already there. Please also correct misspelled tags (e.g., "Javascript" will still match, since tags are case-insensitive, but let's not be sloppy!).
- Missing tags
  - : If an article has some but not all of the tags it needs, feel free to add more. For example, if a page in JavaScript reference is (correctly) tagged "JavaScript" but nothing else, you're invited to tag the page "Reference" or {{anch("Document category", "another category tag")}} as well!
- Tag spam
  - : This insidious beast is the most revolting tag problem of all: some Web vermin has deposited its droppings in the page tags (like "Free warez!" or "Hey I was browsing your site and wanted to ask you if you could help me solve this problem I'm having with Flash crashing all the time"). We've got to delete these right away! They're ugly, they're hard to manage if they're allowed to linger too long, and they're terrible for {{Glossary("SEO")}}.
