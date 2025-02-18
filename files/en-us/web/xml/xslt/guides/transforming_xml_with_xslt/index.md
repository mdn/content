---
title: Transforming XML with XSLT
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
page-type: guide
sidebar: xmlsidebar
---

The separation of content and presentation is a key design feature of [XML](/en-US/docs/Web/XML). The structure of an XML document is designed to reflect and clarify important relationships among the individual aspects of the content itself, unhindered by a need to provide any indication about how this data should eventually be presented. This intelligent structuring is particularly important as more and more data transfers are automated and take place between highly heterogeneous machines linked by a network.

Yet eventually much of the content stored in XML documents will need to be presented to human readers. Because a browser provides a familiar and highly flexible interface, it is an ideal mechanism for delivering such presentation versions of XML content. Built from the ground up utilizing a wide variety of XML technologies, Firefox incorporates within itself all of the mechanisms needed to process both original XML documents and the specialized stylesheets used to style and lay them out for HTML display, reducing server load with client-side processing.

At present, Gecko (the layout engine behind Firefox) supports two forms of XML stylesheets. For basic control of appearance — fonts, colors, position, and so forth — Gecko uses [CSS](/en-US/docs/Web/CSS).

Our focus here is on the second type of stylesheet that Gecko supports: the XSLT stylesheet. XSLT stands for eXtensible Stylesheet Language/Transform and the name is apt. XSLT allows a stylesheet author to transform a primary XML document in two significant ways: manipulating and sorting the content, including a wholesale reordering of it if so desired, and transforming the content into a different format (and in the case of Firefox, the focus is on converting it on the fly into HTML which can then be displayed by the browser).

## Table of contents

- [An Overview](/en-US/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/An_Overview)
- [For further reading](/en-US/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading)

## XSLT/XPath reference

- [Elements](/en-US/docs/Web/XML/XSLT/Reference/Element)
- [Axes](/en-US/docs/Web/XML/XPath/Reference/Axes)
- [Functions](/en-US/docs/Web/XML/XPath/Reference/Functions)

## Original Document Information

- Copyright Information: Copyright © 2001-2003 Netscape. All rights reserved.
- Note: This reprinted article was originally part of the DevEdge site.
