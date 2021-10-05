---
title: 'HTML attribute: rel'
slug: Web/HTML/Attributes/rel
tags:
  - Attribute
  - Attributes
  - Constraint validation
  - Link
  - form
  - rel
---

{{HTMLSidebar}}

The **`rel`** attribute defines the relationship between a linked resource and the current document. Valid on {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, and {{htmlelement('form')}}, the supported values depend on the element on which the attribute is found.

The type of relationships is given by the value of the `rel` attribute, which, if present, must have a value that is an unordered set of unique space-separated keywords. Differently from a `class` name, which does not express semantics, the `rel` attribute must express tokens that are semantically valid for both machines and humans. The current registries for the possible values of the `rel` attribute are the [IANA link relation registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml), the [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes), and the freely-editable [existing-rel-values page](https://microformats.org/wiki/existing-rel-values) in the microformats wiki, [as suggested](https://html.spec.whatwg.org/multipage/links.html#other-link-types) by the Living Standard. If a `rel` attribute not present in one of the three sources above is used some HTML validators (such as the [W3C Markup Validation Service](https://validator.w3.org/)) will generate a warning.

The following table lists some of the most important existing keywords. Every keyword within a space-separated value should be unique within that value.

| `rel` value                                                      | Description                                                                                                                                                                                                                                           | `{{htmlelement('link')}}` | `{{htmlelement('a')}}` and `{{htmlelement('area')}}` | `{{htmlelement('form')}}` |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ---------------------------------------------------- | ------------------------- |
| `{{anch("attr-alternate", "alternate")}}`                        | Alternate representations of the current document.                                                                                                                                                                                                    | Link                      | Link                                                 | Not allowed               |
| `{{anch("attr-author", "author")}}`                              | Author of the current document or article.                                                                                                                                                                                                            | Link                      | Link                                                 | Not allowed               |
| `{{anch("attr-bookmark", "bookmark")}}`                          | Permalink for the nearest ancestor section.                                                                                                                                                                                                           | Not allowed               | Link                                                 | Not allowed               |
| `{{anch("attr-canonical", "canonical")}}`                        | Preferred URL for the current document.                                                                                                                                                                                                               | Link                      | Not allowed                                          | Not allowed               |
| [`dns-prefetch`](/en-US/docs/Web/HTML/Link_types/dns-prefetch)   | Tells the browser to preemptively perform DNS resolution for the target resource's origin                                                                                                                                                             | External Resource         | Not allowed                                          | Not allowed               |
| `{{anch("attr-external", "external")}}`                          | The referenced document is not part of the same site as the current document.                                                                                                                                                                         | Not allowed               | Annotation                                           | Annotation                |
| `{{anch("attr-help", "help")}}`                                  | Link to context-sensitive help.                                                                                                                                                                                                                       | Link                      | Link                                                 | Link                      |
| `{{anch("attr-icon", "icon")}}`                                  | An icon representing the current document.                                                                                                                                                                                                            | External Resource         | Not allowed                                          | Not allowed               |
| `{{anch("attr-license", "license")}}`                            | Indicates that the main content of the current document is covered by the copyright license described by the referenced document.                                                                                                                     | Link                      | Link                                                 | Link                      |
| [`manifest`](/en-US/docs/Web/HTML/Link_types/manifest)           | Web app manifest                                                                                                                                                                                                                                      | Link                      | Not allowed                                          | Not allowed               |
| [`modulepreload`](/en-US/docs/Web/HTML/Link_types/modulepreload) | Tells to browser to preemptively fetch the script and store it in the document's module map for later evaluation. Optionally, the module's dependencies can be fetched as well.                                                                       | External Resource         | Not allowed                                          | Not allowed               |
| `{{anch("attr-next", "next")}}`                                  | Indicates that the current document is a part of a series and that the next document in the series is the referenced document.                                                                                                                        | Link                      | Link                                                 | Link                      |
| `{{anch("attr-nofollow", "nofollow")}}`                          | Indicates that the current document's original author or publisher does not endorse the referenced document.                                                                                                                                          | Not allowed               | Annotation                                           | Annotation                |
| [`noopener`](/en-US/docs/Web/HTML/Link_types/noopener)           | Creates a top-level browsing context that is not an auxiliary browsing context if the hyperlink would create either of those, to begin with (i.e., has an appropriate` target `attribute value).                                                      | Not allowed               | Annotation                                           | Annotation                |
| `{{anch("attr-noreferrer", "noreferrer")}}`                      | No `Referer` header will be included. Additionally, has the same effect as `noopener`.                                                                                                                                                                | Not allowed               | Annotation                                           | Annotation                |
| `{{anch("attr-opener", "opener")}}`                              | Creates an auxiliary browsing context if the hyperlink would otherwise create a top-level browsing context that is not an auxiliary browsing context (i.e., has "`_blank`" as `target` attribute value).                                              | Not allowed               | Annotation                                           | Annotation                |
| `{{anch("attr-pingback", "pingback")}}`                          | Gives the address of the pingback server that handles pingbacks to the current document.                                                                                                                                                              | External Resource         | Not allowed                                          | Not allowed               |
| [`preconnect`](/en-US/docs/Web/HTML/Link_types/preconnect)       | Specifies that the user agent should preemptively connect to the target resource's origin.                                                                                                                                                            | External Resource         | Not allowed                                          | Not allowed               |
| [`prefetch`](/en-US/docs/Web/HTML/Link_types/prefetch)           | Specifies that the user agent should preemptively fetch and cache the target resource as it is likely to be required for a followup navigation.                                                                                                       | External Resource         | Not allowed                                          | Not allowed               |
| [`preload`](/en-US/docs/Web/HTML/Link_types/preload)             | Specifies that the user agent must preemptively fetch and cache the target resource for current navigation according to the potential destination given by the [`as`](as) attribute (and the priority associated with the corresponding destination). | External Resource         | Not allowed                                          | Not allowed               |
| [`prerender`](/en-US/docs/Web/HTML/Link_types/prerender)         | Specifies that the user agent should preemptively fetch the target resource and process it in a way that helps deliver a faster response in the future.                                                                                               | External Resource         | Not allowed                                          | Not allowed               |
| `{{anch("attr-prev", "prev")}}`                                  | Indicates that the current document is a part of a series and that the previous document in the series is the referenced document.                                                                                                                    | Link                      | Link                                                 | Link                      |
| `{{anch("attr-search", "search")}}`                              | Gives a link to a resource that can be used to search through the current document and its related pages.                                                                                                                                             | Link                      | Link                                                 | Link                      |
| `{{anch("attr-stylesheet", "stylesheet")}}`                      | Imports a style sheet.                                                                                                                                                                                                                                | External Resource         | Not allowed                                          | Not allowed               |
| `{{anch("attr-tag", "tag")}}`                                    | Gives a tag (identified by the given address) that applies to the current document.                                                                                                                                                                   | Not allowed               | Link                                                 | Not allowed               |

The `rel` attribute is relevant to the {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, and {{htmlelement('form')}} elements, but some values only relevant to a subset of those elements. Like all HTML keyword attribute values, these values are case-insenstive.

The `rel` attribute has no default value. If the attribute is omitted or if none of the values in the attribute are supported, then the document has no particular relationship with the destination resource other than there being a hyperlink between the two. In this case, on {{htmlelement('link')}} and {{htmlelement('form')}}, if the `rel` attribute is absent, has no keywords, or if not one or more of the space-separated keywords above, then the element does not create any links. {{htmlelement('a')}} and {{htmlelement('area')}} will still created links, but without a defined relationship.

## Values

- {{htmlattrdef("alternate")}}

  - : Indicates an alternate representation of the current document. Valid for {{htmlelement('link')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, the meaning depends on the values of the other attributes.

    - With the `{{anch('stylesheet')}}` keyword on a `<link>`, it creates an alternate stylesheet.

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css">
      <!-- alternate style sheets -->
      <link rel="alternate stylesheet" href="highcontrast.css" title="High contrast">
      ```

    - With an [hreflang](hreflang) attribute that differs from the document language, it indicates a translation.
    - With the [type](type) attribute, it indicates that the referenced document is the same content in a different format. For example, with `type="application/rss+xml"` it creates a hyperlink referencing a syndication feed.

      ```html
      <link rel="alternate" type="application/atom+xml" href="posts.xml" title="Blog">
      ```

    - Both the [hreflang](hreflang) and [type](type) attributes specify links to versions of the document in an alternative format and language, intended for other media:

      ```html
      <link rel=alternate href="/fr/html/print" hreflang=fr type=text/html media=print title="French HTML (for printing)">
      <link rel=alternate href="/fr/pdf" hreflang=fr type=application/pdf title="French PDF">
      ```

    > **Note:** The obsolete `rev="made"` is treated as `rel="alternate"`

- {{htmlattrdef("author")}}
  - : Indicates the author of the current document or article. Relevant for {{htmlelement('link')}}, {{htmlelement('a')}}, and {{htmlelement('area')}} elements, the `author` keyword creates a hyperlink. With {{htmlelement('a')}} and {{htmlelement('area')}}, it indicates the linked document (or `mailto:`) provides information about the author of the nearest {{htmlelement('article')}} ancestor if there is one, otherwise the entire document. For {{htmlelement('link')}}, it represents the author of the entire document.
- {{htmlattrdef("bookmark")}}
  - : Relevant as the `rel` attribute value for the {{htmlelement('a')}} and {{htmlelement('area')}} elements, the bookmark provides a permalink for ancestor section, which is the nearest ancestor {{htmlelement('article')}} or {{htmlelement('section')}}, if there is at least one, otherwise, the nearest heading sibling or ancestor descendant, to the next..
- {{htmlattrdef("canonical")}}
  - : Valid for {{htmlelement('link')}}, it defines the preferred URL for the current document, which is useful for search engines.
- {{htmlattrdef("dns-prefetch")}}
  - : Relevant for the {{htmlelement('link')}} element both in the {{htmlelement('body')}} and {{htmlelement('head')}}, it tells the browser to preemptively perform DNS resolution for the target resource's origin. Useful for resources the user will likely need, it helps reduce latency and thereby improves performance when the user does access the resources as the browser preemptively performed DNS resolution for the origin of the specified resource. See [dns-prefetch](/en-US/docs/Web/Performance/dns-prefetch) described in [resource hints]().
- {{htmlattrdef("external")}}
  - : Relevant to {{htmlelement('form')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, it indicates the referenced document is not part of the current site. This can be used with attribute selectors to style external links in a way that indicates to the user that they will be leaving the current site.
- {{htmlattrdef("help")}}
  - : Relevant to {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, the `help` keyword indicates that the linked to content provides context-sensitive help, providing information for the parent of the element defining the hyperlink, and its children. When used within `<link>`, the help is for the whole document. When included with {{htmlelement('a')}} and {{htmlelement('area')}} and supported, the default {{cssxref('cursor')}} will be `help` instead of `pointer`.
- {{htmlattrdef("icon")}}

  - : **Note:** Valid with {{htmlelement('link')}}, the linked resource represents the icon, a resource for representing the page in the user interface, for the current document.

    The most common use for the `icon` value is the favicon:

    ```html
    <link rel="icon" href="favicon.ico">
    ```

    If there are multiple `<link rel="icon">`s, the browser uses their [`media`](media) attribute, [`type`](type), and [`sizes`](sizes) attributes to select the most appropriate icon. If several icons are equally appropriate, the last one is used. If the most appropriate icon is later found to be inappropriate, for example because it uses an unsupported format, the browser proceeds to the next-most appropriate, and so on.

    > **Note:** Prior to Firefox 83 the [crossorigin](/en-US/docs/Web/HTML/Attributes/crossorigin) attribute was not supported for `rel="icon"` there is also [an open issue for Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=1121645).

    **Note:** Apple's iOS does not use this link type, nor the [`sizes`](sizes) attribute, like others mobile browsers do, to select a webpage icon for Web Clip or a start-up placeholder. Instead it uses the non-standard [`apple-touch-icon`](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) and [`apple-touch-startup-image`](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) respectively.

    > **Note:** The `shortcut` link type is often seen before `icon`, but this link type is non-conforming, ignored and **web authors must not use it anymore**.

- {{htmlattrdef("license")}}

  - : **Note:** Valid on the {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}} elements, the `license` value indicates that the hyperlink leads to a document describing the licensing information; that the main content of the current document is covered by the copyright license described by the referenced document. If not inside the {{HTMLElement("head")}} element, the standard doesn't distinguish between a hyperlink applying to a specific part of the document or to the document as a whole. Only the data on the page can indicate this.

    ```html
    <link rel="license" href="#license">
    ```

    **Note:** Although recognized, the synonym `copyright` is incorrect and must be avoided.

- {{htmlattrdef("manifest")}}
  - : [Web app manifest](/en-US/docs/Web/Manifest). Requires the use of the CORS protocol for cross-origin fetching.
- {{htmlattrdef("modulepreload")}}
  - : Useful for improved performance, and relevant to the {{htmlelement('link')}} anywhere in the document, setting `rel="modulepreload"` tells the browser to preemptively fetch the script (and dependencies) and store it in the document's module map for later evaluation. `modulepreload` links can ensure network fetching is done with the module ready (but not evaluated) in the module map before it is necessarily needed. See also [link types: `modulepreload`](/en-US/docs/Web/HTML/Link_types/modulepreload).
- {{htmlattrdef("next")}}
  - : Relevant to {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, the `next` values indicates that the current document is a part of a series, and that the next document in the series is the referenced document. When included in a `<link>`, browsers may assume that document will be fetched next, and treat it as a resource hint.
- {{htmlattrdef("nofollow")}}
  - : Relevant to {{htmlelement('form')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, the `nofollow` keyword tells search engine spiders to ignore the link relationship. The nofollow relationship may indicate the current document's owner does not endorse the referenced document. It is often included by Search Engine Optimizers pretending their link farms are not spam pages.
- {{htmlattrdef("noopener")}}

  - : Relevant to {{htmlelement('form')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, creates a top-level browsing context that is not an auxiliary browsing context if the hyperlink would create either of those to begin with (i.e., has an appropriate` target `attribute value). In other words, it makes the link behave as if [`window.opener`](/en-US/docs/Web/API/Window/opener) were null and `target="_parent"` were set.

    This is the opposite of {{anch("opener")}}.

- {{htmlattrdef("noreferrer")}}
  - : Relevant to {{htmlelement('form')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, including this value makes the referrer unknown (no `Referer` header will be included), and creates a top-level browsing context as if `noopener` were also set.
- {{htmlattrdef("opener")}}
  - : Creates an auxiliary browsing context if the hyperlink would otherwise create a top-level browsing context that is not anauxiliary browsing context (i.e., has "`_blank`" as `target` attribute value). Effectively, the opposite of {{anch("noopener")}}.
- {{htmlattrdef("pingback")}}
  - : Gives the address of the pingback server that handles pingbacks to the current document.
- {{htmlattrdef("preconnect")}}
  - : Specifies that the user agent should preemptively connect to the target resource's origin.
- {{htmlattrdef("prefetch")}}
  - : Specifies that the user agent should preemptively fetch and cache the target resource as it is likely to be required for a followup navigation.
- {{htmlattrdef("preload")}}
  - : Specifies that the user agent must preemptively fetch and cache the target resource for current navigation according to the potential destination given by the [`as`](as) attribute (and the priority associated with the corresponding destination).
- {{htmlattrdef("prerender")}}
  - : Specifies that the user agent should preemptively fetch the target resource and process it in a way that helps deliver a faster response in the future.
- {{htmlattrdef("prev")}}

  - : Similar to the {{anch("next")}} keyword, relevant to {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, the `prev` values indicates that the current document is a part of a series, and that the link references a previous document in the series is the referenced document.

    Note: The synonym `previous` is incorrect and should not be used.

- {{htmlattrdef("search")}}

  - : Relevant to {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, and {{htmlelement('area')}} elements, the `search` keywords indicates that the hyperlink references a document whose interface is specially designed for searching in the current document, site, and related resources, providing a link to a resource that can be used to search.

    If the [`type`](type) attribute is set to `application/opensearchdescription+xml` the resource is an [OpenSearch](/en-US/docs/Web/OpenSearch) plugin that can be easily added to the interface of some browsers like Firefox or Internet Explorer.

- {{htmlattrdef("stylesheet")}}

  - : Valid for the {{htmlelement('link')}} element, it imports an external resource to be used as a stylesheet. The [`type`](type) attribute is not needed as it's a `text/css` stylesheet, as that is the default value. If it's not a stylesheet of type `text/css` it is best to declare the type.

    While this attribute defines the link as being a stylesheet, the interaction with other attributes and other key terms within the rel value impact whether the stylesheet is downloaded and/or used.

    When used with the {{anch('alternate')}} keyword, it defines an alternative style sheet. In this case, include a non-empty [`title`](type).

    The external stylesheet will not be used or even downloaded if the media does not match the value of the [`media`](media) attribute.

    Requires the use of the CORS protocol for cross-origin fetching.

- {{htmlattrdef("tag")}}
  - : Valid for the {{htmlelement('a')}}, and {{htmlelement('area')}} elements, it gives a tag (identified by the given address) that applies to the current document. The tag value denotes that the link refers to a document describing a tag applying to the document on which it is located. This link type is not meant for tags within a tag cloud, as those tags apply to a group of pages, whereas the `tag` value of the `rel` attribute is for a single document.

### Non-standard values

- {{htmlattrdef("apple-touch-icon")}}
  - : Specifies the icon for a web application on an iOS device.

## Browser compatibility

{{Compat("html.elements.attributes.rel")}}

## Specifications

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('HTML WHATWG', 'links.html#linkTypes', 'rel attribute')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td>
        Added <code>opener</code>. Made <code>noopener</code> default for
        <code>target="_blank"</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('HTML5 W3C', 'links.html#linkTypes', 'rel attribute')}}
      </td>
      <td>{{Spec2('HTML5 W3C')}}</td>
      <td>
        Added <code>tag</code>, <code>search</code>, <code>prefetch</code>,
        <code>noreferrer</code>, <code>nofollow</code>, <code>icon</code>, and
        <code>author</code>.<br />Renamed <code>copyright</code> to
        <code>license</code>.<br />Removed <code>start</code>,
        <code>chapter</code>, <code>section</code>, <code>subsection</code>, and
        <code>appendix</code>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("Preload", "#x2.link-type-preload", "preload")}}
      </td>
      <td>{{Spec2("Preload")}}</td>
      <td>Added <code>preload</code>.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("Resource Hints", "#dfn-preconnect", "preconnect")}}
      </td>
      <td>{{Spec2("Resource Hints")}}</td>
      <td>
        Added <code>dns-prefetch</code>, <code>preconnect</code>, and
        <code>prerender</code> values.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("HTML4.01", "types.html#type-links", "link types")}}
      </td>
      <td>{{Spec2("HTML4.01")}}</td>
      <td>
        Added <code>alternate</code>, <code>stylesheet</code>,
        <code>start</code>, <code>chapter</code>, <code>section</code>,
        <code>subsection</code>, <code>appendix</code>, and
        <code>bookmark</code>.<br />Renamed <code>previous</code> to
        <code>prev</code>.<br />Removed <code>top</code>, and
        <code>search</code>.
      </td>
    </tr>
    <tr>
      <td>{{SpecName("HTML3.2", "#link", "&lt;link&gt;")}}</td>
      <td><p>{{Spec2("HTML3.2")}} (Obsolete)</p></td>
      <td>
        Added <code>top</code>, <code>contents</code>, <code>index</code>,
        <code>glossary</code>, <code>copyright</code>, <code>next</code>,
        <code>previous</code>, <code>help</code>, and <code>search</code>.
      </td>
    </tr>
    <tr>
      <td>{{RFC(1866, "HTML 2.0")}}</td>
      <td>{{Spec2("HTML2.0")}} (Obsolete)</td>
      <td>Initial definition.</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat("html.elements.link.rel")}}

## Accessibility concerns

## See also

- {{domxref("HTMLLinkElement.relList")}}
- {{domxref("HTMLAnchorElement.relList")}}
- {{domxref("HTMLAreaElement.relList")}}
