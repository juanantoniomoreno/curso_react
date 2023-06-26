import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr.js"

retornaArreglo

describe('Prueba en 07-deses-arr' ,()=>{

    test('Prueba en retornaArreglo debe retornar string y número', ()=>{

        const [letters, numbers] = retornaArreglo();

        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        expect( typeof letters).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );

        
    })
})