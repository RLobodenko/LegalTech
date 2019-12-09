const options_dict = {}

const id_list = ['child_info','document','children', 'accept', 'property', 'united', 'search', 'search', 'download_sue', 'fill_sue', 'other_docs', 'other_docs_2', 'fill_data', 'fill_data_2', 'registration', 'ESIA'];

const current_state = '';

const previous_state = '';

const info_dict = {
    'name': 'Иванова', 'surname': 'Татьяна','middle_name': 'Ивановна','husband_name': '','husband_surname': '','husband_middle_name': '', 'husband_address': '', 'husband_company': ''
}

function show_element(element) {
    element.style.display = "block";
}

function hide_element(element) {
    element.style.display = "none";
}

id_list.forEach(element => hide_element(document.getElementById(element)))

show_element(document.getElementById('children'))
document.getElementsByClassName('choose1')[0].onclick = function () {
    hide_element(document.getElementById('children'));
    options_dict['children'] = true;
    show_element(document.getElementById('property'));
};

document.getElementsByClassName('choose2')[0].onclick = function () {
    hide_element(document.getElementById('children'));
    options_dict['children'] = false;
    show_element(document.getElementById('property'));
};

document.getElementsByClassName('choose3')[0].onclick = function () {
    hide_element(document.getElementById('property'));
    options_dict['property'] = true;
    show_element(document.getElementById('search'));
};

document.getElementsByClassName('choose4')[0].onclick = function () {
    hide_element(document.getElementById('property'));
    options_dict['property'] = false;
    // if (options_dict['children'] == true){
    //     show_element(document.getElementById('download_sue'));
    // }
    // else if (options_dict['children'] == false){
    //     show_element(document.getElementById('download_sue'));
    // }
};

document.getElementsByClassName('choose5')[0].onclick = function () {
    hide_element(document.getElementById('search'));
    // show_element(document.getElementById('download_sue'))
};

document.getElementsByClassName('download_sue_1')[0].onclick = function () {
    info_dict['husband_surname'] = document.getElementById('husband_surname').value;
    info_dict['husband_name'] = document.getElementById('husband_surname').value;
    info_dict['husband_middle_name'] = document.getElementById('husband_surname').value;
    info_dict['husband_address'] = document.getElementById('husband_address').value;
    info_dict['husband_company'] = document.getElementById('husband_company').value;
    hide_element(document.getElementById('search'));
    if (options_dict['children'] === false) {
        show_element(document.getElementById('document'));
        document.getElementById('document').innerHTML = '\n' +
            '    <span><div align="right">Мировому судье судебного участка<br>\n' +
            '\t\t\t\t\t\t\t\t№ _____ по городу_______________<br>\n' +
            '<strong>Истец ' + info_dict['surname'] + ' ' + info_dict['name'] + ' ' + info_dict['middle_name'] + '</strong><br>\n' +
            '(полностью ФИО, адрес)<br>\n' +
            '<strong>Ответчик: ' + info_dict['husband_surname'] + ' ' + info_dict['husband_name'] + ' ' + info_dict['husband_middle_name'] + ' ' + info_dict['husband_address'] + ' </strong><br>\n' +
            '(полностью ФИО, адрес)<br></br></br>\n' +
            '</div>\n' +
            '<div align="center">\n' +
            '    ИСКОВОЕ ЗАЯВЛЕНИЕ</br>\n' +
            'о расторжении брака</div>\n' +
            '</br>\n' +
            '\n' +
            '\t\t\t\t\t\t\t\t«___»_________ ____ г. я вступил(а) в брак с ' + info_dict['husband_surname'] + ' ' + info_dict['husband_name'] + ' ' + info_dict['husband_middle_name'] + ' (ФИО ответчика).  Совместно\n' +
            'проживали до «___»_______ ____ г.</br> Брачные отношения между истцом и ответчиком с указанного</br>\n' +
            'времени прекращены. Общее хозяйство с указанной даты не ведется.</br>\n' +
            '\n' +
            'Дальнейшая совместная жизнь стала невозможна. Спора о разделе имущества, являющегося\n' +
            'совместной собственностью супругов, нет.</br>\n' +
            '\n' +
            '<strong>Спор о ребенке между супругами отсутствует.</strong> </br>\n' +
            '\n' +
            'Согласно п. 1 статьи 23 Семейного кодекса Российской Федерации при наличии взаимного\n' +
            'согласия на расторжение брака супругов, </br>имеющих общих несовершеннолетних детей, а также</br>\n' +
            'супругов, указанных в пункте 2 статьи 21 Семейного кодекса Российской Федерации, суд\n' +
            'расторгает брак без выяснения мотивов развода.</br>\n' +
            '\n' +
            'На основании изложенного, руководствуясь со статьи 21, 23 Семейного кодекса РФ,\n' +
            '    статьи 23, 131, 132 Гражданского процессуального кодекса РФ,</br>\n' +
            '\n' +
            'Прошу:</br>\n' +
            '\n' +
            '1.\tБрак между:  ' + info_dict['surname'] + ' ' + info_dict['name'] + ' ' + info_dict['middle_name'] + ' (Ф.И.О. истца) и ' + info_dict['husband_surname'] + ' ' + info_dict['husband_name'] + ' ' + info_dict['husband_middle_name'] + ' (Ф.И.О. ответчика),\n' +
            '    зарегистрированный "___"_________ ____ г. в _________ (наименование органа записи\n' +
            'актов гражданского состояния), актовая запись № ____, расторгнуть.</br>\n' +
            '\n' +
            '\n' +
            'Перечень прилагаемых к заявлению документов (копии по числу лиц, участвующих в деле):</br>\n' +
            '\n' +
            '1.\tКопия искового заявления</br>\n' +
            '2.\tДокумент, подтверждающий уплату государственной пошлины</br>\n' +
            '3.\tСвидетельство о заключении брака (подлинник)</br>\n' +
            '4.\tКопия свидетельств о рождении ребенка</br></br>\n' +
            '\n' +
            '\n' +
            'Дата подачи заявления: "___"__ ____ г.                             Подпись истца _______\n' +
            '\n' +
            '</span>';
    }
    else{
        show_element(document.getElementById('child_info'));
    }
};

