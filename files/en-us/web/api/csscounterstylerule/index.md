---
title: CSSCounterStyleRule
slug: Web/API/CSSCounterStyleRule
tags:
  - API
  - CSS Counter Styles
  - Interface
  - Reference
browser-compat: api.CSSCounterStyleRule
---
<p>{{APIRef("CSS Counter Styles")}}</p>

<p>The <strong><code>CSSCounterStyleRule</code></strong> interface represents an {{CSSxRef("@counter-style")}} <a href="/en-US/docs/Web/CSS/At-rule">at-rule</a>.</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Properties">Properties</h2>

<p><em>This interface also inherits properties from its parent {{DOMxRef("CSSRule")}}.</em></p>

<dl>
 <dt>{{DOMxRef("CSSCounterStyleRule.name")}}</dt>
 <dd>Is a {{DOMxRef("CSSOMString")}} object that contains the serialization of the {{CSSxRef("&lt;custom-ident&gt;")}} defined as the <code>name</code> for the associated rule.</dd>
 <dt>{{DOMxRef("CSSCounterStyleRule.system")}}</dt>
 <dd>Is a {{DOMxRef("CSSOMString")}} object that contains the serialization of the {{CSSxRef("@counter-style/system", "system")}} descriptor defined for the associated rule. If the descriptor was not specified in the associated rule, the attribute returns an empty string.</dd>
 <dt>{{DOMxRef("CSSCounterStyleRule.symbols")}}</dt>
 <dd>Is a {{DOMxRef("CSSOMString")}} object that contains the serialization of the {{CSSxRef("@counter-style/symbols", "symbols")}} descriptor defined for the associated rule. If the descriptor was not specified in the associated rule, the attribute returns an empty string.</dd>
 <dt>{{DOMxRef("CSSCounterStyleRule.additiveSymbols")}}</dt>
 <dd>Is a {{DOMxRef("CSSOMString")}} object that contains the serialization of the {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}} descriptor defined for the associated rule. If the descriptor was not specified in the associated rule, the attribute returns an empty string.</dd>
 <dt>{{DOMxRef("CSSCounterStyleRule.negative")}}</dt>
 <dd>Is a {{DOMxRef("CSSOMString")}} object that contains the serialization of the {{CSSxRef("@counter-style/negative", "negative")}} descriptor defined for the associated rule. If the descriptor was not specified in the associated rule, the attribute returns an empty string.</dd>
 <dt>{{DOMxRef("CSSCounterStyleRule.prefix")}}</dt>
 <dd>Is a {{DOMxRef("CSSOMString")}} object that contains the serialization of the {{CSSxRef("@counter-style/prefix", "prefix")}} descriptor defined for the associated rule. If the descriptor was not specified in the associated rule, the attribute returns an empty string.</dd>
 <dt>{{DOMxRef("CSSCounterStyleRule.suffix")}}</dt>
 <dd>Is a {{DOMxRef("CSSOMString")}} object that contains the serialization of the {{CSSxRef("@counter-style/suffix", "suffix")}} descriptor defined for the associated rule. If the descriptor was not specified in the associated rule, the attribute returns an empty string.</dd>
 <dt>{{DOMxRef("CSSCounterStyleRule.range")}}</dt>
 <dd>Is a {{DOMxRef("CSSOMString")}} object that contains the serialization of the {{CSSxRef("@counter-style/range", "range")}} descriptor defined for the associated rule. If the descriptor was not specified in the associated rule, the attribute returns an empty string.</dd>
 <dt>{{DOMxRef("CSSCounterStyleRule.pad")}}</dt>
 <dd>Is a {{DOMxRef("CSSOMString")}} object that contains the serialization of the {{CSSxRef("@counter-style/pad", "pad")}} descriptor defined for the associated rule. If the descriptor was not specified in the associated rule, the attribute returns an empty string.</dd>
 <dt>{{DOMxRef("CSSCounterStyleRule.speakAs")}}</dt>
 <dd>Is a {{DOMxRef("CSSOMString")}} object that contains the serialization of the {{CSSxRef("@counter-style/speak-as", "speak-as")}} descriptor defined for the associated rule. If the descriptor was not specified in the associated rule, the attribute returns an empty string.</dd>
 <dt>{{DOMxRef("CSSCounterStyleRule.fallback")}}</dt>
 <dd>Is a {{DOMxRef("CSSOMString")}} object that contains the serialization of the {{CSSxRef("@counter-style/fallback", "fallback")}} descriptor defined for the associated rule. If the descriptor was not specified in the associated rule, the attribute returns an empty string.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>This interface doesn't implement any specific method but inherits methods from its parent {{DOMxRef("CSSRule")}}.</em></p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{CSSxRef("@counter-style")}}</li>
</ul>
