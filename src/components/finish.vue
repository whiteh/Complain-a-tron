<template>
    <div>
        Complaint upload attempted but may not have been successful.
        <br/><br/>
        Please call to check it has been received.
        <br/><br/>
        The number to call can be found by searching online.
        <br/><hr width="50%"/><br/>
        Thank you for using Complain-a-Tron, the future of complaint handling. We hope you enjoyed the experience.
    </div>
</template>

<script>

export default {
  name: 'finish',
  data: function () {
      return {
        counter: 0
      }
    },
    created: function () {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
