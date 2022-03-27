import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className={styles.infoCommic}>
          <Row noGutters>
            <Col lg="4">
              <Image
                src="/ba-da-bacon.png"
                alt="Picture of the author"
                width={500}
                height={500}
                layout="responsive"
              />
            </Col>
            <Col className={styles.info}>
              <h1>BA-DA-BACON</h1>
              <div className={styles.title}>Sinopse</div>
              <div>Essa é a história de um cara chamado Gio Gianopoulos seguindo um mapa em busca de um Bacon Mágico. Um bacon tão delicioso e único que todo mundo quer encontrar. Pra conseguir, Gio vai ter que enfrentar chefs de cozinha, chapeiros descontrolados, cozinheiros falidos, motoqueiros selvagens, vendedores de trufa e capangas da indústria alimentícia. Tudo porque o pai dele não quer morrer comendo gelatina.</div>
              <div className={styles.title}>Criação</div>
              <div>Raoni Marqs</div>
              <div className={styles.title}>Roteiro</div>
              <div>Raoni Marqs</div>
              <div className={styles.title}>Arte</div>
              <div>Raoni Marqs</div>
            </Col>
          </Row>
        </Container>

      {/* <main className={styles.main}>
        
        <div className={styles.infoCommic}>
          <Image
          src="/ba-da-bacon.png"
          alt="Picture of the author"
          width={300}
          height={300}
        />
        </div>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}


