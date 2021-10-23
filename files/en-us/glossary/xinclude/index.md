---
title: XInclude
slug: Glossary/XInclude
tags:
  - CodingScripting
  - Glossary
---
[XML Inclusions (XInclude)](https://www.w3.org/TR/xinclude/#text-included-items) is a W3C Recommendation to allow inclusion of XML more different sources in a more convenient fashion than XML external entities. When used in conjunction with XPointer (Firefox supports a subset of it, and is used in the code sample below), XInclude can also target just specific portions of a document for inclusion. Firefox does not support it natively, but the following function aims to allow its use with documents passed into it.

### Code sample

The following code aims to let \<xi:include> and \<xi:fallback> tags (the two elements in the language) with all of the attributes of \<xi:include> be included in an XML document so as to be resolvable into a single XML document.

(Note that this has not been thoroughly tested for all circumstances and may not necessarily reflect the standard behavior completely.)

Note also that if you wish to allow xml:base, you will need the [xml:base function](/en-US/docs/Archive/Add-ons/Code_snippets/XML/base_function), and the line beginning `var href = ...` should become:

```js
var href = getXmlBaseLink (/* XLink sans xml:base */ xinclude.getAttribute('href'), /* Element to query from */ xinclude);
```

```js
function resolveXIncludes(docu) {
    // http://www.w3.org/TR/xinclude/#xml-included-items
    var xincludes = docu.getElementsByTagNameNS('http://www.w3.org/2001/XInclude', 'include');
    if (xincludes) {
        for (i=0; i < xincludes.length; i++) {
            var xinclude = xincludes[i];
            var href = xinclude.getAttribute('href');
            var parse = xinclude.getAttribute('parse');
            var xpointer = xinclude.getAttribute('xpointer');
            var encoding = xinclude.getAttribute('encoding'); // e.g., UTF-8 // "text/xml or application/xml or matches text/*+xml or application/*+xml" before encoding (then UTF-8)
            var accept = xinclude.getAttribute('accept'); // header "Accept: "+x
            var acceptLanguage = xinclude.getAttribute('accept-language'); // "Accept-Language: "+x
            var xiFallback = xinclude.getElementsByTagNameNS('http://www.w3.org/2001/XInclude', 'fallback')[0]; // Only one such child is allowed
            if (href === '' || href === null) { // Points to same document if empty (null is equivalent to empty string)
                href = null; // Set for uniformity in testing below
                if (parse === 'xml' && xpointer === null) {
                    alert('There must be an XPointer attribute present if "href" is empty an parse is "xml"');
                    return false;
                }
            }
            else if (href.match(/#$/, '') || href.match(/^#/, '')) {
                alert('Fragment identifiers are disallowed in an XInclude "href" attribute');
                return false;
            }
            var j;
            var xincludeParent = xinclude.parentNode;
            try {
                netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect UniversalBrowserRead'); // Necessary with file:///-located files trying to reach external sites
                if (href !== null) {
                    var response, responseType;
                    var request = new XMLHttpRequest();
                    request.open('GET', href, false);
                    request.setRequestHeader('If-Modified-Since', 'Thu, 1 Jan 1970 00:00:00 GMT');
                    request.setRequestHeader('Cache-Control', 'no-cache');
                    if (accept) {
                        request.setRequestHeader('Accept', accept);
                    }
                    if (acceptLanguage) {
                        request.setRequestHeader('Accept-Language', acceptLanguage);
                    }
                    switch (parse) {
                        case 'text':
                            // Priority should be on media type:

                            var contentType = request.getResponseHeader('Content-Type');

                            //text/xml; charset="utf-8" // Send to get headers first?
                            // Fix: We test for file extensions as well in case file:// doesn't return content type (as seems to be the case); can some other tool be uesd in FF (or IE) to detect encoding of local file? Probably just need BOM test since other encodings must be specified
                            var patternXML = /\.(svg|xml|xul|rdf|xhtml)$/;
                            if ((contentType && contentType.match(/[text|application]\/(.*)\+?xml/)) || (href.indexOf('file://') === 0 && href.match(patternXML))) {
                                /* Grab the response as text (see below for that routine) and then find encoding within*/
                               var encName = '([A-Za-z][A-Za-z0-9._-]*)';
                               var pattern = new RegExp('^<\\?xml\\s+.*encoding\\s*=\\s*([\'"])'+encName+'\\1.*\\?>'); // Check document if not?
                               // Let the request be processed below
                            }
                            else {
                                if (encoding === '' || encoding === null) { // Encoding has no effect on XML
                                    encoding = 'utf-8';
                                }
                                request.overrideMimeType('text/plain; charset='+encoding); //'x-user-defined'
                            }
                            responseType = 'responseText';
                            break;
                        case null:
                        case 'xml':
                            responseType = 'responseXML';
                            break;
                        default:
                            alert('XInclude element contains an invalid "parse" attribute value');
                            return false;
                            break;
                    }
                    request.send(null);
                    if((request.status === 200 || request.status === 0) && request[responseType] !== null) {
                        response = request[responseType];
                         if (responseType === 'responseXML') {
                            // apply xpointer (only xpath1() subset is supported)
                            var responseNodes;
                            if (xpointer) {
                                var xpathResult = response.evaluate(
                                                                 xpointer,
                                                                 response,
                                                                 null,
                                                                 XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                                                                 null
                                                              );
                                var a = [];
                                for(var k = 0; k < xpathResult.snapshotLength; k++) {
                                a[k] = xpathResult.snapshotItem(k);
                                }
                                responseNodes = a;
                            }
                            else { // Otherwise, the response must be a single well-formed document response
                                responseNodes = [response.documentElement]; // Put in array so can be treated the same way as the above
                            }
                            // PREPEND ANY NODE(S) (AS XML) THEN REMOVE XINCLUDE
                            for (j=0; j < responseNodes.length ; j++) {
                                xincludeParent.insertBefore(responseNodes[j], xinclude);
                            }
                            xincludeParent.removeChild(xinclude);
                         }
                         else if (responseType === 'responseText') {
                             if (encName) {
                                  var encodingType = response.match(pattern);
                                  if (encodingType) {
                                      encodingType = encodingType[2];
                                  }
                                  else {
                                      encodingType = 'utf-8';
                                  }
                                  // Need to make a whole new request apparently since cannot convert the encoding after receiving it (to know what the encoding was)
                                  var request2 = new XMLHttpRequest();
                                  request2.overrideMimeType('text/plain; charset='+encodingType);
                                  request2.open('GET', href, false);
                                  request2.setRequestHeader('If-Modified-Since', 'Thu, 1 Jan 1970 00:00:00 GMT');
                                  request2.setRequestHeader('Cache-Control', 'no-cache');
                                  request2.send(null);
                                  response = request2[responseType]; // Update the response for processing
                             }

                             // REPLACE XINCLUDE WITH THE RESPONSE AS TEXT
                             var textNode = docu.createTextNode(response);                             xincludeParent.replaceChild(textNode, xinclude);
                         }

                        // replace xinclude in doc with response now (as plain text or XML)
                    }
                }
            }
            catch (e) { // Use xi:fallback if XInclude retrieval above failed
                var xiFallbackChildren = xiFallback.childNodes;
                // PREPEND ANY NODE(S) THEN REMOVE XINCLUDE
                for (j=0; j < xiFallbackChildren.length ; j++) {
                    xincludeParent.insertBefore(xiFallbackChildren[j], xinclude);
                }
                xincludeParent.removeChild(xinclude);
            }
        }
    }
    return docu;
}
```
