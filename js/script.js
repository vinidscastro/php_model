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


    $('.table').on('click', '.btn_excluirItem', function(){
        let id_produto = $(this).parent().siblings('.col_id').text();
        // id_produto = parseInt(id_produto);
        alert(id_produto);
        $.ajax({          
            url:'deleta.php',
            type: 'post',
            data: {id_produto: id_produto},
            success: function(data){
               $('#tableBody').html('');
                carregaLista();
                console.log(data);
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
                console.log(urlPost);
                console.log($('#form_idProduto').val());
                console.log(str);
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



