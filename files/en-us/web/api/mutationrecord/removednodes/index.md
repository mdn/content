---
title: MutationRecord.removedNodes
slug: Web/API/MutationRecord/removedNodes
page-type: web-api-instance-property
tags:
  - removedNodes
  - MutationRecord
  - Property
  - Reference
browser-compat: api.MutationRecord.removedNodes
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} property **`removedNodes`** is a {{domxref("NodeList")}} of nodes removed from a target node by a mutation observed with a {{domxref("MutationObserver")}}.

## Value

If the record's [`type`](/en-US/docs/Web/API/MutationRecord/type) is `childList`, this is a `NodeList` of the nodes removed from the target of the mutation observed by the {{domxref("MutationObserver")}}. The value will be an empty `NodeList` if no nodes were removed. 

If the record's [`type`](/en-US/docs/Web/API/MutationRecord/type) is not `childList`, this is `null`.

## Examples

### Update when Removing a Node

In the following example, there are two buttons: one to add new nodes to a target node, and one to remove them. A {{domxref("MutationObserver")}} is used to observe the target node for changes; when a change is detected, the observer calls a function, `logNewNodes`.

The function checks that the MutationRecord's `type` is `childList`, which means that the target node's children have changed. However, notice that clicking the "Add a node" button will not trigger the counter to update, as the function only updates for each removed node. If there are no removed nodes, the counter will not be updated.

#### HTML

```html
<button id="add-nodes">Add a node</button>
<button id="remove-nodes">Remove a node</button>
<button id="reset">Reset</button>

<pre id= "counter">Observed node count: 1</pre>
<div id= "target"><p>Hi, Mom!</p></div>
```

```css hidden
#counter {
  border: 1px dotted black;
  padding: .5rem;
}
```

#### JavaScript

```js
const addNodes = document.querySelector("#add-nodes");
const removeNodes = document.querySelector("#remove-nodes");
const reset = document.querySelector("#reset");
const counter = document.querySelector("#counter");
const target = document.querySelector("#target");

addNodes.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `Current time: ${Date.now()}`;
  target.appendChild(newPara);
});

removeNodes.addEventListener("click", () => {
    const lastChild = target.lastChild;
    console.log(lastChild);
    if (lastChild) {
        target.removeChild(lastChild);
    }
});

reset.addEventListener("click", () => self.location.reload());

function logNewNodes(records) {
  for (const record of records) {
    // Check if the childlist of the target node has been mutated
    if (record.type === "childList") {
    // Update counter for each removed node, if any
      for (const newNode of record.removedNodes) {
        counter.textContent = `Observed node count: ${target.children.length}`;
      }
    }
  }
}

const observer = new MutationObserver(logNewNodes);
observer.observe(target, {childList: true});
```

#### Result

{{EmbedLiveSample("Update when Removing a Node")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
