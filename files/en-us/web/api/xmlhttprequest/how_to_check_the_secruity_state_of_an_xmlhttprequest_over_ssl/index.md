---
title: How to check the security state of an XMLHTTPRequest over SSL
slug: >-
  Web/API/XMLHttpRequest/How_to_check_the_secruity_state_of_an_XMLHTTPRequest_over_SSL
---
<p>Here is a an example Javascript function that prints the security details of an <a href="/en-US/docs/XMLHttpRequest">XMLHTTPRequest</a> sent over SSL. The function is passed the channel property of an XMLHTTPRequest to extract the following information:</p>
<ul>
 <li>Was the connection secure?</li>
 <li>Was the used SSL certificate valid and what are its details (owner, expiration, certificate authority, etc.)?</li>
</ul>
<p>Notes:</p>
<ol>
 <li>This code requires elevated privileges to run; you can only call it from a browser extension or from a XULRunner application.</li>
 <li>The channel property becomes available only after the request is sent and the connection was established, that is, on readyState <code>LOADED, </code><code>INTERACTIVE</code> or <code>COMPLETED.</code></li>
 <li>By setting the mozBackgroundRequest property of the request object and modifying the example appropriately, you can create your own alert dialog to handle SSL exceptions in your Firefox extension or XULRunner application.</li>
</ol>
<pre class="brush: js">// Adapted from the patch for mozTCPSocket error reporting (bug 861196).

const {Cc,Ci} = require("chrome");

function createTCPErrorFromFailedXHR(xhr) {
  let status = xhr.channel.QueryInterface(Ci.nsIRequest).status;

  let errType;
  if ((status &amp; 0xff0000) === 0x5a0000) { // Security module
    const nsINSSErrorsService = Ci.nsINSSErrorsService;
    let nssErrorsService = Cc['@mozilla.org/nss_errors_service;1'].getService(nsINSSErrorsService);
    let errorClass;

    // getErrorClass will throw a generic NS_ERROR_FAILURE if the error code is
    // somehow not in the set of covered errors.
    try {
      errorClass = nssErrorsService.getErrorClass(status);
    } catch (ex) {
      //catching security protocol exception
      errorClass = 'SecurityProtocol';
    }

    if (errorClass == nsINSSErrorsService.ERROR_CLASS_BAD_CERT) {
      errType = 'SecurityCertificate';
    } else {
      errType = 'SecurityProtocol';
    }

    // NSS_SEC errors (happen below the base value because of negative vals)
    if ((status &amp; 0xffff) &lt; Math.abs(nsINSSErrorsService.NSS_SEC_ERROR_BASE)) {
      // The bases are actually negative, so in our positive numeric space, we
      // need to subtract the base off our value.
      let nssErr = Math.abs(nsINSSErrorsService.NSS_SEC_ERROR_BASE) - (status &amp; 0xffff);

      switch (nssErr) {
        case 11: // SEC_ERROR_EXPIRED_CERTIFICATE, sec(11)
          errName = 'SecurityExpiredCertificateError';
          break;
        case 12: // SEC_ERROR_REVOKED_CERTIFICATE, sec(12)
          errName = 'SecurityRevokedCertificateError';
          break;

        // per bsmith, we will be unable to tell these errors apart very soon,
        // so it makes sense to just folder them all together already.
        case 13: // SEC_ERROR_UNKNOWN_ISSUER, sec(13)
        case 20: // SEC_ERROR_UNTRUSTED_ISSUER, sec(20)
        case 21: // SEC_ERROR_UNTRUSTED_CERT, sec(21)
        case 36: // SEC_ERROR_CA_CERT_INVALID, sec(36)
          errName = 'SecurityUntrustedCertificateIssuerError';
          break;
        case 90: // SEC_ERROR_INADEQUATE_KEY_USAGE, sec(90)
          errName = 'SecurityInadequateKeyUsageError';
          break;
        case 176: // SEC_ERROR_CERT_SIGNATURE_ALGORITHM_DISABLED, sec(176)
          errName = 'SecurityCertificateSignatureAlgorithmDisabledError';
          break;
        default:
          errName = 'SecurityError';
          break;
      }
    } else {
  // Calculating the difference

  let sslErr = Math.abs(nsINSSErrorsService.NSS_SSL_ERROR_BASE) - (status &amp; 0xffff);

      switch (sslErr) {
        case 3: // SSL_ERROR_NO_CERTIFICATE, ssl(3)
          errName = 'SecurityNoCertificateError';
          break;
        case 4: // SSL_ERROR_BAD_CERTIFICATE, ssl(4)
          errName = 'SecurityBadCertificateError';
          break;
        case 8: // SSL_ERROR_UNSUPPORTED_CERTIFICATE_TYPE, ssl(8)
          errName = 'SecurityUnsupportedCertificateTypeError';
          break;
        case 9: // SSL_ERROR_UNSUPPORTED_VERSION, ssl(9)
          errName = 'SecurityUnsupportedTLSVersionError';
          break;
        case 12: // SSL_ERROR_BAD_CERT_DOMAIN, ssl(12)
          errName = 'SecurityCertificateDomainMismatchError';
          break;
        default:
          errName = 'SecurityError';
          break;
      }
    }
  } else {
    errType = 'Network';
    switch (status) {
      // connect to host:port failed
      case 0x804B000C: // NS_ERROR_CONNECTION_REFUSED, network(13)
        errName = 'ConnectionRefusedError';
        break;
      // network timeout error
      case 0x804B000E: // NS_ERROR_NET_TIMEOUT, network(14)
        errName = 'NetworkTimeoutError';
        break;
      // hostname lookup failed
      case 0x804B001E: // NS_ERROR_UNKNOWN_HOST, network(30)
        errName = 'DomainNotFoundError';
        break;
      case 0x804B0047: // NS_ERROR_NET_INTERRUPT, network(71)
        errName = 'NetworkInterruptError';
        break;
      default:
        errName = 'NetworkError';
        break;
    }
  }

  // XXX we have no TCPError implementation right now because it's really hard to
  // do on b2g18. On mozilla-central we want a proper TCPError that ideally
  // sub-classes DOMError. Bug 867872 has been filed to implement this and
  // contains a documented TCPError.webidl that maps all the error codes we use in
  // this file to slightly more readable explanations.
  let error = Cc["@mozilla.org/dom-error;1"].createInstance(Ci.nsIDOMDOMError);
  error.wrappedJSObject.init(errName);
  return error;

  // XXX: errType goes unused
}

