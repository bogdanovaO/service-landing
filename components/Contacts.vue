<template>

  <div>
    <div :class="$style.fWrap" style="margin: 0 auto" v-if="send">Отлично! Я свяжусь с вами в ближайшее время.
    </div>
    <div :class="$style.fWrap" v-else>
      <div class="title">У вас остались вопросы?</div>
      <div :class="$style.form" >
      <div :class="$style.fSubTitle">Оставьте свой телефон и мы вам перезвоним.</div>

      <div class="field" style="max-width: 400px">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Введите имя"
            v-model="name"/>
        </div>
      </div>
      <div class="field" style="max-width: 400px">
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="Введите номер телефона"
            v-model="phone"/>
        </div>
      </div>
      

      <button class="button is-primary" v-on:click="sendForm">Отправить</button>
      </div>
    </div>

    <div class="columns is-mobile is-multiline" :class="$style.wrap">
      <div style="color: #fff !important" class="column is-full title">Кто к вам приедет?</div>

      <div class="column is-half-desktop is-full-mobile" :class="$style.info">
        <figure class="image is-128x128">
          <img
            :class="$style.img"
            src="https://sun9-19.userapi.com/impf/c625827/v625827259/21a19/kmH4UjQegbs.jpg?size=960x960&quality=96&proxy=1&sign=4b9e5bba3761934ba5e9cee7d5f9ce6a&type=album"/>
        </figure>

        <div :class="$style.id">
          <p :class="$style.id__name">Поляков Никита</p><p :class="$style.id__subName">Ваш Мастер</p>
        </div>
      </div>
      <div class="column is-half-desktop is-full-mobile">
        <div :class="$style.desc">
          "Я люблю работать с техникой, за моей страницей не скрывается компания
          с десятками мастеров которые ни за что не отвечают, я лично приеду
          провести вам бесплатную диагностику и опишу вам фронт работ, назову
          окончательный ценник."
        </div>
      </div>
    </div>

    <div :class="$style.icons">
      <fa style="color: #00d1b2" :icon="['fab', 'instagram']" />
      <fa style="color: #00d1b2; margin: 0 10px" :icon="['fab', 'youtube']" />
      <fa style="color: #00d1b2" :class="$style.icon" :icon="['fab', 'vk']" />
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      send: false,
      name: '',
      phone: ''
    };
  },
  // updated() {
  //   // this.send = true;
  //   // console.log(this.send)
  // },
  methods: {
    sendForm() {
      this.$axios.$post("/mail/send", {
        from: this.name,
        subject: this.name,
        text: this.phone,
        to: "olgabogdanovanew@gmail.com",
      });
      this.send = true;
      // console.log(this.send)
    },
  },
};
</script>

<style  lang="sass" module>
@import "assets/style/mixins.sass"
.form
  @include respondTo(phones)
    margin: 0 auto
    width: 80%
.dots
  width: 100px
  position: absolute
  left: -50px
  @include respondTo(phones)
    display: none

.dotsBlue
  width: 100px
  position: absolute
  right: -80px
  bottom: 10px
  z-index: -1
  @include respondTo(phones)
    display: none

.wrap
  display: grid
  background: #5479f7
  border-radius: 24px
  padding: 50px 80px
  box-sizing: border-box
  grid-template-columns: repeat(2, 1fr)
  grid-template-rows: repeat(3, 1fr)
  grid-column-gap: 0px
  grid-row-gap: 0px
  width: 90%
  margin: 0 auto
  @include respondTo(phoneXs)
    padding: 5% 20px

.fWrap
  padding: 100px 5% 50px 5%
  @include respondTo(phones)
    padding: 0 5% 50px 5%

.title
  color: #fff
  margin-bottom: 25px
  font-size: calc(25px + 0.5vw)
  text-align: left
  margin: 0 0 60px 0
  text-align: center
  font-family: 'Montserrat', sans-serif
  font-weight: 400
  width: 100%
  margin: 0 0 40px 0

.fTitle
  font-size: calc(16px + 0.5vw)
  margin-bottom: 15px

.fSubTitle
  margin: 70px 0 5px 0
  font-size: calc(14px)

.id
  margin: auto 0 auto 20px
  font-family: 'Montserrat', sans-serif
  &__name
    font-size: 20px
    font-weight: bold
  &__subName
    font-size: 14px
    margin-bottom: 15px

.info
  color: #fff
  grid-area: 2 / 1 / 3 / 2
  display: flex

.desc
  color: #fff
  margin: 0 auto
  @include respondTo(phoneXs)
    text-align: justify
.icons
  display: flex
  justify-content: space-between
  max-width: 20%
  text-align: center
  color: #000
  margin: 50px auto 0 auto
  font-size: 30px

.img
  border: 3px solid #fff
  border-radius: 290486px
  @include respondTo(phoneXs)
    border-radius: 0

.phone
  margin-right: 20px
  white-space: nowrap
  font-weight: bold
</style>
