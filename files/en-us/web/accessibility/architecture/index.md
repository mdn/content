---
title: Architecture
slug: Web/Accessibility/Architecture
tags:
  - Accessibility
  - Developing Mozilla
---
<h2 id="Introduction">Introduction</h2>
<p>The implementation of text and embedded objects in Mozilla is clever but confusing. Here is a bit of history and an explanation.</p>
<p>Mozilla exposes a document containment hierarchy with text and embedded objects. Sometimes the embedded object is really just another text container with more embedded objects.</p>
<p>However in accessibility hierarchies such as ATK and IAccessible2, text is not exposed in leaf nodes as it is in a W3C DOM. The text is actually exposed via a special text interface in the parent of the text nodes. It is concatenated together with all its sibling text nodes, and embedded objects between the text nodes are exposed as the unicode embedded object character '\xfffc'. One reason for this is that there are fewer nodes to pass across process, and that improves performance.</p>
<h2 id="Node_types">Node types</h2>
<ul>
  <li>Text content (ROLE_TEXT) objects are implemented by nsTextAccessible. Their text is actually exposed in their parent nsHyperTextAccessible via nsIAccessibleText. When the hierarchy is finally exposed to ATK they are stripped out. They are in the nsIAccessible hierarchy to make it easy for nsHyperTextAccessible to piece its final text representation together. They are kept in IAccessible2 for backward compatibility with MSAA clients that expect text in leaf nodes.</li>
  <li>HTML<br>
    (ROLE_WHITESPACE) objects are implemented by nsHTMLBRAccessible. They end up getting exposed as '\n' in their parent nsHyperTextAccessible. When the hierarchy is finally exposed to ATK they are stripped out as leaf nodes, but the \n remains in the containing text. They are in the nsIAccessible hierarchy to make it easy for nsHyperTextAccessible to piece its text representation together.</li>
  <li>Everything else uses whatever nsAccessible-derived implementation that's appropriate. If it has text siblings, then it gets exposed as the unicode char for an embedded object, which is '\xfffc' within the parent nsHyperTextAccessible. In addition, nsIAccessibleHyperLink is implemented on any non-text child inside a container that also has text. This allows AT's to find its position within that text, because the hyperlink interface exposes a start and end index. In fact, the end index will always be 1 larger than the start index, because the object is always represented by a single '\xfffc' character. If you want to know that something is really a link, check to see if it is ROLE_LINK.</li>
  <li>HTML containers are implemented by nsHyperTextAccessible. They support the nsIAccessibleHyperText is implemented on any container element that has both text and embedded objects for accessible children.</li>
</ul>
<h2 id="Why_HyperLink_is_often_not_a_link">Why HyperLink is often not a link</h2>
<p>As explained above, anything that is embedded in text implements the Hyperlink interface.</p>
<p>While it is odd to call non-link objects a link, this was a necessary compromise in the <a href="https://www.mozilla.org/access/unix/new-atk.html">newatk design</a> because it is necessary to know where objects exist within their containing text. Previously the hyper link interface was really only for links, but the design could not fully represent an HTML document hierarchy. Keeping the link name of the interface is unfortunate but necessary for backwards compatibility, without introducing superfluous interfaces.</p>
<h2 id="API_comparison">API comparison</h2>
<ul>
  <li>nsIAccessible (internal). When you have an nsIAccessibleHyperText, you can ask for its links, which is the subset of children from the nsIAccessible hierarchy that are not text or whitespace.</li>
  <li>ATK: Same as nsIAccessible, except that text and whitespace leaf nodes are not exposed. The children of any Hypertext object are an exact match to the links it exposes. The implementation doesn't create AtkObjects for a whitespace or text leaf nsIAccessibles. See the <a href="http://mxr.mozilla.org/seamonkey/search?string=isembeddedobject&amp;find=atk&amp;findi=&amp;filter=&amp;tree=seamonkey">ATK uses of IsEmbeddedObject()</a> for more information on how we do this.</li>
  <li>IAccessible2: Same as nsIAccessible. Text and whitespace leaf nodes are exposed, but are redundant with the information in the parent object's nsIAccessibleText. This is done for backward compatibility with older MSAA clients which didn't have access to a text interface. The children of a Hypertext object are a superset of the links it exposes. The new system makes it easier to show caret positions etc., which will be an improvement in IA2 over MSAA.</li>
