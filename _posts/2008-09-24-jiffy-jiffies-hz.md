---
id: 76
title: 'Jiffy, Jiffies &amp; HZ'
date: 2008-09-24T03:35:00+00:00
author: admin
layout: post
guid: http://neependra.net/?p=76
permalink: /2008/09/24/jiffy-jiffies-hz/
blogger_blog:
  - techieneeps.blogspot.com
blogger_permalink:
  - /2008/09/jiffy-jiffies-hz.html
blogger_author:
  - Neeps
categories:
  - Uncategorized
tags:
  - kernel
---
<span style="font-weight: bold;">Jiffies :</span> The <span class="c">jiffies</span> variable holds the number of times the system timer popped since the system booted.

<span style="font-weight: bold;">HZ: </span>The number of timer ticks per second, is contained in the kernel variable <span class="c">HZ.<br /></span>The kernel increments <span class="c">jiffies,</span> <span class="c">HZ</span> times every second  
<span class="c"><br /><span style="font-weight: bold;">Jiffy:</span> </span>On a kernel with a <span class="c">HZ</span> value of 100, a “jiffy” is a 10-millisecond duration, while on a kernel with <span class="c">HZ</span> set to 1000, a jiffy is only 1-millisecond.

For more info  
http://www.linux-mag.com/id/2272 (The Passage of Time)