import SMERouter from 'sme-router';

const router = new SMERouter('router-view' , 'hash');

import Home from '../controller/home';
import Table from '../controller/table';
import User from '../controller/user';


import activeNav from '../utils/activeNav';

User.render();

router.use(activeNav)
router.redirect('/home');
router.route('/home',Home.render);
router.route('/tables',Table.render);
router.route('/table_add',Table.add);
router.route('/table_edit',Table.edit);
// router.route('/Tables');
