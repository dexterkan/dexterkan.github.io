---
title: 'Experience'
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
  # - block: resume-skills
  - block: markdown
    id: section-skills
    content:
      title: Skills
      username: admin
    # design:
    #   show_skill_percentage: false
    text:
    {{/* Hugo Blox: Skills */}}
    {{/* Documentation: https://hugoblox.com/blocks/ */}}
    {{/* License: https://github.com/HugoBlox/hugo-blox-builder/blob/main/LICENSE.md */}}

    {{/* Initialise */}}
    {{ $page := .wcPage }}
    {{ $block := .wcBlock }}
    {{ $author := $block.content.username | default "admin" }}

    {{ $person_page_path := (printf "/authors/%s" $author) }}
    {{ $person_page := site.GetPage $person_page_path }}
    {{ if not $person_page }}
      {{ errorf "Could not find an author page at `%s`. Please check the value of `author` in your Skill block and create an associated author page if one does not already exist. See https://docs.hugoblox.com/page-builder/#about " $person_page_path }}
    {{ end }}

    {{ $skills := $person_page.Params.skills }}
    {{ $show_show_skill_percentage := $block.design.show_skill_percentage | default true }}

    <!-- Section header -->
    <div class="flex flex-col items-center max-w-prose mx-auto gap-3 justify-center">
      <div class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
        {{ $block.content.title | markdownify | emojify }}
      </div>

      {{ with $block.content.text }}
        <p>{{ . | markdownify | emojify }}</p>
      {{ end }}
    </div>

    <!-- Skills layout -->
    <div class="flex flex-col lg:flex-row items-start max-w-prose mx-auto gap-3 px-6 md:px-0">
      {{ range $skills }}
        {{ $color := .color | default "" }}
        {{ $color_border := .color_border | default "" }}
        
        <div class="w-full lg:w-1/2">
          <!-- Skill set header -->
          <div class="mb-5 text-xl font-bold text-gray-900 dark:text-white">
            {{ .name | markdownify | emojify }}
            {{ with .description }}
              <p>{{ . | markdownify | emojify }}</p>
            {{ end }}
          </div>

          <!-- Individual skills -->
          {{ range .items }}
            {{ $pack := or .icon_pack "fas" }}
            {{ $pack_prefix := $pack }}
            {{ if in (slice "fab" "fas" "far" "fal") $pack }}
              {{ $pack_prefix = "fa" }}
            {{ end }}

            <div class="skills-content mb-3">
              {{ with .icon }}
                <span class="skills-icon inline-block align-top mr-2">
                  {{ partial "functions/get_icon" (dict "name" . "attributes" "style=\"height: 1em;\"") }}
                </span>
              {{ end }}

              <span class="skills-name text-gray-700 dark:text-gray-300">
                {{ .name | markdownify | emojify }}
                {{ with .description }}
                  <p class="skills-description">{{ . | markdownify | emojify }}</p>
                {{ end }}
              </span>

              {{ if .percent | and $show_show_skill_percentage }}
                <div class="skills-wrapper mt-1" {{ with $color_border }}{{ (printf "style=\"border-color: %s\"" .) | safeHTMLAttr }}{{ end }}>
                  <div class="skills-percent" style="width: {{ (printf "%s" (cast.ToString (.percent | default 100))) | safeCSS }}%; {{ with $color }}{{ (printf "background-color: %s" .) | safeCSS }}{{ end }}"></div>
                </div>
              {{ end }}
            </div>
          {{ end }}
        </div>
      {{ end }}
    </div>
  - block: resume-awards
    content:
      title: Awards
      username: admin
  - block: resume-languages
    content:
      title: Languages
      username: admin
  - block: resume-languages
    id: section-hobbies
    content:
      title: Hobbies
      username: dexter
---
