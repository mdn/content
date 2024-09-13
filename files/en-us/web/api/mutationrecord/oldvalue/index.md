---
title: "MutationRecord: oldValue property"
short-title: oldValue
slug: Web/API/MutationRecord/oldValue
page-type: web-api-instance-property
browser-compat: api.MutationRecord.oldValue
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} read-only property **`oldValue`** contains the character data or attribute value of an observed node before it was changed.

## Value

A string representing the old value of an attribute which has been changed, if:

- the `attributeOldValue` parameter to {{domxref("MutationObserver.observe()")}} is `true`
- the `attributes` parameter to {{domxref("MutationObserver.observe()")}} is `true` or omitted
- the mutation {{domxref("MutationRecord.type", "type")}} is `attributes`.

A string representing the old value of a {{domxref("CharacterData")}} node that has been changed, if:

- the `characterDataOldValue` parameter to {{domxref("MutationObserver.observe()")}} is `true`
- the `characterData` parameter to {{domxref("MutationObserver.observe()")}} is `true` or omitted
- the mutation {{domxref("MutationRecord.type", "type")}} is `characterData`.

Otherwise this property is `null`.

## Examples

### Show old color value

In the following example, there is a button that changes the color of an `h1` to a random new color. A {{domxref("MutationObserver")}} is used to observe the target node (`h1`) for changes to the attribute; when a change is detected, the observer calls a function, `logOldValue()`.

The `logOldValue()` function is passed the `mutationRecords` array, which contains the `MutationRecord` objects. The `oldValue` property of the `MutationRecord` object is then displayed, in the color of the old value.

#### HTML

```html
<h1 id="h1" style="color: rgb(0 0 0);">Hi, Mom!</h1>
<button id="changeColorButton">Change color</button>
<p id="log"></p>
```

#### JavaScript

```js
const h1 = document.getElementById("h1");
const changeValueButton = document.getElementById("changeColorButton");
const log = document.getElementById("log");

changeColorButton.addEventListener("click", () => {
  // Random 6 character hexadecimal number to use as the hex color value
  const newColor = Math.floor(Math.random() * 16777215).toString(16);
  h1.style.color = `#${newColor}`;
});

function logOldValue(mutationRecordArray) {
  for (const record of mutationRecordArray) {
    log.textContent = `Old value: ${record.oldValue}`;
    log.style.cssText = record.oldValue;
  }
}

const observer = new MutationObserver(logOldValue);
observer.observe(h1, {
  attributes: true,
  attributeOldValue: true,
});
```

#### Result

{{EmbedLiveSample("Show old color value", "", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
