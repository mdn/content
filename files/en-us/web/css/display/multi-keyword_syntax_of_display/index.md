---
title: Adapting to the new multi-keyword syntax of display
slug: Web/CSS/display/multi-keyword_syntax_of_display
page-type: guide
status:
  - experimental
---

{{CSSRef}}

[CSS Display Module Level 3](https://drafts.csswg.org/css-display/) describes the multi-keyword syntax for the [`display`](/en-US/docs/Web/CSS/display) property. This guide explains the change to the syntax, including the reasoning behind this change. It also details the in-built backwards compatibility for the `display` property.

> **Note:** this syntax may also be referred to as "two-value syntax" or "multi-value syntax."

## What happens when we change the value of the display property?

One of the first things we learn about CSS is that some elements are block-level and some are inline-level. For example, an `<h1>` or a `<p>` are block-level by default, and a `<span>` is inline-level. Using the {{cssxref("display")}} property we can switch between block and inline. For example to make a heading inline we would use the following CSS:

```css
h1 {
  display: inline;
}
```

More recently we have gained [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_grid_layout) and [Flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout). To access these we also use values of the `display` property — `display: grid` and `display: flex`. Only when the value of `display` is changed do the children become flex or grid items and begin to respond to the other properties in the grid or flexbox specifications. Changing an element's `display` value changes the formatting context of its direct children.

What grid and flexbox demonstrate, however, is that an element has both an **outer** and an **inner** display type. The outer display type describes whether the element is block-level or inline-level. The inner display type describes how the children of that box behave.

As an example, when we use `display: flex` we create a block-level container, with flex children. The children are described as participating in a flex formatting context. You can see this if you take a `<span>` — normally an inline-level element — and apply `display: flex` to it. The `<span>` becomes a block-level element. It behaves as block-level things do in relationship to other boxes in the layout. It's as if you had applied `display: block` to the span, however we also get the changed behavior of the children.

The live example below has a `<span>` with `display: flex` applied. It has become a block-level box taking up all available space in the inline direction. You can now use `justify-content: space-between;` to put this space between the two flex items.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/span-flex.html", '100%', 440)}}

We can create inline flex containers. If you create a flex container using the single value of `inline-flex` you will have an inline-level box with flex children. The children behave in the same way as the flex children of a block-level container. The only thing that has changed is that the parent is now an inline-level box. It therefore behaves like other inline-level things, and doesn't take up the full width (or size in the inline dimension) that a block-level box does. This means that some following text could come up alongside the flex container.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/inline-flex.html", '100%', 440)}}

The same is true when working with grid layout. Using `display: grid` will give you a block-level box, which creates a grid formatting context for the direct children. Using `display: inline-grid` will create an inline-level box, which creates a grid formatting context for the children.

## The multi-keyword syntax

As you can see from the above explanation, the `display` property has gained considerable new powers. In addition to indicating whether something is block-level or inline-level in relationship to other boxes on the page, it now also indicates the formatting context inside the box it is applied to. In order to better describe this behavior, the `display` property has been refactored to allow for two values — an outer and inner value — to be set on it, as well as the single values we are used to.

This means that instead of setting `display: flex` to create a block-level box with flex children, we will use `display: block flex`. Instead of `display: inline-flex` to create an inline-level box with flex children, we will use `display: inline flex`. The example below, which will work in Firefox 70 and upwards, demonstrates these values.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/multi-keyword-flex.html", '100%', 640)}}

There are mappings for all of the existing values of `display`; the most common ones are listed in the table below. To see a full list take a look at the table found in the [`display` property specification](https://drafts.csswg.org/css-display/#display-value-summary).

| Single value   | New value          |
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

In terms of how these new values help to clarify CSS layout, we can take a look at a couple of values in the table that might seem less familiar. The multi-keyword `display: block flow-root` maps to a fairly recent single value; `display: flow-root`. This value's only purpose is to create a new [Block Formatting Context](/en-US/docs/Web/Guide/CSS/Block_formatting_context) (BFC). A BFC ensures that everything inside your box stays inside it, and things from outside the box cannot intrude into it. The most obvious use-case for creating a new BFC is to contain floats, and avoid the need for clearfix hacks.

In the example below we have a floated item inside a container. The float is contained by the bordered box, which wraps it and the text alongside. If you remove the line `display: flow-root` then the float will poke out of the bottom of the box. If you are using Firefox you can replace it with the newer `display: block flow-root`, which will achieve the same as the single `flow-root` value.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/block-flow-root.html", '100%', 440)}}

The `flow-root` value makes sense if you think about block and inline layout, which is sometimes called [normal flow](/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow). Our HTML page creates a new formatting context (floats and margins cannot extend out from the boundaries) and our content lays out in normal flow, using block and inline layout, unless we change the value of `display` to use some other formatting context. Creating a grid or flex container also creates a new formatting context (a grid or flex formatting context, respectively.) These also contain everything inside them. However, if you want to contain floats and margins but continue using block and inline layout, you can create a new flow root, and start over with block and inline layout. From that point downwards everything is contained inside the new flow root.

The multi-keyword syntax for `display: flow-root` being `display: block flow-root` therefore makes a lot of sense. You are creating a block formatting context, with a block-level box and children participating in normal flow. What about the matched pair `display: inline flow-root`? This is the new way of describing `display: inline-block`.

The value `display: inline-block` has been around since the early days of CSS. The reason we tend to use it is to allow padding to push inline items away from an element, when creating navigation items for example, or when wanting to add a background with padding to an inline element as in the example below.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/inline-block.html", '100%', 440)}}

An element with `display: inline-block` however, will also contain floats. It contains everything inside the inline-level box. Therefore `display: inline-block` does exactly what `display: flow-root` does, but with an inline-level, rather than a block-level box. The new syntax accurately describes what is happening with this value. In the example above, you can change `display: inline-block` to `display: inline flow-root` in Firefox and get the same result.

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

## Can I start to use the multi-keyword syntax?

As demonstrated above, there is not a lot of advantage in using the multi-keyword version right now; if you did, your page would only work in Firefox! Other browsers do not yet implement the multi-keyword versions. Therefore `display: block flex` will only get you flex layout in Firefox and will be ignored as invalid in Chrome. You can see current support in the **Multi-keyword values** row of the [browser compatibility table for the CSS `display` property](/en-US/docs/Web/CSS/display#browser_compatibility). See also the following [Chrome issue](https://crbug.com/804600).

There is value in thinking about the values of `display` in this multi-keyword way however. If you consider the outer and inner values when you change the value of `display`, you will understand immediately what impact the value will have on the box itself, and how it displays and behaves in the layout, and the direct children.
