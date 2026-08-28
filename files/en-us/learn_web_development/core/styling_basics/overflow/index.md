---
title: Overflowing content
short-title: Overflow
slug: Learn_web_development/Core/Styling_basics/Overflow
page-type: learn-module-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}

Overflow is what happens when there is too much content to fit inside an element box. In this lesson, you will learn how to manage overflow using CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        HTML basics (study
        <a href="/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Basic HTML syntax</a
        >), CSS <a href="/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Values and units</a> and <a href="/en-US/docs/Learn_web_development/Core/Styling_basics/Sizing">Sizing</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>Understand what overflow is.</li>
          <li>Control overflow with the <code>overflow</code> property. </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## What is overflow?

Everything in CSS is a box. You can constrain the size of these boxes by setting values for properties such as {{cssxref("width")}} and {{cssxref("height")}}. **Overflow happens when there is too much content to fit in a box.** CSS provides various tools to manage overflow. As you go further with CSS layout and writing CSS, you will encounter more overflow situations.

## CSS tries to avoid "data loss"

Let's consider two examples that demonstrate default CSS overflow behavior.

The first example features a box that has been restricted by setting a `height`. The box's content exceeds the available space; therefore, it overflows the box and falls into the paragraph below.

```html live-sample___block-overflow
<div class="box">
  This box has a height and a width. This means that if there is too much
  content to be displayed within the assigned height, there will be an overflow
  situation. If overflow is set to hidden, then any overflow will not be visible.
</div>

<p>This content is outside of the box.</p>
```

```css live-sample___block-overflow
.box {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
}
```

{{EmbedLiveSample("block-overflow", "", "200px")}}

The second example features a word in a box. The box size is set too small for the word, therefore the word breaks out of the box.

```html live-sample___inline-overflow
<div class="word">Overflow</div>
```

```css live-sample___inline-overflow
.word {
  border: 1px solid #333333;
  width: 100px;
  font-size: 250%;
}
```

{{EmbedLiveSample("inline-overflow")}}

You might wonder why CSS works in such a messy way, displaying content outside its intended container. Why not hide overflowing content? Why not scale the container size to fit all the content?

Wherever possible, CSS does not hide content. This would cause data loss. The problem with data loss is that you, or visitors to your website, may not notice. If the submit button on a form disappears and no one can complete the form, this could be a big problem! Instead, CSS overflows in visible ways. You are more likely to notice a problem. At worst, a site visitor will let you know that content is overlapping.

If you restrict a box with a `width` or a `height`, CSS trusts you to know what you are doing. CSS assumes that you are managing the potential for overflow. In general, restricting the block dimension is problematic when the box contains text. There may be more text than you expected when designing the site, or the text may be larger (for example, if the user has increased their font size).

## The overflow property

The {{cssxref("overflow")}} property allows you to specify how the browser should handle overflowing content. Its default value is `visible`, which means you can see content when it overflows.

The following two `overflow` values provide the behavior you will need to fix the majority of overflow problems:

- `overflow: clip` cuts the overflowing content off, so it is never seen.
- `overflow: auto` displays scrollbars only when needed, allowing the user to scroll boxes to read overflowing content.

The next two sections look at how to use these values. After that, we will look at other `overflow` values and explain how to control the x and y axes' overflow separately.

## Hiding overflowing content

To cut content off when it overflows, set `overflow: clip`. Anything that doesn't fit is clipped at the edge of the box, and cannot be reached. This means some content becomes invisible, so only do this when hiding it won't cause problems.

```html live-sample___clip
<div class="box">
  This box has a height and a width. This means that if there is too much
  content to be displayed within the assigned height, there will be an overflow
  situation. If overflow is set to clip, then any overflow will not be visible.
</div>

<p>This content is outside of the box.</p>
```

```css live-sample___clip
.box {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow: clip;
}
```

{{EmbedLiveSample("clip", "", "200px")}}

Try editing this example to set `overflow` to `visible`, then back to `clip`, to see the effect.

> [!NOTE]
> By default, `clip` cuts content off at the box's border edge. The {{cssxref("overflow-clip-margin")}} property moves that clip edge outwards, letting a specified amount of the overflowing content stay visible before the rest is clipped.

## Scrolling overflowing content

Instead, perhaps you want users to scroll the content to read it all. Setting `overflow: auto` makes the box scrollable, and browsers with visible scrollbars display a scrollbar only when there is actually too much content to fit.

In the example below, remove content from the `<div>` until it no longer overflows. You should see the scrollbar disappear:

