---
title: "MutationRecord: type property"
short-title: type
slug: Web/API/MutationRecord/type
page-type: web-api-instance-property
browser-compat: api.MutationRecord.type
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} read-only property **`type`** is the type of the {{domxref("MutationRecord")}} observed by a {{domxref("MutationObserver")}}.

## Value

The property is set to the type of the mutation as a string. The value can be one of the following:

- `attributes` if the mutation was an attribute mutation.

- `characterData` if it was a mutation to a {{domxref("CharacterData")}} node.

- `childList` if the mutation was a mutation to the tree of nodes.

## Examples

### Log the type of a mutation

The following example gives you two buttons to manipulate the DOM. The first button adds a new node to the example, and the second button changes the `color` attribute of all the added nodes. A {{domxref("MutationObserver")}} is created to observe it all, and the observer is set to log the `type` of the mutation record to `#log`.

You'll notice the when you add a node, the `type` is `childList`, and when you change the `color` attribute, the `type` is `attributes`.

#### HTML

```html
<button id="add-nodes">Add a node</button>
<button id="set-attribute">Change the color</button>

<button id="reset">Reset</button>

<pre id="log">Mutation type:</pre>
<div id="target"><p>Node #0</p></div>
```

```css hidden
#log {
  border: 1px dotted black;
  padding: 0.5rem;
}

.blue {
  color: blue;
}

.red {
  color: red;
}
```

#### JavaScript

```js
const addNodes = document.querySelector("#add-nodes");
const setAttribute = document.querySelector("#set-attribute");
const reset = document.querySelector("#reset");
const log = document.querySelector("#log");
const target = document.querySelector("#target");
let nodeNumber = 1;

addNodes.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `Node #${nodeNumber}`;
  nodeNumber++;
  target.appendChild(newPara);
});

setAttribute.addEventListener("click", () => {
  if (target.getAttribute("class") === "red") {
    target.setAttribute("class", "blue");
  } else {
    target.setAttribute("class", "red");
  }
});

reset.addEventListener("click", () => self.location.reload());

function logMutationType(records) {
  for (const record of records) {
    log.textContent = `Mutation type: ${record.type}`;
  }
}

const observer = new MutationObserver(logMutationType);
observer.observe(target, { childList: true, attributes: true, subtree: true });
```

#### Result

{{EmbedLiveSample("Log the type of a mutation", "", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
