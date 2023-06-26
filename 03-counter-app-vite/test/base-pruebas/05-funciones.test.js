import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en el 05-funciones', () => {

    test('getUser debe retornar un objeto', ()=>{

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( testUser );
    })

    test('getUsuarioActivo debe retornar un objeto con parámetro', () => {

        const name = 'Juan';

        const testUser = {
            uid: 'ABC567',
            username: 'Juan' 
        }

        const newActiveUser = getUsuarioActivo( name );

        expect( newActiveUser ).toStrictEqual( testUser );
    })

})