---
title: <meta> name attribute
short-title: <meta> name
slug: Web/HTML/Reference/Elements/meta/name
page-type: html-attribute
browser-compat: html.elements.meta.name
---

{{HTMLSidebar}}

The **`name`** attribute of the {{htmlelement("meta")}} element provides metadata in name-value pairs.
When a `<meta>` element has a `name` attribute, a [`content`](/en-US/docs/Web/HTML/Reference/Attributes/content) attribute defines the corresponding value.
The metadata is _document-level metadata_ that applies to the whole page.

For example, the following `<meta>` tag provides a `description` as metadata for a document:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

## Value

### Meta names defined in the HTML specification

The HTML specification defines the following set of standard metadata names:

- `application-name`
  - : Browsers may use this to identify the application running in the web page.
    It is different from the {{HTMLElement("title")}} element, which may contain an application (or website) name, but a `<title>` may add contextual information like a document name or a status.
    Individual pages shouldn't define their own, unique `application-name`.
    To provide translations, use multiple `<meta>` tags with the `lang` attribute for each language:

    ```html
    <meta name="application-name" content="Weather Wizard" lang="en" />
    <meta name="application-name" content="Mago del Clima" lang="es" />
    ```

- `author`
  - : The document author's name.
- [`color-scheme`](/en-US/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
  - : Specifies one or more color schemes with which the document is compatible.
    The browser will use this information in tandem with the user's browser or device settings to determine what colors to use for everything from background and foregrounds to form controls and scrollbars.
    The primary use for `<meta name="color-scheme">` is to indicate compatibility and order of preference for light and dark color modes.
- `description`
  - : A short and accurate summary of the content of the page usually referred to as a "meta description".
    Search engines like Google use this metadata to adjust [the appearance of a webpage in search](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) results.
- `generator`
  - : The identifier of the software that generated the page.
- `keywords`
  - : Words relevant to the page's content separated by commas.
- [`referrer`](/en-US/docs/Web/HTML/Reference/Elements/meta/name/referrer)
  - : Controls the HTTP {{httpheader("Referer")}} header of requests sent from the document.
- [`theme-color`](/en-US/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
  - : Indicates a suggested color that user agents should use to customize the display of the page or of the surrounding user interface.
    The [`content`](/en-US/docs/Web/HTML/Reference/Attributes/content) attribute contains a valid CSS {{cssxref("&lt;color&gt;")}}.
    The [`media`](/en-US/docs/Web/HTML/Reference/Elements/meta#media) attribute with a valid media query list can be included to set the media that the theme color metadata applies to.

### Meta names defined in other specifications

The CSS Device Adaptation specification defines the following metadata name:

- [`viewport`](/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport)
  - : Gives hints about the size of the initial size of the {{glossary("viewport")}}.

### Meta names defined in the WHATWG MetaExtensions wiki

The [WHATWG Wiki MetaExtensions page](https://wiki.whatwg.org/wiki/MetaExtensions) contains a large set of non-standard metadata names.
Some of the names included are used quite commonly in practice, notably the following:

- `creator`
  - : The name of the creator of the document, such as an organization or institution.
    If there are more than one, several {{HTMLElement("meta")}} elements should be used.
- `googlebot`
  - : A synonym of `robots`, is only followed by Googlebot (the indexing crawler for Google).
- `publisher`
  - : The document publisher's name.
- [`robots`](/en-US/docs/Web/HTML/Reference/Elements/meta/name/robots)
  - : A comma-separated list of values defining the crawl behavior that cooperative crawlers (or "robots") should use with the page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Viewport `<meta>` tag](/en-US/docs/Web/HTML/Guides/Viewport_meta_element)
- [Metadata: the `<meta>` element](/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
