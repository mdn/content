---
title: "HTML: HyperText Markup Language"
short-title: HTML
slug: Web/HTML
page-type: landing-page
sidebar: htmlsidebar
---

**HTML** (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation ([CSS](/en-US/docs/Web/CSS)) or functionality/behavior ([JavaScript](/en-US/docs/Web/JavaScript)).

"Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.

HTML uses "markup" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" such as {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} and many others.

An HTML element is set off from other text in a document by "tags", which consist of the element name surrounded by `<` and `>`. The name of an element inside a tag is case-insensitive. That is, it can be written in uppercase, lowercase, or a mixture. For example, the `<title>` tag can be written as `<Title>`, `<TITLE>`, or in any other way. However, the convention and recommended practice is to write tags in lowercase.

The articles below can help you learn more about HTML.

## Beginner's tutorials

Our [learn web development core modules](/en-US/docs/Learn_web_development/Core) contain modern, up-to-date tutorials covering HTML fundamentals.

- [Your first website: Creating the content](/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : This article provides a brief tour of what HTML is and how to use it, aimed at people who are completely new to web development.
- [Structuring content with HTML](/en-US/docs/Learn_web_development/Core/Structuring_content)
  - : This module covers the basics of the HTML language, before looking at key areas such as document structure, links, lists, images, forms, and more.
- [HTML forms](/en-US/docs/Learn_web_development/Extensions/Forms)
  - : Forms are a very important part of the Web — these provide much of the functionality you need for interacting with websites, e.g., registering and logging in, sending feedback, buying products, and more. This module gets you started with creating the client-side/front-end parts of forms.

## Guides

The [HTML guides](/en-US/docs/Web/HTML/Guides) help you build with HTML on the web. They cover topics such as forms, CORS, content preloading, and responsive images.

- [HTML cheatsheet for syntax and common tasks](/en-US/docs/Web/HTML/Guides/Cheatsheet)
  - : Quick reference for common HTML syntax and tasks.
- [Using HTML comments `<!-- … -->`](/en-US/docs/Web/HTML/Guides/Comments)
  - : HTML comments are used to add explanatory notes to the markup or to prevent the browser from interpreting specific parts of the document.
- [Using HTML form validation and the Constraint Validation API](/en-US/docs/Web/HTML/Guides/Constraint_validation)
  - : HTML5 introduced constraint validation to ease form validation on the client side. Basic constraints can be checked without JavaScript by setting attributes on form elements.
- [Content categories](/en-US/docs/Web/HTML/Guides/Content_categories)
  - : HTML is comprised of several kinds of content, each of which is allowed to be used in certain contexts and is disallowed in others. Similarly, each context has a set of other content categories it can contain and elements that can or can't be used in them. This is a guide to these categories.
- [Using date and time formats in HTML](/en-US/docs/Web/HTML/Guides/Date_and_time_formats)
  - : Certain HTML elements use date and/or time values. This guide describes the formats of the strings that specify these values.
- [Using microdata in HTML](/en-US/docs/Web/HTML/Guides/Microdata)
  - : Microdata is used to nest metadata within existing content on web pages. Search engines and web crawlers can extract and process microdata to provide a richer browsing experience.
- [Using microformats in HTML](/en-US/docs/Web/HTML/Guides/Microformats)
  - : Microformats are standards used to embed semantics and structured data in HTML for use by social web applications, search engines, aggregators, and other tools.
- [Understanding quirks and standards modes](/en-US/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
  - : Historical information on quirks mode and standards mode.
- [Using responsive images in HTML](/en-US/docs/Web/HTML/Guides/Responsive_images)
  - : Learn about responsive images that work well on devices with widely differing screen sizes, resolutions, and other features, improving performance across different devices.
- [Media types and formats on the web](/en-US/docs/Web/Media/Guides/Formats)
  - : The {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements allow you to play audio and video media natively within your content without the need for external software support.

## How to

- [Define terms with HTML](/en-US/docs/Web/HTML/How_to/Define_terms_with_HTML)
  - : HTML provides several ways to convey description semantics, whether inline or as structured glossaries. This article shows how to properly mark up keywords when defining them.
- [Use data attributes](/en-US/docs/Web/HTML/How_to/Use_data_attributes)
  - : HTML5 is designed with extensibility in mind for data that should be associated with a particular element but need not have any defined meaning. `data-*` attributes allow us to store extra information on standard, semantic HTML elements.
- [Use cross-origin images in a canvas](/en-US/docs/Web/HTML/How_to/CORS_enabled_image)
  - : Some HTML elements that provide support for [CORS](/en-US/docs/Web/HTTP/Guides/CORS), such as {{HTMLElement("img")}} or {{HTMLElement("video")}}, have a `crossorigin` attribute (`crossOrigin` property), which lets you configure the CORS requests for the element's fetched data.
- [Add a hitmap on top of an image](/en-US/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)
  - : Image maps allow hyperlinks to be associated with different parts of an image. This article shows how to create and implement them.
- [Author fast-loading HTML pages](/en-US/docs/Web/HTML/How_to/Author_fast-loading_HTML_pages)
  - : These tips are based on common knowledge and experimentation. An optimized web page not only provides for a more responsive site for your visitors but also reduces the load on your web servers and internet connection.
- [Add JavaScript to your web page](/en-US/docs/Web/HTML/How_to/Add_JavaScript_to_your_web_page)
  - : This article explains how to add JavaScript code to an HTML file.

## Reference

HTML consists of **elements**, each of which may be modified by some number of **attributes**. HTML documents are connected to each other with **links**. Browse the complete [HTML reference](/en-US/docs/Web/HTML/Reference) documentation.

- [HTML elements](/en-US/docs/Web/HTML/Reference/Elements)
  - : Reference for all HTML {{glossary("Element", "elements")}}.
- [HTML attributes](/en-US/docs/Web/HTML/Reference/Attributes)
  - : Reference for all HTML attributes. Attributes are additional values that configure elements or adjust their behavior in various ways.
- [Global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes)
  - : Reference for global attributes that may be specified on all HTML elements, _even those not specified in the standard_. This means that any non-standard elements must still permit these attributes, even though those elements make the document HTML5-noncompliant.

### Attributes by element

- [Input types](/en-US/docs/Web/HTML/Reference/Elements/input)
  - : Used to create interactive controls for web-based forms.
- [Script types](/en-US/docs/Web/HTML/Reference/Elements/script/type)
  - : Indicates the type of script represented by the element.
- [meta name](/en-US/docs/Web/HTML/Reference/Elements/meta/name)
  - : Provides metadata in name-value pairs for the whole page.

### Attribute values

- [rel keywords](/en-US/docs/Web/HTML/Reference/Attributes/rel)
  - : Defines the relationship between a linked resource and the current document.

## Related topics

- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/Guides/Colors/Applying_color)
  - : This article covers most of the ways you use CSS to add color to HTML content, listing what parts of HTML documents can be colored and what CSS properties to use when doing so.
