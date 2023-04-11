import React, { useState } from "react";
import { ReactSortable, Sortable, MultiDrag, Swap } from "react-sortablejs";

let list1 = [];
let list2 = [];

new Sortable.create(list1, {
    group: 'groupName', // set both lists to same group
    animation: 150
});

new Sortable.create(list2, {
    group: 'groupName',
    animation: 150
});

// mount whatever plugins you'd like to. These are the only current options.
Sortable.mount(new MultiDrag(), new Swap());

// interface ItemType {
//     id: number;
//     name: string;
// }
export const  Element = () => {
    const [state, setState] = useState([
        { id: 1, name: "shrek" },
        { id: 2, name: "fiona" },
    ]);

    return (
        <div>
            <ReactSortable list={state} setList={setState} multiDrag group="groupName" className="list half" id="list1">
                <div>Item 1.1</div>
                <div>Item 1.2</div>
                <div>Item 1.3</div>
                <div>Item 1.4</div>
                <div>Item 1.5</div>
            </ReactSortable>
            <ReactSortable list={state} setList={setState} multiDrag group="groupName" className="list half" id="list2">
                <div>Item 2.1</div>
                <div>Item 2.2</div>
                <div>Item 2.3</div>
                <div>Item 2.4</div>
                <div>Item 2.5</div>
            </ReactSortable>
        </div>
    );
};