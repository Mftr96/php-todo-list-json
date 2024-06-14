// importazione vue
const { createApp }=Vue;

createApp({
  data() {
    return {
      to_do:[],
      new_event:"",
      // milestone 1 14/06/24:includo url api in data
      apiURL:"../create.php",
      postRequestConfig: {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      },
    }
  },
  //funzioni richiamabili all' interno dell'app
  methods:{
    get_done(index){
      index=false;
      console.log(index);
    },
  //funzione per aggiungere nuovo compito alla lista (chiamata axios post)
  get_new_task(){
    console.log(this.new_event)
    //creo costante per nuovo compito
    const new_task={
      evento:this.new_event,
      compleato:true,
    };
    console.log(new_task)
    //chiamata axios post inserendo nella chiamata il dato del nuovo compito
    axios.post(this.apiURL,new_task,this.postRequestConfig)
    .then(results=>{
      console.log(results);
      this.to_do=results.data;
    });
  },

  },
  mounted(){
    //debug console log 
    console.log("app");
    //milestone 1 14/06/2024:aggiorno chiamata axios
    axios.get("../list.php")
    .then(results=>{
      this.to_do=results.data;
    });

    console.log(this.to_do);
    }
}).mount('#app')