import { StartFunc as StartFuncGetFetch } from "./GetFetch/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalData = await StartFuncGetFetch();
    let jVarLocalColumns = Object.keys(jVarLocalData);
    let jVarLocalReturnArray = [];

    let jVarLocalCollection = jVarLocalColumns.map(element => {
        return {
            field: element,
            title: element
        }
    });

    jVarLocalReturnArray = [
        {
            title: "#",
            formatter: "jFGlobalSerialColumn"
        },
        ...jVarLocalCollection,
        {
            title: "Delete",
            field: "KS-Delete",
            formatter: "jFLocalDeleteColumn"
        },
        {
            title: "pk",
            field: "pk"
        }
    ];

    return jVarLocalReturnArray;
};

export { StartFunc };
