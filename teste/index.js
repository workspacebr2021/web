function consulta() {
    valor = document.getElementById("pesquisar").value
    // ativo = document.getElementById("pesquisar").value
    fetch(`http://127.0.0.1:3000/count/${valor}`)
        .then(response => {
            response.json()
                .then(data => {
                    var table = document.getElementById("assetTable");
                    var rowCount = table.rows.length;
                    for (var i = 1; i < rowCount; i++) {
                        var row = table.rows[i];
                        console.log(rowCount)
                        if (rowCount <= 1) {
                            break;
                        }
                            table.deleteRow(i);
                            rowCount--;
                            i--;
                    }
                    for (var i = 0; i < data[0].Total; i++) {
                        var table = document.getElementById("assetTable");

                        var rowCount = table.rows.length;
                        var row = table.insertRow(rowCount);

                        row.insertCell(0).innerHTML = data[i].Ativo
                        row.insertCell(1).innerHTML = data[i].Hostname
                        row.insertCell(2).innerHTML = data[i].Modelo
                        row.insertCell(3).innerHTML = data[i].Descricao
                        // row.insertCell(3).innerHTML = "Engenharia"
                    }
                

                })
        })
}