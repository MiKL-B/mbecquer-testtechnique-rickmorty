<template>
  <div>
    <ApolloQuery
      :query="require('../graphql/characters.gql')"
      :variables="{ filter }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading">Query is loading.</div>
        <!-- Error -->
        <div v-else-if="error">We got an error!</div>
        <!-- Result -->
        <div v-else-if="data">
          <div v-for="item in data.characters.results" :key="item.id">
            {{ item.name }}
          </div>
        </div>
        <!-- No result (if the query succeed but there's no data) -->
        <div v-else>No result from the server</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  name: "DatasComponent",
  props: ["filter"],
};
</script>
