---
title: MutationObserverInit.subtree
slug: Web/API/MutationObserverInit/subtree
tags:
  - API
  - DOM
  - DOM WHATWG
  - Monitoring
  - Mutation Observer
  - Mutation Observer API
  - MutationObserverInit
  - Nodes
  - Observer
  - Reference
  - Watching
  - mutation
  - subtree
browser-compat: api.MutationObserverInit.subtree
---
{{APIRef("DOM WHATWG")}}

The **{{domxref("MutationObserverInit")}}**
dictionary's optional **`subtree`** property can be set to
`true` to monitor the targeted node _and_ all of its
descendants.

The default value, `false`, indicates only the target
node itself is to be monitored for changes.

`subtree` can be used in concert with the other options to extend monitoring
of attributes, text content, and child lists to the entire subtree rooted at the target
node.

## Syntax

```js
var options = {
  subtree: true | false
}
```

### Value

A Boolean value. The default, `false`, indicates that only the target node
specified when calling {{domxref("MutationObserver.observe()")}} is to be monitored for
changes. Changing this value to `true` causes the entire subtree rooted at
the specified target node to be monitored for the changes indicated by the other
options.

For example, to watch the target node only for attribute changes, the
{{domxref("MutationObserverInit")}} passed into
{{domxref("MutationObserver.MutationObserver", "MutationObserver()")}} can be:

```js
var options = {
  attributes: true,
  subtree: false
};
```

Since the default value of `subtree` is `false`, line 3 is
optional.

To monitor the entire subtree for attribute changes, set `subtree` to
`true`:

```js
var options = {
  attributes: true,
  subtree: true
};
```

## Example

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
