import tableView from '../views/table.art';

export default {
    render(req,res,next){
        res.render(tableView())

    }
}