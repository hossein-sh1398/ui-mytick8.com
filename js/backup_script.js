$(document).ready(() => {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('body > *').persiaNumber();

    //home-slider
    $(".home-slider__wrapper").owlCarousel({
        rtl: true,
        autoplay: true,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        slideSpeed: 2500,
        smartSpeed: 2500,
        animateOut: 'fadeOut'
    });

    //sign in & up animation
    $(".sign-up--btn").on("click", function(e) {
        if ($(this).hasClass("sign-btn--deactive")) {
            $(".sign__header--sign-in").removeClass("sign__header--active");
            $(".sign__header--sign-up").addClass("sign__header--active");
            $(".sign__up").addClass("sign__up--active");
            $(".sign-in--btn").removeClass("sign-btn--active");
            $(".sign-in--btn").addClass("sign-btn--deactive");
            $(".sign-up--btn").removeClass("sign-btn--deactive");
            $(".sign-up--btn").addClass("sign-btn--active");
        } else {
            e.preventDefault()
            let data = {
                mobile: $('#mobile').val(),
                name: $('#name').val(),
                family: $('#family').val(),
                token: $('#token').val(),
            }
            $.ajax({
                url: $('#register-url').val(),
                type: 'POST',
                data: data,
                success: response => {
                    if (response.status) {
                        toastr.success(response.message);
                        location.assign(response.route)
                    } else {
                        toastr.error(response.message);
                    }
                },
                error: (e => {
                    showFormErrors(e.responseJSON.errors)
                })
            })
        }
    });

    $(".sign-in--btn").on("click", function() {
        if ($(this).hasClass("sign-btn--deactive")) {
            $(".sign__header--sign-in").addClass("sign__header--active");
            $(".sign__header--sign-up").removeClass("sign__header--active");
            $(".sign__up").removeClass("sign__up--active");
            $(".sign-in--btn").removeClass("sign-btn--deactive");
            $(".sign-in--btn").addClass("sign-btn--active");
            $(".sign-up--btn").removeClass("sign-btn--active");
            $(".sign-up--btn").addClass("sign-btn--deactive");
        } else {
            let data = {
                mobile: $('#mobile').val(),
                token: $('#token').val(),
            }
            $.ajax({
                url: $('#login-with-token-url').val(),
                type: 'POST',
                data: data,
                success: response => {
                    if (response.status) {
                        location.assign(response.route)
                    } else {
                        toastr.error(response.message);
                    }
                },
                error: (e => {
                    showFormErrors(e.responseJSON.errors)
                })
            })

        }
    });

    $('.sign__in--confirm-number').on('click', function(e) {
        e.preventDefault()
        let mobile = $('#mobile').val();
        $.ajax({
            url: $('#form-send-token-url').val(),
            type: 'POST',
            data: {
                mobile: mobile,
            },
            success: response => {
                if (response.status) {
                    $('.sign__in--confirm-number').addClass('d-none')
                    toastr.success(response.message);
                    $('.sign--waitingtime').removeClass('d-none')
                } else {
                    toastr.error(response.message);
                }
            },
            error: (e => {
                showFormErrors(e.responseJSON.errors)
            })
        })

    });
});

function showFormErrors(errors) {
    let div = `<div>`;
    for (const error in errors) {
        div += '<p class="text-danger">' + errors[error] + '</p>';
    }
    div += `</div>`
    Swal.fire({
        title: '<p class="text-bold">خطاهای زیر را برطرف نمایید</p>',
        html: div,
        showConfirmButton: false,
    })
}


