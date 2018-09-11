// import React from 'react';
// import ReactDOM from 'react-dom';
// import ${NAME} from './${NAME}';
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<${NAME} />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


import React from 'react';
//import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import ${NAME} from './${NAME}';

it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<${NAME} />, div);
    // ReactDOM.unmountComponentAtNode(div);
    shallow(<${NAME} />);
});
