/**
 * Testing module - sync
 * name        : ${NAME}
 * description : ${description}
 * author      : lsj
 * created     : ${DATE}
 */

import ${NAME}, * as ${NAME}Exports from './${NAME}';


describe('${NAME} module:actionCreators and reducer', ()=>{

    describe('ActionCreators', ()=>{
        it('should create Actions', ()=>{

            // //expected actions
            // const expectedActions=[
            //     {type:${NAME}Exports.INCREMENT},
            //     {type:${NAME}Exports.DECREMENT}
            // ];
            // // actual actions from actionCreators
            // const actualActionsFrActionCreator=[
            //     ${NAME}Exports.increment(),
            //     ${NAME}Exports.decrement(),
            // ];
            //
            // expect(actualActionsFrActionCreator).toEqual(expectedActions);

        });

    });
    // lsj-TIP :
    // ${NAME}라는 reducer함수에 state, action를 인자로 넣어서 reduce()함수를 실행시키는데
    // 이때, state가 undefined(not null) 일때는 initialState가 default value로 assign된 상태에서
    //1) 처음 실행될 때는, action도 없어서 default 에 적용되어 initialState가 적용된 state가 returned되는 상황을 테스트
    //2) ${NAME}이라는 reducer함수내에서 INCREMENT와 DECREMENT 두가지 action.type에 대한 처리도 잘 되는지를 테스트
    describe('Reducer', ()=>{
        let state = ${NAME}(undefined, {});
        it('should return the initialState when it is called undefined state and blank actionObj', ()=>{
            expect(state).toHaveProperty('number', 0);
        });

        it('should increase for INCREMENT action.type', ()=>{
            state = ${NAME}(state, ${NAME}Exports.increment());
            expect(state).toHaveProperty('number', 1);
        });

        it('should decrease for DECREMENT action.type', ()=>{
            state = ${NAME}(state, ${NAME}Exports.decrement());
            expect(state).toHaveProperty('number', 0);
        });
    });

});