<template>
<div :class="$style.wrap">
  <div :class="$style.title">У вас остались вопросы?</div>
   <div :class="$style.subTitle">Оставьте свой телефон и мы вам перезвоним. </div>
  <input class="input is-hovered" type="text" placeholder="+79*******npm install --save vue-scrollto" :class="$style.input">
         <button :class="$style.button" class="button is-primary">Отправить</button>
</div>


</template>
<script>

</script>
<style lang="sass" module>
.wrap
 margin-left: 100px
 padding: 8vh 0 20vh
.title    
 font-size: calc(16px + 0.5vw)
.subTitle
 margin: 10px 0 5px 0
.input
 width: 25vw

// .button
//  background: #458FF6!important 

</style>
