---
title: The page-type front matter key
slug: MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

The `page-type` front matter key describes the type of an MDN page.
This allows MDN content tools to better automate content checking and sidebar organization.

Like any other front matter key, the `page-type` key is specified in the YAML at the start of "index.md":

```md
---
title: 100 Continue
slug: Web/HTTP/Reference/Status/100
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.100
sidebar: httpsidebar
---
```

Each main area of the site — JavaScript, CSS, and so on — has a set of domain-specific `page-type` values, and there is also a set of generic values that can appear in any area of the site.

## Generic page types

These page types are not specific to a particular MDN technology area:

- `guide`: a generic guide with no specific structure.
- `landing-page`: an overview of the topic, section introduction, and navigation to key areas.
- `listing-page`: a brief description of the section and a list of subpages within that section.
- `how-to`: a goal-oriented how-to article.
- `tutorial`: an overview of a learning-oriented article.
- `tutorial-chapter`: a part of a multipart tutorial.

## Domain-specific page types

This section lists page types that are specific to a single area of MDN.

### Learning Area page types

This section lists `page-type` values for pages under [Learn](/en-US/docs/Learn_web_development). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the generic page type values.

- `learn-topic`: an overview of a topic, that is, a collection of modules like [_CSS_](/en-US/docs/Learn_web_development/Core/Styling_basics).
- `learn-module` an overview of a module, that is, an ordered collection of guides, like [_Structuring content with HTML_](/en-US/docs/Learn_web_development/Core/Structuring_content).
- `learn-module-chapter` a guide that is part of a module, like [_Mobile accessibility_](/en-US/docs/Learn_web_development/Core/Accessibility/Mobile).
- `learn-module-assessment` a special guide with an activity allowing to assess the comprehension of a module or a part of it, like [_Test your skills: basic controls_](/en-US/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Basic_controls).
- `learn-faq`: the answer to a specific question about web development, like [_What is a domain name?_](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name).

### Accessibility page types

This section lists `page-type` values for pages under [Web/Accessibility](/en-US/docs/Web/Accessibility). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

- `aria-role`: an ARIA [role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles), like [`section`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/section_role).
- `aria-attribute`: an ARIA [attribute](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes), like [`aria-sort`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort).

### CSS page types

This section lists `page-type` values for pages under [Web/CSS](/en-US/docs/Web/CSS). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

