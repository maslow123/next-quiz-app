import Head from "next/head";

function Layout({ children, ...rest}) {
    return (        
        <div className="d-flex flex-column px-5 py-5 mx-auto h-100" {...rest}>
            <Head>
                <link href="../../../../public/fonts/BalooThambi2-Bold"/>
            </Head>
            <main className="container">
                {children}
            </main>
        </div>
    )
}

export default Layout;