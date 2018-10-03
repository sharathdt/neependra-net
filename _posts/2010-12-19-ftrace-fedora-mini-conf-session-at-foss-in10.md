---
id: 148
title: 'Ftrace:  Fedora Mini-Conf Session at FOSS.in’10'
date: 2010-12-19T11:20:28+00:00
author: admin
layout: post
guid: http://neependra.net/?p=148
permalink: /2010/12/19/ftrace-fedora-mini-conf-session-at-foss-in10/
categories:
  - Uncategorized
tags:
  - fedora
  - foss
  - ftrace
  - kernel
---
I gave a talk on Ftrace in [Fedora Mini-Conf  at FOSS.in&#8217;10.](https://fedoraproject.org/wiki/FOSSin_2010#Mini_Conf_Sessions)
  
The slides are at <https://fedoraproject.org/wiki/File:Fedora_Ftrace.pdf>
  
I started my presentation with an example. I setup_ **function_ftrace**_ as  _**current_tracer**_ and set
  
the trace filter for all the _**ext3**_ functions and started the tracing:
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
$ echo function\_ftrace > /sys/kernel/debug/tracing/current\_tracer
  
$ echo ext3* > /sys/kernel/debug/tracing/set\_ftrace\_filter
  
$ echo 1  > /sys/kernel/debug/tracing/tracing_on
  
[/sourcecode]
  
Then after creating a ext3 filesystem, I created a directory on it.
  
We got a trace in the /sys/kernel/debug/tracing/trace file. A snippet from it :-
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
1) ! 23988.06 us |    } /\* ext3\_new\_inode \*/
  
1)                         |    ext3_bread() {
  
1)                         |      ext3_getblk() {
  
1)                         |        ext3\_get\_blocks_handle() {
  
1)   0.461 us              |          ext3\_block\_to_path();
  
1)   0.365 us              |          ext3\_get\_branch();
  
1)                         |          ext3\_new\_blocks() {
  
1)                         |            ext3\_dirty\_inode() {
  
1)   0.602 us              |              ext3\_journal\_start_sb();
  
1)                         |              ext3\_mark\_inode_dirty() {
  
1)                         |                ext3\_reserve\_inode_write() {
  
[/sourcecode]
  
This kind of stuff helps when you try to understand the kernel code because you know what functions are getting called.
  
Second example I took to get the function trace when the system system OOPs. I did following setting to get the trace:-
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
echo function\_graph > /sys/kernel/debug/tracing/current\_tracer
  
echo 5 > /sys/kernel/debug/tracing/buffer\_size\_kb
  
echo 1 > /sys/kernel/debug/tracing/tracing_on
  
echo 1 > /proc/sys/kernel/ftrace\_dump\_on_oops
  
[/sourcecode]
  
I used one  simple character driver for that. It can be downloaded from
  
<http://neependra.net/kernel/char-dev-read-write-oop.tar.gz>
  
I had following for the read operation
  
[sourcecode language=&#8221;cpp&#8221; gutter=&#8221;false&#8221;]
  
static ssize\_t mycdrv1\_read (struct file \*file, char _\_user \* buf, size\_t lbuf, loff_t * ppos)
  
{
  
\*(int \*)0 = 0;
  
}
  
[/sourcecode]
  
After inserting the module I created the character device
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
insmod char-read-write.ko
  
mknod /dev/mycdrv1 c 700 0
  
[/sourcecode]
  
Just after doing the read to the device OOPs happened and got  following in the in the **/var/log/messages** file
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
mycdrv1_read() {
   
raw\_local\_irq_enable();
   
&#8230;&#8230;&#8230;..
   
find_vma();
   
bad_area() {
   
up_read();
   
&#8230;&#8230;&#8230;&#8230;
   
is_prefetch.clone.13() {
   
convert\_ip\_to_linear();
   
pagefault_disable();
   
pagefault_enable();
   
}
   
oops_enter() {
  
[/sourcecode]
  
Then I showed an example with _**sched_switch**_ tracer and showed how we can trace all the function of a particular module.
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]</pre>
  
$ echo sched\_switch > /sys/kernel/debug/tracing/current\_tracer
  
$ echo :mod:zfs > /sys/kernel/debug/tracing/set\_ftrace\_filter
  
[/sourcecode]
  
I also also showed how to look at the stack usage.  To enable stack strace
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
echo 1 > /proc/sys/kernel/stack\_tracer\_enabled
  
[/sourcecode]
  
and  look at /sys/kernel/debug/tracing/stack_trace file, which will have something like.
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
Depth    Size   Location    (15 entries)
  
&#8212;&#8211;    &#8212;-   &#8212;&#8212;&#8211;
  
0)     1544     352   ext3\_get\_blocks_handle+0xa0/0x920
  
1)     1192       0   return\_to\_handler+0x0/0x2f
  
2)     1192      96   ext3\_get\_block+0xbb/0xf8
  
3)     1096       0   return\_to\_handler+0x0/0x2f
  
4)     1096     128   generic\_block\_bmap+0x3c/0x42
  
[/sourcecode]
  
It tells you how much kernel stack is used and usage from  each function. This was very helpful for me while doing the port
  
of [_**ZFS on Linux**_.](http://zfs.kqinfotech.com/) We have limited kernel stack on Linux but this not the case in Solaris.
  
I then talked about _**trace-cmd**_ and _**kernelshark**_.