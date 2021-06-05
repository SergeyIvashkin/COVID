<template>
  <div class="grey lighten-5 pa-3">
    <section>
      <h1>World summary stats</h1>
      <v-row align="center" justify="center">
        <StateCard
          v-for="(card, idx) in cards"
          :title="card.title"
          :bgColor="card.bgColor"
          :amount="card.amount"
          :amountNew="card.amountNew"
          :icon="card.icon"
          :key="idx"
        />
      </v-row>
    </section>
    <section>
      <h1>Visual</h1>
      <LineChart />
    </section>
  </div>
</template>

<script>
import StateCard from "./StateCard";
import LineChart from "./LineChart";
export default {
  name: "Total",
  components: {
    StateCard,
    LineChart,
  },
  data() {
    return {
      cards: [
        {
          title: "total cases",
          bgColor: "primary lighten-2",
          amount: 1000,
          amountNew: 200,
          icon: "mdi-alert-box",
        },
        {
          title: "deaths",
          bgColor: "red accent-2",
          amount: 1000,
          amountNew: 200,
          icon: "mdi-emoticon-dead",
        },
        {
          title: "recoveries",
          bgColor: "teal lighten-1",
          amount: 1000,
          amountNew: 200,
          icon: "mdi-hospital-box",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
</style>
