
        $(document).ready(function() {

                     $('.btShowText').click( function() {
                $(this).hide();
                $(this).parent().children('span').removeClass('text-ellipsis');
            })

            $('.estado01 button').click( function() {
                $(this).hide();
                $(this).parent().parent().parent().children( ".estado02" ).removeClass('d-none');  
            });

            $('.estado02 button[type="reset"]').click( function() {
                $(this).parent().parent().parent().children( ".estado01" ).contents().find( "button" ).show();
                $(this).parent().parent().parent().children( ".estado02" ).addClass('d-none');
                if($(this).parents(".estado02").find('textarea').val() != '') {
                    $(this).parent().parent().parent().children( ".estado03" ).removeClass('d-none');
                }
            });

            $('.estado02 button[type="submit"]').click( function() {
                close_edit_reply($(this));
            });

            $('.estado03 button[type="submit"]').click( function() {
                var reply = $(this).parent().parent().parent().children( ".estado03" ).contents().find( ".card-text em" ).text();
                $(this).parent().parent().parent().children( ".estado02" ).contents().find( "textarea" ).text(reply);
                $(this).parent().parent().parent().children( ".estado03" ).addClass('d-none');
                $(this).parent().parent().parent().children( ".estado02" ).removeClass('d-none');
            });

            $('.estado03 button[type="reset"]').click( function() {
                $(this).parent().parent().parent().children( ".estado01" ).contents().find( "button" ).show();
                $(this).parent().parent().parent().children( ".estado03" ).addClass('d-none');
                $(this).parent().parent().parent().children( ".estado02" ).addClass('d-none');
            });

            $(".reply").click(function(){
                var name = $(this).parent().find('input[name="name"]').val();
                var comment = $(this).parent().find('textarea[name="comment"]').val();
                var reviewId = $(this).parent().find('input[name="reviewId"]').val();
                $.post( "https://bb.plataformareach.com.br/gmb/avaliacoes/reply", { name: name, comment: comment, reviewId: reviewId } );
                
            });
            
            //close all reply
            $("textarea[name='comment']").each(function(textarea){
                if($(this).val() != '') {
                    close_edit_reply($(this).parents('.estado02').find('button[type="submit"]'));
                    $(this).parents(".estado02").parent().find('.estado03').find('.card-text').append('<p class="wait_sync_info">Resposta ainda não publicada no GMB...</p>');
                    $(this).parents(".estado02").parent().find('.estado01').find('.bt-estado01').remove()
                } 
            });
        });

        function close_edit_reply(that) {
            var reply = that.parent().parent().parent().children( ".estado02" ).contents().find( "textarea" ).val();
            that.parent().parent().parent().children( ".estado03" ).contents().find( ".card-text em" ).text(reply);
            that.parent().parent().parent().children( ".estado02" ).addClass('d-none');
            that.parent().parent().parent().children( ".estado03" ).removeClass('d-none');
        }

        
        $(document).on("change", "input[name='name_selecteds']",function(){
            if($("input[name='name_selecteds']:checked").length > 0 ) {
                add_batch_buttons();
            } else {
                remove_batch_buttons();
            }
        });
        $("input#chackAll").change(function() {
            $("input[name='name_selecteds']").not(this).prop('checked', this.checked);
            if(this.checked) { 
                add_batch_buttons();
            }
            else { 
                remove_batch_buttons();
            }
        });
     
        function add_batch_buttons() {
            $(".number_selected_locations").text($("input[name='name_selecteds']:checked").length);
            $('.titTable').addClass('d-none'); 
            $('.editButtons').removeClass('d-none').attr('style', 'background: #23569c; border-color: #23569c; padding: 8px 15px 5px;');
            $('.editAll').attr('style', 'background: #23569c; border-color: #23569c; width: 27px;');
        }
     
        function remove_batch_buttons() {
            $('.titTable').removeClass('d-none')
            $('.editButtons').addClass('d-none')    
            $('.editAll').attr('style', 'width: 27px;');
        }