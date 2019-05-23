<?php


class db{
	
private $host = 'localhost:8080';

private $user = 'root';

private $password = '';

private $database = 'troca_especial';

public function conecta_mysql(){
	$connect =  mysqli_connect($this->host, $this->user, $this->password, $this->database);

	mysqli_set_charset($con, 'utf8');

	if (mysqli_connect_errno()){
		echo 'Erro ao conectar com a base de dados' .mysqli_connect_error();
	}

	return $connect;
	}
}

?>