</ul>
<h2 id="Example">Example</h2>
<p>Take the following HTML code:</p>
<pre class="eval"> &lt;div&gt;Hello&lt;a href="<a href="https://www.mozilla.org/access">http://www.mozilla.org/access</a>"&gt;My link&lt;img src="image.gif"&gt;is cool&lt;/a&gt;Bye&lt;/div&gt;
</pre>
<p>Both the &lt;a&gt; and &lt;img&gt; are hyperlinks Also, both the &lt;div&gt; and &lt;a&gt; are hypertexts So the &lt;a&gt; is both a hypertext and a hyperlink, because it contains text and is contained within text.</p>
<p>This means that we have an exact mirror to the dom, but text lives in the parents instead of in the leaves, which now don't really provide additional useful information. They are only provided under MSAA/IA2 for backward compatibility.</p>
<h2 id="Implementation_classes">Implementation classes</h2>
<p>Here are some notes on the classes we use:</p>
<p><a href="http://lxr.mozilla.org/seamonkey/find?string=nshypertextacc">nsHyperTextAccessible</a> is for any container that may wrap both text and embedded object:</p>
<ul>
  <li>nsIAccessibleText is supported if there is potentially any text in the container</li>
  <li>nsIAccessibleHyperText is supported if there is potentially text and embedded objects together in the container.</li>
  <li>nsIAccessibleEditableText is supported if the area is potentially editable. If it's actually editable it will also provide STATE_EDITABLE.</li>
</ul>
<p><a href="http://lxr.mozilla.org/seamonkey/find?string=nsAccessible%5C.">nsAccessible</a> still represents any node in the tree. If the node is embedded in a parent that is an nsIAccessibleHyperText, the node will be exposed as an nsIAccessibleHyperlink. Consumers can use this interface to determine the position of the object in the parent's text.</p>
<p><a href="http://lxr.mozilla.org/seamonkey/find?string=nstextaccessible">nsTextAccessible</a> serves 2 purposes</p>
<ul>
  <li>it is used by nsHyperTextAccessible to collect information about itself</li>
  <li>it is still exposed in MSAA for backward compatibility by old windows assistive technologies. Those AT's don't yet know about any IAccessibleText yet, and want to see the hierarchy how they always did -- with text in leaf nodes.</li>
</ul>
<h2 id="How_does_an_AT_deal_with_text">How does an AT deal with text</h2>
<h3 id=".28A.29_To_get_the_embedded_object_for_an_embedded_object_char:">(A) To get the embedded object for an embedded object char:</h3>
<ol>
  <li>linkIndex = IAHyperText::getLinkIndex(offset)</li>
  <li>IAHyperLink*object = IAHyperText::getLink(linkIndex)</li>
  <li>IAccessible* accessible = QI/QS(object)</li>
</ol>
<h3 id=".28B.29_To_get_the_offset_in_the_parent_text_for_a_given_embedded_object:">(B) To get the offset in the parent text for a given embedded object:</h3>
<ol>
  <li>QI/QA to IAHyperLink</li>
  <li>If not successful, then it is not embedded in text, so it's position in parent should be determined just by IA2::indexInParent, which will return its child offset within the parent. Examples of objects not embedded in text are the child options in list boxes and combo boxes.</li>
  <li>otherwise, use IAHyperLink::getStartIndex() to find the index in parent. In Firefox, the results of getEndIndex will always be the startIndex + 1, because links are always just represented by a single embedded object character</li>
</ol>
<h3 id=".28C.29_To_get_the_next_char_fom_a_given_offset_in_an_accessible_text:">(C) To get the next char fom a given offset in an accessible text:</h3>
<ol>
  <li>If current char is 0 (end of string), then we are on a hard line break: get next node (typical depth first search), and set the current offset = 0</li>
  <li>IAText::ch = getCharacterAtOffset(++offset);</li>
  <li>If ch == embedded object char (0xfffc) then get object for that offset (see A above), then set the current offset to -1, and go to step 2</li>
  <li>if ch == 0 then we must determine whether we're on a hard line break:
    <ol>
      <li>If the current accessible's IA2 role is SECTION, HEADING or PARAGRAPH then we are on a hard line break, so stop</li>
      <li>get the offset in the parent text for this object (see B above), and then repeat step (C)2 above</li>
    </ol>
  </li>
  <li>done</li>
