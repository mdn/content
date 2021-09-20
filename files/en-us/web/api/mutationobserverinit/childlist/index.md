---
title: MutationObserverInit.childList
slug: Web/API/MutationObserverInit/childList
tags:
  - API
  - DOM
  - DOM WHATWG
  - Monitor
  - Mutation Observer
  - Mutation Observer API
  - MutationObserverInit
  - Observer
  - Reference
  - Watching
  - childList
  - children
  - mutation
browser-compat: api.MutationObserverInit.childList
---
{{APIRef("DOM WHATWG")}}

The **{{domxref("MutationObserverInit")}}**
dictionary's optional **`childList`** property indicates
whether or not to monitor the specified node or nodes for the addition or removal of
new child nodes.

If `childList` is `false` (the default), adding or removing new
nodes does not trigger mutation callbacks. By setting `childList` to
`true`, your callback will be invoked any time nodes are added to or removed
from the DOM node or nodes being watched.

## Syntax

```js
var options = {
  childList: true | false
}
```

### Value

A Boolean value indicating whether or not to invoke the callback function when new
nodes are added to or removed from the section of the DOM being monitored.. If
{{domxref("MutationObserverInit.subtree", "subtree")}} is `false`, only the
node indicated by the observer's target node is monitored for changes. Setting
`subtree` to `true` causes addition or removal of nodes anywhere
within the subtree rooted at `target` to be reported.

## Example

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
