---
title: "HTML attribute: rel"
slug: Web/HTML/Attributes/rel
page-type: html-attribute
browser-compat:
  - html.elements.link.rel
  - html.elements.a.rel
  - html.elements.area.rel
  - html.elements.form.rel
---

{{HTMLSidebar}}

The **`rel`** attribute defines the relationship between a linked resource and the current document. Valid on {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, and {{htmlelement('form')}}, the supported values depend on the element on which the attribute is found.

The type of relationships is given by the value of the `rel` attribute, which, if present, must have a value that is an unordered set of unique space-separated keywords. Differently from a `class` name, which does not express semantics, the `rel` attribute must express tokens that are semantically valid for both machines and humans. The current registries for the possible values of the `rel` attribute are the [IANA link relation registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml), the [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes), and the freely-editable [existing-rel-values page](https://microformats.org/wiki/existing-rel-values) in the microformats wiki, [as suggested](https://html.spec.whatwg.org/multipage/links.html#other-link-types) by the Living Standard. If a `rel` attribute not present in one of the three sources above is used some HTML validators (such as the [W3C Markup Validation Service](https://validator.w3.org/)) will generate a warning.

The following table lists some of the most important existing keywords. Every keyword within a space-separated value should be unique within that value.

| `rel` value                                                          | Description                                                                                                                                                                                                                                                                             | {{htmlelement('link')}} | {{htmlelement('a')}} and {{htmlelement('area')}} | {{htmlelement('form')}} |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                            | Alternate representations of the current document.                                                                                                                                                                                                                                      | Link                    | Link                                             | Not allowed             |
| [`author`](#author)                                                  | Author of the current document or article.                                                                                                                                                                                                                                              | Link                    | Link                                             | Not allowed             |
| [`bookmark`](#bookmark)                                              | Permalink for the nearest ancestor section.                                                                                                                                                                                                                                             | Not allowed             | Link                                             | Not allowed             |
| [`canonical`](#canonical)                                            | Preferred URL for the current document.                                                                                                                                                                                                                                                 | Link                    | Not allowed                                      | Not allowed             |
| [`dns-prefetch`](/en-US/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Tells the browser to preemptively perform DNS resolution for the target resource's origin.                                                                                                                                                                                              | External Resource       | Not allowed                                      | Not allowed             |
| [`external`](#external)                                              | The referenced document is not part of the same site as the current document.                                                                                                                                                                                                           | Not allowed             | Annotation                                       | Annotation              |
| [`expect`](#expect)                                                  | Allows the page to be [render-blocked](/en-US/docs/Glossary/Render_blocking) until the essential parts of the document are parsed so it will render consistently.                                                                                                                       | Link                    | Not allowed                                      | Not allowed             |
| [`help`](#help)                                                      | Link to context-sensitive help.                                                                                                                                                                                                                                                         | Link                    | Link                                             | Link                    |
| [`icon`](#icon)                                                      | An icon representing the current document.                                                                                                                                                                                                                                              | External Resource       | Not allowed                                      | Not allowed             |
| [`license`](#license)                                                | Indicates that the main content of the current document is covered by the copyright license described by the referenced document.                                                                                                                                                       | Link                    | Link                                             | Link                    |
| [`manifest`](/en-US/docs/Web/HTML/Attributes/rel/manifest)           | Web app manifest.                                                                                                                                                                                                                                                                       | Link                    | Not allowed                                      | Not allowed             |
| [`me`](/en-US/docs/Web/HTML/Attributes/rel/me)                       | Indicates that the current document represents the person who owns the linked content.                                                                                                                                                                                                  | Link                    | Link                                             | Not allowed             |
| [`modulepreload`](/en-US/docs/Web/HTML/Attributes/rel/modulepreload) | Tells to browser to preemptively fetch the script and store it in the document's module map for later evaluation. Optionally, the module's dependencies can be fetched as well.                                                                                                         | External Resource       | Not allowed                                      | Not allowed             |
| [`next`](#next)                                                      | Indicates that the current document is a part of a series and that the next document in the series is the referenced document.                                                                                                                                                          | Link                    | Link                                             | Link                    |
| [`nofollow`](#nofollow)                                              | Indicates that the current document's original author or publisher does not endorse the referenced document.                                                                                                                                                                            | Not allowed             | Annotation                                       | Annotation              |
| [`noopener`](/en-US/docs/Web/HTML/Attributes/rel/noopener)           | Creates a top-level browsing context that is not an auxiliary browsing context if the hyperlink would create either of those, to begin with (i.e., has an appropriate `target` attribute value).                                                                                        | Not allowed             | Annotation                                       | Annotation              |
| [`noreferrer`](/en-US/docs/Web/HTML/Attributes/rel/noreferrer)       | No `Referer` header will be included. Additionally, has the same effect as `noopener`.                                                                                                                                                                                                  | Not allowed             | Annotation                                       | Annotation              |
| [`opener`](#opener)                                                  | Creates an auxiliary browsing context if the hyperlink would otherwise create a top-level browsing context that is not an auxiliary browsing context (i.e., has "`_blank`" as `target` attribute value).                                                                                | Not allowed             | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                              | Gives the address of the pingback server that handles pingbacks to the current document.                                                                                                                                                                                                | External Resource       | Not allowed                                      | Not allowed             |
| [`preconnect`](/en-US/docs/Web/HTML/Attributes/rel/preconnect)       | Specifies that the user agent should preemptively connect to the target resource's origin.                                                                                                                                                                                              | External Resource       | Not allowed                                      | Not allowed             |
| [`prefetch`](/en-US/docs/Web/HTML/Attributes/rel/prefetch)           | Specifies that the user agent should preemptively fetch and cache the target resource as it is likely to be required for a followup navigation.                                                                                                                                         | External Resource       | Not allowed                                      | Not allowed             |
| [`preload`](/en-US/docs/Web/HTML/Attributes/rel/preload)             | Specifies that the user agent must preemptively fetch and cache the target resource for current navigation according to the potential destination given by the [`as`](/en-US/docs/Web/HTML/Element/link#as) attribute (and the priority associated with the corresponding destination). | External Resource       | Not allowed                                      | Not allowed             |
| [`prerender`](/en-US/docs/Web/HTML/Attributes/rel/prerender)         | Specifies that the user agent should preemptively fetch the target resource and process it in a way that helps deliver a faster response in the future.                                                                                                                                 | External Resource       | Not allowed                                      | Not allowed             |
| [`prev`](#prev)                                                      | Indicates that the current document is a part of a series and that the previous document in the series is the referenced document.                                                                                                                                                      | Link                    | Link                                             | Link                    |
| [`privacy-policy`](#privacy-policy)                                  | Gives a link to a information about the data collection and usage practices that apply to the current document.                                                                                                                                                                         | Link                    | Link                                             | Not allowed             |
| [`search`](#search)                                                  | Gives a link to a resource that can be used to search through the current document and its related pages.                                                                                                                                                                               | Link                    | Link                                             | Link                    |
| [`stylesheet`](#stylesheet)                                          | Imports a style sheet.                                                                                                                                                                                                                                                                  | External Resource       | Not allowed                                      | Not allowed             |
| [`tag`](#tag)                                                        | Gives a tag (identified by the given address) that applies to the current document.                                                                                                                                                                                                     | Not allowed             | Link                                             | Not allowed             |
| [`terms-of-service`](#terms-of-service)                              | Link to the agreement, or terms of service, between the document's provider and users who wish to use the document.                                                                                                                                                                     | Link                    | Link                                             | Not allowed             |

The `rel` attribute is relevant to the {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}}, and {{htmlelement('form')}} elements, but some values only relevant to a subset of those elements. Like all HTML keyword attribute values, these values are case-insensitive.

The `rel` attribute has no default value. If the attribute is omitted or if none of the values in the attribute are supported, then the document has no particular relationship with the destination resource other than there being a hyperlink between the two. In this case, on {{htmlelement('link')}} and {{htmlelement('form')}}, if the `rel` attribute is absent, has no keywords, or if not one or more of the space-separated keywords above, then the element does not create any links. {{htmlelement('a')}} and {{htmlelement('area')}} will still created links, but without a defined relationship.

## Values

- `alternate`

  - : Indicates an alternate representation of the current document. Valid for {{htmlelement('link')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, the meaning depends on the values of the other attributes.

    - With the [`stylesheet`](#stylesheet) keyword on a `<link>`, it creates an [alternate stylesheet](/en-US/docs/Web/CSS/Alternative_style_sheets).

      ```html
      <!-- a persistent style sheet -->
      <link rel="stylesheet" href="default.css" />
      <!-- alternate style sheets -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - With an [`hreflang`](/en-US/docs/Web/HTML/Element/link#hreflang) attribute that differs from the document language, it indicates a translation.
    - With the [`type`](/en-US/docs/Web/HTML/Element/link#type) attribute value of `"application/rss+xml"`or `"application/atom+xml"`, it creates a hyperlink referencing a syndication feed.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Otherwise, it creates a hyperlink referencing an alternate representation of the current document, whose nature is given by the [`hreflang`](/en-US/docs/Web/HTML/Element/link#hreflang) and [`type`](/en-US/docs/Web/HTML/Element/link#type) attributes.

      - If `hreflang` is given alongside `alternate`, and the value of `hreflang` is different from the current document's language, it indicates that the referenced document is a translation.
      - If `type` is given alongside `alternate`, it indicates that the referenced document is an alternative format (such as a PDF).
      - The `hreflang` and `type` attributes may both be given alongside `alternate`.

      ```html
      <link
        rel="alternate"
        href="/fr/html/print"
        hreflang="fr"
        type="text/html"
        media="print"
        title="French HTML (for printing)" />
      <link
        rel="alternate"
        href="/fr/pdf"
        hreflang="fr"
        type="application/pdf"
        title="French PDF" />
      ```

- `author`

  - : Indicates the referenced document provides further information about the author of the current document or article. Relevant for {{htmlelement('link')}}, {{htmlelement('a')}}, and {{htmlelement('area')}} elements.

    With {{htmlelement('a')}} and {{htmlelement('area')}}, it indicates the linked document (or `mailto:`) provides information about the author of the nearest {{htmlelement('article')}} ancestor if there is one, otherwise the entire document.

    With {{htmlelement('link')}}, it represents the author of the entire document.

    > **Note:** For historical reasons, the obsolete attribute value `rev="made"` is treated as `rel="author"`.

- `bookmark`
  - : Relevant as the `rel` attribute value for the {{htmlelement('a')}} and {{htmlelement('area')}} elements. Gives a permalink for the nearest ancestor {{htmlelement('article')}} element, if there is one. If there is no ancestor `<article>` element, gives a permalink for the section the linking element is most closely associated with.
- `canonical`
  - : Valid for {{htmlelement('link')}}, it defines the preferred URL for the current document, which helps search engines reduce duplicate content.
- `dns-prefetch`
  - : Relevant for the {{htmlelement('link')}} element both in the {{htmlelement('body')}} and {{htmlelement('head')}}, it tells the browser to preemptively perform DNS resolution for the target resource's origin. Useful for resources the user will likely need, it helps reduce latency and thereby improves performance when the user does access the resources as the browser preemptively performed DNS resolution for the origin of the specified resource. See [dns-prefetch](/en-US/docs/Web/Performance/dns-prefetch) described in [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevant to {{htmlelement('form')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, it indicates the referenced document is not part of the current site. This can be used with attribute selectors to style external links in a way that indicates to the user that they will be leaving the current site.
- `expect` {{experimental_inline}}

  - : Allows the page to be [render-blocked](/en-US/docs/Glossary/Render_blocking) until the essential parts of the document are parsed so it will render consistently. Note that render-blocking occurs only when supplemented with the [`blocking="render"`](/en-US/docs/Web/HTML/Element/link#blocking) attribute.

    > **Note:** See [Stabilizing page state to make cross-document transitions consistent](/en-US/docs/Web/API/View_Transitions_API/Using#stabilizing_page_state_to_make_cross-document_transitions_consistent) for more information on its use.

- `help`
  - : Relevant to {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, the `help` keyword indicates that the linked to content provides context-sensitive help, providing information for the parent of the element defining the hyperlink, and its children. When used within `<link>`, the help is for the whole document. When included with {{htmlelement('a')}} and {{htmlelement('area')}} and supported, the default {{cssxref('cursor')}} will be `help` instead of `pointer`.
- `icon`

  - : Valid with {{htmlelement('link')}}, the linked resource represents the icon, a resource for representing the page in the user interface, for the current document.

    The most common use for the `icon` value is the favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    If there are multiple `<link rel="icon">`s, the browser uses their [`media`](/en-US/docs/Web/HTML/Element/link#media), [`type`](/en-US/docs/Web/HTML/Element/link#type), and [`sizes`](/en-US/docs/Web/HTML/Element/link#sizes) attributes to select the most appropriate icon. If several icons are equally appropriate, the last one is used. If the most appropriate icon is later found to be inappropriate, for example because it uses an unsupported format, the browser proceeds to the next-most appropriate, and so on.

    > **Note:** The [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin) attribute is not supported for `rel="icon"` in Chromium-based browsers. See the [open Chromium issue](https://crbug.com/1121645).

    > **Note:** Apple's iOS does not use this link type, nor the [`sizes`](/en-US/docs/Web/HTML/Element/link#sizes) attribute, like others mobile browsers do, to select a webpage icon for Web Clip or a start-up placeholder.
    > Instead it uses the non-standard [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) and [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) respectively.

    > **Note:** The `shortcut` link type is often seen before `icon`, but this link type is non-conforming, ignored and **web authors must not use it anymore**.

- `license`

  - : Valid on the {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}} elements, the `license` value indicates that the hyperlink leads to a document describing the licensing information; that the main content of the current document is covered by the copyright license described by the referenced document. If not inside the {{HTMLElement("head")}} element, the standard doesn't distinguish between a hyperlink applying to a specific part of the document or to the document as a whole. Only the data on the page can indicate this.

    ```html
    <link rel="license" href="#license" />
    ```

    > **Note:** Although recognized, the synonym `copyright` is incorrect and must be avoided.

- `manifest`
  - : [Web app manifest](/en-US/docs/Web/Manifest). Requires the use of the CORS protocol for cross-origin fetching.
- `modulepreload`
  - : Useful for improved performance, and relevant to the {{htmlelement('link')}} anywhere in the document, setting `rel="modulepreload"` tells the browser to preemptively fetch the script (and dependencies) and store it in the document's module map for later evaluation. `modulepreload` links can ensure network fetching is done with the module ready (but not evaluated) in the module map before it is necessarily needed. See also [`modulepreload`](/en-US/docs/Web/HTML/Attributes/rel/modulepreload).
- `next`
  - : Relevant to {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, the `next` values indicates that the current document is a part of a series, and that the next document in the series is the referenced document. When included in a `<link>`, browsers may assume that document will be fetched next, and treat it as a resource hint.
- `nofollow`
  - : Relevant to {{htmlelement('form')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, the `nofollow` keyword tells search engine spiders to ignore the link relationship. The nofollow relationship may indicate the current document's owner does not endorse the referenced document. It is often included by Search Engine Optimizers pretending their link farms are not spam pages.
- `noopener`

  - : Relevant to {{htmlelement('form')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, creates a top-level browsing context that is not an auxiliary browsing context if the hyperlink would create either of those to begin with (i.e., has an appropriate `target` attribute value). In other words, it makes the link behave as if [`window.opener`](/en-US/docs/Web/API/Window/opener) were null and `target="_parent"` were set.

    This is the opposite of [`opener`](#opener).

- `noreferrer`
  - : Relevant to {{htmlelement('form')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, including this value makes the referrer unknown (no `Referer` header will be included), and creates a top-level browsing context as if `noopener` were also set.
- `opener`
  - : Creates an auxiliary browsing context if the hyperlink would otherwise create a top-level browsing context that is not an auxiliary browsing context (i.e., has "`_blank`" as `target` attribute value). Effectively, the opposite of [noopener](#noopener).
- `pingback`
  - : Gives the address of the pingback server that handles pingbacks to the current document. See the [Pingback specification](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Provides a hint to the browser suggesting that it open a connection to the linked website in advance, without disclosing any private information or downloading any content, so that when the link is followed the linked content can be fetched more quickly.
- `prefetch`
  - : Specifies that the user agent should preemptively fetch and cache the target resource as it is likely to be required for a followup navigation.
    See {{Glossary("prefetch")}} for more information.
- `preload`
  - : Specifies that the user agent must preemptively fetch and cache the target resource for current navigation according to the potential destination given by the [`as`](/en-US/docs/Web/HTML/Element/link#as) attribute (and the priority associated with the corresponding destination). See the page for the [`preload`](/en-US/docs/Web/HTML/Attributes/rel/preload) value.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Specifies that the user agent should preemptively fetch the target resource and process it in a way that helps deliver a faster response in the future, for example by fetching its subresources or performing some rendering.
- `prev`

  - : Similar to the [`next`](#next) keyword, relevant to {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, and {{htmlelement('area')}}, the `prev` values indicates that the current document is a part of a series, and that the link references a previous document in the series is the referenced document.

    Note: The synonym `previous` is incorrect and should not be used.

- `privacy-policy`

  - : Valid for {{htmlelement('a')}}, {{htmlelement('area')}}, and {{htmlelement('link')}} elements, the `privacy-policy` value indicates that the referenced document is the Privacy Policy which describes the data collection and usage practices of the current document.

- `search`

  - : Relevant to {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, and {{htmlelement('area')}} elements, the `search` keywords indicates that the hyperlink references a document whose interface is specially designed for searching in the current document, site, and related resources, providing a link to a resource that can be used to search.

    If the [`type`](/en-US/docs/Web/HTML/Element/link#type) attribute is set to `application/opensearchdescription+xml` the resource is an [OpenSearch](/en-US/docs/Web/OpenSearch) plugin that can be easily added to the interface of Firefox.

- `stylesheet`

  - : Valid for the {{htmlelement('link')}} element, it imports an external resource to be used as a stylesheet. The [`type`](/en-US/docs/Web/HTML/Element/link#type) attribute is not needed if it's a `text/css` stylesheet, as that is the default value. If it's not a stylesheet of type `text/css` it is best to declare the type.

    While this attribute defines the link as being a stylesheet, the interaction with other attributes and other key terms within the rel value impact whether the stylesheet is downloaded and/or used.

    When used with the [`alternate`](#alternate) keyword, it defines an alternative style sheet. In this case, include a non-empty [`title`](/en-US/docs/Web/HTML/Element/link#title).

    The external stylesheet will not be used or even downloaded if the media does not match the value of the [`media`](/en-US/docs/Web/HTML/Element/link#media) attribute.

    Requires the use of the CORS protocol for cross-origin fetching.

- `tag`

  - : Valid for the {{htmlelement('a')}}, and {{htmlelement('area')}} elements, it gives a tag (identified by the given address) that applies to the current document. The tag value denotes that the link refers to a document describing a tag applying to the document on which it is located. This link type is not meant for tags within a tag cloud, as those tags apply to a group of pages, whereas the `tag` value of the `rel` attribute is for a single document.

- `terms-of-service`

  - : Valid for {{htmlelement('a')}}, {{htmlelement('area')}}, and {{htmlelement('link')}} elements, the `terms-of-service` value indicates that the referenced document is the Terms of Service that describes the agreements between the current document's provider and users who wish to use the document provided.

### Non-standard values

- [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4)
  - : Specifies the icon for a web application on an iOS device.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.relList")}}
- {{domxref("HTMLAnchorElement.relList")}}
- {{domxref("HTMLAreaElement.relList")}}