```html live-sample___auto
<div class="box">
  This box has a height and a width. This means that if there is too much
  content to be displayed within the assigned height, there will be an overflow
  situation. If overflow is set to auto, then scrollbars appear only when needed.
</div>

<p>This content is outside of the box.</p>
```

```css live-sample___auto
.box {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow: auto;
}
```

{{EmbedLiveSample("auto", "", "200px")}}

> [!NOTE]
> Scrollbar visibility depends on the operating system.
> You may have to change your browser settings to always show scrollbars for them to display in the following examples.

## Controlling overflow on each axis

Specifying a single keyword for the `overflow` property value sets the overflow behavior for a container's x _and_ y axes. In the previous example, if you set `overflow` to `scroll` (which sets scrollbars to [always appear](#always_displaying_scrollbars) regardless of whether the content overflows), you'll see scrollbars on both axes. To control the axes separately, use the {{cssxref("overflow-x")}} and {{cssxref("overflow-y")}} properties. Try setting `overflow-y: auto` in the example.

The next example demonstrates enabling scrolling along the x-axis with `overflow-x`, although this is not recommended for accommodating long words! If you have a long word in a small box, consider using the {{cssxref("word-break")}} or {{cssxref("overflow-wrap")}} properties to break the word over multiple lines. In addition, some of the methods discussed in [Sizing items in CSS](/en-US/docs/Learn_web_development/Core/Styling_basics/Sizing) may help you create boxes that scale better with varying amounts of content.

```html live-sample___scroll-x
<div class="word">Overflow</div>
```

```css live-sample___scroll-x
.word {
  border: 5px solid #333333;
  width: 100px;
  font-size: 250%;
  overflow-x: auto;
}
```

{{EmbedLiveSample("scroll-x")}}

> [!NOTE]
> You can also specify x- and y-axis overflow separately by passing two keyword values to the `overflow` property: the first applies to `overflow-x` and the second applies to `overflow-y`. For example, `overflow: clip auto` would set `overflow-x` to `clip` and `overflow-y` to `auto`.

`clip` is the only value you can combine with `visible` on the other axis. If you set one axis to a scrolling value (`auto`, `scroll`, or `hidden`) and the other to `visible`, the `visible` value computes to `auto` instead, because a box cannot scroll on one axis while letting content spill out of the other. So `overflow: clip visible` clips horizontally and lets content overflow vertically, whereas `overflow: hidden visible` behaves as `overflow: hidden auto`.

## Always displaying scrollbars

Setting `overflow: scroll` makes the box scrollable like `overflow: auto` does, except that browsers with visible scrollbars display them at all times, even when the content doesn't overflow.

The main reason to use `scroll` is layout consistency: the scrollbar is always there; therefore, the content doesn't shift when the amount of content changes between overflowing and not overflowing. However, in such a case, combining `overflow: auto` with a {{cssxref("scrollbar-gutter")}} value of `stable` is usually a better fit, as it reserves the space without forcing a scrollbar to be drawn.

## The hidden value

You will often meet `overflow: hidden` in existing code. Like `clip`, it cuts the overflowing content off and doesn't display scrollbars. Unlike `clip`, it still turns the box into a scroll container, and the content can be scrolled using other means, for example using [JavaScript](/en-US/docs/Learn_web_development/Core/Scripting) or by tabbing to a focusable item further down the content such as a [link element](/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links).

You should use the `clip` value most of the time; `hidden` is only required if you need the scrollable behavior described above.

## Unwanted overflow in web design

Modern layout methods (which you'll meet later in the [CSS layout](/en-US/docs/Learn_web_development/Core/CSS_layout) module) manage overflow. They largely work without assumptions or dependencies on how much content there will be on a web page.

This was not always the norm. In the past, some sites were built with fixed-height containers to align box bottoms. These boxes may otherwise have had no relationship to each other. This was fragile. If you encounter a box where content is overlaying other content, you will now recognize that overflow may be the cause. Ideally, you should refactor the layout to avoid fixed-height containers.

When developing a site, always keep overflow in mind. Test designs with large and small amounts of content. Increase and decrease font sizes by at least two increments. Ensure your CSS is robust. Changing overflow values to hide content or add scrollbars is reserved for a few select use cases (for example, when you want your scrolling box to always display scrollbars).

## Summary

This lesson introduced the concept of overflow. By default, CSS avoids making overflowing content invisible. You can manage potential overflow, and you should test your work to make sure it doesn't accidentally cause problematic overflow.

In the next article, we'll give you some tests that you can use to check how well you've understood and retained the information we've provided on overflow.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}
