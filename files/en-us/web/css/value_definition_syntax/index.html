---
title: Value definition syntax
slug: Web/CSS/Value_definition_syntax
tags:
  - CSS
  - Guide
  - Reference
  - Syntax
---
<div>{{CSSRef}}</div>

<p><strong>CSS value definition syntax</strong>, a formal grammar, is used for defining the set of valid values for a CSS property or function. In addition to this syntax, the set of valid values can be further restricted by semantic constraints (for example, for a number to be strictly positive).</p>

<p>The definition syntax describes which values are allowed and the interactions between them. A component can be a <em>keyword</em>, some characters considered as a <em>literal</em>, or a value of a given CSS data type or of another CSS property.</p>

<h2 id="Component_value_types">Component value types</h2>

<h3 id="Keywords">Keywords</h3>

<h4 id="Generic_keywords">Generic keywords</h4>

<p>A keyword with a predefined meaning appears literally, without quotation marks. For example: <code>auto</code>, <code>smaller</code> or <code>ease-in</code>.</p>

<h4 id="The_specific_case_of_inherit_initial_and_unset">The specific case of <code>inherit</code>, <code>initial</code> and <code>unset</code></h4>

<p>All CSS properties accept the keywords <code>inherit</code>, <code>initial</code> and <code>unset</code>, that are defined throughout CSS. They are not shown in the value definition, and are implicitly defined.</p>

<h3 id="Literals">Literals</h3>

<p>In CSS, a few characters can appear on their own, like the slash ('<code>/</code>') or the comma ('<code>,</code>'), and are used in a property definition to separate its parts. The comma is often used to separate values in enumerations, or parameters in mathematical-like functions; the slash often separates parts of the value that are semantically different, but have a common syntax. Typically, the slash is used in shorthand properties; to separate component that are of the same type, but belong to different properties.</p>

<p>Both symbols appear literally in a value definition.</p>

<h3 id="Data_types">Data types</h3>

<h4 id="Basic_data_types">Basic data types</h4>

