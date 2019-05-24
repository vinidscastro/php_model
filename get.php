<?php
	require_once ('conexao.php');

	$sql = "SELECT * FROM form_prod_troca";
	$objDb = new db();


	$link = $objDb->conecta_mysql();

	$response = mysqli_query($link, $sql);

	if($response){
		while($produto = mysqli_fetch_array($response, MYSQLI_ASSOC)){
			// echo '<p>'. $produto ['DS_PRODUTO'].'</p>';
			echo '<li class="itemProdutos">'.$produto ['DS_PRODUTO'].'</li>';
		}

	}
?>