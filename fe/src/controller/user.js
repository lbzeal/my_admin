import userView from '../views/user.art';
import userFormView from '../views/user_form.art';


export default {
    render() {
        let html = userView({
            login: false,
            username: '胖虎',
        });
        $('#sign-menu').html(html);
        this.renderBtnBand();
        this.sendBtnBand();

    },
    renderBtnBand() {
        $('#btn-login').on('click', function () {

            let html = userFormView({
                log: true,
            })
            $('.dropdown-user').html(html);
        })
        $('#btn-register').on('click', function () {

            let html = userFormView({
                log: false,
            })
            $('.dropdown-user').html(html);
        })
    },
    sendBtnBand() {
        $('.dropdown-user').on('click', '#getMa', () => {
            let email_value = $('#inputEmail').val();
            $.ajax({
                url : '/api/users/email',
                type: 'POST',
                data : {
                   email: email_value,
                },
                success(result){
                    console.log(result);
                }
            })
            
        })
        $('.dropdown-user').on('click', '#send', () => {
            let data = $('#form-board').serialize();
            console.log(data)
        })
    }
}