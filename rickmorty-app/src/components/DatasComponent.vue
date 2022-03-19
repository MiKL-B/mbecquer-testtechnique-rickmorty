<template>
  <div class="">
    <ApolloQuery
      :query="require('../graphql/characters.gql')"
      :variables="{ filter }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading">Query is loading.</div>
        <!-- Error -->
        <div v-else-if="error" title="pas de donnée">
          Ce que tu cherches n'a pas été trouvé :
          <blockquote class="italic text-green-500">
            "Personne n'existe délibérément, on a notre place nulle part et tout
            le monde finit par mourir. Viens regarder la télé"
          </blockquote>
        </div>
        <!-- Result -->
        <div v-else-if="data">
          <table class="table-auto mx-auto my-4 border-2 border-gray-700">
            <thead class="bg-gray-700 text-white">
              <tr>
                <th>Name</th>
                <th>Species</th>
                <th>Status</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="row cursor-pointer text-xs md:text-lg"
                v-for="item in data.characters.results"
                :key="item.id"
                @click="characterById(item)"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.species }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.gender }}</td>
              </tr>
            </tbody>
          </table>
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
  methods: {
    characterById(id) {
      console.log(id);
      this.$router.push({ name: "charactersId", params: { id } });
    },
  },
};
</script>
<style>
@media screen and (min-width: 768px) {
  th {
    padding: 0 1rem;
  }
  td {
    padding: 1rem 0;
  }
}
.row:hover {
  background: rgba(0, 255, 55, 0.5);
}
</style>
