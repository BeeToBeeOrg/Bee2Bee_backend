<template>
  <div class="container">
    <Sidebar class="sidebar" />
      <h1>Mein Team</h1>
      <p>Diese Skills hat mein Team <span>(min. eine Person)</span></p>
      <div class="tag-wrapper">
        <tag 
          v-for="skill in skills" 
          :key="skill.skill" 
          :skill="skill.skill" 
        />
      </div>
      <p>Ausserdem kann ich bereitstellen</p>
      <div class="tag-wrapper">
        <tag 
          v-for="resource in resources" 
          :key="resource.resource" 
          :skill="resource.resource" 
        />
      </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar_login.vue'
import tag from '@/components/tag/tag_skill.vue'

export default {
  components: {
    Sidebar,
    tag
  },
  data(){
    return {
      isActive: false,
      skills:[],
      resources: []
    }
  },
  methods:{
    get_tags: async function (){
       await this.$axios.$get("http://localhost:5000/tags").then((response)=>{
            console.log("response db: ",response);
            this.skills = response;
        }).catch((err)=>{
            console.log("error db: ",err);
        });
     },
     get_resources: async function (){
       await this.$axios.$get("http://localhost:5000/resources").then((response)=>{
            console.log("response db: ",response);
            this.resources = response;
        }).catch((err)=>{
            console.log("error db: ",err);
        });
     },
     myFilter: function() {
      this.isActive = !this.isActive;
    }
  },
  created() {
    this.$store.commit("update_position", {
      positions: {
        profile: false,
        company: false,
        team: true
      }
    })
    console.log("full log:",this.resources);
    this.get_tags();
    this.get_resources();
  }
}
</script>

<style scoped lang="scss">
.container {
  overflow-x: hidden;
  height: 100vh;

  h1 {
    position: relative;
    left: 500px;
    top: 70px;
  }

  p {
    color: #00000070;
    font-weight: bold;
    position: relative;
    left: 500px;
    top: 110px;

    span {
      font-weight: normal;
    }
  }

  .tag-wrapper {
    position: relative;
    top: 110px;
    left: 500px;
    padding: 20px;
    width: 60vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}

@media only screen and (max-width: 1000px) {
  .sidebar {
    display: none;
  }

  h1 {
    width: 100vw;
    left: 0!important;
    text-align: center;
    padding: 0 10px 0 10px; 
  }

  p {
    width: 100vw;
    left: 0!important;
    text-align: center;
    padding: 0 10px 0 10px; 
  }

  .tag-wrapper {
    width: 100vw !important;
    left: 0!important;
    text-align: center;
    padding: 0 10px 0 10px;
    justify-content: center;
  }
}
</style>