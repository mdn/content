---
title: Speculative parsing
slug: Glossary/speculative_parsing
tags:
  - Advanced
  - HTML
  - HTML5
  - NeedsUpdate
  - Web Development
  - Web Performance
---
<p>Traditionally in browsers the HTML parser ran on the main thread and was blocked after a <code>&lt;/script&gt;</code> tag until the script has been retrieved from the network and executed. Some HTML parser, such as Firefox since Firefox 4, support speculative parsing off of the main thread. It parses ahead while scripts are being downloaded and executed. The HTML parser starts speculative loads for scripts, style sheets and images it finds ahead in the stream and runs the HTML tree construction algorithm speculatively. The upside is that when a speculation succeeds, there's no need to reparse the part of the incoming file that was already scanned for scripts, style sheets and images. The downside is that there's more work lost when the speculation fails.</p>

<p>This document helps you avoid the kind of things that make speculation fail and slow down the loading of your page.</p>

<p>To make speculative loads of linked scripts, style sheets and images successful, avoid {{domxref('document.write')}}. If you use a <code>&lt;base&gt;</code> element to override the base URI of your page, put the element in the non-scripted part of the document. Don't add it via <code>document.write()</code> or {{domxref('document.createElement')}}.</p>

<h2 id="Avoiding_losing_tree_builder_output">Avoiding losing tree builder output</h2>

<p>Speculative tree building fails when <code>document.write()</code> changes the tree builder state such that the speculative state after the <code>&lt;/script&gt;</code> tag no longer holds when all the content inserted by <code>document.write()</code> has been parsed. However, only unusual uses of <code>document.write()</code> cause trouble. Here are the things to avoid:</p>

<ul>
 <li>Don't write unbalanced trees. <code>&lt;script&gt;document.write("&lt;div&gt;");&lt;/script&gt;</code> is bad. <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code> is OK.</li>
 <li>Don't write an unfinished token. <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div");&lt;/script&gt;</code> is bad.</li>
 <li>Don't finish your writing with a carriage return. <code>&lt;script&gt;document.write("Hello World!\r");&lt;/script&gt;</code> is bad. <code>&lt;script&gt;document.write("Hello World!\n");&lt;/script&gt;</code> is OK.</li>
 <li>Note that writing balanced tags may cause other tags to be inferred in a way that makes the write unbalanced. E.g. <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code> inside the <code>head</code> element will be interpreted as <code>&lt;script&gt;document.write("&lt;/head&gt;&lt;body&gt;&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code> which is unbalanced.</li>
 <li>Don't format part of a table. <code>&lt;table&gt;&lt;script&gt;document.write("&lt;tr&gt;&lt;td&gt;Hello World!&lt;/td&gt;&lt;/tr&gt;");&lt;/script&gt;&lt;/table&gt;</code> is bad.</li>
</ul>
