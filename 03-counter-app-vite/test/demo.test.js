
describe('Pruebas en <DemoComponent />', ()=>{

    test('Prueba que no falla', () => {

        //1. Inicialización
        const msg1 = 'Hola Mundo';
    
        //2. Estímulo
        const msg2 = msg1.trim();
    
        //3. Observar el comportamiento.. esperado
        //expect( msg1 ).toBe( msg2 );
        expect( msg1 ).toBe( msg2 );
    
    })
    

})

