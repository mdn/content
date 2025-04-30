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

To create new pages on MDN, you need to use GitHub — have a look at our [content repo](https://github.com/mdn/content) section about [adding a new document](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) for more instructions.

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

- [API landing pages](#api_landing_page)
- [API reference page](#api_reference_page)
- [API reference subpage](#api_reference_subpage)
- [Conceptual pages](#conceptual_page)
- [CSS feature reference](#css_feature_reference_page)
- [CSS module landing page](#css_module_landing_page)
- [Glossary entry](#glossary_page)
- [HTML element](#html_element_reference_page)
- [HTML attribute](#html_attribute_reference_page)
- [HTTP header](#http_header_reference_page)
- [Landing page](#landing_page)
- [SVG element](#svg_element_reference_page)
- [Learn web development pages](#learn_web_development_pages)

Each section includes links to live example pages for that page type.

### API landing page

An **{{Glossary("API")}} landing page** provides an overview of what a particular API does, as well as links to the documentation for each of the interfaces, globals, functions, etc. offered by the API.
It does not link directly to specific methods or properties within the API's classes, except in the context of the overview text.
It is primarily a _navigation_ page, but also functions as an at-a-glance _reference_ page for the API.

There are some instances where multiple APIs exist that are distinct, and are defined in their own specifications, but they closely related and therefore would make sense to cover with a single API landing page.
For example, the [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) cover general sensor concerns, but more specific concerns are covered in other APIs such as [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/), etc.
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

### CSS module landing page

Every **[CSS](/en-US/docs/Web/CSS) module** represents a CSS specification that provides support for certain features and implementations in CSS. For example, the [CSS box model](/en-US/docs/Web/CSS/CSS_box_model) module represents the [specification](/en-US/docs/Web/CSS/CSS_box_model#specifications) that describes the margin and padding properties that let you create spacing in and around a CSS box.

A **CSS module landing page** provides an overview of the features that the module provides and lists all the properties, data types, CSS functions, and so on offered by the module. When possible, the CSS module landing page provides a quick demonstration of what can be achieved using the properties of the module through an interactive example.
The module landing page serves primarily as a _navigation_ page, but also functions as an at-a-glance _reference_ page for the module.

Some related properties and features that belong in other modules, but that are closely related to the functionality offered by the module you are documenting, can also be covered in a _Related concepts_ section.
For example, the `<easing-function>` data type and the `prefers-reduced-motion` media query are not covered in the CSS animations module, but because they are closely related with CSS animations, it is a good idea to highlight them in the [Related concepts](/en-US/docs/Web/CSS/CSS_animations#related_concepts) section of the CSS animations module landing page.

#### Examples

- [CSS animations](/en-US/docs/Web/CSS/CSS_animations)
- [CSS basic user interface](/en-US/docs/Web/CSS/CSS_basic_user_interface)
- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects)
- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap)

#### Templates

- [CSS module landing page template](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS feature reference page

A **CSS reference page** lists all the available syntax for a CSS feature such as a selector or property, and explains the feature's purpose and usage. It also provides examples, browser compatibility information, and other important data.

#### Examples

- [`background-color` property](/en-US/docs/Web/CSS/background-color)
- [`:hover` pseudo-class](/en-US/docs/Web/CSS/:hover)
- [`@media` at-rule](/en-US/docs/Web/CSS/@media)

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
