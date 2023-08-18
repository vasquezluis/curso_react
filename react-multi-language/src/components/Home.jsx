import { useTranslation } from "react-i18next";

function Home() {
const [t] = useTranslation("global");

return (
  <div>
    <p>{t('home.body')}</p>
  </div>
)
}

export default Home;
