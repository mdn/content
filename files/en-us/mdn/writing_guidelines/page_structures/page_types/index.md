---
title: Page types
slug: MDN/Writing_guidelines/Page_structures/Page_types
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

There are a number of types of pages that are used repeatedly on MDN.
This article describes these page types, their purpose, and gives examples of each and templates to use when creating a new page.

There are three broad categories of page types on MDN, though some page types fall into more than one category.

- **Reference** pages describe the details of something, and are organized according to the structure of the thing described.
- **Guide** pages describe how to do something or use something, and are organized based on the goals of the reader.
- **Navigation** pages exist primarily to provide links to other pages, usually about related topics.

## Creating a new page

Adding a new document is relatively straightforward, especially if you can start by copying an `index.md` file from a similar topic.
There are a few things to keep in mind:

- Documents are written in Markdown in an `index.md` file.
- For example, if you're creating a new document for an HTTP header called `foo`, create a new folder at `files/en-us/web/http/reference/headers/foo` and put the Markdown file in this folder (`files/en-us/web/http/reference/headers/foo/index.md`).
- A document's `index.md` file must start with front-matter that defines the `title`, `slug`, and, most of the time, `page-type`.
  You might find it helpful to refer to the front-matter within a similar document's `index.md`.

## How to use the templates

When creating a new page you can ensure that you've used the right page structure/contents by referring to one of our page templates — see the sections below.
You can find the exact source code of each template (if you want to copy it) by following the "Source on **GitHub**" link at the bottom of each one.
These page templates don't make much sense as published pages, but if you view their source code you'll see that they contain a lot of helpful comments, placeholders, and hints detailing how to fill in the missing information and create your page.

At the top of each template you'll find a section entitled _Remove before publishing_ — this contains information on how to fill in the page title, slug, sidebar menu, and tags (e.g., information that doesn't actually appear in the body of the article).
You need to delete this section after you've followed the instructions in it, before the page can be considered finished.

## Old-style page layouts

Sometimes you will come across old-style reference pages that look markedly different from the templates presented here.
For example, old-style interface pages had all the interfaces' member details on a single page, and individual method/property/constructor/event listener pages didn't exist.

If you come across an old-style set of pages, we'd love for you to update them to the new style!
However, we do appreciate that this could be a large amount of work.
If the information to update is not too large, and you have some free time, by all means try updating it to the new style.

If the work is more significant, then you should consider a few factors when prioritizing the work:

- How out-of-date is the information?
- How low quality is the information?
- How popular is the feature? How sought after is the information?

