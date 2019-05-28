<?php 

	require_once ('conexao.php');
	$objDb = new db();
	$link = $objDb->conecta_mysql();

	// $id_produto = $_POST['form_idProduto'];
	$descricao = $_POST['form_ds_produto'];
	$npOriginal = $_POST['form_npOriginal'];
	$npPromo= $_POST['form_npPromo'];

	$query = "INSERT INTO `form_prod_troca` (`DS_PRODUTO`, `NP_ORIGINAL`, `NP_PROMO`) VALUES ('$descricao', $npOriginal, $npPromo);"

	mysqli_query($link, $query);


?>