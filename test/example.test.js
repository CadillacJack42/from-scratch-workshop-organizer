// IMPORT MODULES under test here:

import { renderParticipant } from '../render-utils/render.js';

// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Should return a dom element containing a div and a p with textcontent', (expect) => {
    const expected = '<div><p>Jack</p></div>';

    const student = {
        name: 'Jack'
    };

    const actual = renderParticipant(student);

    expect.equal(actual.outerHTML, expected);
});
