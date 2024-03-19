import { Outlet } from "react-router-dom"
import { HomeMenu } from "../fe/components/menu.component"
import FooterComponent from "../fe/components/footer-component";

const HomePageLayout = () =>{
    
    return (<>

        <HomeMenu />

        <Outlet />

        <FooterComponent/>

    
    
    </>)
} 

export default HomePageLayout;