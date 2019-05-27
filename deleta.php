<?php 

	require_once ('conexao.php');
	$objDb = new db();
	$link = $objDb->conecta_mysql();

	$id_produto = $_POST['id_produto'];

	$query = "DELETE from form_prod_troca WHERE id = $id_produto";

	mysqli_query($link, $query);

 ?>