document.getElementsByClassName('download_sue_2')[0].onclick = function () {
    info_dict['child_surname'] = document.getElementById('husband_surname').value;
    info_dict['child_name'] = document.getElementById('husband_surname').value;
    info_dict['child_middle_name'] = document.getElementById('husband_surname').value;
    hide_element(document.getElementById('child_info'));
    show_element(document.getElementById('document'));
    document.getElementById('document').innerHTML = '\n' +
        '    <span><div align="right">Мировому судье судебного участка<br>\n' +
        '\t\t\t\t\t\t\t\t№ _____ по городу_______________<br>\n' +
        '<strong>Истец  ' + info_dict['surname'] + ' ' + info_dict['name'] + ' ' + info_dict['middle_name'] + '</strong><br>\n' +
        '(полностью ФИО, адрес)<br>\n' +
        '<strong>Ответчик: ' + info_dict['husband_surname'] + ' ' + info_dict['husband_name'] + ' ' + info_dict['husband_middle_name'] + ' ' + info_dict['husband_address'] + ' </strong><br>\n' +
        '(полностью ФИО, адрес)<br></br></br>\n' +
        '</div>\n' +
        '<div align="center">\n' +
        '    ИСКОВОЕ ЗАЯВЛЕНИЕ</br>\n' +
        'о расторжении брака</div>\n' +
        '</br>\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t«___»_________ ____ г. я вступил(а) в брак с ' + info_dict['husband_surname'] + ' ' + info_dict['husband_name'] + ' ' + info_dict['husband_middle_name'] + ' (ФИО ответчика).  Совместно\n' +
        'проживали до «___»_______ ____ г.</br> Брачные отношения между истцом и ответчиком с указанного</br>\n' +
        'времени прекращены. Общее хозяйство с указанной даты не ведется.</br>\n' +
        '\n' +
        'Дальнейшая совместная жизнь стала невозможна. Спора о разделе имущества, являющегося\n' +
        'совместной собственностью супругов, нет.</br>\n' +
        '\n' +
        '<strong>От брака имеется несовершеннолетний ребенок: ' +  info_dict['child_surname'] + ' ' + info_dict['child_name'] + ' ' + info_dict['child_middle_name'] +  ' (ФИО ребенка). </br>\n' +
        'Прошу оставить ребёнка со мной.</strong> </br>\n' +
        '\n' +
        'Согласно п. 1 статьи 23 Семейного кодекса Российской Федерации при наличии взаимного\n' +
        'согласия на расторжение брака супругов, </br>имеющих общих несовершеннолетних детей, а также</br>\n' +
        'супругов, указанных в пункте 2 статьи 21 Семейного кодекса Российской Федерации, суд\n' +
        'расторгает брак без выяснения мотивов развода.</br>\n' +
        '\n' +
        'На основании изложенного, руководствуясь со статьи 21, 23 Семейного кодекса РФ,\n' +
        '    статьи 23, 131, 132 Гражданского процессуального кодекса РФ,</br>\n' +
        '\n' +
        'Прошу:</br>\n' +
        '\n' +
        '1.\tБрак между:  ' + info_dict['surname'] + ' ' + info_dict['name'] + ' ' + info_dict['middle_name'] + ' (Ф.И.О. истца) и ' + info_dict['husband_surname'] + ' ' + info_dict['husband_name'] + ' ' + info_dict['husband_middle_name'] + ' (Ф.И.О. ответчика),\n' +
        '    зарегистрированный "___"_________ ____ г. в _________ (наименование органа записи\n' +
        'актов гражданского состояния), актовая запись № ____, расторгнуть.</br>\n' +
        '\n' +
        '\n' +
        'Перечень прилагаемых к заявлению документов (копии по числу лиц, участвующих в деле):</br>\n' +
        '\n' +
        '1.\tКопия искового заявления</br>\n' +
        '2.\tДокумент, подтверждающий уплату государственной пошлины</br>\n' +
        '3.\tСвидетельство о заключении брака (подлинник)</br>\n' +
        '4.\tКопия свидетельств о рождении ребенка</br></br>\n' +
        '\n' +
        '\n' +
        'Дата подачи заявления: "___"__ ____ г.                             Подпись истца _______\n' +
        '\n' +
        '</span>';
};

