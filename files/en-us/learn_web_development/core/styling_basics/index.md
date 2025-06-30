---
title: CSS styling basics
slug: Learn_web_development/Core/Styling_basics
page-type: learn-module
sidebar: learnsidebar
---

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features. This module provides all the CSS fundamentals you'll need for now, including syntax, features, and techniques.

## Prerequisites

Before starting this module, you should have a basic work environment set up (as detailed in [Installing basic software](/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software)), and understand how to create and manage files (as detailed in [Dealing with files](/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)). You should also be familiar with HTML (work through our [Structuring content with HTML](/en-US/docs/Learn_web_development/Core/Structuring_content) module if not).

> [!NOTE]
> If you are working on a computer/tablet/other device where you don't have the ability to create your own files, you could try out (most of) the code examples in an online coding program such as [JSBin](https://jsbin.com/) or [Glitch](https://glitch.com/).

## Tutorials and challenges

- [What is CSS?](/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS, what the basic syntax looks like, and how your browser applies CSS to HTML to style it.
- [Getting started with CSS](/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In this article, we will take a simple HTML document and apply CSS to it, learning some practical details of the language along the way. We will also review the CSS syntax features you've not looked at yet.
- [Styling a biography page](/en-US/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Challenge</sup>
  - : In this challenge you will style a simple bio page, testing you on some of the skills you learned in the last couple of lessons including writing selectors and text styling.
- [Basic CSS selectors](/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In this article we'll recap some selector fundamentals, including the basic type, class, and ID selectors.
- [Attribute selectors](/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : As you know from your study of HTML, elements can have attributes that give further detail about the element being marked up. In CSS you can use attribute selectors to target elements with certain attributes. This lesson will show you how to use these very useful selectors.
- [Pseudo-classes and pseudo-elements](/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : The next set of selectors we will look at are referred to as **pseudo-classes** and **pseudo-elements**. There are a large number of these, and they often serve quite specific purposes. Once you know how to use them, you can look through the different types to see if there is something which works for the task you are trying to achieve.
- [Combinators](/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : The final selectors we will look at are called combinators. Combinators are used to combine other selectors in a way that allows us to select elements based on their location in the DOM relative to other elements (for example, child or sibling).
- [The box model](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Everything in CSS has a box around it, and understanding these boxes is key to being able to create more complex layouts with CSS, or to align items with other items. In this lesson, we will take a look at the CSS _Box model_. You'll get an understanding of how it works and the terminology that relates to it.
- [Handling conflicts](/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : The aim of this lesson is to develop your understanding of some of the most fundamental concepts of CSS — the cascade, specificity, and inheritance — which control how CSS is applied to HTML and how conflicts between style declarations are resolved.
- [Values and units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS rules contain [declarations](/en-US/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), which in turn are composed of properties and values. Each property used in CSS has a **value type** that describes what kind of values it is allowed to have. In this lesson, we will take a look at some of the most frequently used value types, what they are, and how they work.
- [Sizing items in CSS](/en-US/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Understanding how big the different features in your design will be is important. In this lesson we will summarize the various ways elements get a size via CSS and define a few terms about sizing that will help you in the future.
- [Backgrounds and borders](/en-US/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In this lesson, we will take a look at some of the creative things you can do with CSS backgrounds and borders. From adding gradients, background images, and rounded corners, backgrounds and borders are the answer to a lot of styling questions in CSS.
- [Overflowing content](/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Overflow is what happens when there is too much content to fit inside an element box. In this lesson, you will learn how to manage overflow using CSS.
- [Images, media, and form elements](/en-US/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In this lesson we will take a look at how certain special elements are treated in CSS. Images, other media, and form elements behave a little differently from regular boxes in terms of your ability to style them with CSS. Understanding what is and isn't possible can save some frustration, and this lesson will highlight some of the main things that you need to know.
- [Styling tables](/en-US/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Styling an HTML table isn't the most glamorous job in the world, but sometimes we all have to do it. This article explains how to make HTML tables look good, with some specific table styling techniques highlighted.
- [Debugging CSS](/en-US/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : This article will give you guidance on how to go about debugging a CSS problem, and show you how the DevTools included in all modern browsers can help you to find out what is going on.
- [Challenge: Fundamental CSS comprehension](/en-US/docs/Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension) <sup>Challenge</sup>
  - : This challenge provides a number of related exercises that must be completed in order to create the final design — a business card/gamer card/social media profile.
- [Challenge: Creating fancy letterheaded paper](/en-US/docs/Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper) <sup>Challenge</sup>
  - : If you want to make the right impression, writing a letter on nice letterheaded paper can be a really good start. In this challenge you will create an online template to achieve such a look.
- [Challenge: A cool-looking box](/en-US/docs/Learn_web_development/Core/Styling_basics/Cool-looking_box) <sup>Challenge</sup>
  - : In this challenge, you'll get some more practice in creating cool-looking boxes by trying to create an eye-catching box.

## Additional tutorials

These tutorials are not part of the learning pathway, but they are interesting nonetheless — you should consider these as stretch goals, to optionally study when you are done with the main Core articles.

- [Advanced styling effects](/en-US/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : This article acts as a box of tricks, providing an introduction to some interesting advanced styling features such as box shadows, blend modes, and filters.
- [Cascade layers](/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : This lesson aims to introduce you to [cascade layers](/en-US/docs/Web/CSS/@layer), a more advanced feature that builds on the fundamental concepts of the [CSS cascade](/en-US/docs/Web/CSS/CSS_cascade/Cascade) and [CSS specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity).
- [Handling different text directions](/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In recent years, CSS has evolved in order to better support different directionality of content, including right-to-left but also top-to-bottom content (such as Japanese) — these different directionalities are called writing modes. As you progress in your study and begin to work with layout, an understanding of writing modes will be very helpful to you, therefore we will introduce them in this article.
- [Organizing CSS](/en-US/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : As you start to work on larger stylesheets and big projects you will discover that maintaining a huge CSS file can be challenging. In this article we will take a brief look at some best practices for writing your CSS to make it easily maintainable, and some of the solutions you will find in use by others to help improve maintainability.

## See also

- [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN learning partner_](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimba's](https://scrimba.com/?via=mdn) _Learn HTML and CSS_ course teaches you HTML and CSS through building and deploying five awesome projects, with fun interactive lessons and challenges taught by knowledgeable teachers.
- [Write your first lines of CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>[_MDN learning partner_](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : This interactive lesson provides a useful introduction to CSS syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