document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelector('.hall-container')) {
        const seatContainer = document.querySelector('.hall-container');
        // const availableSeats = document.querySelectorAll('.hall-container .hall__seat:not(.hall__seat--occupied):not(.hall__seat--reserved):not(.hall__seat--blocked):not(.hall__seat--notexist)');
        const ticketCount = document.querySelector('.total-chair-length');
        let totalPrice = document.querySelector('.total-price');
        // Populate UI based on data from local storage
        // populateUI();

        function updateSelectedCount() {
            // Get all selected seats
            const selectedSeats = document.querySelectorAll('.hall__seat--selected');
            // Check if the total-chair-length element is present
            if (document.querySelector('.total-chair-length')) {
                // Initialize an array to store prices
                const priceList = []
                    // Update the count of selected seats
                ticketCount.innerText = selectedSeats.length;
                // Calculate the total price
                selectedSeats.forEach(element => {
                    priceList.push(parseFloat(element.getAttribute('data-price')));
                });
                const totalMoney = priceList.reduce(function(pList, item) {
                    pList += item;
                    return pList;
                }, 0);
                // Update the total price in the UI
                totalPrice.textContent = totalMoney;
            }

            // Map selected seat indexes and store in local storage
            // const seatsIndexes = Array.from(selectedSeats).map(seat => {
            //     return seat.getAttribute('data-code');
            // return Array.from(availableSeats).indexOf(seat);
            // });
            // localStorage.setItem('selectedSeats', JSON.stringify(seatsIndexes));
        };

        // get data from localstorage and populate UI
        function populateUI() {
            // Retrieve selected seats from local storage
            const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
            // console.log(selectedSeats);
            // Check if selected seats exist
            if (selectedSeats !== null && selectedSeats.length > 0) {
                // Loop through available seats and add 'hall__seat--selected' class to previously selected seats
                availableSeats.forEach((seat, index) => {
                    /*seat.addEventListener('click', function () {
                      console.log('yes');
                    })*/
                    if (selectedSeats.indexOf(seat.getAttribute('data-code')) > -1) {
                        seat.classList.add('hall__seat--selected');
                    }
                });
            }
        }
        //click on each seat (if is not occupied,reserved,blocked,seatnotexist) add selected class to it
        seatContainer.addEventListener('click', e => {
            if (
                e.target.classList.contains('hall__seat') &&
                !e.target.classList.contains('hall__seat--occupied') &&
                !e.target.classList.contains('hall__seat--reserved') &&
                !e.target.classList.contains('hall__seat--blocked') &&
                !e.target.classList.contains('hall__seat--notexist')
            ) {
                if (!e.target.classList.contains('loader')) {
                    let isSelected = e.target.classList.contains('hall__seat--selected')
                    if (!isSelected) {
                        e.target.classList.remove('hall__seat');
                        e.target.classList.add('loader');
                        let text = e.target.innerHTML;
                        e.target.innerHTML = '';
                        $.ajax({
                            url: document.querySelector('.add-to-cart_route').value,
                            type: 'POST',
                            headers: {
                                Accept: "application/json"
                            },
                            data: {
                                code: e.target.getAttribute('data-code'),
                            },
                            success: response => {
                                if (response.status) {
                                    e.target.classList.remove('loader');
                                    e.target.classList.add('hall__seat');
                                    e.target.classList.add('hall__seat--selected');
                                    e.target.innerHTML = text;
                                    updateSelectedCount();
                                    setTimeout(() => {
                                        if (e.target.classList.contains('hall__seat--selected')) {
                                            $.ajax({
                                                url: document.querySelector('.remove-from-cart_route').value,
                                                type: 'POST',
                                                headers: {
                                                    Accept: "application/json",
                                                },
                                                data: {
                                                    code: e.target.getAttribute('data-code'),
                                                },
                                                success: response => {
                                                    if (response.status) {
                                                        e.target.classList.remove('hall__seat--selected');
                                                    } else {
                                                        toastr.error(response.message)
                                                    }
                                                    updateSelectedCount();
                                                },
                                                error: (err => {
                                                    toastr.error(err.responseJSON.message)
                                                })
                                            })
                                        }
                                    }, 45000)
                                } else {
                                    toastr.error(response.message)
                                    updateSelectedCount();
                                }
                            },
                            error: (err => {
                                toastr.error(err.responseJSON.message)
                                e.target.classList.remove('hall__seat--selected');
                            })
                        })
                    } else {
                        e.target.classList.remove('hall__seat--selected');
                        e.target.classList.remove('hall__seat');
                        e.target.classList.add('loader');
                        let text = e.target.innerHTML;
                        e.target.innerHTML = '';
                        $.ajax({
                            url: document.querySelector('.remove-from-cart_route').value,
                            type: 'POST',
                            headers: {
                                Accept: "application/json"
                            },
                            data: {
                                code: e.target.getAttribute('data-code'),
                            },
                            success: response => {
                                if (response.status) {
                                    e.target.classList.add('hall__seat');
                                    e.target.classList.remove('loader');
                                    e.target.innerHTML = text;
                                    updateSelectedCount();
                                }
                            },
                            error: (err => {
                                toastr.error(err.responseJSON.message);
                                e.target.classList.add('hall__seat--selected');
                                updateSelectedCount();
                            })
                        });
                    }
                }
            }
        });
    }
    /********************************************************** Sign in Countdown **********************************************************/
    if (document.querySelector('.sign--waitingtime')) {
        // Initial countdown time in seconds (3 minutes)
        let countdownTime = 2 * 60;
        // Variable to store the interval for updating the countdown
        let countdownInterval;
        // Get the countdown element and the sign-in button
        const countdownElement = document.querySelector('.sign--waitingtime');
        const signInButton = document.querySelector('.sign-in--btn');
        // Function to update the countdown display
        let updateCountdown = () => {
                // Calculate minutes and seconds
                const minutes = Math.floor(countdownTime / 60);
                const seconds = countdownTime % 60;

                // Convert English numbers to Persian numbers
                const persianMinutes = convertToPersianNumber(String(minutes));
                const persianSeconds = convertToPersianNumber(String(seconds));
                // Format the time as "MM:SS"
                const formattedTime = `${persianMinutes.padStart(2, '۰')}:${persianSeconds.padStart(2, '۰')}`;
                // Update the countdown text
                if (countdownTime >= 0) {
                    countdownElement.textContent = `${formattedTime} تا انقضای کد`;
                    signInButton.disabled = false; // Enable the submit button during the countdown
                } else {
                    // Stop the interval when the countdown reaches zero
                    clearInterval(countdownInterval);
                    countdownElement.textContent = 'زمان استفاده از کد به پایان رسید  ';
                    signInButton.disabled = true;

                    // Show the "Recount" button after the countdown text
                    const recountButton = document.createElement('button');
                    recountButton.textContent = 'ارسال مجدد کد تایید';
                    recountButton.classList = "resend-otp-code";
                    recountButton.addEventListener('click', (event) => {
                        event.preventDefault(); // Prevent the default button behavior (page reload)
                        // Reset countdown time and start the countdown again
                        let mobile = $('#mobile').val();
                        $.ajax({
                            url: $('#form-send-token-url').val(),
                            type: 'POST',
                            data: {
                                mobile: mobile,
                            },
                            success: response => {
                                if (response.status) {
                                    toastr.success(response.message);
                                    countdownTime = 2 * 60;
                                    countdownInterval = setInterval(updateCountdown, 1000);
                                    $('.sign--waitingtime').removeClass('d-none')
                                } else {
                                    toastr.error(response.message);
                                }
                            },
                            error: (e => {
                                showFormErrors(e.responseJSON.errors)
                            })
                        })
                    });

                    countdownElement.appendChild(recountButton);
                }
                // Decrease the countdown time
                countdownTime--;
            }
            // Function to convert English numbers to Persian numbers
        function convertToPersianNumber(number) {
            return number.replace(/[0-9]/g, function(v) {
                return String.fromCharCode(v.charCodeAt(0) + 1728);
            });
        }
        // Initial call to update the countdown display
        updateCountdown();

        // Start the countdown interval (updates every second)
        countdownInterval = setInterval(updateCountdown, 1000);
    }
});