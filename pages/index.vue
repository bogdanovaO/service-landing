<template>
  <div class="container">
    <div>
      <Catalog :services="services"/>
    </div>
  </div>
</template>

<script>

import Catalog from '~~/components/Catalog.vue'

import { mapState } from "vuex";


// import data from '~~/store/data.json'
export default {
  components: {
    // Advantages,
    Catalog
    // Form,
    // About,
    // Title
  },
    async asyncData ({ app, route, params, error, store }) {
    try {
      await store.dispatch('getCatalog')
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Категории не найдены или сервер не доступен'
      })
    }
  },
//asyncData Это специальный метод, который вызывает Nuxt на сервере. В нём мы можем получить данные из API напрямую, но в данном случае, мы хотим их получить вызвав определённый action в Vuex. Так же перед функцией есть приставка async , что позволяет нам сказать Nuxt не рендерить страницу пока данные из API не получены.
  computed: {
    ...mapState({
      services: 'services'
    })
  }
//Через обвертку получаем в страницу объект categories привязанный к глобальному состоянию categoriesList
}

</script>

<style>

</style>
