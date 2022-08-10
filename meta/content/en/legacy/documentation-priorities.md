---
title: Documentation priority list
weight: 4
---

This document defines the different priority tiers on MDN, and states what documentation topics exist inside each tier — we are calling them **Tier 1** and **Tier 2**.

The purpose of this document is two-fold:

- To help apply priority measures to content bugs during our triage process, which in turn helps contributors to make a decision about what bugs to work on by finding out which ones are most important right now.
- To help contributors that want to work on a specific topic area rather than a specific bug decide which one would be most useful to give their time to (for example, folks that like to run automated cleanup scripts on MDN).

The relative importance of these docs has been decided purely by looking at page view figures. There are lots of measures we could have used, but page views is objective and still a good indicator — more important web technologies are looked up more often, and therefore fixing problems with those docs seems most critical.

Also bear in mind that these Tiers are made up of isolated document trees (i.e. the linked page, plus all of the documents in the hierarchy below it). Sometimes a Tier 1 document will link to a Tier 2 document, or vice versa, and that is OK.

The numbers in parentheses after each document tree represent the number of documents under that tree. These numbers will likely change over time, so may need revisiting before too long.

## Tier 1

Tier 1 content is the most important content on MDN — it has the most users, and is deemed to cover the most important technologies for the web platform.

- [Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) (104)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) (933)
- [Events](https://developer.mozilla.org/en-US/docs/Web/Events) (4)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) (239)
- [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) (292)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (921)
- [Learn web development](https://developer.mozilla.org/en-US/docs/Learn) (355)
- [Media](https://developer.mozilla.org/en-US/docs/Web/Media) (17)
- [Performance](https://developer.mozilla.org/en-US/docs/Web/Performance) (16)
- [Privacy](https://developer.mozilla.org/en-US/docs/Web/Privacy) (1)
- [Progressive web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) (16)
- [Security](https://developer.mozilla.org/en-US/docs/Web/Security) (27)
- [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API): The interfaces in the following groups are Tier 1 (see the [Tier 1 WebAPIs](#tier_1_webapis) section below for a further breakdown of what this includes (1189):

  - Canvas API (112)
  - Clipboard API (13)
  - DOM (439)
  - DOM Events (22)
  - Fetch API (47)
  - File API (48)
  - HTML DOM (371)
  - URL API (43)
  - Web Storage API (8)
  - WebSockets API (28)
  - XMLHttpRequest (58)

- [Web App Manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest) (19)
- [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly) (12)
- [Web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) (5)

**Total Tier 1 pages: 4150**

## Tier 2

Tier 2 content is less commonly-used, but useful nonetheless.

- [CSS Houdini](https://developer.mozilla.org/en-US/docs/Web/Guide/Houdini) (1)
- [Game development docs](https://developer.mozilla.org/en-US/docs/Games) (73)
- [Guides](https://developer.mozilla.org/en-US/docs/Web/Guide) (56)
- [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML) (38)
- [MDN meta-documentation](https://developer.mozilla.org/en-US/docs/MDN) (82). This is important, but fixes would be mainly dealt with by the MDN core team)
- [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) (382)
- [The MDN Web Docs glossary](https://developer.mozilla.org/en-US/docs/Glossary) (534)
- [WebAPIs](https://developer.mozilla.org/en-US/docs/Web/API) that aren't in the "Tier 1 WebAPIs" list (4701)
- [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) (635). Not really web platform, but still important)

**Total Tier 2 pages: 6502**

## Other content

There is other content on MDN that is outside our web platform technology remit — such as archived content and Firefox-specific docs (e.g. DevTools, platform internals). This content has been deprioritized completely, and in most cases we are trying to find new homes for it, or delete it if it is no longer useful. We would not recommend that our community spends any time working on any areas not specifically listed on this page.

## Tier 1 WebAPIs

The following API interface reference documents (and their child pages) are currently considered Tier 1. For more information on the rationale for these groupings and priorities, see the work done in <https://github.com/mdn/sprints/issues/3327>.

### Canvas API (111)

- [`CanvasGradient`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient) (2)
- [`CanvasPattern`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern) (2)
- [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) (71)
- [`ImageBitmap`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap) (4)
- [`ImageBitmapRenderingContext`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapRenderingContext) (2)
- [`ImageData`](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) (5)
- [`OffscreenCanvas`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) (8)
- [`Path2D`](https://developer.mozilla.org/en-US/docs/Web/API/Path2D) (3)
- [`TextMetrics`](https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics) (13)

### Clipboard API (13)

- [`Clipboard`](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard) (5)
- [`ClipboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent) (3)
- [`ClipboardItem`](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem) (5)

### DOM (436)

> **Note:** "DOM" is only a partial group — we only included the interface docs with the highest page views, to keep the size of Tier 1 down to a manageable number. Other DOM interfaces not in this list are in Tier 2.

- [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) (4)
- [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) (4)
- [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) (164)
- [`DOMParser`](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) (2)
- [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) (176)
- [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) (24)
- [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) (5)
- [`HTMLCollection`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) (4)
- [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) (5)
- [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) (36)
- [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) (7)

### DOM Events (22)

> **Note:** "DOM Events" is only a partial group — we only included the interface docs with the highest page views, to keep the size of Tier 1 down to a manageable number. Other DOM Events interfaces not in this list are in Tier 2.

- [`EventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) (2)
- [`KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) (20)

### Fetch API (39)

- [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers) (11)
- [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) (15)
- [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) (13)

### File API (48)

- [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) (8)
- [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) (15)
- [`FileList`](https://developer.mozilla.org/en-US/docs/Web/API/FileList) (1)
- [`FileReader`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) (19)
- [`FileReaderSync`](https://developer.mozilla.org/en-US/docs/Web/API/FileReaderSync) (5)

### HTML DOM (371)

> **Note:** "HTML DOM" is only a partial group — we only included the interface docs with the highest page views, to keep the size of Tier 1 down to a manageable number. Other HTML DOM interfaces not in this list are in Tier 2.

- [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History) (9)
- [`HTMLAudioElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement) (4)
- [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) (14)
- [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) (45)
- [`HTMLFormElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement) (17)
- [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) (17)
- [`HTMLTextAreaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement) (2)
- [`Location`](https://developer.mozilla.org/en-US/docs/Web/API/Location) (17)
- [`Navigator`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) (45)
- [`NavigatorLanguage`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) (3)
- [`NavigatorOnLine`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine) (3)
- [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) (182)

### URL API (43)

- [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) (18)
- [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) (14)
- [`URLUtilsReadOnly`](https://developer.mozilla.org/en-US/docs/Web/API/WorkerLocation) (11)

### Web Storage API (8)

- [`Storage`](https://developer.mozilla.org/en-US/docs/Web/API/Storage) (7)
- [`StorageEvent`](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent) (1)

### WebSockets API (28)

- [`CloseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent) (3)
- [`MessageEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent) (7)
- [`WebSocket`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) (18)

### XMLHttpRequest (58)

- [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) (12)
- [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) (40)
- [`XMLHttpRequestEventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget) (6)
