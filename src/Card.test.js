import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component tests', () => {

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Card />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders the UI as expected with title = myTitle and content = myContent', () => {
		const tree = renderer
			.create(
				<div name="Card">
					<button type="button">delete</button>
					<h3>title={'testTitle'}</h3>
					<p>content={'testContent'}</p>
				</div>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
    });
    
});