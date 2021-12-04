import type { NextPage } from "next"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import Image from "next/image"
import styles from "../../../styles/Status.module.css"
import Link from "next/link"
import React from "react"
const Status: NextPage = () => {

    const [ru, setRu]:[boolean, any] = React.useState(true)

    const data: { lang: string[]; } = {
        lang: ru ? ['Сертификат COVID-19', 'Действителен', 'Действует до: ', 'Дата рождения: ', 'Паспорт: ', 'Закрыть'] : ['COVID-19 certificate', 'Valid', 'Valid until: ', 'Date of birth: ', 'National passport: ', 'Close']
    }
    const {query} = useRouter()
    // {
    //     lang: "ru",
    //     name: "Л",
    //     lname: "М",
    //     fname: "А",
    //     date: "10.05.2001",
    //     pass: "40",
    //     pass2: "132"
    // }
    console.log(query)
    return (
        <>
            <Head>
                <title>
                    Портал государственных услуг Российской Федерации находится по адресу
                    gosuslugi.ru
                </title>
                <meta
                    name="description"
                    content="Портал государственных услуг Российской Федерации находится по адресу gosuslugi.ru"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.main}>
                <div className={styles.header}>
                    <Link href={"https://gosuslugi.ru"}>
                        <a className={styles.logo}>logo</a>
                    </Link>
                    <div className={styles.langWrap} onClick={()=>setRu(!ru)} >
                        <Image width={24} height={24} src={ru ? "/ru.svg" : "/en.svg"} alt="lang" />
                        <div>{ru ? "RUS" : "ENG"}</div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.contentCard}>
                        <div className={styles.cardText}>{data.lang[0]}</div>
                        <div className={styles.cardValid}>{data.lang[1]}</div>
                        <div className={styles.cardText}>№ 1000 1353 0413 6221</div>
                    </div>
                    <div className={styles.calendar}>
                        <Image
                            width={16}
                            height={16}
                            src={"/calendar.svg"}
                            alt="calendar"
                        />
                        <div className={styles.calendarText}>
                            {data.lang[2]}{query?.endDate || "23.10.2022"}
                        </div>
                    </div>
                </div>
                <div className={styles.dataWrap}>
                    <div>
                        {
                            `${query?.name || 'В'}****** ${query?.lname || 'Н'}***** ${query?.fname || 'П'}************`
                            // 'К******** Т****** В***********'
                        }
                    </div>
                    <div className={styles.dataCols}>
                        {data.lang[3]}<span className={styles.dataSpan}>{query?.date || "23.11.1989"}</span>
                    </div>
                    <div className={styles.dataCols}>
                        {data.lang[4]}<span className={styles.dataSpan}>{`${query?.pass || '40'}** ***${query?.pass2 || '328'}`}</span>
                    </div>
                </div>
                <Link href={"https://gosuslugi.ru"}>
                    <a className={styles.closeButton}>{data.lang[5]}</a>
                </Link>
            </div>
        </>
    )
}

export default Status
