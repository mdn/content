# Researching a technology

This guide gives you some handy information about approaching how to document technologies.

## Getting prepared

Before starting to document or update something on MDN, there are some things you should prepare and plan in advance of starting to actually write.

It is assumed that before reading this guide you have a reasonable knowledge of:

- Web technologies like HTML, CSS and JavaScript.
- Reading Web technology specs. You'll be looking at these a lot as you document APIs.

Everything else can be learned along the way.

### Resources

Useful resources for any of the documentation include:

1. The 'How To Write' docs for MDN. You're already here, but it's good to browse through all the docs and familiarize yourself with our writing style, the different types of pages and what sections are included in them, and the different ways we include different parts of the page (like specifications and browser compatibility).
2. The latest spec:
   Different standards bodies create specifications for technologies documented on MDN. For example TC39 for JavaScript, or the W3C for HTML, CSS and Web APIs. 
   Specs are linked to from reference pages on MDN (check the 'Specifications' section). Alternatively, you can usually do a Web search. Always work from the latest, most up to date specification.
3. The latest modern web browsers:
   These should be experimental/alpha builds such as [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)/[Chrome Canary](https://www.google.com/intl/en/chrome/canary/) that are more likely to support the features you are documenting.
   This is especially pertinent if you are documenting a feature which is 'upcoming'.
4. Demos/blog posts/other info: Find as much info as you can. If you are updating a technology because it has changed, you need to be careful existing resources you are using to learn are not out of date. This is why the first two points above are important.

It can also be wise to try and find someone to help answer questions. This can be the specification authors, or the engineers who implement browser features. 

### Reading specifications

This can feel a little alien to start, but the more you do it the more you get used to it. Here are some good links to help you get started:

- [How to read W3C specs](https://alistapart.com/article/readspec/) by J. David Eisenberg on A List Apart
- [Understanding the CSS Specifications](https://www.w3.org/Style/CSS/read) from the w3c
- [How to read web specs Part I – Or: WebVR, how do you work?](https://surma.dev/things/reading-specs/) talks through reading the WebVR spec specifically, but is a great introduction to reading Web API specs.
- [How to read web specs Part IIa – Or: ECMAScript Symbols](https://surma.dev/things/reading-specs-2/) the second part to the link above contains information on understanding the ECMAScript specification which outlines the JavaScript language

In addition we have a guide on [Information contained in a WebIDL file]() which can really help when reading Web API specs.

## Take some time to play with the feature

You will return to writing code examples or building demos many times through the course of documenting a technology, but it is very useful to start by spending time familiarizing yourself with how the technology works. This is a really valuable exercise, as it gives you a good understanding of what the use cases are (_why_ a developer would use this technology) and help with creating some example code at the same time.


> **Note:** If the spec has been recently updated so that, say, a method is now defined differently, but the old method still works in browsers, you will often have to document both in the same place, so that the old and new methods are covered.
> If you need help, refer to demos you have found, or ask an engineering contact.

## Create the list of documents you need to write or update

The different pages you need to write or modify varies depending on the technology you are writing about. Check out the [Page types]() and the relevant section for the technology you're documenting. You'll most likely need to update existing documentation as well, so search MDN for pages which are related to what you are writing about.

### Sidebars

It's possible the sidebar of the pages you write also need to be defined or updated. To find out if this is needed and how to do it [check out our sidebar guide]().

### Code examples

Some of the code examples for MDN docs are held in separate repositories (most notably interactive examples at the top of pages and larger demo code needed for guides). You can find a handy [list of them here]() to find which one you should add to. If you do need to add to or amend one of these repos, it's a good idea to make a note of it in your list.

### Example

Let's say you're documenting a new Web API, your initial list will look a little something like this:

1. Overview page
2. Interface pages
3. Constructor pages
4. Method pages
5. Property pages
6. Event pages
7. Concept/guide pages
8. Code examples
9. Sidebars

You can then expand on it with more details, adding each interface and it's members. For examples if you were documenting the Web Audio API, your list might look something more like this:


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


### Open an issue

It's a good idea at this point to open a tracking issue on mdn/content with the pages listed as a todo (checkbox) list. This enables not just you, but others working on documentation to publicly keep track of the status. You can also link your pull requests to this issue to give them more context.

## Create the pages

Now create the pages you need, according to the structures below. Our [MDN content README](https://github.com/mdn/content#adding-a-new-document) contains instructions on creating a new document, and our [Page types](/en-US/docs/MDN/Structures/Page_types) guide contains further examples and page templates that might be useful.


