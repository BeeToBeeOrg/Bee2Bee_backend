<template>
  <div class="container">
    <h1>Finde Personal-Partner</h1>
    <p>in der Nähe von <span>60223 Köln</span></p>

    <div class="tag" v-for="tag in tags" :key="tag.val">
      <p>{{ tag.val }}</p>
      <img src="/icons/dropdown.svg" alt="">
    </div>

    <div class="wrapper">

      <div>
        <img src="/icons/heart.svg" alt="">
        <p>suche Speichern</p>
      </div>

      <div class="radio">
        <button>Karte</button>
        <button>Kacheln</button>
      </div>
    </div>

    <div class="subheading">
      <img src="/icons/star.svg" alt="">
      <h2>Beste Matches</h2>
    </div>

    <CompanyCard
      v-for="match in matches"
      :key="match.name"
      :name="match.name"
      :workers="match.workers"
      :img="match.img"
      :distance="match.distance"
      :requirements="match.requirements"
      :matching="match.matching"
      :link="match.link"
    ></CompanyCard>

    <h2>Diese Partner könnten dich auch interessieren</h2>
    <CompanyCard
      v-for="match in matches"
      :key="match.name"
      :name="match.name"
      :workers="match.workers"
      :img="match.img"
      :distance="match.distance"
      :requirements="match.requirements"
      :matching="match.matching"
      :link="match.link"
    ></CompanyCard>
  </div>
</template>

<script>
import CompanyCard from "@/components/company_card.vue";

export default {
  head() {
    return {
      title: "Dein Dashboard",
      meta: [
        { hid: "description", name: "description", content: "" }
      ]
    };
  },
  components: {
    CompanyCard
  },
  data() {
    return {
      tags: [
        {val:'Distanz in km'},
        {val:'Körperliche Arbeit'},
        {val:'Anzahl Leih-Mitarbeiter'},
        {val:'Führerschein'},
        {val:'Auto'},
        {val:'Fahrrad'},
        {val:'Vollzeit'}
      ]
    }
  },
  asyncData({ params, app }) {
    // console.log("asycData");
    return app.$axios.get(`http://localhost:5000/matches`)
      .then((response)=>{
        // console.log("reponse match: ",response);
        return {matches: response.data}
      })
      .catch((err)=>{
        console.log("Err fetching match: ",err)
      });
  }
};
</script>

<style scoped lang="scss">
.container {
  margin: 40px;

  p {
    span {
      color: deepskyblue;
    }
  }

  .tag {
    border-radius: 30px;
    border: 1px solid deepskyblue;
    display: flex;
    flex-direction: row;
    margin: 10px;
    padding: 5px 15px;
    display: inline-block;
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      display: inline-block;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: row;
  }

}
</style>
