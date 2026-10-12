---
title: 'Weenix Operating System Implementation'
summary: 'Implementation of processes, threads, scheduling, virtual file systems, and virtual memory in an educational kernel.'
date: '2024-01-01'
layout: engineering-project
featured: true
pager: false
eyebrow: 'SYSTEMS PROGRAMMING · C'
headline: 'Build the kernel abstractions that programs rely on.'
period: 'Spring 2024'
stack: ['C', 'Processes & threads', 'Scheduling', 'VFS', 'Virtual memory']
problem: 'Operating systems coordinate execution, storage, and memory through shared kernel abstractions. Implementing these components exposes how their interfaces and lifecycle rules interact.'
contribution: 'Completed the Weenix educational kernel assignment project, implementing processes, threads, a scheduler, a virtual file system, and virtual memory. The assignment framework originated at Brown University.'
workflow_title: 'Explore the implemented subsystems.'
workflow_note: 'Conceptual explanation of the subsystems listed in my resume. This is an architecture walkthrough, not a running kernel or a test report.'
workflow:
  - name: 'Processes'
    text: 'Processes organize program execution and its resources. Process lifecycle management connects execution state with the kernel’s other resource-management components.'
  - name: 'Threads'
    text: 'Threads represent execution contexts within processes. Their lifecycle and state transitions provide the interface between process management and scheduling.'
  - name: 'Scheduler'
    text: 'Scheduling determines which runnable thread executes. It must coordinate thread state transitions with the execution context managed by the kernel.'
  - name: 'Virtual file system'
    text: 'The VFS supplies common file-system abstractions. It separates file operations from the underlying storage implementation and connects file access with process resources.'
  - name: 'Virtual memory'
    text: 'Virtual memory manages the relationship between a process’s address space and memory backing. It connects memory access with process lifecycle and resource management.'
review_title: 'Engineering review points'
review_points:
  - title: 'Lifecycle & state'
    text: 'Review how process and thread resources are created, transitioned, and released, and how scheduling interacts with these states.'
  - title: 'Subsystem interfaces'
    text: 'Review the boundaries between process management, scheduling, file operations, and address-space management.'
  - title: 'Evidence to add'
    text: 'Implementation excerpts, a boot or execution demo, concrete test cases and their results, and debugging examples.'
---
