import styles from "./Layout.module.css";
import Head from "next/head";

function Layout({ children }) {
    return (
        
        <div className="d-flex flex-column px-5 py-5 mx-auto pb-5">
        <Head>
            <link href="../../../../public/fonts/BalooThambi2-Bold"/>
        </Head>
            <main className="fit">
                {children}
            </main>
        </div>
    )
}

export default Layout;