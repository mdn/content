---
title: Overflowing content
slug: Learn/CSS/Building_blocks/Overflowing_content
tags:
  - Beginner
  - Block Formatting Context
  - CSS
  - Data Loss
  - Learn
  - overflow
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}

Overflow is what happens when there is too much content to fit in a container. In this guide you will learn what overflow is and how to manage it.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy,
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >basic software installed</a
        >, basic knowledge of
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >working with files</a
        >, HTML basics (study
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), and an idea of how CSS works (study
        <a href="/en-US/docs/Learn/CSS/First_steps">CSS first steps</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To understand overflow and how to manage it.</td>
    </tr>
  </tbody>
</table>

## What is overflow?

Everything in CSS is a box. You can constrain the size of these boxes by assigning values of {{cssxref("width")}} and {{cssxref("height")}} (or {{cssxref("inline-size")}} and {{cssxref("block-size")}}). **Overflow happens when there is too much content to fit in a box.** CSS provides various tools to manage overflow. As you go further with CSS layout and writing CSS, you will encounter more overflow situations.

## CSS tries to avoid "data loss"

Let's consider two examples that demonstrate the default behavior of CSS when there is overflow.

The first example is a box that has been restricted by setting a `height`. Then we add content that exceeds the allocated space. The content overflows the box and falls into the paragraph below.

{{EmbedGHLiveSample("css-examples/learn/overflow/block-overflow.html", '100%', 700)}}

The second example is a word in a box. The box has been made too small for the word and so it breaks out of the box.

{{EmbedGHLiveSample("css-examples/learn/overflow/inline-overflow.html", '100%', 600)}}

You might wonder why CSS works in such a messy way, displaying content outside of its intended container. Why not hide overflowing content? Why not scale the size of the container to fit all the content?

Wherever possible, CSS does not hide content. This would cause data loss. The problem with data loss is that you might not notice. Website visitors may not notice. If the submit button on a form disappears and no one can complete the form, this could be a big problem! Instead, CSS overflows in visible ways. You are more likely to see there is a problem. At worst, a site visitor will let you know that content is overlapping.

If you restrict a box with a `width` or a `height`, CSS trusts you to know what you are doing. CSS assumes that you are managing the potential for overflow. In general, restricting the block dimension is problematic when the box contains text. There may be more text than you expected when designing the site, or the text may be larger (for example, if the user has increased their font size).

The next two lessons explain different approaches to control sizing in ways that are less prone to overflow. However, if you need a fixed size, you can also control how the overflow behaves. Let's read on!

## The overflow property

The {{cssxref("overflow")}} property is how you take control of an element's overflow. It is the way you instruct the browser how it should behave. The default value of overflow is `visible`. With this default, we can see content when it overflows.

To crop content when it overflows, you can set `overflow: hidden`. This does exactly what it says: it hides overflow. Beware that this can make some content invisible. You should only do this if hiding content won't cause problems.

{{EmbedGHLiveSample("css-examples/learn/overflow/hidden.html", '100%', 700)}}

Instead, perhaps you would like to add scrollbars when content overflows? Using `overflow: scroll`, browsers with visible scrollbars will always display them—even if there is not enough content to overflow. This offers the advantage of keeping the layout consistent, instead of scrollbars appearing or disappearing, depending upon the amount of content in the container.

**Remove some content from the box below. Notice how the scrollbars remain, even if there is no need for scrolling.**

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll.html", '100%', 700)}}

In the example above, we only need to scroll on the `y` axis, however we get scrollbars in both axes. To just scroll on the `y` axis, you could use the {{cssxref("overflow-y")}} property, setting `overflow-y: scroll`.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-y.html", '100%', 700)}}

You can also scroll on the x axis using {{cssxref("overflow-x")}}, although this is not a recommended way to accommodate long words! If you have a long word in a small box, you might consider using the {{cssxref("word-break")}} or {{cssxref("overflow-wrap")}} properties. In addition, some of the methods discussed in [Sizing items in CSS](/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) may help you create boxes that scale better with varying amounts of content.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-x.html", '100%', 600)}}

As with `scroll`, you get a scrollbar in the scrolling dimension whether or not there is enough content to cause a scrollbar.

> **Note:** You can specify x and y scrolling using the `overflow` property, passing two values. If two keywords are specified, the first applies to `overflow-x` and the second applies to `overflow-y`. Otherwise, both `overflow-x` and `overflow-y` are set to the same value. For example, `overflow: scroll hidden` would set `overflow-x` to `scroll` and `overflow-y` to `hidden`.

If you only want scrollbars to appear when there is more content than can fit in the box, use `overflow: auto`. This allows the browser to determine if it should display scrollbars.

**In the example below, remove content until it fits into the box. You should see the scrollbars disappear.**

{{EmbedGHLiveSample("css-examples/learn/overflow/auto.html", '100%', 700)}}

## Overflow establishes a Block Formatting Context

When you use a value of overflow such as `scroll` or `auto`, you create a **Block Formatting Context** (BFC). The content of the box that you have changed the value of `overflow` for acquires a self-contained layout. Content outside the container cannot poke into the container, and nothing can poke out of that container into the surrounding layout. This enables scrolling behavior, as all box content needs to be contained and not overlap, in order to create a consistent scrolling experience.

## Unwanted overflow in web design

Modern layout methods (described in [CSS layout](/en-US/docs/Learn/CSS/CSS_layout)) manage overflow. They largely work without assumptions or dependencies for how much content there will be on a web page.

This has not always been the norm. In the past, some sites were built with fixed-height containers to align bottoms of boxes. These boxes may otherwise have no relationship to each other. This was fragile. In a legacy application, you may encounter a box where content is overlaying other content on the page. Now you can recognize that this happens with overflow. Ideally, you will refactor the layout to not rely on fixed-height containers.

When developing a site, always keep overflow in mind. Test designs with large and small amounts of content. Increase the font sizes of text. Generally ensure that your CSS works in a robust way. Changing the value of overflow to hide content, or to add scrollbars, is likely to be reserved for a few select use cases (for example, where you intend to have a scrolling box).

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Overflow](/en-US/docs/Learn/CSS/Building_blocks/Overflow_Tasks).

## Summary

This lesson introduced the concept of overflow. You should understand that default CSS avoids making overflowing content invisible. You have discovered that you can manage potential overflow, and also, that you should test work to make sure it does not accidentally cause problematic overflow.

In the next article, we'll take a look at the most common [values and units](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) in CSS.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}

## In this module

- [Cascade and inheritance](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [CSS selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors)

  - [Type, class, and ID selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
  - [Attribute selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
  - [Pseudo-classes and pseudo-elements](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
  - [Combinators](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

- [The box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [Backgrounds and borders](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Handling different text directions](/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
- [Overflowing content](/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content)
- [Values and units](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Sizing items in CSS](/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
- [Images, media, and form elements](/en-US/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
- [Styling tables](/en-US/docs/Learn/CSS/Building_blocks/Styling_tables)
- [Debugging CSS](/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)
- [Organizing your CSS](/en-US/docs/Learn/CSS/Building_blocks/Organizing)
- [Fundamental CSS comprehension](/en-US/docs/Learn/CSS/Building_blocks/Fundamental_CSS_comprehension)
- [Creating fancy letterheaded paper](/en-US/docs/Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper)
- [A cool-looking box](/en-US/docs/Learn/CSS/Building_blocks/A_cool_looking_box)
