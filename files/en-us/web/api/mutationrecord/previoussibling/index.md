---
title: "MutationRecord: previousSibling property"
short-title: previousSibling
slug: Web/API/MutationRecord/previousSibling
page-type: web-api-instance-property
browser-compat: api.MutationRecord.previousSibling
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} read-only property **`previousSibling`** is the previous sibling of an added or removed child node of the [`target`](/en-US/docs/Web/API/MutationRecord/target) of a {{domxref("MutationObserver")}}.

## Value

If a node is added to or removed from the [`target`](/en-US/docs/Web/API/MutationRecord/target) of a {{domxref("MutationObserver")}}, the value is the {{domxref("Node")}} that is the previous sibling of the added or removed node: that is, the node immediately before this one in the parent's {{domxref("Node.childNodes", "childNodes")}} list.

The value is `null` if there are no added or removed nodes, or if the node is the first child of its parent.

## Examples

### Log the previous sibling of a mutation

This adds/removes a node every time you click the button. Then the observer logs the `textContent` of the `previousSibling` of the updated node.

#### HTML

```html
<button id="add-nodes">Add a node</button>
<button id="remove-nodes">Remove a node</button>
<button id="reset">Reset</button>

<pre id="log" class="log">Previous sibling of updated node:</pre>
<div id="target"><p>Node #0</p></div>
```

```css hidden
.log {
  border: 1px dotted black;
  padding: 0.5rem;
}
```

#### JavaScript

```js
const addNodes = document.querySelector("#add-nodes");
const removeNodes = document.querySelector("#remove-nodes");
const reset = document.querySelector("#reset");
const target = document.querySelector("#target");

addNodes.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `Node #${target.childElementCount}`;
  target.appendChild(newPara);
});

removeNodes.addEventListener("click", () => {
  const oldPara = target.lastChild;
  if (oldPara) {
    target.removeChild(oldPara);
  }
});

reset.addEventListener("click", () => self.location.reload());

function logPreviousSibling(records) {
  for (const record of records) {
    if (record.type === "childList") {
      log.textContent = `Previous sibling of updated node: ${record.previousSibling?.textContent ?? null}`;
    }
  }
}

const observer = new MutationObserver(logPreviousSibling);
observer.observe(target, { childList: true });
```

#### Result

{{EmbedLiveSample("Log the previous sibling of a mutation", "", 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