</ol>
<h3 id=".28D.29_To_get_the_next_word_or_line:">(D) To get the next word or line:</h3>
<ol>
  <li>Look one character ahead.</li>
  <li>If the next character does not exist, proceed to the next accessible in depth first search order and recurse on the first character until a non-embed is found.</li>
  <li>If the current character falls within a text substring, locate the line ending of that substring or the next embed, whichever comes first:
    <ol>
      <li>Get the current line start and end offsets.</li>
      <li>Compute the item offset relative to the start of this line</li>
      <li>Search forward from the starting offset for an embed character</li>
      <li>If an embed character is found, continue processing with offset = index plus the line start index</li>
      <li>If an embed character is not found:
        <ol>
          <li>If the line ending is equal to one less than the length of all text in the accessible, proceed to the next accessible in dept first search order and recurse on the first character until a non-embed is found.</li>
          <li>Otherwise, continue processing with offset = the index at the end of the line.</li>
        </ol>
      </li>
      <li>If the character at the offset is an embed, proceed to its corresponding accessible and recurse on the first character until a non-embed is found.</li>
      <li>Otherwise, the offset marks the start of a new line.</li>
    </ol>
  </li>
</ol>
<p>Navigating to the next word follows a similar pattern. Navigating previous requires returning to the embed character in the parent accessible when the point of regard reaches the end of text in the corresponding child accessible for the embed.</p>
<p>See <a href="http://svn.gnome.org/viewcvs/lsr/trunk/src/Adapters/ATSPI/HypertextAdapter.py?view=markup">http://svn.gnome.org/viewcvs/lsr/tru...py?view=markup</a> for a BSD implementation.</p>
<h3 id=".28E.29_To_grab_a_subtree_of_content:">(E) To grab a subtree of content:</h3>
<p>Although under Windows text content is still exposed in leaf nodes of ROLE_TEXT, it is no longer necessary to visit those nodes. Therefore for parent nodes that support the HyperText interface, it is more performant to grab the text from the AccessibleText interface and then only visit the link children. The HyperLink interface can be used to grab the children. Using this technique is about twice as fast as visiting all nodes in the tree, according to tests run by the developers of NVDA.</p>
<h3 id=".28F.29_To_get_the_line_of_text_at_the_caret:">(F) To get the line of text at the caret:</h3>
<p>Many editors, including the Mozilla editor, have a strange issue with caret offsets. The caret can sometimes visually appear at the end of a line, but logically it is on the first character on the next line. You can test this in a given editor by pressing the End key on a line, to see whether the caret is shown past the End of the line. To doublecheck, hit the Delete key and see if it removes the first char of the next line.</p>
<p>Therefore, as the user arrows up and down, if you use the AccessibleText::caretOffset and retrieve the line with that offset, you may not get the line with the visual caret returned. You are getting the line starting with the logical caret offset, which may be the next line.</p>
<p>To get around this problem, Mozilla allows the magic value of -2 to be passed into AccessibleText/AccessibleHyperText methods that take a character offset. This value of -2 means, use the caret position. Not only can this save extra calls, but it will always return the visual line of text when used with the getText methods and line boundaries.</p>
<p>The following magic offsets are useful to define in your code:</p>
<ul>
  <li><code>#define CHAR_OFFSET_END_OF_LINE = -1</code></li>
  <li><code>#define CHAR_OFFSET_CARET = -2</code></li>
</ul>
<h2 id="More_information">More information</h2>
<p>Many more details on the Mozilla document hierarchy are in the <a href="https://www.mozilla.org/access/unix/new-atk.html">original design document for newatk</a>. There are also details on the <a href="https://www.mozilla.org/access/architecture">general implementation of Mozilla accessibility architecture</a> (needs updating).</p>