<p>Some kind of data are used throughout CSS, and are defined once for all values in the specification. Called <em>basic data types</em>, they are represented with their name surrounded by the symbol '<code>&lt;</code>' and '<code>&gt;</code>': {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …</p>

<h4 id="Non-terminal_data_types">Non-terminal data types</h4>

<p>Less common data types, called <em>non-terminal data types</em>, are also surrounded  by '<code>&lt;</code>' and '<code>&gt;</code>'.</p>

<p>Non-terminal data types are of two kinds:</p>

<ul>
 <li>data types <em>sharing the same name of a property</em>, put between quotes. In this case, the data type shares the same set of values as the property. They are often used in the definition of shorthand properties.</li>
 <li>data type <em>not sharing the same name of a property</em>. These data types are very close to the basic data types. They only differ from the basic data types in the physical location of their definition. In this case, the definition is usually physically very close to the definition of the property using them.</li>
</ul>

<h2 id="Component_value_combinators">Component value combinators</h2>

<h3 id="Brackets">Brackets</h3>

<p><em>Brackets</em> enclose several entities, combinators, and multipliers, then transform them as a single component. They are used to <strong>group components to bypass the precedence rules</strong>.</p>

<pre class="brush: css">bold [ thin &amp;&amp; &lt;length&gt; ]</pre>

<p>This example matches the following values:</p>

<ul>
 <li><code>bold thin 2vh</code></li>
 <li><code>bold 0 thin</code></li>
 <li><code>bold thin 3.5em</code></li>
</ul>

<p>But not:</p>

<ul>
 <li><code>thin bold 3em</code>, as <code>bold</code> is juxtaposed with the component defined by the brackets, it must appear before it.</li>
</ul>

<h3 id="Juxtaposition">Juxtaposition</h3>

<p>Placing several keywords, literals or data types, next to one another, only separated by one or several spaces, is called <em>juxtaposition</em>. All juxtaposed components are <strong>mandatory and should appear in the exact order</strong>.</p>

<pre class="brush: css">bold &lt;length&gt; , thin
</pre>

<p>This example matches the following values:</p>

<ul>
 <li><code>bold 1em, thin</code></li>
 <li><code>bold 0, thin</code></li>
 <li><code>bold 2.5cm, thin</code></li>
 <li><code>bold 3vh, thin</code></li>
</ul>

<p>But not:</p>

<ul>
 <li><code>thin 1em, bold</code>, as the entities must be in the expressed order</li>
 <li><code>bold 1em thin</code>, as the entities are mandatory; the comma, a literal, must be present</li>
 <li><code>bold 0.5ms, thin</code>, as the <code>ms</code> values are not {{CSSxRef("&lt;length&gt;")}}</li>
</ul>

<h3 id="Double_ampersand">Double ampersand</h3>

<p>Separating two or more components, by a <em>double ampersand</em>, <code>&amp;&amp;</code>, means that all these entities are <strong>mandatory but may appear in any order</strong>.</p>

<pre class="brush: css">bold &amp;&amp; &lt;length&gt;
</pre>

<p>This example matches the following values:</p>

<ul>
 <li><code>bold 1em</code></li>
 <li><code>bold 0</code></li>
 <li><code>2.5cm bold</code></li>
 <li><code>3vh bold</code></li>
</ul>

<p>But not:</p>

<ul>
 <li><code>bold</code>, as both components must appear in the value.</li>
 <li><code>bold 1em bold</code>, as both components must appear only one time.</li>
</ul>

<div class="notecard note">
<p><strong>Note:</strong> juxtaposition has precedence over the double ampersand, meaning that <code>bold thin &amp;&amp; &lt;length&gt;</code> is equivalent to <code>[ bold thin ] &amp;&amp; &lt;length&gt;</code>. It describes <code>bold thin &lt;length&gt;</code> or <code>&lt;length&gt; bold thin</code> but not <code>bold &lt;length&gt; thin</code>.</p>
</div>

<h3 id="Double_bar">Double bar</h3>

<p>Separating two or more components by a <em>double bar</em>, <code>||</code>, means that all entities are options: <strong>at least one of them must be present, and they may appear in any order</strong>. Typically this is used to define the different values of a <a href="/en-US/docs/Web/CSS/Shorthand_properties">shorthand property</a>.</p>

<pre class="brush: css">&lt;'border-width'&gt; || &lt;'border-style'&gt; || &lt;'border-color'&gt;
</pre>

<p>This example matches the following values:</p>

<ul>
 <li><code>1em solid blue</code></li>
 <li><code>blue 1em</code></li>
 <li><code>solid 1px yellow</code></li>
</ul>

<p>But not:</p>

<ul>
 <li><code>blue yellow</code>, as a component must appear at most one single time.</li>
 <li><code>bold</code>, as it isn't a keyword allowed as value of any of the entity.</li>
</ul>

<div class="notecard note">
<p><strong>Note:</strong> the double ampersand has precedence over the double bar, meaning that <code>bold || thin &amp;&amp; &lt;length&gt;</code> is equivalent to <code>bold || [ thin &amp;&amp; &lt;length&gt; ]</code>. It describes <code>bold</code>, <code>thin &lt;length&gt;</code>, <code>bold thin &lt;length&gt;</code>, or <code>thin &lt;length&gt; bold</code> but not <code>&lt;length&gt; bold thin</code> as bold, if not omitted, must be placed before or after the whole <code>thin &amp;&amp; &lt;length&gt;</code> component.</p>
</div>

<h3 id="Single_bar">Single bar</h3>

<p>Separating two or more entities by a <em>single bar</em>, <code>|</code>, means that all entities are exclusive options: <strong>exactly one of these options must be present</strong>. This is typically used to separate a list of possible keywords.</p>

<pre class="brush: css">&lt;percentage&gt; | &lt;length&gt; | left | center | right | top | bottom</pre>

<p>This example matches the following values:</p>

<ul>
 <li><code>3%</code></li>
 <li><code>0</code></li>
 <li><code>3.5em</code></li>
 <li><code>left</code></li>
 <li><code>center</code></li>
 <li><code>right</code></li>
 <li><code>top</code></li>
 <li><code>bottom</code></li>
</ul>

<p>But not:</p>

<ul>
 <li><code>center 3%</code>, as only one of the components must be present.</li>
 <li><code>3em 4.5em</code>, as a component must be present at most one time.</li>
</ul>

<div class="notecard note">
<p><strong>Note:</strong> the double bar has precedence over the single bar, meaning that <code>bold | thin || &lt;length&gt;</code> is equivalent to <code>bold | [ thin || &lt;length&gt; ]</code>. It describes <code>bold</code>, <code>thin</code>, <code>&lt;length&gt;</code>, <code>&lt;length&gt; thin</code>, or <code>thin &lt;length&gt; </code>but not <code>bold &lt;length&gt;</code> as only one entity from each side of the <code>|</code> combinator can be present.</p>
</div>

<h2 id="Component_value_multipliers">Component value multipliers</h2>

<p>A multiplier is a sign that indicate how many times a preceding entity can be repeated. Without a multiplier, an entity must appear exactly one time.</p>

<p>Note that multipliers cannot be added and have all precedence over combinators.</p>

<h3 id="Asterisk">Asterisk (<code>*</code>)</h3>

<p>The <em>asterisk multiplier</em> indicates that the entity may appear <strong>zero, one or several times</strong>.</p>

<pre class="brush: css">bold smaller*</pre>

<p>This example matches the following values:</p>

<ul>
 <li><code>bold</code></li>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller smaller</code></li>
 <li><code>bold smaller smaller smaller</code>, and so on.</li>
</ul>

<p>But not:</p>

<ul>
 <li><code>smaller</code>, as <code>bold</code> is juxtaposed, and must appear before any <code>smaller</code> keyword.</li>
</ul>

<h3 id="Plus">Plus (<code>+</code>)</h3>

<p>The <em>plus multiplier</em> indicates that the entity may appear <strong>one or several times</strong>.</p>

<pre class="brush: css">bold smaller+</pre>

<p>This example matches the following values:</p>

<ul>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller smaller</code></li>
 <li><code>bold smaller smaller smaller</code>, and so on.</li>
</ul>

<p>But not:</p>

<ul>
 <li><code>bold</code>, as <code>smaller</code> must appear at least one time.</li>
 <li><code>smaller</code>, as <code>bold</code> is juxtaposed and must appear before any <code>smaller</code> keyword.</li>
</ul>

<h3 id="Question_mark">Question mark (<code>?</code>)</h3>

<p>The <em>question mark multiplier</em> indicates that the entity is optional, and <strong>must appear zero or one time</strong>.</p>

<pre class="brush: css">bold smaller?</pre>

<p>This example matches the following values:</p>

<ul>
 <li><code>bold</code></li>
 <li><code>bold smaller</code></li>
</ul>

<p>But not:</p>

<ul>
 <li><code>bold smaller smaller</code>, as <code>smaller</code> must appear at most one time.</li>
 <li><code>smaller</code>, as <code>bold</code> is juxtaposed and must appear before any <code>smaller</code> keyword.</li>
</ul>

<h3 id="Curly_braces">Curly braces (<code>{ }</code>)</h3>

<p>The <em>curly braces multiplier</em>, enclosing two integers separated by a comma, A and B, indicates that the entity <strong>must appear at least A times and at most B times</strong>.</p>

<pre class="brush: css">bold smaller{1,3}</pre>

<p>This example matches the following values:</p>

<ul>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller smaller</code></li>
 <li><code>bold smaller smaller smaller</code></li>
</ul>

<p>But not:</p>

<ul>
 <li><code>bold</code>, as <code>smaller</code> must appear at least one time.</li>
 <li><code>bold smaller smaller smaller smaller</code>, as <code>smaller</code> must appear at most three times.</li>
 <li><code>smaller</code>, as <code>bold</code> is juxtaposed and must appear before any <code>smaller</code> keyword</li>
</ul>

<h3 id="Hash_mark">Hash mark (<code>#</code>)</h3>

<p>The <em>hash mark multiplier</em> indicates that the entity may be repeated one or more times (for example, the plus multiplier), but each occurrence is separated by a comma (',').</p>

<pre class="brush: css">bold smaller#</pre>

<p>This example matches the following values:</p>

<ul>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller, smaller</code></li>
 <li><code>bold smaller, smaller, smaller</code>, and so on.</li>
</ul>

<p>But not:</p>

<ul>
 <li><code>bold</code>, as <code>smaller</code> must appear at least one time.</li>
 <li><code>bold smaller smaller smaller</code>, as the different occurrence of <code>smaller</code> must be separated by commas.</li>
 <li><code>smaller</code>, as <code>bold</code> is juxtaposed and must appear before any <code>smaller</code> keyword.</li>
</ul>

<h3 id="Exclamation_point">Exclamation point (<code>!</code>)</h3>

<p>The <em>exclamation point multiplier</em> after a group indicates that the group is required, and must produce at least one value; even if the grammar of the items within the group would otherwise allow the entire contents to be omitted, at least one component value must not be omitted.</p>

<pre class="brush: css">[ bold? smaller? ]!
</pre>

<p>This example matches the following values:</p>

<ul>
 <li><code>bold</code></li>
 <li><code>smaller</code></li>
 <li><code>bold smaller</code></li>
</ul>

<p>But not:</p>

<ul>
 <li>neither <code>bold</code> nor <code>smaller</code>, as one of them must appear.</li>
 <li><code>smaller bold</code>, as <code>bold</code> is juxtaposed and must appear before the <code>smaller</code> keyword.</li>
 <li><code>bold smaller bold</code>, as <code>bold</code> and <code>smaller</code> may only appear once.</li>
</ul>

<h2 id="Summary">Summary</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Sign</th>
   <th scope="col">Name</th>
   <th scope="col">Description</th>
   <th scope="col">Example</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th colspan="4">Combinators</th>
  </tr>
  <tr>
   <td></td>
   <td>Juxtaposition</td>
   <td>Components are mandatory and should appear in that order</td>
   <td><code>solid &lt;length&gt;</code></td>
  </tr>
  <tr>
   <td><code>&amp;&amp;</code></td>
   <td>Double ampersand</td>
   <td>Components are mandatory but may appear in any order</td>
   <td><code>&lt;length&gt; &amp;&amp; &lt;string&gt;</code></td>
  </tr>
  <tr>
   <td><code>||</code></td>
   <td>Double bar</td>
   <td>At least one of the components must be present, and they may appear in any order.</td>
   <td><code>&lt;'border-image-outset'&gt; || &lt;'border-image-slice'&gt;</code></td>
  </tr>
  <tr>
   <td><code>|</code></td>
   <td>Single bar</td>
   <td>Exactly one of the components must be present</td>
   <td><code>smaller | small | normal | big | bigger</code></td>
  </tr>
  <tr>
   <td><code>[ ]</code></td>
   <td>Brackets</td>
   <td>Group components to bypass precedence rules</td>
   <td><code>bold [ thin &amp;&amp; &lt;length&gt; ]</code></td>
  </tr>
  <tr>
   <th colspan="4">Multipliers</th>
  </tr>
  <tr>
   <td></td>
   <td>No multiplier</td>
   <td>Exactly 1 times</td>
   <td><code>solid</code></td>
  </tr>
  <tr>
   <td><code>*</code></td>
   <td>Asterisk</td>
   <td>0 or more times</td>
   <td><code>bold smaller*</code></td>
  </tr>
  <tr>
   <td><code>+</code></td>
   <td>Plus sign</td>
   <td>1 or more times</td>
   <td><code>bold smaller+</code></td>
  </tr>
  <tr>
   <td><code>?</code></td>
   <td>Question mark</td>
   <td>0 or 1 time (that is <em>optional)</em></td>
   <td><code>bold smaller?</code></td>
  </tr>
  <tr>
   <td><code>{A,B}</code></td>
   <td>Curly braces</td>
   <td>At least <code>A</code> times, at most <code>B</code> times</td>
   <td><code>bold smaller{1,3}</code></td>
  </tr>
  <tr>
   <td><code>#</code></td>
   <td>Hash mark</td>
   <td>1 or more times, but each occurrence separated by a comma ('<code>,</code>')</td>
   <td><code>bold smaller#</code></td>
  </tr>
  <tr>
   <td><code>!</code></td>
   <td>Exclamation point</td>
   <td>Group must produce at least 1 value</td>
   <td><code>[ bold? smaller? ]!</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Values", "#value-defs", "Value definition syntax")}}</td>
   <td>{{Spec2("CSS3 Values")}}</td>
   <td>Adds the hash mark multiplier.</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "about.html#value-defs", "Value definition syntax")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>Adds the double ampersand combinator.</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS1", "#notation-for-property-values", "Value definition syntax")}}</td>
   <td>{{Spec2("CSS1")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{CSS_key_concepts}}</li>
</ul>
