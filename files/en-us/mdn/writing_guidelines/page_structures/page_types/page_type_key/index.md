---
title: The page-type front matter key
slug: MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---

{{MDNSidebar}}

The `page-type` front matter key describes the type of an MDN page.
This allows MDN content tools to better automate content checking and sidebar organization.

Like any other front matter key, the `page-type` key is specified in the YAML at the start of "index.md":

```md
---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
page-type: web-api-instance-method
browser-compat: api.Geolocation.getCurrentPosition
---
```

Each main area of the site — JavaScript, CSS, and so on — has a set of domain-specific `page-type` values, and there is also a set of generic values that can appear in any area of the site.

This project is a work in progress: so far we have only defined `page-type` values for [CSS](/en-US/docs/Web/CSS), [JavaScript](/en-US/docs/Web/JavaScript), and [Web API](/en-US/docs/Web/API).

## Generic page types

These page types are not specific to a particular MDN technology area:

- `guide`: a generic guide page with no specific structure. See [Conceptual page](#conceptual_page).
- `landing-page`: a page that acts primarily as a navigation aid, listing links to other pages. See [Landing page](#landing_page).

## Domain-specific page types

This section lists page types that are specific to a single area of MDN.

### CSS page types

This section lists `page-type` values for pages under [Web/CSS](/en-US/docs/Web/CSS). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the generic page type values.

- `css-at-rule`: an [at-rule](/en-US/docs/Web/CSS/At-rule), like {{cssxref("@charset")}}.
- `css-at-rule-descriptor`: an at-rule descriptor, like [`@counter-style/prefix`](/en-US/docs/Web/CSS/@counter-style/prefix).
- `css-combinator`: a combinator, like the [descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator).
- `css-function`: a [function](/en-US/docs/Web/CSS/CSS_Functions), like {{cssxref("max")}}.
- `css-keyword`: a keyword, like {{cssxref("inherit")}}.
- `css-media-feature`: a [media feature](/en-US/docs/Web/CSS/@media#media_features), like [`hover`](/en-US/docs/Web/CSS/@media/hover).
- `css-module`: a module, like [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations).
- `css-property`: a property, like {{cssxref("background-color")}}.
- `css-pseudo-class`: a [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes), like {{cssxref(":enabled")}}.
- `css-pseudo-element`: a [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements), like {{cssxref("::before")}}.
- `css-selector`: a [basic selector](/en-US/docs/Web/CSS/CSS_Selectors#basic_selectors), like the [class selector](/en-US/docs/Web/CSS/Class_selectors).
- `css-shorthand-property`: a [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties), like {{cssxref("background")}}.
- `css-type`: a [data type](/en-US/docs/Web/CSS/CSS_Types), like [`<color>`](/en-US/docs/Web/CSS/color_value).

### Glossary page types

This section lists `page-type` values for pages under [Glossary](/en-US/docs/Glossary). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below.

- `glossary-definition`: a page defining a term, like [Bézier curve](/en-US/docs/Glossary/Bezier_curve).
- `glossary-disambiguation`: a page providing links to two or more definition pages for an ambiguous term, like [Node](/en-US/docs/Glossary/Node).

### HTML page types

This section lists `page-type` values for pages under [Web/HTML](/en-US/docs/Web/HTML). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the generic page type values.

- `html-attribute`: an HTML attribute, like [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete).
- `html-attribute-value`: a single value for an HTML attribute, like [`dns-prefetch`](/en-US/docs/Web/HTML/Attributes/rel/dns-prefetch).
- `html-element`: an HTML element, like [`<button>`](/en-US/docs/Web/HTML/Element/button).

### JavaScript page types

This section lists `page-type` values for pages under [Web/JavaScript](/en-US/docs/Web/JavaScript). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the generic page type values.

- `javascript-class`: a definition of a built-in object, like [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `javascript-constructor`: an object constructor, like [`Array()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).
- `javascript-error`: an error, like [RangeError: invalid array length](/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length).
- `javascript-function`: a built-in function that isn't an object method, like [`encodeURI()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI).
- `javascript-global-property`: a global property like [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- `javascript-instance-accessor-property`: an accessor property on an object instance, like [`Map.prototype.size`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size).
- `javascript-instance-data-property`: a data property on an object instance, like the [`length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) property of `Array`.
- `javascript-instance-method`: a method on an object instance, like [`Array.prototype.at()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
- `javascript-language-feature`: a part of JavaScript syntax not fitting into another category, like [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
- `javascript-namespace`: an object that is not instantiable and has only static members, like [`Math`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).
- `javascript-operator`: an operator, like [Addition (+)](/en-US/docs/Web/JavaScript/Reference/Operators/Addition).
- `javascript-statement`: a statement, like [`switch`](/en-US/docs/Web/JavaScript/Reference/Statements/switch).
- `javascript-static-accessor-property`: a static accessor property, like [`RegExp.lastMatch`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch).
- `javascript-static-data-property`: a static data property, like [`Math.E`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E).
- `javascript-static-method`: a static method, like [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

### SVG page types

This section lists `page-type` values for pages under [Web/SVG](/en-US/docs/Web/SVG). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the generic page type values.

- `svg-attribute`: an SVG attribute, like [`crossorigin`](/en-US/docs/Web/SVG/Attribute/crossorigin).
- `svg-element`: an SVG element, like [`<circle>`](/en-US/docs/Web/SVG/Element/circle).

### Web API page types

This section lists `page-type` values for pages under [Web/API](/en-US/docs/Web/API). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the generic page type values.

- `web-api-overview`: gives an overview of a Web API, like the [Fetch API](/en-US/docs/Web/API/Fetch_API).
- `web-api-global-function`: a global function, like [`fetch()`](/en-US/docs/Web/API/fetch).
- `web-api-global-property`: a global property, like [`origin`](/en-US/docs/Web/API/origin).
- `web-api-interface`: a Web API interface, like [`Request`](/en-US/docs/Web/API/Request).
- `web-api-constructor`: a constructor, like [`Request()`](/en-US/docs/Web/API/Request/Request).
- `web-api-instance-method`: an instance method, like [`cache.add()`](/en-US/docs/Web/API/Cache/add).
- `web-api-instance-property`: an instance property, like [`request.headers`](/en-US/docs/Web/API/Request/headers).
- `web-api-static-method`: a static method, like [`Response.error()`](/en-US/docs/Web/API/Response/error).
- `web-api-static-property`: a static property, like [`Notification.permission`](/en-US/docs/Web/API/Notification/permission).
- `web-api-event`: an event, like [`Notification.click`](/en-US/docs/Web/API/Notification/click_event). See [API reference subpage](#api_reference_subpage).
- `webgl-extension`: a WebGL extension, like [`WEBGL_draw_buffers`](/en-US/docs/Web/API/WEBGL_draw_buffers).
- `webgl-extension-method`: a WebGL extension method, like [`OES_vertex_array_object.bindVertexArrayOES()`](/en-US/docs/Web/API/OES_vertex_array_object/bindVertexArrayOES).
