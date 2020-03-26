<template>
  <div @click="set_active" v-bind:class="{selected: active}" class="tag">
    <p>{{ skill }}</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "tag",
  data(){
    return{
      active:false
    }
  },
  methods: {
    set_active:function(){
      console.log("I am pressed"); 
      console.log(this.active);
      if(!this.active){
        this.active = true;
        this.$store.commit('add_tag',this.skill)
      }else{
        this.active = false
        this.$store.commit('delete_tag', this.skill) 
      }
    },
    computed:{
      
    },
    add_tag:function(){
      console.log("button pressed");
      
    },
    delete_tag:function(){
      this.$store.commit('delete_tag')
    }
  },
  props: {
    skill:String
  }
};
</script>

<style scoped lang="scss">
.tag {
  width: 200px;
  height: 70px;
  border: 2px solid deepskyblue;
  border-radius: 10px;
  text-align: center;
  margin: 20px;

  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 70px;
    color: deepskyblue;
  }
}

.selected {
  background: deepskyblue;
  
  p {
    color: #fff;
  }
}
</style>