- `css-at-rule`: an [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule), like {{cssxref("@media")}}.
- `css-at-rule-descriptor`: an at-rule descriptor, like [`@counter-style/prefix`](/en-US/docs/Web/CSS/@counter-style/prefix).
- `css-combinator`: a combinator, like the [descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator).
- `css-function`: a [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), like {{cssxref("max")}}.
- `css-keyword`: a keyword, like {{cssxref("inherit")}}.
- `css-media-feature`: a [media feature](/en-US/docs/Web/CSS/@media#media_features), like [`hover`](/en-US/docs/Web/CSS/@media/hover).
- `css-module`: a module, like [CSS Animations](/en-US/docs/Web/CSS/CSS_animations).
- `css-property`: a property, like {{cssxref("background-color")}}.
- `css-pseudo-class`: a [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes), like {{cssxref(":enabled")}}.
- `css-pseudo-element`: a [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements), like {{cssxref("::before")}}.
- `css-selector`: a [basic selector](/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#basic_selectors), like the [class selector](/en-US/docs/Web/CSS/Class_selectors).
- `css-shorthand-property`: a [shorthand property](/en-US/docs/Web/CSS/CSS_cascade/Shorthand_properties), like {{cssxref("background")}}.
- `css-type`: a [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), like [`<color>`](/en-US/docs/Web/CSS/color_value).

### Glossary page types

This section lists `page-type` values for pages under [Glossary](/en-US/docs/Glossary). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below.

- `glossary-definition`: a page defining a term, like [Bézier curve](/en-US/docs/Glossary/Bezier_curve).
- `glossary-disambiguation`: a page providing links to two or more definition pages for an ambiguous term, like [Node](/en-US/docs/Glossary/Node).

### HTML page types

This section lists `page-type` values for pages under [Web/HTML](/en-US/docs/Web/HTML). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

- `html-attribute`: an HTML attribute, like [`autocomplete`](/en-US/docs/Web/HTML/Reference/Attributes/autocomplete).
- `html-attribute-value`: a single value for an HTML attribute, like [`dns-prefetch`](/en-US/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch).
- `html-element`: an HTML element, like [`<button>`](/en-US/docs/Web/HTML/Reference/Elements/button).

### HTTP page types

This section lists `page-type` values for pages under [Web/HTTP](/en-US/docs/Web/HTTP). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

- `http-csp-directive`: a [CSP](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) directive, like [`script-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).
- `http-cors-error`: a [CORS](/en-US/docs/Web/HTTP/Guides/CORS) error, like [`CORSDidNotSucceed`](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed).
- `http-permissions-policy-directive`: a [`Permissions-Policy`](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy) directive, like [`accelerometer`](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/accelerometer).
- `http-header`: an [HTTP header](/en-US/docs/Web/HTTP/Reference/Headers), like [`Referer`](/en-US/docs/Web/HTTP/Reference/Headers/Referer).
- `http-method`: an [HTTP request method](/en-US/docs/Web/HTTP/Reference/Methods) like [`GET`](/en-US/docs/Web/HTTP/Reference/Methods/GET).
- `http-status-code`: an [HTTP response status code](/en-US/docs/Web/HTTP/Reference/Status), like [`404`](/en-US/docs/Web/HTTP/Reference/Status/404).

### JavaScript page types

This section lists `page-type` values for pages under [Web/JavaScript](/en-US/docs/Web/JavaScript). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

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

### MathML page types

This section lists `page-type` values for pages under [Web/MathML](/en-US/docs/Web/MathML). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

- `mathml-attribute`: an MathML attribute, like [`mathcolor`](/en-US/docs/Web/MathML/Reference/Global_attributes/mathcolor).
- `mathml-element`: an HTML element, like [`<msqrt>`](/en-US/docs/Web/MathML/Reference/Element/msqrt).

### SVG page types

This section lists `page-type` values for pages under [Web/SVG](/en-US/docs/Web/SVG). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

- `svg-attribute`: an SVG attribute, like [`crossorigin`](/en-US/docs/Web/SVG/Reference/Attribute/crossorigin).
- `svg-element`: an SVG element, like [`<circle>`](/en-US/docs/Web/SVG/Reference/Element/circle).

### Web API page types

This section lists `page-type` values for pages under [Web/API](/en-US/docs/Web/API). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

- `web-api-overview`: gives an overview of a Web API, like the [Fetch API](/en-US/docs/Web/API/Fetch_API).
- `web-api-interface`: a Web API interface, like [`Request`](/en-US/docs/Web/API/Request).
- `web-api-constructor`: a constructor, like [`Request()`](/en-US/docs/Web/API/Request/Request).
- `web-api-instance-method`: an instance method, like [`cache.add()`](/en-US/docs/Web/API/Cache/add).
- `web-api-instance-property`: an instance property, like [`request.headers`](/en-US/docs/Web/API/Request/headers).
- `web-api-static-method`: a static method, like [`Response.error()`](/en-US/docs/Web/API/Response/error_static).
- `web-api-static-property`: a static property, like [`Notification.permission`](/en-US/docs/Web/API/Notification/permission_static).
- `web-api-event`: an event, like [`Notification.click`](/en-US/docs/Web/API/Notification/click_event).
- `webgl-extension`: a WebGL extension, like [`WEBGL_draw_buffers`](/en-US/docs/Web/API/WEBGL_draw_buffers).
- `webgl-extension-method`: a WebGL extension method, like [`OES_vertex_array_object.bindVertexArrayOES()`](/en-US/docs/Web/API/OES_vertex_array_object/bindVertexArrayOES).

### WebAssembly page types

This section lists `page-type` values for pages under [WebAssembly/](/en-US/docs/WebAssembly). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the generic page type values.

- `webassembly-function`: a global function, that is a method directly under the `WebAssembly` object that acts as a namespace, like [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- `webassembly-constructor`: a constructor, like [`WebAssembly.Exception()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception).
- `webassembly-interface`: a WebAssembly interface, like [`WebAssembly.LinkError`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/LinkError).
- `webassembly-instance-property`: an instance property, like [`WebAssembly.Instance.exports`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports).
- `webassembly-instance-method`: an instance method, like [`WebAssembly.Exception.getArg()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg).
- `webassembly-static-method`: a static method, like [`WebAssembly.Module.exports()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static).
- `webassembly-instruction`: an instruction, or a set of instructions, like [`Wrap`](/en-US/docs/WebAssembly/Reference/Numeric/Wrap).

### WebDriver page types

This section lists `page-type` values for pages under [Web/WebDriver](/en-US/docs/Web/WebDriver). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

- `webdriver-command`: a webdriver command, like [`CloseWindow`](/en-US/docs/Web/WebDriver/Reference/Commands/CloseWindow).
- `webdriver-capability`: a webdriver capability, like [`acceptInsecureCerts`](/en-US/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts).
- `webdriver-error`: a webdriver error, like [Insecure certificate](/en-US/docs/Web/WebDriver/Reference/Errors/InsecureCertificate).

### WebExtensions page types

This section lists `page-type` values for pages under [Mozilla/Add-ons/WebExtensions](/en-US/docs/Mozilla/Add-ons/WebExtensions). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

- `webextension-api`: a WebExtension API, like [`alarms`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms).
- `webextension-api-event`: a WebExtension API event, like [`action.onClicked`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/action/onClicked).
- `webextension-api-function`: a WebExtension function, like [`action.setBadgeText()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/action/setBadgeText).
- `webextension-api-property`: a WebExtension property, like [`browserSettings.openBookmarksInNewTabs`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs).
- `webextension-api-type`: a WebExtension type, like [`contextualIdentities.ContextualIdentity`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity).
- `webextension-manifest-key`: a WebExtension manifest key, like [`user_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts).

### Web Manifest page types

This section lists `page-type` values for pages under [Web/Manifest](/en-US/docs/Web/Progressive_web_apps/Manifest). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

- `web-manifest-member`: a member of a manifest, like [`description`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/description).

### XPath page types

This section lists `page-type` values for pages under [Web/XPath](/en-US/docs/Web/XML/XPath). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

- `xpath-function`: a function, like [`ceiling()`](/en-US/docs/Web/XML/XPath/Reference/Functions/ceiling)

### XSLT page types

This section lists `page-type` values for pages under [Web/XSLT](/en-US/docs/Web/XML/XSLT). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

- `xslt-element`: an element of XSLT, like [`<xsl:message>`](/en-US/docs/Web/XML/XSLT/Reference/Element/message).

### EXSLT page types

This section lists `page-type` values for pages under [Web/EXSLT](/en-US/docs/Web/XML/EXSLT). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

- `xslt-function`: a function of EXSLT, like [`exsl:node-set()`](/en-US/docs/Web/XML/EXSLT/Reference/exsl/node-set).

### Firefox page types

This section lists `page-type` values for pages under [Mozilla/Firefox](/en-US/docs/Mozilla/Firefox). Every page in that part of the tree must have a `page-type`, and its value must be one of those listed below or one of the [generic page type](#generic_page_types) values.

- `firefox-release-notes`: the release notes for a particular Firefox version, such as [_Firefox 115 for developers_](/en-US/docs/Mozilla/Firefox/Releases/115).
