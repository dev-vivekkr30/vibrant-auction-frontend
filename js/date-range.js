$(document).ready(function () {
    let dropdownBtn = $("#dropdown-btn");

    // Set default value to the current date
    dropdownBtn.text("Auction Date");

    // Function to update dropdown button text
    $(".dropdown-item").click(function () {
        let selectedValue = $(this).data("value");

        if (selectedValue) {
            let dateText = getDateRange(selectedValue);
            dropdownBtn.text(dateText);
        } else if ($(this).hasClass("custom-date")) {
            openDateRangePicker();
        }
    });
    // Function to open date range picker
    function openDateRangePicker() {
        let start = moment().startOf("month");
        let end = moment().endOf("month");

        let $input = $("<input type='text' id='daterange-picker' style='position:absolute;opacity:0;'>")
            .appendTo("body")
            .daterangepicker({
                startDate: start,
                endDate: end,
                opens: "center",
                autoUpdateInput: false
            }, function (start, end) {
                dropdownBtn.text(start.format("MMM D") + " - " + end.format("MMM D, YYYY"));
            })
            .trigger("click");

        // Close picker and remove input after Apply button is clicked
        $input.on("apply.daterangepicker", function (ev, picker) {
            picker.hide();
            $input.remove();
        });

        // Close picker and remove input if canceled
        $input.on("cancel.daterangepicker", function (ev, picker) {
            picker.hide();
            $input.remove();
        });
    }
});


