
---
title: "HTML: HyperText Markup Language"
slug: Web/HTML
page-type: landing-page
---

{{HTMLSidebar}}

**HTML** (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation ([CSS](/en-US/docs/Web/CSS)) or functionality/behavior ([JavaScript](/en-US/docs/Web/JavaScript)).

"Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.

HTML uses "markup" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" such as {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} and many others.

An HTML element is set off from other text in a document by "tags", which consist of the element name surrounded by "`<`" and "`>`". The name of an element inside a tag is case-insensitive. That is, it can be written in uppercase, lowercase, or a mixture. For example, the `<title>` tag can be written as `<Title>`, `<TITLE>`, or in any other way. However, the convention and recommended practice is to write tags in lowercase.

The articles below can help you learn more about HTML.

## Key resources

- HTML Introduction
  - : If you're new to web development, be sure to read our [HTML Basics](/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) article to learn what HTML is and how to use it.
- HTML Tutorials
  - : For articles about how to use HTML, as well as tutorials and complete examples, check out our [HTML Learning Area](/en-US/docs/Learn/HTML).
- HTML Reference
  - : In our extensive [HTML reference](/en-US/docs/Web/HTML/Reference) section, you'll find the details about every element and attribute in HTML.

> **Callout:**
>
> #### Looking to become a front-end web developer?
>
> We have put together a course that includes all the essential information you need to
> work towards your goal.
>
> [**Get started**](/en-US/docs/Learn/Front-end_web_developer)

## Beginner's tutorials

Our [HTML Learning Area](/en-US/docs/Learn/HTML) features multiple modules that teach HTML from the ground up â€” no previous knowledge required.

- [Introduction to HTML](/en-US/docs/Learn/HTML/Introduction_to_HTML)
  - : This module sets the stage, getting you used to important concepts and syntax such as looking at applying HTML to text, how to create hyperlinks, and how to use HTML to structure a web page.
- [Multimedia and embedding](/en-US/docs/Learn/HTML/Multimedia_and_embedding)
  - : This module explores how to use HTML to include multimedia in your web pages, including the different ways that images can be included, and how to embed video, audio, and even entire other webpages.
- [HTML tables](/en-US/docs/Learn/HTML/Tables)
  - : Representing tabular data on a webpage in an understandable, accessible way can be a challenge. This module covers basic table markup, along with more complex features such as implementing captions and summaries.
- [HTML forms](/en-US/docs/Learn/Forms)
  - : Forms are a very important part of the Web â€” these provide much of the functionality you need for interacting with websites, e.g. registering and logging in, sending feedback, buying products, and more. This module gets you started with creating the client-side/front-end parts of forms.
- [Use HTML to solve common problems](/en-US/docs/Learn/HTML/Howto)
  - : Provides links to sections of content explaining how to use HTML to solve very common problems when creating a web page: dealing with titles, adding images or videos, emphasizing content, creating a basic form, etc.

## Advanced topics

- [CORS enabled image](/en-US/docs/Web/HTML/CORS_enabled_image)
  - : The [`crossorigin`](/en-US/docs/Web/HTML/Element/img#crossorigin) attribute, in combination with an appropriate {{glossary("CORS")}} header, allows images defined by the {{HTMLElement("img")}} element to be loaded from foreign origins and used in a {{HTMLElement("canvas")}} element as if they were being loaded from the current origin.
- [CORS settings attributes](/en-US/docs/Web/HTML/Attributes/crossorigin)
  - : Some HTML elements that provide support for [CORS](/en-US/docs/Web/HTTP/CORS), such as {{HTMLElement("img")}} or {{HTMLElement("video")}}, have a `crossorigin` attribute (`crossOrigin` property), which lets you configure the CORS requests for the element's fetched data.
- [Preloading content with rel="preload"](/en-US/docs/Web/HTML/Attributes/rel/preload)
  - : The `preload` value of the {{htmlelement("link")}} element's [`rel`](/en-US/docs/Web/HTML/Element/link#rel) attribute allows you to write declarative fetch requests in your HTML {{htmlelement("head")}}, specifying resources that your pages will need very soon after loading, which you therefore want to start preloading early in the lifecycle of a page load, before the browser's main rendering machinery kicks in. This ensures that they are made available earlier and are less likely to block the page's first render, leading to performance improvements. This article provides a basic guide to how `preload` works.

## Reference

- [HTML reference](/en-US/docs/Web/HTML/Reference)
  - : HTML consists of **elements**, each of which may be modified by some number of **attributes**. HTML documents are connected to each other with **links**.
- [HTML element reference](/en-US/docs/Web/HTML/Element)
  - : Browse a list of all {{glossary("HTML")}} {{glossary("Element", "elements")}}.
- [HTML attribute reference](/en-US/docs/Web/HTML/Attributes)
  - : Elements in HTML have **attributes**. These are additional values that configure the elements or adjust their behavior in various ways.
- [Global attributes](/en-US/docs/Web/HTML/Global_attributes)
  - : Global attributes may be specified on all [HTML elements](/en-US/docs/Web/HTML/Element), _even those not specified in the standard_. This means that any non-standard elements must still permit these attributes, even though those elements make the document HTML5-noncompliant.
- [Inline-level elements](/en-US/docs/Glossary/Inline-level_content) and [block-level elements](/en-US/docs/Glossary/Block-level_content)
  - : HTML elements are usually "inline-level" or "block-level" elements. An inline-level element occupies only the space bounded by the tags that define it. A block-level element occupies the entire space of its parent element (container), thereby creating a "block box".
- [Guide to media types and formats on the web](/en-US/docs/Web/Media/Formats)
  - : The {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements allow you to play audio and video media natively within your content without the need for external software support.
- [HTML content categories](/en-US/docs/Web/HTML/Content_categories)
  - : HTML is comprised of several kinds of content, each of which is allowed to be used in certain contexts and is disallowed in others. Similarly, each context has a set of other content categories it can contain and elements that can or can't be used in them. This is a guide to these categories.
- [Quirks mode and standards mode](/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
  - : Historical information on quirks mode and standards mode.

## Related topics

- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_Colors/Applying_color)
  - : This article covers most of the ways you use CSS to add color to HTML content, listing what parts of HTML documents can be colored and what CSS properties to use when doing so. Includes examples, links to palette-building tools, and more.
 
  - ---
title: JavaScript
slug: Web/JavaScript
page-type: landing-page
---

{{JsSidebar}}

**JavaScript** (**JS**) is a lightweight, interpreted, or [just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation) compiled programming language with {{Glossary("First-class Function", "first-class functions")}}. While it is most well-known as the scripting language for Web pages, [many non-browser environments](https://en.wikipedia.org/wiki/JavaScript#Other_usage) also use it, such as {{Glossary("Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) and [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript is a [prototype-based](/en-US/docs/Glossary/Prototype-based_programming), multi-paradigm, [single-threaded](/en-US/docs/Glossary/Thread), [dynamic](/en-US/docs/Glossary/Dynamic_typing) language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via [`eval`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)), object introspection (via [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) and [`Object` utilities](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)), and source-code recovery (JavaScript functions store their source text and can be retrieved through [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)).

This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about {{Glossary("API","APIs")}} that are specific to Web pages, please see [Web APIs](/en-US/docs/Web/API) and {{Glossary("DOM")}}.

The standards for JavaScript are the [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262) and the [ECMAScript Internationalization API specification](https://tc39.es/ecma402/) (ECMA-402). As soon as one browser implements a feature, we try to document it. This means that cases where some [proposals for new ECMAScript features](https://github.com/tc39/proposals) have already been implemented in browsers, documentation and examples in MDN articles may use some of those new features. Most of the time, this happens between the [stages](https://tc39.es/process-document/) 3 and 4, and is usually before the spec is officially published.

Do not confuse JavaScript with the [Java programming language](<https://en.wikipedia.org/wiki/Java_(programming_language)>) — **JavaScript is _not_ "Interpreted Java"**. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and use.

JavaScript documentation of core language features (pure [ECMAScript](/en-US/docs/Web/JavaScript/JavaScript_technologies_overview), for the most part) includes the following:

- The [JavaScript guide](/en-US/docs/Web/JavaScript/Guide)
- The [JavaScript reference](/en-US/docs/Web/JavaScript/Reference)

For more information about JavaScript specifications and related technologies, see [JavaScript technologies overview](/en-US/docs/Web/JavaScript/JavaScript_technologies_overview).

> **Callout:** **Looking to become a front-end web developer?**
>
> We have put together a course that includes all the essential information you need to
> work towards your goal.
>
> [**Get started**](/en-US/docs/Learn/Front-end_web_developer)

## Tutorials

Learn how to program in JavaScript with guides and tutorials.

### For complete beginners

Head over to our [Learning Area JavaScript topic](/en-US/docs/Learn/JavaScript) if you want to learn JavaScript but have no previous experience with JavaScript or programming. The complete modules available there are as follows:

- [JavaScript first steps](/en-US/docs/Learn/JavaScript/First_steps)
  - : Answers some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", along with discussing key JavaScript features such as variables, strings, numbers, and arrays.
- [JavaScript building blocks](/en-US/docs/Learn/JavaScript/Building_blocks)
  - : Continues our coverage of JavaScript's key fundamental features, turning our attention to commonly-encountered types of code blocks such as conditional statements, loops, functions, and events.
- [Introducing JavaScript objects](/en-US/docs/Learn/JavaScript/Objects)
  - : The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language and write more efficient code, therefore we've provided this module to help you.
- [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous)
  - : Discusses asynchronous JavaScript, why it is important, and how it can be used to effectively handle potential blocking operations such as fetching resources from a server.
- [Client-side web APIs](/en-US/docs/Learn/JavaScript/Client-side_web_APIs)
  - : Explores what APIs are, and how to use some of the most common APIs you'll come across often in your development work.

### JavaScript guide

- [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide)
  - : A much more detailed guide to the JavaScript language, aimed at those with previous programming experience either in JavaScript or another language.

### Intermediate

- [Understanding client-side JavaScript frameworks](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : JavaScript frameworks are an essential part of modern front-end web development, providing developers with proven tools for building scalable, interactive web applications. This module gives you some fundamental background knowledge about how client-side frameworks work and how they fit into your toolset, before moving on to a series of tutorials covering some of today's most popular ones.
- [JavaScript language overview](/en-US/docs/Web/JavaScript/Language_overview)
  - : An overview of the basic syntax and semantics of JavaScript for those coming from other programming languages to get up to speed.
- [JavaScript data structures](/en-US/docs/Web/JavaScript/Data_structures)
  - : Overview of available data structures in JavaScript.
- [Equality comparisons and sameness](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript provides three different value comparison operations: strict equality using `===`, loose equality using `==`, and the {{jsxref("Global_Objects/Object/is", "Object.is()")}} method.
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
  - : How different methods that visit a group of object properties one-by-one handle the enumerability and ownership of properties.
- [Closures](/en-US/docs/Web/JavaScript/Closures)
  - : A closure is the combination of a function and the lexical environment within which that function was declared.

### Advanced

- [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Explanation of the widely misunderstood and underestimated prototype-based inheritance.
- [Memory Management](/en-US/docs/Web/JavaScript/Memory_management)
  - : Memory life cycle and garbage collection in JavaScript.
- [Concurrency model and Event Loop](/en-US/docs/Web/JavaScript/Event_loop)
  - : JavaScript has a concurrency model based on an "event loop".

## Reference

Browse the complete [JavaScript reference](/en-US/docs/Web/JavaScript/Reference) documentation.

- [Standard objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects)
  - : Get to know standard built-in objects {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, and others.
- [Expressions and operators](/en-US/docs/Web/JavaScript/Reference/Operators)
  - : Learn more about the behavior of JavaScript's operators {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, the [operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence), and more.
- [Statements and declarations](/en-US/docs/Web/JavaScript/Reference/Statements)
  - : Learn how {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}}, and more JavaScript statements and keywords work.
- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
  - : Learn how to work with JavaScript's functions to develop your applications.
- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript classes are the most appropriate way to do object-oriented programming.
 
  - ---
title: Web technology for developers
slug: Web
---

<section id="Quick_links">
  {{ListSubpages("", 1, 0, 1)}}
</section>

The open Web presents incredible opportunities for developers. To take full advantage of these technologies, you need to know how to use them. Below you'll find links to our Web technology documentation.

## Documentation for Web developers

- [Web Developer Guide](/en-US/docs/Web/Guide)
  - : The Web Developer Guide provides useful how-to content to help you actually use Web technologies to do what you want or need to do.
- [Tutorials for Web developers](/en-US/docs/Web/Tutorials)
  - : Tutorials to take you step-by-step through learning HTML, CSS, JavaScript, and Web APIs.
- [Accessibility](/en-US/docs/Web/Accessibility)
  - : Enabling as many people as possible to use websites, even when those people's abilities are limited in some way.
- [Performance](/en-US/docs/Web/Performance)
  - : Making content as available and interactive as possible, as soon as possible.
- [Security](/en-US/docs/Web/Security)
  - : Protecting users from data leaks and data theft, side-channel attacks, and attacks such as cross-site scripting, content injection, and click-jacking.

## Web technology references

- [Web APIs](/en-US/docs/Web/API)
  - : JavaScript programming APIs you can use to build apps on the Web.
- [HTML](/en-US/docs/Web/HTML)
  - : HTML provides the fundamental building blocks for structuring Web documents and apps.
- [CSS](/en-US/docs/Web/CSS)
  - : Cascading Style Sheets are used to describe the appearance of Web documents and apps.
- [JavaScript](/en-US/docs/Web/JavaScript)
  - : JavaScript is the Web's native programming language.
- [WebAssembly](/en-US/docs/WebAssembly)
  - : WebAssembly allows programs written in C, C++, Rust, Swift, C#, Go, and more to run on the Web.
- [Events](/en-US/docs/Web/Events)
  - : Events are what you build Web apps to react to; for example, when a Web page finishes loading, or a user selects something, presses a key, resizes a window, submits a form, or pauses a video.
- [HTTP](/en-US/docs/Web/HTTP)
  - : HTTP is the fundamental Internet protocol for fetching documents, stylesheets, scripts, images, videos, fonts, and other resources over the Web â€” and for sending data back to Web servers.
- [Media](/en-US/docs/Web/Media)
  - : Formats, codecs, protocols, APIs, and techniques for embedding and streaming video, audio, and image content in Web documents and apps.
- [SVG](/en-US/docs/Web/SVG)
  - : Scalable Vector Graphics lets you create images that scale smoothly to any size.
- [MathML](/en-US/docs/Web/MathML)
  - : MathML lets you display complex mathematical notation on the Web.
- [Web Components](/en-US/docs/Web/API/Web_components)
  - : Web Components are custom elements that you can define and reuse in your Web apps.
- [WebDriver](/en-US/docs/Web/WebDriver)
  - : WebDriver is a browser-automation mechanism for remotely controlling a browser by emulating the actions of a real person using the browser. It's widely used for cross-browser testing of Web apps.
- [Web Extensions](/en-US/docs/Mozilla/Add-ons/WebExtensions)
  - : Web Extensions are a way for you to give users enhanced capabilities in their browsers â€” for doing things such as blocking ads and other content, customizing the appearance of pages, and more.
- [Web App Manifests](/en-US/docs/Web/Manifest)
  - : Web App Manifests let you enable users to install Web apps to their device home screens, with aspects such as portrait/landscape screen orientation and display mode (e.g., full screen) pre-set.
- [Progressive Web Apps (PWAs)](/en-US/docs/Web/Progressive_web_apps)
  - : Progressive Web Apps provide a user experience similar to native mobile apps.

## Developer tools documentation

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : Documentation for the set of web-developer tools built into Firefox.
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
  - : Documentation for the set of web-developer tools built into Chrome.
- [Safari Web Inspector](https://webkit.org/web-inspector/)
  - : Documentation for the set of web-developer tools built into Safari.
- [Edge DevTools](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/landing/)
  - : Documentation for the set of web-developer tools built into Edge.
