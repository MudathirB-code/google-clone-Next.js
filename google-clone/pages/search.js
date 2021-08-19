import head from "next/head"
import Header from "../components/Header";
import {API_key , Context_key} from "../key" 
import Response from '../Response'
import { useRouter} from 'next/router'
import SearchResult from "../components/SearchResult";

function Search({results}) {
    const router = useRouter();
    //console.log(results)
    return (
        <div>
            <head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="/logo_1.png" />
            </head>
               <Header />
            <SearchResult results={results} /> 
        </div>
    )
}

export default Search


export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData? Response : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_key}&cx=${Context_key}&q=${context.query.term}&start=${startIndex}`).then((response) => response.json());
    
    // After the server has rendering... pass the result into the client
    return {
        props: {
            results: data,
        }
    }
}
