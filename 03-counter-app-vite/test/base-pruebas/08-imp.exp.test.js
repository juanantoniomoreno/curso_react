import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp.js';
import heroes from '../../src/data/heroes.js';

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    })

    test('getHeroeById debe retornar un héroe por ID', () => {

        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();
    })

    //Tarea

    test('getHeroesByOwner debe retornar de 3 objetos DC', () => {

        const ownerDC = 'DC';
        
        const heroesDC = getHeroesByOwner( ownerDC );

        expect( heroesDC.length ).toBe( 3 );

        expect( heroesDC ).toEqual( heroes.filter( (hero) => hero.owner === ownerDC) );

        //console.log( heroesByOwner(ownerDC) );
        
    })

    test('getHeroesByOwner debe retornar de 2 objetos Marvel', () => {

        const ownerMarvel = 'Marvel';

        const heroesByMarvel = getHeroesByOwner( ownerMarvel );

        expect( heroesByMarvel.length ).toBe( 2 );

        expect ( heroesByMarvel ).toEqual( heroes.filter( (hero) => hero.owner === ownerMarvel))

        //console.log(heroesByOwner);
        
    })

})