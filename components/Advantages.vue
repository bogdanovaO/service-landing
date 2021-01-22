<template>
  <div :class="$style.wrap" class="container">
    <div class="title">Почему стоит выбрать меня?</div>
    <div class="columns is-mobile is-multiline is-centered">
      <div class="column" :class="$style.column">
        <div :class="$style.item">
          <div :class="$style.iconWrap">
            <IconO :class="$style.img" />
            <div :class="$style.subTitle">Не компания</div>
          </div>

          <div :class="$style.desc">Я часnysq мастер и лично отвечаю за репутацию своей компании</div>
        </div>
      </div>
      <div class="column" :class="$style.column">
        <div :class="$style.item">
          <div :class="$style.iconWrap">
            <IconT :class="$style.img" />
            <div :class="$style.subTitle">Бесплатная диагностика</div>
          </div>

          <div :class="$style.desc">Я проведу у вас диагностику и составлю план решения проблемы</div>
        </div>
      </div>
      <div class="column" :class="$style.column">
        <div :class="$style.item">
          <div :class="$style.iconWrap">
            <IconTH :class="$style.img" />
            <div :class="$style.subTitle">Приятные цены</div>
          </div>
          <div :class="$style.desc">
            Так как я работаю с вами на прямую и не плачу процент компании мои
            цены ниже рыночных
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconT from "@/assets/svg/iconT.svg";
import IconTH from "@/assets/svg/iconTH.svg";
import IconO from "@/assets/svg/iconO.svg";
export default {
  components: {
    IconT,
    IconTH,
    IconO,
  },
};
</script>

<style  lang="sass" module>
@import "assets/style/mixins.sass"
.column
  max-width: 400px

.wrap
  padding-top: 100px
  @include respondTo(phones)
    padding-top: 50px

.icon
  font-size: calc(30px + 5vh)
  color: #458FF6

.item
  border-radius: 20px
  padding: 35px calc(15px + 1vw) 35px
  height: 100%
  width: 400px
  text-align: left
  @include respondTo(phones)
    text-align: center
    padding: 0 60px
  @include respondTo(tablets)
    text-align: center

.subTitle
  font-size: calc(11px + 0.5vw)
  margin: 20px 0 15px
  font-family: 'Montserrat', sans-serif
  font-weight: bold

.desc
  font-size: calc(8px + 0.5vw)
  color: #7D7987

.img
  width: 100px
  margin: 15px 0 20px
</style>
