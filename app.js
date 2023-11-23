jQuery(function () {
    var newTodo = jQuery('#newTodo');
    var todoList = jQuery('#todoList');

    jQuery('#addBtn').on('click', function () {
        var todoText = newTodo.val().trim();
        if (todoText !== '') {
            todoList.append('<li>' + todoText + ' <span class="remove">❌</span> <span class="complete"><i class="fas fa-check"></i></span></li>');
            newTodo.val('');
        }
    });

    todoList.on('click', 'span.remove', function () {
        jQuery(this).parent().remove();
    });

    todoList.on('click', 'span.complete', function () {
        jQuery(this).parent().toggleClass('completed');
    });
});
