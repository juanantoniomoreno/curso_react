import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => {

    /* test('Debe hacer Match con el Snapshot ', () => {
        
        const title = "Soy Goku";

        const { container } = render( <FirstApp title={ title }/> );

        expect( container ).toMatchSnapshot();
        
    }) */

    test('Debe Mostrar Título en un h1', () => { 
        
        const title = 'Hola soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title }/> )
        expect( getByText( title ) ).toBeTruthy();
        
        /* const h2 = container.querySelector('h2');
        expect( h2.innerHTML ).toContain( title ); */

        expect( getByTestId( 'test-title').innerHTML ).toContain( title );

        
    })

    test('Debe mostrar el subtitulo enviado por props', () => {

        const title = 'Hola soy Goku';
        const subTitle = 'Soy un subtítulo';
        const { getAllByText } = render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            /> 
        );

        expect( getAllByText( subTitle ).length ).toBe( 2 );
    })
})