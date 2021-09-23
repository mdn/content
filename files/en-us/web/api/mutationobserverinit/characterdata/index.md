---
title: MutationObserverInit.characterData
slug: Web/API/MutationObserverInit/characterData
tags:
  - API
  - Characters
  - DOM
  - DOM WHATWG
  - Mutation Observer
  - Mutation Observer API
  - MutationObserverInit
  - Observer
  - Property
  - Reference
  - Text
  - Watching
  - characterData
browser-compat: api.MutationObserverInit.characterData
---
{{APIRef("DOM WHATWG")}}

The **{{domxref("MutationObserverInit")}}**
dictionary's optional **`characterData`** property is used to
specify whether or not to monitor the node or nodes being observed for changes to
their textual contents.

Character data changes are detectable on any text node, including nodes based on the
{{domxref("Text")}}, {{domxref("ProcessingInstruction")}}, and {{domxref("Comment")}}
interfaces.

> **Note:** This doesn't monitor content of an {{domxref("HTMLElement")}}, even if it
> only contains text inside, as it only monitors text nodes themselves. So either pass
> directly a text node to the {{domxref("MutationObserver.observe", "observe()")}}
> method or you need to also set `subtree: true`.

## Syntax

```js
var options = {
  characterData: true | false
}
```

### Value

A Boolean value indicating whether or not to call the observer's callback function when
textual nodes' values change.

If `true`, the callback specified when {{domxref("MutationObserver.observe",
  "observe()")}} was used to start observing the node or subtree is called any time the
contents of a text node are changed.

You can expand the capabilities of attribute mutation monitoring using other options:

- {{domxref("MutationObserverInit.characterDataOldValue", "characterDataOldValue")}}
  lets you specify whether or not you want the previous value of changed text nodes to
  be provided using the {{domxref("MutationRecord")}}'s
  {{domxref("MutationRecord.oldValue", "oldValue")}} property.
- {{domxref("MutationObserverInit.subtree", "subtree")}} lets you specify whether to
  watch the target node and all of its descendants (`true`), or just the
  target node (`false`).

If you set `characterDataOldValue` to `true`,
`characterData` is automatically assumed to be `true`, even if you
don't expressly set it as such.

## Example

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
