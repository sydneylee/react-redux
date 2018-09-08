// // 1) JEST default tesing - component rendering
// import React from 'react';
// import reactDOM from 'react-dom';
// import Counter from './Counter';
//
//
// it('render successfully', ()=>{
//    const div = document.createElement('div');
//     reactDOM.render(<Counter />, div);
//     reactDOM.unmountComponentAtNode(div);
// });


// // 2) using react-test-renderer :
// // 2-1) renderer.create(<Counter />):
// // 2-2) toMatchSnapshot();
// import React from 'react';
// //import reactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
// import Counter from './Counter';
//
// describe('Counter', ()=>{
//     let component = null;
//     it('render successfully', ()=>{
//         // const div = document.createElement('div');
//         // reactDOM.render(<Counter />, div);
//         component = renderer.create(<Counter />);
//         //reactDOM.unmountComponentAtNode(div);
//     });
//
//     it('matches a rendered snapshot', ()=>{
//         const tree = component.toJSON();
//         expect(tree).toMatchSnapshot();
//     });
//
//     it('increase correctly', ()=>{
//         component.getInstance().handleOnIncrement();
//         expect(component.getInstance().state.number).toBe(1);
//         const tree = component.toJSON();
//         expect(tree).toMatchSnapshot();
//     });
//
//     it('decrease correctly', ()=>{
//         component.getInstance().handleOnDecrement();
//         expect(component.getInstance().state.number).toBe(0);
//         const tree = component.toJSON();
//         expect(tree).toMatchSnapshot();
//     });
//
// });

// 3) enzyme - using shallow
import React from 'react';
import {shallow} from 'enzyme';
import Counter from './Counter';

describe('Counter', ()=>{

    let component = null;
    it('render successfully with enzyme shallow method', ()=>{
        component = shallow(<Counter />);
    });

    it('matches a snapshot with shallow component', ()=>{
       expect(component).toMatchSnapshot();
    });

    describe('find button from rendered component', ()=>{
        it('found button', ()=>{
            expect(component.find('button').exists()).toBe(true);
        });

        // it('simulate onClick for triggering increment', ()=>{
        //    const mockEvent ={
        //        target:{
        //            value : null
        //        }
        //    };
        //     component.find('button.incBtn').simulate('click', mockEvent);
        //     // console.log(component.state().number);
        //     expect(component.state().number).toBe(1);
        // });

    });

});

