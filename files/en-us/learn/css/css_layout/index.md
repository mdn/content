---
title: CSS layout
slug: Learn/CSS/CSS_layout
page-type: learn-module
---

{{LearnSidebar}}

At this point, we've looked at CSS fundamentals, how to style text, and how to style and manipulate the boxes that your content sits inside. Now it's time to look at how to correctly arrange your boxes in relation to the viewport as well as to one another. We've covered the necessary prerequisites, so let's dive deep into CSS layout, looking at such various features as: different display settings, positioning, modern layout tools like flexbox and CSS grid, and some of the legacy techniques you might still want to know about.

## Prerequisites

Before starting this module, you should already:

1. Have basic familiarity with HTML, as discussed in the [Introduction to HTML](/en-US/docs/Learn/HTML/Introduction_to_HTML) module.
2. Be comfortable with CSS fundamentals, as discussed in [Introduction to CSS](/en-US/docs/Learn/CSS/First_steps).
3. Understand how to [style boxes](/en-US/docs/Learn/CSS/Building_blocks).

> **Note:** If you are working on a computer/tablet/other device where you don't have the ability to create your own files, you could try out (most of) the code examples in an online coding program such as [JSBin](https://jsbin.com/) or [Glitch](https://glitch.com/).

## Guides

These articles will provide instruction on the fundamental layout tools and techniques available in CSS. At the end of the lessons is an assessment to help you check your understanding of layout methods by laying out a webpage.

- [Introduction to CSS layout](/en-US/docs/Learn/CSS/CSS_layout/Introduction)
  - : This article will recap some of the CSS layout features we've already touched upon in previous modules — such as different {{cssxref("display")}} values — and introduce some of the concepts we'll be covering throughout this module.
- [Normal flow](/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)
  - : Elements on webpages lay themselves out according to _normal flow_ - until we do something to change that. This article explains the basics of normal flow as a grounding for learning how to change it.
- [Flexbox](/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
  - : [Flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) is a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces. This article explains all the fundamentals. After studying this guide you can [test your flexbox skills](/en-US/docs/Learn/CSS/CSS_layout/Flexbox_skills) to check your understanding before moving on.
- [Grids](/en-US/docs/Learn/CSS/CSS_layout/Grids)
  - : CSS grid layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward. This article will give you all you need to know to get started with page layout, then [test your grid skills](/en-US/docs/Learn/CSS/CSS_layout/Grid_skills) before moving on.
- [Floats](/en-US/docs/Learn/CSS/CSS_layout/Floats)
  - : Originally for floating images inside blocks of text, the {{cssxref("float")}} property became one of the most commonly used tools for creating multiple column layouts on webpages. With the advent of flexbox and grid it has now returned to its original purpose, as this article explains.
- [Positioning](/en-US/docs/Learn/CSS/CSS_layout/Positioning)
  - : Positioning allows you to take elements out of the normal document layout flow and make them behave differently, for example, by sitting on top of one another, or by always remaining in the same place inside the browser viewport. This article explains the different {{cssxref("position")}} values and how to use them.
- [Multiple-column layout](/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
  - : The multiple-column layout specification gives you a method of laying content out in columns, as you might see in a newspaper. This article explains how to use this feature.
- [Responsive design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
  - : As more diverse screen sizes have appeared on web-enabled devices, the concept of responsive web design (RWD) has appeared: a set of practices that allows web pages to alter their layout and appearance to suit different screen widths, resolutions, etc. It is an idea that changed the way we design for a multi-device web, and in this article we'll help you understand the main techniques you need to know to master it.
- [Beginner's guide to media queries](/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
  - : The **CSS Media Query** gives you a way to apply CSS only when the browser and device environment matches a rule that you specify, for example, "viewport is wider than 480 pixels". Media queries are a key part of responsive web design because they allow you to create different layouts depending on the size of the viewport. They can also be used to detect other features of the environment your site is running on, for example, whether the user is using a touchscreen rather than a mouse. In this lesson, you will first learn about the syntax used in media queries, and then you will use them in an interactive example showing how a simple design might be made responsive.
- [Legacy layout methods](/en-US/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
  - : Grid systems are a very common feature used in CSS layouts. Prior to **CSS grid layout**, they tended to be implemented using floats or other layout features. You'd first imagine your layout as a set number of columns (e.g., 4, 6, or 12), and then you'd fit your content columns inside these imaginary columns. In this article, we'll explore how these older methods work so that you understand how they were used if you work on an older project.
- [Supporting older browsers](/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
  - : In this module, we recommend using flexbox and grid as the main layout methods for your designs. However, there are bound to be visitors to a site you develop in the future who use older browsers, or browsers which do not support the methods you have used. This will always be the case on the web — as new features are developed, different browsers will prioritize different features. This article explains how to use modern web techniques without excluding users of older technology.

## Assessments

The following assessment will test your understanding of the CSS layout methods covered in the guides above.

- [Fundamental layout comprehension](/en-US/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
  - : An assessment to test your knowledge of different layout methods by laying out a webpage.

## See also

- [Practical positioning examples](/en-US/docs/Learn/CSS/CSS_layout/Practical_positioning_examples)
  - : This article shows how to build some real-world examples to illustrate what kinds of things you can do with positioning.
- [CSS layout cookbook](/en-US/docs/Web/CSS/Layout_cookbook)
  - : The CSS layout cookbook aims to bring together recipes for common layout patterns, things you might need to implement in your sites. In addition to providing code you can use as a starting point in your projects, these recipes highlight the different ways layout specifications can be used and the choices you can make as a developer.
