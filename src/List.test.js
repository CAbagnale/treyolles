import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

//this is the test case

describe('List component', () => {

    const testCards = [
		{ id: 'a', title: 'first card', content: 'first card content' },
		{ id: 'b', title: 'second card', content: 'second card content' },
		{ id: 'c', title: 'third card', content: 'third card content' }
	];


    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List cards={testCards} />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(
                
                <section className="List">
                    <header className="List-header">
                        <h2>header={'testHeader'}</h2>
                    </header>
                    <div className="List-cards">
						<List cards={testCards} />
						<button type="button" className="List-add-button">
							+ Add Random Card
						</button>
					</div>
                </section>

            )
            .toJSON();
        expect(tree).toMatchSnapshot();     
    });

});
