import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas sobre 11-async-await', () => {

    test('getImagen debe retornar url de la imagen', async() =>{

        const resp = await getImagen();

        expect( resp ).toBe( 'No se encontró la imagen' );
        
    })
})