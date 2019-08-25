import userView from '../views/user.art';
import userFormView from '../views/user_form.art';


export default {
    async render() {
        let result = await this.isSignin();
        console.log(result);
        let html = userView({
            login: result.ret,
            username: result.data.username,
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
                url: '/api/users/email',
                type: 'POST',
                data: {
                    email: email_value,
                },
                success(result) {
                    console.log(result);
                }
            })

        })
        $('.dropdown-user').on('click', '#send', () => {
            let data = $('#form-board').serialize();
            console.log(data);
            $.ajax({
                url: '/api/users/signup',
                type: 'POST',
                data,
                success(result) {
                    console.log(result);
                    if (result.ret) {
                        alert(result.data.msg);
                    } else {
                        alert(result.data.msg)
                    }
                }
            })
        })
        $('.dropdown-user').on('click', '#send-login', () => {
            let data = $('#form-board').serialize();
            console.log(data);
            $.ajax({
                url: '/api/users/signin',
                type: 'POST',
                data,
                success(result) {
                    console.log(result);
                    if (result.ret) {
                        let html = userView({
                            login: result.ret,
                            username: result.data.username,
                        });
                        $('#sign-menu').html(html);
                    } else {
                        alert(result.data.msg)
                    }
                }
            })
        })
        $('.top-navbar').on('click','#btn-signout',()=>{
            $.ajax({
                url: '/api/users/signout',
                type: 'GET',
                success(result) {
                    console.log(result);
                    location.reload();
                }
            })
        })
    },

    isSignin() {
        return $.ajax({
            url: '/api/users/isSignin',
            type: 'GET',
            success(result) {
                return result;
            }
        })
    }
}