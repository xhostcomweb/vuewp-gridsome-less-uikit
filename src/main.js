import './index.js';
import '~/assets/less/uikit.less';
import '~/assets/css/uikit-custom.css';

/*import '~/assets/scss/style.scss';*/
import DefaultLayout from '~/layouts/Default.vue'
export default function (Vue,{ head, router, isServer } ) {
  Vue.component('Layout', DefaultLayout)
}
