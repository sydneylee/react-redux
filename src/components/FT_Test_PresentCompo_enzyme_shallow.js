/**
 * Testing for Presentational Component using Enzyme shallows
 * name        : ${NAME}
 * description : ${description}
 * author      : lsj
 * created     : ${DATE}
 */

// // 1) JEST default tesing - component rendering
// import React from 'react';
// import reactDOM from 'react-dom';
// import ${NAME} from './${NAME}';
//
//
// it('render successfully', ()=>{
//    const div = document.createElement('div');
//     reactDOM.render(<${NAME} />, div);
//     reactDOM.unmountComponentAtNode(div);
// });


// // 2) using react-test-renderer :
// // 2-1) renderer.create(<${NAME} />):
// // 2-2) toMatchSnapshot();
// import React from 'react';
// //import reactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
// import ${NAME} from './${NAME}';
//
// describe('${NAME}', ()=>{
//     let component = null;
//     it('render successfully', ()=>{
//         // const div = document.createElement('div');
//         // reactDOM.render(<${NAME} />, div);
//         component = renderer.create(<${NAME} />);
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

// // 3) enzyme - using shallow
// import React from 'react';
// import {shallow} from 'enzyme';
// import ${NAME} from './${NAME}';
//
// describe('${NAME}', ()=>{
//
//     let component = null;
//     it('render successfully with enzyme shallow method', ()=>{
//         component = shallow(<${NAME} />);
//     });
//
//     it('matches a snapshot with shallow component', ()=>{
//        expect(component).toMatchSnapshot();
//     });
//
//     describe('find button from rendered component', ()=>{
//         it('found button', ()=>{
//             expect(component.find('button').exists()).toBe(true);
//         });
//
//         it('simulate onClick for triggering increment', ()=>{
//            const mockedEvent ={
//                target:{
//                    value : null
//                }
//            };
//            // lsj-TIP : Method “simulate” is only meant to be run on a single node. 2 found instead. => use id for selector
//
//             component.find('button#incBtn').simulate('click', mockedEvent);
//
//             //component.find('button').simulate('click', mockEvent);
//             // console.log(component.state().number);
//             expect(component.state().number).toBe(1);
//             component.find('button#incBtn').simulate('click', mockedEvent);
//             expect(component.state().number).toBe(2);
//         });
//
//         it('simulate onClick for triggering decrement', ()=>{
//             const mockedEvent ={
//                 target:{
//                     value : null
//                 }
//             };
//             component.find('button#decBtn').simulate('click', mockedEvent);
//             expect(component.state().number).toBe(1);
//             component.find('button#decBtn').simulate('click', mockedEvent);
//             expect(component.state().number).toBe(0);
//         });
//
//     });
//
// });
//



// // 4) enzyme - using shallow - after connected Redux (in ${NAME}Container)
// import React from 'react';
// import {shallow} from 'enzyme';
// import ${NAME} from './${NAME}';
//
// describe('${NAME}', ()=>{
//
//     let component = null;
//     it('render successfully with enzyme shallow method', ()=>{
//         component = shallow(<${NAME} />);
//     });
//
//     it('matches a snapshot with shallow component', ()=>{
//         expect(component).toMatchSnapshot();
//     });
//
//     // lsj-TIP : Enzyme의 shallow test는 component 하나만 shallow 환경에서 test하는 것이므로, 각 action은 store에서 할것.
//     // describe('find button from rendered component', ()=>{
//     //     it('found button', ()=>{
//     //         expect(component.find('button').exists()).toBe(true);
//     //     });
//     //
//     //     it('simulate onClick for triggering increment', ()=>{
//     //         const mockedEvent ={
//     //             target:{
//     //                 value : null
//     //             }
//     //         };
//     //         // lsj-TIP : Method “simulate” is only meant to be run on a single node. 2 found instead. => use id for selector
//     //
//     //         component.find('button#incBtn').simulate('click', mockedEvent);
//     //
//     //         //component.find('button').simulate('click', mockEvent);
//     //         // console.log(component.state().number);
//     //         expect(component.state().number).toBe(1);
//     //         component.find('button#incBtn').simulate('click', mockedEvent);
//     //         expect(component.state().number).toBe(2);
//     //     });
//     //
//     //     it('simulate onClick for triggering decrement', ()=>{
//     //         const mockedEvent ={
//     //             target:{
//     //                 value : null
//     //             }
//     //         };
//     //         component.find('button#decBtn').simulate('click', mockedEvent);
//     //         expect(component.state().number).toBe(1);
//     //         component.find('button#decBtn').simulate('click', mockedEvent);
//     //         expect(component.state().number).toBe(0);
//     //     });
//     //
//     // });
//
// });

