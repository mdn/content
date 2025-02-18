---
title: Banners and notices
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

Banners and notices are displayed in some pages, in particular API reference, in order to highlight important factors that will affect how the described content is used.
For example, banners are used to highlight when a particular interface, method or property is deprecated, and should not be used in production code, or can only be used in a secure context.

Banners are rendered using macros in the page content.
Some banner macros are added automatically to the page, while others are added manually.

This article describes the more important banners and how they are added.

## Where are banner macros added

Banners are added using macros that are usually inserted below the page metadata, alongside the page sidebar macro. For example, in the block below, the `\{{SecureContext_Header}}` macro has been used to indicate that the {{domxref("AudioDecoder")}} interface is only available in a [secure context](/en-US/docs/Web/Security/Secure_Contexts), the `\{{AvailableInWorkers}}` macro has been used to indicate that the {{domxref("AudioDecoder")}} interface is only available in [window context](/en-US/docs/Web/API/Window) and [dedicated worker context](/en-US/docs/Web/API/DedicatedWorkerGlobalScope), and `\{{SeeCompatTable}}` has been added to indicate that the interface is experimental.

```md
---
title: AudioDecoder
slug: Web/API/AudioDecoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.AudioDecoder
---

\{{APIRef("WebCodecs API")}} \{{SeeCompatTable}} \{{SecureContext_Header}} \{{AvailableInWorkers("window_and_dedicated")}}
```

## Banners that must be added manually

You need to add the following macros manually:

- `\{{SecureContext_Header}}` — this generates a **Secure context** banner that indicates the technology is only available in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
- `\{{AvailableInWorkers}}` — this generates a **Available In Workers** note that indicates that the technology is available in [worker context](/en-US/docs/Web/API/Web_Workers_API).

## Banners that are added automatically

The following macros are automatically added to the content in order to match the statuses stored in the [browser compat data](https://github.com/mdn/browser-compat-data) repository:

- `\{{SeeCompatTable}}` — generates a **This is an experimental technology** banner that indicates the technology is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
- `\{{Deprecated_Header}}` — generates a **Deprecated** banner that indicates that use of the technology is [discouraged](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
- `\{{Non-standard_Header}}` — generates a **Non-Standard** banner that indicates that use of the technology is not part of a formal specification, even if it is implemented in multiple browsers.

[Update the feature status in the browser-compat-data repository](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses) in order to change these values.

> [!NOTE]
> While you can manually/update these macros in content, values that don't match the browser compatibility data will be replaced/removed.

> [!NOTE]
> Pages that have the `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}`, or `\{{Non-standard_Header}}` banners will also have the corresponding `experimental`, `deprecated` and `non-standard` status values in the page metadata.
> The metadata is automatically updated at the same time as the headers.
> The banner macros do not depend on this status metadata (but may one day be generated from it).

## Experimental: "Standards positions" banner

Occasionally, browser vendors disagree on how a feature is developing, and some may oppose it in its current form. In exceptional cases, MDN documents technologies in this state to encourage the web community to experiment with them, provide feedback, and help browser vendors reach a consensus.

It is important to clarify the current standardization status of such features to readers. While a longer-term solution for representing this information is not final, we are doing the following for specific high-profile technologies to avoid confusion:

- Adding this banner to the landing page for that feature (not for every subpage for the feature):

  ```md
  > [!WARNING]
  > This feature is currently opposed by <number> browser vendor(s). See the [Standards positions](#standards_positions) section below for details of opposition.
  ```

  - Replace `<number>` with the number of browser vendors opposing the feature.
  - Use `vendor` or `vendors` as appropriate.

- Adding a "Standards positions" section to the same page as the above banner, as a sub-section of the standard "Specifications" section.

> [!NOTE]
> See [Related Website Sets](/en-US/docs/Web/API/Storage_Access_API/Related_website_sets) for an example of the "Standards positions" section and what it should contain, as well as the landing page banner.
