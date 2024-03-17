function filtrar(emails) {
    const Validos = [];

    for (const email of emails) {
        if (email.includes('@') && email.endsWith('.com')) {
            Validos.push(email);
        }
    }

    return Validos;
}

// Ejemplo de uso
const emailList = [
    "javascript@gmail.com", 
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mailOfPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com",
  ];
const emailsValidos = filtrar(emailList);
console.log(emailsValidos);