// 4) enzyme - using shallow - after connected Redux (in ${NAME}Container)
import React from 'react';
import {shallow} from 'enzyme';
import ${NAME} from './${NAME}';

describe('${NAME}', ()=>{

    let component = null;
    // it('render successfully with enzyme shallow method', ()=>{
    //     component = shallow(<${NAME} number={1001}/>);
    // });
    const mockIncrease = jest.fn();
    const mockDecrease = jest.fn();
    it('render successfully with enzyme shallow method', ()=>{
        component = shallow(<${NAME} number={1001}
                                     onIncrement = {mockIncrease}
                                     onDecrement = {mockDecrease}
        />);
    });

    it('matches a snapshot with shallow component', ()=>{
        expect(component).toMatchSnapshot();
    });

    it('is 1001', ()=>{
        //expect(component.find('h1').at(0).text()).toBe('1001');
        expect(component.find('h1').at(0).text(), '1001');
    });

    // lsj-TIP : Enzyme의 shallow test는 component 하나만 shallow 환경에서 test하는 것이므로, 각 action은 store에서 할것.
    // describe('find button from rendered component', ()=>{
    //     it('found button', ()=>{
    //         expect(component.find('button').exists()).toBe(true);
    //     });
    //
    //     it('simulate onClick for triggering increment', ()=>{
    //         const mockedEvent ={
    //             target:{
    //                 value : null
    //             }
    //         };
    //         // lsj-TIP : Method “simulate” is only meant to be run on a single node. 2 found instead. => use id for selector
    //
    //         component.find('button#incBtn').simulate('click', mockedEvent);
    //
    //         //component.find('button').simulate('click', mockEvent);
    //         // console.log(component.state().number);
    //         expect(component.state().number).toBe(1);
    //         component.find('button#incBtn').simulate('click', mockedEvent);
    //         expect(component.state().number).toBe(2);
    //     });
    //
    //     it('simulate onClick for triggering decrement', ()=>{
    //         const mockedEvent ={
    //             target:{
    //                 value : null
    //             }
    //         };
    //         component.find('button#decBtn').simulate('click', mockedEvent);
    //         expect(component.state().number).toBe(1);
    //         component.find('button#decBtn').simulate('click', mockedEvent);
    //         expect(component.state().number).toBe(0);
    //     });
    //
    // });


    describe('find button from rendered component', ()=>{
        it('found button', ()=>{
            expect(component.find('button').exists()).toBe(true);
        });

        it('simulate onClick for triggering increment', ()=>{
            // lsj-TIP : Method “simulate” is only meant to be run on a single node. 2 found instead. => use id for selector

            //#id
            component.find('button#incBtn').simulate('click');
            expect(mockIncrease.mock.calls.length).toBe(1);
            //multi elements array.at(0)
            component.find('button').at(0).simulate('click');
            expect(mockIncrease.mock.calls.length).toBe(2);
        });

        it('simulate onClick for triggering decrement', ()=>{
            component.find('button#decBtn').simulate('click');
            expect(mockDecrease.mock.calls.length).toBe(1);
            component.find('button').at(1).simulate('click');
            expect(mockDecrease.mock.calls.length).toBe(2);
        });

    });
});