  class Utils {
      /**
       * 生成GUID
       * @return {string}
       */
      static GUID() {
              const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

              let guid = this.getToken()
              if (typeof guid !== 'string') {
                  guid = ''
                  for (let i = 1; i <= 23; i++) {
                      guid += chars[_.random(0, 35)]
                  }
                  this.setToken(guid)
              }

              return guid
          }
          /**
           * 获取本地保存的登录用户SESSION
           * @returns {string}
           */
      static getToken() {
              return sessionStorage.getItem(LOCAL_STORAGE_TOKEN)
          }
          /**
           * 本地保存登录用户SESSION
           * @param {string} token
           */
      static setToken(token) {
          if (typeof token === 'string') {
              sessionStorage.setItem(LOCAL_STORAGE_TOKEN, token)
          } else {
              sessionStorage.removeItem(LOCAL_STORAGE_TOKEN)
              Utils.GUID()
          }
      }
  }