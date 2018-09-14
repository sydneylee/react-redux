/**
 * Testing for Presentational Component using react-test-renderer
 * name        : ${NAME}
 * description : ${description}
 * author      : lsj
 * created     : ${DATE}
 */

import React from 'react';
import renderer from 'react-test-renderer';
import  ${NAME} from './${NAME}';

describe('${NAME}', () => {
    let component = null;

    it('renders correctly', () => {
        //component = renderer.create(<${NAME} names={["벨로퍼트", "김민준"]} />);
        component = renderer.create(<${NAME}  />);
    });

    it('matches snapshot', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
