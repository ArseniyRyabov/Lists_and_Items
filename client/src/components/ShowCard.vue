<template>
  <div class="show-card">
    <div class="show-card-wrapper">
      <div class="show-lists">
        <div class="show-list-card">List 1
          <div class="show-title-list"></div>
            <div class="show-list-item">
              <div class="show-item">
                <div class= "squares" v-for="n in ITEM1.number">
                  <div class="square" :style="{background: ITEM1.color}"></div>
                </div>
              </div>
              <div class="show-item">
                <div class= "squares" v-for="n in ITEM2.number">
                  <div class="square" :style="{background: ITEM2.color}"></div>
                </div>
              </div>
            </div>
        </div>
        <div class="show-list-card">List 2</div>
      </div>
  </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'ShowCard',
  data() {
        return {}
  },
  computed: {
    ...mapGetters([
      'ITEM1',
      'ITEM2',
    ]),
  },
}
</script>

<style lang="scss">
.show-card-wrapper{}
.show-lists{
  display: flex;
  flex-direction: column;
  margin-top: 32px;
}
.show-list-card{
  border: 1px solid #000000;
  margin: 6px 0px 10px 0px;
  width: 480px;
  height: auto;
}
.show-title-list{}
.show-items{
  display: flex;
  flex-direction: column;

}
.show-list-item{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 10px;
}
.show-list{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.squares{
  //display: inline-block;
  float: left;
}
.square{
  width: 15px;
  height: 15px;
  border: 1px solid #000000;
  margin: 2px;
}
</style>