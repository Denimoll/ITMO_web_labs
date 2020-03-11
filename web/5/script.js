//Создаем форму: количество строк, столбцов и кнопка "создать". Кнопка убирает form1, появляет form2 и создает таблицу.
var form1 = document.createElement("form"),
    labelRows = document.createElement("label"),
    inputRows = document.createElement("input"),
    labelColumns = document.createElement("label"),
    inputColumns = document.createElement("input"),
    buttonCreateForm = document.createElement("button");

labelRows.style.display = "block";
labelRows.innerText = "Rows: ";
inputRows.style.display = "block";
inputRows.type = "text";
inputRows.id = "countRows";
labelColumns.style.display = "block";
labelColumns.innerText = "Columns: ";
inputColumns.style.display = "block";
inputColumns.type = "text";
inputColumns.id = "countColumns";
buttonCreateForm.type = "button";
buttonCreateForm.innerText = "Create";

form1.append(labelRows, inputRows, labelColumns, inputColumns, buttonCreateForm);
document.body.appendChild(form1);



//Создаем форму с элементами.
var form2 = document.createElement("form"),
    form21 = document.createElement("form"), //изменить границы таблицы
    h21 = document.createElement("h"),
    input21 = document.createElement("input"),
    select21 = document.createElement("select"),
    button21 = document.createElement("button"),
    form22 = document.createElement("form"), //добавить заголовок
    h22 = document.createElement("h"),
    input22 = document.createElement("input"),
    button22 = document.createElement("button"),
    form23 = document.createElement("form"), // удалить строку
    h23 = document.createElement("h"),
    input23 = document.createElement("input"),
    button23 = document.createElement("button"),
    form24 = document.createElement("form"), //случайный выбор
    h24 = document.createElement("h"),
    button24 = document.createElement("button"),
    form25 = document.createElement("form"), //удалить всю таблицу
    h25 = document.createElement("h"),
    button25 = document.createElement("button");

form21.append(h21, input21, select21, button21);
form22.append(h22, input22, button21);
form23.append(h23, input23, button23);
form24.append(h24, button24);
form25.append(h25, button25);
form2.append(form21, form22, form23, form24, form25);
document.body.appendChild(form2);
