$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                contact_fname: {
                    required: true,
                    // minlength: 2
                },
                contact_lname: {
                    required: true,
                },
                contact_femail: {
                    required: true,
                    email: true
                },
                contact_fmsg: {
                    required: true,
                    maxlength: 1000,
                },
                contact_fsc_hidden: {
                    required: true
                },
                contact_fsc: {
                    required: true,
                    equalTo: "#contact_fsc_hidden"
                }
            },
            messages: {
                contact_fname: {
                    required: "请输入您的姓",
                    // minlength: "your name must consist of at least 2 characters"
                },
                contact_lname: {
                    required: "请输入您的名",
                    // minlength: "your name must consist of at least 2 characters"
                },
                contact_femail: {
                    required: "请输入您的邮箱"
                },
                contact_fmsg: {
                    required: "请输入您的留言",
                    maxlength: "请勿提交超过1000个字符，如有需要可以用其他方式联系我们"
                    // minlength: "thats all? really?"
                },
                contact_fsc: {
                    required: "请输入验证码",
                    // minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 0.15, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 0.15, function() {
                            $('#error').fadeIn();
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
});