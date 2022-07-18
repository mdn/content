---
title: Does this belong on MDN Web Docs?
slug: MDN/Guidelines/Does_this_belong_on_MDN
tags:
  - Guide
  - Guidelines
  - MDN Meta
---
{{MDNSidebar}}

In this article, you'll find information describing how to decide whether or not a given topic and/or type of content should be included on MDN Web Docs. We'll also consider other places you might place content, although not in depth.

## The question

If you're preparing to document something, you may be trying to decide whether to put the information on MDN Web Docs. In addition, you may be considering maintaining documentation in your source code, putting the document on the [Mozilla wiki](https://wiki.mozilla.org/Main_Page), or in readme files in a Git repository. This article's purpose is to help you decide which of these options is right for your content.

The two main considerations for whether a document belongs on MDN are:

- The topic of the document (what is it about?)
- The nature of the document (what kind of document is it?)

Be aware that all contributions to MDN fall under specific open source licenses; these are [described in detail](/en-US/docs/MDN/About#copyrights_and_licenses) on our [About MDN](/en-US/docs/MDN/About) page.

> **Note:** Keep in mind that Mozilla's [Websites & Communications Terms of Use](https://www.mozilla.org/en-US/about/legal/terms/mozilla/) are in effect when you use or contribute to MDN Web Docs. Review this document to ensure that you're aware of what can and cannot be posted on Mozilla sites.

## What topics belong on MDN Web Docs?

In general, if it's an open web-facing technology, we document it on MDN. This means any feature that can be used by Web developers creating sites and applications now and in the near future. If it is implemented by multiple browsers and either accepted as standard or is progressing towards standardization, then yes, definitely. If it is still very experimental and not implemented in multiple browsers and/or liable to change, then it is still suitable for inclusion, but may not be seen as a priority for the writer's team to work on.

The primary focus is on front-end web technologies:

- [HTML](/en-US/docs/Web/HTML)
- [CSS](/en-US/docs/Web/CSS)
- [JavaScript](/en-US/docs/Web/JavaScript)
- [SVG](/en-US/docs/Web/SVG)
- [Web APIs](/en-US/docs/Web/API)
- [WebGL](/en-US/docs/Web/API/WebGL_API)
- etc.

> **Note:** Back-end technologies usually have their own documentation elsewhere that MDN does not attempt to supersede, although we [do have some exceptions](/en-US/docs/Learn/Server-side).

Also welcome are topics that cut across technologies but are relevant to Web development, such as:

- [Accessibility](/en-US/docs/Web/Accessibility)
- [AJAX](/en-US/docs/Web/Guide/AJAX)
- [Web graphics](/en-US/docs/Web/Guide/Graphics)
- [Progressive web apps](/en-US/docs/Web/Progressive_web_apps)
- [Web-based games](/en-US/docs/Games)

> **Note:** MDN covers some non-standard features if they're exposed to the Web, especially if they find common usage; for example, we have documentation for WebKit-specific CSS properties. MDN also covers some non-web standards technologies if they are considered useful enough to web developers — see our [Web-related technologies](/en-US/docs/Related) section.

## What topics don't belong on MDN Web Docs?

In general, anything that isn't an open web standard does not belong on MDN. The sections below provide more detail.

### Mozilla products

MDN Web Docs doesn't host documentation for Mozilla products anymore.

In particular, the following products have their own documentation site:

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Building and configuring Firefox](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html)
- [SpiderMonkey](https://firefox-source-docs.mozilla.org/js/)

### What else?

Other examples of inappropriate topics for MDN Web Docs:

- Technology that is not exposed to the Web and is specific to a non-Mozilla browser.
- Technology that is not related to the Web or Mozilla products.
- Documentation for end-users; for Mozilla products, such documentation belongs on the [Mozilla support site](https://support.mozilla.org).

## What types of documents belong on MDN?

In general, MDN is for _product_ documentation, not for _project_ or _process_ documentation (except [about MDN itself](/en-US/docs/MDN)). So, if the document is about "how to use a thing" or "how a thing works" (where the "thing" is in one of the topic categories mentioned above), then it can go on MDN. But if it about "who's working on developing a thing" or "plans for developing a thing", then it shouldn't go on MDN. In that case, if the thing is being developed under the umbrella of Mozilla, then the [Mozilla project wiki](https://wiki.mozilla.org/Main_Page) may be a good place for it.

Here are some examples of types of documents that should _not_ be placed on MDN:

- Planning documents
- Design documents
- Project proposals
- Specifications or standards
- Promotional material, advertising, or personal information