If you want to get a team together to work on an update, or you just want to report or discuss some content needing an update, feel free to [file a content issue](https://github.com/mdn/content/issues) or [ask us for help](/en-US/docs/MDN/Community/Communication_channels).

## The page-type front matter key

We have defined a front matter key `page-type` to clearly identify the type of MDN pages. The templates linked below indicate which `page-type` values you should set for each page type.

For the complete list of page types see [The page-type front matter key](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Page templates

Below are examples of the various pages you'll find on MDN along with templates that can be used to create new content based on the type of content you will be presenting, including the following pages:

- [API landing page](#api_landing_page)
- [API reference page](#api_reference_page)
- [API reference subpage](#api_reference_subpage)
- [HTML element reference page](#html_element_reference_page)
- [HTML attribute reference page](#html_attribute_reference_page)
- [SVG element reference page](#svg_element_reference_page)
- [CSS module page](#css_module_page)
- [CSS feature reference page](#css_feature_reference_page)
- [HTTP header reference page](#http_header_reference_page)
- [ARIA reference page](#aria_reference_page)
- [Conceptual page](#conceptual_page)
- [Glossary page](#glossary_page)
- [JavaScript class](#javascript_class_page)
- [JavaScript constructor](#javascript_constructor_page)
- [JavaScript error](#javascript_error_page)
- [JavaScript function](#javascript_function_page)
- [JavaScript global property](#javascript_global_property_page)
- [JavaScript instance accessor property](#javascript_instance_accessor_property_page)
- [JavaScript instance data property](#javascript_instance_data_property_page)
- [JavaScript instance method](#javascript_instance_method_page)
- [JavaScript namespace](#javascript_namespace_page)
- [JavaScript operator](#javascript_operator_page)
- [JavaScript statement](#javascript_statement_page)
- [JavaScript static accessor property](#javascript_static_accessor_property_page)
- [JavaScript static data property](#javascript_static_data_property_page)
- [JavaScript static method](#javascript_static_method_page)
- [Landing page](#landing_page)
- [Learn web development pages](#learn_web_development_pages)

Each section includes links to live example pages for that page type.

### API landing page

An **{{Glossary("API")}} landing page** provides an overview of what a particular API does, as well as links to the documentation for each of the interfaces, globals, functions, etc. offered by the API.
It does not link directly to specific methods or properties within the API's classes, except in the context of the overview text.
It is primarily a _navigation_ page, but also functions as an at-a-glance _reference_ page for the API.

There are some instances where multiple APIs exist that are distinct, and are defined in their own specifications, but they closely related and therefore would make sense to cover with a single API landing page.
For example, the [Generic Sensor API](https://w3c.github.io/sensors/) cover general sensor concerns, but more specific concerns are covered in other APIs such as [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Motion Sensor](https://w3c.github.io/motion-sensors/), etc.
In such cases, many of the high level concepts are the same, so it makes no sense to repeat those over multiple landing pages.
In such a case, it would make more sense in terms of repetition and findability to cover them all under a single "Web sensors" landing page.

#### Example

- [WebVR API](/en-US/docs/Web/API/WebVR_API)

#### Templates

- [API landing page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API reference page

> [!NOTE]
> Also known as an _Interface landing page_.

An **API reference page** lists all the methods, properties, events, and so forth that are members of a particular interface or class.
It provides an overview of what the class or interface does or is used for, and gives links to the documentation for each of these members.
It is more granular than an API landing page, which typically links to multiple API reference pages.

#### Example

- [Request interface](/en-US/docs/Web/API/Request) of the [Fetch API](/en-US/docs/Web/API/Fetch_API).

#### Templates

- [API reference page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API reference subpage

An **API reference subpage** is a child of an API reference page.
It documents a single interface member in detail.

#### Examples

- [`count()` method](/en-US/docs/Web/API/IDBIndex/count) of the [IDBIndex](/en-US/docs/Web/API/IDBIndex) interface (part of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API))
- [capabilities property](/en-US/docs/Web/API/VRDisplay/capabilities) of the [VRDisplay](/en-US/docs/Web/API/VRDisplay) interface (part of the [WebVR API](/en-US/docs/Web/API/WebVR_API))
- [Request() constructor](/en-US/docs/Web/API/Request/Request) of the [Request](/en-US/docs/Web/API/Request) interface (part of the [Fetch API](/en-US/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange event](/en-US/docs/Web/API/Window/vrdisplaypresentchange_event) (part of the [WebVR API](/en-US/docs/Web/API/WebVR_API), hangs off the [Window](/en-US/docs/Web/API/Window)) interface

#### Templates

- [API method subpage template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API property subpage template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API constructor subpage template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API event subpage template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML element reference page

An **HTML reference page** lists all the attributes that are available on an HTML element, explains the element's purpose and usage, and provides examples, browser compatibility information, and other important data.

#### Example

- [`<video>` element](/en-US/docs/Web/HTML/Reference/Elements/video)

#### Templates

- [HTML element page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### HTML attribute reference page

An HTML attribute page lists all the values that exist on an HTML attribute, explains the attribute's purpose and use cases, providing examples, browser compatibility information, and other important data.

> [!NOTE]
> Element-specific attributes (e.g., `placeholder` for `<input>`) don't require a separate page if the attributes can be sufficiently covered within the parent element's reference page (e.g., the `placeholder` attribute should be covered on the `<input>` element's page, not as a standalone page).

#### Example

- [`class` attribute](/en-US/docs/Web/HTML/Reference/Global_attributes/class)

#### Templates

- [HTML attribute page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### SVG element reference page

An **SVG reference page** lists all the attributes that are available on an SVG element, explains the element's purpose and usage, and provides examples, browser compatibility information, and other important data.

#### Example

- [\<g> element](/en-US/docs/Web/SVG/Reference/Element/g)

#### Templates

- [SVG element page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS module page

Every **[CSS](/en-US/docs/Web/CSS) module** represents a CSS specification that provides support for certain features and implementations in CSS. For example, the [CSS box model](/en-US/docs/Web/CSS/Guides/Box_model) module represents the [specification](/en-US/docs/Web/CSS/Guides/Box_model#specifications) that describes the margin and padding properties that let you create spacing in and around a CSS box.

A **CSS module page** provides an overview of the features that the module provides and lists all the properties, data types, CSS functions, and so on offered by the module. When possible, the CSS module page provides a quick demonstration of what can be achieved using the properties of the module through an interactive example.
The module page serves primarily as a _navigation_ page, but also functions as an at-a-glance _reference_ page for the module.

Some related properties and features that belong in other modules, but that are closely related to the functionality offered by the module you are documenting, can also be covered in a _Related concepts_ section.
For example, the `<easing-function>` data type and the `prefers-reduced-motion` media query are not covered in the CSS animations module, but because they are closely related with CSS animations, it is a good idea to highlight them in the [Related concepts](/en-US/docs/Web/CSS/Guides/Animations#related_concepts) section of the CSS animations module page.

#### Examples

- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations)
- [CSS basic user interface](/en-US/docs/Web/CSS/Guides/Basic_user_interface)
- [CSS filter effects](/en-US/docs/Web/CSS/Guides/Filter_effects)
- [CSS scroll snap](/en-US/docs/Web/CSS/Guides/Scroll_snap)

#### Templates

- [CSS module page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_page_template)

### CSS feature reference page

A **CSS reference page** lists all the available syntax for a CSS feature such as a selector or property, and explains the feature's purpose and usage. It also provides examples, browser compatibility information, and other important data.

#### Examples

- {{cssxref("background-color")}} property
- {{cssxref(":hover")}} pseudo-class
- {{cssxref("@media")}} at-rule

#### Templates

- [CSS property page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS selector page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS function page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP header reference page

An **HTTP header reference page** lists all the available directives that an HTTP header can contain, and explains the header's purpose and usage.
It also provides examples, browser compatibility information, and other important explanations.

#### Example

- [Cache-Control header](/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Templates

- [HTTP header page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### ARIA reference page

An **ARIA reference page** describes a [role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles) or [attribute](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes) that defines ways to make web content and web applications more accessible to people with disabilities.

#### Examples

- [`aria-busy` attribute](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`application` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)

#### Templates

- [ARIA page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template)

### JavaScript class page

A **JavaScript class page** provides an overview of a JavaScript class, including its purpose and usage, and lists all the methods and properties, static or instance, of the class. A JavaScript class is defined as an intrinsic function object with a `prototype` property that gets shared by all instances of the class. By this definition, `BigInt` is a class too, despite it not being callable with `new`.

#### Examples

- [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`BigInt`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [`Map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [`Intl.Collator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
- [`Temporal.ZonedDateTime`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime)

#### Templates

- [JavaScript class page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_class_page_template)

### JavaScript constructor page

A **JavaScript constructor page** provides information about the constructor of a JavaScript class. It provides information about how it should be called. The constructor of a class is just defined as the function object itself: for example `BigInt()` is a constructor, despite it not being callable with `new`. Not every class has a constructor worth documenting: the {{jsxref("TypedArray")}} class, for example, is an abstract class that always throws when called, and therefore does not have its own page.

#### Examples

- [`Array()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
- [`BigInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
- [`Map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)
- [`Intl.Collator()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator)
- [`Temporal.ZonedDateTime()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/ZonedDateTime)

#### Templates

- [JavaScript constructor page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_constructor_page_template)

### JavaScript error page

A **JavaScript error page** provides information about when a JavaScript error occurs and how to fix it. It is primarily intended to be used by dev tools as a reference. These error references are primarily keyed by Firefox's error messages — one error message per page. See also the [how to document errors](/en-US/docs/MDN/Writing_guidelines/Howto/Document_web_errors) guide.

#### Examples

- [ReferenceError: "x" is not defined](/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined)

#### Templates

- [JavaScript error page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_error_page_template)

### JavaScript function page

A **JavaScript function page** provides information about a JavaScript function that's not attached to any class or namespace. It provides information about the function's purpose, parameters, and return value.

If the function is statically available on a class or namespace, use the [JavaScript static method page](#javascript_static_method_page) template instead. If the function can be regarded as a class (because it has a `prototype` property), use the [JavaScript class page](#javascript_class_page) template instead. The main clue to use the global function page template is that the property has a function value and starts with a lowercase letter.

#### Examples

- [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`encodeURIComponent()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

#### Templates

- [JavaScript function page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_function_page_template)

### JavaScript global property page

A **JavaScript global property page** provides information about a JavaScript global property that's not attached to any class or namespace. It provides information about the property's purpose and usage.

If the property is statically available on a class or namespace, use the [JavaScript static data property page](#javascript_static_data_property_page) template instead. If the property is a function, use the [JavaScript function page](#javascript_function_page) template instead. If the property is a plain object whose main goal is to host other properties, use the [JavaScript namespace page](#javascript_namespace_page) template instead. The main clue to use the global property page template is that the property either has a primitive value or starts with a lowercase letter and is not a function.

#### Examples

- [`Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)
- [`globalThis`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis)

#### Templates

- [JavaScript global property page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_global_property_page_template)

### JavaScript instance accessor property page

A **JavaScript instance accessor property page** provides information about an accessor property of a JavaScript class instance. An accessor property comprises of a getter and sometimes a setter, and is nearly always defined on the instance's prototype. The spec uses the syntax `get Constructor.prototype.propertyName` to define an accessor property. Nearly all non-legacy instance accessor properties in the core JavaScript language are getter-only, which makes them read-only.

If the property has a function value, use the [JavaScript instance method page](#javascript_instance_method_page) template instead.

#### Examples

- [`Map.prototype.size`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size)

#### Templates

- [JavaScript instance accessor property page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_accessor_property_page_template)

### JavaScript instance data property page

A **JavaScript instance data property page** provides information about a data property of a JavaScript class instance. A data property comprises of a value and a writable flag, and may be either defined on the instance's prototype or directly on the instance itself.

Every instance has a data property called [`constructor`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) that points to the constructor function that created the instance. This data property is mentioned in the class's main page, but not documented in a separate page for each class.

If the property has a function value, use the [JavaScript instance method page](#javascript_instance_method_page) template instead.

#### Examples

- [`Array`: `length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [`Error.prototype.name`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name)

#### Templates

- [JavaScript instance data property page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_data_property_page_template)

### JavaScript instance method page

A **JavaScript instance method page** provides information about a method of a JavaScript class instance. A method is a function property of the instance. Generally, a method is a data property defined on the instance's prototype, but there are some legacy exceptions, such as [`Intl.DateTimeFormat.prototype.format()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format), which is an accessor property that returns a bound function. For the sake of reader familiarity, we treat them as normal methods.

#### Examples

- [`Array.prototype.push()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [`Intl.DateTimeFormat.prototype.resolvedOptions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions)

#### Templates

- [JavaScript instance method page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_method_page_template)

### JavaScript namespace page

A **JavaScript namespace page** provides an overview of a JavaScript namespace, including its purpose and usage, and lists all the methods and properties of the namespace. A JavaScript namespace is defined as a plain object that hosts other properties.

#### Examples

- [`Intl`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [`Math`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [`Temporal`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal)
- [`Temporal.Now`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now)

#### Templates

- [JavaScript namespace page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_namespace_page_template)

### JavaScript operator page

A **JavaScript operator page** provides information about a JavaScript operator, including its purpose and usage. An _operator_ is not a universally agreed-upon term. For the purpose of MDN, we define it as a syntax parameterized by one or more operands, usually in the form of expressions or expression-like constructs.

#### Examples

- [Addition (`+`)](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [`class`](/en-US/docs/Web/JavaScript/Reference/Operators/class)

#### Templates

- [JavaScript operator page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_operator_page_template)

### JavaScript statement page

A **JavaScript statement page** provides information about a JavaScript statement or declaration, including its purpose, syntax, and usage. It describes the statement's syntax components and how it affects program execution or introduces bindings.

For expression forms, such as a function expression or class expression, use the [JavaScript operator page](#javascript_operator_page) template instead.

#### Examples

- [`if...else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const)

#### Templates

- [JavaScript statement page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_statement_page_template)

### JavaScript static accessor property page

A **JavaScript static accessor property page** provides information about an accessor property accessed directly on a JavaScript class or namespace. It describes the value returned by the getter and, when a setter is present, the values it accepts and the effect of assignment.

For an accessor property of an instance, use the [JavaScript instance accessor property page](#javascript_instance_accessor_property_page) template instead.

#### Examples

- [`Array[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
- [`RegExp.input`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)

#### Templates

- [JavaScript static accessor property page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_accessor_property_page_template)

### JavaScript static data property page

A **JavaScript static data property page** provides information about a data property accessed directly on a JavaScript class or namespace. It describes the property's value, attributes, purpose, and usage.

If the property is an accessor property, use the [JavaScript static accessor property page](#javascript_static_accessor_property_page) template instead. If the property has a function value, use the [JavaScript static method page](#javascript_static_method_page) template instead. Classes and namespaces exposed as properties have their own [class pages](#javascript_class_page) or [namespace pages](#javascript_namespace_page).

#### Examples

- [`Math.PI`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
- [`Number.MAX_SAFE_INTEGER`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

#### Templates

- [JavaScript static data property page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_data_property_page_template)

### JavaScript static method page

A **JavaScript static method page** provides information about a method called directly on a JavaScript class or namespace. It describes the method's purpose, syntax, parameters, return value, and exceptions.

For a method of an instance, use the [JavaScript instance method page](#javascript_instance_method_page) template instead. For a global function, use the [JavaScript function page](#javascript_function_page) template instead.

#### Examples

- [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [`Temporal.Now.instant()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now/instant)

#### Templates

- [JavaScript static method page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_method_page_template)

### Conceptual page

A **conceptual page** is a _guide_ page that explains or teaches something.
Generally, if a page contains primarily prose, and doesn't fall into another page type, it's probably a conceptual page.
An extended discussion of a topic might be spread across multiple conceptual pages, and linked using [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) and [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) macros.

#### Examples

- [Using the WebVR API](/en-US/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualizations with Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Handling conflicts](/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossary page

A **glossary page** contains a brief explanation of a term, topic, or concept.
The first paragraph should be a simple, self-contained description of the term, no more than a couple sentences.
This can be followed by links to further information in the **See also** section.
If the page grows to more than a screenful or so, it's too long and should be converted to a conceptual page. See [How to write and reference an entry in the glossary](/en-US/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) for more details.

#### Examples

- [DOM](/en-US/docs/Glossary/DOM)
- [Exception](/en-US/docs/Glossary/Exception)
- [Hyperlink](/en-US/docs/Glossary/Hyperlink)

#### Templates

- [Glossary page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Landing page

A **landing page** serves as a menu, of sorts, for its subpages, and is therefore primarily a _navigation_ page.
A landing page layout is typically used for the root page of a tree of pages about a particular topic.
It opens with a brief summary of the topic, then presents a structured list of links to its subpages, and optionally, additional material that be useful to the reader.

The list of subpages can be generated automatically using the [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) template. However, in more complex cases, the list may need to be created (and maintained) by hand.

### Learn web development pages

The [Learn web development](/en-US/docs/Learn_web_development) section of MDN is aimed specifically at folks learning the basic fundamentals of web development, and as such, requires a different approach to the rest of MDN's content. You can find more guidelines at [Learn web development writing guidelines](/en-US/docs/MDN/Writing_guidelines/Learning_content).

There are only a few types of page inside Learn web development:

- **Module group landing page**, for example [Core learning modules](/en-US/docs/Learn_web_development/Core)
  - : These contain an intro paragraph, a section detailing the prerequisites you should have before starting the module group, and a list of the modules, followed by an optional list of "See also" links.
- **Module landing page**, for example [Structuring content with HTML](/en-US/docs/Learn_web_development/Core/Structuring_content)
  - : These contain an intro paragraph, a section detailing the prerequisites you should have before starting the module, and a list of the contained tutorials, followed by an optional list of "Additional tutorials" that are related but not part of the central learning pathway, and an optional list of "See also" links.
- **Tutorial page**, for example [Basic HTML syntax](/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : The structure of a Learn tutorial is not strict, but it must provide a hands-on learning experience (see [Learn web development writing guidelines > Approach](/en-US/docs/MDN/Writing_guidelines/Learning_content#approach)), it must have a set of "Prerequisites" and "Learning outcomes" listed at the top, and the content must teach the stated learning outcomes.

### Examples

- [HTML](/en-US/docs/Web/HTML)
- [CSS](/en-US/docs/Web/CSS)
- [Web APIs](/en-US/docs/Web/API)
- [JavaScript](/en-US/docs/Web/JavaScript)
- [Learn web development](/en-US/docs/Learn_web_development)
- [Community resources](/en-US/docs/MDN/Community)

## See also

- [Page components](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Creating code examples in markdown](/en-US/docs/MDN/Writing_guidelines/Code_style_guide)
