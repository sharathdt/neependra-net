---
id: 1241
title: 'Rockstor &#8211; A Btrfs based NAS'
date: 2014-11-02T15:28:38+00:00
author: admin
layout: post
guid: http://neependra.net/?p=1241
permalink: /2014/11/02/rockstor-a-btrfs-based-nas/
categories:
  - file-system
tags:
  - btrfs
  - foss
  - geek
  - linux
  - performance
  - SystemTap
  - ZFS
---
Before joining Red Hat again two years back I was part of [startup KQ Infotech (](http://neependra.net/?p=286)Which later got acquired by STEC Inc and now HGST). Before acquisition of KQ Infotech, we were [extending the work from Lawrence Livermore National Laboratory (LLNL)](http://en.wikipedia.org/wiki/ZFS#LINUXNATIVE) of bring the Sun/Oracle ZFS file-system to Linux by porting POSIX layer. After the acquisition not much was done at that front. Anyways that is not what I want to discuss here.
  
The idea behind porting ZFS to Linux is to get [rich feature set of ZFS into Linux](http://en.wikipedia.org/wiki/ZFS#Features). It would be great to have those features natively on Linux and [Btrfs is filling the gap a](http://en.wikipedia.org/wiki/Btrfs#Features)nd doing more.
  
Some of the commercial NAS products like [FreeNAS/TrueNAS](http://www.freenas.org/), [ReadyDATA](http://en.wikipedia.org/wiki/ReadyDATA) are developed [on top of ZFS. ](http://en.wikipedia.org/wiki/ZFS#Use_in_commercial_products)
  
[Rockstor](http://rockstor.com/) has come up with a NAS solution for Btrfs which is developed on top of [Centos 7](http://www.centos.org/). I have been following it for year or so.The installation and manager is super easy. You can install it on VM, any commmodity hardware, Amazon. It provides some great feature like :-
  
&#8211; Snapshots
  
&#8211; Fast Cloning
  
&#8211; Thin provisioning
  
&#8211; Dynamic volume management
  
&#8211; Replication over WAN
  
The other very interesting add-on which Rockstor provides is Smart Probes through which one can dig deeper to explore various aspect of storage infrasturure. It is based on SystemTap, so it would be very helpful to debug performance related problems.
  
It also has RESTful API to do automated provisioning and management, which would make it easy for integration with cloud storage.
  
As far as I know Rockstor is first to come-up with NAS solution on Btrfs. It is a  very interesting project to watch.