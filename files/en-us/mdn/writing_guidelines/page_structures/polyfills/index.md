---
title: Polyfills
slug: MDN/Writing_guidelines/Page_structures/Polyfills
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

This page outlines MDN's policy for including polyfills in the reference documentation for [JavaScript](/en-US/docs/Web/JavaScript) and [Web APIs](/en-US/docs/Web/API).

A {{glossary("Polyfill", "polyfill")}} is an implementation of a web platform feature that websites can use in browsers that do not natively support the feature. Polyfills enable web developers to write a single codebase targeting multiple browsers and browser versions, even when some of those browsers don't support some of the features used.

Polyfills are important to web developers but are also a risk: buggy polyfills can break websites or create security vulnerabilities. For this reason, MDN recommends specific sources for polyfills, and is very conservative about adding additional sources.

## Polyfills in the JavaScript reference

### Selected polyfills

The [JavaScript reference documentation](/en-US/docs/Web/JavaScript) can link to polyfills from two sources:

- The [core-js](https://github.com/zloirock/core-js/tree/master) library.
- The [es-shims](https://github.com/es-shims) organization.

Sources are selected by the MDN maintainers based on the following criteria:

- Conformance to the specification for the feature for which they are providing an implementation.
- Adoption by the web development community, as seen in metrics such as the number of [npm](https://www.npmjs.com/) downloads.

### Proposing an additional polyfill source

Anyone can propose that MDN should recognize an additional source of polyfills by [starting a discussion in the MDN discussion forum](https://github.com/orgs/mdn/discussions). However, the MDN maintainers expect the number of recognized polyfills linked from MDN to remain very small, to reduce the risk of recommending polyfills that cause problems for web developers.

### Integration of polyfills into pages

When a page in the JavaScript reference documentation links to a polyfill, it adds the link in the "See also" section at the end of the page.

The link is placed at the start of the "See also" list, in the following format:

```md
- [Polyfill for `featureName` in `project-name`](link)
```

## Polyfills in the Web API reference

### Selected polyfills

The [Web API reference documentation](/en-US/docs/Web/API) can link to polyfills that are maintained alongside the specification for the feature itself.

For example, the [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API) has a polyfill which is [maintained in the same repository as the specification](https://github.com/w3c/trusted-types?tab=readme-ov-file#polyfill). Accordingly, the Trusted Types API reference documentation on MDN can link to that polyfill.

### Integration of polyfills into pages

Polyfills are typically integrated into the [overview page for the API](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#web_api_page_types).
