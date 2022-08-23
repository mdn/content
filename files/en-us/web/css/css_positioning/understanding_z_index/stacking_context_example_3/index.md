---
title: Stacking context example 3
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3
tags:
  - Advanced
  - CSS
  - Guide
  - Understanding_CSS_z-index
---
{{CSSRef}}

« [CSS](/en-US/docs/Web/CSS) « [Understanding CSS z-index](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index)

## Stacking context example 3

This last example shows problems that arise when mixing several positioned elements in a multi-level HTML hierarchy and when z-indexes are assigned using class selectors.

Let's take as an example a three-level hierarchical menu made from several positioned DIVs. Second-level and third-level DIVs appear when hovering or clicking on their parents. Usually this kind of menu is script-generated either client-side or server-side, so style rules are assigned with a class selector instead of the id selector.

If the three menu levels partially overlap, then managing stacking could become a problem.

{{ EmbedLiveSample('Example_source_code', '320', '330') }}

The first-level menu is only relatively positioned, so no stacking context is created.

The second-level menu is absolutely positioned inside the parent element. In order to put it above all first-level menus, a `z-index` is used. The problem is that for each second-level menu, a stacking context is created and each third-level menu belongs to the context of its parent.

So a third-level menu will be stacked under the following second-level menus, because all second-level menus share the same `z-index` value and the default stacking rules apply.

To better understand the situation, here is the stacking context hierarchy:

- root stacking context

  - LEVEL #1

    - LEVEL #2 (z-index: 1)

      - LEVEL #3
      - …
      - LEVEL #3

    - LEVEL #2 (z-index: 1)
    - …
    - LEVEL #2 (z-index: 1)

  - LEVEL #1
  - …
  - LEVEL #1

This problem can be avoided by removing overlapping between different level menus, or by using individual (and different) `z-index` values assigned through the id selector instead of class selector, or by flattening the HTML hierarchy.

> **Note:** In the source code you will see that second-level and third level menus are made of several DIVs contained in an absolutely positioned container. This is useful to group and position all of them at once.

## Example source code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
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
    </style>
  </head>

  <body>
    <br />

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
  </body>
</html>
```

## See also

- [Stacking without the z-index property](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): The stacking rules that apply when `z-index` is not used.
- [Stacking with floated blocks](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float): How floating elements are handled with stacking.
- [Using z-index](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): How to use `z-index` to change default stacking.
- [The stacking context](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context): Notes on the stacking context.
- [Stacking context example 1](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2-level HTML hierarchy, `z-index` on the last level
- [Stacking context example 2](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2): 2-level HTML hierarchy, `z-index` on all levels

> **Note:** the reason the sample image looks wrong - with the second level 2 overlapping the level 3 menus - is because level 2 has opacity, which creates a new stacking context.
> Basically, this whole sample page is incorrect and misleading.
