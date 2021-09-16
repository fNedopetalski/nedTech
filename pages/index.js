import Head from 'next/head'
import { Button } from '@material-ui/core';
import mi_band from '../images/mi_band_6.png';
import airdots_3 from '../images/airdots_3.jpg';
import bomba from '../images/bomba.jpg';
import redmi_note_10 from '../images/redmi_note_10.jpg';
import GTSmini from '../images/GTSmini.png';
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
            <div className={styles.divCard}>
            <div className={styles.cardzinho}>
            <a target="_blank" href="https://s.click.aliexpress.com/e/_A5l0nQ">
                <Image src={aliexpress} width={150} height={75}/>
            </a>
            </div>
            <div className={styles.cardzinho}>
            <a target="_blank" href="https://www.amazon.com.br/gp/product/B093QG73BV/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=nedtech-20&creative=9325&linkCode=as2&creativeASIN=B093QG73BV&linkId=e62cf29546caaac0872d37da42ede53f">
              <Image src={amazon} width={150} height={75}/>
            </a>
            </div>
            </div>
          </div>
          <div className={styles.card}>
            <h2>Redmi Airdots 3</h2>
            <Image alt="Airdots 3" src={airdots_3} width={300} height={300} />
            <div className={styles.divCard}>
            <div className={styles.cardzinho}>
            <a target="_blank" href="https://s.click.aliexpress.com/e/_98DmD6">
              <Image src={aliexpress} width={150} height={75}/>
            </a>
            </div>
            <div className={styles.cardzinho}>
            <a target="_blank" href="https://www.amazon.com.br/gp/product/B0982SBVP8/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=nedtech-20&creative=9325&linkCode=as2&creativeASIN=B0982SBVP8&linkId=b658ece8d5d5fdeb22d5d8047437656f">
              <Image src={amazon} width={150} height={75}/>
            </a>
            </div>
            </div>
          </div>
          {/* <div className={styles.card}>
            <h2>Mini Compressor Portátil</h2>
            <Image alt="Compressor Portatil" src={bomba} width={300} height={300} />
            <div className={styles.divCard}>
            <div className={styles.cardzinho}>
            <a target="_blank" href="https://pt.aliexpress.com/item/33029921995.html?spm=a2g01.12617084.fdpcl001.20.41abOKGeOKGeUA&pdp_ext_f=%7B%22sku_id%22:%2212000024055261266%22,%22ship_from%22:%22FR%22%7D&gps-id=5547572&scm=1007.19201.130907.0&scm_id=1007.19201.130907.0&scm-url=1007.19201.130907.0&pvid=61ed8edc-a37e-4499-b898-38a0b25110a4">
              <Image src={aliexpress} width={150} height={75}/>
            </a>
            </div>
            <div className={styles.cardzinho}>
            <a target="_blank" href="https://www.amazon.com.br/gp/product/B07TQT6YZN/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=nedtech-20&creative=9325&linkCode=as2&creativeASIN=B07TQT6YZN&linkId=a54106ed1d9079f6f94cfaaa4e8311cd">
              <Image src={amazon} width={150} height={75}/>
            </a>
            </div>
            </div>
          </div> */}
          <div className={styles.card}>
            <h2>Redmi Note 10</h2>
            <Image alt="Smartphone Redmi Note 10" src={redmi_note_10} width={300} height={300} />
            <div className={styles.divCard}>
            <div className={styles.cardzinho}>
            <a target="_blank" href="https://s.click.aliexpress.com/e/_AONCfQ">
              <Image src={aliexpress} width={150} height={75}/>
            </a>
            </div>
            <div className={styles.cardzinho}>
            <a target="_blank" href="https://www.amazon.com.br/gp/product/B09676KSYL/ref=as_li_tl?ie=UTF8&tag=nedtech-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B09676KSYL&linkId=1c6503171f7f49d9e2b39c265b0e5550">
              <Image src={amazon} width={150} height={75}/>
            </a>
            </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Amazfit GTS 2 mini</h2>
            <Image alt="Amazfit GTS mini" src={GTSmini} width={300} height={300} />
            <div className={styles.divCard}>
            <div className={styles.cardzinho}>
            <a target="_blank" href="https://s.click.aliexpress.com/e/_Abx0PO">
                <Image src={aliexpress} width={150} height={75}/>
            </a>
            </div>
            <div className={styles.cardzinho}>
            <a target="_blank" href="https://www.amazon.com.br/gp/product/B08PCYKXV5/ref=as_li_tl?ie=UTF8&tag=nedtech-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08PCYKXV5&linkId=84056112f5c5068bbf93baa44ced9702">
              <Image src={amazon} width={150} height={75}/>
            </a>
            </div>
            </div>
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
            href="https://www.instagram.com/ofertas.diarias._/"
          >
           {/* <Image src={instagram} width={30} height={30} /> */}
           Siga ofertas.diarias._
        </a>
        
      </footer>
    </div>
  )
}