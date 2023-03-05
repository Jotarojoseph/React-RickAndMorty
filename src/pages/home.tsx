import { useEffect, useState } from "react";
import "../App.css";
import CardDesign from "../components/CardDesign";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { ClientService as srv } from "../service/ClientService";
import { Contain, StyledCounter } from './style';

export default function Home() {
    const [count, name] = useState([]);
    useEffect(() => {
        srv.then((e) => {
            name(e?.data?.results)
        })

    }, []);
    console.log(count);
    const users = count.map((data: any, id: any) => {
        return <div key={id}>
            <CardDesign
                name={data?.name}
                image={data?.image}
                gender={data?.gender}
                specie={data?.species}
                status={data?.status} />
        </div>
    })

    return (
        <Contain className="css-selector">
            <NavBar />
            <StyledCounter >
                {users}
            </StyledCounter>
            <Footer></Footer>
        </Contain>
    );


}
