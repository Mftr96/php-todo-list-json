// importazione vue
const { createApp }=Vue;

createApp({
  data() {
    return {
      to_do:"",
    }
  },
  //funzioni richiamabili all' interno dell'app
  methods:{
  },
  mounted(){
    //debug console log 
    console.log("app");
    axios.get("../server.php")
    .then(results=>{
      this.to_do=results.data;
    });

    console.log(this.to_do[0]);
    }
}).mount('#app')