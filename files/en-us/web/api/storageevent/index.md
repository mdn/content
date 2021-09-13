---
title: StorageEvent
slug: Web/API/StorageEvent
tags:
- API
- Interface
- Reference
- StorageEvent
- Web Storage API
browser-compat: api.StorageEvent
---
<div>{{APIRef("Web Storage API")}}</div>

<p>The <strong><code>StorageEvent</code></strong> interface is implemented by the {{domxref("Window/storage_event", "storage")}} event, which is
  sent to a window
  when a storage area the window has access to is changed within the context of another document.</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Constructor">Constructor</h2>

<dl>
  <dt>{{domxref("StorageEvent.StorageEvent()", "StorageEvent()")}}</dt>
  <dd>Returns a newly constructed <code>StorageEvent</code> object.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em>In addition to the properties listed below, this interface inherits the properties of its parent interface, {{domxref("Event")}}.</em></p>

<dl>
  <dt>{{domxref("StorageEvent.key", "key")}} {{ReadOnlyInline}}</dt>
  <dd>Returns a {{DOMxRef("DOMString")}} that represents the key changed.
    The <code>key</code> attribute is {{jsxref("null")}}
    when the change is caused by the storage <code>clear()</code> method.</dd>

  <dt>{{domxref("StorageEvent.newValue", "newValue")}} {{ReadOnlyInline}}</dt>
  <dd>Returns a {{DOMxRef("DOMString")}} with the new value of the <code>key</code>.
    This value is <code>null</code>
    when the change has been invoked by storage <code>clear()</code> method,
    or the <code>key</code> has been removed from the storage.</dd>

  <dt>{{domxref("StorageEvent.oldValue", "oldValue")}} {{ReadOnlyInline}}</dt>
  <dd> Returns a {{DOMxRef("DOMString")}} with the original value of the <code>key</code>.
    This value is <code>null</code> when the <code>key</code> has been newly added
    and therefore doesn't have any previous value.</dd>

  <dt>{{domxref("StorageEvent.storageArea", "storageArea")}} {{ReadOnlyInline}}</dt>
  <dd>Returns a {{DOMxRef("Storage")}} object that represents the storage that was affected.</dd>

  <dt>{{domxref("StorageEvent.url", "url")}} {{ReadOnlyInline}}</dt>
  <dd>Returns {{DOMxRef("DOMString")}} with the URL of the document whose <code>key</code> changed.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>In addition to the methods listed below, this interface inherits the methods of its parent interface, {{domxref("Event")}}.</em></p>

<dl>
  <dt>{{domxref("StorageEvent.initStorageEvent", "initStorageEvent()")}} {{deprecated_inline}}</dt>
  <dd>Initializes the event in a manner analogous to the similarly-named {{domxref("Event.initEvent", "initEvent()")}} } method in the DOM
    Events interfaces. Use the constructor instead.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
