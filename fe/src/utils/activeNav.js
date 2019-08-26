export default (req,res,next)=>{
    console.log(req.url)
    $(`#main-menu li a[href="/#${req.url}"]`)
    .parent()
    .addClass('active-menu')
    .siblings()
    .removeClass('active-menu')

}