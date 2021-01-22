<template>
<div :class="$style.wrap">
   <a  :class="$style.logoWrap" v-scroll-to="'#top'">
      <div style="display: flex">
        <div style="height: 35px;  width: 12px; background: #fff; margin: 0 15px 0 0"/>
        <div style="height: 35px;  width: 12px; background: #fff;"/>
      </div>
<div :class="$style.logoText" >Polyakov</div>
   </a>
   </div>
</template>
<script>
import LogoWhite from '@/assets/svg/logoWhite.svg';


export default {
  components: {
    LogoWhite
  }
}
</script>

<style lang="sass" module>
@import "assets/style/mixins.sass"
.navItem
 color: #fff!important
 background: #5479f7!important
.desc
 color: #fff
 grid-area: 2 / 2 / 3 / 3
 width: 100%
.wrap
 background: #5479f7
 height: 100px
 margin-top: 100px
 display: flex
 justify-content: space-between
.logoText 
 font-size: 24px
 margin-left: 10px
 font-weight: bold
 color: #fff!important
 &__a
  color: #fff!important
  margin-right: 10px
.logoWrap
 padding: 0 0.75rem
 margin: auto 0
 display: flex
.nav

 @include respondTo(phones)
  display: none
</style>






