---
title: What we write
slug: MDN/Writing_guidelines/What_we_write
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

MDN Web Docs contains _browser-neutral_ documentation that enables web developers to write _browser-agnostic_ code. In this article, you'll find information about whether or not a given topic and/or type of content should be included on MDN Web Docs.

## Editorial Policies

This section describes the policies set by the Mozilla MDN staff to govern the content on MDN Web Docs. All contributors to MDN Web Docs are expected to abide by these policies.

### Relevance

All content on MDN Web Docs must be relevant to the technology section in which it appears. Spam (commercial advertisement) and other irrelevant content will never be accepted onto the site. Contributors who keep trying to submit spam may be banned from MDN at the discretion of Mozilla MDN staff.

Outbound links to commercial sites that are relevant to the topic from which they are linked will be judged on a case-by-case basis. Their value in aiding web developers must outweigh the commercial benefit to the linked site.

> [!NOTE]
> You will see links to commercial sites in the MDN [Learn web development](/en-US/docs/Learn_web_development) section, but these are used sparingly, and we only link to trusted education partners. You can read more about this at [Learn web development writing guidelines > External links and embeds](/en-US/docs/MDN/Writing_guidelines/Learning_content#external_links_and_embeds).

### Neutrality

Articles on MDN Web Docs must maintain a [neutral point-of-view](https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view), reporting on browser variations without editorial bias. Derogatory comments about any browser or user agent is not acceptable.

### Standardization

Web technologies to be documented on MDN Web Docs should be on a standards track and must be implemented by at least one rendering engine. Variations in browser support are documented in the [browser compatibility](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) section of an article.

## Suggesting content

If you'd like to suggest content for MDN Web Docs, please make sure you read this page before submitting to ensure what you are suggesting is appropriate.

For new reference pages or guides, please open a [new issue](https://github.com/mdn/mdn/issues/new/choose) outlining what content you are suggesting and why (please be as explicit as possible).

For suggesting larger projects that involve new sections of content, please refer to the [Criteria for inclusion](/en-US/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion) page, which also outlines the application process.

## Topics that belong on MDN Web Docs

In general, if it's an open web technology, we document it on MDN Web Docs. This includes any feature that can be used by web developers to create websites and applications, now and in the near future.

If a feature is implemented by multiple browsers and either accepted as standard or is progressing towards standardization, then yes, we definitely document it here. If a feature is still very experimental and not implemented in multiple browsers and/or liable to change, then it is still suitable for inclusion but may not be seen as a priority for the writing team to work on.

In other words, web technologies to be documented on MDN Web Docs should fulfil all of the following criteria:

- Be on a standards track.
- Be specified in a specification published by a reliable standards body.
- Be implemented by at least one rendering engine.
- Be released in a stable browser version.

Our primary focus is to write about the following front-end web technologies:

- [HTML](/en-US/docs/Web/HTML)
- [CSS](/en-US/docs/Web/CSS)
- [JavaScript](/en-US/docs/Web/JavaScript)
- [Web APIs](/en-US/docs/Web/API)
- [HTTP](/en-US/docs/Web/HTTP)

We also document some broader topics, such as [SVG](/en-US/docs/Web/SVG), [XML](/en-US/docs/Web/XML), [WebAssembly](/en-US/docs/WebAssembly), and [Accessibility](/en-US/docs/Learn_web_development/Core/Accessibility). In addition, we provide extensive [learning guides](/en-US/docs/Learn_web_development) for these technologies and also a [glossary](/en-US/docs/Glossary).

> [!NOTE]
> Backend technologies usually have their own documentation elsewhere that MDN Web Docs does not attempt to supersede, although we [do have some exceptions](/en-US/docs/Learn_web_development/Extensions/Server-side).

All content on MDN Web Docs must be relevant to the technology section in which it appears. Contributors are expected to follow these [MDN writing guidelines](/en-US/docs/MDN/Writing_guidelines) for writing style, code samples, and other topics.

For more details about the criteria for whether or not a technology can be documented on MDN Web Docs, see the [Criteria for inclusion](/en-US/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion) page.

### When we document a new technology

On MDN Web Docs, we are constantly looking to document new web standards technologies as appropriate.
We try to strike a balance between publishing the documentation early enough so that developers can learn about new features as soon as they need to and publishing it late enough so that the technology is mature and stable so that the documentation won't need constant updates or rapid removal.

In general, our definition of the earliest we'll consider documenting a new technology is: _When the feature is on a standards track and is implemented somewhere._

We consider documenting a new technology if it is:

- Specified in a specification document published under a reliable standards organization (such as W3C, WHATWG, Khronos, IETF, etc.) and has reached a reasonable level of stability (e.g., a W3C working draft or candidate recommendation or when the specification is looking fairly stable judging by the flow of issues filed against it), and
- Implemented consistently in at least one browser, with other browser developers showing signs of interest (such as an active ticket or an "intent to implement" process is in effect).

We do not document a new technology if:

- It doesn't have a specification or the specification is a rough note that looks liable to change,
- One or zero browsers have currently implemented it and non-supporting browsers are not showing signs of interest in implementing it. You can gauge this by asking engineers who work on those browsers and by looking at browser bug trackers and mailing lists, etc.,
- Isn't a web-exposed technology and/or is completely proprietary, or
- It's already showing signs of being deprecated or superseded by a similar feature.

## Topics that don't belong on MDN Web Docs

In general, anything that isn't an open web standard does not belong on MDN Web Docs. Spam (commercial advertisement) and other irrelevant content will never be accepted into the site. Contributors who keep trying to submit spam may be banned from MDN at the discretion of Mozilla MDN staff.

Examples of inappropriate topics for MDN Web Docs include:

- Technology that is not exposed to the web and is specific to a browser.
- Technology that is not related to the web.
- Documentation for end-users. For Mozilla products, for example, such documentation belongs on the [Mozilla support site](https://support.mozilla.org/).
- Self-linking or self-promoting external links. Check out these guidelines in our [writing style guide](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) before adding an external link.

### When we remove documentation

Pages are deleted from MDN Web Docs if they don't contain information that is useful in any way anymore, are out-of-date enough, and/or might be incorrect to the point where keeping them around might be misleading.

The following examples describe situations when pages/content might be deleted:

- Articles contain information about features that weren't implemented across all browsers and were later withdrawn (usually experimental features such as prefixed functionality).
- Reference pages describe features that were removed from the specification before they were implemented in any browser.
- Articles cover techniques that were later shown to be bad practices and superseded by better techniques.
- Articles contain information that were later replaced by other, better quality articles.
- Articles contain content that is inappropriate for MDN Web Docs.
- Sections of MDN Web Docs are not focused on open web technologies and are a maintenance burden.

For more information on _how_ to delete documents, please see the [Creating, moving and deleting pages](/en-US/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) guide.

## Types of documents allowed on MDN Web Docs

Generally, our documentation falls into the following categories:

- Reference
- Guide
- Glossary
- Learn/Tutorials

In general, MDN Web Docs is for _product_ documentation, not for _project_ or _process_ documentation. So, if the document is about "how to use a thing" or "how a thing works" (where, the "thing" is in one of the topic categories mentioned above), then it can go on MDN Web Docs.

If a document is about "who's working on developing a thing" or "plans for developing a thing", then it shouldn't go on MDN Web Docs.

Here are some examples of types of documents that should _not_ be placed on MDN Web Docs:

- Planning documents
- Design documents
- Project proposals
- Specifications or standards
- Promotional material, advertising, or personal information
