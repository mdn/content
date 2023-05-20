---
title: tabs.PageSettings
slug: Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings
page-type: webextension-api-type
browser-compat: webextensions.api.tabs.PageSettings
---

{{AddonSidebar}}

The type **`tabs.PageSettings`** is used to control how a tab is rendered as a PDF by the {{WebExtAPIRef("tabs.saveAsPDF()")}} method.

All its properties are optional.

For setting headers and footers, you can include certain special characters in the strings you supply. These will be replaced in the rendered output as follows:

- "\&P": the page number, like "2"
- "\&PT": the page number and the total number of pages, like "2 of 3"
- "\&D": the current date/time
- "\&T": the page title
- "\&U": the page URL

## Type

Values of this type are objects. They contain the following properties:

- `edgeBottom` {{optional_inline}}
  - : `number`. The spacing between the bottom of the footers and the bottom edge of the paper (inches). Default: 0.
- `edgeLeft` {{optional_inline}}
  - : `number`. The spacing between the left header/footer and the left edge of the paper (inches). Default: 0.
- `edgeRight` {{optional_inline}}
  - : `number`. The spacing between the right header/footer and the left edge of the paper (inches). Default: 0.
- `edgeTop` {{optional_inline}}
  - : `number`. The spacing between the top of the headers and the top edge of the paper (inches). Default: 0
- `footerCenter` {{optional_inline}}
  - : `string`. The text for the page's center footer. Default: ''.
- `footerLeft` {{optional_inline}}
  - : `string`. The text for the page's left footer. Default: '\&PT'.
- `footerRight` {{optional_inline}}
  - : `string`. The text for the page's right footer. Default: '\&D'.
- `headerCenter` {{optional_inline}}
  - : `string`. The text for the page's center header. Default: ''.
- `headerLeft` {{optional_inline}}
  - : `string`. The text for the page's left header. Default: '\&T'.
- `headerRight` {{optional_inline}}
  - : `string`. The text for the page's right header. Default: '\&U'.
- `marginBottom` {{optional_inline}}
  - : `number`. The margin between the page content and the bottom edge of the paper (inches). Default: 0.5.
- `marginLeft` {{optional_inline}}
  - : `number`. The margin between the page content and the left edge of the paper (inches). Default: 0.5.
- `marginRight` {{optional_inline}}
  - : `number`. The margin between the page content and the right edge of the paper (inches). Default: 0.5.
- `marginTop` {{optional_inline}}
  - : `number`. The margin between the page content and the top edge of the paper (inches). Default: 0.5.
- `orientation` {{optional_inline}}
  - : `integer`. Page orientation: 0 means "portrait", 1 means "landscape". Default: 0.
- `paperHeight` {{optional_inline}}
  - : `number`. The paper height in paper size units. Default: 11.0.
- `paperSizeUnit` {{optional_inline}}
  - : `integer`. The paper size unit: 0 = inches, 1 = millimeters. Default: 0.
- `paperWidth` {{optional_inline}}
  - : `number`. The paper width in paper size units. Default: 8.5.
- `scaling` {{optional_inline}}
  - : `number`. Page content scaling factor. 1 means 100% or normal size. Default: 1.
- `showBackgroundColors` {{optional_inline}}
  - : `boolean`. Whether the page background colors should be shown. Default: false.
- `showBackgroundImages` {{optional_inline}}
  - : `boolean`. Whether the page background images should be shown. Default: false.
- `shrinkToFit` {{optional_inline}}
  - : `boolean`. Whether the page content should shrink to fit the page width (overrides scaling). Default: true.
- `toFileName` {{optional_inline}}
  - : `string`. The name of the file the PDF is saved in, with or without the `.pdf` extension.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}
