// Copyright (c) 2024, BWH and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    onload(frm) {                                     //onload on;y once
        console.log("running load...");
    },
    setup(frm) {
        console.log("setup...");
    },
    refresh(frm) {
        console.log("on refresh...")

        if (frm.doc.status === "New") {
            frm.add_custom_button("Accept", () => {
                // frappe.show_alert("It Works!")
                // Status => Accepted

                frm.set_value('status', "Accepted");
                // save the from
                frm.save();
            }, "Actions")

            frm.add_custom_button("Reject", () => {
                // frappe.show_alert("It Works!")
                // Status => Accepted

                frm.set_value('status', "Rejected");
                // save the from
                frm.save();
            },"Actions")
        }
    },
    status(frm){
        console.log("status changed");
        
    }
});
