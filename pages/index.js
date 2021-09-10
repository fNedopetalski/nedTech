import Head from 'next/head'
import { Button } from '@material-ui/core';
import mi_band from '../images/mi_band_6.png';
import airdots_3 from '../images/airdots_3.jpg';
import bomba from '../images/bomba.jpg';
import redmi_note_10 from '../images/redmi_note_10.jpg';
import aliexpress from '../images/logos/aliexpress.jpg';
import amazon from '../images/logos/amazon.png';
import instagram from '../images/logos/instagram.jpg';
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ofertas diárias</title>
        <meta name="description" content="Produtos com os melhores preços do mercado" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Produtos com os melhores preços!
        </h1>

        <p className={styles.description}>
          Compre do Brasil ou de fora
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Mi Band 6</h2>
            <Image alt="Mi Band 6" src={mi_band} width={300} height={300} />
            <div className={styles.empresas}>
            <a href="https://pt.aliexpress.com/item/1005002368599346.html?spm=a2g0o.productlist.0.0.28cb2a2dKmvIbx">
                <Image src={aliexpress} width={150} height={75}/>
            </a>
            <a href="https://www.amazon.com.br/XIAOMI-7622-Pulseira-Smart-Band/dp/B093QG73BV/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=mi+band+6&qid=1631207831&sr=8-4&ufe=app_do%3Aamzn1.fos.4bb5663b-6f7d-4772-84fa-7c7f565ec65b">
              <Image src={amazon} width={150} height={75}/>
            </a>
            </div>
          </div>
          <div className={styles.card}>
            <h2>Redmi Airdots 3</h2>
            <Image alt="Airdots 3" src={airdots_3} width={300} height={300} />
            <a href="https://pt.aliexpress.com/item/1005002340115138.html?spm=a2g01.12617084.fdpcl001.5.41abOKGeOKGeUA&pdp_ext_f=%7B%22sku_id%22:%2212000020179083935%22,%22ship_from%22:%22%22%7D&gps-id=5547572&scm=1007.19201.130907.0&scm_id=1007.19201.130907.0&scm-url=1007.19201.130907.0&pvid=142f799d-557d-4f4d-9a14-ed7c04d2739b">
              <Image src={aliexpress} width={150} height={75}/>
            </a>
            <a href="https://www.amazon.com.br/Ouvido-AirDots-Bluetooth-prote%C3%A7%C3%A3o-Mosquet%C3%A3o/dp/B0982SBVP8/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=redmi+airdots+3&qid=1631207979&sr=8-4&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678">
              <Image src={amazon} width={150} height={75}/>
            </a>
          </div>
          <div className={styles.card}>
            <h2>Mini Compressor Portátil</h2>
            <Image alt="Compressor Portatil" src={bomba} width={300} height={300} />
            <a href="https://pt.aliexpress.com/item/33029921995.html?spm=a2g01.12617084.fdpcl001.20.41abOKGeOKGeUA&pdp_ext_f=%7B%22sku_id%22:%2212000024055261266%22,%22ship_from%22:%22FR%22%7D&gps-id=5547572&scm=1007.19201.130907.0&scm_id=1007.19201.130907.0&scm-url=1007.19201.130907.0&pvid=61ed8edc-a37e-4499-b898-38a0b25110a4">
              <Image src={aliexpress} width={150} height={75}/>
            </a>
            <a href="https://www.amazon.com.br/Mini-Compressor-Ar-Port%C3%A1til-Xiaomi/dp/B07TQT6YZN/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=compressor+portatil+xiaomi&qid=1631208182&sr=8-2&ufe=app_do%3Aamzn1.fos.e05b01e0-91a7-477e-a514-15a32325a6d6">
              <Image src={amazon} width={150} height={75}/>
            </a>
          </div>
          <div className={styles.card}>
            <h2>Redmi Note 10</h2>
            <Image alt="Smartphone Redmi Note 10" src={redmi_note_10} width={300} height={300} />
            <a href="https://pt.aliexpress.com/item/1005002136612866.html?spm=a2g0o.productlist.0.0.2a981ebbM59HUe&algo_pvid=41a18ea1-d2c7-4f4f-b60d-0049df66a5a1&algo_exp_id=41a18ea1-d2c7-4f4f-b60d-0049df66a5a1-1&pdp_ext_f=%7B%22sku_id%22%3A%2212000022176455906%22%7D">
              <Image src={aliexpress} width={150} height={75}/>
            </a>
            <a href="https://www.amazon.com.br/Xiaomi-Redmi-Note-Vers%C3%A3o-global/dp/B08YFLGZB4/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Redmi+Note+10&qid=1631208253&sr=8-6&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147">
              <Image src={amazon} width={150} height={75}/>
            </a>
          </div>

          {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <h2>Siga-nos &rarr;</h2>
        <a
            href="https://www.instagram.com/ofertas.diarias._/"
          >
           <Image src={instagram} width={30} height={30} />
        </a>
        
      </footer>
    </div>
  )
}