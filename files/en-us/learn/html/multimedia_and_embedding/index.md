---
title: Multimedia and embedding
slug: Learn/HTML/Multimedia_and_embedding
page-type: learn-module
---

{{LearnSidebar}}

We've looked at a lot of text so far in this course, but the web would be really boring only using text. Let's start looking at how to make the web come alive with more interesting content! This module explores how to use HTML to include multimedia in your web pages, including the different ways that images can be included, and how to embed video, audio, and even entire webpages.

## Prerequisites

Before starting this module, you should have a reasonable understanding of the basics of HTML, as previously covered in [Introduction to HTML](/en-US/docs/Learn/HTML/Introduction_to_HTML). If you have not worked through this module (or something similar), work through it first, then come back!

> **Note:** If you are working on a computer/tablet/other device where you don't have the ability to create your own files, you could try out (most of) the code examples in an online coding program such as [JSBin](https://jsbin.com/) or [Glitch](https://glitch.com/).

## Guides

This module contains the following articles, which will take you through all the fundamentals of embedding multimedia on webpages.

- [Images in HTML](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - : There are other types of multimedia to consider, but it is logical to start with the humble {{htmlelement("img")}} element used to embed a simple image in a webpage. In this article we'll look at how to use it in more depth, including basics, annotating it with captions using {{htmlelement("figure")}}, and how it relates to CSS background images.
- [Video and audio content](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Next, we'll look at how to use the HTML {{htmlelement("video")}} and {{htmlelement("audio")}} elements to embed video and audio on our pages, including basics, providing access to different file formats to different browsers, adding captions and subtitles, and how to add fallbacks for older browsers.
- [From \<object> to \<iframe> — other embedding technologies](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : At this point we'd like to take somewhat of a sideways step, looking at a couple of elements that allow you to embed a wide variety of content types into your webpages: the {{htmlelement("iframe")}}, {{htmlelement("embed")}} and {{htmlelement("object")}} elements. `<iframe>`s are for embedding other web pages, and the other two allow you to embed external resources such as PDF files.
- [Adding vector graphics to the Web](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
  - : Vector graphics can be very useful in certain situations. Unlike regular formats like PNG/JPG, they don't distort/pixelate when zoomed in — they can remain smooth when scaled. This article introduces you to what vector graphics are and how to include the popular {{glossary("SVG")}} format in web pages.
- [Responsive images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In this article, we'll learn about the concept of responsive images — images that work well on devices with widely differing screen sizes, resolutions, and other such features — and look at what tools HTML provides to help implement them. This helps to improve performance across different devices. Responsive images are just one part of [responsive design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design), a future CSS topic for you to learn.

## Assessments

The following assessment will test your understanding of the material covered in the guides above.

- [Mozilla splash page](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : In this assessment, we'll test your knowledge of some of the techniques discussed in this module's articles, getting you to add some images and video to a funky splash page all about Mozilla!

## See also

- [Add a hitmap on top of an image](/en-US/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)
  - : Image maps provide a mechanism to make different parts of an image link to different places. (Think of a map linking through to further information about each different country you click on.) This technique can sometimes be useful.
- [Web literacy basics II](https://mozilla.github.io/curriculum-final/web-lit-basics-two/session01-why-do-we-use-the-web.html#overview)
  - : An excellent Mozilla foundation course that explores and tests some of the skills talked about in this _Multimedia and embedding_ module. Dive deeper into the basics of composing webpages, designing for accessibility, sharing resources, using online media, and working open (meaning that your content is freely available and shareable by others).
