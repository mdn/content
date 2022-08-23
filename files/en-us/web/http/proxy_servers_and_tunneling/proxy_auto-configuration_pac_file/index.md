---
title: Proxy Auto-Configuration (PAC) file
slug: Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
tags:
  - Necko
  - Networking
  - PAC
  - Proxy
---
{{HTTPSidebar}}

A **Proxy Auto-Configuration (PAC)** file is a JavaScript function that determines whether web browser requests (HTTP, HTTPS, and FTP) go directly to the destination or are forwarded to a web proxy server. The JavaScript function contained in the PAC file defines the function:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameters

- `url`
  - : The URL being accessed. The path and query components of `https://` URLs are stripped. In Chrome (versions 52 to 73), you can disable this by setting `PacHttpsUrlStrippingEnabled` to `false` in policy or by launching with the `--unsafe-pac-url` command-line flag (in Chrome 74, only the flag works, and from 75 onward, there is no way to disable path-stripping; as of Chrome 81, path-stripping does not apply to HTTP URLs, but there is interest in changing this behavior to match HTTPS); in Firefox, the preference is `network.proxy.autoconfig_url.include_path`.
- `host`
  - : The hostname extracted from the URL. This is only for convenience; it is the same string as between `://` and the first `:` or `/` after that. The port number is not included in this parameter. It can be extracted from the URL when necessary.

## Description

Returns a string describing the configuration. The format of this string is defined in **return value format** below.

### Return value format

- The JavaScript function returns a single string
- If the string is null, no proxies should be used
- The string can contain any number of the following building blocks, separated by a semicolon:

<!---->

- `DIRECT`
  - : Connections should be made directly, without any proxies
- `PROXY host:port`
  - : The specified proxy should be used
- `SOCKS host:port`
  - : The specified SOCKS server should be used

Recent versions of Firefox support as well:

- `HTTP host:port`
  - : The specified proxy should be used
- `HTTPS host:port`
  - : The specified HTTPS proxy should be used
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : The specified SOCKS server (with the specified SOCK version) should be used

If there are multiple semicolon-separated settings, the left-most setting will be used, until Firefox fails to establish the connection to the proxy. In that case, the next value will be used, etc.

The browser will automatically retry a previously unresponsive proxy after 30 minutes. Additional attempts will continue beginning at one hour, always adding 30 minutes to the elapsed time between attempts.

If all proxies are down, and there was no DIRECT option specified, the browser will ask if proxies should be temporarily ignored, and direct connections attempted. After 20 minutes, the browser will ask if proxies should be retried, asking again after an additional 40 minutes. Queries will continue, always adding 20 minutes to the elapsed time between queries.

