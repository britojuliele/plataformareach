/*=========================================================================================
    File Name: kanban.js
    Description: kanban plugin
    ----------------------------------------------------------------------------------------
    Item Name: Frest HTML Admin Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function () {
  var kanban_curr_el, kanban_curr_item_id, kanban_item_title, kanban_data, kanban_item, kanban_users;

  // Kanban Board and Item Data passed by json
 
 
  var kanban_board_data = [
    
    {
      id: "kanban-board-1",
      title: "ENTRADA DE LEADS  <span class='numero'> 5</span>",
      item: [{
          id: "11",
          title: "<strong>CAMPANHA GOOGLE</strong> <br> <strong>NOME:</strong> Carlos Silva <br><strong>TELEFONE:</strong> (11) 2309-2323 <br>",
          border: "secondary",
          dueDate: "Feb 6",
          users: [
            "../app-assets/images/reach/adwords.png",
          ]
        },
   
        {
          id: "13",
          title: "<strong>CAMPANHA FACEBOOK</strong> <br> <strong>NOME:</strong> Luciana Almeida <br><strong>TELEFONE:</strong> (11) 98903-3434 <br>",

          border: "secondary",
          dueDate: "Feb 6",
          users: [
            "../app-assets/images/reach/facebook.png"
          ]
        },

        {
          id: "14",
          title: "<strong>CAMPANHA FACEBOOK</strong> <br> <strong>NOME:</strong> Marcelo D. <br><strong>TELEFONE:</strong> (11) 98997-7676 <br> ",
          border: "secondary",
          dueDate: "Feb 5",
          users: [
            "../app-assets/images/reach/facebook.png"
          ]
        },
       
        {
          id: "15",
          title: "<strong>CAMPANHA GOOGLE</strong> <br> <strong>NOME:</strong> Juliana Oliveira <br><strong>TELEFONE:</strong> (11) 234-7626 <br>",
          border: "secondary",
          dueDate: "Feb 5",
          users: [
            "../app-assets/images/reach/adwords.png"
          ]
        },

        {
          id: "16",
          title: "<strong>CAMPANHA GOOGLE</strong> <br> <strong>NOME:</strong> Natalia Dias <br><strong>TELEFONE:</strong> (11) 8788-62125 <br>",
          border: "secondary",
          dueDate: "Feb 2",
          users: [
            "../app-assets/images/reach/adwords.png"
          ]
        }
             
              
        
      ]
    },
    
    {
      id: "kanban-board-2",
      title: "QUALIFICAÇÃO DE LEADS  <span class='numero'> 4</span>",
      item: [{
          id: "21",
          title: "<strong>Qualificado?</strong> <span style='background-color: #FFE3E4; color: #FF5B5C; font-size: 12px; padding: 5px; border-radius: 3px;'>NÃO</span><hr> <strong>CAMPANHA GOOGLE</strong> <br> <strong>NOME:</strong> Juliana Oliveira <br><strong>TELEFONE:</strong> (11) 234-7626 <br>",
          border: "warning",
          dueDate: "Feb 5",
          comment: "Informação",
          attachment: "2/5",   
          users: [
            "../app-assets/images/reach/adwords.png"
          ]
        },
        {
          id: "22",
          title: "<strong>Qualificado?</strong> <span style='background-color: #DEF9EB; color: #39DA8A;  font-size: 12px; padding: 5px; border-radius: 3px;'>SIM</span><hr><strong>CAMPANHA GOOGLE</strong> <br> <strong>NOME:</strong> Paulo Silva <br><strong>TELEFONE:</strong> (11) 9734-3434 <br>",
          border: "success",
          dueDate: "Feb 4",
          comment: "INTERESSE PRODUTO",
          attachment: "4/5",   
          users: [
            "../app-assets/images/reach/adwords.png"
          ]
        },
        {
          id: "23",
          title: "<strong>Qualificado?</strong> <span style='background-color: #DEF9EB; color: #39DA8A;  font-size: 12px; padding: 5px; border-radius: 3px;'>SIM</span><hr> <strong>CAMPANHA FACEBOOK</strong> <br> <strong>NOME:</strong> Marcelo D. <br><strong>TELEFONE:</strong> (11) 98997-7676 <br> ",
          border: "success",
          dueDate: "Feb 5",
          comment: "Orçamento",
          attachment: "3/5", 
          users: [
            "../app-assets/images/reach/facebook.png"
          ]
        },
        {
          id: "24",
          title: "<strong>Qualificado?</strong> <span style='background-color: #FFE3E4; color: #FF5B5C; font-size: 12px; padding: 5px; border-radius: 3px;'>NÃO</span><hr>  <strong>CAMPANHA FACEBOOK</strong> <br> <strong>NOME:</strong> Luciana Almeida <br><strong>TELEFONE:</strong> (11) 98903-3434 <br>",

          border: "danger",
          dueDate: "Feb 6",
          comment: "Interesse produto",
          attachment: "2/5",   
          users: [
            "../app-assets/images/reach/facebook.png"
          ]
        },

  
      ]
    },
    {
      id: "kanban-board-3",
      title: "PROPOSTA ENVIADA  <span class='numero'> 4</span>",
      
      item: [
        {
          id: "31",
          title: "<strong>CAMPANHA FACEBOOK</strong> <br> <strong>NOME:</strong> Marcelo D. <br><strong>TELEFONE:</strong> (11) 98997-7676 <br> ",
          border: "success",
          dueDate: "Valor da proposta",
          comment: "R$ 5.000",  
          attachment: "5/5",         
          users: [
            "../app-assets/images/reach/facebook.png"
          ]
        },
      
        {
          id: "32",
          title: "<strong>CAMPANHA GOOGLE</strong> <br> <strong>NOME:</strong> Paulo Silva <br><strong>TELEFONE:</strong> (11) 9734-3434 <br>",
          border: "success",
          dueDate: "Valor da proposta",
          comment: "R$ 3.000", 
          attachment: "5/5",   
          users: [
            "../app-assets/images/reach/adwords.png"
          ]
        },

        {
          id: "34",
          title: "<strong>CAMPANHA FACEBOOK</strong> <br> <strong>NOME:</strong> Luciana Almeida <br><strong>TELEFONE:</strong> (11) 98903-3434 <br>",
          border: "warning",
          dueDate: "Objeção",
          attachment: "3/5",
          comment: "Pediu desconto",
          users: [
            "../app-assets/images/reach/facebook.png"
          ]
        },
  
        {
          id: "39",
          title: "<strong>CAMPANHA ADWORDS</strong> <br> <strong>NOME:</strong> Natália Mendes <br><strong>TELEFONE:</strong> (11) 2323-3334 <br>",
          border: "success",
          dueDate: "Objeção",
          attachment: "4/5",
          comment: "AGUARD. ASSINATURA",
          users: [
            "../app-assets/images/reach/adwords.png"
          ]
        }  
        



        
                
      ]

      
    },

     

    {
      id: "kanban-board-5",
      title: "VENDA PERDIDA ❌ <span class='numero'> 2</span>",
      item: [
        {
          id: "35",
          title: "<strong>CAMPANHA FACEBOOK</strong> <br> <strong>NOME:</strong> Lucas Diniz <br><strong>TELEFONE:</strong> (11) 9899-76767 <br>",
          border: "danger",
          dueDate: "Motivo",
          comment: "ACHOU CARO",
          attachment: "2/5",
          users: [
            "../app-assets/images/reach/facebook.png"
          ]
        },

        {
          id: "36",
          title: "<strong>CAMPANHA GOOGLE</strong> <br> <strong>NOME:</strong> Maria do Carmo <br><strong>TELEFONE:</strong> (11) 9989-3457 <br>",
          border: "danger",
          dueDate: "Motivo",
          attachment: "2/5",
          comment: "FORA DA ROTA",
          users: [
            "../app-assets/images/reach/adwords.png"
          ]
        }

        
      ]   
      
    },

    
    {
      id: "kanban-board-6",
      title: "VENDA REALIZADA ✅ <span class='numero'> 2</span>",
      item: [
        {
          id: "40",
          title: "<strong>CAMPANHA GOOGLE</strong> <br> <strong>NOME:</strong> Bruno Oliveira <br><strong>TELEFONE:</strong> (11) 48675-9887 <br>",
          border: "success",
          dueDate: "Motivo",
          comment: "SERVIÇO DIFERENCIADO",
          users: [
            "../app-assets/images/reach/adwords.png"
          ]
        },

        {
          id: "41",
          title: "<strong>CAMPANHA FACEBOOK</strong> <br> <strong>NOME:</strong> Maria do Carmo <br><strong>TELEFONE:</strong> (11) 9989-3457 <br>",
          border: "success",
          dueDate: "Decisor",
          comment: "PREÇO",
          users: [
            "../app-assets/images/reach/facebook.png"
          ]
        }

        
      ]

      

      
    }


    
  ];

  // Kanban Board
  var KanbanExample = new jKanban({
    element: "#kanban-wrapper", // selector of the kanban container
    buttonContent: "+ Cadastrar Lead", // text or html content of the board button

    // click on current kanban-item
    click: function (el) {
      // kanban-overlay and sidebar display block on click of kanban-item
      $(".kanban-overlay").addClass("show");
      $(".kanban-sidebar").addClass("show");

      // Set el to var kanban_curr_el, use this variable when updating title
      kanban_curr_el = el;

      // Extract  the kan ban item & id and set it to respective vars
      kanban_item_title = $(el).contents()[0].data;
      kanban_curr_item_id = $(el).attr("data-eid");

      // set edit title
      $(".edit-kanban-item .edit-kanban-item-title").val(kanban_item_title);
    },

    buttonClick: function (el, boardId) {
      // create a form to add add new element
      var formItem = document.createElement("form");
      formItem.setAttribute("class", "itemform");
      formItem.innerHTML =
        '<div class="form-group">' +
        '<textarea class="form-control add-new-item" rows="2" autofocus required></textarea>' +
        "</div>" +
        '<div class="form-group">' +
        '<button type="submit" class="btn btn-primary btn-sm mr-50">Submit</button>' +
        '<button type="button" id="CancelBtn" class="btn btn-sm btn-danger">Cancel</button>' +
        "</div>";

      // add new item on submit click
      KanbanExample.addForm(boardId, formItem);
      formItem.addEventListener("submit", function (e) {
        e.preventDefault();
        var text = e.target[0].value;
        KanbanExample.addElement(boardId, {
          title: text
        });
        formItem.parentNode.removeChild(formItem);
      });
      $(document).on("click", "#CancelBtn", function () {
        $(this).closest(formItem).remove();
      })
    },
    addItemButton: true, // add a button to board for easy item creation
    boards: kanban_board_data // data passed from defined variable
  });

  // Add html for Custom Data-attribute to Kanban item
  var board_item_id, board_item_el;
  // Kanban board loop
  for (kanban_data in kanban_board_data) {
    // Kanban board items loop
    for (kanban_item in kanban_board_data[kanban_data].item) {
      var board_item_details = kanban_board_data[kanban_data].item[kanban_item]; // set item details
      board_item_id = $(board_item_details).attr("id"); // set 'id' attribute of kanban-item

      (board_item_el = KanbanExample.findElement(board_item_id)), // find element of kanban-item by ID
      (board_item_users = board_item_dueDate = board_item_comment = board_item_attachment = board_item_image = board_item_badge =
        " ");

      // check if users are defined or not and loop it for getting value from user's array
      if (typeof $(board_item_el).attr("data-users") !== "undefined") {
        for (kanban_users in kanban_board_data[kanban_data].item[kanban_item].users) {
          board_item_users +=
            '<li class="avatar pull-up my-0">' +
            '<img class="media-object rounded-circle" src=" ' +
            kanban_board_data[kanban_data].item[kanban_item].users[kanban_users] +
            '" alt="Avatar" height="24" width="24">' +
            "</li>";
        }
      }
      // check if dueDate is defined or not
      if (typeof $(board_item_el).attr("data-dueDate") !== "undefined") {
        board_item_dueDate =
          '<div class="kanban-due-date d-flex align-items-center mr-50">' +
          '' +
          '<span class="font-size-small">' +
          $(board_item_el).attr("data-dueDate") +
          "</span>" +
          "</div>";
      }
      // check if comment is defined or not
      if (typeof $(board_item_el).attr("data-comment") !== "undefined") {
        board_item_comment =
          '<div class="badge badge-light-info">' +
          '' +
          '<span class="font-size-small">' +
          $(board_item_el).attr("data-comment") +
          "</span>" +
          "</div>";
      }
      // check if attachment is defined or not
      if (typeof $(board_item_el).attr("data-attachment") !== "undefined") {
        board_item_attachment =
          '<div class="badge-circle badge-circle-sm badge-circle-light">' +
                    ' <span class="font-size-small">' +
          $(board_item_el).attr("data-attachment") +
          "</span>" +
          "</div>";
      }
      // check if Image is defined or not
      if (typeof $(board_item_el).attr("data-image") !== "undefined") {
        board_item_image =
          '<div class="kanban-image mb-1">' +
          '<img class="img-fluid" src=" ' +
          kanban_board_data[kanban_data].item[kanban_item].image +
          '" alt="kanban-image">';
        ("</div>");
      }
      // check if Badge is defined or not
      if (typeof $(board_item_el).attr("data-badgeContent") !== "undefined") {
        board_item_badge =
          '<div class="kanban-badge">' +
          '<div class="badge-circle badge-circle-sm badge-circle-light-' +
          kanban_board_data[kanban_data].item[kanban_item].badgeColor +
          ' font-size-small font-weight-bold">' +
          kanban_board_data[kanban_data].item[kanban_item].badgeContent +
          "</div>";
        ("</div>");
      }
      // add custom 'kanban-footer'
      if (
        typeof (
          $(board_item_el).attr("data-dueDate") ||
          $(board_item_el).attr("data-comment") ||
          $(board_item_el).attr("data-users") ||
          $(board_item_el).attr("data-attachment")
        ) !== "undefined"
      ) {
        $(board_item_el).append(
          
          '<div class="kanban-footer d-flex justify-content-between mt-1">' +
          '<div class="kanban-footer-left d-flex">' +
          board_item_dueDate +
       board_item_comment +
          "</div>" +
          '<div class="kanban-footer-right">' +
          '<div class="kanban-users">' +
          board_item_badge +
          '<ul class="list-unstyled users-list m-0 d-flex align-items-center">' +
          board_item_attachment +
          board_item_users +
          "</ul>" +
          "</div>" +
          "</div>" +
        "</div>"
        
        );
      }
      // add Image prepend to 'kanban-Item'
      if (typeof $(board_item_el).attr("data-image") !== "undefined") {
        $(board_item_el).prepend(board_item_image);
      }
    }
  }

  // Add new kanban board
  //---------------------
  var addBoardDefault = document.getElementById("add-kanban");
  var i = 1;
  addBoardDefault.addEventListener("click", function () {
    KanbanExample.addBoards([{
      id: "kanban-" + i, // generate random id for each new kanban
      title: "Default Title"
    }]);
    var kanbanNewBoard = KanbanExample.findBoard("kanban-" + i)

    if (kanbanNewBoard) {
      $(".kanban-title-board").on("mouseenter", function () {
        $(this).attr("contenteditable", "true");
        $(this).addClass("line-ellipsis");
      });
      kanbanNewBoardData =
        '<div class="dropdown">' +
        '<div class="dropdown-toggle cursor-pointer" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="bx bx-dots-vertical-rounded"></i></div>' +
        '<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton"> ' +
        '<a class="dropdown-item" href="#"><i class="bx bx-link mr-50"></i>Copy Link</a>' +
        '<a class="dropdown-item kanban-delete" id="kanban-delete" href="#"><i class="bx bx-trash mr-50"></i>Delete</a>' +
        "</div>" + "</div>";
      var kanbanNewDropdown = $(kanbanNewBoard).find("header");
      $(kanbanNewDropdown).append(kanbanNewBoardData);
    }
    i++;

  });

  // Delete kanban board
  //---------------------
  $(document).on("click", ".kanban-delete", function (e) {
    var $id = $(this)
      .closest(".kanban-board")
      .attr("data-id");
    addEventListener("click", function () {
      KanbanExample.removeBoard($id);
    });
  });

  // Kanban board dropdown
  // ---------------------

  var kanban_dropdown = document.createElement("div");
  kanban_dropdown.setAttribute("class", "dropdown");

  dropdown();

  function dropdown() {
    kanban_dropdown.innerHTML =
      '<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton"> ' +
      '<a class="dropdown-item" href="#"><i class="bx bx-link-alt mr-50"></i>Copy Link</a>' +
      '<a class="dropdown-item kanban-delete" id="kanban-delete" href="#"><i class="bx bx-trash mr-50"></i>Delete</a>' +
      "</div>";
    if (!$(".kanban-board-header div").hasClass("dropdown")) {
      $(".kanban-board-header").append(kanban_dropdown);
    }
  }

  // Kanban-overlay and sidebar hide
  // --------------------------------------------
  $(
    ".kanban-sidebar .delete-kanban-item, .kanban-sidebar .close-icon, .kanban-sidebar .update-kanban-item, .kanban-overlay"
  ).on("click", function () {
    $(".kanban-overlay").removeClass("show");
    $(".kanban-sidebar").removeClass("show");
  });

  // Updating Data Values to Fields
  // -------------------------------
  $(".update-kanban-item").on("click", function (e) {
    // var $edit_title = $(".edit-kanban-item .edit-kanban-item-title").val();
    // $(kanban_curr_el).txt($edit_title);
    e.preventDefault();
  });

  // Delete Kanban Item
  // -------------------
  $(".delete-kanban-item").on("click", function () {
    $delete_item = kanban_curr_item_id;
    addEventListener("click", function () {
      KanbanExample.removeElement($delete_item);
    });
  });

  // Kanban Quill Editor
  // -------------------
  var composeMailEditor = new Quill(".snow-container .compose-editor", {
    modules: {
      toolbar: ".compose-quill-toolbar"
    },
    placeholder: "Write a Comment... ",
    theme: "snow"
  });

  // Making Title of Board editable
  // ------------------------------
  $(".kanban-title-board").on("mouseenter", function () {
    $(this).attr("contenteditable", "true");
    $(this).addClass("line-ellipsis");
  });

  // kanban Item - Pick-a-Date
  $(".edit-kanban-item-date").pickadate();

  // Perfect Scrollbar - card-content on kanban-sidebar
  if ($(".kanban-sidebar .edit-kanban-item .card-content").length > 0) {
    new PerfectScrollbar(".card-content", {
      wheelPropagation: false
    });
  }

  // select default bg color as selected option
  $("select").addClass($(":selected", this).attr("class"));

  // change bg color of select form-control
  $("select").change(function () {
    $(this)
      .removeClass($(this).attr("class"))
      .addClass($(":selected", this).attr("class") + " form-control text-white");
  });
});
