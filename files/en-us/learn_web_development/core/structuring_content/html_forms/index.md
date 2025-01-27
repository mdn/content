---
title: Forms and buttons in HTML
slug: Learn_web_development/Core/Structuring_content/HTML_forms
page-type: tutorial-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

> [!NOTE]
> The content in this article is currently incomplete, sorry about that! We are working hard to improve the MDN Learn Web Development section, and we will have places marked as incomplete ("TODO") finished soon.

HTML forms and buttons are powerful tools for interacting with users — most commonly they are used for collecting data from users or allowing them to control a user interface. In this article we provide an introduction to the basics of forms and buttons.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic HTML familiarity, as covered in
        <a href="/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Basic HTML Syntax</a
        >. Text-level semantics such as <a href="/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >headings and paragraphs</a
        > and <a href="/en-US/docs/Learn_web_development/Core/Structuring_content/Lists"
          >lists</a
        >. <a href="/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >Structural HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>An appreciation that forms and buttons are the main tools for users to interact with a website, along with links.</li>
          <li>The common types of <code>&lt;button&gt;</code>: <code>button</code>, <code>submit</code>, and <code>reset</code>.</li>
          <li>Common <code>&lt;input&gt;</code> types: <code>text</code>, <code>number</code>, <code>file</code>, <code>checkbox</code>, <code>radio</code>, <code>password</code>, and <code>search</code>.</li>
          <li>Common attributes such as <code>name</code> and <code>value</code>.</li>
          <li>Making forms accessible — Correct semantics, the <code>&lt;label&gt;</code> element, and the <code>for</code> attribute.</li>
          <li>Other control types: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>, and <code>&lt;option&gt;</code>.</li>
          <li>Client-side validation basics — <code>required</code>, <code>min</code>, <code>max</code>, <code>minlength</code>, <code>maxlength</code>, and <code>pattern</code>.</li>
          <li>The <code>&lt;form&gt;</code> element, and the basics of form submission.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> There are a lot of input types and form features not explicitly mentioned here; the purpose is to get a good general introduction to buttons and form elements, and learn the most common cases. The advanced/specialized cases can be studied on a need-to-know basis, as part of a web developer's constant learning throughout their career.

## Buttons

TODO

## Common input types

TODO

## Accessible forms

- Going back to the argument for semantic HTML (see also 2.2 Good document structure), you should understand why it is important to use the right element for the right job. For example, use a `<button>` to submit your form, and not a `<div>` programmed to behave like a `<button>`.
- Understand the features programmed into `<button>`s and form elements by the browser by default, and how important they are. Examples include keyboard accessibility, focus outlines, and semantic meaning for AT to identify the elements and communicate their meaning.

## Other control types

TODO

## Client-side form validation

Client-side form validation is really a usability enhancement, to be used alongside server-side form validation. It is not a substitute for it.

## The `<form>` element

TODO

## Test your skills!

TODO

## Summary

That's all for now. We have covered images and captions in detail. In the next article, we'll move it up a gear, looking at how to use HTML to embed video and audio content into web pages.

## See also

- [Web forms — Working with user data](/en-US/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
