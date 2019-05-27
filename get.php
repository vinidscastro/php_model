<?php
	require_once ('conexao.php');

	$sql = "SELECT * FROM form_prod_troca";
	$objDb = new db();

	$link = $objDb->conecta_mysql();

	$response = mysqli_query($link, $sql);
	$produtos = array();
	if($response){
		while($produto = mysqli_fetch_array($response, MYSQLI_ASSOC)){
						
			$produtos[] = array(
				'id' => $produto['ID'],
				'descricao' => $produto['DS_PRODUTO'],
				'npOriginal' => $produto['NP_ORIGINAL'],
				'npPromo' => $produto['NP_PROMO']
			);
		}
		echo json_encode( $produtos);
	}
?>