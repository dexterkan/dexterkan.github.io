---
title: 'Weenix Operating System Implementation'
summary: 'Implemented processes and threads, VFS, and virtual memory in Weenix; the integrated educational operating system runs and passes all project test cases.'
date: '2024-01-01'
layout: engineering-project
featured: true
pager: false
eyebrow: 'SYSTEMS PROGRAMMING · C'
headline: 'Build the kernel abstractions that programs rely on.'
period: 'Spring 2024'
stack: ['C', 'Processes & threads', 'Scheduling', 'VFS', 'Virtual memory']
problem: 'Operating systems coordinate execution, storage, and memory through shared kernel abstractions. Implementing these components exposes how their interfaces and lifecycle rules interact.'
contribution: 'I implemented processes and threads, the virtual file system, and virtual memory within the Weenix educational operating-system framework. The integrated system runs as a complete educational operating system and passes all project test cases. The assignment framework originated at Brown University.'
workflow_title: 'Explore the implemented subsystems.'
workflow_note: 'Explore the implemented subsystems and their relationships. The walkthrough explains the architecture; it does not execute the kernel.'
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
review_title: 'Understanding the rationale behind kernel abstractions'
review_points:
  - title: 'Lifecycle & state'
    text: 'Review how process and thread resources are created, transitioned, and released, and how scheduling interacts with these states.'
  - title: 'Subsystem interfaces'
    text: 'Review the boundaries between process management, scheduling, file operations, and address-space management.'
  - title: 'Integrated validation'
    text: 'The completed educational operating system runs and passes all project test cases, as reported by the developer. Test logs and a boot demonstration will be added when available.'
verified_results: true
---


## My implementation

I implemented **Processes and Threads**, **Virtual File System**, and **Virtual Memory** within the existing Weenix framework. These components form the core of my contribution to the educational operating system.

## The hardest part

The biggest challenge was understanding the rationale behind operating-system design: how kernel abstractions relate to one another, and why their interfaces and lifecycle rules are structured as they are. The project required connecting execution, file access, and address-space management into a working system.

## Completion and validation

The integrated system runs as a complete educational operating system and **passes all project test cases**, based on my project results. A test inventory, logs, and an execution demonstration are not yet included on this page.
