---
title: Structuring content with HTML
slug: Learn_web_development/Core/Structuring_content
page-type: landing-page
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}

HTML is the technology that defines the content and structure of any website. Written properly, it should also define the semantics (meaning) of the content in a machine-readable way, which is vital for accessibility, search engine optimization, and making use of the built-in features browsers provide for content to work optimally. This module covers the basics of the language, before looking at key areas such as document structure, links, lists, images, forms, and more.

## Prerequisites

Before starting this module, you don't need any previous HTML knowledge, but you should have at least basic familiarity with using computers and using the web passively (i.e., just looking at it and consuming content). You should have a basic work environment set up (as detailed in [Installing basic software](/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software)), and understand how to create and manage files (as detailed in [Dealing with files](/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)). Both are parts of our [Getting started with the web](/en-US/docs/Learn_web_development/Getting_started/Your_first_website) complete beginner's module.

> [!NOTE]
> If you are working on a computer/tablet/other device where you don't have the ability to create your own files, you could try out (most of) the code examples in an online coding program such as [JSBin](https://jsbin.com/) or [Glitch](https://glitch.com/).

## Tutorials and challenges

- [Basic HTML syntax](/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Covers the absolute basics of {{glossary("HTML")}}, to get you started — we define elements, attributes, and other important terms, and show where they fit in the language. We also show how a typical HTML page is structured and how an HTML element is structured, and explain other important basic language features. Along the way, we'll play with some HTML to get you interested!
- [What's in the head? Webpage metadata](/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  - : The {{Glossary("Head","head")}} of an HTML document is the part that **is not** displayed in the web browser when the page is loaded. It contains metadata information such as the page {{htmlelement("title")}}, links to {{glossary("CSS")}} (if you want to style your HTML content with CSS), links to custom favicons, and metadata (data about the HTML, such as who wrote it, and important keywords that describe the document).
- [Headings and paragraphs](/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
  - : One of HTML's main jobs is to give text structure so that a browser can display an HTML document the way its developer intends. This article explains how HTML can be used to provide fundamental page structure by defining headings and paragraphs.
- [Emphasis and importance](/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
  - : The previous article looked at why semantics are important in HTML, and focused on headings and paragraphs. This article continues on the theme of semantics, looking at HTML elements that apply emphasis and importance to text (parallel to italics and bold text in print media).
- [Lists](/en-US/docs/Learn_web_development/Core/Structuring_content/Lists)
  - : Lists are everywhere in life—from your shopping list to the list of directions you subconsciously follow to get to your house every day, to the lists of instructions you are following in these tutorials! It may not surprise you that HTML has a convenient set of elements that allows us to define different types of list. On the web, we have three types of lists: unordered, ordered, and description lists. This lesson shows you how to use the different types.
- [Structuring documents](/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
  - : In addition to defining individual parts of your page (such as "a paragraph" or "an image"), HTML also boasts a number of block level elements used to define areas of your website (such as "the header", "the navigation menu", "the main content column"). This article looks into how to plan a basic website structure, and write the HTML to represent this structure.
- [Advanced text features](/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
  - : There are many other elements in HTML for defining text semantics, which we didn't get to in the [Emphasis and importance](/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) article. The elements described in this article are less known, but still useful to know about (and this is still not a complete list by any means). Here you'll learn about marking up quotations, description lists, computer code and other related text, subscript and superscript, contact information, and more.
- [Creating links](/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links)
  - : Links (also known as hyperlinks) are really important — they are what makes the Web _a web_. This article shows the syntax required to make a link, and discusses link best practices.
- [Marking up a letter](/en-US/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) <sup>Challenge</sup>
  - : We all learn to write a letter sooner or later; it is also a useful example to test our text formatting skills. In this challenge, you'll have a letter to mark up as a test for your HTML text formatting skills, as well as hyperlinks and proper use of the HTML `<head>` element.
- [Structuring a page of content](/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) <sup>Challenge</sup>
  - : Structuring a page of content ready for laying it out using CSS is a very important skill to master, so in this challenge you'll be tested on your ability to think about how a page might end up looking, and choose appropriate structural semantics to build a layout on top of.
- [HTML images](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images)
  - : In the beginning, the web was just text, and it was really quite boring. Fortunately, it wasn't too long before the ability to embed images (and other more interesting types of content) inside web pages was added. In this article we'll look at how to use the {{htmlelement("img")}} element in depth, including the basics, annotating it with captions using {{htmlelement("figure")}}, and detailing how it relates to {{glossary("CSS")}} background images.
- [HTML video and audio](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Now that we are comfortable with adding simple images to a webpage, the next step is to start adding video and audio players to your HTML documents! In this article we'll look at doing just that with the {{htmlelement("video")}} and {{htmlelement("audio")}} elements; we'll then finish off by looking at how to add captions/subtitles to your videos.
- [Mozilla splash page](/en-US/docs/Learn_web_development/Core/Structuring_content/Mozilla_splash_page) <sup>Challenge</sup>
  - : In this challenge, we'll test your knowledge of some of the techniques discussed in the last couple of lessons, getting you to add some images and video to a funky splash page all about Mozilla!
- [HTML table basics](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : This article gets you started with HTML tables, covering the very basics such as rows, cells, headings, making cells span multiple columns and rows, and how to group together all the cells in a column for styling purposes.
- [HTML table accessibility](/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : In this article we look at more HTML table accessibility features such as captions/summaries, grouping your rows into table head, body and footer sections, and scoping columns and rows.
- [Structuring a planet data table](/en-US/docs/Learn_web_development/Core/Structuring_content/Planet_data_table) <sup>Challenge</sup>
  - : In this challenge, we provide you with some data on the planets in our solar system. Your job is to structure it into an accessible HTML table.
- [Forms and buttons in HTML](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
  - : HTML forms and buttons are powerful tools for interacting with users — most commonly they are used for collecting data from users or allowing them to control a user interface. In this article we provide an introduction to the basics of forms and buttons.
- [Debugging HTML](/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
  - : Writing HTML is fine, but what if something goes wrong, and you can't work out where the error in the code is? This article will introduce you to some tools that can help you find and fix errors in HTML.

## Additional tutorials

These tutorials are not part of the learning pathway, but they are interesting nonetheless — you should consider these as stretch goals, to optionally study when you are done with the main Core articles.

- [Including vector graphics in HTML](/en-US/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
  - : Vector graphics are very useful in many circumstances — they have small file sizes and are highly scalable, so they don't pixelate when zoomed in or blown up to a large size. In this article we'll show you how to include one in your webpage.
- [From object to iframe — general embedding technologies](/en-US/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)
  - : Developers commonly think of embedding media such as images, video and audio into web pages. In this article we take somewhat of a sideways step, looking at some elements that allow you to embed a wide variety of content types into your webpages: the {{htmlelement("iframe")}}, {{htmlelement("embed")}} and {{htmlelement("object")}} elements. `<iframe>`s are for embedding other web pages, and the other two allow you to embed external resources such as PDF files.

## See also

- [Learn HTML](https://www.codecademy.com/learn/learn-html), Codecademy
  - : A useful (and free resource) for learning HTML basics.
- [Learn HTML and CSS](https://v2.scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>_MDN learning partner_</sup>
  - : [Scrimba's](https://scrimba.com?via=mdn) _Learn HTML and CSS_ course teaches you HTML and CSS through building and deploying five awesome projects, with fun interactive lessons and challenges taught by knowledgeable teachers.
- [The basics of semantic HTML](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Scrimba <sup>_MDN learning partner_</sup>
  - : This interactive lesson provides a useful description of HTML, with particular emphasis on why the _semantic_ aspect of it is important.

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}
