frappe.ui.form.on('Purchase Invoice Item', {
    custom_qty_in_ctn: function(frm, cdt, cdn) {
        calculate_qty(frm, cdt, cdn);
    },
    custom_no_of_ctn: function(frm, cdt, cdn) {
        calculate_qty(frm, cdt, cdn);
    }
});

function calculate_qty(frm, cdt, cdn) {
    let row = locals[cdt][cdn];
    let qty_in_ctn = flt(row.custom_qty_in_ctn);
    let no_of_ctn = flt(row.custom_no_of_ctn);

    let total_qty = qty_in_ctn * no_of_ctn || 0;

    frappe.model.set_value(cdt, cdn, 'qty', total_qty).then(() => {
        frm.refresh_field("items");
    });
}
