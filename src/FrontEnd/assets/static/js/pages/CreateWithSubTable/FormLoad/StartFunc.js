import { StartFunc as ShowOnDom } from "./ShowOnDom/EntryFile.js";
import { StartFunc as BuildSubTable } from "./BuildSubTable/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = async () => {
    ShowOnDom().then();
    BuildSubTable().then();
    StartFuncAddListeners();
};

export { StartFunc };