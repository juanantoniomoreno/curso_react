import { usContext } from "../../src/base-pruebas/06-deses-obj.js";

describe('Prueba en 06-deses-obj', () => {

    test('usContext devuelve objeto', () => {

        const clave = 'juayto';
        const edad = 42;

        const user = usContext({clave, edad});

        const testUser = {
           nombreClave: 'juayto',
           anios: 42,
           latlng: {
            lat: 14.1232,
            lng: -12.3232
            }
        }

        expect ( user ).toEqual( testUser );

    })
})