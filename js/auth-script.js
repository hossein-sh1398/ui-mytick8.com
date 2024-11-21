$(document).ready(() => {

    $('body > *').persiaNumber();
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
        }
    });

    $('.sign__in--confirm-number').on('click', function(e) {
        e.preventDefault()
    });
});

document.addEventListener("DOMContentLoaded", function() {
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