---
title: Stacking context
slug: Web/CSS/CSS_positioned_layout/Stacking_context
page-type: guide
sidebar: cssref
---

**Stacking context** is a three-dimensional conceptualization of HTML elements along an imaginary z-axis relative to the user, who is assumed to be facing the viewport or the webpage. The stacking context determines how elements are layered on top of one another along the z-axis (think of it as the "depth" dimension on your screen). Stacking context determines the visual order of how overlapping content is rendered.

Elements within a stacking context are stacked independently from elements outside of that stacking context, ensuring elements in one stacking context don't interfere with the stacking order of elements in another. Each stacking context is completely independent of its siblings: only descendant elements are considered when stacking is processed.

Each stacking context is self-contained. After an element's contents are stacked, the entire element is considered as a single unit in the stacking order of its parent stacking context.

Within a stacking context, child elements are stacked according to the `z-index` values of all the siblings. The stacking contexts of these nested elements only have meaning in this parent. Stacking contexts are treated atomically as a single unit in the parent stacking context. Stacking contexts can be contained in other stacking contexts, and together create a hierarchy of stacking contexts.

The hierarchy of stacking contexts is a subset of the hierarchy of HTML elements because only certain elements create stacking contexts. Elements that don't create their own stacking contexts are _assimilated_ by the parent stacking context.

## Features creating stacking contexts

A stacking context is formed, anywhere in the document, by any element in the following scenarios:

