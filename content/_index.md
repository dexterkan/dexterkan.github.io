---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
    design:
      css_class: light
      # background:
      #   color: zinc
        # image:
          # Add your image background to `assets/media/`.
        #   filename: stacked-peaks.svg
        #   filters:
        #     brightness: 1.0
        #   size: cover
        #   position: center
        #   parallax: false
  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        <div style='text-align: justify;'> My research focuses on making machine learning systems efficient, scalable, and privacy-preserving for real-world deployment. I work at the intersection of machine learning and distributed systems, developing solutions that enable practical ML inference on resource-constrained devices while protecting user privacy.

        My work addresses critical challenges in distributed edge–cloud environments, including privacy-preserving inference pipelines, threshold-based scheduling and task offloading, and hardware-aware neural architecture search for heterogeneous devices. These systems demonstrate how privacy, efficiency, and scalability can be achieved together in large-scale deployments.
        
        Please reach out to collaborate 😃 </div>
        
        <div style='text-align: center; margin-top: 2rem;'>
          <a href='research/' class='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
            See Selected Research →
          </a>
        </div>
    design:
      columns: '1'
  - block: collection
    content:
      title: Recent Publications
      count: 3
      filters:
        folders:
          - publication
    design:
      view: citation
  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - event
    design:
      # view: article-grid
      # columns: 1
      view: compact
  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: post
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: date-title-summary
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
---
