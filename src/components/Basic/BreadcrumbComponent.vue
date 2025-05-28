<template>
    <div class="block-header block-header--has-breadcrumb block-header--has-title">
      <div class="container">
          <div class="block-header__body">
              <nav class="breadcrumb block-header__breadcrumb" aria-label="breadcrumb">
                  <ol class="breadcrumb__list">
                      <li class="breadcrumb__spaceship-safe-area" role="presentation"></li>
                      <li class="breadcrumb__item breadcrumb__item--current breadcrumb__item--last" aria-current="page">
                            <router-link v-if="categoryObj" :to="{ name: 'catalog' }" class="breadcrumb__item-link">{{ name }}</router-link>
                            <span v-else class="breadcrumb__item-link">{{ name }}</span>
                      </li>
                      <li v-if="categoryObj" class="breadcrumb__item breadcrumb__item--current breadcrumb__item--last" aria-current="page">
                            <span class="breadcrumb__item-link">{{ categoryObj.name }}</span>
                      </li>
                      <li class="breadcrumb__title-safe-area" role="presentation" style="--block-header-title-width: 219.375px;"></li>
                  </ol>
              </nav>
              <h1 v-if="categoryObj" class="block-header__title">{{ categoryObj.name }}</h1>
              <h1 v-else class="block-header__title">{{ name }}</h1>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'BreadcrumbComponent',
  props: ["name", "categoryObj"]
}
</script>