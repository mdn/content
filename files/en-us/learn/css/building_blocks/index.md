---
title: CSS building blocks
slug: Learn/CSS/Building_blocks
tags:
  - Beginner
  - CSS
  - Learn
  - building blocks
---
{{LearnSidebar}}

This module carries on where [CSS first steps](/en-US/docs/Learn/CSS/First_steps) left off — now that you've gained familiarity with the language and its syntax, and got some basic experience using it, it's time to dive a bit deeper. This module looks at the cascade and inheritance, all the selector types we have available, units, sizing, styling backgrounds and borders, debugging, and lots more.

The aim here is to provide you with a toolkit for writing competent CSS and help you understand all the essential theory, before moving on to more specific disciplines like [text styling](/en-US/docs/Learn/CSS/Styling_text) and [CSS layout](/en-US/docs/Learn/CSS/CSS_layout).

> **Callout:**
>
> #### Looking to become a front-end web developer?
>
> We have put together a course that includes all the essential information you need to
> work towards your goal.
>
> [**Get started**](/en-US/docs/Learn/Front-end_web_developer)

## Prerequisites

Before starting this module, you should have:

1. Basic familiarity with using computers, and using the Web passively (i.e. just looking at it, consuming the content.)
2. A basic work environment set up as detailed in [Installing basic software](/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software), and an understanding of how to create and manage files, as detailed in [Dealing with files](/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files).
3. Basic familiarity with HTML, as discussed in the [Introduction to HTML](/en-US/docs/Learn/HTML/Introduction_to_HTML) module.
4. An understanding of the basics of CSS, as discussed in the [CSS first steps](/en-US/docs/Learn/CSS/First_steps) module.

> **Note:** If you are working on a computer/tablet/other device where you don't have the ability to create your own files, you could try out (most of) the code examples in an online coding program such as [JSBin](https://jsbin.com/) or [Glitch](https://glitch.com/).

## Guides

This module contains the following articles, which cover the most essential parts of the CSS language. Along the way you'll come across plenty of exercises to allow you to test your understanding.

- [Cascade and inheritance](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
  - : The aim of this lesson is to develop your understanding of some of the most fundamental concepts of CSS — the cascade, specificity, and inheritance — which control how CSS is applied to HTML and how conflicts are resolved.
- [CSS selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors)

  - : There are a wide variety of CSS selectors available, allowing for fine-grained precision when selecting elements to style. In this article and its sub-articles, we'll run through the different types in great detail, seeing how they work. The sub-articles are as follows:

    - [Type, class, and ID selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Attribute selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudo-classes and pseudo-elements](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Combinators](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

- [The box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Everything in CSS has a box around it, and understanding these boxes is key to being able to create layouts with CSS, or to align items with other items. In this lesson, we will take a proper look at the CSS _Box Model_, in order that you can move onto more complex layout tasks with an understanding of how it works and the terminology that relates to it.
- [Backgrounds and borders](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : In this lesson we will take a look at some of the creative things you can do with CSS backgrounds and borders. From adding gradients, background images, and rounded corners, backgrounds and borders are the answer to a lot of styling questions in CSS.
- [Handling different text directions](/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
  - : In recent years, CSS has evolved in order to better support different directionality of content, including right-to-left but also top-to-bottom content (such as Japanese) — these different directionalities are called **writing modes**. As you progress in your study and begin to work with layout, an understanding of writing modes will be very helpful to you, therefore we will introduce them in this article.
- [Overflowing content](/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : In this lesson we will look at another important concept in CSS — **overflow**. Overflow is what happens when there is too much content to be contained comfortably inside a box. In this guide, you will learn what it is and how to manage it.
- [CSS values and units](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
  - : Every property used in CSS has a value or set of values that are allowed for that property. In this lesson, we will take a look at some of the most common values and units in use.
- [Sizing items in CSS](/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
  - : In the various lessons so far you have come across a number of ways to size items on a web page using CSS. Understanding how big the different features in your design will be is important, and in this lesson, we will summarize the various ways elements get a size via CSS and define a few terms around sizing that will help you in the future.
- [Images, media, and form elements](/en-US/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
  - : In this lesson we will take a look at how certain special elements are treated in CSS. Images, other media, and form elements behave a little differently in terms of your ability to style them with CSS than regular boxes. Understanding what is and isn't possible can save some frustration, and this lesson will highlight some of the main things that you need to know.
- [Styling tables](/en-US/docs/Learn/CSS/Building_blocks/Styling_tables)
  - : Styling an HTML table isn't the most glamorous job in the world, but sometimes we all have to do it. This article provides a guide to making HTML tables look good, with some specific table styling techniques highlighted.
- [Debugging CSS](/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)
  - : Sometimes when writing CSS you will encounter an issue where your CSS doesn't seem to be doing what you expect. This article will give you guidance on how to go about debugging a CSS problem, and show you how the DevTools included in all modern browsers can help you find out what is going on.
- [Organizing your CSS](/en-US/docs/Learn/CSS/Building_blocks/Organizing)
  - : As you start to work on larger stylesheets and big projects you will discover that maintaining a huge CSS file can be challenging. In this article, we will take a brief look at some best practices for writing your CSS to make it easily maintainable, and some of the solutions you will find in use by others to help improve maintainability.

## Assessments

The following assessments will test your understanding of the CSS covered in the guides above.

- [Fundamental CSS comprehension](/en-US/docs/Learn/CSS/Building_blocks/Fundamental_CSS_comprehension)
  - : This assessment tests your understanding of basic syntax, selectors, specificity, box model, and more.
- [Creating fancy letterheaded paper](/en-US/docs/Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper)
  - : If you want to make the right impression, writing a letter on nice letterheaded paper can be a really good start. In this assessment, we'll challenge you to create an online template to achieve such a look.
- [A cool looking box](/en-US/docs/Learn/CSS/Building_blocks/A_cool_looking_box)
  - : Here you'll get some practice in using background and border styling to create an eye-catching box.

## See also

- [Advanced styling effects](/en-US/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)
  - : This article acts as a box of tricks, providing an introduction to some interesting advanced styling features such as box shadows, blend modes, and filters.
