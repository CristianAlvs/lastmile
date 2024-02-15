import Resources from "./resources.js"
import Tables from "./tables.js"

const resources = Resources();
const tables = Tables();

// FUNCTIONS
function createTable(tableObject) {
    let table = $(`#${tableObject.tableId}`);
    table.append(`<caption>${tableObject.title}</caption>`);
    table.append("<thead></thead>");
    table.append("<tbody></tbody>");

    var lineHead = tableObject.columns.map((column) => {
        return `<th>${column}</th>`;
    });
  
    var linesBody = tableObject.data.map((line) => {
        let rowClass = line.length > tableObject.columns.length ? ` class="${line[tableObject.columns.length]}"` : '';
        return `<tr${rowClass}>${line.slice(0, tableObject.columns.length).map(cell => `<td>${cell}</td>`).join('')}</tr>`;
    });

    let tableHead = $(`#${tableObject.tableId} thead`);
    let tableBody = $(`#${tableObject.tableId} tbody`);
  
    tableHead.empty();
    tableBody.empty();

    tableBody.append(`<tr>${lineHead.join('')}</tr>`);
    tableBody.append(linesBody.join(''));
}

function fillCodeList(codeObject, listSelector, highlightTag) {
    const listElement = $(listSelector);
    const tagName = listElement.prop("tagName");

    if (tagName == "OL") {
        for (let code in codeObject) {
            listElement.append(`<li><${highlightTag}>${code}</${highlightTag}><div>${codeObject[code]}</div></li>`);
        }
    } else {
        for (let code in codeObject) {
            listElement.append(`<li><${highlightTag}>${code}</${highlightTag}>${codeObject[code]}</li>`);
        }
    }
}

function adjustTextareaHeight(textarea) {
    textarea.css("height", "auto");

    var scrollHeight = textarea[0].scrollHeight;
    var currentHeight = textarea.outerHeight();

    if (textarea.val().trim() === ''){
        textarea.css("height", "10.6rem");
    } else {
        if (scrollHeight > currentHeight) {
            textarea.css("height", scrollHeight + "px");
        }
    }
}

function formatJson(json, element) {
    element.text(JSON.stringify(json, null, 2));

    Prism.highlightElement(element[0]);
}

function menuToggle() {
    if (!$("#btnOpenMenu").hasClass("hide")) {
        $("#btnOpenMenu").toggle();
        $("#btnCloseMenu").toggle();
        $("#navigation").toggle();

        $("body").toggleClass("noScroll");
    }  
}

function updateMenu() {
    var headerHeight = $("header").outerHeight();
    var currentPosition = $(window).scrollTop() + headerHeight - 100;

    $(".mainContent section, #requestInteraction").each(function() {
        var sectionId = $(this).attr("id");
        var sectionTop = $(this).offset().top - 100;
        var sectionBottom = sectionTop + $(this).outerHeight();

        currentPosition = $(window).scrollTop() + headerHeight + 100;

        if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
            $("nav li").removeClass("active");
            $("nav li[data-section='" + sectionId + "']").addClass("active");
        }
    });
}

function scrollPage(menu) {
    if(!menu) {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
    } else {
        var sectionId = menu.data("section");
        var sectionTop = $("#" + sectionId).offset().top;

        var headerHeight = $("header").outerHeight();

        $("html, body").animate({
            scrollTop: sectionTop - headerHeight - 20
        }, 400);

        menuToggle();
    }
}

function checkScreenSize() {
    if ($(window).width() < 1200) {
        $("#navigation").addClass("hide");
        $("#btnOpenMenu").removeClass("hide");
    } else {
        $("#navigation").removeClass("hide");
        $("#btnOpenMenu").addClass("hide");
    }
}

// API
function getApi() {
    let apiUrl = $("#linkApi").val();

    $.ajax({
        url: apiUrl,
        type: "POST",
        contentType: "application/json",
        headers: {
          "Authorization": "Bearer " + $("#token").val()
        },
        data: JSON.stringify(resources.jsonRotas),
        success: function(response) {
          formatJson(response, $("#json-result"));
        },
        error: function(error) {
          formatJson(error, $("#json-result"));
        }
    });
}


// EVENTS
function events() {
    $(window).resize(checkScreenSize);
    
    $("textarea").on("input", function() {
        adjustTextareaHeight($(this));
    });
    $("#btnSendRequest").click(getApi);
    $("#btnOpenMenu").click(menuToggle);
    $("#btnCloseMenu").click(menuToggle);

    $(window).on("scroll", updateMenu);
    $("nav li").click((clickedElement) => scrollPage($(clickedElement.currentTarget)));
    $("ul li").click(function() {
        $("ul li").removeClass("active");
        $(this).addClass("active");
    })
}

// INIT
$(document).ready(function() {
    scrollPage();

    fillCodeList(resources.returnCodes, "#returnCodeList", "strong");
    fillCodeList(resources.errorCodes, "#errorCodeList", "strong");
    fillCodeList(resources.nextStepsList, "#nextStepsList", "strong");

    createTable(tables.tableCodigosRequisicao);
    createTable(tables.tableRecebimentoAusente);
    createTable(tables.tableRota);
    createTable(tables.tableCodigosOcorrencias);
    createTable(tables.tableEntregaRealizada);
    createTable(tables.tableCodigosFinalizacoes);

    checkScreenSize();

    formatJson(resources.jsonEntregaRealizada, $("#jsonEntregaRealizada"));
    formatJson(resources.jsonRecebimentoAusente, $("#jsonRecebimentoAusente"));
    formatJson(resources.jsonRotas, $("#jsonRotas"));

    events();
});
