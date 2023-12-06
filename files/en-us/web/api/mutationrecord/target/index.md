---
title: "MutationRecord: target property"
short-title: target
slug: Web/API/MutationRecord/target
page-type: web-api-instance-property
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

### Logging the target of a mutation

In the following example, there are two divs: a red div (`#red-div`) and a blue div (`#blue-div`), inside a container div `#container`. A {{domxref("MutationObserver")}} is created to observe the container. The observer is observing changes to the childlist, and also has `subtree: true` so it will observe changes to the children of the container's children.

The observer callback logs the `target` of the mutation record. When we add nodes to the `#red-div` or the `#blue-div`, the `target` will be the `#red-div` or the `#blue-div`, respectively.

#### HTML

```html
<pre id="log">Target of mutation:</pre>
<button id="add-nodes-to-red-div">Add a node to red div</button>
<button id="add-nodes-to-blue-div">Add a node to blue div</button>
<button id="reset">Reset</button>
<div id="container">
  <div id="red-div"></div>
  <div id="blue-div"></div>
</div>
```

```css hidden
#log {
  border: 1px dotted black;
  padding: 0.5rem;
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

function logMutationTarget(records) {
  for (const record of records) {
    log.textContent = `Target of mutation: ${record.target.id}`;
  }
}

const observer = new MutationObserver(logMutationTarget);
observer.observe(container, { childList: true, subtree: true });
```

#### Result

{{EmbedLiveSample("Logging the target of a mutation", "", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
