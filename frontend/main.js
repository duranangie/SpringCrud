//mostrar datos principal

function mostrarTabla(done) {
    const url = "http://localhost:8080/api/v1/students"

    fetch(url)
        .then(res => res.json())
        .then(data => {
            done(data);
         
        })

        .catch(error => {
            console.error("error en datos", error);
        })
}


//eliminar datos
function eliminarDatos(studentId) {
    const url = `http://localhost:8080/api/v1/students/${studentId}`
    fetch(url, {
        method: 'DELETE'

    })
        .then(resp => {
            if (resp.ok) {
                location.reload();
            } else {
                throw new Error('Error en eliminar estudiante')
            }
        })
        .catch(error => {
            console.error('error', error);
        })
}


//editar datos
function editarDatos(studentId, nuevaData) {
    const url = `http://localhost:8080/api/v1/students/${studentId}`;

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaData)
    })
        .then(resp => {
            if (resp.ok) {
                location.reload();
            } else {
                throw new Error("error en actualizar datos")
            }
        })

        .catch(error => {
            console.error('Error', error);
        })
}

function crearEstudiante(newStudentData) {
    const url = `http://localhost:8080/api/v1/students`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStudentData)
    })
        .then(resp => {
            if (resp.ok) {
                location.reload();
            } else {
                throw new Error('error en cargar datos')
            }

        })
        .catch(error => {
            console.error('error', error);
        })
}


//llamada inicial para cargar los datos GET

mostrarTabla(data => {
    const main = document.getElementById("table");
    let tableHTML = "";
    data.forEach(mostrar => {
        tableHTML +=`
            <tr>
                <td>${mostrar.studentId}</td>
                <td>${mostrar.firstName}</td>
                <td>${mostrar.lastName}</td>
                <td>${mostrar.email}</td>
                <td>
                    <div id="form-${mostrar.studentId}">
                        <button type="button" onclick="eliminarDatos(${mostrar.studentId})" class="btn btn-danger">Eliminar</button>
                        <button type="button" onclick="mostrarEdicion(${mostrar.studentId}, '${mostrar.firstName}', '${mostrar.lastName}', '${mostrar.email}')" class="btn btn-primary">Editar</button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    main.innerHTML = tableHTML;
});


//mostrar formulario edicion

function mostrarEdicion(studentId,firstName,lastName,email){
    const newWindow = window.open("","_blank","width=600,height=400");
    const formHtml = `
            <html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
                <title>Editar Usuario</title>
            </head>
            <body>
                <div class="container">
                    <h2 class="mt-5">Actualizar Usuario</h2>
                    <form class="mt-4" id="editForm-${studentId}">
                        <div class="form-group">
                            <label for="id">ID:</label>
                            <input type="text" class="form-control" id="editId" name="id" value="${studentId}" readonly>
                        </div>
                        <div class="form-group">
                            <label for="name">Nombre:</label>
                            <input type="text" class="form-control" id="editName" name="name" value="${firstName}" required>
                        </div>
                        <div class="form-group">
                            <label for="lastname">Apellido:</label>
                            <input type="text" class="form-control" id="editLastName" name="lastname" value="${lastName}" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Correo Electrónico:</label>
                            <input type="email" class="form-control" id="editEmail" name="email" value="${email}" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Actualizar</button>
                    </form>
                </div>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            </body>
        </html>
    `;
    newWindow.document.write(formHtml);

    newWindow.document.getElementById(`editForm-${studentId}`).addEventListener("submit",function(event){
        event.preventDefault();


        const newFirstName = newWindow.document.getElementById("editName").value;
        const newLastName = newWindow.document.getElementById("editLastName").value;
        const newEmail = newWindow.document.getElementById("editEmail").value;

        editarDatos(studentId, {firstName: newFirstName, lastName:newLastName, email:newEmail});
        newWindow.close();

    })
}


//agregar datos

function mostrarFormularioNuevo(){
    const newWindow = window.open("","_blank","width=600,height=400");
    const formHtml=`
            <html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
                <title>Nuevo Usuario</title>
            </head>
            <body>
                <div class="container">
                    <h2 class="mt-5">Agregar Nuevo Usuario</h2>
                    <form class="mt-4" id="newForm">
                        <div class="form-group">
                            <label for="name">Nombre:</label>
                            <input type="text" class="form-control" id="newName" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="lastname">Apellido:</label>
                            <input type="text" class="form-control" id="newLastName" name="lastname" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Correo Electrónico:</label>
                            <input type="email" class="form-control" id="newEmail" name="email" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Agregar</button>
                    </form>
                </div>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            </body>
        </html>
    `;

    newWindow.document.write(formHtml);

    newWindow.document.getElementById("newForm").addEventListener("submit",function(event){
        event.preventDefault();

        const newName = newWindow.document.getElementById("newName").value;
        const newlastName = newWindow.document.getElementById("newLastName").value;
        const newEmail= newWindow.document.getElementById("newEmail").value;

        crearEstudiante({firstName: newName , lastName: newlastName, email: newEmail});
        newWindow.close();

    })

}


//busqueda por nombre

document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();


    const buscar = document.querySelector('.form-control').value.toLowerCase();
   
    mostrarTabla(data=>{
        const main = document.getElementById("table")
        let tableHTML="";

        const traerNombre = data.filter(nombre=>{
            return nombre.firstName.toLowerCase().includes(buscar)

        })
        traerNombre.forEach(mostrar=>{
            tableHTML += `
            <tr>
            <td>${mostrar.studentId}</td>
            <td>${mostrar.firstName}</td>
            <td>${mostrar.lastName}</td>
            <td>${mostrar.email}</td>
            <td>
                <div id="form-${mostrar.studentId}">
                    <button type="button" onclick="eliminarEstudiante(${mostrar.studentId})" class="btn btn-danger">Eliminar</button>
                    <button type="button" onclick="mostrarFormularioEdicion(${mostrar.studentId}, '${mostrar.firstName}', '${mostrar.lastName}', '${mostrar.email}')" class="btn btn-primary">Editar</button>
                </div>
            </td>
        </tr>
    `;
        })
        main.innerHTML= tableHTML;
    })
})
