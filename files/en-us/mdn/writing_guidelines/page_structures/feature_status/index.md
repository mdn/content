---
title: Feature status
slug: MDN/Writing_guidelines/Page_structures/Feature_status
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

> [!WARNING]
> Do not manually update the feature statuses in `mdn/content` repository.
> The documentation source is [automatically updated](#how_feature_statuses_are_added_or_updated) from information in the GitHub `mdn/browser-compat-data` repository

A feature status broadly indicates the cross-browser implementation and standardization state of a particular web platform feature, such as a Web API method or CSS property.
It is one of the following:

- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)
- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)

If none of the above statuses apply, the feature is considered _stable and standard feature_.
For more information on these terms, see the ["Experimental, deprecated, and obsolete"](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) page.

For information on how the status for a feature is determined, see the [choosing status properties](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) section in the `@mdn/browser-compat-data` (BCD) repository.

## How feature statuses are added or updated?

The feature statuses of all the features documented on MDN are tracked in its accompanying [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) repository. An automation _automatically_ updates the statuses in the `mdn/content` repository whenever a new [version of BCD is released](https://github.com/mdn/browser-compat-data/releases).

The automation uses [`browser-compat`](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages) key in the front-matter. The key stores BCD query required to locate the feature in the compatibility data. If the `browser-compat` key has multiple values then the automation uses only the first value to render status macros.

> [!NOTE]
> To update a feature's status in the MDN content, you need to [submit a pull request](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) in the BCD repository. After your changes are approved and merged in BCD, an [automated pull request](https://github.com/search?q=repo%3Amdn%2Fcontent+Synchronize+with+BCD&type=pullrequests) updates the statuses in the `mdn/content` repository.

## How are feature statuses specified in content?

The following sections document the mechanisms that are used to insert and render feature status information in MDN documents. As mentioned, these should be considered read-only, as their inclusion in the content is automated.

### Feature status icons in sidebars

The `status` property in page [front-matter](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template#sect1) is used to generate status icons for features when they are displayed in sidebars.

```yml
---
title: Feature name
status:
  - deprecated
  - experimental
  - non-standard
browser-compat: api.feature
---
```

### Feature status page banners

The following macros are used to render the status banners in page headers:

- `\{{Deprecated_Header}}`

  - : For `deprecated` status. It generates a **Deprecated status** banner:
    {{deprecated_header}}

- `\{{SeeCompatTable}}`

  - : For `experimental` status. It generates an **Experimental status** banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : For `non-standard` status. It generates a **Non-Standard status** banner:
    {{Non-standard_Header}}

### Feature status icons in definition lists

The following macros are used to render inline status icons next to definition list items:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icon: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icon: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icon: {{Deprecated_Inline}}

If a web feature page has status banners then the inline macros of same statuses are used explicitly for each member/value of the feature in the definition list.
For example, if a page is marked experimental using `\{{SeeCompatTable}}` then each member/value of the feature is explicitly marked experimental using `\{{Experimental_Inline}}` macro in the definition list.

## See also

- [Sidebar macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Links)
