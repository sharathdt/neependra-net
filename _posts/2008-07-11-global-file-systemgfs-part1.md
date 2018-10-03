---
id: 81
title: Global File System(GFS) — Part1
date: 2008-07-11T02:59:00+00:00
author: admin
layout: post
guid: http://neependra.net/?p=81
permalink: /2008/07/11/global-file-systemgfs-part1/
blogger_blog:
  - techieneeps.blogspot.com
blogger_permalink:
  - /2008/07/global-file-systemgfs-part1_11.html
blogger_author:
  - Neeps
categories:
  - Uncategorized
tags:
  - cluster
---
    <span style="font-weight: bold;">File system </span>is a method for storing and organizing computer files and the data they contain to make it easy to find and access them.  
There are different types of file system available  
* Disk file systems (EXT2, EXT3,XFS,FAT,NTFS,GFS,OCFS)  
* Flash file systems  
* Network file systems(NFS)  
* Special purpose file systems(proc file system)

<span style="font-weight: bold;">Each </span>file system has it own structure.So when different file systems are mounted on the same system, how the user has uniform view.  
For example mount different file systems under &#8220;/mnt&#8221; and then run &#8220;ls -lR /mnt&#8221;.What happens?

<a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://bp0.blogger.com/_B32UQAsnGHA/SHcva-aUWAI/AAAAAAAAAcI/FgK7tMKofIs/s1600-h/ext2-vfs.gif"><img style="margin: 0pt 0pt 10px 10px; float: right; cursor: pointer;" src="http://bp0.blogger.com/_B32UQAsnGHA/SHcva-aUWAI/AAAAAAAAAcI/FgK7tMKofIs/s200/ext2-vfs.gif" alt="" id="BLOGGER_PHOTO_ID_5221694433435867138" border="0" /></a>We get the listing of the files, irrespective of the the file-systems.  
<span style="font-weight: bold;"><span style="font-weight: bold;"><br />VFS </span></span><span>(Virtual File System) acts as a bridge</span> <span>between the applications and<br /></span>the real file systems.VFS describes the system&#8217;s files in terms of superblocks and inodes in much the same way as the EXT2 file system uses superblocks and inodes.

When each file system is initialized, it registers itself with the VFS.When <span>user /application wants to access any file, it request the VFS and then VFS </span><span style="font-weight: bold;"><br /></span><span>calls the file system specific functions/routines to access the requested file.</span><span style="font-weight: bold;"></p> 

<p>
  GFS</span> file system is required when more than one system needs simultaneous access to the shared storage.With files system like EXT3 you can not do this.<br />Try following:-<br />&#8211; Get the shared storage (From SAN/ iSCSI) and assign is multiple systems<br />&#8211; From one system create EXT3 file system on it.<br />&#8211; Mount the storage to all the system.<br />&#8211; Try to create files on that mount point from one system.
</p>

<p>
  Are the newly created are visible from other system ?<br />We need to remount the storage on other systems to get a consistent view.
</p>

<p>
  <span style="font-weight: bold;">With GFS</span>, clients modify the shared data by accessing it atomically.Before accesing the data c<a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://bp1.blogger.com/_B32UQAsnGHA/SHmHqqQ0BXI/AAAAAAAAAco/dOZqLDkQY-Q/s1600-h/gfs_stack.png"><img style="margin: 0pt 0pt 10px 10px; float: right; cursor: pointer; width: 203px; height: 138px;" src="http://bp1.blogger.com/_B32UQAsnGHA/SHmHqqQ0BXI/AAAAAAAAAco/dOZqLDkQY-Q/s200/gfs_stack.png" alt="" id="BLOGGER_PHOTO_ID_5222354409881863538" border="0" /></a>lient acquires the lock for it,modifies the data and then releases the lock.Clients access storage devices like processors of a shared memory multiprocessor computer (SMP) access memory.Each of the GFS client thinks that it has the full access to the storage and they are unaware of each other.
</p>

<p>
  <span style="font-weight: bold;">DLM</span> (Distributed Lock Manager), GULM(Grand Unified Locking Manager), and Nolock are locking protocols which GFS uses.<br />With RHEL3/4, you can use both DLM/GULM. With RHEL5 you can only use DLM.
</p>

<p>
  <span style="font-weight: bold;">Nolock </span>is used when you want to use GFS on a stand alone system.Now why would someone like to do that? GFS allocated inodes dynamically. Each file takes one inode, so if someone has to create too many small files he/she can use GFS. In some file systems inode number are limited.
</p>

<p>
  <span style="font-weight: bold;">The network storage pool</span> (NSP) provides each machine with a unified storage address space. A device driver layered on top of SCSI and Fibre Channel drivers implements the NSP. The NSP driver translates from the logical address space of the file system to the address space of each de<a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://bp0.blogger.com/_B32UQAsnGHA/SHpKTbZ_u-I/AAAAAAAAAcw/j5Ixkbnaqog/s1600-h/Resource+Manager.png"><img style="margin: 0pt 0pt 10px 10px; float: right; cursor: pointer;" src="http://bp0.blogger.com/_B32UQAsnGHA/SHpKTbZ_u-I/AAAAAAAAAcw/j5Ixkbnaqog/s200/Resource+Manager.png" alt="" id="BLOGGER_PHOTO_ID_5222568415524273122" border="0" /></a>vice.Subpools divide NSPs into groups of similar device types. These subpools inherit characteristics from underlying devices and network connections.
</p>

<p>
  GFS organizes file systems into several <span style="font-weight: bold;">resource groups (</span>RG). Resource groups distribute file system resources across the entire NSP; multiple resource groups can exist per device. Resource groups are essentially mini-file systems. Each group possesses an information block, data bitmaps, dinodes,and data blocks. Resource group blocks contain information similar to traditional superblocks. In normal operation, resource groups are transparent to users.
</p>

<p>
  References:<br />http://www.diku.dk/undervisning/2003e/314/papers/soltis97global.pdf<br />http://en.wikipedia.org/wiki/Global_File_System<br />http://www.science.unitn.it/~fiorella/guidelinux/tlk/node102.html#SECTION001120000000000000000<br /><span style="background-color: rgb(255, 255, 0);" name="textmarker_1" id="textmarked_0"></span>
</p>