export default function({ $axios, app }) {
  $axios.interceptors.response.use(
    function(response) {
      return response
    },
    function(error) {
      const code = parseInt(error.response && error.response.status)

      if ([401, 403].includes(code)) {
        let refresh_token = app.$auth
          .getRefreshToken(app.$auth.$storage.state.strategy)
          .replace('Bearer ', '')

        const config = {
          headers: { Authorization: `Bearer ${refresh_token}` }
        }
        return new Promise((resolve, reject) => {
          $axios.post('user/token/refresh', null, config).then(response => {
            if (response.status == 200) {
              app.$auth.setToken(
                app.$auth.$storage.state.strategy,
                'Bearer ' + response.data.access_token
              )
              app.$auth.ctx.app.$axios.setHeader(
                'Authorization',
                'Bearer ' + response.data.access_token
              )
              // app.$auth.setRefreshToken(
              //   app.$auth.$storage.state.strategy,
              //   'Bearer ' + response.data.refresh_token
              // )
              originalRequest.headers[
                'Authorization'
              ] = `Bearer ${response.data.access_token}`
            }

            resolve(response)
          })
        })
          .then(res => {
            return $axios(originalRequest)
          })
          .catch(e => {
            app.$auth.logout()

            setTimeout(() => {
              app.router.push('/login')
            })
          })
      }
    }
  )
}
