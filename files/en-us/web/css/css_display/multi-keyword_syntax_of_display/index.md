---
title: Using the multi-keyword syntax with CSS display
slug: Web/CSS/CSS_display/multi-keyword_syntax_of_display
page-type: guide
---

{{CSSRef}}

The [CSS display module](/en-US/docs/Web/CSS/CSS_display) defines a multi-keyword syntax for the CSS [`display`](/en-US/docs/Web/CSS/display) property. This guide explains the multi-keyword syntax.

> [!NOTE]
> Multi-keyword syntax is also referred to as "two-value syntax" or "multi-value syntax."

## What happens when we change the value of the display property?

One of the first things we learn about CSS is that some elements are block-level and some are inline-level. These are their [outer](/en-US/docs/Web/CSS/display-outside) display types. For example, an `<h1>` or a `<p>` are block-level by default, and a `<span>` is inline-level. Using the {{cssxref("display")}} property we can switch between block and inline. For example to make a heading inline we would use the following CSS:

```css
h1 {
  display: inline;
}
```

The `display` property also lets us use [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) and [Flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) when `display: grid` or `display: flex` is set. The important concept to understand is that changing an element's `display` value can change the formatting context of its direct children. When you use `display: flex` or `display: grid`, the element's children become flex or grid items and respond to the properties in grid and flexbox specifications.

What grid and flexbox demonstrate, however, is that an element has both an **outer** and an **inner** display type. The outer display type describes whether the element is block-level or inline-level. The inner display type describes how the children of that box behave.

As an example, when we use `display: flex` we create a block-level container, with flex children. The children are described as participating in a flex formatting context. You can see this if you take a `<span>` — normally an inline-level element — and apply `display: flex` to it. The `<span>` becomes a block-level element. It behaves as block-level things do in relationship to other boxes in the layout. It's as if you had applied `display: block` to the span, however we also get the changed behavior of the children.

The live example below has a `<span>` with `display: flex` applied. It has become a block-level box taking up all available space in the inline direction. You can now use `justify-content: space-between` to put this space between the two flex items.

```html live-sample___span-flex
<span class="flex"> Some text <em>emphasized text</em> </span>
```

```css live-sample___span-flex
body {
  font: 1.2em / 1.5 sans-serif;
}
.flex {
  border: 5px solid #ccc;
  display: flex;
  justify-content: space-between;
}
```

{{EmbedLiveSample("span-flex")}}

It's also possible to create inline flex containers. If you use the single value `inline-flex` you will have an inline-level box with flex children. The children behave in the same way as the flex children of a block-level container. The only thing that has changed is that the parent is now an inline-level box. It therefore behaves like other inline-level things, and doesn't take up the full width (or size in the inline dimension) that a block-level box does. This means that some following text could come up alongside the flex container.

```html live-sample___inline-flex
<div class="flex">
  <div>One</div>
  <div>Two</div>
</div>
Text following the flex container.
```

```css live-sample___inline-flex
body {
  font: 1.2em / 1.5 sans-serif;
}
.flex > div {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.flex {
  border: 5px solid #ccc;
  display: inline-flex;
}
```

{{EmbedLiveSample("inline-flex")}}

The same is true when working with grid layout. Using `display: grid` will give you a block-level box, which creates a grid formatting context for the direct children. Using `display: inline-grid` will create an inline-level box, which creates a grid formatting context for the children.

## Using the multi-keyword syntax

As you can see from the above explanation, the `display` property has considerable powers. In addition to indicating whether something is block-level or inline-level in relationship to other boxes on the page, it also indicates the formatting context inside the box it is applied to. To better describe this behavior, the `display` property allows for two values — an outer and inner value — to be set on it. The original single-value syntax is also valid.

This means that instead of setting `display: flex` to create a block-level box with flex children, we use `display: block flex`. Instead of `display: inline-flex` to create an inline-level box with flex children, we use `display: inline flex`. The example below demonstrates these values.

```html live-sample___multi-keyword-flex
<h1>Multiple values for display</h1>

<div class="flex flex1">
  <div>Item One</div>
  <div>Item Two</div>
  <div>Item Three</div>
</div>

<p>The first example is a block element with flex children.</p>

<div class="flex flex2">
  <div>Item One</div>
  <div>Item Two</div>
  <div>Item Three</div>
</div>
The second example is an inline element with flex children.
```

```css live-sample___multi-keyword-flex
body {
  font: 1.2em / 1.5 sans-serif;
}
.flex {
  border: 5px solid #ccc;
  gap: 10px;
}

.flex > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.flex1 {
  display: block flex;
}

.flex2 {
  display: inline flex;
}
```

{{EmbedLiveSample("multi-keyword-flex", "", "300px")}}

