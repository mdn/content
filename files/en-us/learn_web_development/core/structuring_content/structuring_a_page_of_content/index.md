---
title: "Challenge: Structuring a page of content"
slug: Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content
page-type: learn-module-assessment
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}

Structuring a page of content ready for laying it out using CSS is a very important skill to master, so in this challenge you'll be tested on your ability to think about how a page might end up looking, and choose appropriate structural semantics to build a layout on top of.

## Starting point

To get this challenge started, you should go and grab the [zip file containing all the starting assets](https://raw.githubusercontent.com/mdn/learning-area/main/html/introduction-to-html/structuring-a-page-of-content-start/assets.zip).

The zip file contains:

- The HTML you need to add structural markup to.
- CSS to style your markup.
- Images that are used on the page.

Create the example on your local computer, or alternatively use an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).

> [!NOTE]
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Project brief

For this project, your task is to take the content for the homepage of a bird watching website and add structural elements to it so it can have a page layout applied to it. It needs to have:

- A header spanning the full width of the site containing the main title for the page, the site logo, and the navigation menu. The title and logo appear side by side once styling is applied, and the navigation appears below those two items.
- A main content area containing two columns — a main block to contain the welcome text, and a sidebar to contain image thumbnails.
- A footer containing copyright information and credits.

You need to add a suitable wrapper for:

- The header
- The navigation menu
- The main content
- The welcome text
- The image sidebar
- The footer

You should also:

- Apply the provided CSS to the page by adding another {{htmlelement("link")}} element just below the existing one provided at the start.

## Hints and tips

- Use the [W3C Nu HTML Checker](https://validator.w3.org/nu/) to catch unintended mistakes in your HTML, CSS, and SVG — mistakes you might have otherwise missed — so that you can fix them.
- You don't need to know any CSS to do this challenge; you just need to put the provided CSS inside an HTML element.
- The provided CSS is designed so that when the correct structural elements are added to the markup, they will appear green in the rendered page.
- If you are getting stuck and can't envisage what elements to put where, draw out a simple block diagram of the page layout, and write on the elements you think should wrap each block. This is extremely helpful.

## Example

The following screenshot shows an example of what the homepage might look like after being marked up.

![The finished example for the challenge; a simple webpage about birdwatching, including a heading of "Birdwatching", bird photos, and a welcome message](example-page.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}
