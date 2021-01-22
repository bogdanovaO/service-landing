<template>
<client-only>
<div :class="$style.wrap">
    <div  class="title" :class="$style.title">Каталог услуг и цены</div>
    <div v-if="modal" :class="$style.modalWrap">

  <div v-if="modal" :class="$style.modal">
              <a v-on:click="closeModal" :class="$style.closeModal" class="delete "></a>
        <perfect-scrollbar>
    <div v-for="item in currentDetail.details" :class="$style.modalWrap" :key="item.id">
      <div :class="$style.modal__nameWrap">
      <span :class="$style.modal__name">{{item.name}}</span>
      <div :class="$style.modal__price" >{{item.price}}</div>
       </div>
<div :class="$style.modal__desc" class="is-hidden-mobile">{{item.desc}}</div>
    </div>
</perfect-scrollbar>

  </div>
  </div>
<div class="columns is-mobile is-multiline is-centered"  >
  <div class="column is-narrow" :class="$style.item" v-for="item in services" :key="item.id" >
    <div :class="$style.catalogGroup">

<div :class="$style.img">
    <Computer  v-if="item.id === '1'"/> 
     <Sphone v-else-if="item.id === '2'"/>
     <Setting v-else-if="item.id === '3'"/>
     <Internet v-else-if="item.id === '4'"/>
     <Education v-else-if="item.id === '5'"/>
     <Oter v-else-if="item.id === '6'"/>
</div>

      <div :class="$style.name">{{item.name}}</div>
      <div :class="$style.desc">{{item.description}}</div>
       <!-- <button v-on:click="findDetail(item.id)" :class="$style.button" class="button is-primary">Подробнее</button> -->


<fa :class="$style.buttonArrow" v-on:click="findDetail(item.id)" icon="arrow-right"/>


    </div>
  </div>
</div>

</div>
</client-only>
</template>
<script>
import { mapState } from "vuex";
import Computer from '@/assets/svg/computer.svg';
import Sphone from '@/assets/svg/smartPhone.svg';
import Setting from '@/assets/svg/setting.svg';
import Internet from '@/assets/svg/internet.svg';
import Education from '@/assets/svg/education.svg';
import Oter from '@/assets/svg/other.svg';
import Vue from "vue";
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
 
Vue.use(PerfectScrollbar)

export default {
        components: {
    Computer,
    Sphone,
    Setting,
    Internet,
    Education,
    Oter
  },
props: {
services: {
  type: Array,
  default: () => []
}
},
methods: {
  closeModal() {
    return this.$store.commit("CLOSE_MODAL", false)
  },
  findDetail(id) {
    return this.$store.commit("SET_CURRENT_DETAIL", id)
  }
},
computed: {
  ...mapState({
    modal: "modal",
    currentDetail: "currentDetail"
  })
}
}

</script>

<style lang="sass" module>
@import "assets/style/mixins.sass"
.closeModal
  position: absolute!important
  right: 30px
  top: 30px
.buttonArrow
 font-size: 30px
 margin: 50px 0 0
.item
 width: 400px
 text-align: left
 @include respondTo(phones)
  width: 320px
.modalWrap 
 margin: 50px 20px 0 0 

.modal
  height: 100%
  position: fixed
  width: 60vw
  height: 80%
  right: 20vw
  top: 10%
  bottom: 10%
  background: #fff
  border-radius: 48px
  padding: 64px 72px
  box-sizing: border-box
  z-index: 4
  &__name
   font-size: calc(12px + 0.5vw)
   font-weight: bold
   font-family: 'Montserrat', sans-serif
   color: #402B2B
  &__price
   font-size: calc(6px + 0.5vw)
   float: right
   color: #00d1b2
   font-weight: bold
   @include respondTo(phones)
     width: 100%
     margin-top: 7pxnpm i vue2-perfect-scrollbar
  &__desc
    font-size: calc(8px + 0.5vw)
  &__modal__nameWrap
   display: flex
   justify-content: space-between
.catalogWrap
  margin-bottom: 90px
.wrap 
 padding-top: 100px
 box-sizing: border-box
 ////////
 @include respondTo(phones)
  padding: 50px 0 100px
// .title
//  margin: 0 0 60px 0!important
//  @include respondTo(phones)
//   margin: 0 0 30px 0
//   margin-left: 12vw
.catalogGroup
 display: flex
 flex-direction: column
 justify-content: space-between
 text-align: left
 font-family: 'Montserrat', sans-serif
 box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1)
 box-sizing: border-box
 border-radius: 10px
 height: 100%
 padding: 40px 35px

.img
 width: 50%
 border-radius: 90px
 margin-top: 23px 
 @include respondTo(phones)
 margin: 0 auto

.name
 font-size: calc(11px + 0.5vw)
 margin: 20px 0 15px
 font-family: 'Montserrat', sans-serif
 font-weight: bold
.desc
 color: #626780
 font-size: 14px
.button
 margin-top: 40px
//  background: #458FF6!important

.icon 
  font-size: 100px
  color: #458FF6
  // opacity: 0.5
  margin-bottom: 40px
  // width: auto!important

</style>
