---
title: URIs
slug: Web/URI
page-type: landing-page
spec-urls: https://www.rfc-editor.org/rfc/rfc3986.html
sidebar: urlsidebar
---

**Uniform Resource Identifiers (URI)** are used to identify "resources" on the web.
URIs are commonly used as targets of [HTTP](/en-US/docs/Web/HTTP) requests, in which case the URI represents a location for a resource, such as a document, a photo, binary data.
The most common type of URI is a Uniform Resource Locator ({{Glossary("URL")}}), which is known as the _web address_.

URIs can be used to trigger behaviors other than fetching a resource, including opening an email client, sending text messages, or executing JavaScript, when used in other places such as the [`href`](/en-US/docs/Web/HTML/Reference/Elements/a#href) of an HTML `<a>` link.

## Reference

The [URI reference](/en-US/docs/Web/URI/Reference) provides details about the components that make up a URI.

- [Schemes](/en-US/docs/Web/URI/Reference/Schemes)
  - : The first part of the URI, before the `:` character, which indicates the protocol the browser must use to fetch the resource.
- [Authority](/en-US/docs/Web/URI/Reference/Authority)
  - : The section that comes after the scheme and before the path.
    It may have up to three parts: `user` information, `host`, and `port`.
- [Path](/en-US/docs/Web/URI/Reference/Path)
  - : The section after the authority.
    Contains data, usually organized in hierarchical form, to identify a resource within the scope of the URI's scheme and authority.
- [Fragment](/en-US/docs/Web/URI/Reference/Fragment)
  - : An optional part at the end of a URI starting with a `#` character.
    It is used to identify a specific part of the resource, such as a section of a document or a position in a video.

## Guides

The [URI guides](/en-US/docs/Web/URI/Guides) help you work with URIs on the web.

- [Choosing between www and non-www URLs](Choosing_between_www_and_non-www_URLs)
  - : Guidance on when sites should use a `www.` prefix in URLs (`www.example.com` vs `example.com`).

## Specifications

{{Specifications}}

## See also

- [What is a URL?](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
