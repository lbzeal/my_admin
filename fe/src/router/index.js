import SMERouter from 'sme-router';

const router = new SMERouter('router-view' , 'hash');

import Home from '../controller/home';
import Table from '../controller/table';
import activeNav from '../utils/activeNav'

router.use(activeNav)
router.redirect('/');
router.route('/',Home.render);
router.route('/tables',Table.render);
// router.route('/Tables');
