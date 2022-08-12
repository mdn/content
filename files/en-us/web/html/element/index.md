---
title: HTML elements reference
slug: Web/HTML/Element
tags:
  - Basic
  - Element
  - HTML
  - Reference
  - Web
  - l10n:priority
---

{{HTMLSidebar("Elements")}}

This page lists all the {{Glossary("HTML")}} {{Glossary("Element","elements")}}, which are created using {{Glossary("Tag", "tags")}}.

They are grouped by function to help you find what you have in mind easily. An alphabetical list of all elements is provided in the sidebar on every element's page as well as this one.

> **Note:** For more information about the basics of HTML elements and attributes, see [the section on elements in the Introduction to HTML article](/en-US/docs/Learn/HTML/Introduction_to_HTML#elements_%e2%80%94_the_basic_building_blocks).

## Main root

{{HTMLRefTable("HTML Root Element")}}

## Document metadata

Metadata contains information about the page. This includes information about styles, scripts and data to help software ({{Glossary("search engine", "search engines")}}, {{Glossary("Browser","browsers")}}, etc.) use and render the page. Metadata for styles and scripts may be defined in the page or link to another file that has the information.

{{HTMLRefTable("HTML Document Metadata")}}

## Sectioning root

{{HTMLRefTable("Sectioning Root Element")}}

## Content sectioning

Content sectioning elements allow you to organize the document content into logical pieces. Use the sectioning elements to create a broad outline for your page content, including header and footer navigation, and heading elements to identify sections of content.

{{HTMLRefTable("HTML Sections")}}

## Text content

Use HTML text content elements to organize blocks or sections of content placed between the opening {{HTMLElement("body")}} and closing `</body>` tags. Important for {{Glossary("accessibility")}} and {{Glossary("SEO")}}, these elements identify the purpose or structure of that content.

{{HTMLRefTable("HTML Grouping Content")}}

## Inline text semantics

Use the HTML inline text semantic to define the meaning, structure, or style of a word, line, or any arbitrary piece of text.

{{HTMLRefTable("HTML Text-Level Semantics")}}

## Image and multimedia

HTML supports various multimedia resources such as images, audio, and video.

{{HTMLRefTable("multimedia")}}

## Embedded content

In addition to regular multimedia content, HTML can include a variety of other content, even if it's not always easy to interact with.

{{HTMLRefTable({"include":["HTML embedded content"], "exclude":["multimedia"]})}}

## SVG and MathML

You can embed [SVG](/en-US/docs/Web/SVG) and [MathML](/en-US/docs/Web/MathML) content directly into HTML documents, using the {{SVGElement("svg")}} and {{MathMLElement("math")}} elements.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Element</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SVGElement("svg")}}</td>
      <td>
        The <code>svg</code> element is a container that defines a new
        coordinate system and
        <a href="/en-US/docs/Web/SVG/Attribute/viewBox">viewport</a>. It is used
        as the outermost element of SVG documents, but it can also be used to
        embed an SVG fragment inside an SVG or HTML document.
      </td>
    </tr>
    <tr>
      <td>{{MathMLElement("math")}}</td>
      <td>
        The top-level element in MathML is <code>&#x3C;math></code>. Every valid
        MathML instance must be wrapped in <code>&#x3C;math></code> tags. In
        addition you must not nest a second <code>&#x3C;math></code> element in
        another, but you can have an arbitrary number of other child elements in
        it.
      </td>
    </tr>
  </tbody>
</table>

## Scripting

In order to create dynamic content and Web applications, HTML supports the use of scripting languages, most prominently JavaScript. Certain elements support this capability.

{{HTMLRefTable("HTML Scripting")}}

## Demarcating edits

These elements let you provide indications that specific parts of the text have been altered.

{{HTMLRefTable("HTML Edits")}}

## Table content

The elements here are used to create and handle tabular data.

{{HTMLRefTable("HTML tabular data")}}

## Forms

HTML provides a number of elements which can be used together to create forms which the user can fill out and submit to the Web site or application. There's a great deal of further information about this available in the [HTML forms guide](/en-US/docs/Learn/Forms).

{{HTMLRefTable({"include": ["HTML forms"], "exclude":["Deprecated"]})}}

## Interactive elements

HTML offers a selection of elements which help to create interactive user interface objects.

{{HTMLRefTable("HTML interactive elements")}}

## Web Components

Web Components is an HTML-related technology which makes it possible to, essentially, create and use custom elements as if it were regular HTML. In addition, you can create custom versions of standard HTML elements.

{{HTMLRefTable({"include":["Web Components"],"exclude":["Deprecated", "Obsolete"]})}}

## Obsolete and deprecated elements

> **Warning:** These are old HTML elements which are deprecated and should not be used. **You should never use them in new projects, and you should replace them in old projects as soon as you can.** They are listed here for completeness only.

{{HTMLRefTable({"include":["Deprecated","Obsolete"]})}}
