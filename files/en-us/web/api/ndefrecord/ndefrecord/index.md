---
title: NDEFRecord()
slug: Web/API/NDEFRecord/NDEFRecord
tags:
- NDEF
- Reference
- Web NFC
browser-compat: api.NDEFRecord.NDEFRecord
---
<p>{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}</p>

<p>The <strong><code>NDEFRecord()</code></strong>
    constructor of the <a href="/en-US/docs/Web/API/WebNFC_API">Web NFC API</a> returns a
    newly constructed {{DOMxRef("NDEFRecord")}} object that represents data that can be
    read from, or written to, compatible NFC devices; e.g. NFC tags supporting NDEF.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">writer = new NDEFRecord(options);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>options</code></dt>
  <dd>An object with the following properties:
    <dl>
      <dt><code>data</code> {{optional_inline}}</dt>
      <dd>Contains the data to be transmitted; one of a string, a {{domxref("BufferSource")}}, or an array of nested records.</dd>
      <dt><code>encoding</code> {{optional_inline}}</dt>
      <dd>A string specifying the record's encoding.</dd>
      <dt><code>id</code> {{optional_inline}}</dt>
      <dd>A developer-defined identifier for the record.</dd>
      <dt><code>lang</code> {{optional_inline}}</dt>
      <dd>A valid <a href="https://www.rfc-editor.org/info/bcp47">BCP47</a> language tag.</dd>
      <dt><code>mediaType</code> {{optional_inline}}</dt>
      <dd>A valid <a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME type</a>.</dd>
      <dt><code>recordType</code></dt>
      <dd>A string indicating the type of data stored in <code>data</code>. It must be one of the following values:
        <dl>
          <dt><code>"absolute-url"</code></dt>
          <dt>An absolute URL to the data.</dt>
          <dt><code>"empty"</code></dt>
          <dd>An empty {{domxref("NDEFRecord")}}.</dd>
          <dt><code>"mime"</code></dt>
          <dd>A valid <a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME type</a>.</dd>
          <dt><code>"smart-poster"</code></dt>
          <dd>A smart poster as defined by the <a href="https://w3c.github.io/web-nfc/#bib-ndef-smartposter">NDEF-SMARTPOSTER</a> specification.</dd>
          <dt><code>"text"</code></dt>
          <dd>Text as defined by the <a href="https://w3c.github.io/web-nfc/#bib-ndef-text">NDEF-TEXT</a> specification.</dd>
          <dt><code>"unknown"</code></dt>
          <dd>The record type is not known.</dd>
          <dt><code>"URL"</code></dt>
          <dd>A URL as defined by the <a href="https://w3c.github.io/web-nfc/#bib-ndef-uri">NDEF-URI</a> specification.</dd>
        </dl>
      </dd>
    </dl>

  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new {{DOMxRef("NDEFRecord")}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
