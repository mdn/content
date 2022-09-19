---
title: Documentation priorities
slug: MDN/Community/Documentation_priorities
page-type: mdn-community-guide
tags:
  - meta
  - community-guidelines
  - governance
---

{{MDNSidebar}}

## Assessing the priority of documentation

This document describes the different priority tiers on MDN, and states what documentation topics exist inside each tier — we are calling them **Tier 1** and **Tier 2**.

The purpose of this document is:

- To help apply priority measures to content bugs during our triage process, which in turn helps contributors to make a decision about what bugs to work on by finding out which ones are most important right now.
- To help contributors that want to work on a specific topic area rather than a specific bug decide which one would be most useful to give their time to (for example, folks that like to run automated cleanup scripts on MDN).

The relative importance of these docs has been decided purely by looking at page view figures. There are lots of measures we could have used, but page views is objective and still a good indicator — more important web technologies are looked up more often, and therefore fixing problems with those docs seems most critical.

Also bear in mind that these Tiers are made up of isolated document trees (i.e. the linked page, plus all of the documents in the hierarchy below it). Sometimes a Tier 1 document will link to a Tier 2 document, or vice versa, and that is OK.

The numbers in parentheses after each document tree represent the number of documents under that tree. These numbers will likely change over time, so may need revisiting before too long.

## Tier 1

Tier 1 content (approx. 4150 pages) is the most important content on MDN.
This content has the most readers and is considered to cover the most important technologies for the web.

- [Accessibility](/en-US/docs/Web/Accessibility)
- [CSS](/en-US/docs/Web/CSS)
- [Events](/en-US/docs/Web/Events)
- [HTML](/en-US/docs/Web/HTML)
- [HTTP](/en-US/docs/Web/HTTP)
- [JavaScript](/en-US/docs/Web/JavaScript)
- [Learn web development](/en-US/docs/Learn)
- [Media](/en-US/docs/Web/Media)
- [Performance](/en-US/docs/Web/Performance)
- [Privacy](/en-US/docs/Web/Privacy)
- [Progressive web apps](/en-US/docs/Web/Progressive_web_apps)
- [Security](/en-US/docs/Web/Security)
- [Web APIs](/en-US/docs/Web/API). The interfaces in the following groups are Tier 1 (see the [Tier 1 WebAPIs](#tier_1_webapis) section below for a further breakdown of what this includes :

  - Canvas API
  - Clipboard API
  - DOM
  - DOM Events
  - Fetch API
  - File API
  - HTML DOM
  - URL API
  - Web Storage API
  - WebSockets API
  - XMLHttpRequest

- [Web App Manifests](/en-US/docs/Web/Manifest)
- [WebAssembly](/en-US/docs/WebAssembly)
- [Web components](/en-US/docs/Web/Web_Components)

## Tier 2

Tier 2 content (approx. 6502 pages) is less commonly-used, but useful nonetheless.

- [CSS Houdini](/en-US/docs/Web/Guide/Houdini)
- [Game development docs](/en-US/docs/Games)
- [Guides](/en-US/docs/Web/Guide)
- [MathML](/en-US/docs/Web/MathML)
- [MDN meta-documentation](/en-US/docs/MDN) . This is important, but fixes would be mainly dealt with by the MDN core team)
- [SVG](/en-US/docs/Web/SVG)
- [The MDN Web Docs glossary](/en-US/docs/Glossary)
- [WebAPIs](/en-US/docs/Web/API) that aren't in the "Tier 1 WebAPIs" list
- [WebExtensions](/en-US/docs/Mozilla/Add-ons/WebExtensions) . Not really web platform, but still important)

## Other content

There is other content on MDN that is outside our web platform technology remit such as archived content and Firefox-specific docs (e.g. DevTools, platform internals).
This content is not prioritized and we are looking for a home for it and considering archiving it if no longer useful.
We would not recommend that our community spends any time working on any areas not specifically listed in this document in **Tier 1 or Tier 2**.

## Tier 1 WebAPIs

The following API interface reference documents (and their child pages) are currently considered Tier 1.
For more information on the rationale for these groupings and priorities, see the work done in <https://github.com/mdn/sprints/issues/3327>.

### Canvas API

- [`CanvasGradient`](/en-US/docs/Web/API/CanvasGradient)
- [`CanvasPattern`](/en-US/docs/Web/API/CanvasPattern)
- [`CanvasRenderingContext2D`](/en-US/docs/Web/API/CanvasRenderingContext2D)
- [`ImageBitmap`](/en-US/docs/Web/API/ImageBitmap)
- [`ImageBitmapRenderingContext`](/en-US/docs/Web/API/ImageBitmapRenderingContext)
- [`ImageData`](/en-US/docs/Web/API/ImageData)
- [`OffscreenCanvas`](/en-US/docs/Web/API/OffscreenCanvas)
- [`Path2D`](/en-US/docs/Web/API/Path2D)
- [`TextMetrics`](/en-US/docs/Web/API/TextMetrics)

