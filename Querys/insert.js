    // Insert no banco
            fetch("http://127.0.0.1:3000/ativo", {
                method: "POST",
                headers: new Headers({
                    'content-type': 'application/json'}),
                body: JSON.stringify({
                    ativo: "12345S",
                    hostname: "NB12345S"
                })
            });