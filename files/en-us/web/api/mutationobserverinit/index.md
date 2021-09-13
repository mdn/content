---
title: MutationObserverInit
slug: Web/API/MutationObserverInit
tags:
  - API
  - Configuration
  - DOM
  - DOM WHATWG
  - Dictionary
  - Interface
  - Mutation Observer
  - Mutation Observer API
  - MutationObserver
  - MutationObserverInit
  - Observer
  - mutation
browser-compat: api.MutationObserverInit
---
{{APIRef("DOM WHATWG")}}

The **`MutationObserverInit`** dictionary describes the configuration of a mutation observer. As such, it's primarily used as the type of the `options` parameter on the {{domxref("MutationObserver.observe()")}} method.

## Properties

At a minimum, one of `childList`, `attributes`, and/or `characterData` must be `true` when you call {{domxref("MutationObserver.observe", "observe()")}}. Otherwise, a `TypeError` exception will be thrown.

- {{domxref("MutationObserverInit.subtree", "subtree")}} {{optional_inline}}
  - : Set to `true` to extend monitoring to the entire subtree of nodes rooted at `target`. All of the other `MutationObserverInit` properties are then extended to all of the nodes in the subtree instead of applying solely to the `target` node. The default value is `false`.
- {{domxref("MutationObserverInit.childList", "childList")}} {{optional_inline}}
  - : Set to `true` to monitor the target node (and, if `subtree` is `true`, its descendants) for the addition of new child nodes or removal of existing child nodes. The default value is `false`.
- {{domxref("MutationObserverInit.attributes", "attributes")}} {{optional_inline}}
  - : Set to `true` to watch for changes to the value of attributes on the node or nodes being monitored. The default value is `true` if either of `attributeFilter` or `attributeOldValue` is specified, otherwise the default value is `false`.
- {{domxref("MutationObserverInit.attributeFilter", "attributeFilter")}} {{optional_inline}}
  - : An array of specific attribute names to be monitored. If this property isn't included, changes to all attributes cause mutation notifications.
- {{domxref("MutationObserverInit.attributeOldValue", "attributeOldValue")}} {{optional_inline}}
  - : Set to `true` to record the previous value of any attribute that changes when monitoring the node or nodes for attribute changes; see {{SectionOnPage("/en-US/docs/Web/API/MutationObserver", "Monitoring attribute values")}} for details on watching for attribute changes and value recording. The default value is `false`.
- {{domxref("MutationObserverInit.characterData", "characterData")}} {{optional_inline}}
  - : Set to `true` to monitor the specified target node (and, if `subtree` is `true`, its descendants) for changes to the character data contained within the node or nodes. The default value is `true` if `characterDataOldValue` is specified, otherwise the default value is `false`.
- {{domxref("MutationObserverInit.characterDataOldValue", "characterDataOldValue")}} {{optional_inline}}
  - : Set to `true` to record the previous value of a node's text whenever the text changes on nodes being monitored. The default value is `false`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
