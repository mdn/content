---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
page-type: web-api-interface
browser-compat: api.CSSMediaRule
---

{{ APIRef("CSSOM") }}

The **`CSSMediaRule`** interface represents a single CSS {{cssxref("@media")}} rule.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestors {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, and {{domxref("CSSRule")}}._

- {{domxref("CSSMediaRule.media")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("MediaList")}} representing the intended destination medium for style information.

## Instance methods

_No specific methods; inherits methods from its ancestors {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, and {{domxref("CSSRule")}}._

## Examples

The CSS below includes a media query with one style rule.
The MDN [live sample](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples) infrastructure combines all the CSS blocks in the example into a single inline style with the id `css-output`, so we first use {{domxref("document.getElementById()")}} to find that sheet.
`myRules[0]` returns a `CSSMediaRule` object, from which we can get the `mediaText`.

```html
<p id="log"></p>
```

```css
@media (width >= 500px) {
  body {
    color: blue;
  }
}
```

```js
const log = document.getElementById("log");
const myRules = document.getElementById("css-output").sheet.cssRules;
const mediaList = myRules[0]; // a CSSMediaRule representing the media query.
log.textContent += ` ${mediaList.media.mediaText}`;
```

{{EmbedLiveSample("Examples","100%","50px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
