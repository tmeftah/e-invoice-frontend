export default function({ $auth, app }) {
  $auth.onRedirect((to, from) => {
    return app.localePath(to)
  })
}
