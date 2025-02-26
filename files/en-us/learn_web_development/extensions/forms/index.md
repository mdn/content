---
title: Web forms
slug: Learn_web_development/Extensions/Forms
page-type: learn-module
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

This module provides a series of articles that will help you master the essentials of web forms. Web forms are a very powerful tool for interacting with users — most commonly they are used for collecting data from users, or allowing them to control a user interface. However, for historical and technical reasons, it's not always obvious how to use them to their full potential. In the articles listed below, we'll cover all the essential aspects of Web forms including marking up their HTML structure, styling form controls, validating form data, and submitting data to the server.

## Prerequisites

Before starting this module, you should at least work through our [Introduction to HTML](/en-US/docs/Learn_web_development/Core/Structuring_content). At this point you should find the [Introductory tutorials](#introductory_tutorials) easy to understand, and also be able to make use of our [Basic native form controls](/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) tutorial.

Mastering forms however requires more than just HTML knowledge — you also need to learn some specific techniques to style form controls, and some scripting knowledge is required to handle things like validation and creating custom form controls. Therefore, before you look at the other sections listed below we'd recommend that you go away and learn some [CSS](/en-US/docs/Learn_web_development/Core/Styling_basics) and [JavaScript](/en-US/docs/Learn_web_development/Core/Scripting) first.

The above text is a good indicator as to why we've put web forms into its own standalone module, rather than trying to mix bits of it into the HTML, CSS, and JavaScript topic areas — form elements are more complex than most other HTML elements, and they also require a close marriage of related CSS and JavaScript techniques to get the most out of them.

> [!NOTE]
> If you are working on a computer/tablet/other device where you don't have the ability to create your own files, you could try out (most of) the code examples in an online coding program such as [JS Bin](https://jsbin.com/) or [Glitch](https://glitch.com/).

## Introductory tutorials

- [Your first form](/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form)
  - : The first article in our series provides your very first experience of creating a web form, including designing a simple form, implementing it using the right HTML elements, adding some very simple styling via CSS, and how data is sent to a server.
- [How to structure a web form](/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
  - : With the basics out of the way, we now look in more detail at the elements used to provide structure and meaning to the different parts of a form.

## The different form controls

- [Basic native form controls](/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
  - : We start off this section by looking at the functionality of the original HTML {{htmlelement("input")}} types in detail, looking at what options are available to collect different types of data.
- [The HTML5 input types](/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
  - : Here we continue our deep dive into the `<input>` element, looking at the additional input types provided when HTML5 was released, and the various UI controls and data collection enhancements they provide. Additionally, we look at the {{htmlelement('output')}} element.
- [Other form controls](/en-US/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
  - : Next we take a look at all the non-`<input>` form controls and associated tools, such as {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}}, and {{htmlelement('progress')}}.

## Form styling tutorials

- [Styling web forms](/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
  - : This article provides an introduction to styling forms with CSS, including all the basics you might need to know for basic styling tasks.
- [Advanced form styling](/en-US/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Here we look at some more advanced form styling techniques that need to be used when trying to deal with some of the more difficult-to-style form elements.
- [UI pseudo-classes](/en-US/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : An introduction to the UI pseudo-classes enabling HTML form controls to be targeted based on their current state.

## Validating and submitting form data

- [Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
  - : Sending data is not enough — we also need to make sure that the data users enter into forms is in the correct format to process it successfully, and that it won't break our applications. We also want to help our users to fill out our forms correctly and not get frustrated when trying to use our apps. Form validation helps us achieve these goals — this article tells you what you need to know.
- [Sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
  - : This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns associated with sending form data.

## Advanced articles

The following articles aren't included in the learning pathway, but they'll prove interesting and useful when you've mastered the above techniques and want to know more.

- [How to build custom form controls](/en-US/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
  - : You'll come across some cases where the native form widgets just don't provide what you need, e.g. because of styling or functionality. In such cases, you may need to build your own form widget out of raw HTML. This article explains how you'd do this and the considerations you need to be aware of when doing so, with a practical case study.
- [Sending forms through JavaScript](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
  - : This article looks at ways to use a form to assemble an HTTP request and send it via custom JavaScript, rather than standard form submission. It also looks at why you'd want to do this, and the implications of doing so. (See also [Using FormData objects](/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)

## See also

- [HTML forms element reference](/en-US/docs/Web/HTML/Element#forms)
- [HTML \<input> types reference](/en-US/docs/Web/HTML/Element/input)
- [HTML attribute reference](/en-US/docs/Web/HTML/Attributes)
- [User input methods and controls](/en-US/docs/Learn_web_development/Extensions/Forms/User_input_methods)

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}
