---
title: MutationObserverInit.characterDataOldValue
slug: Web/API/MutationObserverInit/characterDataOldValue
tags:
  - API
  - Changes
  - Monitoring
  - Mutation Observer
  - Mutation Observer API
  - MutationObserverInit
  - Nodes
  - Reference
  - Textr
  - characterDataOldValue
  - mutation
  - value
browser-compat: api.MutationObserverInit.characterDataOldValue
---
{{APIRef("DOM WHATWG")}}

The **{{domxref("MutationObserverInit")}}**
dictionary's optional **`characterDataOldValue`** property is
used to specify whether or not the {{domxref("MutationRecord.oldValue")}} property for
DOM mutations should be set to the previous value of text nodes which changed.

If you set the {{domxref("MutationObserverInit.characterData")}} property to
`true` but don't set `characterDataOldValue` to `true`
as well, the `MutationRecord` will not include information describing the
prior state of the text node's contents.

Character data changes are detectable on any text node, including nodes based on the
{{domxref("Text")}}, {{domxref("ProcessingInstruction")}}, and {{domxref("Comment")}}
interfaces.

## Syntax

```js
var options = {
  characterDataOldValue: true | false
}
```

### Value

A Boolean value indicating whether or not to set the `MutationRecord`'s
`oldValue` property to be a string containing the value of the character
node's contents prior to the change represented by the mutation record.

By default, only changes to the text of the node specified as the `target`
parameter when you called {{domxref("MutationObserver.observe", "observe()")}} are
monitored. To watch for changes to the text contents of all descendants of
`target`, set the {{domxref("MutationObserverInit.subtree", "subtree")}}
option to `true`.

If you set `characterDataOldValue` to `true`,
`characterData` is automatically assumed to be `true`, even if you
don't expressly set it as such.

## Example

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
