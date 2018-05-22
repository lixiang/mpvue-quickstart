import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import store from '@/store'

const app = new Vue({ store, ...App }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
app.$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  enablePullDownRefresh: true,
}
