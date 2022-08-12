---
title: MutationEvent
slug: Web/API/MutationEvent
page-type: web-api-interface
tags:
  - API
  - Deprecated
  - Interface
  - MutationEvent
  - Reference
  - events
browser-compat: api.MutationEvent
---
{{APIRef("UI Events")}}{{Deprecated_Header}}

> **Note:** [Mutation Events](https://www.w3.org/TR/DOM-Level-3-Events/#events-mutationevents) (W3C DOM Level 3 Events) have been deprecated in favor of [Mutation Observers](/en-US/docs/Web/API/MutationObserver) (W3C DOM4).

The **`MutationEvent`** interface provides event properties that are specific to modifications to the Document Object Model (DOM) hierarchy and nodes.

{{InheritanceDiagram}}

## Preface

The mutation events have been marked as deprecated in [the DOM Events specification](https://www.w3.org/TR/DOM-Level-3-Events/#events-mutationevents), as the API's design is flawed (see details in the "DOM Mutation Events Replacement: The Story So Far / Existing Points of Consensus" post to [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/2011JulSep/0779.html)).

[Mutation Observers](/en-US/docs/Web/API/MutationObserver) have replaced mutation events in DOM4. They have been supported in [most popular browsers for some years](/en-US/docs/Web/API/MutationObserver#browser_compatibility).

In addition, mutation events should be avoided because they have **performance issues** and **poor cross-browser support** (as described in the following sections).

### Performance

Adding DOM mutation listeners to a document [profoundly degrades the performance](https://groups.google.com/d/topic/mozilla.dev.platform/L0Lx11u5Bvs?pli=1) of further DOM modifications to that document (making them 1.5 - 7 times slower!). Moreover, removing the listeners does not reverse the damage.

The performance effect is [limited to the documents that have the mutation event listeners](https://groups.google.com/forum/#!topic/mozilla.dev.platform/UH2VqFQRTDA).

### Cross-browser support

These events are not implemented consistently across different browsers, for example:

- IE prior to version 9 didn't support the mutation events at all and does not implement some of them correctly in version 9 ([for example, DOMNodeInserted](http://help.dottoro.com/ljmcxjla.php))
- WebKit doesn't support DOMAttrModified (see [webkit bug 8191](https://bugs.webkit.org/show_bug.cgi?id=8191) and [the workaround](https://engineering.silk.co/post/31921750832/mutation-events-what-happens))
- "mutation name events", i.e. DOMElementNameChanged and DOMAttributeNameChanged are not supported in Firefox (as of version 11), and probably in other browsers as well.

Dottoro [documents browser support for mutation events](http://help.dottoro.com/ljfvvdnm.php#additionalEvents).

## Mutation events list

The following is a list of all mutation events, as defined in [DOM Level 3 Events specification](https://www.w3.org/TR/DOM-Level-3-Events/#events-mutationevents):

- `DOMAttrModified`
- `DOMAttributeNameChanged`
- `DOMCharacterDataModified`
- `DOMElementNameChanged`
- `DOMNodeInserted`
- `DOMNodeInsertedIntoDocument`
- `DOMNodeRemoved`
- `DOMNodeRemovedFromDocument`
- `DOMSubtreeModified`

## Usage

You can register a listener for mutation events using {{DOMxRef("EventTarget.addEventListener()")}} as follows:

```js
element.addEventListener("DOMNodeInserted", (event) => {
  // …
}, false);
```

The event object is passed to the listener in a `MutationEvent` (see [its definition in the specification](https://www.w3.org/TR/DOM-Level-3-Events/#events-MutationEvent)) for most events, and {{DOMxRef("MutationNameEvent")}} for `DOMAttributeNameChanged` and `DOMElementNameChanged`.

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("MutationNameEvent")}}
