$("#signupform").validate({
        rules: {

            userName: {
                required: true,
                minlength: 5
            },
            firstName: {
                required: true,
            },
            lastName: {
                required: true,
            },
            Amount_donated: {
				required: true,
				minlength: 1
                maxlength: 7
			},
			creditCard: {
				required: true,
				minlength: 16,
			},
			streetAddress: {
                required: true,
                minlength: 5
            },
            state: {
                required: true,
                minlength: 2
            },
            zip: {
                required: true,
                minlength: 5
            }
        };
    });

//For custom messages

        messages: {

            userName:{
                required: "Please provide a username",
                minlength: "Please create a username that is at least 5 characters"
            },

            firstName: {
                required: "Please enter your first name"
            },
            lastName: {
                required: "Please enter your last name"
            },

            creditCard: {
                required:  "Please enter your credit card info",
                minlength: "Please enter all 16 digits of your credit card",
            },
            streetAddress: {
                required: "Please give your street address",
                minlength: "Your street address must be at least"
            },
            state: {
                required: "Please provide the state in which you live",
                minlength: "A state abbrieviation must be at two letters"
            },
            zip: {
                required: "Please provide a zip code",
                minlength: "A zip code must be five digits"
            }

            Amount_donated: {
                required: "Please provide the dollar amount you wish to donate",
                minlength: "You must donate one dollar"

            },

        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
     });
