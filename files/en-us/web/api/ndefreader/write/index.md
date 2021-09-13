---
title: NDEFReader.write()
slug: Web/API/NDEFReader/write
tags:
  - NDEF
  - Reference
  - Web NFC
  - Method
browser-compat: api.NDEFReader.write
---
<p>{{Draft}}{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}</p>

<p>The <code>write()</code> method of the {{DOMxRef("NDEFReader")}} interface attempts to write an NDEF message to a tag and returns a {{jsxref("Promise")}} that either resolves when a message has been written to the tag or rejects if a hardware or permission error is encountered. This method triggers a permission prompt if the "nfc" permission has not been previously granted.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">NDEFReader.write(message);
  NDEFReader.write(message, options);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>message</code></dt>
  <dd>The message to be written, one of {{DOMxRef("DOMString")}},
    {{DOMxRef("BufferSource")}}, or an array of records. A record has the following members:
    <dl>
      <dt><code>data</code> {{optional_inline}}</dt>
      <dd>Contains the data to be transmitted, one of a string, a {{domxref("BufferSource")}}, or an array of nested records.</dd>
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
          <dd>An absolute URL to the data.</dd>
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
  <dt><code>options</code> {{optional_inline}}</dt>
  <dd>
    <p>An object with the following properties:</p>
    <ul>
      <li><code>overwrite</code> -- A {{JSxRef("Boolean")}} specifying whether or not
        existing records should be overwritten, if such exists.</li>
      <li><code>signal</code> -- An optional {{DOMxRef("AbortSignal")}} that allows the current write operation to be canceled.</li>
    </ul>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{JSxRef("Promise")}} that either resolves when a message has been written to the tag or rejects if a hardware or permission error is encountered.</p>

<h2 id="Exceptions">Exceptions</h2>

<p>This method doesn't throw exceptions; instead, it rejects the returned promise,
  passing a {{domxref("DOMException")}} whose <code>name</code> is one of the
  following:</p>

<dl>
  <dt><code>"AbortError"</code></dt>
  <dd>The scan operation was aborted with the {{DOMxRef("AbortSignal")}} passed in the <code>options</code> argument.</dd>
  <dt><code>"NotAllowedError"</code></dt>
  <dd>The permission for this operation was rejected or <code>overwrite</code> is
    <code>false</code> and there are already records on the tag.</dd>
  <dt><code>"NotSupportedError"</code></dt>
  <dd>There is no NFC adapter compatible with Web NFC, or the available NFC adapter does
    not support pushing messages, or connection can not be established.</dd>
  <dt><code>"NotReadableError"</code></dt>
  <dd>The UA is not allowed to access underlying NFC adapter (e.g., due to user
    preference).</dd>
  <dt><code>"NetworkError"</code></dt>
  <dd>Transfer failed after it already started (e.g., the tag was removed from the
    reader).</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3>Write a text string</h3>

<p>The following example shows how to write a {{DOMxRef("DOMString")}} to an NFC tag and process any errors that occur.</p>

<pre class="brush: js">const ndef = new NDEFReader();
ndef.write(
  "Hello World"
).then(() => {
  console.log("Message written.");
}).catch(error => {
  console.log(`Write failed :-( try again: ${error}.`);
});</pre>

<h3>Write a URL</h3>

<p>The following example shows how to write a record object (described above) to an NFC tag and process any errors that occur.</p>

<pre class="brush: js">const ndef = new NDEFReader();
try {
  await ndef.write({
    records: [{ recordType: "url", data: "http://example.com/" }]
  });
} catch {
  console.log("Write failed :-( try again.");
};</pre>


<h3>Scheduling a write with a timeout</h3>

<p>It's sometimes useful to set a time limit on a write operation. For example, you ask the user to touch a tag, but no tag is found within a certain amount of time, then you time out.</p>

<pre class="brush: js">const ndef = new NDEFReader();
ndef.onreading = (event) => console.log("We read a tag!");

function write(data, { timeout } = {}) {
  return new Promise((resolve, reject) => {
    const ctlr = new AbortController();
    ctlr.signal.onabort = () => reject("Time is up, bailing out!");
    setTimeout(() => ctlr.abort(), timeout);

    ndef.addEventListener("reading", event => {
      ndef.write(data, { signal: ctlr.signal }).then(resolve, reject);
    }, { once: true });
  });
}

await ndef.scan();
try {
  // Let's wait for 5 seconds only.
  await write("Hello World", { timeout: 5_000 });
} catch(err) {
  console.error("Something went wrong", err);
} finally {
  console.log("We wrote to a tag!");
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
