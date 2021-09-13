---
title: NDEFRecord
slug: Web/API/NDEFRecord
tags:
  - NDEF
  - Reference
  - Web NFC
browser-compat: api.NDEFRecord
---
<p>{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}</p>

<p>The <strong><code>NDEFRecord</code></strong> interface of the <a href="/en-US/docs/Web/API/Web_NFC_API">Web NFC API</a> provides data that can be read from, or written to, compatible NFC devices, e.g. NFC tags supporting NDEF.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{DOMxRef("NDEFRecord.NDEFRecord", "NDEFRecord()")}} {{Experimental_Inline}}</dt>
 <dd>Returns a new <code>NDEFRecord</code>.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{DOMxRef("NDEFRecord.recordType")}} {{Experimental_Inline}} {{ReadOnlyInline}}</dt>
 <dd>Returns the record type of the record. Records must have either a standardized well-known type name such as <code>"empty"</code>, <code>"text"</code>, <code>"url"</code>, <code>"smart-poster"</code>, <code>"absolute-url"</code>, <code>"mime"</code>, or <code>"unknown"</code> or else an external type name, which consists of a domain name and custom type name separated by a colon (":").</dd>

 <dt>{{DOMxRef("NDEFRecord.mediaType")}} {{Experimental_Inline}} {{ReadOnlyInline}}</dt>
 <dd>Returns the {{Glossary("MIME type")}} of the record. This value will be <code>null</code> if <code>recordType</code> is not equal to <code>"mime"</code>.</dd>

 <dt>{{DOMxRef("NDEFRecord.id")}} {{Experimental_Inline}} {{ReadOnlyInline}}</dt>
 <dd>Returns the record identifier, which is an absolute or relative URL used to identify the record.<br>
 <strong>Note:</strong> The uniqueness of the identifier is enforced only by the generator of the record.</dd>

 <dt>{{DOMxRef("NDEFRecord.data")}} {{Experimental_Inline}} {{ReadOnlyInline}}</dt>
 <dd>Returns a {{jsxref("DataView")}} containing the raw bytes of the record's payload.</dd>

 <dt>{{DOMxRef("NDEFRecord.encoding")}} {{Experimental_Inline}} {{ReadOnlyInline}}</dt>
 <dd>Returns the encoding of a textual payload, or <code>null</code> otherwise.</dd>

 <dt>{{DOMxRef("NDEFRecord.lang")}} {{Experimental_Inline}} {{ReadOnlyInline}}</dt>
 <dd>Returns the language of a textual payload, or <code>null</code> if one was not supplied.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{DOMxRef("NDEFRecord.toRecords", "NDEFRecord.toRecords()")}} {{Experimental_Inline}}</dt>
 <dd>Converts {{DOMxRef("NDEFRecord.data")}} to a sequence of records. This allows parsing the payloads of record types which may contain nested records, such as smart poster and external type records.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
