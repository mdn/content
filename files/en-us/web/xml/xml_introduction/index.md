---
title: XML introduction
slug: Web/XML/XML_introduction
tags:
  - Beginner
  - Introduction
  - NeedsContent
  - XML
---
XML (Extensible Markup Language) is a markup language similar to {{Glossary("HTML")}}, but without predefined tags to use. Instead, you define your own tags designed specifically for your needs. This is a powerful way to store data in a format that can be stored, searched, and shared. Most importantly, since the fundamental format of XML is standardized, if you share or transmit XML across systems or platforms, either locally or over the internet, the recipient can still parse the data due to the standardized XML syntax.

There are many languages based on XML, including [XHTML](/en-US/docs/Glossary/XHTML), [MathML](/en-US/docs/Web/MathML), [SVG](/en-US/docs/Web/SVG), [XUL](/en-US/docs/Mozilla/Tech/XUL), [XBL](/en-US/docs/Mozilla/Tech/XBL), [RSS](/en-US/docs/Web/RSS), and [RDF](/en-US/docs/Web/RDF). You can also define your own.

## Structure of an XML document

Whole structure XML and XML based languages built on {{Glossary("tag")}}s.

### XML declaration

XML - declaration is not a tag. It is used for the transmission of the meta-data of a document.

```html
<?xml version="1.0" encoding="UTF-8"?>
```

#### Attributes:

- version:
  - : Used version XML in this document.
- encoding :
  - : Used encoding in this document.

### Comments

```html
<!-- Comment -->
```

## "Correct" XML (valid and well-formed)

### Correct design rules

For an XML document to be correct, the following conditions must be fulfilled:

- Document must be well-formed.
- Document must conform to all XML syntax rules.
- Document must conform to semantic rules, which are usually set in an XML schema or a DTD (**[Document Type Definition](/en-US/docs/Glossary/Doctype))**.

### Example

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
        Hello World
    <!--missing </warning> -->
</message>
```

Now let's look at a corrected version of that same document:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
         Hello World
    </warning>
</message>
```

A document that contains an undefined tag is invalid. For example, if we never defined the `<warning>` tag, the document above wouldn't be valid.

Most browsers offer a debugger that can identify poorly-formed XML documents.

## Entities

Like HTML, XML offers methods (called entities) for referring to some special reserved characters (such as a greater than sign which is used for tags). There are five of these characters that you should know:

| Entity | Character | Description                               |
| ------ | --------- | ----------------------------------------- |
| &lt;   | <         | Less than sign                            |
| &gt;   | >         | Greater than sign                         |
| &amp;  | &         | Ampersand                                 |
| &quot; | "         | One double-quotation mark                 |
| &apos; | '         | One apostrophe (or single-quotation mark) |

Even though there are only 5 declared entities, more can be added using the document's [Document Type Definition](/en-US/docs/Glossary/Doctype). For example, to create a new `&warning;` entity, you can do this:

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE body [
      <!ENTITY warning "Warning: Something bad happened... please refresh and try again.">
    ]>
    <body>
      <message> &warning; </message>
    </body>

You can also use numeric character references to specify special characters; for example, \&#xA9; is the "©" symbol.

## Displaying XML

XML is usually used for descriptive purposes, but there are ways to display XML data. If you don't define a specific way for the XML to be rendered, the raw XML is displayed in the browser.

One way to style XML output is to specify [CSS](/en-US/docs/Web/CSS) to apply to the document using the `xml-stylesheet` processing instruction.

    <?xml-stylesheet type="text/css" href="stylesheet.css"?>

There is also another more powerful way to display XML: the **Extensible Stylesheet Language Transformations** ([XSLT](/en-US/docs/Web/XSLT)) which can be used to transform XML into other languages such as HTML. This makes XML incredibly versatile.

    <?xml-stylesheet type="text/xsl" href="transform.xsl"?>

## Recommendations

This article is obviously only a very brief introduction to what XML is, with a few small examples and references to get you started. For more details about XML, you should look around on the Web for more in-depth articles.

Learning the HyperText Markup Language ([HTML](/en-US/docs/Web/HTML)) will help you better understand XML.

## See also

- [XML.com](https://www.xml.com/)
- [Extensible Markup Language (XML) @ W3.org](https://www.w3.org/XML/)
- [Using XML: A List Apart](https://alistapart.com/article/usingxml/)
