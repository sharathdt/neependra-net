---
id: 737
title: Linux Performance Analysis and Tuning talk at PLUG and University of Pune
date: 2012-08-26T18:09:12+00:00
author: admin
layout: post
guid: http://neependra.net/?p=737
permalink: /2012/08/26/linux-performance-analysis-and-tuning-talk-at-plug-and-university-of-pune/
categories:
  - geek
  - tricks
  - Uncategorized
tags:
  - geek
  - linux
  - performance
---
On this month&#8217;s [PLUG](http://www.plug.org.in/) session [I gave talk on](http://plug.org.in/pipermail/plug-mail/2012-August/009160.html) **Performance Analysis and Tuning on Linux, **which has good [feedback](http://plug.org.in/pipermail/plug-mail/2012-August/009163.html). Then I got an invitation to do the similar lecture from [CMS (Centre for Modeling and Simulation) Department, University of Pune](http://cms.unipune.ac.in/). I accepted it and took a session on 25th of this month. I covered same topics in both sessions.
  
[<img class="size-thumbnail wp-image-764 alignright" title="perfTalk" src="http://neependra.net/wp-content/uploads/2012/08/perfTalk-150x150.jpg" alt="Notice about the talk in UoP" width="150" height="150" />](http://neependra.net/wp-content/uploads/2012/08/perfTalk.jpg)
  
I decided not to have any slides and just show output of commands like ps, top, sar and different settings in &#8220;/proc&#8221; and &#8220;/sys&#8221; filesystems. I tried to give information about differrent fields in the outputs and related that with performance issue,
  
like &#8220;load average&#8221; in top output, Average request size in iostat ouput.
  
To show the different subsystem I referred different figures from <http://www.redbooks.ibm.com/redpapers/pdfs/redp4285.pdf>
  
Following are some commands and other details which I share
  
**_ps_ command**
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
$ ps aux
  
USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND
  
root 1 0.0 0.2 61988 5236 ? Ss Aug17 0:02 /usr/lib/systemd/systemd
  
root 2 0.0 0.0 0 0 ? S Aug17 0:00 [kthreadd]
  
root 3 0.0 0.0 0 0 ? S Aug17 0:05 [ksoftirqd/0]
  
[/sourcecode]
  
**_&#8211; top_ Command**
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
$top
  
[/sourcecode]
  
From the top command output we discussed :&#8211;
  
&#8211; What is load average and what does it high value means?
  
&#8211; What are different fields in line starting with &#8220;CpuX&#8221;?
  
&#8211; What is nice value and how it effects the priority for a process?
  
&#8211; **_free_ command**
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
$ free -m
                     
total used  free  shared   buffers cached
  
Mem:               1962  1306   656    0          75         508
  
-/+ buffers/cache:        722  1240
  
Swap:              2000   0  2000
  
[/sourcecode]

<div>
  With above output I shared the concept of the &#8220;buffers&#8221; and &#8220;cached&#8221;. Generally we consider &#8220;cached&#8221; memory as used memory and does not count it as free, which is not correct. Cache memory can be freed whenever needed. Later I demoed with the <em>drop_cache </em>setting of the VM&#8217;s (Virtual Memory) configuration(/proc/sys/vm)</p> 
  
  <pre><strong>- SAR </strong>(System Activity Reporter)</pre>
  
  <p>
    It is used to collect, report, or save system activity information. It can report CPU, Disk, Memory, Network, paging and other information. If configured with cron then it collects information everyday and store the statistics in “/var/log/sa” folder. The “saX” files are binary files and “sarX” file are human readable data, where is day of the month. We can collect all those stats manually as well.<br /> Following command will collect Disk, CPU, Memory, paging, load average stats in every 5 mins and save it in “logfile” file in binary format:-<br /> [sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]<br /> $ sar -dp -u -r -B -q 5 -o<br /> [/sourcecode]
  </p>
  
  <div>
     And with following the binary file can be coverted into CSV file:-[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]<br /> $ sadf -d — -dp -u -r -B -q 5 ><br /> [/sourcecode]</p> 
    
    <div>
      Other than above I ran and discussed about output collected from following commands:-
    </div>
    
    <div>
      <strong><em>&#8211; dmesg</em></strong>
    </div>
    
    <div>
      <strong><em>&#8211; dmideode</em></strong>
    </div>
    
    <div>
      <strong><em>&#8211; lspci</em></strong>
    </div>
    
    <div>
      <strong><em>&#8211; lspci -nv</em></strong>
    </div>
    
    <div>
    </div>
    
    <div>
      I also showed content of the some of the files/directories from <strong><em>/proc filesystem </em></strong>and showed different settings. Some of those are:-
    </div>
    
    <div>
      &#8211;  /proc/meminfo<br /> &#8211;  /proc/<pid>/maps<br /> &#8211;  /proc/diskstats<br /> &#8211;  /proc/sys/net/ipv4<br /> &#8211;  /proc/slabinfo<br /> &#8211;  /proc/interrupts
    </div>
    
    <div>
      Then I showed  how to configure <strong><em>sysRq </em></strong>and, collect stack trace for each process and memory information of the system<br /> [sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]<br /> echo 1 > /proc/sys/kernel/sysrq<br /> echo t > /proc/sysrq-trigger<br /> echo m > /proc/sysrq-trigger<br /> [/sourcecode]
    </div>
    
    <div>
      At the end I gave brief info about SystemTap and Ftrace.
    </div>
  </div>
</div>

<div>
</div>

<div>
  2 hours are very short time to talk about Linux performance. I tried to share as much as I can.
</div>

<div>
  Hope it was useful to some of the attendees.
</div>