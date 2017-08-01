var todo = todo || {},
    data = JSON.parse(localStorage.getItem("todoData"));

data = data || {};

(function (todo, data, $) {


    todo.init = function () {


        $.each(data, function (index, params) {

        });


        $('#add-btn').click(function (e) {

        });



    };

    var removeElement = function (id) {

    };

    todo.add = function () {
        var todotext = $('#todo-text').val();

    };


})(todo, data, jQuery);

function AddButtonClick(){
  var text = document.getElementById("todo-text").value;
  var ul = document.getElementById("To-Do");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  li.setAttribute("id", "new item added");
  ul.appendChild(li);

  var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 0;
        checkbox.name = "todo[]";

    li.appendChild(checkbox);
}
