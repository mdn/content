---
title: URL Fragment Text Directives
slug: Web/API/URL_Fragment_Text_Directives
page-type: web-api-overview
browser-compat:
  - api.Document.fragmentDirective
  - api.FragmentDirective
  - css.selectors.target-text
---

{{DefaultAPISidebar("URL Fragment Text Directives")}}

The **URL fragment text directives** API allows web apps to interact with _text fragments_ in the URL. [Text fragments](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments) allow linking directly to a specific portion of text in a web document, without requiring the author to annotate it with an ID, using a particular syntax in the URL fragment.

## Interfaces

- {{domxref("FragmentDirective")}}
  - : A (currently) empty object.
    The existence of an object of this type in {{domxref("document.fragmentDirective")}} is used for feature detection.

## Extensions to other interfaces

- {{domxref("Document.fragmentDirective")}}
  - : A property that returns a `FragmentDirective` object for the current document. Currently only used for feature detection.

## CSS selectors

- {{cssxref("::target-text")}}
  - : Represents the text that has been scrolled to. It allows authors to choose how to highlight that section of text.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [URI fragment](/en-US/docs/Web/URI/Reference/Fragment)
