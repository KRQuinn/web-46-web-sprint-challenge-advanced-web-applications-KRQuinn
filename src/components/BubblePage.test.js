import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import BubblePage from './BubblePage';


jest.mock("../services/fetchColorService");

test("Renders without errors", ()=> {
    <BubblePage/>
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    <BubblePage/>
});