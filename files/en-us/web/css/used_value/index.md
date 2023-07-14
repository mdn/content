---
title: Used value
slug: Web/CSS/used_value
page-type: guide
spec-urls: https://www.w3.org/TR/CSS22/cascade.html#used-value
---

{{CSSRef}}

The **used value** of a [CSS](/en-US/docs/Web/CSS) property is its value after all calculations have been performed on the [computed value](/en-US/docs/Web/CSS/computed_value).

After the {{glossary("user agent")}} has finished its calculations, every CSS property has a used value. The used values of dimensions (e.g., {{cssxref("width")}}, {{cssxref("line-height")}}) are in pixels. The used values of shorthand properties (e.g., {{cssxref("background")}}) are consistent with those of their component properties (e.g., {{cssxref("background-color")}} or {{cssxref("background-size")}}) and with {{cssxref("position")}} and {{cssxref("float")}}.

> **Note:** The {{domxref("Window.getComputedStyle", "getComputedStyle()")}} DOM API returns the [resolved value](/en-US/docs/Web/CSS/resolved_value), which may either be the [computed value](/en-US/docs/Web/CSS/computed_value) or the used value, depending on the property.

## Example

This example computes and displays the used `width` value of three elements (updates on resize):

### HTML

```html
<div id="no-width">
  <p>No explicit width.</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>Explicit width: 50%.</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>Explicit width: inherit.</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

### CSS

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* Make results easier to see */
div {
  border: 1px solid red;
  padding: 8px;
}
```

### JavaScript

```js
function updateUsedWidth(id) {
  const div = document.getElementById(id);
  const par = div.querySelector(".show-used-width");
  const wid = window.getComputedStyle(div)["width"];
  par.textContent = `Used width: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener("resize", updateAllUsedWidths);
```

### Result

{{ EmbedLiveSample('Example', '80%', 372) }}

## Difference from computed value

CSS 2.0 defined only _computed value_ as the last step in a property's calculation. Then, CSS 2.1 introduced the distinct definition of used value. An element could then explicitly inherit a width/height of a parent, whose computed value is a percentage. For CSS properties that don't depend on layout (e.g., `display`, `font-size`, or `line-height`), the computed values and used values are the same. The following are the CSS 2.1 properties that do depend on layout, so they have a different computed value and used value: (taken from [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- `background-position`
- `bottom`, `left`, `right`, `top`
- `height`, `width`
- `margin-bottom`, `margin-left`, `margin-right`, `margin-top`
- `min-height`, `min-width`
- `padding-bottom`, `padding-left`, `padding-right`, `padding-top`
- `text-indent`

## Specifications

{{Specifications}}

## See also

- {{domxref("window.getComputedStyle")}}
- CSS key concepts:
  - [CSS syntax](/en-US/docs/Web/CSS/Syntax)
  - [Comments](/en-US/docs/Web/CSS/Comments)
  - [Specificity](/en-US/docs/Web/CSS/Specificity)
  - [Inheritance](/en-US/docs/Web/CSS/Inheritance)
  - [Box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [Layout modes](/en-US/docs/Web/CSS/Layout_mode)
  - [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
  - [Margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Values
    - [Initial values](/en-US/docs/Web/CSS/initial_value)
    - [Computed values](/en-US/docs/Web/CSS/computed_value)
    - **Used values**
    - [Actual values](/en-US/docs/Web/CSS/actual_value)
  - [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
  - [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
  - [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
