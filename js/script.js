$(window).on('load', function(){


        
   function carregaLista(){
    $.ajax({
        url:'get.php',
        dataType: 'json',
        success: function(data){
          
            for(let item of data){
            $('#tableBody').append('<tr class="prodRow" >'
        + '<td class="col_id">' + item.id + '</td>'
        + '<td class="col_dsProd">' + item.descricao + '</td>'
        + '<td class="col_npOriginal">' + item.npOriginal + '</td>'
        + '<td class="col_npPromo">' + item.npPromo + '</td>' 
        + '<td class="col_Edita"><button class="btn btn-outline-primary  btn_editarItem"><i class="fas fa-edit"></i></button>' 
        + '<td class="col_Deleta"><button class="btn btn-outline-primary btn_excluirItem"><i class="fas fa-trash"></i></button>' 
        +  '</td>'
        +'</tr>');
           
        }    
              
        },
        conmplete: function(){
            alert('Hello');
        }
    });
   }
    
    $('.table').on('click', '.btn_editarItem', function(event){
        let id_produto = $(this).parent().siblings('.col_id').text();
        id_produto = parseInt(id_produto);
        $.ajax({          
            url:'get.php',
            dataType: 'json',
            success: function(data){
                for (const item of data) {
                    if(item.id == id_produto){
                        $('#form_ds_produto').prop('disabled', false);
                        $('#form_npOriginal').prop('disabled', false);
                        $('#form_npPromo').prop('disabled', false);
                        $('#form_idProduto').val(item.id);
                        $('#form_ds_produto').val(item.descricao);
                        $('#form_npOriginal').val(item.npOriginal);
                        $('#form_npPromo').val(item.npPromo);
                        $('#form_ds_produto').focus();
                    }
                    
                }
            }
        });
    });

    // Pesquisa


    function searchBar(){
        let searchField = $('#searchInput').val();
        searchField =  searchField.toLowerCase();

        // alert(searchField);
        $.ajax({
            url:'busca.php',
            type: 'post',
            dataType: 'json',
            data: {searchField: searchField},
            success: function(response){
                console.log(response);
                 $('#tableBody').html('');
                 for(let item of response){
                    $('#tableBody').append('<tr class="prodRow" >'
                + '<td class="col_id">' + item.id + '</td>'
                + '<td class="col_dsProd">' + item.descricao + '</td>'
                + '<td class="col_npOriginal">' + item.npOriginal + '</td>'
                + '<td class="col_npPromo">' + item.npPromo + '</td>' 
                + '<td class="col_Edita"><button class="btn btn-outline-primary  btn_editarItem"><i class="fas fa-edit"></i></button>' 
                + '<td class="col_Deleta"><button class="btn btn-outline-primary btn_excluirItem"><i class="fas fa-trash"></i></button>' 
                +  '</td>'
                +'</tr>');
                   
                } 
                               
            }
        })
    }

   


    $('#searchInput').keyup(function(){
        if($(this).val() == ''){
            $('#tableBody').html('');
            carregaLista();
        } else if($(this).val() != ''){
            searchBar();
        }

    })

    $('.table').on('click', '.btn_excluirItem', function(){
        let id_produto = $(this).parent().siblings('.col_id').text();
        id_produto = parseInt(id_produto);
        let textoProd = $(this).parent().parent().find('.col_dsProd').text()
        alert('Deseja Realmente deletar ' + textoProd);
        $.ajax({          
            url:'deleta.php',
            type: 'post',
            data: {id_produto: id_produto},
            success: function(data){
               $('#tableBody').html('');
                carregaLista();
            }
        });
    })

    carregaLista();

    var urlPost = '';
    function urlCheck(){
        if($('#form_idProduto').val() == ''){
                urlPost = 'action.php';
            } else{
                urlPost = 'edit.php';
            };
    }

    $('#formEdit').submit(function(){
        event.preventDefault();
        str = $('#formEdit :input[value!=""]').serialize();
        urlCheck();
        $.ajax({
            url: urlPost,
            type: 'post',
            data: str,
            success: function(){
                $('#form_ds_produto').prop('disabled', true);
                $('#form_npOriginal').prop('disabled', true);
                $('#form_npPromo').prop('disabled', true);
                $('#form_ds_produto').val('');
                $('#form_npOriginal').val('');
                $('#form_npPromo').val('');
                $('#tableBody').html('');
                carregaLista();
               
            }

        });
    });

    $('#btn-addItem').click(function(){
        $('#form_idProduto').val('');
        $('#form_ds_produto').val('');
        $('#form_npOriginal').val('');
        $('#form_npPromo').val('');
        $('#form_ds_produto').prop('disabled', false);
        $('#form_npOriginal').prop('disabled', false);
        $('#form_npPromo').prop('disabled', false);
        $('#form_ds_produto').focus();
    })

});



