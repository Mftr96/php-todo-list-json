// importazione vue
const { createApp }=Vue;

createApp({
  data() {
    return {
      to_do:"",
      task_completato:false,
      // milestone 1 14/06/24:includo url api in data
      apiURL:"../list.php",
    }
  },
  //funzioni richiamabili all' interno dell'app
  methods:{
    get_done(index){
      index=false;
      console.log(index);
    },
  },
  mounted(){
    //debug console log 
    console.log("app");
    //milestone 1 14/06/2024:aggiorno chiamata axios
    axios.get(apiURL)
    .then(results=>{
      this.to_do=results.data;
    });

    console.log(this.to_do[0]);
    }
}).mount('#app')