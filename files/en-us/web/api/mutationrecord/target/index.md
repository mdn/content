---
title: MutationRecord.target
slug: Web/API/MutationRecord/target
page-type: web-api-instance-property
tags:
  - target
  - MutationRecord
  - Property
  - Reference
browser-compat: api.MutationRecord.target
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} read-only property **`target`** is the target (i.e. the mutated/changed node) of a mutation observed with a {{domxref("MutationObserver")}}.

## Value

The {{domxref("Node")}} that the mutation affected.

- If the record's {{domxref("MutationRecord.type", "type")}} is `attributes`, this is the {{domxref("Element")}} whose attributes changed.
- If the record's {{domxref("MutationRecord.type", "type")}} is `characterData`, this is the {{domxref("CharacterData")}} node.
- If the record's {{domxref("MutationRecord.type", "type")}} is `childList`, this is the {{domxref("Node")}} whose children changed.

## Examples

### Red div, blue div

In the following example, there are two divs: a red div (`#red-div`) and a blue div (`#blue-div`). A {{domxref("MutationObserver")}} is created to observe the parent div (`#container`) of the red and blue divs, and the observer is set to observe for changes to the childlist of the parent div. 

The observer is set to log the `target` of the mutation record by calling the function `logNewNodes`. You should see that even though the {{domxref("MutationObserver")}} is observing the `#container` directly, the `target` will be whichever child div whose children have changed as the {{domxref("MutationObserver")}} is observing for changes to the childlist of `#container`, `#red-div` and `#blue-div`, and the subtree (the childlists of `#red-div` and `#blue-div`).

#### HTML

```html
<pre id="log">Target of mutation:</pre>
<button id="add-nodes-to-red-div">Add a node to red div</button>
<button id="add-nodes-to-blue-div">Add a node to blue div</button>
<button id="reset">Reset</button>
<div id="container">
  <div id="red-div">
  </div>
  <div id="blue-div">
  </div>
</div>
```

```css hidden
#log {
  border: 1px dotted black;
  padding: .5rem;
}

#red-div {
  border: 1px solid red;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  overflow: auto;
}

#blue-div {
  border: 1px solid blue;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  padding: 0.5rem;
  overflow: auto;
}

#container {
  display: grid;
  grid-template-columns: 50% auto;
}
```
#### JavaScript

```js
const container = document.querySelector("#container");
const redDiv = document.querySelector("#red-div");
const blueDiv = document.querySelector("#blue-div");
const addToRed = document.querySelector("#add-nodes-to-red-div");
const addToBlue = document.querySelector("#add-nodes-to-blue-div");
const reset = document.querySelector("#reset");
const log = document.querySelector("#log");

addToRed.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `Current time: ${Date.now()}`;
  redDiv.appendChild(newPara);
});

addToBlue.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `Current time: ${Date.now()}`;
  blueDiv.appendChild(newPara);
});

reset.addEventListener("click", () => self.location.reload());

function logNewNodes(records) {
  for (const record of records) {
     log.textContent = `Target of mutation: ${record.target.id}`;
  }
}

const observer = new MutationObserver(logNewNodes);
observer.observe(container, {childList: true, subtree: true});
```

#### Result

{{EmbedLiveSample("Red Div, Blue Div", "", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
