---
title: Technology status
slug: MDN/Writing_guidelines/Page_structures/Technology_status
page-type: mdn-writing-guide
---

{{MDNSidebar}}

Technology status of a feature tells developers implementation stage of the feature among browsers. Using it, developers can decide if a feature is stable enough to use in production code. Each feature has one of the following statuses:

- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
  - : A feature is considered experimental if it is supported by one and only one browser engine. Some exceptions apply, however, for long-standing features and features behind flags and prefixes.
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)
  - : A feature is considered non-standard if it does not exist in any specification.
- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)
  - : A feature is considered deprecated if it is on the path to removal or the feature is discouraged from use despite its retention for backwards compatibility.
- `standard`
  - : If none of the above status apply, then the feature is considered standard. We don't need to explicitly mention this status in the content code because the status is assumed by default.

Detailed information about `experimental` and `standard` can be found on ["Experimental, deprecated, and obsolete"](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) page. To see detailed instructions on how to choose status for a feature, refer [choosing status properties](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) section in `@mdn/browser-compat-data` (BCD) repository.

## How to add or update technology statuses

Statuses of all the features are being maintained at only one place: [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) repository. Those statuses are _automatically_ updated in `mdn/content` repository whenever a new [version of BCD is released](https://github.com/mdn/browser-compat-data/releases) (mostly twice a week).

As there is an automation in place to synchronize the data, _there is no need to manually update the statuses in the content code_. You need to [submit a pull request](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) to BCD repository to update a status. After your changes go live in BCD repository the content repo automatically, at next midnight, receives a pull request that updates the statuses in `content` repository.

> **Warning:**
> If you manually update statuses in `content` repository without updating BCD repository, then your changes will get reverted on the next BCD release!
>
> If you update statuses in both `content` and BCD repositories, and content changes get merged before BCD changes go live, then the content changes may get reverted till the BCD changes go live.
>
> Hence, it is best not to manually update technology statuses in the content code.

## How are technology statuses specified in content?

Following sections document mechanisms using which technology statuses are placed in content. As mentioned before, it is not required to use these mechanisms manually.

### Technology status icons in sidebars

To show status icons for a feature listed in sidebars, the [front-matter](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template#sect1) `status` property is used:

```yml
title: Feature name
---
status:
  - experimental
  - non-standard
  - deprecated
browser-compat: api.feature
```

When sidebars are rendered, the code looks for the statuses in each page's front-matter.

### Technology status page banners

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

### Technology status icons in definition lists

The following macros are used to render inline status icons next to definition list items:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) icon: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) icon: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) icon: {{Deprecated_Inline}}

## See also

- [Sidebar macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Links)
- [List of macros](https://github.com/mdn/yari/tree/main/kumascript/macros) on GitHub
