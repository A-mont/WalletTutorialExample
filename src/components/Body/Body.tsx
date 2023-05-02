import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import {Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Portfolio, Accounts,Addaccounts,Newaccounts } from "../../pages";



function Main() {

    return(
      <Router>
      <div>
      <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink fontWeight="bold" as={Link} to='/'>
      Accounts
    </BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink fontWeight="bold" as={Link} to='/portfolio'>
      Portfolio
    </BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
        <Routes>
          <Route path="/" element={<Accounts/>}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/newaccount" element={<Newaccounts />}/>
          <Route path="/addaccount" element={ <Addaccounts />}/>
        </Routes>
      </div>
    </Router>
  
     
      
    
    )
    
    }
    
    export {Main};