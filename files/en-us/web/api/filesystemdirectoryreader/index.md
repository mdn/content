---
title: FileSystemDirectoryReader
slug: Web/API/FileSystemDirectoryReader
tags:
  - API
  - File and Directory Entries API
  - FileSystemDirectoryReader
  - Files
  - Interface
  - Offline
  - Reference
browser-compat: api.FileSystemDirectoryReader
---
<p>{{APIRef("File and Directory Entries API")}}</p>

<p>The <code>FileSystemDirectoryReader</code> interface of the <a href="/en-US/docs/Web/API/File_and_Directory_Entries_API">File and Directory Entries API</a> lets you access the {{domxref("FileSystemFileEntry")}}-based objects (generally {{domxref("FileSystemFileEntry")}} or {{domxref("FileSystemDirectoryEntry")}}) representing each entry in a directory.</p>

<h2 id="Methods">Methods</h2>

<dl>
	<dt>{{domxref("FileSystemDirectoryReader.readEntries", "readEntries()")}}</dt>
	<dd>Returns an array containing some number of the directory's entries. Each item in the array is an object based on {{domxref("FileSystemEntry")}}—typically either {{domxref("FileSystemFileEntry")}} or {{domxref("FileSystemDirectoryEntry")}}.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li><a href="/en-US/docs/Web/API/File_and_Directory_Entries_API">File and Directory Entries API</a></li>
	<li><a href="/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction">Introduction to the File System API</a></li>
	<li>{{domxref("FileSystemDirectoryEntry")}}</li>
	<li>{{domxref("FileSystem")}}</li>
</ul>
