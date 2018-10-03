---
id: 84
title: Why Para-vitualization was needed?
date: 2008-05-18T06:42:00+00:00
author: admin
layout: post
guid: http://neependra.net/?p=84
permalink: /2008/05/18/why-para-vitualization-was-needed/
blogger_blog:
  - techieneeps.blogspot.com
blogger_permalink:
  - /2008/05/why-para-vitualization-was-needed.html
blogger_author:
  - Neeps
categories:
  - Uncategorized
---
<span style="font-weight: bold;">Why Para-vitualization was needed?<br /></span>I had this question in my mind for some time but the answer was not clear to me. So, I read some docs and figured it out.  
<span style="font-weight: bold;"><br />From http://en.wikipedia.org/wiki/Intel-VT<br /></span>x86 virtualization is the method by which x86-based &#8220;guest&#8221; operating systems are run under another &#8220;host&#8221; x86 operating system, with little or no modification of the guest OS. The x86 processor architecture did not originally meet the Popek and Goldberg virtualization requirements. As a result, it was very difficult to implement a general virtual machine on an x86 processor.<span style="font-weight: bold;"></p> 

<p>
  From http://www.kernelthread.com/publications/virtualization/<br /></span>One of the most popular architectures, IA-32(x86), is not virtualization friendly. The analysis in a paper titled Analysis of the Intel Pentium&#8217;s Ability to Support a Secure Virtual Machine Monitor reports at least seventeen instructions on the Pentium that make it &#8220;non-virtualizable&#8221;. IA-32&#8217;s privileged instructions cause a General Protection Exception when executed in non-privileged mode. Instructions like STR can be problematic: STR can be executed at any privilege level, but it tells you the security state of the machine (the value it retrieves has the Requestor Privilege Level, or RPL).<br /><span style="font-weight: bold;"><br />To overcome this guest OS was modified, so that it was aware that it is being virtualized.</span><br /><span style="font-weight: bold;">And this is called para-vitualization.</span><br /><span style="font-weight: bold;"><br />From http://www.ibm.com/developerworks/linux/library/l-linux-kvm/<br /></span>Older x86 processors produce different results for certain instructions depending upon the domain of execution. This creates a problem, because the hypervisor should execute in only the most protected domain. For this reason, virtualization solutions such as VMware will pre-scan code that is to execute to replace these instructions with trap instructions so that the hypervisor can handle them appropriately. Xen, supporting a cooperative method of virtualization, requires no modification, because the guest is aware that it&#8217;s being virtualized and is modified. KVM simply ignores this problem and mandates that if you want virtualization, you&#8217;ll have to run on newer hardware.<span style="background-color: rgb(255, 255, 0);" name="textmarker_36" id="textmarked_45"></span><br /><span style="background-color: rgb(255, 255, 0); font-weight: bold;" name="textmarker_23" id="textmarked_21"></span><span style="background-color: rgb(255, 255, 0); font-weight: bold;" name="textmarker_22" id="textmarked_20"></span><span style="background-color: rgb(255, 255, 0); font-weight: bold;" name="textmarker_21" id="textmarked_19"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_24" id="textmarked_23"></span>
</p>