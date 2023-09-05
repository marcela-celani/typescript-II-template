/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/

// Criando types
type TPerson = {
    id: string, 
    name: string,
    email: string,
    password: string,
}

enum USE_ROLE {
    ADMIN = 'admin',
    NORMAL = 'normal'
}

type AdminAccount = {
    account: string,
    permission: USE_ROLE.ADMIN,
}

type NormalAccount = {
    account: string,
    permission: USE_ROLE.NORMAL,
}

// Criando objetos
const userAdmin: AdminAccount = {
    account: 'Marcela',
    permission: USE_ROLE.ADMIN,
}

const userNormal: NormalAccount = {
    account: 'Alex',
    permission: USE_ROLE.NORMAL,
}

// Criando objetos com intersecção
type AdminUser = TPerson & AdminAccount 
type NormalUser = TPerson & NormalAccount

const userAdm: AdminUser = {
    id: '001', 
    name: 'Marcela',
    email: 'marcela@teste.com.br',
    password: '123456',
    account: 'administrador',
    permission: USE_ROLE.ADMIN,
}

const userNor: NormalUser = {
    id: '002', 
    name: 'Marcela',
    email: 'marcela@teste.com.br',
    password: '123456',
    account: 'normal',
    permission: USE_ROLE.NORMAL,
}

const users: Array<AdminUser | NormalUser> = [userAdm, userNor]
// const users: (AdminUser | NormalUser)[] = [userAdm, userNor]
console.table(users)
















/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/ 
