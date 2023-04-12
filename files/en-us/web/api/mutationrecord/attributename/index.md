---
title: "MutationRecord: attributeName property"
short-title: attributeName
slug: Web/API/MutationRecord/attributeName
page-type: web-api-instance-property
browser-compat: api.MutationRecord.attributeName
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} read-only property **`attributeName`** contains the name of a changed attribute belonging to a node that is observed by a {{domxref("MutationObserver")}}.

## Value

If the record's [`type`](/en-US/docs/Web/API/MutationRecord/type) is `attributes`, this is a string representing the name of the mutated attribute of the mutation target.

If the record's [`type`](/en-US/docs/Web/API/MutationRecord/type) is not `attributes`, this is `null`.

## Examples

### Get last updated attribute name

In the following example, there are four buttons: two change the `style` attribute of the `h1` element, and two change the `class` attribute of the `h1` element. The script uses a {{domxref("MutationObserver")}} to detect the changes and will update the text below to the name of the last attribute that was changed.

#### HTML

```html
<h1 class="blue" style="color:black;" id="hiMom">Hi, Mom!</h1>

<button id="redButton">Set class to "red"</button>
<button id="blueButton">Set class to "blue"</button>
<button id="whiteButton">Set style to "color:white;"</button>
<button id="blackButton">Set style to "color:black;"</button>

<p id="log">Updated attribute name:</p>
```

#### CSS

```css
.red {
  background-color: red;
}

.blue {
  background-color: blue;
}
```

#### JavaScript

```js
const hiMom = document.querySelector("#hiMom");
const redButton = document.querySelector("#redButton");
const blueButton = document.querySelector("#blueButton ");
const whiteButton = document.querySelector("#whiteButton");
const blackButton = document.querySelector("#blackButton");
const log = document.querySelector("#log");

redButton.addEventListener("click", () => {
  hiMom.classList.add("red");
  hiMom.classList.remove("blue");
});

blueButton.addEventListener("click", () => {
  hiMom.classList.add("blue");
  hiMom.classList.remove("red");
});

whiteButton.addEventListener("click", () => {
  hiMom.style.color = "white";
});

blackButton.addEventListener("click", () => {
  hiMom.style.color = "black";
});

function logLastAttr(mutationRecordArray) {
  for (const record of mutationRecordArray) {
    if (record.type === "attributes") {
      log.textContent = `Updated attribute name: ${record.attributeName}`;
    }
  }
}

const observer = new MutationObserver(logLastAttr);
observer.observe(hiMom, { attributes: true });
```

#### Result

{{EmbedLiveSample("Get last updated attribute name", "", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
