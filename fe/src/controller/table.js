import tableView from '../views/table.art';
import tableAddview from '../views/table_add.art';
import tableEditview from '../views/table_edit.art';
const _ = require('lodash');
const COUNT = 2;

function loadData(pageNo, res) {
    let start = pageNo * COUNT;
    $.ajax({
        type: "get",
        url: "/api/table/list",
        data: {
            start,
            count: COUNT
        },
        success: function (result) {
            // console.log(result)
            if (result.ret) {
                res.render(tableView({
                    ...result.data,
                    showpage : true,
                    pageNo,
                    pageCout: _.range(Math.ceil(result.data.total / COUNT)),

                }));

            }
            else {
                res.go('/home');
            }


        }
    });

}


function remove(id, res) {
    $.ajax({
        url: '/api/table/delete',
        type: 'delete',
        data: {
            id
        },
        success(result) {
            if (result.ret) {
                res.go('/tables?' + new Date().getTime());
            }
        }
    })
}


export default {
    render(req, res, next) {
        loadData(0, res)
        // res.render(tableView())
        $('#router-view').on('click', '#addbtn', () => {
            res.go('/table_add');
        })
        $('#router-view').on('click', '.btn-update', function () {
            res.go('/table_edit', {
                id: $(this).attr('data-id')
            })
        })

        $('#router-view').on('click', '.btn-delete', function () {
            remove($(this).attr('data-id'), res);
        })

        $('#router-view').on('click', '#pagi li[data-index]', function () {

            loadData($(this).attr('data-index'), res)
        })
        $('#router-view').on('click', '#dataTables-example_previous', function () {
            let index = $('#pagi li[class*="active"]').attr('data-index');
            let to_index = index - 1;
            if (to_index > -1) {
                loadData(to_index, res);
            }
        })
        $('#router-view').on('click', '#dataTables-example_next', function () {
            let index = $('#pagi li[class*="active"]').attr('data-index');
            let to_index = ~~index + 1;
            if (to_index > -1) {
                loadData(to_index, res);
            }
        })
        $('#router-view').on('click','#possearch',function(){
           let keywords =  $('#keywords').val();
           $.ajax({
               url : '/api/table/search',
               type : 'post',
               data : {
                   keywords,
               },
               success(result)
               {

                  if(result.ret){
                      res.render(tableView({
                          ...result.data,
                          showpage : false,
                      }))
                  }
               }
           })

        })
    },
    add(req, res) {
        res.render(tableAddview({}));
        $('#posback').on('click', () => {
            res.back();
        })
        $('#possubmit').on('click', function () {
          $("#possave").ajaxSubmit({
              url : '/api/table/save',
              type : 'post',
              clearForm : true,
              success(result){
                  console.log(result)
                  if(result.ret){
                      res.back()
                  }else{

                  }
              }
          })
        });

    },
    edit(req, res, next) {
        $.ajax({
            type: "POST",
            url: "/api/table/findone",
            data: {
                id: req.body.id,
            },
            success: function (result) {
                res.render(tableEditview(result.data));
                $('#posback').on('click', () => {
                    res.back();
                })
                $('#possubmit').on('click', () => {
                    $('#posedit').ajaxSubmit({
                        url : 'api/table/patch',
                        type : 'patch',
                        success(result)
                        {
                            if(result.ret)
                            {
                                res.back();
                            }
                            else{

                               alert('修改失败')
                            }
                           
                        }
                    })

                })
            }
        });


    }
}