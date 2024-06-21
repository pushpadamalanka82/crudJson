// import { StartFunc as FetchDelete } from "./FetchDelete/Entry.js";

const StartFunc = async (row, $element, field) => {
    if (field === "KS-Alter") {
        let jVarLocalFromSwal = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "grey",
            returnInputValueOnDismiss: true,
            confirmButtonText: "Yes, delete it!",
            // returnFocus:false,
            reverseButtons: true,
            focusCancel: true,
            cancelButtonText: "Cancel"
        });

        if (jVarLocalFromSwal.isConfirmed) {
            jFLocalClickRowForAlter({ inRowPk: row.pk });
        };
    };
};

let jFLocalClickRowForAlter = ({ inRowPk }) => {
    let LocalRowPk = inRowPk;

    window.location = `Alter.html?inRowPk=${LocalRowPk}`;
};

export { StartFunc };