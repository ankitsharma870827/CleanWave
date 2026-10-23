/* =========================================================
   CLEANWAVE - MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       VOLUNTEER COUNTER
    ===================================================== */

    let volunteers = 63;
    const maximumCapacity = 100;

    const volunteerCounter =
        document.getElementById("volunteerCounter");

    const currentVolunteers =
        document.getElementById("currentVolunteers");

    const capacityProgress =
        document.getElementById("capacityProgress");

    const decreaseBtn =
        document.getElementById("decreaseBtn");

    const increaseBtn =
        document.getElementById("increaseBtn");


    function updateVolunteerCounter() {

        if (volunteerCounter) {
            volunteerCounter.textContent = volunteers;
        }

        if (currentVolunteers) {
            currentVolunteers.textContent = volunteers;
        }

        if (capacityProgress) {

            const percentage =
                Math.min(
                    (volunteers / maximumCapacity) * 100,
                    100
                );

            capacityProgress.style.width =
                percentage + "%";
        }
    }


    if (increaseBtn) {

        increaseBtn.addEventListener("click", function () {

            if (volunteers < maximumCapacity) {

                volunteers++;

                updateVolunteerCounter();
            }

        });
    }


    if (decreaseBtn) {

        decreaseBtn.addEventListener("click", function () {

            if (volunteers > 0) {

                volunteers--;

                updateVolunteerCounter();
            }

        });
    }


    updateVolunteerCounter();



    /* =====================================================
       MARINE WASTE CALCULATOR
    ===================================================== */

    const plasticInput =
        document.getElementById("plastic");

    const netsInput =
        document.getElementById("nets");

    const glassInput =
        document.getElementById("glass");

    const microInput =
        document.getElementById("microplastics");


    const totalWaste =
        document.getElementById("totalWaste");

    const totalRecovered =
        document.getElementById("totalRecovered");


    const plasticValue =
        document.getElementById("plasticValue");

    const netsValue =
        document.getElementById("netsValue");

    const glassValue =
        document.getElementById("glassValue");

    const microValue =
        document.getElementById("microValue");


    const plasticBar =
        document.getElementById("plasticBar");

    const netsBar =
        document.getElementById("netsBar");

    const glassBar =
        document.getElementById("glassBar");

    const microBar =
        document.getElementById("microBar");


    function getNumber(input) {

        if (!input) {
            return 0;
        }

        const value =
            parseFloat(input.value);

        if (
            isNaN(value) ||
            value < 0
        ) {
            return 0;
        }

        return value;
    }


    function updateWasteCalculator() {

        const plastic =
            getNumber(plasticInput);

        const nets =
            getNumber(netsInput);

        const glass =
            getNumber(glassInput);

        const micro =
            getNumber(microInput);


        const total =
            plastic +
            nets +
            glass +
            micro;


        /* ---------- TOTAL ---------- */

        if (totalWaste) {

            totalWaste.textContent =
                total.toFixed(1);
        }


        if (totalRecovered) {

            totalRecovered.textContent =
                total.toFixed(1) + " kg";
        }


        /* ---------- INDIVIDUAL VALUES ---------- */

        if (plasticValue) {
            plasticValue.textContent =
                plastic.toFixed(1) + " kg";
        }

        if (netsValue) {
            netsValue.textContent =
                nets.toFixed(1) + " kg";
        }

        if (glassValue) {
            glassValue.textContent =
                glass.toFixed(1) + " kg";
        }

        if (microValue) {
            microValue.textContent =
                micro.toFixed(1) + " kg";
        }


        /* ---------- VISUAL BARS ---------- */

        const largest =
            Math.max(
                plastic,
                nets,
                glass,
                micro,
                1
            );


        if (plasticBar) {

            plasticBar.style.width =
                (plastic / largest * 100) + "%";
        }


        if (netsBar) {

            netsBar.style.width =
                (nets / largest * 100) + "%";
        }


        if (glassBar) {

            glassBar.style.width =
                (glass / largest * 100) + "%";
        }


        if (microBar) {

            microBar.style.width =
                (micro / largest * 100) + "%";
        }
    }


    /* ---------- INPUT EVENTS ---------- */

    if (plasticInput) {
        plasticInput.addEventListener(
            "input",
            updateWasteCalculator
        );
    }

    if (netsInput) {
        netsInput.addEventListener(
            "input",
            updateWasteCalculator
        );
    }

    if (glassInput) {
        glassInput.addEventListener(
            "input",
            updateWasteCalculator
        );
    }

    if (microInput) {
        microInput.addEventListener(
            "input",
            updateWasteCalculator
        );
    }


    updateWasteCalculator();



    /* =====================================================
       LOAD SAVED REGISTRATION
    ===================================================== */

    const savedRegistration =
        localStorage.getItem(
            "cleanwaveRegistration"
        );


    if (savedRegistration) {

        try {

            const registration =
                JSON.parse(
                    savedRegistration
                );

            console.log(
                "Latest CleanWave registration:",
                registration
            );

        }
        catch (error) {

            console.log(
                "Registration data could not be loaded."
            );
        }
    }



    /* =====================================================
       GENERAL BUTTON EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            "button"
        );


    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                button.blur();

            }
        );

    });


});
