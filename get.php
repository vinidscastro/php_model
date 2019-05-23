<?php
	require_once ('conexao.php');

	$ds_prod = $_POST['DS_PRODUTO'];

	$sql = "SELECT * FROM form_prod_troca WHERE ID = 2";
	$objDb = new db();


	$link = $objDb->conecta_mysql();

	$response = mysqli_query($link, $sql);

	if($response){

	}
?>