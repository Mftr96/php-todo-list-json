<?php
//leggo file da disco
$file_content=file_get_contents("dati.json");

//pongo condizione per aggiunta dati lista:
//se il dato è stato caricato nella chiamata
if(isset($_POST["evento"])){

    //converto il file json in array associativo php(con false come secondo argomento diventa oggetto)
    $to_do=json_decode($file_content,true);

    //creo nuovo compito
    $new_task=[
        "evento"=>$_POST["evento"],
        "completato"=> false,
    ];
        //pusho il nuovo compito nella lista 

    $to_do[]=$new_task;

    //riconverto l'array associativo in json
    $file_content=json_encode($to_do);

    //sovrascrivo il json
    file_put_contents("dati.json",$file_content);
};
?>