#### Examples

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Primary proxy is w3proxy:8080; if that goes down start using mozilla:8081 until the primary proxy comes up again.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Same as above, but if both proxies go down, automatically start making direct connections. (In the first example above, Netscape will ask user confirmation about making direct connections; in this case, there is no user intervention.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Use SOCKS if the primary proxy goes down.

The auto-config file should be saved to a file with a .pac filename extension: `proxy.pac`.

And the MIME type should be set to `application/x-ns-proxy-autoconfig`.

Next, you should configure your server to map the .pac filename extension to the MIME type.

> **Note:**
>
> - The JavaScript function should always be saved to a file by itself but not be embedded in a HTML file or any other file.
> - The examples at the end of this document are complete. There is no additional syntax needed to save it into a file and use it. (Of course, the JavaScripts must be edited to reflect your site's domain name and/or subnets.)

## Predefined functions and environment

These functions can be used in building the PAC file:

- Hostname based conditions

  - [`isPlainHostName()`](#isplainhostname)
  - [`dnsDomainIs()`](#dnsdomainis)
  - [`localHostOrDomainIs()`](#localhostordomainis)
  - [`isResolvable()`](#isresolvable)
  - [`isInNet()`](#isinnet)

- Related utility functions

  - [`dnsResolve()`](#dnsresolve)
  - [`convert_addr()`](#convert_addr)
  - [`myIpAddress()`](#myipaddress)
  - [`dnsDomainLevels()`](#dnsdomainlevels)

- URL/hostname based conditions

  - [`shExpMatch()`](#shexpmatch)

- Time based conditions

  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- Logging utility

  - [`alert()`](#alert)

- There was one associative array (object) already defined, because at the time JavaScript code was unable to define it by itself:

  - `ProxyConfig.bindings` {{deprecated_inline}}

> **Note:** pactester (part of the [pacparser](https://github.com/manugarg/pacparser) package) was used to test the following syntax examples.
>
> - The PAC file is named `proxy.pac`
> - Command line: `pactester -p ~/pacparser-master/tests/proxy.pac -u http://www.mozilla.org` (passes the `host` parameter `www.mozilla.org` and the `url` parameter `http://www.mozilla.org`)

### isPlainHostName()

#### Syntax

```js
isPlainHostName(host)
```

#### Parameters

- host
  - : The hostname from the URL (excluding port number).

#### Description

True if and only if there is no domain name in the hostname (no dots).

#### Examples

```js
isPlainHostName("www.mozilla.org") // false
isPlainHostName("www") // true
```

### `dnsDomainIs()`

#### Syntax

```js
dnsDomainIs(host, domain)
```

#### Parameters

- host
  - : Is the hostname from the URL.
- domain
  - : Is the domain name to test the hostname against.

#### Description

Returns true if and only if the domain of hostname matches.

#### Examples

```js
dnsDomainIs("www.mozilla.org", ".mozilla.org") // true
dnsDomainIs("www", ".mozilla.org") // false
```

### localHostOrDomainIs()

#### Syntax

```js
localHostOrDomainIs(host, hostdom)
```

#### Parameters

- host
  - : The hostname from the URL.
- hostdom
  - : Fully qualified hostname to match against.

#### Description

Is true if the hostname matches _exactly_ the specified hostname, or if there is no domain name part in the hostname, but the unqualified hostname matches.

#### Examples

```js
localHostOrDomainIs("www.mozilla.org", "www.mozilla.org")  // true (exact match)
localHostOrDomainIs("www", "www.mozilla.org")              // true (hostname match, domain not specified)
localHostOrDomainIs("www.google.com", "www.mozilla.org")   // false (domain name mismatch)
localHostOrDomainIs("home.mozilla.org", "www.mozilla.org") // false (hostname mismatch)
```

### isResolvable()

#### Syntax

```js
isResolvable(host)
```

#### Parameters

- host
  - : is the hostname from the URL.

Tries to resolve the hostname. Returns true if succeeds.

#### Examples

```js
isResolvable("www.mozilla.org") // true
```

### isInNet()

#### Syntax

```js
isInNet(host, pattern, mask)
```

#### Parameters

- host
  - : a DNS hostname, or IP address. If a hostname is passed, it will be resolved into an IP address by this function.
- pattern
  - : an IP address pattern in the dot-separated format.
- mask
  - : mask for the IP address pattern informing which parts of the IP address should be matched against. 0 means ignore, 255 means match.

True if and only if the IP address of the host matches the specified IP address pattern.

Pattern and mask specification is done the same way as for SOCKS configuration.

#### Examples

```js
function alertEval(str) {
  alert(`${str} is ${eval(str)}`);
}
function FindProxyForURL(url, host) {
  alertEval('isInNet(host, "63.245.213.24", "255.255.255.255")');
  // "PAC-alert: isInNet(host, "63.245.213.24", "255.255.255.255") is true"
}
```

### dnsResolve()

```js
dnsResolve(host)
```

#### Parameters

- host
  - : hostname to resolve.

Resolves the given DNS hostname into an IP address, and returns it in the dot-separated format as a string.

#### Example

```js
dnsResolve("www.mozilla.org"); // returns the string "104.16.41.2"
```

### convert_addr()

#### Syntax

```js
convert_addr(ipaddr)
```

#### Parameters

- ipaddr
  - : Any dotted address such as an IP address or mask.

Concatenates the four dot-separated bytes into one 4-byte word and converts it to decimal.

#### Example

```js
convert_addr("104.16.41.2"); // returns the decimal number 1745889538
```

### myIpAddress()

#### Syntax

```js
myIpAddress()
```

#### Parameters

(none)

#### Return value

Returns the server IP address of the machine Firefox is running on, as a string in the dot-separated integer format.

> **Warning:** myIpAddress() returns the same IP address as the server address returned by **`nslookup localhost`** on a Linux machine. It does not return the public IP address.

#### Example

```js
myIpAddress() //returns the string "127.0.1.1" if you were running Firefox on that localhost
```

### dnsDomainLevels()

#### Syntax

```js
dnsDomainLevels(host)
```

#### Parameters

- host
  - : is the hostname from the URL.

Returns the number (integer) of DNS domain levels (number of dots) in the hostname.

#### Examples

```js
dnsDomainLevels("www");             // 0
dnsDomainLevels("mozilla.org");     // 1
dnsDomainLevels("www.mozilla.org"); // 2
```

### shExpMatch()

#### Syntax

```js
shExpMatch(str, shexp)
```

#### Parameters

- str
  - : is any string to compare (e.g. the URL, or the hostname).
- shexp
  - : is a shell expression to compare against.

Returns `true` if the string matches the specified shell glob expression.

Support for particular glob expression syntax varies across browsers:
`*` (match any number of characters) and `?` (match one character) are always supported,
while `[characters]` and `[^characters]` are additionally supported by some implementations (including Firefox).

> **Note:** If supported by the client, JavaScript regular expressions typically provide a more powerful and consistent way to pattern-match URLs (and other strings).

#### Examples

```js
shExpMatch("http://home.netscape.com/people/ari/index.html", "*/ari/*"); // returns true
shExpMatch("http://home.netscape.com/people/montulli/index.html", "*/ari/*"); // returns false
```

### weekdayRange()

#### Syntax

```js
weekdayRange(wd1, wd2, [gmt])
```

> **Note:** (Before Firefox 49) wd1 must be less than wd2 if you want the function to evaluate these parameters as a range. See the warning below.

#### Parameters

- wd1 and wd2
  - : One of the ordered weekday strings: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Is either the string "GMT" or is left out.

Only the first parameter is mandatory. Either the second, the third, or both may be left out.

If only one parameter is present, the function returns a value of true on the weekday that the parameter represents. If the string "GMT" is specified as a second parameter, times are taken to be in GMT. Otherwise, they are assumed to be in the local timezone.

If both **wd1** and **wd1** are defined, the condition is true if the current weekday is in between those two _ordered_ weekdays. Bounds are inclusive, _but the bounds are ordered_. If the "GMT" parameter is specified, times are taken to be in GMT. Otherwise, the local timezone is used.

> **Warning:** _The order of the days matters_.
> Before Firefox 49, `weekdayRange("SUN", "SAT")` will always evaluate to `true`.
> Now `weekdayRange("WED", "SUN")` will only evaluate to `true`
> if the current day is Wednesday or Sunday.

#### Examples

```js
weekdayRange("MON", "FRI");        // returns true Monday through Friday (local timezone)
weekdayRange("MON", "FRI", "GMT"); // returns true Monday through Friday (GMT timezone)
weekdayRange("SAT");               // returns true on Saturdays local time
weekdayRange("SAT", "GMT");        // returns true on Saturdays GMT time
weekdayRange("FRI", "MON");        // returns true Friday and Monday only (note, order does matter!)
```

### dateRange()

#### Syntax

```
dateRange(<day> | <month> | <year>, [gmt])  // ambiguity is resolved by assuming year is greater than 31
dateRange(<day1>, <day2>, [gmt])
dateRange(<month1>, <month2>, [gmt])
dateRange(<year1>, <year2>, [gmt])
dateRange(<day1>, <month1>, <day2>, <month2>, [gmt])
dateRange(<month1>, <year1>, <month2>, <year2>, [gmt])
dateRange(<day1>, <month1>, <year1>, <day2>, <month2>, <year2>, [gmt])
```

> **Note:** (Before Firefox 49) day1 must be less than day2, month1 must be less than month2, and year1 must be less than year2 if you want the function to evaluate these parameters as a range. See the warning below.

#### Parameters

- day
  - : Is the ordered day of the month between 1 and 31 (as an integer).

```
1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31
```

- month
  - : Is one of the ordered month strings below.

```
"JAN"|"FEB"|"MAR"|"APR"|"MAY"|"JUN"|"JUL"|"AUG"|"SEP"|"OCT"|"NOV"|"DEC"
```

- year
  - : Is the ordered full year integer number. For example, 2016 (**not** 16).
- gmt
  - : Is either the string "GMT", which makes time comparison occur in GMT timezone, or is left out. If left unspecified, times are taken to be in the local timezone.

If only a single value is specified (from each category: day, month, year), the function returns a true value only on days that match that specification. If both values are specified, the result is true between those times, including bounds, _but the bounds are ordered_.

> **Warning:** **The order of the days, months, and years matter**; Before Firefox 49, `dateRange("JAN", "DEC")` will always evaluate to `true`. Now `dateRange("DEC", "JAN")` will only evaluate true if the current month is December or January.

#### Examples

```js
dateRange(1);            // returns true on the first day of each month, local timezone
dateRange(1, "GMT")      // returns true on the first day of each month, GMT timezone
dateRange(1, 15);        // returns true on the first half of each month
dateRange(24, "DEC");    // returns true on 24th of December each year
dateRange("JAN", "MAR"); // returns true on the first quarter of the year

dateRange(1, "JUN", 15, "AUG");
// returns true from June 1st until August 15th, each year
// (including June 1st and August 15th)

dateRange(1, "JUN", 1995, 15, "AUG", 1995);
// returns true from June 1st, 1995, until August 15th, same year

dateRange("OCT", 1995, "MAR", 1996);
// returns true from October 1995 until March 1996
// (including the entire month of October 1995 and March 1996)

dateRange(1995);
// returns true during the entire year of 1995

dateRange(1995, 1997);
// returns true from beginning of year 1995 until the end of year 1997
```

### timeRange()

#### Syntax

```js
// The full range of expansions is analogous to dateRange.
timeRange(<hour1>, <min1>, <sec1>, <hour2>, <min2>, <sec2>, [gmt])
```

> **Note:** (Before Firefox 49) the category hour1, min1, sec1 must be less than the category hour2, min2, sec2 if you want the function to evaluate these parameters as a range. See the warning below.

#### Parameters

- hour
  - : Is the hour from 0 to 23. (0 is midnight, 23 is 11 pm.)
- min
  - : Minutes from 0 to 59.
- sec
  - : Seconds from 0 to 59.
- gmt
  - : Either the string "GMT" for GMT timezone, or not specified, for local timezone.

If only a single value is specified (from each category: hour, minute, second), the function returns a true value only at times that match that specification. If both values are specified, the result is true between those times, including bounds, _but the bounds are ordered_.

> **Warning:** **The order of the hour, minute, second matter**; Before Firefox 49, `timeRange(0, 23)` will always evaluate to true. Now `timeRange(23, 0)` will only evaluate true if the current hour is 23:00 or midnight.

#### Examples

```js
timerange(12);                // returns true from noon to 1pm
timerange(12, 13);            // returns true from noon to 1pm
timerange(12, "GMT");         // returns true from noon to 1pm, in GMT timezone
timerange(9, 17);             // returns true from 9am to 5pm
timerange(8, 30, 17, 0);      // returns true from 8:30am to 5:00pm
timerange(0, 0, 0, 0, 0, 30); // returns true between midnight and 30 seconds past midnight
```

### alert()

#### Syntax

```js
alert(message)
```

#### Parameters

- message
  - : The string to log

Logs the message in the browser console.

#### Examples

```js
alert(`${host} = ${dnsResolve(host)}`);            // logs the host name and its IP address
alert("Error: shouldn't reach this clause.");      // log a simple message
```

## Example 1

### Use proxy for everything except local hosts

> **Note:** Since all of the examples that follow are very specific, they have not been tested.

All hosts which aren't fully qualified, or the ones that are in local domain, will be connected to directly. Everything else will go through `w3proxy.mozilla.org:8080`. If the proxy goes down, connections become direct automatically:

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) {
    return "DIRECT";
  } else {
    return "PROXY w3proxy.mozilla.org:8080; DIRECT";
  }
}
```

> **Note:** This is the simplest and most efficient autoconfig file for cases where there's only one proxy.

## Example 2

### As above, but use proxy for local servers which are outside the firewall

If there are hosts (such as the main Web server) that belong to the local domain but are outside the firewall and are only reachable through the proxy server, those exceptions can be handled using the `localHostOrDomainIs()` function:

```js
function FindProxyForURL(url, host) {
  if (
    (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) &&
    !localHostOrDomainIs(host, "www.mozilla.org") &&
    !localHostOrDomainIs(host, "merchant.mozilla.org")
  ) {
    return "DIRECT";
  } else {
    return "PROXY w3proxy.mozilla.org:8080; DIRECT";
  }
}
```

The above example will use the proxy for everything except local hosts in the mozilla.org domain, with the further exception that hosts `www.mozilla.org` and `merchant.mozilla.org` will go through the proxy.

> **Note:** The order of the above exceptions for efficiency: `localHostOrDomainIs()` functions only get executed for URLs that are in local domain, not for every URL. Be careful to note the parentheses around the _or_ expression before the _and_ expression to achieve the above-mentioned efficient behavior.

## Example 3

### Use proxy only if cannot resolve host

This example will work in an environment where the internal DNS server is set up so that it can only resolve internal host names, and the goal is to use a proxy only for hosts that aren't resolvable:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

The above requires consulting the DNS every time; it can be grouped intelligently with other rules so that DNS is consulted only if other rules do not yield a result:

```js
function FindProxyForURL(url, host) {
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".mydomain.com") ||
    isResolvable(host)
  ) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

## Example 4

### Subnet based decisions

In this example all of the hosts in a given subnet are connected-to directly, others are connected through the proxy:

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "198.95.0.0", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Again, use of the DNS server in the above can be minimized by adding redundant rules in the beginning:

```js
function FindProxyForURL(url, host) {
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".mydomain.com") ||
    isInNet(host, "198.95.0.0", "255.255.0.0")
  ) {
    return "DIRECT";
  } else {
    return "PROXY proxy.mydomain.com:8080";
  }
}
```

## Example 5

### Load balancing/routing based on URL patterns

This example is more sophisticated. There are four (4) proxy servers; one of them is a hot stand-by for all of the other ones, so if any of the remaining three goes down the fourth one will take over. Furthermore, the three remaining proxy servers share the load based on URL patterns, which makes their caching more effective (there is only one copy of any document on the three servers - as opposed to one copy on each of them). The load is distributed like this:

| Proxy | Purpose           |
| ----- | ----------------- |
| #1    | .com domain       |
| #2    | .edu domain       |
| #3    | all other domains |
| #4    | hot stand-by      |

All local accesses are desired to be direct. All proxy servers run on the port 8080 (they don't need to, you can just change your port but remember to modify your configurations on both side). Note how strings can be concatenated with the **`+`** operator in JavaScript.

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mydomain.com")) {
    return "DIRECT";
  } else if (shExpMatch(host, "*.com")) {
    return "PROXY proxy1.mydomain.com:8080; PROXY proxy4.mydomain.com:8080";
  } else if (shExpMatch(host, "*.edu")) {
    return "PROXY proxy2.mydomain.com:8080; PROXY proxy4.mydomain.com:8080";
  } else {
    return "PROXY proxy3.mydomain.com:8080; PROXY proxy4.mydomain.com:8080";
  }
}
```

## Example 6

### Setting a proxy for a specific protocol

Most of the standard JavaScript functionality is available for use in the `FindProxyForURL()` function. As an example, to set different proxies based on the protocol the {{jsxref("String.prototype.startsWith()", "startsWith()")}} function can be used:

```js
function FindProxyForURL(url, host) {
  if (url.startsWith("http:")) {
    return "PROXY http-proxy.mydomain.com:8080";
  } else if (url.startsWith("ftp:")) {
    return "PROXY ftp-proxy.mydomain.com:8080";
  } else if (url.startsWith("gopher:")) {
    return "PROXY gopher-proxy.mydomain.com:8080";
  } else if (url.startsWith("https:") || url.startsWith("snews:")) {
    return "PROXY security-proxy.mydomain.com:8080";
  }
  return "DIRECT";
}
```

> **Note:** The same can be accomplished using the [`shExpMatch()`](#shexpmatch) function described earlier.

For example:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
```

> **Note:** The autoconfig file can be output by a CGI script. This is useful, for example, when making the autoconfig file act differently based on the client IP address (the `REMOTE_ADDR` environment variable in CGI).
>
> Usage of `isInNet()`, `isResolvable()` and `dnsResolve()` functions should be carefully considered, as they require the DNS server to be consulted. All the other autoconfig-related functions are mere string-matching functions that don't require the use of a DNS server. If a proxy is used, the proxy will perform its DNS lookup which would double the impact on the DNS server. Most of the time these functions are not necessary to achieve the desired result.

## History and implementation

Proxy auto-config was introduced into Netscape Navigator 2.0 in the late 1990s, at the same time when JavaScript was introduced. Open-sourcing Netscape eventually lead to Firefox itself.

The most "original" implementation of PAC and its JavaScript libraries is, therefore, `nsProxyAutoConfig.js` found in early versions of Firefox. These utilities are found in many other open-source systems including [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Firefox later integrated the file into [`ProxyAutoConfig.cpp`](https://searchfox.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) as a C++ string literal. To extract it into its own file, it suffices to copy the chunk into JavaScript with a `console.log` directive to print it.

Microsoft in general made its own implementation. There used to be [some problems with their libraries](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), but most are resolved by now. They have defined [some new "Ex" suffixed functions](https://docs.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) around the address handling parts to support IPv6. The feature is supported by Chromium, but not yet by Firefox ([bugzilla #558253](https://bugzilla.mozilla.org/show_bug.cgi?id=558253)).
