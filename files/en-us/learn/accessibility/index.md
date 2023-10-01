---
title: Accessibility
slug: Learn/Accessibility
page-type: learn-module
---

{{LearnSidebar}}

Learning some HTML, CSS, and JavaScript is useful if you want to become a web developer. Beyond mechanical use, it's important to learn how to use these technologies **responsibly** so that all readers might use your creations on the web. To help you achieve this, this module will cover general best practices (which are demonstrated throughout the [HTML](/en-US/docs/Learn/HTML), [CSS](/en-US/docs/Learn/CSS), and [JavaScript](/en-US/docs/Learn/JavaScript) topics), [cross browser testing](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing), and some tips on enforcing accessibility from the start. We'll cover accessibility in special detail.

## Overview

When someone describes a site as "accessible", they mean that any user can use all its features and content, regardless of how the user accesses the web — even and especially users with physical or mental impairments.

- Sites should be accessible to keyboard, mouse, and touch screen users, and any other way users access the web, including screen readers and voice assistants like Alexa and Google Home.
- Applications should be understandable and usable by people regardless of auditory, visual, physical, or cognitive abilities.
- Sites should also not cause harm: web features like motion can cause migraines or epileptic seizures.

**By default, HTML is accessible, if used correctly.** Web accessibility involves ensuring that content remains accessible, regardless of who and how the web is accessed.

The Firefox Accessibility Inspector is a very useful tool for checking out accessibility issues on web pages. The following video provides a nice introduction to it:

{{EmbedYouTube("7mqqgIxX_NU")}}

> **Callout:**
>
> #### Looking to become a front-end web developer?
>
> We have put together a course that includes all the essential information you need to
> work towards your goal.
>
> [**Get started**](/en-US/docs/Learn/Front-end_web_developer)

## Prerequisites

To get the most out of this module, it would be a good idea to either work through at least the first two modules of the [HTML](/en-US/docs/Learn/HTML), [CSS](/en-US/docs/Learn/CSS), and [JavaScript](/en-US/docs/Learn/JavaScript) topics, or perhaps even better, work through the relevant parts of the accessibility module as you work through the related technology topics.

> **Note:** If you are working on a computer/tablet/other devices where you don't have the ability to create your own files, you can try out most of the code examples in an online coding program such as [JSBin](https://jsbin.com/) or [Glitch](https://glitch.com/).

## Guides

- [What is accessibility?](/en-US/docs/Learn/Accessibility/What_is_accessibility)
  - : This article starts off the module with a good look at what accessibility is — this includes what groups of people we need to consider and why, what tools different people use to interact with the web, and how we can make accessibility part of our web development workflow.
- [HTML: A good basis for accessibility](/en-US/docs/Learn/Accessibility/HTML)
  - : A great deal of web content can be made accessible just by making sure the correct HTML elements are always used for the correct purpose. This article looks in detail at how HTML can be used to ensure maximum accessibility.
- [CSS and JavaScript accessibility best practices](/en-US/docs/Learn/Accessibility/CSS_and_JavaScript)
  - : CSS and JavaScript, when used properly, also have the potential to allow for accessible web experiences, but if misused they can significantly harm accessibility. This article outlines some CSS and JavaScript best practices that should be considered to ensure that even complex content is as accessible as possible.
- [WAI-ARIA basics](/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
  - : Following on from the previous article, sometimes making complex UI controls that involve unsemantic HTML and dynamic JavaScript-updated content can be difficult. WAI-ARIA is a technology that can help with such problems by adding in further semantics that browsers and assistive technologies can recognize and use to let users know what is going on. Here we'll show how to use it at a basic level to improve accessibility.
- [Accessible multimedia](/en-US/docs/Learn/Accessibility/Multimedia)
  - : Another category of content that can create accessibility problems is multimedia — video, audio, and image content need to be given proper textual alternatives, so they can be understood by assistive technologies and their users. This article shows how.
- [Mobile accessibility](/en-US/docs/Learn/Accessibility/Mobile)
  - : With web access on mobile devices being so popular, and popular platforms such as iOS and Android having fully-fledged accessibility tools, it is important to consider the accessibility of your web content on these platforms. This article looks at mobile-specific accessibility considerations.

## Assessments

- [Accessibility troubleshooting](/en-US/docs/Learn/Accessibility/Accessibility_troubleshooting)
  - : In the assessment for this module, we present to you a simple site with several accessibility issues that you need to diagnose and fix.

## See also

- [Start Building Accessible Web Applications Today](https://egghead.io/courses/start-building-accessible-web-applications-today) — an excellent series of video tutorials by Marcy Sutton.
- [Deque University resources](https://dequeuniversity.com/resources/) — includes code examples, screen reader references, and other useful resources.
- [WebAIM resources](https://webaim.org/resources/) — includes guides, checklists, tools, and more.
- [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/) — includes a list of web accessibility evaluation tools.
