---
title: Stacking context example 3
short-title: Example 3
slug: Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3
page-type: guide
sidebar: cssref
---

## Description

This example shows problems that arise when mixing several positioned elements in a multi-level HTML hierarchy and when `z-index` values are assigned using class selectors.

The example has a three-level hierarchical menu made from several positioned `div` elements. Second-level and third-level `div` elements appear when a user hovers or clicks on their parents. Usually this kind of menu is script-generated either client-side or server-side, so style rules are assigned with a class selector instead of the id selector.

If the three menu levels partially overlap, then managing stacking could become a problem.

The first-level menu is relatively positioned, creating a stacking context.

The second-level menu is absolutely positioned inside the parent element. In order to put it above all first-level menus, the `z-index` property is used. The problem is that for each second-level menu, a stacking context is created and each third-level menu belongs to the context of its parent.

So a third-level menu will be stacked under the following second-level menus, because all second-level menus share the same z-index value and the default stacking rules apply.

To better understand the situation, here is the stacking context hierarchy (the three dots "..." represent multiple repetition of the previous line):

- Root stacking context
  - LEVEL #1
    - LEVEL #2 (`z-index`: 1)
      - LEVEL #3
      - …
      - LEVEL #3

    - LEVEL #2 (`z-index`: 1)
    - …
    - LEVEL #2 (`z-index`: 1)

  - LEVEL #1
  - …
  - LEVEL #1

This problem can be avoided by removing overlapping between different level menus, or by using individual (and different) z-index values assigned through the id selector instead of class selector, or by flattening the HTML hierarchy.

> [!NOTE]
> In the source code you will see that second-level and third level menus are made of several `div` elements contained in an absolutely positioned container. This is useful to group and position all of them at once.

## Example

### HTML

```html
<div class="lev1">
  LEVEL #1

  <div id="container1">
    <div class="lev2">
      LEVEL #2 <br />z-index: 1;

      <div id="container2">
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
      </div>
    </div>

    <div class="lev2">LEVEL #2 <br />z-index: 1;</div>
    <div class="lev2">LEVEL #2 <br />z-index: 1;</div>
    <div class="lev2">LEVEL #2 <br />z-index: 1;</div>
  </div>
</div>

<div class="lev1">LEVEL #1</div>
<div class="lev1">LEVEL #1</div>
<div class="lev1">LEVEL #1</div>
```

### CSS

```css hidden
div {
  font: 12px "Arial";
  font-weight: bold;
  padding-left: 5px;
}
.lev1 {
  border: 2px outset #669966;
  background-color: #ccffcc;
}
.lev2 {
  border: 2px outset #990000;
  background-color: #ffdddd;
}
.lev3 {
  border: 2px outset #000099;
  background-color: #ddddff;
}
```

```css
div {
  opacity: 0.9;
}
.lev1 {
  width: 250px;
  height: 70px;
  position: relative;
}

#container1 {
  z-index: 1;
  position: absolute;
  top: 30px;
  left: 75px;
}

.lev2 {
  width: 200px;
  height: 60px;
  position: relative;
}

#container2 {
  z-index: 1;
  position: absolute;
  top: 20px;
  left: 110px;
}

.lev3 {
  z-index: 10;
  width: 100px;
  position: relative;
}
```

## Result

{{ EmbedLiveSample('Example', '320', '330') }}

## See also

- [Stacking without the `z-index` property](/en-US/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index): The stacking rules that apply when `z-index` is not used.
- [Stacking floating elements](/en-US/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements): How floating elements are handled with stacking.
- [Using z-index](/en-US/docs/Web/CSS/Guides/Positioned_layout/Using_z-index): How to use `z-index` to change default stacking.
- [Stacking context](/en-US/docs/Web/CSS/Guides/Positioned_layout/Stacking_context): Notes on the stacking context.
- [Stacking context example 1](/en-US/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1): 2-level HTML hierarchy, `z-index` on the last level
- [Stacking context example 2](/en-US/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2): 2-level HTML hierarchy, `z-index` on all levels
