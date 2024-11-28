---
title: Stacking context example 3
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3
page-type: guide
---

{{CSSRef}}

## Description

This last example shows problems that arise when mixing several positioned elements in a multi-level HTML hierarchy and when `z-index` values are assigned using class selectors.

Let's take as an example a three-level hierarchical menu made from several positioned `div` elements. Second-level and third-level `div` elements appear when a user hovers or clicks on their parents. Usually this kind of menu is script-generated either client-side or server-side, so style rules are assigned with a class selector instead of the id selector.

If the three menu levels partially overlap, then managing stacking could become a problem.

The first-level menu is only relatively positioned, so no stacking context is created.

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
  <span class="bold">LEVEL #1</span>

  <div id="container1">
    <div class="lev2">
      <br /><span class="bold">LEVEL #2</span> <br />z-index: 1;

      <div id="container2">
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
      </div>
    </div>

    <div class="lev2">
      <br /><span class="bold">LEVEL #2</span> <br />z-index: 1;
    </div>
    <div class="lev2">
      <br /><span class="bold">LEVEL #2</span> <br />z-index: 1;
    </div>
    <div class="lev2">
      <br /><span class="bold">LEVEL #2</span> <br />z-index: 1;
    </div>
  </div>
</div>

<div class="lev1">
  <span class="bold">LEVEL #1</span>
</div>

<div class="lev1">
  <span class="bold">LEVEL #1</span>
</div>

<div class="lev1">
  <span class="bold">LEVEL #1</span>
</div>
```

### CSS

```css
div {
  font: 12px Arial;
}

span.bold {
  font-weight: bold;
}

div.lev1 {
  width: 250px;
  height: 70px;
  position: relative;
  border: 2px outset #669966;
  background-color: #ccffcc;
  padding-left: 5px;
}

#container1 {
  z-index: 1;
  position: absolute;
  top: 30px;
  left: 75px;
}

div.lev2 {
  opacity: 0.9;
  width: 200px;
  height: 60px;
  position: relative;
  border: 2px outset #990000;
  background-color: #ffdddd;
  padding-left: 5px;
}

#container2 {
  z-index: 1;
  position: absolute;
  top: 20px;
  left: 110px;
}

div.lev3 {
  z-index: 10;
  width: 100px;
  position: relative;
  border: 2px outset #000099;
  background-color: #ddddff;
  padding-left: 5px;
}
```

## Result

{{ EmbedLiveSample('Example', '320', '330') }}

## See also

- [Stacking without the `z-index` property](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): The stacking rules that apply when `z-index` is not used.
- [Stacking floating elements](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): How floating elements are handled with stacking.
- [Using z-index](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): How to use `z-index` to change default stacking.
- [Stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Notes on the stacking context.
- [Stacking context example 1](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-level HTML hierarchy, `z-index` on the last level
- [Stacking context example 2](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-level HTML hierarchy, `z-index` on all levels

> [!NOTE]
> The sample image looks wrong - with the second level 2 overlapping the level 3 menus - because level 2 has opacity, which creates a new stacking context.
> Basically, this whole sample page is incorrect and misleading.
