(document).ready(function () {
    $('.php-email-formss').submit(function (e) {
        e.preventDefault();
        document.querySelector('.loading').classList.add('d-block');
        document.querySelector('.error-message').classList.remove('d-block');
        document.querySelector('.sent-message').classList.remove('d-block');

        const FormData = $(this).serialize();
        $.ajax({
            url: "/contact/",
            type: 'POST',
            data: FormData,
            success: function (response) {
                // Handle the successful response here
                document.querySelector('.error-message').classList.remove('d-block');
                document.querySelector('.loading').classList.remove('d-block');
                document.querySelector('.sent-message').classList.add('d-block');
                $('.php-email-formss')[0].reset(); 
                console.log(response);
            },
            error: function (xhr, status, error) {
                // Handle the error response here
                document.querySelector('.loading').classList.remove('d-block');
                document.querySelector('.sent-message').classList.remove('d-block');
                document.querySelector('.error-message').innerHTML = error;
                document.querySelector('.error-message').classList.add('d-block');

                console.log(xhr.responseText);
            }
        })
    })
})
