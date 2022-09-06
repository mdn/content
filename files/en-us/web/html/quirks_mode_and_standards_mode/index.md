---
title: Quirks Mode and Standards Mode
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
tags:
  - Gecko
  - Guide
  - HTML
  - NeedsUpdate
  - Web Development
  - Web Standards
  - XHTML
---
{{HTMLRef}}

In the old days of the web, pages were typically written in two versions: One for Netscape Navigator, and one for Microsoft Internet Explorer. When the web standards were made at W3C, browsers could not just start using them, as doing so would break most existing sites on the web. Browsers therefore introduced two modes to treat new standards compliant sites differently from old legacy sites.

There are now three modes used by the layout engines in web browsers: quirks mode, almost standards mode, and full standards mode. In **quirks mode**, layout emulates nonstandard behavior in Navigator 4 and Internet Explorer 5. This is essential in order to support websites that were built before the widespread adoption of web standards. In **full standards mode**, the behavior is (hopefully) the behavior described by the HTML and CSS specifications. In **almost standards mode**, there are only a very small number of quirks implemented.

## How do browsers determine which mode to use?

For [HTML](/en-US/docs/Web/HTML) documents, browsers use a DOCTYPE in the beginning of the document to decide whether to handle it in quirks mode or standards mode. To ensure that your page uses full standards mode, make sure that your page has a DOCTYPE like in this example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
  </head>
  <body></body>
</html>
```

The DOCTYPE shown in the example, `<!DOCTYPE html>`, is the simplest possible, and the one recommended by current HTML standards. Earlier versions of the HTML standard recommended other variants, but all existing browsers today will use full standards mode for this DOCTYPE, even the dated Internet Explorer 6. There are no valid reasons to use a more complicated DOCTYPE. If you do use another DOCTYPE, you may risk choosing one which triggers almost standards mode or quirks mode.

Make sure you put the DOCTYPE right at the beginning of your HTML document. Anything before the DOCTYPE, like a comment or an XML declaration will trigger quirks mode in Internet Explorer 9 and older.

The only purpose of `<!DOCTYPE html>` is to activate full standards mode. Older versions of HTML standard DOCTYPEs provided additional meaning, but no browser ever used the DOCTYPE for anything other than switching between quirks mode and standards mode.

See also a detailed description of [when different browsers choose various modes](https://hsivonen.fi/doctype/).

### XHTML

If you serve your page as [XHTML](/en-US/docs/Glossary/XHTML) using the `application/xhtml+xml` MIME type in the `Content-Type` HTTP header, you do not need a DOCTYPE to enable standards mode, as such documents always use full standards mode. Note however that serving your pages as `application/xhtml+xml` will cause Internet Explorer 8 to show a download dialog box for an unknown format instead of displaying your page, as the first version of Internet Explorer with support for XHTML is Internet Explorer 9.

If you serve XHTML-like content using the `text/html` MIME type, browsers will read it as HTML, and you will need the DOCTYPE to use standards mode.

## How do I see which mode is used?

In Firefox, select _Page Info_ from the _Tools_ menu bar, and look for _Render Mode_. ([Learn more about the Firefox Page Info window](https://support.mozilla.org/en-US/kb/firefox-page-info-window))

In Internet Explorer, press _F12_, and look for _Document Mode_.
