---
title: SyncEvent
slug: Web/API/SyncEvent
tags:
  - API
  - Background Sync
  - Interface
  - Non-standard
  - Offline
  - Reference
  - ServiceWorker
  - SyncEvent
  - Workers
browser-compat: api.SyncEvent
---
<p>{{APIRef("Service Workers API")}} {{Non-standard_header}}</p>

<p>The <code><strong>SyncEvent</strong></code> interface represents a sync action that is dispatched on the {{domxref("ServiceWorkerGlobalScope")}} of a ServiceWorker.</p>

<p>This interface inherits from the {{domxref("ExtendableEvent")}} interface.</p>

<p>{{InheritanceDiagram(700, 60, 20)}}</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("SyncEvent.SyncEvent()")}}</dt>
 <dd>Creates a new <code>SyncEvent</code> object.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em>Inherits properties from its ancestor, {{domxref("Event")}}</em>.</p>

<dl>
 <dt>{{domxref("SyncEvent.tag")}} {{readonlyinline}}</dt>
 <dd>Returns the developer-defined identifier for this <code>SyncEvent</code>.</dd>
 <dt>{{domxref("SyncEvent.lastChance")}} {{readonlyinline}}</dt>
 <dd>Returns <code>true</code> if the user agent will not make further synchronization attempts after the current attempt.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>Inherits methods from its parent, {{domxref("ExtendableEvent")}}</em>. </p>

<p>None.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
