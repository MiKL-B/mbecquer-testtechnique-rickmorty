<template>
  <ApolloQuery :query="require('../graphql/test.gql')">
    <template v-slot="{ result: { data } }">
      <div v-if="data">
        <div v-for="item in data.characters.results" :key="item.id">
          {{ item.name }}
        </div>
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
export default {
  name: "MyComp",
};
</script>