function dumpSecurityInfo(xhr, error) {
  let channel = xhr.channel;

  try {
    dump("Connection status:\n");

    if (!error) {
      dump("\tsucceeded\n");
    } else {
      dump("\tfailed: " + error.name + "\n");
    }

    let secInfo = channel.securityInfo;

    // Print general connection security state
    dump("Security Information:\n");

    if (secInfo instanceof Ci.nsITransportSecurityInfo) {
      secInfo.QueryInterface(Ci.nsITransportSecurityInfo);
      dump("\tSecurity state of connection: ");

      // Check security state flags
      if ((secInfo.securityState &amp; Ci.nsIWebProgressListener.STATE_IS_SECURE)
           == Ci.nsIWebProgressListener.STATE_IS_SECURE) {
        dump("secure connection\n");
      } else if ((secInfo.securityState &amp; Ci.nsIWebProgressListener.STATE_IS_INSECURE)
                  == Ci.nsIWebProgressListener.STATE_IS_INSECURE) {
        dump("insecure connection\n");
      } else if ((secInfo.securityState &amp; Ci.nsIWebProgressListener.STATE_IS_BROKEN)
                  == Ci.nsIWebProgressListener.STATE_IS_BROKEN) {
        dump("unknown\n");
        dump("\tSecurity description: " + secInfo.shortSecurityDescription + "\n");
        dump("\tSecurity error message: " + secInfo.errorMessage + "\n");
      }
    } else {
      dump("\tNo security info available for this channel\n");
    }

    // Print SSL certificate details
    if (secInfo instanceof Ci.nsISSLStatusProvider) {
      var cert = secInfo.QueryInterface(Ci.nsISSLStatusProvider)
                        .SSLStatus.QueryInterface(Ci.nsISSLStatus).serverCert;

      dump("\tCommon name (CN) = " + cert.commonName + "\n");
      dump("\tIssuer = " + cert.issuerOrganization + "\n");
      dump("\tOrganisation = " + cert.organization + "\n");
      dump("\tSHA1 fingerprint = " + cert.sha1Fingerprint + "\n");

      var validity = cert.validity.QueryInterface(Ci.nsIX509CertValidity);
      dump("\tValid from " + validity.notBeforeGMT + "\n");
      dump("\tValid until " + validity.notAfterGMT + "\n");
    }
  } catch(err) {
    alert(err);
  }
}

function test(url) {
  var req = Cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
  req.open('GET', url, true);
  req.addEventListener("error",
    function(e) {
      var error = createTCPErrorFromFailedXHR(req);
      dumpSecurityInfo(req, error);
    },
    false);

  req.onload = function(e) {
    dumpSecurityInfo(req);
  };

  req.send();
}
</pre>
<p>Then</p>
<pre class="brush: js">test("https://addons.mozilla.org");
</pre>
<p>produced the following output in my console:</p>
<pre>Connection status:
        succeeded
Security Info:
        Security state: secure
        Common name (CN) = addons.mozilla.org
        Organisation = Mozilla Corporation
        Issuer = VeriSign, Inc.
        SHA1 fingerprint = F4:99:64:18:6B:7D:C8:FA:C0:0C:2E:A9:61:77:28:67:13:C4:97:7B
        Valid from 7/14/2011 0:00:00 AM
        Valid until 8/20/2013 23:59:59 PM
</pre>
<p>And here is the output of making an HTTPS request to a server that uses an expired certificate:</p>
<pre class="brush: js">test("https://www.appliancetherapy.com/");
</pre>
<p>Note that the security state has become "insecure" now and there is an error name reported:</p>
<pre>Connection status:
        failed: SecurityExpiredCertificateError
Security Info:
        Security state: insecure
        Common name (CN) = www.appliancetherapy.com
        Organisation = Appliance Therapy Group (SELANE PRODUCTS, INC)
        Issuer = VeriSign, Inc.
        SHA1 fingerprint = F1:8C:38:96:0A:30:63:16:47:FA:6E:CD:7D:58:CC:AB:82:FB:A9:D0
        Valid from 9/1/2010 0:00:00 AM
        Valid until 9/1/2012 23:59:59 PM
</pre>
