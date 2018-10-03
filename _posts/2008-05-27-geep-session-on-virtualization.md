---
id: 83
title: GEEP session on Virtualization
date: 2008-05-27T06:03:00+00:00
author: admin
layout: post
guid: http://neependra.net/?p=83
permalink: /2008/05/27/geep-session-on-virtualization/
blogger_blog:
  - techieneeps.blogspot.com
blogger_permalink:
  - /2008/05/geep-session-on-virtualization.html
blogger_author:
  - Neeps
categories:
  - Uncategorized
---
GEEP &#8212; GEEKs Of Pune&#8230;  
GEEP is a non-profit group to promote Linux system software.You can find more details at :-  
http://tech.groups.yahoo.com/group/geep_linux/

On 25th May&#8217;08 GEEP has organized the session on Virtualization.There were two presentations:-  
a. For beginners by me.  
b. For advance users by Mr. Amit Shah

If we put &#8220;vitualization&#8221; on any search engine we get &#8216;n&#8217; number of results and get confused.  
So, I put more emphasis on the basics.

I started my talk by comparing abstraction and virtualizarion.In virtualization we do not hide the underlying details and real system is transformed so that it appears to be different. For abstraction you can think of the OSI model.

Then I talked about the &#8220;Why Virtualization&#8221;. Some of the reasons are:-  
\* Server consolidation \*Multiple execution environments  
\* Virtual hardware \* Debugging  
\* Software migration (Mobility) \* Testing/Quality Assurance  
\* Live Migration \* Balancing Resources

If we talk about virtualization then we definitely has to talk about the computer architecture.  
<a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://bp1.blogger.com/_B32UQAsnGHA/SEFKBbRtLWI/AAAAAAAAAZo/AZU-gyLBL24/s1600-h/architecture.png"><img style="margin: 0pt 0pt 10px 10px; float: right; cursor: pointer; width: 305px; height: 213px;" src="http://bp1.blogger.com/_B32UQAsnGHA/SEFKBbRtLWI/AAAAAAAAAZo/AZU-gyLBL24/s320/architecture.png" alt="" id="BLOGGER_PHOTO_ID_5206524032579349858" border="0" /></a>  
* <span style="font-weight: bold;">ISA</span> (Instruction set architecture ) divides hardware and software. There are two kind of ISA, User ISA and System ISA.

* <span style="font-weight: bold;">ABI</span> (Application Binary Interface<span style="background-color: rgb(255, 255, 0);" name="textmarker_11" id="textmarked_5"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_10" id="textmarked_4"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_9" id="textmarked_3"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_8" id="textmarked_2"></span>) provides a program with access to the hardware resource and services available in a system. It consists of User ISA and System Call Interfaces

* <span style="font-weight: bold;">API</span> (Application Programming <span style="background-color: rgb(255, 255, 0);" name="textmarker_15" id="textmarked_9"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_14" id="textmarked_8"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_13" id="textmarked_7"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_12" id="textmarked_6"></span>Interface) <span style="background-color: rgb(255, 255, 0);" name="textmarker_16" id="textmarked_10"></span>is a source code interface that an operating system, library or service provides to support requests made by computer programs.  
clib in Unix environment : supports the UNIX/C programming .

By taking above things in mind we can divide Virtual Machines in two categories:-

<span style="font-weight: bold;">Process VM</span> at the ABI level: Virtualization of individual processes.  
E.g., running x86 applications on Alpha CPU.   
Java is another example of process virtualizaton. When we compile a java<span style="background-color: rgb(255, 255, 0);" name="textmarker_31" id="textmarked_26"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_30" id="textmarked_25"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_29" id="textmarked_24"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_28" id="textmarked_23"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_27" id="textmarked_22"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_26" id="textmarked_21"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_25" id="textmarked_20"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_24" id="textmarked_19"></span> program, it is compiled into some kind <span style="background-color: rgb(255, 255, 0);" name="textmarker_41" id="textmarked_36"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_40" id="textmarked_35"></span> a pseu<span style="background-color: rgb(255, 255, 0);" name="textmarker_38" id="textmarked_33"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_37" id="textmarked_32"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_36" id="textmarked_31"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_35" id="textmarked_30"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_34" id="textmarked_29"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_33" id="textmarked_28"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_32" id="textmarked_27"></span>do lang<span style="background-color: rgb(255, 255, 0);" name="textmarker_39" id="textmarked_34"></span>uage which can interpre<span style="background-color: rgb(255, 255, 0);" name="textmarker_43" id="textmarked_38"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_42" id="textmarked_37"></span>ted by a jvm(java virtual machine). That is java is platform independent. Please note that jvm is different is each platform.<span style="background-color: rgb(255, 255, 0);" name="textmarker_61" id="textmarked_56"></span>  
<span style="background-color: rgb(255, 255, 0);" name="textmarker_64" id="textmarked_59"></span>  
Process virtualization is a matter of correct functioning and not a matter of performance.<span style="background-color: rgb(255, 255, 0);" name="textmarker_73" id="textmarked_68"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_72" id="textmarked_67"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_71" id="textmarked_66"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_70" id="textmarked_65"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_69" id="textmarked_64"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_68" id="textmarked_63"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_67" id="textmarked_62"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_66" id="textmarked_61"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_65" id="textmarked_60"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_63" id="textmarked_58"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_62" id="textmarked_57"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_60" id="textmarked_55"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_59" id="textmarked_54"></span>

<span style="font-weight: bold;">System VM</span> at the ISA level.  
Virtualization of complete systems  
E.g., running Linux (and its applications) on Windows.

In system virtualiztion <span style="background-color: rgb(255, 255, 0);" name="textmarker_3" id="textmarked_2"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_2" id="textmarked_1"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_1" id="textmarked_0"></span>I talked about hardware emulation, hypervisor<span style="background-color: rgb(255, 255, 0);" name="textmarker_7" id="textmarked_6"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_6" id="textmarked_5"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_5" id="textmarked_4"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_4" id="text
marked_3"></span>, full and para virtualization.I referred following for the same.  
<span style="background-color: rgb(255, 255, 0);" name="textmarker_12" id="textmarked_11"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_11" id="textmarked_10"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_10" id="textmarked_9"></span>http://www.ibm.com/developerworks/library/l-linuxvirt/index.html  
<span style="background-color: rgb(255, 255, 0);" name="textmarker_9" id="textmarked_8"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_8" id="textmarked_7"></span>  
Then I talked about a bit kvm and handed over to Amit.  
Amit&#8217;s presentation was awesome.<span style="background-color: rgb(255, 255, 0);" name="textmarker_25" id="textmarked_24"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_24" id="textmarked_23"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_23" id="textmarked_22"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_22" id="textmarked_21"></span>

I was surprised to know that kvm is now supporting <span style="background-color: rgb(255, 255, 0);" name="textmarker_1" id="textmarked_0"></span>para-virtualization as well.

<span style="background-color: rgb(255, 255, 0);" name="textmarker_21" id="textmarked_20"></span>  
<span style="background-color: rgb(255, 255, 0);" name="textmarker_20" id="textmarked_19"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_19" id="textmarked_18"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_18" id="textmarked_17"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_17" id="textmarked_16"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_16" id="textmarked_15"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_15" id="textmarked_14"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_14" id="textmarked_13"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_13" id="textmarked_12"></span>

<span style="background-color: rgb(255, 255, 0);" name="textmarker_1" id="textmarked_0"></span><span style="font-weight: bold;"><span style="background-color: rgb(255, 255, 0);" name="textmarker_1" id="textmarked_1"></span></span>