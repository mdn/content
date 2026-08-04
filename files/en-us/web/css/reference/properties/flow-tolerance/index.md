---
title: "`flow-tolerance` CSS property"
short-title: flow-tolerance
slug: Web/CSS/Reference/Properties/flow-tolerance
page-type: css-property
status:
  - experimental
browser-compat: css.properties.flow-tolerance
sidebar: cssref
---

{{SeeCompatTable}}

The **`flow-tolerance`** [CSS](/en-US/docs/Web/CSS) property sets the threshold for how close two lanes must be in how full they are, along the {{glossary("stacking axis")}}, before they are treated as equally filled. It only applies to [grid lanes](/en-US/docs/Web/CSS/Guides/Grid_layout/Grid_lanes_layout) containers.

Each item is normally placed into whichever lane is least full so far — the lane with space closest to the top of the container. `flow-tolerance` relaxes that rule: when one lane is emptier than another by less than the tolerance, the two are treated as tied, and the item flows into the next lane in source order instead of being pulled into the emptier one. A larger tolerance keeps items flowing sequentially across the lanes; a smaller tolerance packs them toward the start of the lanes.

{{InteractiveExample("CSS Demo: flow-tolerance")}}

```css interactive-example-choice
flow-tolerance: 0;
```

```css interactive-example-choice
flow-tolerance: 5px;
```

```css interactive-example-choice
flow-tolerance: 10px;
```

```css interactive-example-choice
flow-tolerance: 1.1em;
```

```css interactive-example
.grid {
  display: grid-lanes;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  flow-tolerance: normal;
  padding: 10px;
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  height: 100%;
}

* {
  box-sizing: border-box;
}

body {
  font: 1.2em sans-serif;
}

.item {
  border-radius: 5px;
  border: 2px solid #b5b5b5;
  background-color: #f0f0f0;
  color: #545454;
  align-content: center;
  text-align: center;
}

.item:nth-child(2) {
  border-color: #4da9ff;
  background-color: #a8d8ff;
  color: #0f48d9;
}

.item:nth-child(3) {
  border-color: #ffa94d;
  background-color: #ffd8a8;
  color: #d9480f;
}

.item:nth-child(4) {
  border-color: #d9480f;
  background-color: #f9d3ae;
  color: #d9480f;
}

.line {
  position: absolute;
  border-bottom: 1px solid #4da9ff;
  background-color: #4da9ff44;
  width: calc(100% - 24px);
  left: 12px;
  transition: all ease-in 300ms;
}

#default-element {
  position: relative;
}

#example-element {
  width: 100%;
}
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="grid" id="example-element">
    <div class="item">1</div>
    <div class="item second">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
  </div>
</section>
```

```js interactive-example
// prettier-ignore
const itemSizes = ["5em", "4.5em", "5em", "5em"];
const items = document.querySelectorAll(".item");
items.forEach((item, i) => (item.style.blockSize = itemSizes[i]));

const container = document.getElementById("default-example");
const el = document.getElementById("example-element");
const firstItem = items[1];
container.style.position = "relative";

const line = document.createElement("div");
line.classList.add("line");
container.appendChild(line);

function tolerancePx() {
  const raw = el.getAttribute("style")?.match(/flow-tolerance:\s*([^;]+)/)?.[1];
  const probe = document.createElement("div");
  probe.style.cssText = `position:absolute;visibility:hidden;height:${raw?.trim() || "1em"}`;
  el.appendChild(probe);
  const px = probe.getBoundingClientRect().height;
  probe.remove();
  return px;
}

function positionLine() {
  const { bottom } = firstItem.getBoundingClientRect();
  const top = container.getBoundingClientRect().top;
  line.style.top = `${bottom - top}px`;
  line.style.height = `${tolerancePx()}px`;
}

// Re-position when the selected choice changes the element's inline style.
new MutationObserver(positionLine).observe(el, {
  attributes: true,
  attributeFilter: ["style"],
});
positionLine();
```

## Syntax

```css
/* Keyword values */
flow-tolerance: normal;
flow-tolerance: infinite;

/* <length-percentage> values */
flow-tolerance: 1em;
flow-tolerance: 10px;
flow-tolerance: 10%;

/* Global values */
flow-tolerance: inherit;
flow-tolerance: initial;
flow-tolerance: revert;
flow-tolerance: revert-layer;
flow-tolerance: unset;
```

### Values

- `normal`
  - : Resolves to `1em`, preventing flickering between near-equal lanes while still packing tightly. This is the initial value.
- {{cssxref("&lt;length-percentage&gt;")}}
  - : Sets an explicit threshold. Percentages are relative to the grid-axis content-box size of the grid lanes container.
- `infinite`
  - : All lanes are always treated as tied, so each item is placed into the next available lane in sequence, even if that lane is already so full that the item lands far down the layout, potentially below the fold. No repacking occurs. Use this value sparingly, as it can make masonry layouts very difficult to follow for keyboard navigation and users of assistive technology.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting an explicit tolerance

The following declaration widens the tolerance so that items only move to a different lane when doing so gains more than `3em` of space, keeping the visual order closer to the source order.

```css
.container {
  display: grid-lanes;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  flow-tolerance: 3em;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("display")}}
- {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}}
