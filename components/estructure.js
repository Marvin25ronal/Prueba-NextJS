import Navigation from './navigation'
import Head from 'next/head'

const Estructure = () => {
    return (
        <div>
            <Head>
                <title>NextJs</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/flatly/bootstrap.min.css" integrity="sha384-mhpbKVUOPCSocLzx2ElRISIORFRwr1ZbO9bAlowgM5kO7hnpRBe+brVj8NNPUiFs" crossorigin="anonymous"/>
            </Head>
                <div>
                    <Navigation />
                </div>
        </div>
    )
}

export default Estructure