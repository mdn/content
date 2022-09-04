---
title: XSL Transformations in Mozilla FAQ
slug: Web/API/XSLTProcessor/XSL_Transformations_in_Mozilla_FAQ
page-type: guide
tags:
  - Guide
  - XSLT
---
## Why isn't my stylesheet applied?

Make sure the mime type for both source and stylesheet are set to an XML mimetype, namely `text/xml` or `application/xml`. The XSLT namespace is `http://www.w3.org/1999/XSL/Transform`. Use the \<?xml-stylesheet ?> processing instruction instead of the non-standard xml:stylesheet. The most common cause is the MIME type handling. To find out which MIME type your server sends, look at Page Info, use extensions like [LiveHTTPHeaders](http://livehttpheaders.mozdev.org/) or a download manager like `wget`. Mozilla won't load XSLT stylesheets from a different domain for security reasons.

> **Note:** Since Firefox 7, both `text/xsl` and `application/xslt+xml` are supported MIME types for XSLT media stylesheets.

Note that Firefox will override your XSLT stylesheet if your XML is detected as an RSS or Atom feed. A known workaround is to add a sufficiently long XML comment to the beginning of your XML file in order to "push" the `<feed>` or `<rss>` tag out of the first 512 bytes, which is analyzed by Firefox to determine if it's a feed or not. See the discussion on bug [#338621](https://bugzilla.mozilla.org/show_bug.cgi?id=338621) for more information.

## It works in IE, but not in Mozilla?

There are even more differences. Most come from what we suspect IE to do after the transformation. It (AFAICT) serializes and parses the output to generate what it actually renders. Mozilla in contrast renders exactly the result of your transformation.

## Can I do disable-output-escaping?

This is actually pretty close to the question above. And in short, no. Disabling output escaping requires us to add a parsing step to our output generation, which we don't. In most cases, there are pretty easy workarounds. The only use cases we have seen are bad XML or bad XSLT. And RSS feeds. The latter is pretty much the only issue to us, and we're sorry that we can't support it. But mixing parsing with XSLT is brittle and we rather not support d-o-e than either crash or be even slower.

## What about `document.write`?

Just like for XHTML, `document.write` is not supported during XSLT transformations. Sadly, current builds don't error, but just give unexpected results, like crashes ({{ Bug(202765) }}). In most cases, there is no need to actually use it, though. If you need platform dependent code or stylesheets, just do

```xml
<xsl:if test="system-property('xsl:vendor')='Transformiix'">
  <!-- Mozilla specific markup -->
</xsl:if>
<xsl:if test="system-property('xsl:vendor')='Microsoft'">
  <!-- IE specific markup -->
</xsl:if>
```

Check system-properties.xml for the properties of your favorite system. MSXML has an additional property.

```xml
<xsl:if xmlns:msxsl="urn:schemas-microsoft-com:xslt"
        test="system-property('msxsl:version')=3">
  <!-- MSXML3 specific markup -->
</xsl:if>
```

## What about `media="print"`?

When printing a document, Mozilla tries to render the page on paper as closely to what you see as possible. This includes stuff like text entered into textfields and other dynamic changes. This is achieved by printing the current DOM tree. Having XSLT stylesheet specific to particular `media` would require to retransform the original XML source, which counteracts the expectations of the user. Thus, using `media` in \<?xml-stylesheet ?> is strongly discouraged. Future builds might only load an XSLT stylesheet if `media` is not specified, or if the specified `media` include `screen`.
This does not affect CSS stylesheets loaded from the generated DOM, those honor media just like in pages without XSLT.

## How do I do `transformNode`?

There is `transformToDocument` and `transformToFragment` starting with Mozilla 1.2 final, see [Using the Mozilla JavaScript interface to XSL Transformations](/en-US/docs/Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations).

## Why does Internet Explorer require a different XSLT namespace than Mozilla?

IE up to version 6 required a deprecated namespace of a XSLT working draft, please update to Mozilla ;-), IE6+ or MSXML3+, as it is fixed there. As the differences between XSLT1.0 and the IE implementation of that WD are significant, we offer no legacy support.

## How do I build the standalone version of TransforMiiX?

See the [Building TransforMiiX standalone](/en-US/docs/Building_TransforMiiX_standalone) page.

## Original Document Information

- Author(s): Axel Hecht
- Last Updated Date: February 2, 2005
- Copyright Information: Portions of this content are © 1998–2006 by individual mozilla.org contributors; content available under a Creative Commons license
