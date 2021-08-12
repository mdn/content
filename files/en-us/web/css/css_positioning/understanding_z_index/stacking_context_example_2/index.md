---
title: Stacking context example 2
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2
tags:
  - Advanced
  - CSS
  - Guide
  - Understanding_CSS_z-index
---
{{CSSRef}}

« [CSS](/en-US/docs/Web/CSS) « [Understanding CSS z-index](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index "Understanding CSS z-index")

## Stacking context example 2

This is a very simple example, but it is the key for understanding the concept of _stacking context_. There are the same four DIVs of the previous example, but now z-index properties are assigned on both levels of the hierarchy.

{{ EmbedLiveSample('Example_source_code', '352', '270') }}

You can see that DIV #2 (z-index: 2) is above DIV #3 (z-index: 1), because they both belong to the same stacking context (the root one), so z-index values rule how elements are stacked.

What can be considered strange is that DIV #2 (z-index: 2) is above DIV #4 (z-index: 10), despite their z-index values. The reason is that they do not belong to the same stacking context. DIV #4 belongs to the stacking context created by DIV #3, and as explained previously DIV #3 (and all its content) is under DIV #2.

To better understand the situation, this is the stacking context hierarchy:

- root stacking context

  - DIV #2 (z-index 2)
  - DIV #3 (z-index 1)

    - DIV #4 (z-index 10)

> **Note:** It is worth remembering that in general the HTML hierarchy is different from the stacking context hierarchy. In the stacking context hierarchy, elements that do not create a stacking context are collapsed on their parent.

## Example source code

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><style type="text/css">

div { font: 12px Arial; }

span.bold { font-weight: bold; }

#div2 { z-index: 2; }
#div3 { z-index: 1; }
#div4 { z-index: 10; }

#div1,#div3 {
   height: 80px;
   position: relative;
   border: 1px dashed #669966;
   background-color: #ccffcc;
   padding-left: 5px;
}

#div2 {
   opacity: 0.8;
   position: absolute;
   width: 150px;
   height: 200px;
   top: 20px;
   left: 170px;
   border: 1px dashed #990000;
   background-color: #ffdddd;
   text-align: center;
}

#div4 {
   opacity: 0.8;
   position: absolute;
   width: 200px;
   height: 70px;
   top: 65px;
   left: 50px;
   border: 1px dashed #000099;
   background-color: #ddddff;
   text-align: left;
   padding-left: 10px;
}

</style></head>

<body>

    <br />

    <div id="div1"><br />
        <span class="bold">DIV #1</span><br />
        position: relative;
        <div id="div2"><br />
            <span class="bold">DIV #2</span><br />
            position: absolute;<br />
            z-index: 2;
        </div>
    </div>

    <br />

    <div id="div3"><br />
        <span class="bold">DIV #3</span><br />
        position: relative;<br />
        z-index: 1;
        <div id="div4"><br />
            <span class="bold">DIV #4</span><br />
            position: absolute;<br />
            z-index: 10;
        </div>
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
- [Stacking context example 3](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3): 3-level HTML hierarchy, `z-index` on the second level
