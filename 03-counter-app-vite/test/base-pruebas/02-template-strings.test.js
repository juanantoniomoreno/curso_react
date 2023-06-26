import { getSaludo } from '../../src/base-pruebas/02-template-string.js';

describe('Pruebas en el 02-template-string', () =>{

    test('getSaludo debe retornar "Hola Juan"', () => { 
       
        const name = 'Juan';

        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${name}`)

    })
})