There are mappings for all of the existing values of `display`; the most common ones are listed in the table below. To see a full list take a look at the table found in the [`display` property specification](https://drafts.csswg.org/css-display/#display-value-summary).

| Single value   | Multi value        |
| -------------- | ------------------ |
| `block`        | `block flow`       |
| `flow-root`    | `block flow-root`  |
| `inline`       | `inline flow`      |
| `inline-block` | `inline flow-root` |
| `flex`         | `block flex`       |
| `inline-flex`  | `inline flex`      |
| `grid`         | `block grid`       |
| `inline-grid`  | `inline grid`      |

## display: block flow-root and display: inline flow-root

Regarding how this multi-value syntax helps clarify CSS layout, we can look at some values in the table above that might be less familiar to you. The multi-keyword `display: block flow-root` maps to a single value; `display: flow-root`. This value's only purpose is to create a new [Block Formatting Context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC). A BFC ensures that everything inside your box stays inside, and things outside the box cannot intrude into it.

In the example below, two `<p>` elements, one inside a `<div>` demonstrate how display values affect formatting contexts.
The first `<div>` element with the demo controls is hidden so we can focus on the elements that follow instead.
The elements that we should focus on are the "parent", "child", and "sibling" `<div>` and `<p>` elements which you can differentiate by their IDs.

What's notable about this layout is that there is no content between the parent and child elements, and the child element has a top margin applied.
You might expect the top margin to effectively push the child element down within the parent element, but what happens instead is something called [_margin collapse_](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing).
In this case, the margin of the child element extends well above the parent's bounding box and pushes the parent element further down the page.
This is easier to see if you inspect the box model of the child element [in your browser's developer tools](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#use_browser_devtools_to_view_the_box_model).

Change the selected option in the `<select>` element to see the effect of different `display` values.
You can use any value with `flow-root` to create a new formatting context for the parent, making the child element margin relative to its parent's outer edge and avoiding the margin collapse.
Changing between `display: flow-root` and `display: block flow-root` will achieve the same effect as the single-value `flow-root` keyword.

```js hidden
function changeDisplayType() {
  var parentDiv = document.getElementById("parent");
  var siblingDiv = document.getElementById("sibling");
  var displayType = document.getElementById("displayType").value;

  parentDiv.style.display = displayType;
  siblingDiv.style.display = displayType;
}
```

```css hidden
#controls {
  padding: 1rem;
  outline: 2px dashed black;
}
body {
  margin: 10px;
  font-family: sans-serif;
}
```

```css
div,
p {
  outline: 2px solid black;
  background-color: cornflowerblue;
  display: block;
  margin-bottom: 2rem;
}

#parent {
  background-color: oldlace;
  min-height: 2rem;
}

#child {
  margin-top: 4rem;
  outline: 2px dashed red;
}

#sibling {
  background-color: lavender;
}
```

```html hidden
<div id="controls">
  <label for="displayType">display:</label>
  <select id="displayType" onchange="changeDisplayType()">
    <option value="block">block</option>
    <option value="flow-root">flow-root</option>
    <option value="block flow-root">block flow-root</option>
    <option value="inline">inline</option>
    <option value="inline flow-root">inline flow-root</option>
  </select>
</div>
```

```html
<div id="parent">
  <p id="child">The #child paragraph (nested in #parent).</p>
</div>
<p id="sibling">The #sibling paragraph (sibling of #parent).</p>
```

{{EmbedLiveSample("display_block_flow-root_and_display_inline_flow-root", '90%', 380)}}

The `flow-root` value makes sense if you think about block and inline layout, which is sometimes called [normal flow](/en-US/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow). Our HTML page creates a new formatting context (floats and margins cannot extend out from the boundaries) and our content lays out in normal flow, using block and inline layout, unless we change the value of `display` to use some other formatting context. Creating a grid or flex container also creates a new formatting context (a grid or flex formatting context, respectively.) These also contain everything inside them. However, if you want to contain floats and margins but continue using block and inline layout, you can create a new flow root, and start over with block and inline layout. From that point downwards everything is contained inside the new flow root.

This is why `display: flow-root` can be written using the multi-keyword syntax `display: block flow-root`. You are creating a block formatting context, with a block-level box and children participating in normal flow. What about the matched pair `display: inline flow-root`? This is the current way of describing `display: inline-block`.

The value `display: inline-block` has been around since the early days of CSS. The reason we tend to use it is to allow padding to push inline items away from an element, when creating navigation items for example, or when wanting to add a background with padding to an inline element as in the example below.

```html live-sample___inline-block
<p>
  This paragraph has a span <span class="inline-block">with padding</span> it is
  an inline-block so the padding is contained and pushes the other line boxes
  away.
</p>
```

```css live-sample___inline-block
body {
  font: 1.2em / 1.5 sans-serif;
}
p {
  border: 2px dashed;
  width: 300px;
}
.inline-block {
  background-color: rgb(0 0 0 / 0.4);
  color: #fff;
  padding: 10px;
  display: inline-block;
}
```

{{EmbedLiveSample("inline-block", "", "200px")}}

An element with `display: inline-block` however, will also contain floats. It contains everything inside the inline-level box. Therefore `display: inline-block` does exactly what `display: flow-root` does, but with an inline-level, rather than a block-level box. The two-value syntax accurately describes what is happening with this value. In the example above, you can change `display: inline-block` to `display: inline flow-root` and get the same result.

## What about the old values of display?

The single values of `display` are described in the specification as legacy values, and currently you gain no benefit from using the multi-keyword versions, as there is a direct mapping for each multi-keyword version to a legacy version, as demonstrated in the table above.

To deal with single values of `display` [the specification](https://www.w3.org/TR/css-display-3/#outer-role) explains what to do if only the outer value of `block` or `inline` is used:

> "If a `<display-outside>` value is specified but `<display-inside>` is omitted, the element's inner display type defaults to flow."

This means that the behavior is exactly as it is in a single value world. If you specify `display: block` or `display: inline`, that changes the outer display value of the box but any children continue in normal flow.
If only an inner value of `flex`, `grid`, or `flow-root` is specified then [the specification](https://www.w3.org/TR/css-display-3/#inner-model) explains that the outer value should be set to `block`:

> "If a `<display-inside>` value is specified but `<display-outside>` is omitted, the element's outer display type defaults to block—except for ruby, which defaults to inline."

Finally, we have some legacy [pre-composed inline-level values](https://www.w3.org/TR/css-display-3/#legacy-display) of:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

If a supporting browser comes across these as single values then it treats them the same as the multi-keyword versions:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So all of the current situations are neatly covered, meaning that we maintain compatibility of existing and new sites that use the single values, while allowing the spec to evolve.
