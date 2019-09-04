import Vue from 'vue';
import {
  Input,
  Radio,
  Button,
  Checkbox,
  Switch,
  Select,
  DatePicker,
  TimeSelect,
  TimePicker,
  Table,
  Form,
  FormItem,
  Loading,
  Message,
} from 'element-ui';
Vue.prototype.$ELEMENT = { size: 'medium' };

Vue.use(Input);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Button);
Vue.use(Table);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Form);
Vue.use(FormItem);
const LOADING_DIRECTIVE:any = Loading.directive;
Vue.use(LOADING_DIRECTIVE);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
