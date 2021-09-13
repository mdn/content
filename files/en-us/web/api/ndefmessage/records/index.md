---
title: NDEFMessage.records
slug: Web/API/NDEFMessage/records
tags:
  - NDEF
  - Reference
  - Web NFC
  - Property
browser-compat: api.NDEFMessage.records
---
<p>{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}</p>

<p>The <code>records</code> property of
    {{DOMxRef("NDEFMessage")}} interface represents a list of {{DOMxRef("NDEFRecord")}}s
    present in the NDEF message.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>recordList = NDEFMessage</em>.records;
</pre>

<h3 id="Value">Value</h3>

<p>A list of {{DOMxRef("NDEFRecord")}} object that represent data recorded in the message.
</p>

<h2 id="Examples">Examples</h2>

<p>The following example shows how to read the contents of an NDEF message. It first sets up an event handler for {{domxref("NDEFReader.onreading")}}, which is passed an instance of {{domxref("NDEFReadingEvent")}}. An <code>NDEFMessage</code> object is returned from {{domxref("NDEFReadingEvent.message")}}. It loops through <code>message.records</code> and processes each record based on its message type. The data member is a {{jsxref("DataView")}}, which allows handling data encoded in UTF-16.</p>

<pre class="brush: js">ndefReaderInst.onreading = event => {
  const ndefMessage = event.message;
  for (const record of ndefMessage.records) {
    console.log("Record type:  " + record.recordType);
    console.log("MIME type:    " + record.mediaType);
    console.log("Record id:    " + record.id);
    switch (record.recordType) {
      case "text":
        // TODO: Read text record with record data, lang, and encoding.
        break;
      case "url":
        // TODO: Read URL record with record data.
        break;
      default:
        // TODO: Handle other records with record data.
    };
  };
};
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
