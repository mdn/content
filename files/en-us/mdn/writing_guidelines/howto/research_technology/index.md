---
title: How to research a technology
slug: MDN/Writing_guidelines/Howto/Research_technology
page-type: mdn-writing-guide
---

{{MDNSidebar}}

This article gives you some handy information about approaching how to document technologies.

## Do the prep work

Before starting to document or update something on MDN Web Docs, there are some things you should prepare and plan before starting to actually write.

It is assumed that before reading this guide, you have a reasonable knowledge of:

- Web technologies like HTML, CSS, and JavaScript.
- Reading web technology specifications. You'll be looking at these a lot as you document APIs.

Everything else can be learned along the way.

### Check out resources

Useful resources for writing any documentation include:

1. The [How-to guides](/en-US/docs/MDN/Writing_guidelines/Howto) for MDN Web Docs: You're already here, but it's good to browse through all the articles and familiarize yourself with our writing style, the different types of pages and what sections are included in them, and the different ways we include different parts of the page (like specifications and browser compatibility).
2. The latest specification:
   Different standards bodies create specifications for technologies that are documented on MDN Web Docs. For example, TC39 for JavaScript or the W3C for HTML, CSS, and Web APIs.
   Specifications are linked to from reference pages on MDN Web Docs (check the 'Specifications' section). Alternatively, you can usually do a web search. Always work from the latest, most up-to-date specification.
3. The latest modern web browsers:
   These should be experimental/alpha builds such as [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)/[Chrome Canary](https://www.google.com/intl/en/chrome/canary/) that are more likely to support the features you are documenting.
   This is especially pertinent if you are documenting a feature that is 'upcoming'.
4. Demos/blog posts/other info: Find as much info as you can. If you are updating a technology because it has changed, ensure that the resources you are using to learn are not out of date. This is why the first two points above are important.

It can also be wise to try and find someone to help answer questions. This can be the specification authors or the engineers who implement browser features.

### Read specifications

This can feel a little alien to start, but the more you do it the more you get used to it. Here are some good links to help you get started:

- [How to read W3C specs](https://alistapart.com/article/readspec/) by J. David Eisenberg on A List Apart
- [Understanding the CSS Specifications](https://www.w3.org/Style/CSS/read) from the w3c
- [How to read web specs Part I – Or: WebVR, how do you work?](https://surma.dev/things/reading-specs/) talks through reading the WebVR spec specifically, but is a great introduction to reading Web API specs.
- [How to read web specs Part IIa – Or: ECMAScript Symbols](https://surma.dev/things/reading-specs-2/) the second part to the link above contains information on understanding the ECMAScript specification which outlines the JavaScript language

In addition, we have a guide on [Information contained in a WebIDL file](/en-US/docs/MDN/Writing_guidelines/Howto/Write_an_API_reference/Information_contained_in_a_WebIDL_file), which can really help when reading Web API specs.

## Explore the feature

You will return to writing code examples or building demos many times through the course of documenting a technology, but it is very useful to start by spending time familiarizing yourself with how the technology works. This is a really valuable exercise because it gives you a good understanding of what the use cases are (_why_ a developer would use this technology) and help with creating some code examples at the same time.

> **Note:** If the specification has been recently updated so that, say, a method is now defined differently, but the old method still works in browsers, you will often have to document both in the same place so that the old and new methods are covered.
> If you need help, refer to demos you have found, or ask an engineering contact.

## Create the list of pages to write or update

The different pages that you need to write from scratch or update varies depending on the technology you are writing about. Check out the [Page types](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types) and the relevant section for the technology you're documenting. You'll most likely need to update existing documentation as well, so search MDN Web Docs for pages that are related to what you are writing about.

### Sidebars

It's possible that the sidebar of the pages you write will also need to be defined or updated. To find out if this is needed and how to do it, [check out our sidebar guide](/en-US/docs/MDN/Writing_guidelines/Howto/Write_an_API_reference/Sidebars).

### Code examples

Some of the code examples for MDN Web Docs are held in separate repositories. Most notably, these are the interactive examples that appear in the "Try it" section in the reference pages and the larger demo code needed for guides. If you do need to add to or amend one of these repositories, it's a good idea to make a note of it in your list.

This [article](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) describes the different types of code examples we use on MDN Web Docs.

### Example

Let's say you're documenting a new Web API, your initial list of sections to be documented will look something like this:

1. Overview page
2. Interface pages
3. Constructor pages
4. Method pages
5. Property pages
6. Event pages
7. Concept/guide pages
8. Code examples
9. Sidebars

You can then expand on it with more details, adding each interface and it's members. For example, if you were documenting the Web Audio API, your list might look more like this:

- Web_Audio_API
- AudioContext

  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - ...
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - ...

- AudioNode

  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - ...
  - AudioNode.connect(Param)
  - ...

- AudioParam
- Events (update list)

  - start
  - end
  - …

## Open an issue

It's a good idea at this point to open a tracking [issue](https://github.com/mdn/content/issues) on the `mdn/content` repository with the pages listed as a to-do (checkbox) list. This enables not just you, but others working on documentation to publicly keep track of the status. You can also link your pull requests to this issue to give everyone more context.

## Create the pages

Now create the pages you need. To create a new page, see the instructions in our [how to create a page](/en-US/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) guide. Check out our [Page types](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types) guide for page templates that might be useful.
