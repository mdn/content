---
title: CSSPageRule
slug: Web/API/CSSPageRule
page-type: web-api-interface
browser-compat: api.CSSPageRule
---

{{APIRef("CSSOM")}}

**`CSSPageRule`** represents a single CSS {{cssxref("@page")}} rule.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestors {{domxref("CSSGroupingRule")}} and {{domxref("CSSRule")}}._

- {{domxref("CSSPageRule.selectorText")}}
  - : Represents the text of the page selector associated with the at-rule.
- {{domxref("CSSPageRule.style")}} {{ReadOnlyInline}}
  - : Returns the [declaration block](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) associated with the at-rule.

## Instance methods

_Inherits methods from its ancestors {{domxref("CSSGroupingRule")}} and {{domxref("CSSRule")}}._

## Examples

### Filtering for page rules

This example shows how you can find `CSSPageRule` objects for {{cssxref("@page")}} rules loaded by the document.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 220px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### CSS

Below we define styles for the page using a {{cssxref("@page")}} rule.

```css
@page {
  margin: 1cm;
}
```

#### JavaScript

The code iterates through all the sheets in the document, and through all the `cssRules` in each sheet, logging the sheet index, the number of rules, and the type of each rule object.
We then detect `CSSPageRule` objects using their type (doing nothing with the information).

```js
for (
  let sheetCount = 0;
  sheetCount < document.styleSheets.length;
  sheetCount++
) {
  const sheet = document.styleSheets[sheetCount].cssRules;
  log(`styleSheet: ${sheetCount}`);

  const myRules = document.styleSheets[sheetCount].cssRules;
  log(`rules: ${myRules.length}`);
  for (let i = 0; i < myRules.length; i++) {
    log(`rule: ${myRules[i]}`);
    if (myRules[i] instanceof CSSPageRule) {
      // Do something with CSSPageRule
    }
  }
}
```

#### Results

The results are shown below.
As you can see there are a two sheets, corresponding to this main document and the example code frame, and each have a number of rules, only one of which is our `CSSPageRule`.

{{EmbedLiveSample("Filtering for page rules", "100%", "300px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
