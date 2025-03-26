---
title: Safely insert external content into a page
short-title: Insert external content
slug: Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
page-type: guide
---

{{AddonSidebar}}

There are times when you might want or need to include content from an external source in your extension. But, there is the risk that the source may have malicious scripts embedded in it—added by either the developer of the source or by a malicious third-party.

Take an RSS reader as an example. You don't know what RSS feeds your extension will open and have no control over the content of those RSS feeds. So, it's possible the user could subscribe to a feed where, for example, a feed item's title includes a script. This could be something as simple as including JavaScript code within `<script></script>` tags. If you were to extract the title, assume it was plain text, and add it to the DOM of a page created by your extension, your user now has an unknown script running in their browser. Therefore, care needs to be taken to avoid evaluating arbitrary text as HTML.

You also need to remember that extensions have privileged contexts, for example in background scripts and content scripts. In the worst case, an embedded script could run in one of these contexts, a situation known as privilege escalation. This situation can leave a user's browser open to remote attack by enabling the website that injected the code to access critical user data, such as passwords, browser history, or browsing behavior.

This article examines how to work safely with remote data and add it to a DOM.

## Working with arbitrary strings

When working with strings, there are a couple of recommended options to safely add them to a page: the standard DOM node creation methods or jQuery.

### DOM node creation methods

A lightweight approach to inserting strings into a page is to use the native DOM manipulation methods: [`document.createElement`](/en-US/docs/Web/API/Document/createElement), [`Element.setAttribute`](/en-US/docs/Web/API/Element/setAttribute), and [`Node.textContent`](/en-US/docs/Web/API/Node/textContent). The safe approach is to create the nodes separately and assign their content using textContent:

```js example-good
let data = JSON.parse(responseText);
let div = document.createElement("div");
div.className = data.className;
div.textContent = `Your favorite color is now ${data.color}`;
addonElement.appendChild(div);
```

This approach is safe because the use of `.textContent` automatically escapes any remote HTML in `data.color`.

However, beware, you can use native methods that aren't safe. Take the following code:

```js example-bad
let data = JSON.parse(responseText);
addonElement.innerHTML = `<div class='${data.className}'>Your favorite color is now ${data.color}</div>`;
```

Here, the contents of `data.className` or `data.color` could contain HTML that can close the tag early, insert arbitrary further HTML content, then open another tag.

### jQuery

When using jQuery, functions such as `attr()` and `text()` escape content as it's added to a DOM. So, the "favorite color" example from above, implemented in jQuery, would look like this:

```js example-good
let node = $("</div>");
node.addClass(data.className);
node.text(`Your favorite color is now ${data.color}`);
```

## Working with HTML content

When working with externally sourced content that you know is HTML, sanitizing the HTML is essential before it's added to a page. Best practice for sanitizing HTML is to use an HTML sanitization library or a template engine with HTML sanitization features. In this section, we look at some suitable tools and how to use them.

### HTML sanitization

An HTML sanitization library strips anything that could lead to script execution from HTML, so you can safely inject complete sets of HTML nodes from a remote source into your DOM. [DOMPurify](https://github.com/cure53/DOMPurify), which has been reviewed by various security experts, is a suitable library for this task in extensions.

For production use, [DOMPurify](https://github.com/cure53/DOMPurify) comes as a minified version: purify.min.js. You can use this script in the way that best suits your extension. For example, you could add it as a content script:

```json
"content_scripts": [
  {
    "matches" : ["<all_urls>"],
    "js": ["purify.min.js", "my-injection-script.js"]
  }
]
```

Then, in `my-injection-script.js` you can read the external HTML, sanitize it, and add it to a page's DOM:

```js
let elem = document.createElement("div");
let cleanHTML = DOMPurify.sanitize(externalHTML);
elem.innerHTML = cleanHTML;
```

You can use any method to add the sanitized HTML to your DOM, for example jQuery's `.html()` function. Remember though that the `SAFE_FOR_JQUERY` flag needs to be used in this case:

```js
let elem = $("<div/>");
let cleanHTML = DOMPurify.sanitize(externalHTML, { SAFE_FOR_JQUERY: true });
elem.html(cleanHTML);
```

### Template engines

Another common pattern is to create a local HTML template for a page and use remote values to fill in the blanks. While this approach is generally acceptable, care should be taken to avoid use of constructs that would allow the insertion of executable code. This can happen when the templating engine uses constructs that insert raw HTML into the document. If the variable used to insert raw HTML is of a remote source, it is subject to the same security risk mentioned in the introduction.

For example, when using [mustache templates](https://mustache.github.io/) you must use the double mustache, `\{{variable}}`, which escapes any HTML. Use of the triple mustache, `\{\{{variable}}}`, must be avoided as this injects a raw HTML string and could add executable code to your template. [Handlebars](https://handlebarsjs.com/) works in a similar way, with variables in double handlebars, `\{{variable}}`, being escaped. Whereas, variables in triple handlebars are left raw and must be avoided. Also, if you create a Handlebars helper using `Handlebars.SafeString` use `Handlebars.escapeExpression()` to escape any dynamic parameters passed to the helper. This is a requirement because the resulting variable from `Handlebars.SafeString` is considered safe and it isn't escaped when inserted with double handlebars.

There are similar constructs in other templating systems that need to be approached with the same level of care.

## Additional reading

For more information on this subject, see the following articles:

- [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://owasp.org/www-community/xss-filter-evasion-cheatsheet)
