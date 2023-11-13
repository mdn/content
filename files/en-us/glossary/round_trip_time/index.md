---
title: Round Trip Time (RTT)
slug: Glossary/Round_Trip_Time
page-type: glossary-definition
---

{{GlossarySidebar}}

**Round Trip Time (RTT)** is the length time it takes for a data packet to be sent to a destination plus the time it takes for an acknowledgment of that packet to be received back at the origin. The RTT between a network and server can be determined by using the `ping` command.

```bash
ping example.com
```

This will output something like:

```plain
PING example.com (216.58.194.174): 56 data bytes
64 bytes from 216.58.194.174: icmp_seq=0 ttl=55 time=25.050 ms
64 bytes from 216.58.194.174: icmp_seq=1 ttl=55 time=23.781 ms
64 bytes from 216.58.194.174: icmp_seq=2 ttl=55 time=24.287 ms
64 bytes from 216.58.194.174: icmp_seq=3 ttl=55 time=34.904 ms
64 bytes from 216.58.194.174: icmp_seq=4 ttl=55 time=26.119 ms
--- google.com ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 23.781/26.828/34.904/4.114 ms
```

In the above example, the average round trip time is shown on the final line as 26.8ms.

## See also

- [Time to First Byte (TTFB)](/en-US/docs/Glossary/Time_to_first_byte)
- [Latency](/en-US/docs/Glossary/Latency)