- Root element of the document (`<html>`).
- Element with a {{cssxref("position")}} value `absolute` or `relative` and {{cssxref("z-index")}} value other than `auto`.
- Element with a {{cssxref("position")}} value `fixed` or `sticky`.
- Element with a {{cssxref("container-type")}} value `size` or `inline-size` set (See [container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries)).
- Element that is a [flex item](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) with a {{cssxref("z-index")}} value other than `auto`.
- Element that is a [grid item]() with {{cssxref("z-index")}} value other than `auto`.
- Element with an {{cssxref("opacity")}} value less than `1`.
- Element with a {{cssxref("mix-blend-mode")}} value other than `normal`.
- Element with any of the following properties with a value other than `none`:
  - {{cssxref("transform")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - {{cssxref("translate")}}
  - {{cssxref("filter")}}
  - {{cssxref("backdrop-filter")}}
  - {{cssxref("perspective")}}
  - {{cssxref("clip-path")}}
  - {{cssxref("mask")}} / {{cssxref("mask-image")}} / {{cssxref("mask-border")}}

- Element with the {{cssxref("isolation")}} value `isolate`.
- Element with a {{cssxref("will-change")}} value specifying any property that would create a stacking context on non-initial value.
- Element with a {{cssxref("contain")}} value of `layout` or `paint`, or a composite value that includes either of these values (i.e., `contain: strict`, `contain: content`).
- Element placed into the [top layer](/en-US/docs/Glossary/Top_layer) and its corresponding {{cssxref("::backdrop")}}. Examples include [fullscreen](/en-US/docs/Web/API/Fullscreen_API) and [popover](/en-US/docs/Web/API/Popover_API) elements.
- Element that has had stacking context-creating properties (such as `opacity`) animated using {{cssxref("@keyframes")}}, with [`animation-fill-mode`](/en-US/docs/Web/CSS/animation-fill-mode) set to [`forwards`](/en-US/docs/Web/CSS/animation-fill-mode#forwards).

## Nested stacking contexts

Stacking contexts can be contained in other stacking contexts, and they can together create a hierarchy of stacking contexts.

The root element of a document is a stacking context which, in most cases, contains nested stacking contexts, many of which will contain additional stacking contexts. Within each stacking context, child elements are stacked according to the same rules explained in [Using `z-index`](/en-US/docs/Web/CSS/CSS_positioned_layout/Using_z-index). Importantly, the `z-index` values of its child stacking contexts only have meaning within its parent's stacking context. Stacking contexts are treated atomically as a single unit in the parent stacking context.

To figure out the _rendering order_ of stacked elements along the z-axis, think of each index value as a "version number" of sorts, where child elements represent minor version numbers underneath their parent's major version number.

To demonstrate how the stacking order of each element participates in the stacking order of their ancestor stacking contexts, let's look at an example page with six container elements. There are three sibling {{htmlelement("article")}} elements. The last `<article>` contains three sibling {{htmlelement("section")}} elements, with the {{htmlelement("heading_elements", "&lt;h1&gt;")}} and {{htmlelement("code")}} of that third article appearing between the first and second sibling `<section>` elements.

```html
<article id="container1">
  <h1>Article element #1</h1>
  <code>
    position: relative;<br />
    z-index: 5;
  </code>
</article>

<article id="container2">
  <h1>Article Element #2</h1>
  <code>
    position: relative;<br />
    z-index: 2;
  </code>
</article>

<article id="container3">
  <section id="container4">
    <h1>Section Element #4</h1>
    <code>
      position: relative;<br />
      z-index: 6;
    </code>
  </section>

  <h1>Article Element #3</h1>
  <code>
    position: absolute;<br />
    z-index: 4;
  </code>

  <section id="container5">
    <h1>Section Element #5</h1>
    <code>
      position: relative;<br />
      z-index: 1;
    </code>
  </section>

  <section id="container6">
    <h1>Section Element #6</h1>
    <code>
      position: absolute;<br />
      z-index: 3;
    </code>
  </section>
</article>
```

Every container element has an {{cssxref("opacity")}} of less than `1` and a {{cssxref("position")}} of either `relative` or `absolute` set. These property-value pairs create a stacking context when the element has `z-index` value other than `auto`.

```css hidden
* {
  margin: 0;
}
html {
  padding: 20px;
  font:
    12px/20px Arial,
    sans-serif;
}
h1 {
  font-size: 1.25em;
}
#container1,
#container2 {
  border: 1px dashed #696;
  padding: 10px;
  background-color: #cfc;
}
#container1 {
  margin-bottom: 190px;
}
#container3 {
  border: 1px dashed #900;
  background-color: #fdd;
  padding: 40px 20px 20px;
  width: 330px;
}
#container4 {
  border: 1px dashed #996;
  background-color: #ffc;
  padding: 25px 10px 5px;
  margin-bottom: 15px;
}
#container5 {
  border: 1px dashed #996;
  background-color: #ffc;
  margin-top: 15px;
  padding: 5px 10px;
}
#container6 {
  background-color: #ddf;
  border: 1px dashed #009;
  padding-left: 20px;
  padding-top: 125px;
  width: 150px;
  height: 125px;
}
```

```css
section,
article {
  opacity: 0.85;
  position: relative;
}
#container1 {
  z-index: 5;
}
#container2 {
  z-index: 2;
}
#container3 {
  z-index: 4;
  position: absolute;
  top: 40px;
  left: 180px;
}
#container4 {
  z-index: 6;
}
#container5 {
  z-index: 1;
}
#container6 {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 180px;
}
```

The CSS properties for colors, fonts, alignment, and [box-model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) have been hidden for brevity.

{{ EmbedLiveSample('Nested stacking contexts', '100%', '396') }}

The hierarchy of stacking contexts in the above example is as follows:

```plain no-lint
Root
│
├── ARTICLE #1
├── ARTICLE #2
└── ARTICLE #3
  │
  ├── SECTION #4
  ├────  ARTICLE #3 content
  ├── SECTION #5
  └── SECTION #6
```

The three `<section>` elements are children of ARTICLE #3. Therefore, the stacking of the section elements is completely resolved within ARTICLE #3. Once stacking and rendering within ARTICLE #3 is completed, the whole ARTICLE #3 element is passed for stacking in the root element with respect to its sibling `<article>` elements.

By comparing the `z-index` as "version numbers", we can see how an element with a `z-index` of `1` (SECTION #5) is stacked above an element with a `z-index` of `2` (ARTICLE #2), and how an element with a `z-index` of `6` (SECTION #4) is stacked below an element with a `z-index` of `5` (ARTICLE #1).
SECTION #4 is rendered under ARTICLE #1 because ARTICLE #1's z-index (`5`) is valid within the stacking context of the root element, while SECTION #4's z-index (`6`) is valid within the stacking context of ARTICLE #3 (`z-index: 4`). So SECTION #4 is under ARTICLE #1 because SECTION #4 belongs to ARTICLE #3, which has a lower z-index value (`4-6` is less than `5-0`).

For the same reason, ARTICLE #2 (`z-index: 2`) is rendered under SECTION #5 (`z-index`: 1) because SECTION #5 belongs to ARTICLE #3 (`z-index: 4`), which has a higher z-index value (`2-0` is less than `4-1`).

ARTICLE #3's z-index is `4`, but this value is independent of the `z-index` of three sections nested inside it because they belong to a different stacking context.

In our example (sorted according to the final rendering order):

- Root
  - ARTICLE #2: (`z-index`: 2), which results in a rendering order of `2-0`
  - ARTICLE #3: (`z-index`: 4), which results in a rendering order of `4-0`
    - SECTION #5: (`z-index`: 1), stacked under an element (`z-index`: 4), which results in a rendering order of `4-1`
    - SECTION #6: (`z-index`: 3), stacked under an element (`z-index`: 4), which results in a rendering order of `4-3`
    - SECTION #4: (`z-index`: 6), stacked under an element (`z-index`: 4), which results in a rendering order of `4-6`

  - ARTICLE #1: (`z-index`: 5), which results in a rendering order of `5-0`

## Additional examples

Additional examples include a [2-level hierarchy with `z-index` on the last level](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1), a [2-level HTML hierarchy, `z-index` on all levels](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2), and a [3-level HTML hierarchy, `z-index` on the second level](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3).

## See also

- [Understanding z-index](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
- [Stacking without the `z-index` property](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [Stacking floating elements](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [Using z-index](/en-US/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- {{glossary("Top layer")}}
- [CSS positioned layout](/en-US/docs/Web/CSS/CSS_positioned_layout) module
