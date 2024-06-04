function apinueva(done) {


    const url = "http://localhost:8080/api/v1/students"

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            done(data)
        })

        .catch(error => {
            console.error(error);
        })

}

apinueva(data => {
    const main = document.getElementById("table")
    let tableHTML = "";
    data.forEach(mostrar => {
        tableHTML +=`
        

                    <tr>
                    <td>${mostrar.studentId}</th>
                    <td>${mostrar.firstName}</td>
                    <td>${mostrar.lastName}</td>
                    <td>${mostrar.email}</td>
                    </tr>
                    
              
        
        `})
    

    
        main.innerHTML = tableHTML;
    })


    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const buscador = document.querySelector(".form-control").value.toLowerCase();
    
        apinueva(data => {
            const main = document.getElementById("table");
            let tableHTML = ""; 
    
            const traerNombre = data.filter(nombre => {
                return nombre.firstName.toLowerCase().includes(buscador);
            });
    
            traerNombre.forEach(mostrar => {
                tableHTML += `
                    <tr>
                        <td>${mostrar.studentId}</td>
                        <td>${mostrar.firstName}</td>
                        <td>${mostrar.lastName}</td>
                        <td>${mostrar.email}</td>
                    </tr>
                `;
            });
    
            main.innerHTML = tableHTML; 
        });
    });
    