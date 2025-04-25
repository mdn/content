---
title: Add JavaScript to your web page
short-title: Add JavaScript
slug: Web/HTML/How_to/Add_JavaScript_to_your_web_page
page-type: how-to
---

{{HTMLSidebar}}

Take your webpages to the next level by harnessing JavaScript. Learn in this article how to trigger JavaScript right from your HTML documents.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        You need to be familiar with how to
        <a href="/en-US/docs/Learn_web_development/Getting_started/Your_first_website"
          >create a basic HTML document</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        Learn how to trigger JavaScript in your HTML file, and learn the most
        important best practices for keeping JavaScript accessible.
      </td>
    </tr>
  </tbody>
</table>

## About JavaScript

{{Glossary("JavaScript")}} is a programming language mostly used client-side to make webpages interactive. You _can_ create amazing webpages without JavaScript, but JavaScript opens up a whole new level of possibilities.

> [!NOTE]
> In this article we're going over the HTML code you need to make JavaScript take effect. If you want to learn JavaScript itself, you can start with our [JavaScript basics](/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) article. If you already know something about JavaScript or if you have a background with other programming languages, we suggest you jump directly into our [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide).

## How to trigger JavaScript from HTML

Within a browser, JavaScript doesn't do anything by itself. You run JavaScript from inside your HTML webpages. To call JavaScript code from within HTML, you need the {{htmlelement("script")}} element. There are two ways to use `script`, depending on whether you're linking to an external script or embedding a script right in your webpage.

### Linking an external script

Usually, you'll be writing scripts in their own .js files. If you want to execute a .js script from your webpage, just use {{HTMLElement ('script')}} with an `src` attribute pointing to the script file, using its [URL](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL):

```html
<script src="path/to/my/script.js"></script>
```

### Writing JavaScript within HTML

You may also add JavaScript code between `<script>` tags rather than providing an `src` attribute.

```html
<script>
  window.addEventListener("load", () => {
    console.log("This function is executed once the page is fully loaded");
  });
</script>
```

That's convenient when you just need a small bit of JavaScript, but if you keep JavaScript in separate files you'll find it easier to

- focus on your work
- write self-sufficient HTML
- write structured JavaScript applications

## Use scripting accessibly

Accessibility is a major issue in any software development. JavaScript can make your website more accessible if you use it wisely, or it can become a disaster if you use scripting without care. To make JavaScript work in your favor, it's worth knowing about certain best practices for adding JavaScript:

- **Make all content available as (structured) text.** Rely on HTML for your content as much as possible. For example, if you've implemented a nice JavaScript progress bar, make sure to supplement it with matching text percentages inside the HTML. Likewise, your drop-down menus should be structured as [unordered lists](/en-US/docs/Learn_web_development/Core/Structuring_content/Lists#unordered_lists) of [links](/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links).
- **Make all functionality accessible from the keyboard.**

  - Let users Tab through all controls (e.g., links and form input) in a logical order.
  - If you use pointer events (like mouse events or touch events), duplicate the functionality with keyboard events.
  - Test your site using a keyboard only.

- **Don't set nor even guess time limits.** It takes extra time to navigate with the keyboard or hear content read out. You can hardly ever predict just how long it will take for users or browsers to complete a process (especially asynchronous actions such as loading resources).
- **Keep animations subtle and brief with no flashing.** Flashing is annoying and can [cause seizures](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Additionally, if an animation lasts more than a couple seconds, give the user a way to cancel it.
- **Let users initiate interactions.** That means, don't update content, redirect, or refresh automatically. Don't use carousels or display popups without warning.
- **Have a plan B for users without JavaScript.** People may have JavaScript turned off to improve speed and security, and users often face network issues that prevent loading scripts. Moreover, third-party scripts (ads, tracking scripts, browser extensions) might break your scripts.

  - At a minimum, leave a short message with {{HTMLElement("noscript")}} like this: `<noscript>To use this site, please enable JavaScript.</noscript>`
  - Ideally, replicate the JavaScript functionality with HTML and server-side scripting when possible.
  - If you're only looking for simple visual effects, CSS can often get the job done even more intuitively.
  - _Since almost everybody **does** have JavaScript enabled, `<noscript>` is no excuse for writing inaccessible scripts._

## Learn more

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [Writing JavaScript with Accessibility in Mind](https://www.sitepoint.com/writing-javascript-with-accessibility-in-mind/) by Manuel Matuzovic (2017)
- [Accessibility guidelines from W3C](https://www.w3.org/TR/WCAG20/)
