import api from '../axios/index'
import {Register,Login,OldChangePass,PhoneChangePass,UpdateUserInfo} from './types'

export const USER_LOGIN = ({loginName,password,guId}:Login) => {
  return api.post('/login',{loginName,password,guId});
};//登录接口


