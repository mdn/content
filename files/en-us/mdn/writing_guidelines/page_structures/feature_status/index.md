---
title: Feature status
slug: MDN/Writing_guidelines/Page_structures/Feature_status
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

A feature status provides developers with information about the implementation stage of the feature among browser vendors and is one of the following:

- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)
- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)

If none of the above statuses apply, then the feature is considered a stable and standard feature. We don't explicitly add this status to content pages.
For more information on these terms, see the ["Experimental, deprecated, and obsolete"](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) page.

To see detailed instructions on how to choose a status for a feature, refer to the [choosing status properties](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) section in the `@mdn/browser-compat-data` (BCD) repository.

## How to add or update feature statuses

The feature statuses of all the features documented on MDN are defined in its accompanying [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) repository entry and are _automatically_ updated in the `mdn/content` repository whenever a new [version of BCD is released](https://github.com/mdn/browser-compat-data/releases).

> [!WARNING]
> Do not manually update feature statuses in the `mdn/content` repository. To update a feature's status, you need to [submit a pull request](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) in the BCD repository. After your changes are approved and merged in BCD, an [automated pull request](https://github.com/search?q=repo%3Amdn%2Fcontent+Synchronize+with+BCD&type=pullrequests) updates the statuses in the `mdn/content` repository.

The automation uses [`browser-compat`](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages) key in the front-matter. The key stores BCD query required to locate the feature in the compatibility data. If the `browser-compat` key has multiple values then the automation uses only the first value to render status macros.

## How are feature statuses specified in content?

The following sections document mechanisms using which feature statuses are rendered in MDN documents. As mentioned, you should consider these mechanisms read-only as their inclusion in the content is automated.

### Feature status icons in sidebars

To show status icons for a feature listed in sidebars, the [front-matter](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template#sect1) `status` property is used:

```yml
---
title: Feature name
status:
  - experimental
  - non-standard
  - deprecated
browser-compat: api.feature
---
```

When sidebars are rendered, the code looks for the statuses in each page's front-matter. As mentioned before, these statuses are updated automatically; you do not need to change them manually.

### Feature status page banners

The following macros are used to render the status banners in page headers:

- `\{{SeeCompatTable}}`

  - : For `experimental` status. It generates an **Experimental status** banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : For `non-standard` status. It generates a **Non-Standard status** banner:
    {{Non-standard_Header}}

- `\{{Deprecated_Header}}`
  - : For `deprecated` status. It generates a **Deprecated status** banner:
    {{deprecated_header}}

### Feature status icons in definition lists

The following macros are used to render inline status icons next to definition list items:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icon: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icon: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icon: {{Deprecated_Inline}}

## See also

- [Sidebar macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Links)
