function persona(name: string, ci: string, email: string): { name: string, ci: string, email: string } {
    return { name, ci, email };
}

const usuario = persona('Jhasmani', '123456789', 'jhasmani@moba.com');
console.log(usuario);
