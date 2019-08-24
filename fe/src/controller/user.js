import userView from '../views/user.art';
import userFormView from '../views/user_form.art';


export default {
    render() {
        let html = userView({
            login: false,
            username: '胖虎',
        });
        $('#sign-menu').html(html);
        this.btnBand();

    },
    btnBand(){
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
}
}