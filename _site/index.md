---
title: Welcome
# layout: pageTemplates/base
layout: page
date: 2021-01-03
# date: Created
# date: Modififed
tags: 
    - home
    - welcome
    - info
# This one already configured in .eleventy.js
# templateEngineOverride: njk, md

# {%- for item in collections.all -%}
# {%- for item in collections.javascript -%}
# {%- for item in collections.post | reverse -%}
---

<div class="row">
  <div class="main-content col-lg-9">
    <header class="mb-4">
      <h4 class="text-secondary mt-2 mb-0">Latest Posts</h4>
      <div class="small">&raquo; <a class="text-secondary" href="/posts/0">more posts</a></div>
    </header>
    <div class="row">
      <div class="col">
        {%- for item in collections.articles | reverse | limit(5) -%}
          <article class="mb-5 position-relative">
            <div class="row">
              <div class="col-12 col-sm-4">
                <img class="w-100 rounded" src="{{item.data.thumbnail}}" alt="{{item.title}}">
                <time class="item-date small d-block text-muted mb-2" datetime="{{item.date }}">{{item.date | simpleDate}}</time>
              </div>
              <div class="col">
                <h4>{{item.data.title}}</h4>
                <p class="mb-0">{{item.data.summary}}</p>
              </div>
            </div>
            <div class="text-right">
              <a href="{{ item.url | url }}" class="btn btn-sm btn-outline-secondary stretched-link">read more</a>
            </div>
          </article>
        {%- endfor -%}
      </div>
    </div>
  </div>
    <sidebar class="col-12 col-lg-3">
    <header class="mb-4">
      <h4 class="text-secondary mt-2 mb-0">Latest Courses</h4>
      <div class="small">&raquo; <a class="text-muted" href="/courses">more courses</a></div>
    </header>
    {%- for item in courses | limit(3) -%}
    <article class="row mb-5">
      <div class="col">
        <img class="img-fluid rounded" src="{{item.thumbnail}}" alt="{{item.title}}">
        <time class="item-date small d-block text-muted mb-2" datetime="{{item.date}}">{{item.date | courseDate}}</time>
        <h5>{{item.title}}</h5>
        <p class="mb-0" style="font-size: .9em">{{item.summary}}</p>
        <div class="text-right">
          <a href="{{ item.url | url }}" class="btn btn-sm btn-outline-secondary stretched-link">watch</a>
        </div>
      </div>
    </article>
    {%- endfor -%}
  </sidebar>
</div>