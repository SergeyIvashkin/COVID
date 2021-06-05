<template>
  <v-card class="card pa-3 ma-3" max-width="300" :class="bgColor" dark outlined>
    <v-icon>{{ icon }}</v-icon>

    <v-card-text
      class="card_num"
      align="center"
      :title="amountNew + ' last day'"
    >
      {{ amount }}
    </v-card-text>

    <v-card-text align="center">{{ title }}</v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "StateCard",
  props: {
    title: String,
    bgColor: String,
    amount: Number,
    amountNew: Number,
    icon: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    font-size: 21px;
  }
  .card_num {
    font-size: 29px;
    font-weight: 600;
  }
}
</style>