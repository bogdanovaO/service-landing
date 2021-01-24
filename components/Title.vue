<template>
  <div :class="$style.wrap">
    <div class="container">

      <Bcg :class="$style.bcg" />
      <div><div :class="$style.dark"></div></div>

      <div :class="$style.textWrap">
        <div :class="$style.title">Сломался компьютер? Звоните мне!</div>
        <div :class="$style.desc" class="is-hidden-mobile">
          Отношение с техникой иногда заходят в тупик, если ваш гаджет перестал
          работать или возникли сложности с установкой приборов/программ я
          помогу вам решить проблему! Я занимаюсь ремонтом стационарных
          компьютеров, мобильных устройств и установкой/настройкой различной.
        </div>
        <div :class="$style.desc" style="margin-top: 10px; font-weight: bold">
          <p>Если вы не нашли нужную вам информацию - позвоните мне! :)</p><br/>
          <a :class="$style.nmbr" href="tel:+79251249327">+7 (977) 177-95-41
</a>
        </div>

        <div :class="$style.clear"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Bcg from "@/assets/svg/bcg.svg";

export default {
  components: {
    Bcg
  },
};
</script>

<style lang="sass" module>
@import "assets/style/mixins.sass"


.wrap
  background: linear-gradient(100deg, #5479f7 37%, rgba(31,16,93,1) 100%)
  @include respondTo(phones)
    height: 100%
    padding: 0
    background: none

.nmbr
  font-size: 20px
  color: #fff

.dark
  display: none
  @include respondTo(phones)
    display: block
    background-color: #000
    width: 100%
    opacity: 0.5
    height: 100%
    position: absolute

.clear
  height: 20vw
  @include respondTo(phoneXl)
    height: 100px

.bcg
  position: absolute
  right: 0
  top: 20px
  max-width: 650px
  @include respondTo(phones)
    display: none
  @include respondTo(phoneXl)
    max-width: 450px


.bcgMobile
  position: absolute
  width: 100%

.bcgMobileWrap
  width: 100%

.title
  font-size: calc(25px + 0.5vw)
  position: relative
  font-weight: bold
  color: #fff
  font-family: 'Montserrat', sans-serif
  margin-bottom: 20px
  @include respondTo(phones)
    font-size: calc(18px + 0.5vw)
    position: relative
    color: #fff

.desc
  color: #fff
  font-size: 14px
  @include respondTo(phones)
    position: relative
    color: #fff

.textWrap
  width: 40%
  padding: 120px 0 0 60px
  box-sizing: border-box
  @include respondTo(phones)
    padding: 60px 12vw 0
    width: 100%
    background: url(https://st.depositphotos.com/2315957/5027/i/600/depositphotos_50279419-stock-photo-computer-repair.jpg) no-repeat
    background-size: 100%
  @include respondTo(phoneXl)
    padding: 60px 0 0 0.75rem



</style>
