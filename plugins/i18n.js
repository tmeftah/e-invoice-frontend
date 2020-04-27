export default function({ app }) {
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    // eslint-disable-line @typescript-eslint/no-unused-vars
    // console.log(oldLocale, newLocale)
  }
}
