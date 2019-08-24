export default (req,res,next)=>{
    $(`#main-menu li a[href="/#${req.url}"]`)
    .parent()
    .addClass('active-menu')
    .siblings()
    .removeClass('active-menu')

}