<template>
  <div class="tasks-card">
    <div id="multiple-checkboxes" class="tasks-card__multiple-checkboxes">
      <div class="checkboxes">
        <p class="swipe-arrow"><i class="arrow-right" @click="items_1_visible=!items_1_visible" onclick="this.className = (this.className == 'arrow-right' ? 'arrow-down' : 'arrow-right')"></i></p>
        <div class="parent-check">
          <input type="checkbox" class="parent-check-list" id="list_1"><label for="list_1">List 1</label>
          <div class="child-check-items"
          v-show="items_1_visible"
          >
            <div class="child-check">
              <input type="checkbox" id="Item_1" class="item-check" ><label for="Item_1">Item 1</label>
              <input type="number" class="item-number" onfocus="this.value=''" v-model.lazy = number1>
              <input type="color" class="item-color" v-model.lazy = color1>
            </div>
            <div class="child-check">
              <input type="checkbox" id="Item_2" class="item-check"><label for="Item_2">Item 2</label>
              <input type="number" class="item-number" onfocus="this.value=''" v-model.lazy = number2>
              <input type="color" class="item-color" v-model.lazy = color2>
            </div>
          </div>
        </div>
        <p class="swipe-arrow"><i class="arrow-right" @click="items_2_visible=!items_2_visible" onclick="this.className = (this.className == 'arrow-right' ? 'arrow-down' : 'arrow-right')"></i></p>
        <div class="parent-check">
          <input type="checkbox" class="parent-check-list" id="list_2"><label for="list_2">List 2</label>
            <div class="child-check-items"
            v-show="items_2_visible"
            >
              <div class="child-check">
                <input type="checkbox" id="Item_2.1" class="item-check" ><label for="Item_2.1">Item 1</label>
                <input type="number" class="item-number" onfocus="this.value=''" value = "0">
                <input type="color" class="item-color">
              </div>
              <div class="child-check">
                <input type="checkbox" id="Item_2.2" class="item-check"><label for="Item_2.2">Item 2</label>
                <input type="number" class="item-number" onfocus="this.value=''" value = "0">
                <input type="color" class="item-color">
              </div>
              <div class="child-check">
                <input type="checkbox" id="Item_2.3" class="item-check"><label for="Item_2.3">Item 3</label>
                <input type="number" class="item-number" onfocus="this.value=''" value = "0">
                <input type="color" class="item-color">
              </div>
              <div class="child-check">
                <input type="checkbox" id="Item_2.4" class="item-check"><label for="Item_2.4">Item 4</label>
                <input type="number" class="item-number" onfocus="this.value=''" value = "0">
                <input type="color" class="item-color">
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TasksCard',
    data() {
      return {
        items_1_visible: true,
        items_2_visible: true,
      }
    },
    computed: {
      color1: {
        get () {
          return this.$store.state.item1.color
        },
        set (value) {
          this.$store.commit('updateColor1', value)
        }
      },
      number1: {
        get () {
          return this.$store.state.item1.number
        },
        set (value) {
          this.$store.commit('updateNumber1', value)
        }
      },
      color2: {
        get () {
          return this.$store.state.item2.color
        },
        set (value) {
          this.$store.commit('updateColor2', value)
        }
      },
      number2: {
        get () {
          return this.$store.state.item2.number
        },
        set (value) {
          this.$store.commit('updateNumber2', value)
        }
      },
    },
}
</script>

<style lang="scss">
.child-check{ 
  margin-bottom: 5px;
  display: flex;
  width: 450px;
}
.tasks-card{
  min-width: 300px;
  &__multiple-checkboxes{
    margin: 30px 0px 0px 20px;
  }
}
input[type=checkbox] {
  display: none;
}
.parent-check label:before {
  margin: 0px 5px 10px 25px;
}
.child-check label:before {
  margin: 0px 5px 10px 45px;
}
.parent-check label:before {
  border: 1px solid #000000;
  content: "\2713"; 
  color: #ffffff;
  text-align: center;
  line-height: 15px;
  font-size: 15px;
  width: 15px;
  height: auto;
}
input[type=checkbox]:checked + label:before {
  content: "\2713"; // "\2713" "\2022" 
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.872);
  font-size: 15px;
  color: #0f0f0f;
  text-align: center;
  line-height: 15px;
}
label{
  flex-wrap: nowrap;
  display: flex;
  width: 150px;
  line-height: 1;
  font-size: 14px;
}
input[type="color"] {
  border: none;
  width: 25px;
  height: 25px;
}
.item-color{
  display: flex;
  flex-direction: row;
  margin-left: auto;
}
.item-check{
  display: flex;
}
.item-number{
  display: flex;
  flex-direction: row;
}
input[type="number"] {
  border: none;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 1;
  font-size: 14px;
  margin: 4px 0px 0px 250px;
}
.arrow-right {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.arrow-down {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.swipe-arrow{
    position: absolute;
    margin: 0px 0px 0px 0px; 
}
.checkboxes{
  position: relative;
  margin: 0px 70px 0px 0px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

</style>