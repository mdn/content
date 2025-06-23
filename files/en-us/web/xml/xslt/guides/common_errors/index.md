---
title: Common XSLT Errors
slug: Web/XML/XSLT/Guides/Common_errors
page-type: guide
sidebar: xmlsidebar
---

### MIME types

Your server needs to send both the source and the stylesheet with a XML mime type, `text/xml` or `application/xml`. To find out the current type, load the file in Mozilla and look at the page info. Or use a download tool, those usually tell the mime type.

In Firefox 6 and forward, you can also use the official XSLT mimetype: `application/xslt+xml`.

### Namespace

The XSLT 1.0 namespace is [`http://www.w3.org/1999/XSL/Transform`](https://www.w3.org/1999/XSL/Transform). Older versions of IE used a different namespace. However these versions also used a draft version of XSLT which is incompatible with what eventually became the XSLT 1.0 specification. Firefox only supports the official XSLT 1.0 version.

### Missing features

There are some features in the XSLT 1.0 specification which Firefox unfortunately does not yet support. Specifically:

- The `namespace::` axis in XPath expressions. Support for this will hopefully be available in the future.
- The `disable-output-escaping` attribute. This feature controls how serializing the constructed output document works. However Firefox never serializes the output document and so the attribute isn't really applicable. While we could try to add some heuristics to serialize and reparse just the part of the output document which has `disable-output-escaping` applied, heuristics often get things wrong and lead to surprising results, hence we've been reluctant to add this so far. Often times stylesheets contain code like `<xsl:text disable-output-escaping="yes">&nbsp;</xsl:text>`, this is equivalent to putting `&#160;` in the stylesheet which will work great in all XSLT engines. We do realize that the lack of `disable-output-escaping` is a problem and we'd like to find a solution for it, however so far we haven't found any good solutions.
- The `<xsl:namespace-alias>` element.

If you'd like to help out with any of the above features, help would be greatly appreciated.
