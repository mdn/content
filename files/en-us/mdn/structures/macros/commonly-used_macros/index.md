---
title: Commonly-used macros
slug: MDN/Structures/Macros/Commonly-used_macros
tags:
  - CSS
  - Macros
  - Reference
  - Structures
---
{{MDNSidebar}}

This page lists many of the general-purpose macros created for use on MDN.
For additional how-to information on using these macros, see [Using macros](/en-US/docs/MDN/Structures/Macros).

See [Other macros](/en-US/docs/MDN/Structures/Macros/Other) for information on macros that are infrequently used, are used only in special contexts, or are deprecated.

## Linking

MDN provides a number of link macros for easing the creation of links to reference pages, glossary entries, and other topics.

Link macros are recommended over normal HTML links because they are succint and translation-friendly.
For example a glossary or reference link created using a macro does not need to be translated: in other locales it will automatically link to the correct version of the file.

### Glossary links

The [`Glossary`](https://github.com/mdn/yari/tree/master/kumascript/macros/Glossary.ejs) macro creates a link to a specified term's entry in the MDN [glossary](/en-US/docs/Glossary).
This macro accepts one required parameter and one optional parameter:

1. The term's name (such as "HTML"): `\{{Glossary("HTML")}}` yields {{Glossary("HTML")}}
2. Optional: The text to display in the article instead of the term name: `\{{Glossary("CSS", "Cascading Style Sheets")}}` yields {{Glossary("CSS", "Cascading Style Sheets")}}

### Links to in-page sections

[`anch`](https://github.com/mdn/yari/tree/master/kumascript/macros/anch.ejs) - creates link to in-page section:

- `\{{anch("Linking to pages in references")}}`;
- Demo: {{anch("Linking to pages in references")}}

### Linking to pages in references

There are macros for locale-independent linking to pages in specific reference areas of MDN: Javascript, CSS, HTML elements, SVG etc.

The macros are easy to use.
Minimally all you need to do is specify the name of the item to link to in the first argument.
Most macros will also take a second argument allowing you to change the display text (documentation can be found at the links in the left-most column below).

<table class="standard-table">
  <thead>
    <tr>
      <th>Macro</th>
      <th>Links to page under</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/master/kumascript/macros/cssxref.ejs">CSSxRef</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/CSS/Reference">CSS Reference</a> (/Web/CSS/Reference)
      </td>
      <td>
        <code>\{{CSSxRef("cursor")}}</code> results in {{CSSxRef("cursor")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/master/kumascript/macros/DOMxRef.ejs">DOMxRef</a>
      </td>
      <td><a href="/en-US/docs/Web/API">DOM Reference</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("Document")}}</code> or <code>\{{DOMxRef("document")}}</code> results in {{DOMxRef("Document")}},<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> result in {{DOMxRef("document.getElementsByName()")}}<br />
        <code>\{{DOMxRef("Node")}}</code> result in {{DOMxRef("Node")}}.<br />
        You can change the display text using a second parameter: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> results in{{DOMxRef("document.getElementsByName()","getElementsByName()")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/master/kumascript/macros/HTMLElement.ejs">HTMLElement</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTML/Element">HTML Elements reference</a> (/Web/HTML/Element)
      </td>
      <td>
        <code>\{{HTMLElement("select")}}</code> results in {{HTMLElement("select")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/master/kumascript/macros/htmlattrxref.ejs"
          >HTMLAttrxRef</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTML/Global_attributes">HTML global attribute description</a>
        if you only specify the attribute name.<br />Attribute associated with a specific HTML element if you specify an attribute name and an element name.
      </td>
      <td>
        <code>\{{HTMLAttrxRef("lang")}} </code>links to the global attribute description {{HTMLAttrxRef("lang")}}.<br />
        <code>\{{HTMLAttrxRef("type","input")}}</code> result in a link to the {{htmlattrxref("type","input")}} attribute (on the {{HTMLElement("input")}} element).
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/master/kumascript/macros/jsxref.ejs">JSxRef</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference">JavaScript reference</a> (/Web/JavaScript/Reference).
      </td>
      <td>
        <code>\{{JSxRef("Promise")}}</code> results in {{JSxRef("Promise")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/master/kumascript/macros/SVGAttr.ejs">SVGAttr</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/SVG/Attribute">SVG attribute reference</a> (/Web/SVG/Attribute).
      </td>
      <td>
        <code>\{{SVGAttr("d")}}</code> results in {{SVGAttr("d")}}
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/yari/tree/master/kumascript/macros/SVGElement.ejs">SVGElement</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/SVG/Attribute">SVG Element reference</a> (/Web/SVG/Element).
      </td>
      <td>
        <code>\{{SVGElement("view")}}</code> results in {{SVGElement("view")}}
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="https://github.com/mdn/yari/tree/master/kumascript/macros/HTTPHeader.ejs">HTTPHeader</a></code>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTTP/Headers">HTTP headers</a> (/Web/HTTP/Headers).
      </td>
      <td>
        <code>\{{HTTPHeader("ACCEPT")}}</code> results in {{HTTPHeader("ACCEPT")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/master/kumascript/macros/HTTPMethod.ejs">HTTPMethod</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTTP/Methods">HTTP request methods</a> (/Web/HTTP/Methods).
      </td>
      <td>
        <code>\{{HTTPMethod("HEAD")}}</code> results in {{HTTPMethod("HEAD")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/master/kumascript/macros/HTTPStatus.ejs">HTTPStatus</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTTP/Status">HTTP response status codes</a> (/Web/HTTP/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> results in {{HTTPStatus("404")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/event.ejs">Event</a>.
      </td>
      <td>
        <a href="/en-US/docs/Web/Events">Events reference</a> (/Web/Events)
      </td>
      <td>
        <div class="note">
          <p>
            <strong>Note:</strong> This macro is not particularly useful because events are now under their associated DOM element.
            So to link to the wheel event you would use<code>\{{DOMxRef("Document.wheel_event")}}</code>:
            {{DOMxRef("Document.wheel_event")}}
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

### Linking to bugs

- Bugs

  - [`bug`](https://github.com/mdn/yari/tree/master/kumascript/macros/bug.ejs) allows you to link to a bug on bugzilla.mozilla.org easily using this syntax: `\{{Bug(123456)}}`.
    This gives you: {{Bug(123456)}}.
  - [`WebkitBug`](https://github.com/mdn/yari/tree/master/kumascript/macros/WebkitBug.ejs) inserts a link to a bug in the WebKit bug database.
    For example, `\{{WebkitBug(31277)}}` inserts {{WebkitBug(31277)}}.

### Navigation aids for multi-page guides

[`Previous`](https://github.com/mdn/yari/tree/master/kumascript/macros/Previous.ejs), [`Next`](https://github.com/mdn/yari/tree/master/kumascript/macros/Next.ejs), and [`PreviousNext`](https://github.com/mdn/yari/tree/master/kumascript/macros/PreviousNext.ejs) provide navigation controls for articles which are part of sequences.
For the single-way templates, the only parameter needed is the wiki location of the previous or next article in the sequence.
For [`PreviousNext`](https://github.com/mdn/yari/tree/master/kumascript/macros/PreviousNext.ejs), the two parameters needed are the wiki locations of the appropriate articles.
The first parameter is for the previous article and the second is for the next article.

## Code samples

### Live samples

- [`EmbedLiveSample`](https://github.com/mdn/yari/tree/master/kumascript/macros/EmbedLiveSample.ejs) lets you embed the output of a code sample on a page, as described in [Live samples](/en-US/docs/MDN/Structures/Live_samples).
- [`LiveSampleLink`](https://github.com/mdn/yari/tree/master/kumascript/macros/LiveSampleLink.ejs) creates a link to a page containing the output of a code sample on a page, as described in [Live samples](/en-US/docs/MDN/Structures/Live_samples).
- [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs) allows to embed live samples from GitHub pages.
  You can get more information at [GitHub live samples](/en-US/docs/MDN/Structures/Code_examples#github_live_samples).

## Sidebar generation

There are templates for almost every large collection of pages.
They typically link back to the main page of the reference/guide/tutorial (this is often needed because our breadcrumbs sometimes can't do this) and put the article in the appropriate category.

- [`CSSRef`](https://github.com/mdn/yari/tree/master/kumascript/macros/CSSRef.ejs) generates the sidebar for CSS reference pages.
- [`HTMLRef`](https://github.com/mdn/yari/tree/master/kumascript/macros/HTMLRef.ejs) generates the sidebar for HTML reference pages.
- [`APIRef`](https://github.com/mdn/yari/tree/master/kumascript/macros/APIRef.ejs) generates the sidebar for Web API reference pages.

## General-purpose formatting

### Inline indicators for API documentation

[`optional_inline`](https://github.com/mdn/yari/tree/master/kumascript/macros/optional_inline.ejs) and [`ReadOnlyInline`](https://github.com/mdn/yari/tree/master/kumascript/macros/ReadOnlyInline.ejs) are used in API documentation, usually when describing the list of properties of an object or parameters of a function.

Usage: `\{{Optional_Inline}}` or `\{{ReadOnlyInline}}`.
Example:

- `isCustomObject`{{ReadOnlyInline}}
  - : Indicates, if `true`, that the object is a custom one.
- `parameterX`{{Optional_Inline}}
  - : Blah blah blah...

## Status and compatibility indicators

### Inline indicators with no additional parameters

#### Non-standard

[`non-standard_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) inserts an in-line mark indicating the API has not been standardized and is not on a standards track.

##### Syntax

`\{{Non-standard_Inline}}`

##### Examples

- Icon: {{Non-standard_Inline}}

#### Experimental

[`experimental_inline`](https://github.com/mdn/yari/tree/master/kumascript/macros/experimental_inline.ejs) inserts an in-line mark indicating the API is not widely implemented and may change in the future.

##### Syntax

`\{{Experimental_Inline}}`

##### Examples

- Icon: {{Experimental_Inline}}

### Inline indicators that support specifying the technology

#### Deprecated

[`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) inserts an in-line deprecated mark ({{Deprecated_Inline}}) to discourage the use of an API that is officially deprecated (or has been removed).

##### Syntax

`\{{Deprecated_Inline}}`

##### Examples

- Icon: {{Deprecated_Inline}}

### Page or section header indicators

These templates have the same semantics as their inline counterparts described above.
The templates should be placed directly underneath the main page title (or breadcrumb navigation if available) in the reference page.
They can also be used to mark up a section on a page.

- [`non-standard_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Header.ejs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/yari/tree/master/kumascript/macros/SeeCompatTable.ejs) should be used on pages that document [experimental features](/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental).
  Example: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`secureContext_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/secureContext_header.ejs).
  Should be used on main pages like interface pages, API overview pages, and API entry points (e.g. `navigator.xyz`) but usually not on sub-pages like method and property pages.
  Example: `\{{SecureContext_Header}}` {{SecureContext_Header}}

### Indicating that a feature is available in web workers

The [`AvailableInWorkers`](https://github.com/mdn/yari/tree/master/kumascript/macros/AvailableInWorkers.ejs) macro inserts a localized note box indicating that a feature is available in a [Web worker](/en-US/docs/Web/API/Web_Workers_API) context.
You can use the argument `notservice` to indicate that a feature works in web workers except for service workers.

##### Syntax

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("notservice")}}
```

##### Examples

{{AvailableInWorkers}}
{{AvailableInWorkers("notservice")}}
