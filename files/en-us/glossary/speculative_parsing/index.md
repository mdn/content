---
title: Speculative parsing
slug: Glossary/Speculative_parsing
page-type: glossary-definition
---

{{GlossarySidebar}}

Traditionally in browsers the HTML parser ran on the main thread and was blocked after a `</script>` tag until the script has been retrieved from the network and executed. Some HTML parser, such as Firefox since Firefox 4, support speculative parsing off of the main thread. It parses ahead while scripts are being downloaded and executed. The HTML parser starts speculative loads for scripts, style sheets and images it finds ahead in the stream and runs the HTML tree construction algorithm speculatively. The upside is that when a speculation succeeds, there's no need to reparse the part of the incoming file that was already scanned for scripts, style sheets and images. The downside is that there's more work lost when the speculation fails.

This document helps you avoid the kind of things that make speculation fail and slow down the loading of your page.

To make speculative loads of linked scripts, style sheets and images successful, avoid {{domxref('document.write')}}. If you use a `<base>` element to override the base URI of your page, put the element in the non-scripted part of the document. Don't add it via `document.write()` or {{domxref('document.createElement')}}.

## Avoiding losing tree builder output

Speculative tree building fails when `document.write()` changes the tree builder state such that the speculative state after the `</script>` tag no longer holds when all the content inserted by `document.write()` has been parsed. However, only unusual uses of `document.write()` cause trouble. Here are the things to avoid:

- Don't write unbalanced trees. `<script>document.write("<div>");</script>` is bad. `<script>document.write("<div></div>");</script>` is OK.
- Don't write an unfinished token. `<script>document.write("<div></div");</script>` is bad.
- Don't finish your writing with a carriage return. `<script>document.write("Hello World!\r");</script>` is bad. `<script>document.write("Hello World!\n");</script>` is OK.
- Note that writing balanced tags may cause other tags to be inferred in a way that makes the write unbalanced. E.g. `<script>document.write("<div></div>");</script>` inside the `head` element will be interpreted as `<script>document.write("</head><body><div></div>");</script>` which is unbalanced.
- Don't format part of a table. `<table><script>document.write("<tr><td>Hello World!</td></tr>");</script></table>` is bad.
