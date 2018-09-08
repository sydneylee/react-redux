import React from 'react';
import {mount} from 'enzyme';
import CounterContainer from './CounterContainer';
import configureMockStore from 'redux-mock-store';
import * as counterExports from '../store/modules/counter';


describe('CounterContainer', ()=>{

    let component = null;
    let buttons = null;
    const mockStore = configureMockStore();

    const mockState = {
        number: 6
    };

    //TODO : mockStore()는 reducer function 이 아니라 mockState를 넣어서 생성함
    let store = mockStore(mockState);
    // 혹은 {context:context} => {context:{store}} => {context:{store:store}
    // 즉 mount()함수의 두번째 인자로 { context:{store:store}}라는 값을 넣어주면
    // mount함수에서 그것을 아래처럼 store={store}라는 prop로 넣어서 처리해주는 것
    it('renders successfully', ()=>{

        //component = mount(<CounterContainer />, {context});
        component = mount(<CounterContainer store={store}/>);
    });

    //mount()로 CounterContainer component를 render했으므로,
    // 그것의 child인 Counter component까지 모두 render했으므로,
    // 그 안의 button의 DOM click event를 simulate하는 testing

    // 이 작동이 일어나면 mockStore는 dispatched action을 받아두고 있는데 이것을 expected action과 비교해보는것.
    it('should dispatch increase action by simulating its child comp button click', ()=>{
       component.find('button').at(0).simulate('click');
       expect(store.getActions()[0]).toEqual(counterExports.increment());
    });


});
