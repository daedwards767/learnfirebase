
function renderTable(list){
    if (list.length < 1) return "<table><thead></thead><tbody></tbody></table>"

    var tableHead = "<table><thead>" + Object.keys(list[0]).reduce(function(headers, attr){
            headers += "<th>" + attributeToHeaderMap[attr] + "</th>"
            return headers
    }, "") + "</thead>"
    
    return tableHead + "<tbody>" + list.reduce(function(rows, item){
        rows = rows + "<tr>" + Object.keys(item).reduce(function(fields, attr){
            fields += "<td>"+ item[attr] +"</td>"
            return fields
        }, "") + "</tr>"
        return rows
    }, "") + "</tbody></table>"
}

var attributeToHeaderMap = {
    "firstName" : "first name",
    "lastName" : "last name"
}