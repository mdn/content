---
title: MutationRecord.oldValue
slug: Web/API/MutationRecord/oldValue
page-type: web-api-instance-property
tags:
  - oldValue
  - MutationRecord
  - Property
  - Reference
browser-compat: api.MutationRecord.oldValue
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} **`oldValue`** property contains the character data or attribute value of an observed node before it was changed.

## Value

The property is set to the value (as a string) of a node before a mutation observed with a {{domxref("MutationObserver")}}. The value depends based on the value of {{domxref("MutationRecord.type")}}.

> **Note:** For this to work as expected, the `attributeOldValue` or `characterDataOldValue` parameters of the
> {{domxref("MutationObserver.observe()")}} must be set to `true` to demonstrate the functionality detailed below.

- If the mutation type is `attributes`, the value will be the pre-mutation value of the attribute element whose attribute(s) have been mutated.

- If the mutation type is `characterData`, the value will be the pre-mutation value of the {{domxref("characterData")}} node that has been mutated.

- If the mutation type is `childList`, the value will be `null`.

## Examples

### Show Old Color Value

In the following example, there is a button that changes the color of an `h1` to a random new color. A {{domxref("MutationObserver")}} is used to observe the target node (`h1`) for changes to the attribute; when a change is detected, the observer calls a function, `logOldValue`.

The `logOldValue` function is passed the `mutationRecords` array, which contains the `MutationRecord` objects. The `oldValue` property of the `MutationRecord` object is then displayed.

#### HTML

```html
<h1 id="h1" style="rgb(0, 0, 0);">Hi, Mom!</h1>
<button id="changeColorButton">Change color</button>
<p id="log"></p>
```

#### JavaScript

```js
const h1 = document.getElementById("h1");
const changeValueButton = document.getElementById("changeColorButton");
const log = document.getElementById("log");

function changeColor() {
  // Generates a 6 character hexadecimal string
  let newColor = Math.floor(Math.random()*16777215).toString(16);
  h1.style.color = `#${newColor}`;
}

changeColorButton.addEventListener("click", function () {
  changeColor();
});

function logOldValue(mutationRecordArray) {
  for (const record of mutationRecordArray) {
    log.textContent = `Old value: ${record.oldValue}`;
  }
}

const observer = new MutationObserver(logOldValue);
observer.observe(h1, {
  attributes: true,
  attributeOldValue: true
});
```

#### Result

{{EmbedLiveSample("Show Old Color Value")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
