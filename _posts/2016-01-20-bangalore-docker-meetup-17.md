---
id: 1618
title: 'Bangalore Docker Meetup #17'
date: 2016-01-20T12:14:44+00:00
author: admin
layout: post
guid: http://neependra.net/?p=1618
permalink: /2016/01/20/bangalore-docker-meetup-17/
categories:
  - amazon
  - bangalore
  - docker
  - ecs
  - entrepreneurship
  - geek
  - kubernetes
  - learning
  - mesos
tags:
  - amazon
  - bangalore
  - docker
  - ecs
  - foss
  - fun
  - geek
  - kubernetes
  - linux
  - mesos
  - work
---
As decided in the [Dec&#8217;15 meetup](http://neependra.net/?p=1540), in the next meetup we would discuss about different Orchestration tool available to run containers in a cluster. This meetup was hosted by [Shippable](https://app.shippable.com/) at their Bangalore office and we talked about [Docker Swarm](https://www.docker.com/docker-swarm), [Kubernetes](http://kubernetes.io), [Mesos](http://mesos.apache.org/) and [Amazon ECS](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html). Thanks to [Aditya](https://twitter.com/adityapatawari) for filling in for Mesos, last minute as our earlier planned speaker got some work and had to back off. We did following presentations/demos :-

  * Docker Swarm &#8211; [Arunan Rabindran](https://twitter.com/arunan), Docker Inc
  * Kubernetes &#8211; [Neependra Khare](http://neependra.net/)
  * Mesos &#8211; [Aditya Patawari](https://twitter.com/adityapatawari)
  * Amazon ECS &#8211; [Vinothini Raju](https://twitter.com/vinothiniraju), Bluemeric

I was thinking of putting an app which we can deploy on all the four orchestration engines and see what it takes to deploy on each of them. Once deployed run some kind of performance tests and see how features like autoscale work. I thought a real world e-commerce platform would be a nice example and while doing some browsing we came across [ blog post](http://mageinferno.com/blog/deploy-magento-2-digital-ocean-tutum)  from [Mark Shust](https://github.com/markoshust) to deploy [Magento2](https://magento.com/) on [Tutum](https://www.tutum.co/), which gave good reference. Though we could not finish on this study this time. I would try to do it for my [DevConf](http://devconf.cz/) [workshop in Brno](http://sched.co/5lzC), CZ early next month.
  
We started the meetup with some Q & A and then Arunan talked about Docker Swarm, [Universal Control Plane](https://www.docker.com/universal-control-plane) and [Tutum](https://www.tutum.co/).
  


<div style="margin-bottom: 5px;">
  <strong> <a title="Swarm docker bangalore_meetup" href="//www.slideshare.net/arunanrabindran/swarm-docker-bangaloremeetup" target="_blank">Swarm docker bangalore_meetup</a> </strong> from <strong><a href="//www.slideshare.net/arunanrabindran" target="_blank">Arunan Rabindran</a></strong>
</div>

<div style="margin-bottom: 5px;">
</div>

<div style="margin-bottom: 5px;">
  After Arunan&#8217;s talk I presented the <a href="https://docs.google.com/document/d/1ldi7BvwdMbOCoNYKuf_gpiGAQxXPo1x_xOQ4GfTZQDw/edit">KubeCon&#8217;s workshop presentation </a>and compared the <a href="https://github.com/nkhare/container-orchestration/tree/master/swarm">Magento2 Docker Compose file</a> with <a href="https://github.com/nkhare/container-orchestration/tree/master/kubernetes">Kubernetes RC and Service files </a>(WIP).
</div>


  
After the small break Aditya presented next on [Mesos](http://mesos.apache.org/) and gave a demo as well.
  


<div style="margin-bottom: 5px;">
  <strong> <a title="Beginning mesos" href="//www.slideshare.net/AdityaPatawari/beginning-mesos" target="_blank">Beginning mesos</a> </strong> from <strong><a href="//www.slideshare.net/AdityaPatawari" target="_blank">Aditya Patawari</a></strong>
</div>

<div style="margin-bottom: 5px;">
</div>

<div style="margin-bottom: 5px;">
  Last talk from the day was from Vinothini on Amazon ECS.I really appreciate her coming forward to take this topic, which may not be her primary focus area.
</div>

<div style="margin-bottom: 5px;">
  </p> 
  
  <div style="margin-bottom: 5px;">
    <strong> <a title="AWS ECS Quick Introduction" href="//www.slideshare.net/VinothiniRaju/aws-ecs-quick-introduction" target="_blank">AWS ECS Quick Introduction</a> </strong> from <strong><a href="//www.slideshare.net/VinothiniRaju" target="_blank">Vinothini Raju</a></strong>
  </div>
  
  <p>
    I hope participants learnt something new on that day. At the end we enjoyed pizza and beverages sponsored by Shippable. While we were enjoying the Pizza, team from <a href="http://hasura.io/">Hasura</a> gave a demo of  <a href="https://github.com/hasura/pangaea">Pangaea</a>  to do one click deployment of Kubernetes. Thanks for Anuran for flying over to Bangalore for just the meetup. In the next meetup we&#8217;ll talk about logging and monitoring for containers, which would be scheduled in last week of Feb or first week of March&#8217;16.<br /> &nbsp;<br /> <img class="aligncenter" src="https://pbs.twimg.com/media/CY0QnQHUwAAf2I3.jpg:large" alt="" width="225" height="169" /><br /> Apart from the regular meetup Docker Bangalore would be celebrating Docker&#8217;s 3 Birthday in third week of March&#8217;16 and we plan to do two 3 hours Docker basics workshop. We would be looking for volunteers to help with workshop and <a href="https://docs.google.com/forms/d/1dQJNRN9mT3coQR9_9B0z4qxBNEqoBYY4_ugw6KcMsec/">they can register here</a>. We&#8217;ll announce dates and venue for the basic workshop soon.<br /> &nbsp; </div> 
    
    <div style="margin-bottom: 5px;">
    </div>