// By Podlesnykh Konstantin

// show_element(document.getElementById('children'))
// document.getElementsByClassName('checkbox-circle')[0].onclick = function () {
//     hide_element(document.getElementById('children'));
//     if (document.getElementsByClassName('choose')[0].value === 'yes')
//     {
//         show_element(document.getElementById('accept'))
//     }
//     else if (document.getElementsByClassName('choose')[0].value === 'no')
//     {
//         show_element(document.getElementById('property'))
//     }
// };




//
//
// $(function(){
// 	$("#wizard").steps({
//         headerTag: "h4",
//         bodyTag: "section",
//         transitionEffect: "fade",
//         enableAllSteps: true,
//         transitionEffectSpeed: 500,
//         onStepChanging: function (event, currentIndex, newIndex) {
//             if ( newIndex === 1 ) {
//                 $('.steps ul').addClass('step-2');
//             } else {
//                 $('.steps ul').removeClass('step-2');
//             }
//             if ( newIndex === 2 ) {
//                 $('.steps ul').addClass('step-3');
//             } else {
//                 $('.steps ul').removeClass('step-3');
//             }
//
//             if ( newIndex === 3 ) {
//                 $('.steps ul').addClass('step-4');
//                 $('.actions ul').addClass('step-last');
//             } else {
//                 $('.steps ul').removeClass('step-4');
//                 $('.actions ul').removeClass('step-last');
//             }
//             return true;
//         },
//         labels: {
//             finish: "Назад",
//             next: "Next",
//             previous: "Previous"
//         }
//     });
//     // Custom Steps Jquery Steps
//     $('.wizard > .steps li a').click(function(){
//     	$(this).parent().addClass('checked');
// 		$(this).parent().prevAll().addClass('checked');
// 		$(this).parent().nextAll().removeClass('checked');
//     });
//     // Custom Button Jquery Steps
//     $('.forward').click(function(){
//     	$("#wizard").steps('next');
//     })
//     $('.backward').click(function(){
//         $("#wizard").steps('previous');
//     })
//     // Checkbox
//     $('.checkbox-circle label').click(function(){
//         $('.checkbox-circle label').removeClass('active');
//         $(this).addClass('active');
//     })
// });

// By Podlesnykh Konstantin
// https://vk.com/mr.k.underwood