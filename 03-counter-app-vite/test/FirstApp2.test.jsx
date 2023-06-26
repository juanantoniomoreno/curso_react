import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => {

    const title = 'Hola soy Goku';
    const subTitle = 'soy  un subtitulo';

    test('Debe hacer match con el snapshot', () => {

        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar el mensaje "Hola, Soy Goku', () => {
        
        render( <FirstApp title={title} /> );
        //screen.debug();

        expect( screen.getByText(title) ).not.toBeTruthy();
    })

    test('debe mostrar el título en un h1', () => {

        render( <FirstApp title={title} /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML).toContain( title );
    })

    test('debe mostrar el subtítulo enviado por props', () => {

        render( <FirstApp title={title} subTitle={ subTitle } /> );

        expect( screen.getAllByAltText( subTitle).length ).toBe( 2 );

    })

    
})