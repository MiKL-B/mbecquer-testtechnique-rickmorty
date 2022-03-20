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
        <div v-else-if="error" title="pas de données" class="bg-white rounded-sm shadow-2xl my-4 w-96 mx-auto p-4">
          Ce que tu cherches n'a pas été trouvé :
          <blockquote class="italic text-green ">
            "Personne n'existe délibérément, on a notre place nulle part et tout
            le monde finit par mourir. Viens regarder la télé"
          </blockquote>
        </div>
        <!-- Result -->
        <div v-else-if="data" class="p-4">
          <table class="table-auto w-full my-4 border-2 border-dark">
            <thead class="bg-dark text-white">
              <tr>
                <th>Name</th>
                <th>Species</th>
                <th>Status</th>
                <th>Gender</th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr
                class="row cursor-pointer text-sm md:text-lg"
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
      this.$router.push({ name: "charactersId", params: { id } });
    },
  },
};
</script>
<style>
@media screen and (min-width: 768px) {
  th {
    padding: 0.5rem 1rem;
  }
  td {
    padding: 1rem 0;
  }
}
.row:hover {
  background: #b6f89a;

}
</style>
