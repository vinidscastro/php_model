<!DOCTYPE html>
<html>
<head>
	<title>Basic Crud Learning PHP</title>
	 <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Normalize CSS -->
    <link rel="stylesheet" href="styles/normalize.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="styles/bootstrap.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="styles/index.css">
    <!-- Fonte Open Sans -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i" rel="stylesheet">
    <!-- Fonte Awesome Icons -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">

</head>
<body>
		
	<header>
		<div class="container">
			<div class="row my-4">
        <div class="col-7"><h1 class="openBold h3">Tabela de Produtos</h1></div>
        <div class="col-5 text-right"><button id="btn-addItem" class="btn btn-outline-dark">Adicionar Item <i class="fas fa-plus"></i></button></div>
      </div>
		</div>
	</header>
  
  <form id="formEdit">
    <input type="hidden" id="form_idProduto" name="form_idProduto">
  <div class="container mb-3">
    <div class="row" id="formularioItem">
          <div class="col-12 col-md-4">
              <label class="d-block" for="form_ds_produto">Descrição:</label>
              <input class="form-control" type="text" id="form_ds_produto" name="form_ds_produto" disabled>
            </div>
            <div class="col-12 col-md-3">
              <label class="d-block" for="form_npOriginal">de:</label>
              <input class="form-control" type="number" id="form_npOriginal" name="form_npOriginal" disabled>
            </div>
            <div class="col-12 col-md-3">
              <label class="d-block" for="form_npPromo">por:</label>
              <input class="form-control" type="number" id="form_npPromo" name="form_npPromo" disabled>
            </div>
            <div class="col-12 col-md-2 mt-4 align-self-end d-flex">
              <button id="btn_salvarForm" class="btn btn-block btn-outline-success">Salvar <i class="fas fa-save"></i></button>
            </div>
          </div>
    </div>
  </div>
  </form>

	<div class="container">
		<div class="tableWrapper">
			<table class="table table-striped" id="listaTrocas">
            <thead>
              <tr>

                <th scope="col">Descrição</th>
                <th scope="col">de:</th>
                <th scope="col">por:</th>
                <th scope="col">Editar:</th>
                <th scope="col">Deletar:</th>
              </tr>
            </thead>
            <tbody id="tableBody">
                
              </tbody>
            </table>
		</div>
	</div>


	<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="js/jquery.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/script.js"></script>
</body>
</html>