### Clipboard API

- [`Clipboard`](/en-US/docs/Web/API/Clipboard)
- [`ClipboardEvent`](/en-US/docs/Web/API/ClipboardEvent)
- [`ClipboardItem`](/en-US/docs/Web/API/ClipboardItem)

### DOM

> **Note:** "DOM" is only a partial group — we only included the interface docs with the highest page views, to keep the size of Tier 1 down to a manageable number. Other DOM interfaces not in this list are in Tier 2.

- [`AbortController`](/en-US/docs/Web/API/AbortController)
- [`CustomEvent`](/en-US/docs/Web/API/CustomEvent)
- [`Document`](/en-US/docs/Web/API/Document)
- [`DOMParser`](/en-US/docs/Web/API/DOMParser)
- [`Element`](/en-US/docs/Web/API/Element)
- [`Event`](/en-US/docs/Web/API/Event)
- [`EventTarget`](/en-US/docs/Web/API/EventTarget)
- [`HTMLCollection`](/en-US/docs/Web/API/HTMLCollection)
- [`MutationObserver`](/en-US/docs/Web/API/MutationObserver)
- [`Node`](/en-US/docs/Web/API/Node)
- [`NodeList`](/en-US/docs/Web/API/NodeList)

### DOM Events

> **Note:** "DOM Events" is only a partial group — we only included the interface docs with the highest page views, to keep the size of Tier 1 down to a manageable number. Other DOM Events interfaces not in this list are in Tier 2.

- [`EventListener`](/en-US/docs/Web/API/EventTarget/addEventListener)
- [`KeyboardEvent`](/en-US/docs/Web/API/KeyboardEvent)

### Fetch API

- [`Headers`](/en-US/docs/Web/API/Headers)
- [`Request`](/en-US/docs/Web/API/Request)
- [`Response`](/en-US/docs/Web/API/Response)

### File API

- [`Blob`](/en-US/docs/Web/API/Blob)
- [`File`](/en-US/docs/Web/API/File)
- [`FileList`](/en-US/docs/Web/API/FileList)
- [`FileReader`](/en-US/docs/Web/API/FileReader)
- [`FileReaderSync`](/en-US/docs/Web/API/FileReaderSync)

### HTML DOM

> **Note:** "HTML DOM" is only a partial group — we only included the interface docs with the highest page views, to keep the size of Tier 1 down to a manageable number. Other HTML DOM interfaces not in this list are in Tier 2.

- [`History`](/en-US/docs/Web/API/History)
- [`HTMLAudioElement`](/en-US/docs/Web/API/HTMLAudioElement)
- [`HTMLCanvasElement`](/en-US/docs/Web/API/HTMLCanvasElement)
- [`HTMLElement`](/en-US/docs/Web/API/HTMLElement)
- [`HTMLFormElement`](/en-US/docs/Web/API/HTMLFormElement)
- [`HTMLInputElement`](/en-US/docs/Web/API/HTMLInputElement)
- [`HTMLTextAreaElement`](/en-US/docs/Web/API/HTMLTextAreaElement)
- [`Location`](/en-US/docs/Web/API/Location)
- [`Navigator`](/en-US/docs/Web/API/Navigator)
- [`NavigatorLanguage`](/en-US/docs/Web/API/Navigator/language)
- [`NavigatorOnLine`](/en-US/docs/Web/API/Navigator/onLine)
- [`Window`](/en-US/docs/Web/API/Window)

### URL API

- [`URL`](/en-US/docs/Web/API/URL)
- [`URLSearchParams`](/en-US/docs/Web/API/URLSearchParams)
- [`URLUtilsReadOnly`](/en-US/docs/Web/API/WorkerLocation)

### Web Storage API

- [`Storage`](/en-US/docs/Web/API/Storage)
- [`StorageEvent`](/en-US/docs/Web/API/StorageEvent)

### WebSockets API

- [`CloseEvent`](/en-US/docs/Web/API/CloseEvent)
- [`MessageEvent`](/en-US/docs/Web/API/MessageEvent)
- [`WebSocket`](/en-US/docs/Web/API/WebSocket)

### XMLHttpRequest

- [`FormData`](/en-US/docs/Web/API/FormData)
- [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest)
- [`XMLHttpRequestEventTarget`](/en-US/docs/Web/API/XMLHttpRequestEventTarget)
